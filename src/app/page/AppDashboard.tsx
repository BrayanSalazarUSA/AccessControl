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
import { CarCrash, Portrait } from "@mui/icons-material";
import { useEffect, useState } from "react";
import JobHeader from "../components/PageHeading";
import { useStateContext } from "../context/ContextProvider";
import { CheckIcon, PencilIcon } from "@heroicons/react/20/solid";
import VisitorForm from "../components/forms/VisitorForm";
import usePostVisitor from "../Hooks/usePostVisitor";
import { Visitor } from "../services/accessService";
import { useFetchProperties } from "../Hooks/useProperties";

export const AppDashboard = () => {
  const showPicture = (
    url: string,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setImageUrl: React.Dispatch<React.SetStateAction<string>>
  ) => {
    // Mostrar el modal y establecer la imagen
    console.log(url);
    setImageUrl(url);
    setOpen(true);
  };

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedVisitor, setSelectedVisitor] = useState<Visitor | null>(null);

  const [imageUrl, setImageUrl] = useState<string>("");
  const { propertySelectedContext, setPropertySelectedContext, rightCollapsed, setRightCollapsed} = useStateContext();
  const {
    paginatedData,
    filteredData,
    error,
    loading,
    page,
    rowsPerPage,
    handleChangePage,
  } = useAccesses(propertySelectedContext.id);
  
  const { postVisitor } = usePostVisitor();
  const { properties} = useFetchProperties();
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
    setRightCollapsed(true)
    setOpenModal(true)
  }

  
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="image-modal"
        aria-describedby="image-modal-description">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "black",
            boxShadow: 24,
            padding: 2,
            width: "auto",
            maxWidth: 500,
            textAlign: "center",
          }}
        >
          <img
            src={imageUrl}
            alt="Person"
            style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
          />
          <Typography
            id="image-modal-title"
            variant="h6"
            component="h2"
            sx={{ mt: 2 }}
          >
            Acción sobre la imagen
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                const link = document.createElement("a");
                link.href = imageUrl;
                link.download = "imagen_persona.jpg"; // Nombre del archivo a descargar
                link.click();
              }}
            >
              Descargar Imagen
            </Button>
          </Box>
        </Box>
      </Modal>

      <div className="h-auto flex flex-row">
        <img className="w-24" src="http://170.55.166.214:8087/ISAPI/Streaming/channels/1002/picture" alt="imagen" />
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
                  className="inline-flex items-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <CarCrash
                    aria-hidden="true"
                    className="-ml-0.5 mr-1.5 size-4 text-gray-100"
                  />
                  Dar Acceso
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
                      <strong>Nombre</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Destino</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Ingreso</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Foto</strong>
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
                        {`${access.visitor.firstName} ${access.visitor.lastName}`}
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
                          onClick={() =>
                            showPicture(
                              access.visitor.photo,
                              setOpen,
                              setImageUrl
                            )
                          } // Aquí pasas la URL de la imagen
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
        <SidebarLiveView rightCollapsed={rightCollapsed} setRightCollapsed={setRightCollapsed}/>
        <VisitorForm
        open={openModal}
        visitor={selectedVisitor}
        onClose={() => setOpenModal(false)}
        onSave={handleSave}
        propertySelectedContext={propertySelectedContext}
        properties={properties}
        rightCollapsed={rightCollapsed} setRightCollapsed={setRightCollapsed}
      />
      </div>
    </>
  );
};
