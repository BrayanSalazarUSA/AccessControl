import React from "react";
import { FeatureCardServices } from "../components/FeatureCardServices";
import { FaDatabase, FaBuilding, FaCogs, FaLock } from "react-icons/fa";

const SupportPage = () => {
  const features1 = [
    { icon: FaDatabase, text: "Clear data visibility" },
    { icon: FaBuilding, text: "Reduced external factors" },
    { icon: FaCogs, text: "Enhanced stability" },
    { icon: FaLock, text: "Accelerated times" },
  ];

  return (
    <>
      <FeatureCardServices
        title="Recibe soporte tecnico remoto de los mejores"
        subtitle="SOPORTE TECNICO"
        description="Discover a variety of tools, services, and expert guidance tailored to your unique financial needs."
        imageSrc="https://avigilon.imgix.net/https%3A%2F%2Fassets.avigilon.com%2Fimages%2FAlta-Cloud-Video-Product_Benefits_850x850-1.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=800&q=80&w=800&s=637e8815ebaa4b7e1f86132f20ef7301"
        features={features1}
        imagePosition="right"
      />
    </> // Imagen a la derecha/>
  );
};

export default SupportPage;
