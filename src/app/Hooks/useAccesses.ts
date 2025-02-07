import { useState, useEffect, useCallback } from "react";
import { getRecentAccesses, searchAccessLogsByKeyword } from "../services/accessService";
import { AccessRecord } from "../types/Interfaces";

const useAccesses = (propertyId: number, refetch: boolean) => {
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
      const reversedData = [...data].reverse();
      setAccessData(reversedData);
      setFilteredData(reversedData);
      setError(null);
    } catch (err) {
      setError("Failed to load access data.");
    } finally {
      setLoading(false);
    }
  }, [refetch]);

  // Efecto para cargar los accesos cuando cambia el propertyId
  useEffect(() => {
    fetchAccessData(propertyId);
  }, [propertyId, fetchAccessData]);

  // Filtrar datos
  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      searchAccessLogsByKeyword(searchTerm)
        .then((data) => {
          setFilteredData(data);
          setError(null);
        })
        .catch(() => setError("Failed to search access logs."))
        .finally(() => setLoading(false));
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
  const paginatedData = filteredData.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

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
    fetchAccessData,
  };
};

export default useAccesses;
