import React, { createContext, useContext, useState, ReactNode } from "react";
import { Property } from "../types/Interfaces";

// Define los tipos de los valores iniciales
interface InitialStateType {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
}


interface StateContextType {
  currentColor: string;
  currentMode: string;
  activeMenu: boolean;
  screenSize: number | undefined;
  setScreenSize: (size: number | undefined) => void;
  handleClick: (clicked: keyof InitialStateType) => void;
  isClicked: InitialStateType;
  initialState: InitialStateType;
  setIsClicked: React.Dispatch<React.SetStateAction<InitialStateType>>;
  setActiveMenu: (active: boolean) => void;
  setCurrentColor: (color: string) => void;
  setCurrentMode: (mode: string) => void;
  setMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setColor: (color: string) => void;
  themeSettings: boolean;
  setThemeSettings: (settings: boolean) => void;
  leftCollapsed: boolean;
  setLeftCollapsed: (collapsed: boolean) => void;
  rightCollapsed: boolean;
  setRightCollapsed: (collapsed: boolean) => void;
  propertySelectedContext: Property;
  setPropertySelectedContext: React.Dispatch<React.SetStateAction<Property>>
  images:string[]
  setImages: React.Dispatch<React.SetStateAction<string[]>>
  addImage: (imageUrl: string) => void;
}

// Define el estado inicial
const initialState: InitialStateType = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const propertyInitialState: Property = {
     id: 0,
    name: "",
    address: "",
    state: "",
    zipCode: "",
}

// Crea el contexto con un tipo
const StateContext = createContext<StateContextType | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

// Implementa el proveedor del contexto
export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);
  const [currentColor, setCurrentColor] = useState<string>("#03C9D7");
  const [currentMode, setCurrentMode] = useState<string>("Light");
  const [themeSettings, setThemeSettings] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<InitialStateType>(initialState);
  const [propertySelectedContext, setPropertySelectedContext] = useState<Property>(propertyInitialState)

  // Sidebar
  const [leftCollapsed, setLeftCollapsed] = useState<boolean>(false);
  const [rightCollapsed, setRightCollapsed] = useState<boolean>(false);

  const [images, setImages] = useState<string[]>([]);

  const addImage = (imageUrl: string) => {
    setImages((prevImages) => [...prevImages, imageUrl]);
  };

  const setMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked: keyof InitialStateType) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        leftCollapsed,
        setLeftCollapsed,
        rightCollapsed,
        setRightCollapsed,
        propertySelectedContext,
        setPropertySelectedContext,
        images, 
        setImages,
        addImage
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Hook personalizado para usar el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = (): StateContextType => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a ContextProvider");
  }
  return context;
};
