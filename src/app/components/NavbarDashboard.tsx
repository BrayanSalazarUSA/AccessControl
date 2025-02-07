import React, { useEffect, useState } from "react";
import { BsBuildings } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { MdKeyboardArrowDown, MdOutlineCancel } from "react-icons/md";
import {IconButton} from "@mui/material";

import { useStateContext } from "../context/ContextProvider";
import MenuIcon from "@mui/icons-material/Menu";
import { IoIosSettings } from "react-icons/io";
import UserProfile from "./UserProfile";
import PropertiesNav from "./PropertiesNav";
import { useFetchProperties } from "../Hooks/useProperties";
import { SearchBarPrincipal } from "./SearchBarPrincipal";

/* type NavButtonProps = {
  title: string;
  customFunc: () => void;
  icon: JSX.Element;
  color: string;
}; */

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

/* const NavButton: React.FC<NavButtonProps> = ({
  title,
  customFunc,
  icon,
  color,
}) => (
  <button
    type="button"
    onClick={customFunc}
    style={{ color }}
    className="relative text-base rounded-full w-auto px-3 py-1 hover:bg-gray-700"
    aria-label={title}
  >
    {icon}
  </button>
);
 */


export const NavbarDashboard: React.FC = () => {
  const [, setActiveMenu] = useState<boolean>(true);
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);
  const [isClicked, setIsClicked] = useState(initialState);
  const { leftCollapsed, setLeftCollapsed } = useStateContext();

  // Datos de prueba
  const userProfile = { name: "John Doe", role: "Admin" };
  const { propertySelectedContext } = useStateContext()
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  const { properties } = useFetchProperties();

  const handleClick = (clicked:string) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };


  return (
    <div className="flex justify-between px-4 pt-1  text-white relative">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => {
          setLeftCollapsed(!leftCollapsed);
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "30px",
        }}
      >
        {leftCollapsed ? <MenuIcon /> : <MdOutlineCancel />}
      </IconButton>

      <SearchBarPrincipal propertySelectedContext={propertySelectedContext} properties={properties}/>

      

      <div className="flex items-center">
        {/* Botón de selección de propiedades */}
        <span className="font-light text-secondary mr-4">98.5kb</span>
        <div
          className="flex items-center cursor-pointer transition duration-300 hover:bg-gray-700 rounded-md px-2 py-1"
          onClick={() => handleClick("cart")}
        >
          <BsBuildings />

          <span className="flex items-center ml-2 text-sm">
            {propertySelectedContext?.name || "Properties"} <MdKeyboardArrowDown />
          </span>
        </div>

        {/* Perfil de usuario */}
        <div
          className="text-sm flex items-center gap-2 cursor-pointer transition duration-300 hover:bg-gray-700 rounded-md px-2 py-1 ml-4"
          onClick={() => handleClick("userProfile")}
        >
          <ImProfile />
          <span>Hi, {userProfile.name}</span>
          <MdKeyboardArrowDown />
        </div>
        <IoIosSettings className="cursor-pointer" />
      </div>
      {isClicked.userProfile && <UserProfile setIsClicked={setIsClicked} properties={properties}/>}
      {isClicked.cart && (
        <PropertiesNav properties={properties} setIsClicked={setIsClicked} />
      )}
    </div>
  );
};
