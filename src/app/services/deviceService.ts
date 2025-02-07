import axios from "axios";
import { Property } from "../types/Interfaces";

const API_URL = "http://localhost:8080/api/device";

export interface Device {
  id?: number;
  name: string;
  ipAddress: string;
  port: string;
  user: string;
  password: string;
  status?: "Active" | "Inactive";
  connectionType: string;
  property: Property;
  channel?:number;
}

export const getDeviceById = async (id: number): Promise<Device[]> => {
  const response = await axios.get<Device[]>(`${API_URL}/findById/${id}`);
  return response.data;
};

export const addDevice = async (deviceData: Device) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deviceData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error adding device:", error);
  }
};