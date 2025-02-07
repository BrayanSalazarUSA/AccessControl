// services/visitorService.ts
const HOST_API = import.meta.env.VITE_HOST_API;

import axios from 'axios';
import { Visitor } from '../types/Interfaces';

export const addVisitor = async (visitor: Visitor): Promise<Visitor> => {
  try {
    const response = await axios.put(`${HOST_API}/visitor/asign-visitor`, visitor);
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error('Error al crear o editar el visitante');
  }
};
