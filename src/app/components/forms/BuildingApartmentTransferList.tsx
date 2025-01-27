import React, { useState } from "react";
import {
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Apartment, Cancel, CheckCircle, Home } from "@mui/icons-material";
import { motion } from "framer-motion";
interface Building {
  id: number;
  name: string;
}

interface Apartment {
  id: number;
  name: string;
  buildingId: number;
}

interface BuildingApartmentTransferListProps {
  buildings: Building[];
  apartments: Apartment[];
  onSelection: (building: Building | null, apartment: Apartment | null) => void;
}

const BuildingApartmentTransferList: React.FC<
  BuildingApartmentTransferListProps
> = ({ buildings, apartments, onSelection }) => {
  const [open, setOpen] = useState(false);
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(
    null
  );
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(
    null
  );
  const [apartmentsForBuilding, setApartmentsForBuilding] = useState<
    Apartment[]
  >([]);

  // Abrir el modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Cerrar el modal
  const handleClose = () => {
    setOpen(false);
  };

  // Manejar la selección de un edificio
  const handleBuildingSelect = (building: Building) => {
    setSelectedBuilding(building);
    // Filtrar los apartamentos correspondientes al edificio seleccionado
    setApartmentsForBuilding(
      apartments.filter((apartment) => apartment.buildingId === building.id)
    );
  };

  // Manejar la selección de un apartamento
  const handleApartmentSelect = (apartment: Apartment) => {
    setSelectedApartment(apartment);
  };

  // Confirmar la selección
  const handleConfirmSelection = () => {
    onSelection(selectedBuilding, selectedApartment);
    handleClose();
  };

  return (
    <div>
      <button className="button" onClick={handleOpen}>
        <Home
          sx={{
            color: "green",
            fontSize: 20,
          }}
        />
        {selectedApartment
          ? `${selectedBuilding?.name}, APT ${selectedApartment?.name}`
          : "Destino"}
        <div className="arrow">› </div>
      </button>

      {/* Modal con las listas de edificios y apartamentos */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md" // Definir un ancho máximo para el modal
        fullWidth // Hace que el modal sea lo suficientemente grande
      >
        <DialogTitle
          sx={{
            background: "#f5f5f5", // Fondo gris suave
            color: "gray", // Color del texto
            display: "flex",
            alignItems: "center", // Centrar el icono y el texto
            padding: 2,
            fontWeight: "bold",
            borderBottom: "3px solid #388E3C", // Línea verde debajo del título
            marginBottom: 2, // Espacio debajo de la línea
          }}
        >
          {/* Motion para la animación */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Icono */}
            <Home sx={{ color: "green", marginRight: 1, fontSize: 30 }} />
          </motion.div>

          {/* Título con tipografía más atractiva */}
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Poppins', sans-serif", // Tipografía más moderna
              fontWeight: "600", // Negrita
              color: "#333", // Color oscuro para el texto
              fontSize: "1.2rem", // Tamaño ajustado para hacerlo más visible
            }}
          >
            Selecciona un Edificio y Apartamento
          </Typography>
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            background: "#f5f5f5",
            paddingX: 2,
            maxHeight: "60vh", // Limitar la altura máxima
            overflowY: "auto", // Habilitar scroll vertical
          }}
        >
          {/* Lista de Edificios */}
          <Box
            sx={{
              width: "49%",
              padding: 2,
              background: "#fff",
              borderRadius: 2,
              boxShadow: 3,
              overflowY: "auto", // Cambié scroll a auto para que solo aparezca cuando sea necesario
              "&::-webkit-scrollbar": {
                width: "8px", // Ancho de la barra de desplazamiento
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1", // Color del fondo de la barra de desplazamiento
                borderRadius: "10px", // Borde redondeado
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888", // Color de la barra de desplazamiento
                borderRadius: "10px", // Borde redondeado
                border: "3px solid #f1f1f1", // Borde para un efecto sutil
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#555", // Color de la barra cuando pasa el ratón
              },
            }}
          >
            <List
              subheader={
                <ListSubheader
                  sx={{ background: "#e0e0e0", fontWeight: "bold" }}
                >
                  Edificios
                </ListSubheader>
              }
            >
              <Grid container>
                {buildings.map((building) => (
                  <Grid item xs={4} key={building.id}>
                    <ListItem
                      key={building.id}
                      button
                      onClick={() => handleBuildingSelect(building)}
                      sx={{ height: "50px", padding: "4px 8px" }}
                    >
                      <ListItemIcon sx={{ minWidth: "auto" }}>
                        <Apartment
                          sx={{
                            color:
                              selectedBuilding?.id === building.id
                                ? "green"
                                : "gray",
                            fontSize: 20,
                          }}
                        />
                      </ListItemIcon>
                      <Checkbox
                        checked={selectedBuilding?.id === building.id}
                        onChange={() => handleBuildingSelect(building)}
                        sx={{
                          margin: 0,
                          color:
                            selectedBuilding?.id === building.id
                              ? "green"
                              : "gray",
                          "&.Mui-checked": {
                            color: "green",
                          },
                        }}
                      />
                      <ListItemText
                        sx={{ color: "gray" }}
                        primary={building.name}
                      />
                    </ListItem>
                  </Grid>
                ))}
              </Grid>
            </List>
          </Box>

          {/* Lista de Apartamentos */}
          <Box
            sx={{
              width: "49%",
              padding: 2,
              background: "#fff",
              borderRadius: 2,
              boxShadow: 3,
              overflowY: "auto", // Cambié scroll a auto para que solo aparezca cuando sea necesario
              "&::-webkit-scrollbar": {
                width: "8px", // Ancho de la barra de desplazamiento
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1", // Color del fondo de la barra de desplazamiento
                borderRadius: "10px", // Borde redondeado
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888", // Color de la barra de desplazamiento
                borderRadius: "10px", // Borde redondeado
                border: "3px solid #f1f1f1", // Borde para un efecto sutil
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#555", // Color de la barra cuando pasa el ratón
              },
            }}
          >
            <List
              subheader={
                <ListSubheader
                  sx={{ background: "#e0e0e0", fontWeight: "bold" }}
                >
                  Apartamentos
                </ListSubheader>
              }
            >
              <Grid container>
                {apartmentsForBuilding.map((apartment) => (
                  <Grid item xs={4} key={apartment.id}>
                    <ListItem
                      button
                      onClick={() => handleApartmentSelect(apartment)}
                      sx={{
                        padding: 1,
                        height: "50px",
                        backgroundColor:
                          selectedApartment?.id === apartment.id
                            ? "#e0f7fa"
                            : "#fff",
                        borderRadius: 1,
                        boxShadow:
                          selectedApartment?.id === apartment.id ? 2 : 0,
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: "auto" }}>
                        <Home
                          sx={{
                            color:
                              selectedApartment?.id === apartment.id
                                ? "green"
                                : "gray",
                            fontSize: 20,
                          }}
                        />
                      </ListItemIcon>
                      <Checkbox
                        checked={selectedApartment?.id === apartment.id}
                        onChange={() => handleApartmentSelect(apartment)}
                        sx={{
                          color:
                            selectedApartment?.id === apartment.id
                              ? "green"
                              : "gray",
                          "&.Mui-checked": {
                            color: "green",
                          },
                        }}
                      />
                      <ListItemText
                        sx={{ color: "gray" }}
                        primary={apartment.name}
                      />
                    </ListItem>
                  </Grid>
                ))}
              </Grid>
            </List>
          </Box>
        </DialogContent>

        <DialogActions
          sx={{
            background: "#f5f5f5",
            color: "green",
            paddingY: "10px",
            paddingX: "25px",
          }}
        >
          {/* Botón de Cancelar */}
          <Button
            onClick={handleClose}
            color="secondary"
            sx={{
              color: "#757575", // Gris para el texto y borde
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: "bold",
              padding: "10px 20px",
              border: "2px solid #757575", // Gris para el borde
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#bdbdbd", // Gris más oscuro para el hover
                color: "white",
                borderColor: "#bdbdbd", // Gris más oscuro para el borde al hacer hover
              },
              "&:active": {
                transform: "scale(0.98)", // Efecto de presionar
              },
            }}
            startIcon={<Cancel sx={{ fontSize: 20 }} />}
          >
            Cancelar
          </Button>

          {/* Botón de Confirmar Selección */}
          <Button
            onClick={handleConfirmSelection}
            sx={{
              backgroundColor: "#4CAF50", // Verde más equilibrado
              color: "white",
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: "bold",
              padding: "10px 20px",
              border: "2px solid #4CAF50",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#388E3C", // Verde más oscuro al hacer hover
                borderColor: "#388E3C",
              },
              "&:active": {
                transform: "scale(0.98)",
              },
            }}
            disabled={!selectedBuilding || !selectedApartment}
            startIcon={<CheckCircle sx={{ fontSize: 20 }} />}
          >
            Confirmar Selección
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BuildingApartmentTransferList;
