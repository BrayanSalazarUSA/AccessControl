// components/VisitorForm.tsx
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, Box, IconButton, SelectChangeEvent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import useVisitorService from "../../Hooks/useVisitorService";
import VideoStreamFrame from "../streams/VideoStreamFrame";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { useStateContext } from "../../context/ContextProvider";

import { ArrowOutward } from "@mui/icons-material";
import ArrivalTypeSelection from "./ArrivalTypeSelection";
import { VisitorDetailsForm } from "./VisitorDetailsForm";
import { MdFiberManualRecord } from "react-icons/md";
import { Apartment, Building, Property, Visitor } from "../../types/Interfaces";

interface VisitorFormProps {
  open: boolean;
  visitor: Visitor | null;
  onClose: () => void;
  onSave: (visitor: Visitor) => void;
  propertySelectedContext: Property;
  properties: Property[];
  refetch: boolean;
  setRefetch: Dispatch<SetStateAction<boolean>>;
}

const VisitorForm: React.FC<VisitorFormProps> = ({
  open,
  onClose,
  visitor,
  propertySelectedContext,
  properties,
  refetch,
  setRefetch,
}) => {
  const { submitVisitor } = useVisitorService();
  const { addImage, /* setImages */ images } = useStateContext();
  const [formData, setFormData] = useState<Visitor>({
    firstName: "",
    lastName: "",
    identification: 0,
    createdAt: new Date().toISOString().split("T")[0],
    property: {
      id: 0,
      name: "",
    },
    building: "",
    apartment: "",
    cars: [{ plate: "" }],
    type: "",
  });

  // URLs de los videos que deseas mostrar
  const videoUrl1 =
    "rtsp://innovatech:C0ntr0l1!@170.55.166.214:1033/Streaming/Channels/1002";
  const videoUrl2 =
    "rtsp://innovatech:C0ntr0l1!@170.55.166.214:1033/Streaming/Channels/1402";

  useEffect(() => {
    if (visitor) {
      setFormData(visitor);
    }
  }, [visitor]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === "carPlate") {
      console.log("value");
      console.log(value);
      setFormData({
        ...formData,
        cars: [
          {
            plate: value,
          },
        ],
      });
      console.log("formData");
      console.log(formData);
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setFormData({
      ...formData,
      property: propertySelectedContext,
      cars: [{ plate: formData.carPlates || "" }], // Usando solo el `plate`, como necesitas
    });

    console.log(formData);

    //Validar los campos antes de enviar
    if (!formData.building || !formData.apartment || !formData.property.id) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    //Enviar el formulario al backend
    const response = await submitVisitor(formData, images);
    if (response) {
      console.log("Visitor registrado:", response);
      // Aquí podrías hacer algo más, como cerrar el modal o limpiar el formulario
      onClose(); // Si hay una función onClose
    }

    setRefetch(!refetch);
  };

  const [step, setStep] = useState(1); // Paso actual del formulario (1 = selección de tipo, 2 = formulario dinámico)

  const onVisitorTypeSelect = (type: string) => {
    setFormData({ ...formData, type });
    setStep(2); // Avanza al segundo paso
  };

  const handleSelection = (
    building: Building | null,
    apartment: Apartment | null
  ) => {
    console.log(building);
    console.log(apartment);

    setFormData({
      ...formData,
      building: building?.name,
      apartment: apartment?.name,
    });

    console.log(formData);
  };

  //TODO:Implementar esta funcion
  /* const handleImageSelect = (index: number) => {
    const newImages = images.map((image, i) => ({
      ...images,
      selected: i === index,
    }));

    setImages(newImages);
    setFormData({ ...formData, photo: images[index].url });
  }; */

  // Estado local para manejar el valor seleccionado
  const [selectedPropertyId, setSelectedPropertyId] = useState<number | "">(
    propertySelectedContext?.id ?? ""
  );
  useEffect(() => {
    // Si hay un contexto de propiedad seleccionado, establecer el valor
    if (propertySelectedContext?.id > 0) {
      setSelectedPropertyId(propertySelectedContext.id);
    }
  }, [propertySelectedContext]);

  const handleChangeProperty = (event: SelectChangeEvent<number>) => {
    console.log("Cambio de propiedad");
    const selectedId = event.target.value as number;
    setSelectedPropertyId(selectedId);
    setFormData({
      ...formData,
      property: { id: selectedId, name: "Property" },
    });
  };

  //TODO: implementar este redimencionamineto
  /* const [isFullWidth, setIsFullWidth] = useState(false); // Estado para controlar el tamaño del modal
  const [isMinimized, setIsMinimized] = useState(false); // Estado para cambiar el icono
 */
  /* const handleToggleWidth = () => {
    setIsFullWidth(!isFullWidth);
    setIsMinimized(!isMinimized); // Cambia el estado para el ícono
  }; */

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg">
      <IconButton
        sx={{
          width: "30px",
          height: "30px",
          display: "flex",
          position: "absolute",
          right: 10,
          top: 10,
        }}
      >
        <ArrowOutward sx={{ fontSize: "17px", color: "green" }} />
      </IconButton>
      <Grid
        container
        spacing={0}
        paddingY={"30px"}
        paddingX={"20px"}
        sx={{
          backgroundColor: "#222222",
          backgroundSize: "cover", // Asegura que la imagen cubra todo el área del Box
          backgroundPosition: "center", // Centra la imagen
          height: "100vh", // Asegura que el Box ocupe toda la altura de la ventana
          width: "870px",
        }}
      >
        <Grid size={{ xs: 6, md: 6 }}>
          {step == 1 && (
            <ArrivalTypeSelection onVisitorTypeSelect={onVisitorTypeSelect} />
          )}

          {/* Usamos AnimatePresence para animaciones de entrada/salida */}
          <AnimatePresence>
            {step == 2 && formData.type === "visitor" && (
              <motion.div
                key="visitor-form" // key para asegurar que se renderice de nuevo cuando cambie el estado
                initial={{ opacity: 0, y: 20 }} // Comienza invisible y desplazado hacia abajo
                animate={{ opacity: 1, y: 0 }} // Se anima hacia arriba y se hace visible
                exit={{ opacity: 0, y: -20 }} // Se va desvaneciendo y desplazando hacia arriba
                transition={{ duration: 0.5 }} // Duración de la animación
              >
                <VisitorDetailsForm
                  handleChangeProperty={handleChangeProperty}
                  properties={properties}
                  selectedPropertyId={selectedPropertyId}
                  handleSelection={handleSelection}
                  formData={formData}
                  setFormData={setFormData}
                  handleChange={handleChange}
                  images={images}
                  handleSubmit={handleSubmit}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              paddingTop: "15px",
            }}
          >
            <IconButton
              onClick={() => setStep(1)}
              sx={{
                backgroundColor: step === 1 ? "#29ff65" : "gray", // Si el paso es 1, se pone verde
                padding: 0,
                borderRadius: "50%",
                width: 14,
                height: 14,
                "&:hover": {
                  backgroundColor: "#29ff65",
                },
              }}
            >
              <MdFiberManualRecord size={20} />
            </IconButton>
            <IconButton
              onClick={() => setStep(2)}
              sx={{
                backgroundColor: step === 2 ? "#29ff65" : "gray", // Si el paso es 2, se pone verde
                padding: 0,
                display: step === 1 ? "none" : "display",
                borderRadius: "50%",
                width: 14,
                height: 14,
                "&:hover": {
                  backgroundColor: "#29ff65",
                },
              }}
            >
              <MdFiberManualRecord size={20} />
            </IconButton>
          </Box>
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
          <Box sx={{ height: "auto", pl: "20px", mt: "-20px" }}>
            <div className="flex items-center gap-2">
              <div className="items-center gap-3 ml-3 mt-3 flex text-normal font-extrabold tracking-tight dark:text-white text-slate-900">
                <HiOutlineStatusOnline className="text-green-500 animate-pulse text-lg" />
                <span className="leading-5 ml-4">Live View</span>
              </div>
            </div>
            <Box
              display="flex"
              flexDirection={"column"}
              justifyContent="space-around"
              width="100%"
              height={"auto"}
              gap={1.5}
              px={3}
              pt={2}
            >
              {/* Usando VideoStream para la primera cámara */}
              <VideoStreamFrame videoUrl={videoUrl1} addImage={addImage} />
              {/* Usando VideoStream para la segunda cámara */}
              <VideoStreamFrame videoUrl={videoUrl2} addImage={addImage} />
              {/*         <VideoStreamFrame videoUrl={videoUrl2} addImage={addImage} videoId="camera2" /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default VisitorForm;
