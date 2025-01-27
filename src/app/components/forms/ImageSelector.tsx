import React, { useState } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { CheckCircle, AddPhotoAlternate } from "@mui/icons-material";

interface ImageSelectorProps {
  images: string[];
  /* onSelect: (imageUrl: string) => void; */
}

const ImageSelector: React.FC<ImageSelectorProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageSelect = (imageUrl: string) => {
    setSelectedImage(imageUrl);
/*     onSelect(imageUrl); */
  };

  return (
    <Box sx={{ textAlign: "center", marginTop: "20px" }}>
      {images.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80px", // Altura ajustada para que no esté tan alto
            borderRadius: "8px",
            marginTop: "20px",
            border: "1px dashed #cccccc", // Líneas punteadas
            flexDirection: "column", // Elementos en columna
            gap: "15px", // Espacio entre los íconos
            padding: "20px",
          }}
        >
          {/* Tres íconos */}
          <Box sx={{ display: "flex", gap: "15px" }}>
            <Tooltip title="Cargar una foto" arrow>
              <IconButton sx={{ color: "gray" }}>
                <AddPhotoAlternate fontSize="large" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Seleccionar imagen" arrow>
              <IconButton sx={{ color: "gray" }}>
                <AddPhotoAlternate fontSize="large" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Tomar foto" arrow>
              <IconButton sx={{ color: "gray" }}>
                <AddPhotoAlternate fontSize="large" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      ) : (
        <Box sx={{ marginTop: "20px" }}>
          {images.length <= 4 ? (
            <Box
              sx={{
                display: "flex",
                overflowX: "auto",
                padding: "10px",
                borderRadius: "8px",
                border: "1px dashed gray",
              }}
            >
              {images.map((imageUrl, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    marginRight: "10px",
                    cursor: "pointer",
                    border:
                      selectedImage === imageUrl ? "3px solid #4caf50" : "none",
                    borderRadius: "8px",
                    "&:hover": {
                      opacity: 0.8,
                    },
                  }}
                  onClick={() => handleImageSelect(imageUrl)}
                >
                  <img
                    src={imageUrl}
                    alt={`Imagen Capturada ${index}`}
                    style={{
                      width: "150px",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                  {selectedImage === imageUrl && (
                    <CheckCircle
                      sx={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        color: "#4caf50",
                        fontSize: "30px",
                      }}
                    />
                  )}
                </Box>
              ))}
            </Box>
          ) : (
            <Box
            >
              {images.map((imageUrl, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    cursor: "pointer",
                    border:
                      selectedImage === imageUrl ? "3px solid #4caf50" : "none",
                    borderRadius: "8px",
                    "&:hover": {
                      opacity: 0.8,
                    },
                  }}
                  onClick={() => handleImageSelect(imageUrl)}
                >
                  <img
                    src={imageUrl}
                    alt={`Imagen Capturada ${index}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                  {selectedImage === imageUrl && (
                    <CheckCircle
                      sx={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        color: "#4caf50",
                        fontSize: "30px",
                      }}
                    />
                  )}
                </Box>
              ))}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ImageSelector;
