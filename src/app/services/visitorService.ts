// services/visitorService.ts
import axios from 'axios';
import { Visitor } from './accessService';

const URL_BASE = 'http://localhost:8080/api/visitors';

export const addVisitor = async (visitor: Visitor): Promise<Visitor> => {
  try {
    const response = await axios.put(`${URL_BASE}/asign-visitor`, visitor);
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error('Error al crear o editar el visitante');
  }
};
