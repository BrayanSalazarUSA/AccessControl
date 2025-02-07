const HOST_API = import.meta.env.VITE_HOST_API;

import React, { useRef, useState } from "react";
import { Box, IconButton, CircularProgress, Modal, Backdrop, Fade } from "@mui/material";
import ScreenshotIcon from "@mui/icons-material/Camera";
import MicIcon from "@mui/icons-material/Mic";
import ZoomOutMap from "@mui/icons-material/ZoomOutMap";

interface VideoStreamFrameProps {
  videoUrl: string; // URL del video
  addImage?: (imageUrl: string) => void;
}

const VideoStreamFrame: React.FC<VideoStreamFrameProps> = ({
  videoUrl,
  addImage,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [loading, setLoading] = useState(true); // Estado de carga para el video
  const [capturing, setCapturing] = useState(false); // Estado de carga para captura de imagen
  const [isFullscreen, setFullscreen] = useState(false);

  // Manejar la captura de la imagen
  const handleCaptureImage = async (videoUrl: string) => {
    setCapturing(true);
    try {
      const response = await fetch(
        `${HOST_API}/capture-image?rtspUrl=${encodeURIComponent(videoUrl)}`
      );

      if (response.ok) {
        const imageBlob = await response.blob();
        const imageUrl = URL.createObjectURL(imageBlob);
        addImage?.(imageUrl); // Agregar la imagen al contexto
        console.log(imageUrl);
        console.log(imageBlob);
      } else {
        console.error("Error al capturar la imagen");
      }
    } catch (error) {
      console.error("Error en la captura de la imagen", error);
    }
    setCapturing(false);
  };

  // Detectar cuándo el video ha comenzado a cargarse
  const handleVideoLoaded = () => {
    setLoading(false); // Detener el loader
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
      bgcolor="rgba(0, 0, 0, 0.3)"
      borderRadius={2}
      overflow="hidden"
      position="relative"
    >
      {/* Loader superpuesto al video */}
      {loading && (
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgcolor="rgba(0, 0, 0, 0.5)"
          zIndex={1}
        >
          <CircularProgress color="inherit" />
        </Box>
      )}

      {/* Video */}
      <video
        ref={videoRef}
        width="100%"
        height="100%" // Asegúrate de que ocupe toda la altura
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={handleVideoLoaded}
        style={{
          objectFit: "cover", // Recorta el video para llenar el contenedor
          height: "100%", // Ajusta la altura al contenedor padre
        }}
      >
        <source src={`${HOST_API}/live?rtspUrl=${videoUrl}`} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>

      {/* Controles del video */}
      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="rgba(0, 0, 0, 0.6)"
        zIndex={1}
      >
        {/* Botón para capturar la pantalla */}
        <IconButton
          color="primary"
          size="small"
          onClick={() => handleCaptureImage(videoUrl)}
          disabled={capturing} // Deshabilitar mientras captura
        >
          {capturing ? <CircularProgress size={20} /> : <ScreenshotIcon />}
        </IconButton>

        {/* Botón para micrófono */}
        <IconButton color="primary" size="small">
          <MicIcon />
        </IconButton>

        {/* Botón para ampliar la vista */}
        <IconButton
  color="primary"
  size="small"
  onClick={() => {
    const popupWindow = window.open(
      "",
      "VideoStreamFullScreen",
      "width=1920,height=1080,top=50,left=50,toolbar=no,menubar=no,resizable=yes,scrollbars=no,status=no"
    );

    if (popupWindow) {
      const popupDocument = popupWindow.document;
      popupDocument.open();
      popupDocument.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Video Stream</title>
          <style>
            body {
              margin: 0;
              background-color: black;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
              overflow: hidden;
            }
            video {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          </style>
        </head>
        <body>
          <video src="${HOST_API}/live?rtspUrl=${encodeURIComponent(videoUrl)}" autoplay controls muted loop></video>
        </body>
        </html>
      `);
      popupDocument.close();
      popupWindow.focus();
    }
  }}
>
  <ZoomOutMap />
</IconButton>

      </Box>

      <canvas ref={canvasRef} style={{ display: "none" }} />
      <Modal
  open={isFullscreen}
  onClose={() => setFullscreen(false)}
  closeAfterTransition
 
>
  <Fade in={isFullscreen}>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="black"
      width="100vw"
      height="100vh"
      position="relative"
    >
      <video
        src={`${HOST_API}/live?rtspUrl=${encodeURIComponent(videoUrl)}`}
        autoPlay
        muted
        loop
        controls
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
      <IconButton
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          color: "white",
        }}
        onClick={() => setFullscreen(false)}>
        X
      </IconButton>
    </Box>
  </Fade>
</Modal>

    </Box>
  );
};

export default VideoStreamFrame;
