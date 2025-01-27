import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";

// Importación de estilos globales
import "./styles/tailwind.css"; // Tailwind CSS
import "./styles/base.css"; // Reset y estilos base
import "./styles/animations.css"; // Animaciones personalizadas

import App from "./App.tsx";
import { ContextProvider } from "./app/context/ContextProvider.tsx";
import { createTheme } from "@mui/material";
 // Tema oscuro
 const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#fff",
      paper: "rgba(0,0,0,0,0)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
    <ContextProvider>
      <App />
    </ContextProvider>
    </ThemeProvider>
  </StrictMode>
);
