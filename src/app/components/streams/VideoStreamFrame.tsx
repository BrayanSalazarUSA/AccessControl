import React, { useRef, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ScreenshotIcon from '@mui/icons-material/Camera';
import MicIcon from '@mui/icons-material/Mic';
import ZoomOutMap from '@mui/icons-material/ZoomOutMap';
import axios from 'axios';

interface VideoStreamFrameProps {
  videoUrl: string; // URL del video
  videoId: string; // ID único para cada cámara (puede ser usado para diferenciar cada instancia)
}

const VideoStreamFrame: React.FC<VideoStreamFrameProps> = ({ videoUrl, videoId, addImage}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
 console.log(videoUrl)
 // Manejar la captura de la imagen
 const handleCaptureImage = async (videoUrl: string) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/api/capture-image?rtspUrl=${encodeURIComponent(videoUrl)}`);

      if (response.ok) {
        const imageBlob = await response.blob();
        console.log(imageBlob)
        const imageUrl = URL.createObjectURL(imageBlob);
        setImage(imageUrl)
        addImage(imageUrl); // Agregar la imagen al contexto
        console.log(imageUrl)
      } else {
        console.error('Error al capturar la imagen');
      }
    } catch (error) {
      console.error('Error en la captura de la imagen', error);
    }
    setLoading(false);
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
    >

      {/* Video */}
      <video ref={videoRef} width="100%" height="auto" autoPlay muted loop>
        <source src={`http://localhost:8080/api/live?rtspUrl=${videoUrl}`} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        {/* Botón para capturar la pantalla */}
        <IconButton color="primary" size="small" onClick={()=> handleCaptureImage(videoUrl)}>
          <ScreenshotIcon />
        </IconButton>

        {/* Botón para micrófono */}
        <IconButton color="primary" size="small">
          <MicIcon />
        </IconButton>

        {/* Botón para ampliar la vista */}
        <IconButton color="primary" size="small">
          <ZoomOutMap />
        </IconButton>
      </Box>

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </Box>
  );
};

export default VideoStreamFrame;
