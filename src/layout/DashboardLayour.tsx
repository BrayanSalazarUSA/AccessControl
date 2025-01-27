import { Outlet } from "react-router-dom";
import Sidebar from "../app/components/Sidebar";
import { useStateContext } from "../app/context/ContextProvider.js";
import { useEffect } from "react";
import { NavbarDashboard } from "../app/components/NavbarDashboard.js";

const DashboardLayout: React.FC = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    leftCollapsed,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentColor, setCurrentMode]);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg w-screen">
        {activeMenu ? (
          <div className="w-1/6 fixed sidebar ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}

        <div
          className={
            !leftCollapsed
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-[16%] w-5/6"
              : "bg-main-bg dark:bg-main-dark-bg min-h-screen flex-2 w-full ml-16"
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg "></div>
          {/* {themeSettings && (<ThemeSettings />)} */}
          <NavbarDashboard />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
