import { motion } from "framer-motion";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface DropdownButtonProps {
  item: string; // Elemento que se pasa al botón
  toggleDropdown: (item: string) => void; // Función para manejar el toggle
  isOpen: boolean; // Estado que indica si el menú está abierto o cerrado
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  item,
  toggleDropdown,
  isOpen,
  
}) => {
  return (
    <motion.button
      onClick={() => toggleDropdown(item)} // Alterna el menú al hacer clic
      className="flex items-center text-gray-100 transition duration-200 z-50"
    >
      <span className="mr-2 z-50 font-semibold">
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </span>
      <motion.div
        initial={{ rotate: 0 }} // Flecha apuntando hacia abajo inicialmente
        animate={{ rotate: isOpen ? 180 : 0 }} // Rota hacia arriba si el menú está abierto
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <MdKeyboardArrowUp className="z-50"/> : <MdKeyboardArrowDown className="z-50"/>}
      </motion.div>
    </motion.button>
  );
};

export default DropdownButton;
