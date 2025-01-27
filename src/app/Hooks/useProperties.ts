// src/hooks/useProperties.ts
import { useState, useEffect } from 'react';
import { Property, fetchProperties, createProperty } from '../services/propertiesService';
import { deleteProperty } from '../services/propertiesService';
// Hook para obtener las propiedades
export const useFetchProperties = (refetch?:boolean) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProperties = async () => {
      try {
        const data = await fetchProperties();
        setProperties(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    getProperties();
  }, [refetch]);

  return { properties, loading, error };
};

// Hook para crear una propiedad
export const useCreateProperty = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const addProperty = async (property: Property) => {
    try {
      setLoading(true);
      await createProperty(property);
      setError(null); // Limpiar cualquier error previo
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return { addProperty, loading, error };
};

export const useDeleteProperty = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deletePropertyHandler = async (propertyId: number) => {
    setLoading(true);
    setError(null);
    try {
      await deleteProperty(propertyId); // Llamar al servicio para eliminar la propiedad
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return {
    deleteProperty: deletePropertyHandler,
    loading,
    error,
  };
};
