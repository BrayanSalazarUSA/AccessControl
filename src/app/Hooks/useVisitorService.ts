import { useState } from "react";
import axios from "axios";
import { Visitor } from "../services/visitorsService";

const useVisitorService = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const submitVisitor = async (visitorData: Visitor) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:8080/api/access", {
        visitor: visitorData,
      });
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError("Ocurrió un error al registrar el visitante.");
      console.error(error);
    }
  };

  return { submitVisitor, loading, error };
};

export default useVisitorService;
