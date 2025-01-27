import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/security.svg";
import {
  FaCog,
  FaTools,
  FaUsers,
  FaBars,
  FaCar,
  FaHouseUser,
  FaRegLightbulb,
  FaVideo,
} from "react-icons/fa";
import Button from "./CustomButtom";
import { LuUserCircle } from "react-icons/lu";
import Card from "./Card";
import DropdownButton from "./DropdownButton";
import { motion } from "framer-motion";

export const Navbar: React.FC = () => {
  const [dropdown, setDropdown] = useState<string | null>(null);

  // Función de toggle para abrir/cerrar el menú al hacer clic
  const toggleDropdown = (item: string) => {
    setDropdown((prev) => (prev === item ? null : item)); // Cambia entre abrir y cerrar
  };

  const navigate = useNavigate();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  // Cierra el menú y navega a la ruta
  const closeMenuAndNavigate = (route: string) => {
    setDropdown(null); // Cierra el menú
    navigate(route); // Navega a la página deseada
  };

  // Configuración de las secciones y tarjetas
  const sections = [
    {
      id: "services",
      title: "SERVICES",
      items: [
        {
          title: "ACCESS CONTROL",
          description:
            "Ofrecemos soluciones avanzadas de control de acceso vehicular, adaptadas a las necesidades de seguridad de cada espacio.",
          icon: <FaCar />,
          bgColor: "bg-blue-500",
          textColor: "text-gray-900",
          route: "/access-control",
        },
        {
          title: "INTERCOMS 2N",
          description:
            "Especialistas en instalación de intercomunicadores para hogares y oficinas, brindamos soluciones que integran dispositivos de última generación como 2N.",
          icon: <FaHouseUser />,
          bgColor: "bg-blue-500",
          textColor: "text-gray-900",
          route: "/intercoms",
        },
        {
          title: "CAMERAS LPR",
          description:
            "Instalamos cámaras de reconocimiento de placas (LPR) en accesos y entradas estratégicas.",
          icon: <FaVideo />,
          bgColor: "bg-blue-500",
          textColor: "text-gray-900",
          route: "/camera-lpr",
        },
        {
          title: "CONSULTORÍA",
          description:
            "Ofrecemos consultoría personalizada en sistemas de seguridad y control de acceso, adaptada a las necesidades de cada cliente.",
          icon: <FaRegLightbulb />,
          bgColor: "bg-blue-500",
          textColor: "text-gray-900",
          route: "/consulting",
        },
      ],
    },
    {
      id: "about",
      title: "ABOUT",
      items: [
        {
          title: "COMPANY",
          description:
            "Ofrecemos soluciones avanzadas de control de acceso vehicular, adaptadas a las necesidades de seguridad de cada espacio.",
          icon: <FaCar />,
          bgColor: "bg-blue-500",
          textColor: "text-gray-900",
          route: "/about",
        },
        {
          title: "PROJECTS",
          description:
            "Especialistas en instalación de intercomunicadores para hogares y oficinas, brindamos soluciones que integran dispositivos de última generación como 2N.",
          icon: <FaHouseUser />,
          bgColor: "bg-blue-500",
          textColor: "text-gray-900",
          route: "/projects",
        },
      ],
    },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#020202] to-[#0845df]  shadow-lg fixed w-full z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Menu Items */}
          <h1
            onClick={() => closeMenuAndNavigate("/")}
            className="cursor-pointer flex items-center text-white font-mono text-3xl font-bold w-[200px]"
          >
            <img src={logo} alt="" className="h-14 mr-2 py-1" />
            Access
          </h1>
          <div className="flex items-center justify-between w-full">
            <div className="hidden md:flex space-x-6 ml-10 ">
              {["services", "about"].map((item) => (
                <div className="relative" key={item}>
                  <DropdownButton
                    key={item}
                    item={item}
                    isOpen={dropdown === item} // Estado abierto/cerrado
                    toggleDropdown={() => toggleDropdown(item)} // Llama a toggleDropdown al hacer clic
                  />
                  {dropdown === item && (
                    <div className="absolute z-10 mt-5 bg-white rounded-md shadow-lg transition duration-300 flex w-[830px]">
                      <svg
                        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                        aria-hidden="true"
                      >
                        <defs>
                          <pattern
                            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                            width="150"
                            height="150"
                            x="100%"
                            y="-1"
                            patternUnits="userSpaceOnUse"
                          >
                            <path d="M.5 200V.5H200" fill="none"></path>
                          </pattern>
                        </defs>
                        <svg
                          x="50%"
                          y="-1"
                          className="overflow-visible fill-gray-800/20"
                        >
                          <path
                            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                            stroke-width="0"
                          ></path>
                        </svg>
                        <rect
                          width="100%"
                          height="100%"
                          stroke-width="0"
                          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
                        ></rect>
                      </svg>
                      <div
                        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                        aria-hidden="true"
                      >
                        <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#020202] to-[#0845df] opacity-20 -z"></div>
                      </div>
                     
                      {dropdown === item &&
            sections
              .filter((section) => section.id === item) // Filtra para mostrar solo la sección activa
              .map((section) => (
                <div key={section.id} className="absolute z-10 mt-5 bg-white rounded-md shadow-lg transition duration-300 flex w-[830px]">
                  <div className="mx-auto mt-10 w-full sm:mt-20 lg:my-2 px-1">
                    <h1 onClick={() => setDropdown(null)} className="text-gray-600 mt-2 font-mono ml-5">
                      {section.title}
                    </h1>
                    <div className="flex">
                      <dl className="grid max-w-xl grid-cols-1 lg:max-w-none lg:grid-cols-2 mb-3 ml-5">
                        {section.items.map((item, index) => (
                          <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.2, // Añade un retraso progresivo para cada tarjeta
                            }}
                          >
                            <Card
                              title={item.title}
                              description={item.description}
                              icon={item.icon}
                              bgColor={item.bgColor}
                              textColor={item.textColor}
                              route={item.route}
                              setDropdown={setDropdown}
                            />
                          </motion.div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </div>
              ))}
      
                    </div>
                  )}
                </div>
              ))}
              <span
                onClick={() => closeMenuAndNavigate("/contact")}
                className="z-50 flex items-center text-gray-100 first-letter:ransition duration-200 cursor-pointer"
              >
                Contact
              </span>
            </div>
            <div className="flex items-center z-50">
              <Button
                text="Support"
                onClick={() => navigate("/support")}
                variant="outlinedBlue"
              />
              <div
                onClick={() => navigate("/login")}
                className="cursor-pointer p-1 ml-3  w-auto h-8 flex justify-center items-center"
              >
                <LuUserCircle className="text-white hover:text-slate-200 text-2xl" />
                <span className="z-50 ml-1 text-sm font-semibold flex items-center  first-letter:ransition duration-200 cursor-pointer">
                  Sign in
                </span>
              </div>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white shadow-md p-4 z-10 mt-36 ">
              <div className="flex flex-col space-y-2">
                {["services", "about", "contact", "resources"].map((item) => (
                  <div key={item}>
                    <button
                      onClick={() => toggleDropdown(item)}
                      className="w-full flex items-center justify-between p-3 bg-blue-100 rounded-lg shadow hover:bg-blue-200 transition duration-200"
                    >
                      <span className="font-medium text-gray-800">
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </span>
                      <span className="text-gray-700">
                        {dropdown === item ? "▲" : "▼"}
                      </span>
                    </button>
                    {dropdown === item && (
                      <div className="mt-2 flex flex-col space-y-2">
                        {item === "services" && (
                          <>
                            <Link
                              to="/service1"
                              className="block p-2 bg-white rounded shadow hover:shadow-lg transition duration-200"
                            >
                              <div className="flex items-center">
                                <FaCog className="text-gray-600 mr-2" />
                                <span className="font-medium text-gray-800">
                                  Service 1
                                </span>
                              </div>
                            </Link>
                            <Link
                              to="/service2"
                              className="block p-2 bg-white rounded shadow hover:shadow-lg transition duration-200"
                            >
                              <div className="flex items-center">
                                <FaTools className="text-gray-600 mr-2" />
                                <span className="font-medium text-gray-800">
                                  Service 2
                                </span>
                              </div>
                            </Link>
                          </>
                        )}
                        {item === "about" && (
                          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:my-4 px-3 lg:max-w-4xl">
                            <dl className="grid max-w-xl grid-cols-1 lg:max-w-none lg:grid-cols-2 ">
                              <Card
                                title="Push to deploy"
                                description="Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa."
                                icon={<FaUsers />}
                                bgColor="bg-blue-500" // Cambia a tu color deseado
                                textColor="text-gray-900" // Cambia a tu color deseado
                                route="/access-control"
                              />
                              <Card
                                title="Push to deploy"
                                description="Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa."
                                icon={<FaUsers />}
                                bgColor="bg-blue-500" // Cambia a tu color deseado
                                textColor="text-gray-900" // Cambia a tu color deseado
                                route="/access-control"
                              />
                              <Card
                                title="Push to deploy"
                                description="Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa."
                                icon={<FaUsers />}
                                bgColor="bg-blue-500" // Cambia a tu color deseado
                                textColor="text-gray-900" // Cambia a tu color deseado
                                route="/access-control"
                              />
                              <Card
                                title="Push to deploy"
                                description="Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa."
                                icon={<FaUsers />}
                                bgColor="bg-blue-500" // Cambia a tu color deseado
                                textColor="text-gray-900" // Cambia a tu color deseado
                                route="/access-control"
                              />
                            </dl>
                          </div>
                        )}
                        {/* Agrega más elementos para 'contact' y 'resources' */}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Support and Login Buttons */}
          <div className="md:hidden z-50">
            <button
              onClick={handleMobileMenuToggle}
              className="text-gray-800 focus:outline-none"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
