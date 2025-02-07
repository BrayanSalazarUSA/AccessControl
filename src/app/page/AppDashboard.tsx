const BUCKET_URL = import.meta.env.VITE_BUCKET_URL;

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  CircularProgress,
  Typography,
  IconButton,
  Button,
  Modal,
} from "@mui/material";

import useAccesses from "../Hooks/useAccesses";
import SidebarLiveView from "../components/SidebarLiveView";
import {
  CarCrash,
  Portrait,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import JobHeader from "../components/PageHeading";
import { useStateContext } from "../context/ContextProvider";
import { CheckIcon, PencilIcon } from "@heroicons/react/20/solid";
import VisitorForm from "../components/forms/VisitorForm";
import usePostVisitor from "../Hooks/usePostVisitor";
import { useFetchProperties } from "../Hooks/useProperties";
import { motion } from "framer-motion";
import SuccessModal from "../components/modals/SuccessModal";
import { Picture, Visitor } from "../types/Interfaces";

// Definición de la interfaz (por ejemplo, en un archivo types.ts)
export interface Camera {
  id: string;
  name: string;
  url: string;
}

// Array de URLs de ejemplo
/* const cameraUrls: string[] = [
  "rtsp://innovatech:C0ntr0l1!@170.55.166.214:1033/Streaming/Channels/1002",
  "rtsp://innovatech:C0ntr0l1!@170.55.166.214:1033/Streaming/Channels/1402",
  "rtsp://innovatech:C0ntr0l1!@170.55.166.214:1033/Streaming/Channels/1402"
]; */

// Transformamos el array de URLs en una lista de objetos Camera
/* const cameras: Camera[] = cameraUrls.map((url, index) => ({
  id: String(index + 1),              // Asigna un ID único (en este caso "1", "2", etc.)
  name: `Cámara ${index + 1}`,         // Nombre de la cámara
  url,                                // La URL proporcionada
})); */

export const AppDashboard = () => {
  const [imageTable, setImageTable] = useState<string[]>([]);

  const showPicture = (
    pictures: Picture[],
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    // Mostrar el modal y establecer la imagen
    console.log("pictures");
    console.log(pictures);
    console.log("BUCKET_URL");
    console.log(BUCKET_URL);
    const imageUrls = pictures.map((picture) => `${BUCKET_URL}${picture.url}`);
    setImageTable(imageUrls);

    setOpen(true);
  };

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedVisitor] = useState<Visitor | null>(null);

  const [, setOpenSuccessModal] = useState<boolean>(false); // Modal de éxito
  const [refetch, setRefetch] = useState<boolean>(false);
  const {
    propertySelectedContext,
    setPropertySelectedContext,
    rightCollapsed,
    setRightCollapsed,
  } = useStateContext();
  const {
    paginatedData,
    filteredData,
    error,
    loading,
    page,
    rowsPerPage,
    handleChangePage,
  } = useAccesses(propertySelectedContext.id, refetch);

  const { postVisitor } = usePostVisitor();
  const { properties } = useFetchProperties();
  // Hook para manejar la actualización de los datos cuando cambia el propertySelectedContext.id
  useEffect(() => {
    console.log("Property ID changed:", propertySelectedContext.id);
  }, [propertySelectedContext.id]); // Dependencia en el ID de la propiedad seleccionada

  const handleClose = () => setOpen(false);

  const handleSave = async (visitor: Visitor) => {
    try {
      await postVisitor(visitor);
      setOpenModal(false); // Cerrar el modal después de guardar
    } catch (err) {
      console.error(err);
    }
  };

  const hadleOpenVisitorForm = () => {
    setRightCollapsed(true);
    setOpenModal(true);
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageTable.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + imageTable.length) % imageTable.length
    );
  };
  const handleCloseSuccessModal = () => {
    setOpenSuccessModal(false); // Cerrar el modal de éxito
    setRefetch(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="image-modal"
        aria-describedby="image-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#f5f5f5", // Mejorar el color de fondo
            boxShadow: 24,
            padding: 3,
            width: "70%", // Aumentamos el tamaño del modal
            maxWidth: "700px", // Hacemos que el modal sea más ancho
            borderRadius: 2,
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          {/* Imagen con animación */}
          <motion.img
            key={imageTable[currentImageIndex]}
            src={imageTable[currentImageIndex]}
            alt="Imagen"
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Controles de navegación */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
            }}
          >
            <IconButton
              onClick={goToPreviousImage}
              sx={{
                backgroundColor: "#4caf50",
                color: "white",
                "&:hover": { backgroundColor: "#388e3c" },
              }}
            >
              <ArrowBackIos />
            </IconButton>
            <Typography variant="h6" sx={{ color: "#333", fontWeight: "bold" }}>
              {currentImageIndex + 1} de {imageTable.length}
            </Typography>
            <IconButton
              onClick={goToNextImage}
              sx={{
                backgroundColor: "#4caf50",
                color: "white",
                "&:hover": { backgroundColor: "#388e3c" },
              }}
            >
              <ArrowForwardIos />
            </IconButton>
          </Box>

          {/* Título y descripción */}
          <Typography
            id="image-modal-title"
            variant="h6"
            component="h2"
            sx={{ mt: 2, color: "#333", fontWeight: "bold" }}
          >
            Entrance Cameras Pictures
          </Typography>

          {/* Botón para descargar */}
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                const link = document.createElement("a");
                link.href = imageTable[currentImageIndex];
                link.download = `imagen_${currentImageIndex + 1}.jpg`;
                link.click();
              }}
              sx={{
                backgroundColor: "#4caf50",
                "&:hover": { backgroundColor: "#388e3c" },
              }}
            >
              Download Image
            </Button>
          </Box>
        </Box>
      </Modal>

      <div className="h-auto flex flex-row">
        <Box
          flex={1}
          p={2}
          ml={1}
          sx={{ transition: "margin-left 0.3s ease", ml: "10px" }}
        >
          <div className="flex items-center justify-between">
            <JobHeader
              jobTitle="Access Control"
              jobType={propertySelectedContext.name}
            />
            <div className="mt-5 flex lg:ml-4 lg:mt-0">
              <span className="ml-3 hidden sm:block">
                <button
                  type="button"
                  onClick={() => hadleOpenVisitorForm()}
                  className="card-hover-effect inline-flex items-center rounded-md bg-gradient-to-r from-[#29ff65] to-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-all duration-300 ease-in-out"
                >
                  <CarCrash
                    aria-hidden="true"
                    className="-ml-0.5 mr-1.5 text-white"
                  />
                  Give Access
                </button>
              </span>
              <span className="hidden sm:block ml-3">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md  px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <PencilIcon
                    aria-hidden="true"
                    className="-ml-0.5 mr-1.5 size-5 text-gray-400"
                  />
                  Property Info
                </button>
              </span>

              <span className="sm:ml-3">
                <button
                  onClick={() => {
                    setPropertySelectedContext({
                      ...propertySelectedContext,
                      id: 0,
                    });
                  }}
                  type="button"
                  className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <CheckIcon
                    aria-hidden="true"
                    className="-ml-0.5 mr-1.5 size-5"
                  />
                  All Info
                </button>
              </span>
            </div>
          </div>

          <TableContainer component={Paper}>
            {loading && (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <CircularProgress />
              </div>
            )}
            {error && (
              <Typography
                color="error"
                variant="h6"
                style={{ textAlign: "center", padding: "20px" }}
              >
                {error}
              </Typography>
            )}
            {!loading && !error && (
              <Table size="small" style={{ fontSize: "0.375rem" }}>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>Car</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Identification</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Type</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Destination</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Time</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Picture</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedData.map((access, index) => (
                    <TableRow key={index}>
                      <TableCell style={{ fontSize: "0.775rem" }}>
                        {access.visitor.carPlates}
                      </TableCell>
                      <TableCell style={{ fontSize: "0.775rem" }}>
                        {access.visitor.identification}
                      </TableCell>
                      {/*    <TableCell style={{ fontSize: "0.775rem" }}>
                        {`${access.visitor.firstName} ${access.visitor.lastName}`}
                      </TableCell> */}
                      <TableCell style={{ fontSize: "0.775rem" }}>
                        {`${access.visitor.type}`}
                      </TableCell>
                      <TableCell style={{ fontSize: "0.775rem" }}>
                        {`${access.visitor.building}, Apt. ${access.visitor.apartment}`}
                      </TableCell>
                      <TableCell style={{ fontSize: "0.775rem" }}>
                        {new Date(access.accessTime).toLocaleDateString() +
                          " " +
                          new Date(access.accessTime).getUTCHours() +
                          ":" +
                          new Date(access.accessTime).getMinutes()}
                      </TableCell>
                      <TableCell style={{ fontSize: "0.775rem" }}>
                        <IconButton
                          onClick={() => showPicture(access.pictures, setOpen)} // Aquí pasas la URL de la imagen
                          size="small"
                          sx={{
                            backgroundColor: "rgba(0, 0, 0, 0.4)", // Fondo oscuro semitransparente
                            color: "white",
                            borderRadius: "50%",
                          }}
                        >
                          <Portrait />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
            {/* Paginación */}
            <TablePagination
              component="div"
              count={filteredData.length} // Total de filas
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[rowsPerPage]} // Fijar a 7 por página
            />
          </TableContainer>
          {/*    <Button variant="contained" color="primary" onClick={fetchAccessData} style={{ marginTop: "20px" }}>
            Refrescar
          </Button> */}
        </Box>
        <SidebarLiveView
          rightCollapsed={rightCollapsed}
          setRightCollapsed={setRightCollapsed}
          /* camerasData={cameras} */
        />
        <VisitorForm
          open={openModal}
          visitor={selectedVisitor}
          onClose={() => setOpenModal(false)}
          onSave={handleSave}
          propertySelectedContext={propertySelectedContext}
          properties={properties}
          refetch={refetch}
          setRefetch={setRefetch}
        />

        <SuccessModal
          open={refetch}
          onClose={handleCloseSuccessModal}
          message={"Access Registered Successfully"}
        />
      </div>
    </>
  );
};
