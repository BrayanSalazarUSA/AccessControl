const HOST_API = import.meta.env.VITE_HOST_API;

import axios from "axios";
import { Visitor } from "../types/Interfaces";

export const fetchVisitors = async (propertyId: number): Promise<Visitor[]> => {
  const URL_BASE = HOST_API + "/visitors";

  try {
    const url =
      propertyId > 0 ? `${URL_BASE}?propertyId=${propertyId}` : `${URL_BASE}`; // Aquí decidimos si usamos el endpoint general o el de propiedad específica

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching visitors data", error);
    throw new Error("Error fetching visitors data");
  }
};
