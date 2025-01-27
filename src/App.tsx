import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import DashboardLayout from "./layout/DashboardLayour";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { AcessControlPage } from "./pages/AcessControlPage";
import Contact from "./pages/Contact";
import IntercomsPage from "./pages/IntercomsPage";
import { CameraLPRPage } from "./pages/CameraLPRPage";
import { ConsultingServicePage } from "./pages/ConsultingService";
import ProjectsPage from "./pages/ProjectsPage";
import SupportPage from "./pages/SupportPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { AppDashboard } from "./app/page/AppDashboard";
import UsersPage from "./app/page/UsersPage";
import PropertiesPage from "./app/page/PropertiesPage";
import MapPage from "./app/page/MapPage";


function AppHome() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes using MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home title="Innova Access Control" />} />
          <Route path="/access-control" element={<AcessControlPage />} />
          <Route path="/intercoms" element={<IntercomsPage />} />
          <Route path="/camera-lpr" element={<CameraLPRPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/consulting" element={<ConsultingServicePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/login" element={<Login />} />
        </Route>
        {/* Dashboard Routes using DashboardLayout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<AppDashboard />} />
          <Route path="/dashboard/control" element={<AppDashboard />} />
          <Route path="/dashboard/Users" element={<UsersPage />} />
          <Route path="/dashboard/Properties" element={<PropertiesPage/>} />
          <Route path="/dashboard/Map" element={<MapPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppHome;
