import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { useStateContext } from "../context/ContextProvider.js";
import { FiPieChart } from "react-icons/fi";
import {
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { BsBuildings } from "react-icons/bs";
import { CarRepairTwoTone, MapOutlined } from "@mui/icons-material";

const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Access Control",
        icon: <CarRepairTwoTone />,
        url: "/",
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "Properties",
        icon: <BsBuildings />,
        url: "Properties",
      },
      {
        name: "Users",
        icon: <IoMdContacts />,
        url:"Users"
      },
      {
        name: "Maps",
        icon: <MapOutlined />,
        url: "Map",
      },
    ],
  },

  {
    title: "Charts",
    links: [
      {
        name: "line",
        icon: <AiOutlineStock/>,
        url: "Line",
      },
      {
        name: "area",
        icon: <AiOutlineAreaChart/>,
        url: "Area",
      },

      {
        name: "bar",
        icon: <AiOutlineBarChart/>,
        url: "Bar",
      },
      {
        name: "pie",
        icon: <FiPieChart/>,
        url: "Pie",
      },
    ],
  },
];
const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize, leftCollapsed } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 hover:bg-secondary-dark-bg  m-2";

  return (
    <div
      className={`bg-[#282b30] h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 ${
        leftCollapsed ? "w-16" : "w-full"
      }`}
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              {" "}
              <SiShopware />{" "}
              {!leftCollapsed && (
                <span className="leading-5">Innova Access</span>
              )}
            </Link>
          </div>
          <div className="mt-5">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {!leftCollapsed && item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/dashboard/${link.url}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? "#29ff65" : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}

                    {!leftCollapsed && (
                      <span className="capitalize">{link.name}</span>
                    )}
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
