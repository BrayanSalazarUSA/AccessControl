// components/VisitorDetailsForm.tsx
import React, { Dispatch, SetStateAction } from "react";
import {
  TextField,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  SelectChangeEvent,
} from "@mui/material";
import ImageSelector from "./ImageSelector";
import { Apartment, DirectionsCar, PermIdentity } from "@mui/icons-material";
import BuildingApartmentTransferList from "./BuildingApartmentTransferList";
import Grid from "@mui/material/Grid2";
import { MdImage, MdPerson } from "react-icons/md";
import { motion } from "framer-motion";
import { OpenGateButton } from "../OpenGateButton";
import { Apartment as ApartmentInterface, Building, Property, Visitor } from "../../types/Interfaces";

const buildings = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
  { id: 4, name: "D" },
  { id: 5, name: "E" },
  { id: 6, name: "F" },
  { id: 7, name: "G" },
  { id: 8, name: "H" },
];

const apartments = [
  { id: 1, name: "101", buildingId: 1 },
  { id: 2, name: "102", buildingId: 1 },
  { id: 3, name: "103", buildingId: 1 },
  { id: 4, name: "104", buildingId: 1 },
  { id: 5, name: "105", buildingId: 1 },
  { id: 6, name: "106", buildingId: 1 },
  { id: 7, name: "107", buildingId: 1 },
  { id: 8, name: "201", buildingId: 1 },
  { id: 9, name: "202", buildingId: 1 },
  { id: 10, name: "203", buildingId: 1 },
  { id: 11, name: "204", buildingId: 1 },
  { id: 12, name: "205", buildingId: 1 },
  { id: 13, name: "206", buildingId: 1 },
  { id: 14, name: "207", buildingId: 1 },
  { id: 15, name: "301", buildingId: 1 },
  { id: 16, name: "302", buildingId: 1 },
  { id: 17, name: "303", buildingId: 1 },
  { id: 18, name: "304", buildingId: 1 },
  { id: 19, name: "305", buildingId: 1 },
  { id: 20, name: "306", buildingId: 1 },
  { id: 21, name: "307", buildingId: 1 },
  { id: 22, name: "401", buildingId: 2 },
  { id: 23, name: "402", buildingId: 2 },
  { id: 24, name: "403", buildingId: 2 },
  { id: 25, name: "404", buildingId: 2 },
  { id: 26, name: "405", buildingId: 2 },
  { id: 27, name: "406", buildingId: 2 },
  { id: 28, name: "407", buildingId: 2 },
  { id: 29, name: "501", buildingId: 2 },
  { id: 30, name: "502", buildingId: 2 },
  { id: 31, name: "503", buildingId: 2 },
  { id: 32, name: "504", buildingId: 2 },
  { id: 33, name: "505", buildingId: 2 },
  { id: 34, name: "506", buildingId: 2 },
  { id: 35, name: "507", buildingId: 2 },
  { id: 36, name: "601", buildingId: 3 },
  { id: 37, name: "602", buildingId: 3 },
  { id: 38, name: "603", buildingId: 3 },
  { id: 39, name: "604", buildingId: 3 },
  { id: 40, name: "605", buildingId: 3 },
  { id: 41, name: "606", buildingId: 3 },
  { id: 42, name: "607", buildingId: 3 },
  { id: 43, name: "701", buildingId: 3 },
  { id: 44, name: "702", buildingId: 3 },
  { id: 45, name: "703", buildingId: 3 },
  { id: 46, name: "704", buildingId: 3 },
  { id: 47, name: "705", buildingId: 3 },
  { id: 48, name: "706", buildingId: 3 },
  { id: 49, name: "707", buildingId: 2 },
  { id: 50, name: "801", buildingId: 2 },
  { id: 51, name: "802", buildingId: 2 },
  { id: 52, name: "803", buildingId: 2 },
  { id: 53, name: "804", buildingId: 2 },
  { id: 54, name: "805", buildingId: 2 },
  { id: 55, name: "806", buildingId: 2 },
  { id: 56, name: "807", buildingId: 2 },
  { id: 57, name: "901", buildingId: 4 },
  { id: 58, name: "902", buildingId: 4 },
  { id: 59, name: "903", buildingId: 4 },
  { id: 60, name: "904", buildingId: 4 },
  { id: 61, name: "905", buildingId: 4 },
  { id: 62, name: "906", buildingId: 4 },
  { id: 63, name: "907", buildingId: 1 },
  { id: 64, name: "1001", buildingId: 1 },
  { id: 65, name: "1002", buildingId: 1 },
  { id: 66, name: "1003", buildingId: 2 },
  { id: 67, name: "1004", buildingId: 2 },
  { id: 68, name: "1005", buildingId: 2 },
  { id: 69, name: "1006", buildingId: 2 },
  { id: 70, name: "1007", buildingId: 2 },
];

interface VisitorDetailsFormprops {
  handleChangeProperty: (event:  SelectChangeEvent<number>) => void;
  properties: Property[];
  selectedPropertyId?: number | "";
  handleSelection: (building: Building | null, apartment: ApartmentInterface | null) => void;
  formData: Visitor;
  setFormData: Dispatch<SetStateAction<Visitor>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  images: string[]; // Suponiendo que `images` es un array de URLs o base64
  handleSubmit: () => Promise<void>;
}

export const VisitorDetailsForm: React.FC<VisitorDetailsFormprops> = ({
  handleChangeProperty,
  selectedPropertyId,
  properties,
  handleSelection,
  handleChange,
  formData,
  images,
  handleSubmit,
}) => {
  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: "16px",
        boxShadow: 3,
        margin: "auto",
        background: "transparent",
        "& .MuiTextField-root": {
          marginBottom: 2,
        },
      }}
    >
      {/* Título con íconos */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 1,
          paddingBottom: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              marginRight: 1,
            }}
          >
            <MdPerson size={24} color="#29ff65" />
          </Typography>
        </motion.div>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "lightgray" }}
        >
          Access Form
        </Typography>
      </Box>

      {/* Campos Property & Building*/}
      <Grid container spacing={2}>
        <Grid size={6}>
          <FormControl fullWidth sx={{ margin: "0" }}>
            <InputLabel
              id="property-select-label"
              sx={{
                color: selectedPropertyId === "" ? "gray" : "neutral.dark", // Color del label si está vacío
                transition: "color 0.3s ease", // Transición para el cambio de color
              }}
            >
              Property
            </InputLabel>
            <Select
              labelId="property-select-label"
              value={selectedPropertyId}
              onChange={handleChangeProperty}
              label="Property"
              sx={{
                "& .MuiInputLabel-root": { color: "neutral.dark" },
                "& .MuiInputBase-root": { color: "neutral.dark" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "neutral.light",
                  },
                  "&:hover fieldset": {
                    borderColor: "#29ff65",
                  },
                },
              }}
              startAdornment={
                <InputAdornment position="start">
                  <Apartment sx={{ color: "gray" }} />
                </InputAdornment>
              }
            >
              {/* Placeholder */}
              <MenuItem value="" disabled sx={{ color: "gray" }}>
                Select Property
              </MenuItem>

              {/* Otras opciones */}
              {properties.map((property: Property) => (
                <MenuItem
                  key={property.id}
                  sx={{
                    backgroundColor: "gray", // Color de fondo inicial
                    "&:hover": {
                      backgroundColor: "#29ff65", // Fondo verde al pasar el mouse
                      transition: "background-color 0.3s ease", // Animación suave para el cambio de fondo
                    },
                  }}
                  value={property.id}
                >
                  {property.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={6}>
          <BuildingApartmentTransferList
            buildings={buildings}
            apartments={apartments}
            onSelection={handleSelection}
          />
        </Grid>
      </Grid>
      <FormControl fullWidth sx={{ margin: "0", marginTop: 3 }}></FormControl>

      {/* Campos Apartment & Car plate*/}
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "20px",
        }}
      >
        <Grid size={6}>
          <TextField
            name="identification"
            label="Identification"
            value={formData.identification}
            onChange={handleChange}
            fullWidth
            margin="none"
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
                "& fieldset": {
                  borderColor: "neutral.light",
                },
                "&:hover fieldset": {
                  borderColor: "#29ff65",
                },
              },
            }}
          />
        </Grid>
        <Grid size={6}>
          <TextField
            name="carPlate"
            label="Car Plate"
            value={formData.carPlates}
            onChange={handleChange}
            fullWidth
            margin="none"
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
                "& fieldset": {
                  borderColor: "neutral.light", // Color del borde por defecto
                },
                "&:hover fieldset": {
                  borderColor: "#29ff65", // Fondo verde al pasar el mouse
                },
                "&.Mui-focused fieldset": {
                  borderColor: "neutral.light", // Mantener el borde en color neutral cuando esté enfocado
                },
              },
              "& .MuiInputBase-input": {
                // Eliminar el sombreado azul del autocompletado y hacer que sea gris
                "&:-webkit-autofill": {
                  "-webkit-box-shadow": "0 0 0 100px #222222 inset", // Sombra gris en lugar de azul
                  "-webkit-text-fill-color": "white",
                },
              },
              "& .MuiInputBase-root.Mui-focused": {
                color: "neutral.dark",
              },
            }}
          />
        </Grid>
      </Grid>

      {/* Selector de Imagen */}
      <div className="w-full" style={{ marginTop: "5px" }}>
        <label
          style={{
            color: "#1A5B30",
            fontWeight: "bold",
            display: "flex",
          }}
        >
          <MdImage
            size={20}
            style={{ marginRight: "8px", verticalAlign: "middle" }}
          />
          <span>Pictures</span>
        </label>
        <ImageSelector images={images} />
      </div>

      {/* Botón Enviar */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <OpenGateButton handleSubmit={handleSubmit} />
      </motion.div>
    </Box>
  );
};
