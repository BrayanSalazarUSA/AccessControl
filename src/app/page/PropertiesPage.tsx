import { useEffect, useState } from "react";
import { useCreateProperty, useFetchProperties } from "../Hooks/useProperties";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Typography,
  Box,
  IconButton,
} from "@mui/material";

import { NavLink } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/20/solid";
import { MdDeleteSweep } from "react-icons/md";
import PropertyForm from "../components/forms/PropertyForm";
import SuccessModal from "../components/modals/SuccessModal";
import { BsBuildings } from "react-icons/bs";
import { deleteProperty, Property } from "../services/propertiesService";
import ErrorModal from "../components/modals/ErrorModal";
import { DeleteOutline, EditNote, MapRounded } from "@mui/icons-material";
import JobHeader from "../components/PageHeading";

const PropertiesPage = () => {
  const [refetch, setRefetch] = useState<boolean>(false); // Estado para forzar la actualización de propiedades
  const { properties, loading, error } = useFetchProperties(refetch); // Obtener propiedades
  const {
    addProperty,
  } = useCreateProperty(); // Hook para agregar propiedad

  const [openForm, setOpenForm] = useState<boolean>(false);
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false); // Modal de éxito
  const [, setNewProperty] = useState<Property>(); // Para guardar la propiedad recién añadida
  const [modalMessage, setModalMessage] = useState<string>(''); // Para manejar el mensaje del modal
  const [errorMessage, setErrorMessage] = useState<string>(''); // Mensaje del error
  const [openErrorModal, setOpenErrorModal] = useState<boolean>(false);

  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  const handleAddProperty = async (newProperty: Property) => {
    try {
      await addProperty(newProperty); // Llamar al hook para agregar la propiedad
      setNewProperty(newProperty); // Guardar la propiedad nueva para mostrarla en el modal
      setOpenForm(false); // Cerrar el formulario después de agregar la propiedad
      setModalMessage(`The property has been successfully added to the system.`); // Mensaje de éxito
      setOpenSuccessModal(true); // Mostrar el modal de éxito
      // Actualizar el estado para forzar el refresco de las propiedades
      setRefetch((prev) => !prev); // Cambiar refetch para que se active el useFetchProperties
    } catch (error) {
      console.error("Error al agregar propiedad:", error);
    }
  };
  // UseEffect para refrescar las propiedades cada vez que el estado "refetch" cambie
  useEffect(() => {
    if (refetch) {
      // Llamar nuevamente a useFetchProperties para obtener las propiedades actualizadas
      setRefetch(false); // Resetear el estado para evitar bucles infinitos
      console.log("Se refresco");
    }
  }, [refetch]);

  if (loading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <Typography color="error">{error}</Typography>
      </div>
    );
  }

  
  const handleDelete = async (propertyId: number) => {
    try {
      await deleteProperty(propertyId); // Llamamos al hook para eliminar la propiedad
     // setSelectedProperty(null); // Resetear la propiedad seleccionada después de eliminarla
      // Aquí podrías actualizar el estado para refrescar las propiedades (por ejemplo, usando setRefetch si lo necesitas)
      setRefetch((prev) => !prev); // Cambiar refetch para que se active el useFetchProperties
      setModalMessage(`The property has been successfully deleted.`); // Mensaje de éxito
      setOpenSuccessModal(true); // Mostrar el modal de éxito
    } catch (error) {
      console.error('Error al eliminar propiedad:', error);
      setErrorMessage('There was an error deleting the property. Please try again later.'); // Establece el mensaje de error
      setOpenErrorModal(true); // Muestra el modal de error
    }
  };

  const handleCloseSuccessModal = () => {
    setOpenSuccessModal(false); // Cerrar el modal de éxito
  };

  const handleCloseErrorModal = () => {
    setOpenErrorModal(false);
  };
  return (
    <div className="min-h-screen bg-main-dark-bg text-gray-400 p-8">
      {/* Modal con el formulario */}
      <PropertyForm
        openForm={openForm}
        onSubmit={handleAddProperty}
        onClose={handleCloseForm}
      />
      {/* Modal de éxito */}
      {/* Usar el SuccessModal */}
      <SuccessModal
        open={openSuccessModal}
        onClose={handleCloseSuccessModal}
        message={modalMessage}
      />
       {/* Modal de error */}
       <ErrorModal
        open={openErrorModal}
        onClose={handleCloseErrorModal}
        message={errorMessage}
      />
      <div className="flex items-center justify-between">
        <JobHeader
          jobTitle="Properties Management"
          jobType="Our Clientes"
          location="12"
          salaryRange="120K"
          closingDate="January 9, 2020"
        />
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          <span className="ml-3 hidden sm:block">
            <button
              onClick={handleOpenForm}
              type="button"
              className="inline-flex items-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <BsBuildings
                aria-hidden="true"
                className="-ml-0.5 mr-1.5 size-4 text-gray-100"
              />
              Add Property
            </button>
          </span>
          <span className="hidden sm:block ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md text-gray-100 px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-primary"
            >
              <PencilIcon
                aria-hidden="true"
                className="-ml-0.5 mr-1.5 size-5 text-gray-100"
              />
              Edit Property
            </button>
          </span>

          <span className="sm:ml-3">
            <button
              onClick={() => {}}
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold ring-gray-300 text-white shadow-sm hover:bg-red-600  border-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {/* <CheckBadgeIcon
                    aria-hidden="true"
                    className="-ml-0.5 mr-1.5 size-5"
                  /> */}
              <MdDeleteSweep
                aria-hidden="true"
                className="-ml-0.5 mr-1.5 size-5"
              />
              Delete
            </button>
          </span>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Imagen</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Dirección</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Código Postal</TableCell>
              <TableCell>Map</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {properties.map((property) => (
              <TableRow key={property.id}>
                <TableCell>{property.id}</TableCell>
                <TableCell>
                  <Box
                    component="img"
                    src={
                      "https://innova-bucket.s3.amazonaws.com/Properties/Landmark/Images/Landmark_Apt.png"
                    }
                    /*   alt={property.name} */
                    sx={{
                      width: 60,
                      height: 60,
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                </TableCell>
                <TableCell>{property.name}</TableCell>
                <TableCell>{property.address}</TableCell>
                <TableCell>{property.state}</TableCell>
                <TableCell>{property.zipCode}</TableCell>
                <TableCell>
                  <NavLink className="text-secondary" to={"Map"}>
                    <MapRounded />
                  </NavLink>
                </TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    sx={{
                      backgroundColor: "rgba(255, 0, 0, 0.4)", // Fondo oscuro semitransparente
                      color: "white",
                      borderRadius: "50%",
                    }}
                    onClick={() => handleDelete(property.id)}
                  >
                    <DeleteOutline />
                  </IconButton>

                  <IconButton
                    size="small"
                    sx={{
                      backgroundColor: "rgba(0, 255, 0, 0.4)", // Fondo oscuro semitransparente
                      color: "white",
                      borderRadius: "50%",
                      marginLeft: "5px",
                    }}
                  >
                    <EditNote />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PropertiesPage;
