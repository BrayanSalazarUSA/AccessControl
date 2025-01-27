import Button from "./CustomButtom";

interface Feature {
    text: string;
  }
  
  interface ButtonProps {
    text: string;
    variant: string;
    onClick: () => void;
  }
  
  interface HeroProps {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
    features: Feature[];
    buttons: ButtonProps[];
  }

export const HeroServices: React.FC<HeroProps>= ({
title,
  subtitle,
  description,
  backgroundImage,
  features,
}) => {
  return (
    <section className="relative h-[100vh] text-white overflow-hidden pt-16">
    {/* Fondo con Imagen y Gradiente */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 90, 255, 0.4), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '110vh',
        width: '100%',
      }}
    ></div>

    {/* Contenido Principal */}
    <div className="containe mx-auto px-10 my-28 items-center relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl mb-8 text-gray-200">{description}</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          
              <Button
                onClick={()=>console.log()}
                variant="primary"
                text="Get Info"
              />
              <Button
                onClick={()=>console.log()}
                variant="outlinedGreen"
                text="Get Info"
              />
            
          </div>
        </div>

        {/* Lista de Features */}
        <div className="w-full md:w-1/2 md:pl-6 mt-10 md:mt-0">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-6">{subtitle}</h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* SVG Decorativo Inferior */}
    {/* <div className="absolute bottom-[-40px] left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,213.3C672,203,768,181,864,170.7C960,160,1056,160,1152,165.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div> */}
  </section>
  )
}