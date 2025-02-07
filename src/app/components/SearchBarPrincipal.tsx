import { useState } from "react";
import {
  TextField,
  IconButton,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Modal,
  Box,
  InputAdornment,
  Grid2,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import axios from "axios";
import { AccessRecord, Property } from "../types/Interfaces";
import {
  Apartment,
  Cancel,
  CheckCircle,
  DirectionsCar,
  PermIdentity,
} from "@mui/icons-material";
import { motion } from "framer-motion";


const HOST_API = import.meta.env.VITE_HOST_API;

export const SearchBarPrincipal: React.FC = ({
  propertySelectedContext,
  properties,
}) => {
  const [open, setOpen] = useState(false);
  const [openfilter, setOpenfilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<AccessRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const rowsPerPage = 7;

  const [searchParams, setSearchParams] = useState({
    propertyId:0,
    carPlates: "",
    identification: "",
    type: "",
  });

  const [selectedPropertyId, setSelectedPropertyId] = useState<number>(
    propertySelectedContext?.id
  );

const handleChangeProperty = (event: SelectChangeEvent<number>) => {
    console.log("Cambio de propiedad");
    const selectedId = event.target.value as number;
    setSelectedPropertyId(selectedId);
    setSearchParams({
      ...searchParams,
      propertyId: selectedId,
    });
  };

  // Función para realizar la búsqueda en el backend
  const handleSearch = async () => {
    if (!searchTerm.trim()) return; // Evita buscar si el input está vacío

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${HOST_API}/access/search/keyword`, {
        params: { keyword: searchTerm },
      });
      setResults(response.data);
    } catch (err) {
      setError("Error fetching search results.");
    } finally {
      setLoading(false);
    }
  };

  // Función para búsqueda avanzada con filtros
  const handleSearchByParams = async () => {
    setLoading(true);
    setError(null);
setOpen(true)
    try {
      const response = await axios.get(`${HOST_API}/access/search`, {
        params: {
          propertyId: 3,
          carPlates: searchParams.carPlates || undefined,
          identification: searchParams.identification || undefined,
          type: searchParams.type || undefined,
        },
      });
      setResults(response.data);
    } catch (err) {
      setError("Error fetching search results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Barra de Búsqueda */}
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          alignItems: "center",
          p: "7px 8px",
          borderRadius: "24px",
          width: "100%",
          maxWidth: "450px",
          backgroundColor: "transparent",
        }}
      >
        {/* Icono de búsqueda */}
        <IconButton onClick={() => setOpen(true)}>
          <SearchIcon sx={{ color: "white" }} />
        </IconButton>

        {/* Barra de texto */}
        <TextField
          variant="standard"
          placeholder="Search visitor"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{ disableUnderline: true }}
          sx={{
            ml: 1,
            flex: 1,
            input: {
              padding: "8px",
              fontSize: "16px",
              color: "white",
            },
          }}
        />

        {/* Iconos adicionales */}
        <IconButton onClick={() => setOpenfilter(true)}>
          <FilterListIcon sx={{ color: "white" }} />
        </IconButton>
      </Paper>

      {/* Modal de búsqueda */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle
          sx={{
            background: "#20232a", // Fondo gris suave
            color: "gray", // Color del texto
            display: "flex",
            alignItems: "center", // Centrar el icono y el texto
            fontWeight: "bold",
            borderBottom: "3px solid #388E3C", // Línea verde debajo del título
            /*   marginBottom: 2, // Espacio debajo de la línea */
            justifyContent: "space-between",
          }}
        >
          {/* Motion para la animación */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: "flex" }}
          >
            {/* Icono */}
            <SearchIcon sx={{ color: "green", marginRight: 1, fontSize: 30 }} />
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Poppins', sans-serif", // Tipografía más moderna
                fontWeight: "600", // Negrita
                color: "white", // Color oscuro para el texto
                fontSize: "1.2rem", // Tamaño ajustado para hacerlo más visible
              }}
            >
              Search Results
            </Typography>
          </motion.div>

          {/* Título con tipografía más atractiva */}

          <TextField
            variant="outlined"
            label="Search visitor"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            sx={{ mt: 1, width: "300px" }}
          />
        </DialogTitle>
        <DialogContent sx={{ background: "#20232a" }}>
          {/* Indicador de carga */}
          {loading && (
            <div style={{ textAlign: "center", padding: "20px" }}>
              <CircularProgress />
            </div>
          )}

          {/* Mensaje de error */}
          {error && (
            <Typography
              color="error"
              variant="h6"
              style={{ textAlign: "center", padding: "20px" }}
            >
              {error}
            </Typography>
          )}

          {/* Tabla de resultados */}
          {!loading && !error && results.length > 0 && (
            <TableContainer component={Paper}>
              <Table size="small">
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
                      <strong>Property</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {results
                    .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                    .map((access, index) => (
                      <TableRow key={index}>
                        <TableCell>{access.visitor.carPlates}</TableCell>
                        <TableCell>{access.visitor.identification}</TableCell>
                        <TableCell>{access.visitor.type}</TableCell>
                        <TableCell>
                          {access.visitor.building}, Apt.{" "}
                          {access.visitor.apartment}
                        </TableCell>
                        <TableCell>
                          {new Date(access.accessTime).toLocaleString()}
                        </TableCell>
                        <TableCell>{access.visitor.property.name}</TableCell>
                      </TableRow>
                      
                    ))}
                </TableBody>
              </Table>

              {/* Paginación */}
              <TablePagination
                component="div"
                count={results.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(_event, newPage) => setPage(newPage)}
                rowsPerPageOptions={[rowsPerPage]}
              />
            </TableContainer>
          )}

          {/* Mensaje si no hay resultados */}
          {!loading && !error && results.length === 0 && (
            <Typography
              variant="h6"
              style={{ textAlign: "center", padding: "20px", color: "#888" }}
            >
              No results found.
            </Typography>
          )}
        </DialogContent>

        {/* Botones del modal */}

        <DialogActions
          sx={{
            background: "#20232a",
            color: "green",
            paddingY: "10px",
            paddingX: "25px",
          }}
        >
          {/* Botón de Cancelar */}
          <Button
            onClick={() => setOpen(false)}
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
            Cancel
          </Button>

          {/* Botón de Confirmar Selección */}
          <Button
            onClick={handleSearch}
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
            /* disabled={!selectedBuilding || !selectedApartment} */
            startIcon={<CheckCircle sx={{ fontSize: 20 }} />}
          >
            Search
          </Button>
        </DialogActions>
      </Dialog>

      <Modal
        open={openfilter}
        onClose={() => setOpenfilter(false)}
        className="overflow-y-scroll"
        aria-labelledby="modal-menu-title"
        aria-describedby="modal-menu-description"
      >
        <Box
          sx={{
            bgcolor: "#20232a",
            p: 4,
            width: 500,
            mx: "auto",
            my: "10%",
          }}
        >
          <h2>Filter Access</h2>

          {/* Input de búsqueda */}
          <Grid2 container spacing={2}>
            <Grid2 size={6}>
              <TextField
                name="identification"
                label="Identification"
                value={searchParams.identification}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    carPlates: e.target.value,
                  })
                }
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PermIdentity sx={{ color: "#9e9e9e" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiInputLabel-root": { color: "neutral.dark" },
                  "& .MuiInputBase-root": { color: "neutral.dark" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "neutral.light" },
                    "&:hover fieldset": { borderColor: "#29ff65" },
                  },
                }}
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                name="carPlates"
                label="Car Plate"
                value={searchParams.identification}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    identification: e.target.value,
                  })
                }
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DirectionsCar sx={{ color: "#9e9e9e" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiInputLabel-root": { color: "neutral.dark" },
                  "& .MuiInputBase-root": { color: "neutral.dark" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "neutral.light" },
                    "&:hover fieldset": { borderColor: "#29ff65" },
                  },
                }}
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                name="type"
                label="Type"
                value={searchParams.type}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, type: e.target.value })
                }
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": { color: "neutral.dark" },
                  "& .MuiInputBase-root": { color: "neutral.dark" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "neutral.light" },
                    "&:hover fieldset": { borderColor: "#29ff65" },
                  },
                }}
              />
            </Grid2>
            <Grid2 size={12}>
              <FormControl fullWidth>
                <InputLabel id="property-select-label">Property</InputLabel>
                <Select
                  labelId="property-select-label"
                  value={selectedPropertyId}
                 onChange={handleChangeProperty}
                  startAdornment={
                    <InputAdornment position="start">
                      <Apartment sx={{ color: "gray" }} />
                    </InputAdornment>
                  }
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "neutral.light" },
                      "&:hover fieldset": { borderColor: "#29ff65" },
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Select Property
                  </MenuItem>
                  {properties.map((property: Property) => (
                    <MenuItem key={property.id} value={property.id}>
                      {property.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid2>
          </Grid2>
          <DialogActions
            sx={{
              background: "#20232a",
              color: "green",
              paddingY: "10px",
              paddingX: "25px",
            }}
          >
            {/* Botón de Cancelar */}
            <Button
              onClick={() => setOpenfilter(false)}
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
              Cancel
            </Button>

            {/* Botón de Confirmar Selección */}
            <Button
              onClick={handleSearchByParams}
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
              /* disabled={!selectedBuilding || !selectedApartment} */
              startIcon={<CheckCircle sx={{ fontSize: 20 }} />}
            >
              Search
            </Button>
          </DialogActions>
        </Box>
      </Modal>
    </>
  );
};
