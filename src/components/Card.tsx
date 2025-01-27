import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineRight } from 'react-icons/ai'; // Icono de flecha (puedes usar cualquier otro)
import { useNavigate } from 'react-router-dom';

interface CardProps {
  title: string; // Título que se mostrará en el componente
  description: string; // Descripción que se mostrará en el componente
  icon: React.ReactNode; // Ícono que se pasará como prop
  bgColor?: string; // Color de fondo opcional
  textColor?: string; // Color del texto opcional
  route: string; // Color del texto opcional
  setDropdown?: (value: string | null) => void; // Función opcional para cambiar el estado del dropdown
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  bgColor = 'red', // Valor por defecto
  textColor = 'text-gray-900', // Valor por defecto,
  route,
  setDropdown
}) => {

  const navigate = useNavigate();


 const handleRouting = (route:string) => {
  navigate(route);
 }

  return (
    <div onClick={()=>{handleRouting(route); setDropdown(null)}} className={`relative pl-16 p-5 cursor-pointer card1 ${bgColor}`}>
      <dt className={`text-base/7 font-semibold ${textColor}`}>
        <div className={`text-gray-500  absolute left-2 top-2 flex h-10 w-10 items-center justify-center rounded-lg `}>
          {icon}
        </div>
      </dt>
      <motion.span
      className="text-gray-800 font-semibold flex items-center cursor-pointer py-2 font-mono"
      whileHover={{ 
        scale: 1.1, 
        transition: { duration: 0.2 } // Duración de la transición
      }} 
      whileTap={{ 
        scale: 0.95, // Reduce el tamaño un poco más al hacer clic
        transition: { duration: 0.1 } // Duración de la transición
      }} 
      transition={{ type: 'spring', stiffness: 300 }} // Transición suave
    >
      {title}
      <motion.span
        className="ml-2" // Espacio a la izquierda de la flecha
        whileHover={{ 
          rotate: 15, // Rota la flecha al pasar el mouse
          x: 5, // Desliza la flecha ligeramente a la derecha
          transition: { duration: 0.2 } // Duración de la transición
        }}
        initial={{ rotate: 0 }} // Inicialmente, sin rotación
      >
        <AiOutlineRight />
      </motion.span>
    </motion.span>
      <dd className={`leading-5 text-sm ${textColor}`}>
        {description}
      </dd>
       <div className="go-corner">
        <div className="go-arrow">→</div>
      </div> 
    </div>
  );
};

export default Card;
