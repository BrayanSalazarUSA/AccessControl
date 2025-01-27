import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="mx-auto">
        <Outlet /> {/* Aquí se renderizará el contenido de la página */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
