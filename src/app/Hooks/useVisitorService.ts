const HOST_API = import.meta.env.VITE_HOST_API;

import { useState } from "react";
import axios from "axios";
import { AccessRecord, Visitor } from "../types/Interfaces";

const useVisitorService = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const submitVisitor = async (visitorData: Visitor, images: string[]) => {
    setLoading(true);
    setError(null);
    console.log(visitorData);
    try {
      // Crear un FormData para enviar las imágenes y el JSON
      const formData = new FormData();

      // Convertir cada URL Blob a un objeto Blob y añadirlo al FormData
      for (let i = 0; i < images.length; i++) {
        const imageUrl = images[i];

        // Obtener el Blob usando fetch
        const response = await fetch(imageUrl);
        const imageBlob = await response.blob(); // Convertir la URL Blob a un Blob

        // Añadir el Blob de la imagen al FormData
        formData.append("pictures", imageBlob, `image${i}.jpg`); // Cambia la extensión si es necesario
      }

      // Crear la estructura de AccessLog
      const accessLog: AccessRecord = {
        accessTime: new Date().toISOString(),
        visitor: visitorData, // El visitorData ya está tipado y se usa directamente
      };

      // Añadir el JSON de visitorData al FormData
      formData.append(
        "accessLog",
        new Blob([JSON.stringify(accessLog)], { type: "application/json" })
      );

      console.log(formData);

      // Hacer la solicitud POST
      const response = await axios.post(HOST_API + "/access", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Especificar que se está enviando un formulario multipart
        },
      });

      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError("Ocurrió un error al registrar el visitante.");
      console.error(error);
    }
  };

  return { submitVisitor, loading, error };
};

export default useVisitorService;
