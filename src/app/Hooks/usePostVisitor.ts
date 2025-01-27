// hooks/usePostVisitor.ts
import { useState } from 'react';
import { addVisitor } from '../services/visitorService';
import { Visitor } from '../services/accessService';

const usePostVisitor = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const postVisitor = async (visitor: Visitor) => {
    setLoading(true);
    setError(null);
    try {
      const savedVisitor = await addVisitor(visitor);
      setLoading(false);
      return savedVisitor;
    } catch (err) {
      setLoading(false);
      setError('Error al guardar el visitante');
      throw err;
    }
  };

  return { loading, error, postVisitor };
};

export default usePostVisitor;
