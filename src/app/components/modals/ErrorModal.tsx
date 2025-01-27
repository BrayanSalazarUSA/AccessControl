// ErrorModal.tsx
import React from 'react';
import { Modal, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const ModalBox = styled('div')({
  backgroundColor: '#2E2E2E',
  padding: '20px',
  borderRadius: '10px',
  width: '400px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin:"auto",
  marginTop:"15vh"
});

const ErrorIcon = styled('div')({
  fontSize: '40px',
  marginBottom: '15px',
  color: '#ff3b30', // Color rojo para indicar error
});

interface ErrorModalProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  open,
  onClose,
  message,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalBox>
        <ErrorIcon>
          <span role="img" aria-label="error">
            ❌
          </span>
        </ErrorIcon>
        <Typography variant="h6" sx={{ marginBottom: 2, color: '#ff3b30' }}>
          Oops! Something went wrong
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          {message}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#ff3b30',
            color: 'white',
            '&:hover': {
              backgroundColor: '#e12c21', // Rojo más oscuro al hacer hover
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

export default ErrorModal;
