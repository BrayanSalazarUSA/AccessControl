import { useState, useEffect, useCallback } from "react";
import { fetchVisitors, Visitor } from "../services/visitorsService"; // Asumo que la función fetchVisitors está en visitorsService

const useVisitors = (propertyId: number) => {
  const [visitorsData, setVisitorsData] = useState<Visitor[]>([]);
  const [filteredData, setFilteredData] = useState<Visitor[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>(""); // Para la búsqueda
  const [page, setPage] = useState(0); // Página actual
  const rowsPerPage = 9; // Número de visitantes por página

  // Función para obtener los datos de los visitantes
  const fetchVisitorData = useCallback(async (propertyId: number) => {
    setLoading(true);
    try {
      const data = await fetchVisitors(propertyId); // Llamada al servicio para obtener los visitantes
      setVisitorsData(data);
      setFilteredData(data); // Inicializamos los datos filtrados
      setError(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Failed to load visitors data.");
    } finally {
      setLoading(false);
    }
  }, []); // `useCallback` ahora solo depende de nada porque la lógica depende de `propertyId` y lo pasamos como argumento

  // Este useEffect se dispara cada vez que `propertyId` cambia
  useEffect(() => {
    fetchVisitorData(propertyId); // Llamamos a la función con el nuevo `propertyId`
  }, [propertyId, fetchVisitorData]); // Dependemos de `propertyId` y de `fetchVisitorData`

  // Filtrar visitantes
  useEffect(() => {
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      const filtered = visitorsData.filter(
        (visitor) =>
          visitor.firstName.toLowerCase().includes(lowercasedTerm) ||
          visitor.lastName.toLowerCase().includes(lowercasedTerm) ||
          visitor.building.toLowerCase().includes(lowercasedTerm) ||
          visitor.apartment.toLowerCase().includes(lowercasedTerm) ||
          visitor.carPlates.toLowerCase().includes(lowercasedTerm)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(visitorsData);
    }
  }, [searchTerm, visitorsData]); // Filtrar solo cuando `searchTerm` o `visitorsData` cambien

  // Manejar el cambio de término de búsqueda
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
    visitorsData,
    filteredData,
    error,
    loading,
    page,
    rowsPerPage,
    paginatedData,
    handleSearch,
    handleChangePage,
    fetchVisitorData, // Para refrescar los datos manualmente
  };
};

export default useVisitors;
