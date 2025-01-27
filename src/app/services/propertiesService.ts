// Tipado de la propiedad
export interface Property {
  id: number;
  name: string;
  address: string;
  state: string;
  zipCode: string;
}

// Función para obtener las propiedades
export const fetchProperties = async (): Promise<Property[]> => {
  try {
    const response = await fetch('http://localhost:8080/api/properties');
    if (!response.ok) {
      throw new Error('Error al obtener las propiedades');
    }
    const data: Property[] = await response.json();
    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Error desconocido');
  }
};

// Función para crear una nueva propiedad
export const createProperty = async (propertyData: Property): Promise<Property> => {
  try {
    const response = await fetch('http://localhost:8080/api/properties', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(propertyData),
    });

    if (!response.ok) {
      throw new Error('Error al crear la propiedad');
    }

    const data: Property = await response.json();
    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Error desconocido');
  }
};

// src/services/propertiesService.ts

export const deleteProperty = async (propertyId: number): Promise<void> => {
  try {
    const response = await fetch(`http://localhost:8080/api/properties/deleteById/${propertyId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error al eliminar la propiedad');
    }
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Error desconocido');
  }
};
