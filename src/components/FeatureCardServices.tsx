import React from "react";
import { IconType } from "react-icons";
import Button from "./CustomButtom";
import { TbWorldPin } from "react-icons/tb";

interface Feature {
  icon: IconType; // Tipo para íconos de react-icons
  text: string;
}

interface FeatureCardServicesProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  features: Feature[];
  imagePosition?: "left" | "right"; // Nueva propiedad para posición de imagen
}

export const FeatureCardServices: React.FC<FeatureCardServicesProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  features,
  imagePosition = "left", // Valor por defecto
}) => {
  return (
    <div
      className={`flex flex-col gap-8 md:flex-row md:gap-24 items-center mb-10 ${
        imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div>
        <span className="text-primary uppercase text-xs font-medium">
          {subtitle}
        </span>
        <p className="text-4xl mt-4 tracking-tighter font-semibold text-gray-950 flex items-center text-balance">
          <TbWorldPin className="text-primary text-5xl -ml-10 mr-3" /> {title}
        </p>

        <p className="text-sm mt-4 text-black text-balance">{description}</p>
        <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
          {features.map((feature, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 text-xs text-gray-700"
            >
              <feature.icon className="text-gray-900 size-4" />
              <span className="text-gray-950 font-medium text-sm">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            onClick={() => console.log()}
            variant="primary"
            text="Contact"
          />
        </div>
      </div>
      <div className="h-full">
        <img
          src={imageSrc}
          alt="Feature"
          className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-fit object-center"
        />
      </div>
    </div>
  );
};
