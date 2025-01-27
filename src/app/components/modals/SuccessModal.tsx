// SuccessModal.tsx
import React from "react";
import { Modal, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

// Estilos del modal
const ModalBox = styled("div")({
  backgroundColor: "#2E2E2E", // Fondo gris
  padding: "20px",
  borderRadius: "10px",
  width: "400px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
  marginTop: "15vh",
});

const SuccessIcon = styled("div")({
  fontSize: "40px",
  marginBottom: "15px",
});

// Interfaz de props del modal
interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  message: string;
  title?: string;
  icon?: React.ReactNode;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  open,
  onClose,
  message,
  title = "Success!",
  icon = "✅", // Ícono por defecto
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalBox>
        <SuccessIcon>{icon}</SuccessIcon>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          {message}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#29ff65",
            color: "white",
            "&:hover": {
              backgroundColor: "#28e257", // Verde más oscuro al hacer hover
            },
          }}
          onClick={onClose}
        >
          Close
        </Button>
      </ModalBox>
    </Modal>
  );
};

export default SuccessModal;
