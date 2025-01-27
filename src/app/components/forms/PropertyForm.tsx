import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Dialog,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/system";
import { Property } from "../../services/propertiesService";

// Contenedor del modal
const ModalBox = styled(Box)({
  backgroundColor: "#2E2E2E", // Fondo gris
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  color: "white",
});

// Botón de envío
const SubmitButton = styled(Button)({
  backgroundColor: "#29ff65", // Verde
  color: "white",
  "&:hover": {
    backgroundColor: "#28e257", // Verde más oscuro al hacer hover
  },
});

interface PropertyFormProps {
  onSubmit: (newProperty: Property) => void;
  onClose: () => void;
  openForm: boolean;
}

const PropertyForm: React.FC<PropertyFormProps> = ({ onSubmit, onClose, openForm }) => {
  const [newProperty, setNewProperty] = useState<Property>({
    id: 0, // Este id puede ser manejado por el backend si es autogenerado
    name: "",
    address: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProperty((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(newProperty); // Llama a onSubmit que viene de `PropertiesPage` (para agregar la propiedad)
  };

  return (
    <Dialog open={openForm} onClose={onClose} maxWidth="lg">
      <ModalBox>
        <Typography variant="h6" gutterBottom>
          Edit Property Details
        </Typography>
        <form>
          <Grid
            container
            spacing={2}
            paddingY={"30px"}
            paddingX={"20px"}
            sx={{
              backgroundColor: "#222222",
              backgroundSize: "cover", // Asegura que la imagen cubra todo el área del Box
              backgroundPosition: "center", // Centra la imagen
              height: "330px", // Asegura que el Box ocupe toda la altura de la ventana
              width: "870px",
            }}
          >
            <Grid size={{ xs: 6, md: 6 }}>
              <TextField
                label="Property Name"
                name="name"
                variant="outlined"
                fullWidth
                value={newProperty.name}
                onChange={handleChange}
                sx={{
                  backgroundColor: "#333",
                  borderRadius: "5px",
                  "& .MuiInputLabel-root": {
                    color: "#fff",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "#29ff65",
                    },
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 6, md: 6 }}>
              <TextField
                label="Address"
                name="address"
                variant="outlined"
                fullWidth
                value={newProperty.address}
                onChange={handleChange}
                sx={{
                  backgroundColor: "#333",
                  borderRadius: "5px",
                  "& .MuiInputLabel-root": {
                    color: "#fff",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "#29ff65",
                    },
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 6, md: 6 }}>
              <TextField
                label="State"
                name="state"
                variant="outlined"
                fullWidth
                value={newProperty.state}
                onChange={handleChange}
                sx={{
                  backgroundColor: "#333",
                  borderRadius: "5px",
                  "& .MuiInputLabel-root": {
                    color: "#fff",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "#29ff65",
                    },
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 6, md: 6 }}>
              <TextField
                label="Zip Code"
                name="zipCode"
                variant="outlined"
                fullWidth
                value={newProperty.zipCode}
                onChange={handleChange}
                sx={{
                  backgroundColor: "#333",
                  borderRadius: "5px",
                  "& .MuiInputLabel-root": {
                    color: "#fff",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "#29ff65",
                    },
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 6, md: 6 }}>
              <SubmitButton fullWidth onClick={handleSubmit}>
                Save Changes
              </SubmitButton>
            </Grid>
          </Grid>
        </form>
      </ModalBox>
    </Dialog>
  );
};

export default PropertyForm;
