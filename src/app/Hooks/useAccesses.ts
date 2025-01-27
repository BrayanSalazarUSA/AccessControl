import { useState, useEffect, useCallback } from "react";
import { getRecentAccesses } from "../services/accessService";

interface Visitor {
  firstName: string;
  lastName: string;
  carPlates: string;
  building: string;
  apartment: string;
  photo: string;
}

interface AccessRecord {
  id: number;
  accessTime: string;
  visitor: Visitor;
}

const useAccesses = (propertyId: number) => {
  const [accessData, setAccessData] = useState<AccessRecord[]>([]);
  const [filteredData, setFilteredData] = useState<AccessRecord[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState(0);
  const rowsPerPage = 9;

  // Obtener accesos
  const fetchAccessData = useCallback(async (propertyId: number) => {
    setLoading(true);
    try {
      const data = await getRecentAccesses(propertyId);
      setAccessData(data);
      setFilteredData(data); // Inicializa los datos filtrados
      setError(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Failed to load access data.");
    } finally {
      setLoading(false);
    }
  }, []); // `useCallback` ahora solo depende de nada porque la lógica depende de `propertyId` y lo pasamos como argumento

  // Este `useEffect` se dispara cada vez que `propertyId` cambia
  useEffect(() => {
    fetchAccessData(propertyId); // Ahora se pasa `propertyId` como argumento
  }, [propertyId, fetchAccessData]); // Dependemos de `propertyId` y de `fetchAccessData`

  // Filtrar datos
  useEffect(() => {
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      const filtered = accessData.filter(
        (car) =>
          car.visitor.carPlates.toLowerCase().includes(lowercasedTerm) ||
          car.visitor.firstName.toLowerCase().includes(lowercasedTerm) ||
          car.visitor.lastName.toLowerCase().includes(lowercasedTerm) ||
          car.visitor.building.toLowerCase().includes(lowercasedTerm) ||
          car.visitor.apartment.toLowerCase().includes(lowercasedTerm)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(accessData);
    }
  }, [searchTerm, accessData]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Manejar el cambio de página
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Calcular los datos de la página actual
  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

  return {
    accessData,
    filteredData,
    error,
    loading,
    page,
    rowsPerPage,
    paginatedData,
    handleSearch,
    handleChangePage,
    fetchAccessData, // Para refrescar los datos manualmente
  };
};

export default useAccesses;
