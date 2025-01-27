import axios from "axios";
import { Property } from "./propertiesService";

export interface Car {
  id?: number;
  plate: string;
}

export interface Visitor {
  id?: number;
  firstName: string;
  lastName: string;
  identification: number;
  createdAt: string;
  photo: string;
  property: Property;
  cars?: Car[];
  building: string;
  apartment: string;
  carPlates?: string;
}

export const fetchVisitors = async (propertyId: number): Promise<Visitor[]> => {
  const URL_BASE = "http://localhost:8080/api/visitors";

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
