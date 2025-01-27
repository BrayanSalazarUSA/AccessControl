import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider.js";
import { useState } from "react";

import { Box, IconButton } from "@mui/material";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { SlArrowLeft } from "react-icons/sl";
import { Fullscreen, AspectRatio, Dashboard } from "@mui/icons-material";
import VideoStreamFrame from "./streams/VideoStreamFrame.js";

const SidebarLiveView = ({rightCollapsed, setRightCollapsed}) => {
  const {
    activeMenu,
    setActiveMenu,
    screenSize,
  } = useStateContext();

  const handleCloseSideBar = () => {
    if ((activeMenu !== undefined && screenSize) || 900 <= 900) {
      setActiveMenu(false);
    }
  };

  const [, setViewMode] = useState("grid"); // "grid", "fullscreen", "aspectRatio", etc.
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleOpenNewWindow = () => {
    // Abrir nueva pestaña para un segundo monitor
    window.open(
      "http://admin:Innova3773@170.55.166.214:8091/ISAPI/Streaming/channels/102/httpPreview",
      "_blank"
    );
  };

  const handleChangeViewMode = (mode: string) => {
    setViewMode(mode);
    // Aquí puedes agregar lógicas adicionales para manejar cada vista de manera diferente
  };

  const handleToggleFullscreen = () => {
    setIsFullScreen(!isFullScreen);
    if (!isFullScreen) {
      // Hacer que el iframe ocupe toda la pantalla
      document.documentElement.requestFullscreen();
    } else {
      // Salir del modo de pantalla completa
      document.exitFullscreen();
    }
  };

  // URLs de los videos que deseas mostrar
  const videoUrl1 =
    "rtsp://admin:Innova3773!@170.55.166.214:554/ISAPI/Streaming/Channels/701";
  const videoUrl2 =
    "rtsp://admin:Innova3773!@170.55.166.214:554/ISAPI/Streaming/Channels/301";

  return (
    <div
      className={`h-full md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 transition-width duration-300 ${
        rightCollapsed ? "w-7" : "w-96"
      }`}
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-3 flex text-normal font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              {!rightCollapsed && (
                <div className="flex items-center gap-2">
                  <HiOutlineStatusOnline className="text-green-500 animate-pulse text-lg" />
                </div>
              )}
              {!rightCollapsed && <span className="leading-5">Live View</span>}
            </Link>
            {/* Botón para colapsar */}
            <button
              onClick={() => setRightCollapsed(!rightCollapsed)}
              className="text-white ml-auto mr-4"
            >
              {!rightCollapsed && "➖"}
            </button>
          </div>

          <div className="mt-">
            {!rightCollapsed ? (
              <Box
                display="flex"
                flexDirection={"column"}
                justifyContent="space-around"
                width="100%"
                height={"550px"}
                gap={1.5}
                px={2}
                pt={2}
              >
                {/* Usando VideoStream para la primera cámara */}
                <VideoStreamFrame videoUrl={videoUrl1} videoId="camera1" />

                {/* Usando VideoStream para la segunda cámara */}
                <VideoStreamFrame videoUrl={videoUrl2} videoId="camera2" />

                {/* Menú de botones debajo de la cámara */}
                <Box
                  display="flex"
                  width="100%"
                  m="auto"
                  justifyContent="space-around"
                  bgcolor="rgba(0, 0, 0, 0.3)"
                  borderRadius="20px"
                >
                  <IconButton size="small" onClick={handleToggleFullscreen}>
                    <Fullscreen />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => handleChangeViewMode("aspectRatio")}
                  >
                    <AspectRatio />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => handleOpenNewWindow()}
                  >
                    <Dashboard />
                  </IconButton>
                </Box>
              </Box>
            ) : (
              <button
                onClick={() => setRightCollapsed(!rightCollapsed)}
                className="text-white my-[40vh]"
              >
                <div className="flex items-center gap-2">
                  <SlArrowLeft className="text-green-500 animate-pulse text-lg" />
                </div>
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SidebarLiveView;
