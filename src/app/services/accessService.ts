const HOST_API = import.meta.env.VITE_HOST_API;
import axios from "axios";
import { AccessRecord } from "../types/Interfaces";

// Obtener accesos recientes
export const getRecentAccesses = async (propertyId: number): Promise<AccessRecord[]> => {
  try {
    const url = propertyId > 0
      ? `${HOST_API}/access?propertyId=${propertyId}`
      : `${HOST_API}/access`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching access data", error);
    throw new Error("Error fetching access data");
  }
};

// Buscar registros de acceso por filtros
export const searchAccessLogs = async (
  propertyId: number,
  accessTime?: string,
  apartment?: string,
  building?: string,
  plate?: string,
  type?: string
): Promise<AccessRecord[]> => {
  try {
    const params = new URLSearchParams({ propertyId: propertyId.toString() });
    if (accessTime) params.append("accessTime", accessTime);
    if (apartment) params.append("apartment", apartment);
    if (building) params.append("building", building);
    if (plate) params.append("plate", plate);
    if (type) params.append("type", type);

    const response = await axios.get(`${HOST_API}/access/search?${params.toString()}`);
    return response.data;
  } catch (error) {
    console.error("Error searching access logs", error);
    throw new Error("Error searching access logs");
  }
};

// Buscar registros de acceso por palabra clave
export const searchAccessLogsByKeyword = async (keyword: string): Promise<AccessRecord[]> => {
  try {
    const response = await axios.get(`${HOST_API}/access/search/keyword?keyword=${encodeURIComponent(keyword)}`);
    return response.data;
  } catch (error) {
    console.error("Error searching access logs by keyword", error);
    throw new Error("Error searching access logs by keyword");
  }
};
