import axios from "axios";
import { Car } from "./visitorsService";

export interface Visitor {
  id?: number;
  firstName: string;
  lastName: string;
  identification: number;
  building: string;
  apartment: string;
  carPlates?: string;
  property: Property;
  createdAt: string;
  photo: string;
  cars: Car[];
}

export interface Property {
  id: number;
  name: string;
}

export interface AccessRecord {
  id: number;
  accessTime: string;
  visitor: Visitor;
}

const API_URL = "http://localhost:8080/api"; // Aquí va tu URL real

export const getRecentAccesses = async (
  propertyId: number
): Promise<AccessRecord[]> => {
  try {
    const url =
      propertyId > 0
        ? `${API_URL}/access?propertyId=${propertyId}`
        : `${API_URL}/access`; // Aquí decidimos si usamos el endpoint general o el de propiedad específica
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching access data", error);
    throw new Error("Error fetching access data");
  }
};
