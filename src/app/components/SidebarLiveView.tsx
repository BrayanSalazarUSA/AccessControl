import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Button,
} from "@mui/material";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { SlArrowLeft } from "react-icons/sl";
import {
  Fullscreen,
  AspectRatio,
  Dashboard,
  VisibilityOff,
  Settings,
  Videocam,
} from "@mui/icons-material";
import VideoStreamFrame from "./streams/VideoStreamFrame.js";
import { motion } from "framer-motion";
import { useDevice } from "../Hooks/useDevice.js";
import { useStateContext } from "../context/ContextProvider.js";

// Interfaz de Device (según tu definición)
export interface Device {
  id?: number;
  name: string;
  ipAddress: string;
  port: string;
  user: string;
  password: string;
  status?: "Active" | "Inactive";
  connectionType: string;
  channel: number;
  property: {
    id: number;
    name: string;
  };
}

// Interfaz para la cámara que usaremos en el sidebar
interface Camera {
  id: string;
  name: string;
  url: string;
}

// Variantes de animación para cada item del listado.
const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const SidebarLiveView: React.FC<{
  rightCollapsed: boolean;
  setRightCollapsed: (collapsed: boolean) => void;
}> = ({ rightCollapsed, setRightCollapsed }) => {
  // Estados para manejo del menú y vista en vivo.
  const [activeMenu, setActiveMenu] = useState(true);
  // Estado para controlar el panel de selección.
  const [selectionOpen, setSelectionOpen] = useState(false);
  // Estados para la configuración de cámaras en la vista en vivo.
  const [liveCameras, setLiveCameras] = useState<Camera[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [hiddenCameras, setHiddenCameras] = useState<string[]>([]);
  // Otros estados de vista.
  const [, setViewMode] = useState("grid");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [refetch, setRefetch] = useState<boolean>(false);

  const { propertySelectedContext } = useStateContext();
  const { devices, loading, error } = useDevice(
    propertySelectedContext?.id,
    refetch
  );

  // Función para formatear la URL de una cámara a partir de un device.
  // Se asignan de forma alterna dos channels ("1002" y "1402") de ejemplo.
  const formatDeviceToCamera = (device: Device): Camera => {
    // Si device.user o device.password son nulos, se asignan valores por defecto.
    const user = device.user || "innovatech";
    const password = device.password || "C0ntr0l1!";
    return {
      id: String(device.id),
      name: device.name,
      url: `rtsp://${user}:${password}@${device.ipAddress}:${device.port}/Streaming/Channels/${device.channel}`,
    };
  };

  // Cuando cambian los devices, filtramos aquellos que son cámaras (por ejemplo, que su nombre incluya "Camera")
  // y creamos la lista de cámaras formateadas.
  useEffect(() => {
    console.log(devices);
    if (devices && devices.length > 0) {
      const cameraDevices = devices/* .filter((d: Device) =>
        d.name.includes("Camera")
      ); */
      console.log(cameraDevices);
      // Asignamos channel de forma alternada: el primer dispositivo usa "1002", el segundo "1402", etc.
      const camerasData: Camera[] = cameraDevices.map((device, index) =>
        formatDeviceToCamera(device)
      );
      setLiveCameras(camerasData);
      setSelectedIds(camerasData.map((c) => c.id));
    }
  }, [devices, propertySelectedContext]);

  const handleToggleFullscreen = () => {
    setIsFullScreen(!isFullScreen);
    if (!isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleOpenNewWindow = () => {
    window.open(
      "http://admin:Innova3773@170.55.166.214:8091/ISAPI/Streaming/channels/102/httpPreview",
      "_blank"
    );
  };

  // Ajuste de grilla y ancho del sidebar según la cantidad de cámaras.
  const cameraCount = liveCameras.length;
  let gridTemplateColumns = "1fr";
  let sidebarWidth = "w-[700px]";

  if (cameraCount === 2) {
    gridTemplateColumns = "1fr";
    sidebarWidth = "w-[370px]";
  } else if (cameraCount === 3) {
    gridTemplateColumns = "1fr 1fr";
    sidebarWidth = "w-[700px]";
  } else if (cameraCount === 4) {
    gridTemplateColumns = "1fr 1fr";
  } else if (cameraCount > 4) {
    gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
  }

  // Función para actualizar la selección al confirmar el panel.
  const handleConfirmSelection = () => {
    // De las cámaras disponibles (obtenidas del backend) se filtra por las seleccionadas.
    const selectedCameras = liveCameras.filter((c) =>
      selectedIds.includes(c.id)
    );
    setLiveCameras(selectedCameras);
    setSelectionOpen(false);
  };

  // Toggle del checkbox en el panel de selección.
  const handleToggleSelection = (id: string) => {
    if (hiddenCameras.includes(id)) return;
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Función para ocultar una cámara en la vista en vivo.
  const handleHideCamera = (id: string) => {
    setLiveCameras(liveCameras.filter((camera) => camera.id !== id));
    setHiddenCameras([...hiddenCameras, id]);
    setSelectedIds(selectedIds.filter((item) => item !== id));
  };

  return (
    <div
      className={`h-full md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 transition-width duration-300 ${
        rightCollapsed ? "w-7" : sidebarWidth
      }`}
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center p-2">
            <Link
              to="/"
              onClick={() => setActiveMenu(false)}
              className="flex items-center gap-3 text-normal font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              {!rightCollapsed && (
                <HiOutlineStatusOnline className="text-green-500 animate-pulse text-lg" />
              )}
              {!rightCollapsed && <span>Live View</span>}
            </Link>
            {/* Ícono para abrir el panel de selección */}
            <IconButton onClick={() => setSelectionOpen(true)} size="small">
              <Settings fontSize="small" />
            </IconButton>
            {/* Botón para colapsar */}
            <button
              onClick={() => setRightCollapsed(!rightCollapsed)}
              className="text-white ml-auto mr-4"
            >
              {!rightCollapsed && "➖"}
            </button>
          </div>

          {/* Panel de selección de cámaras (Drawer que sale desde la derecha) */}
          <Drawer
            anchor="right"
            open={selectionOpen}
            onClose={() => setSelectionOpen(false)}
          >
            <Box
              sx={{
                width: 300,
                height: "100%",
                p: 2,
                backgroundColor: "#20232a",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
              >
                <IconButton sx={{ color: "#29ff65" }}>
                  <Videocam />
                </IconButton>
                <h3 style={{ margin: 0, fontWeight: 600 }}>
                  Selecciona cámaras
                </h3>
              </Box>
              <List>
                {liveCameras?.map((camera) => {
                  const isHidden = hiddenCameras.includes(camera.id);
                  const isChecked = selectedIds.includes(camera.id);
                  return (
                    <motion.div
                      key={camera.id}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={listItemVariants}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <ListItem
                        button
                        onClick={() => handleToggleSelection(camera.id)}
                        disabled={isHidden}
                        sx={{
                          borderRadius: 1,
                          mb: 1,
                          backgroundColor: isChecked
                            ? "rgba(41, 255, 101, 0.1)"
                            : "transparent",
                          "&:hover": {
                            backgroundColor: "rgba(41, 255, 101, 0.15)",
                          },
                        }}
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={isChecked}
                            tabIndex={-1}
                            disableRipple
                            onClick={() => handleToggleSelection(camera.id)}
                            disabled={isHidden}
                            sx={{
                              color: "#29ff65",
                              "&.Mui-checked": { color: "#29ff65" },
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={camera.name} />
                        <IconButton
                          disabled
                          sx={{ color: isHidden ? "#29ff65" : "#fff" }}
                        >
                          {isHidden ? <VisibilityOff /> : <Videocam />}
                        </IconButton>
                      </ListItem>
                    </motion.div>
                  );
                })}
              </List>
              <Button
                variant="contained"
                color="success"
                fullWidth
                onClick={handleConfirmSelection}
                sx={{
                  mt: "auto",
                  backgroundColor: "#29ff65",
                  ":hover": { backgroundColor: "#23d155" },
                }}
              >
                Confirmar
              </Button>
            </Box>
          </Drawer>

          <div className="mt-2">
            {!rightCollapsed ? (
              <Box
                display="grid"
                gridTemplateColumns={gridTemplateColumns}
                gap={2}
                width="100%"
                paddingX={1}
                paddingBottom={1}
              >
                {liveCameras?.map((camera) => (
                  <Box key={camera.id} position="relative">
                    <VideoStreamFrame videoUrl={camera.url} />
                    {/* Botón para ocultar la cámara */}
                    <IconButton
                      size="small"
                      onClick={() => handleHideCamera(camera.id)}
                      sx={{
                        position: "absolute",
                        top: 4,
                        right: 4,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        color: "#fff",
                        "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
                      }}
                    >
                      <VisibilityOff fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
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

          {/* Menú de botones debajo de la grilla de cámaras */}
          {!rightCollapsed && (
            <Box
              display="flex"
              width="100%"
              m="auto"
              justifyContent="space-around"
              bgcolor="rgba(0, 0, 0, 0.3)"
              borderRadius="20px"
              padding={1}
              marginBottom={2}
            >
              <IconButton size="small" onClick={handleToggleFullscreen}>
                <Fullscreen />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => setViewMode("aspectRatio")}
              >
                <AspectRatio />
              </IconButton>
              <IconButton size="small" onClick={handleOpenNewWindow}>
                <Dashboard />
              </IconButton>
            </Box>
          )}
        </>
      )}
    </div>
  );
};

export default SidebarLiveView;
