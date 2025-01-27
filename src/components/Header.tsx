import React, { useCallback } from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "./CustomButtom";
import Particles from "react-tsparticles";
import videoHeader from "../assets/access-control.mp4";
import iconAccess from "./../assets/access-control.png";
import intercom from "./../assets/intercom.png";
import cameraLPR from "./../assets/lpr.png";
import assistance from "./../assets/remote-asistant.png";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

import type { Container, Engine } from "tsparticles-engine";
const Header: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <header className="relative h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={videoHeader} type="video/mp4" />
        Tu navegador no soporta video.
      </video>
      
      {/* Partículas */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#007bff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 8,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 130,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
        className="z-[0] absolute top-0 left-00 w-full h-screen bg-pr" // Esto hace que las partículas ocupen todo el encabezado
      />
      <div className="relative flex flex-col pt-36 items-center h-screen bg-gradient-radial text-white text-center">
        <div className="flex w-1/2 mx-auto justify-center items-center gap-16 mb-10">
          <div className="cursor-pointer hover:scale-110 flex flex-col items-center">
            <img src={iconAccess} className="w-16 h-16 object-cover" alt="" />
            <span>Access Control</span>
          </div>
          <div className="cursor-pointer hover:scale-110 flex flex-col items-center">
            <img src={intercom} className="w-16 h-16 object-cover" alt="" />
            <span>Intercoms</span>
          </div>
          <div className="cursor-pointer hover:scale-110 flex flex-col items-center">
            <img src={cameraLPR} className="w-16 h-16 object-cover" alt="" />
            <span>Camera LPR</span>
          </div>
          <div className="cursor-pointer hover:scale-110 flex flex-col items-center">
            <img src={assistance} className="w-16 h-16 object-cover" alt="" />
            <span>Remote Assistence</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-5xl font-bold mb-12 tracking-wide">
        Your global partner creating <br />a secure world.
        </h1>
        {/* <p className="text-lg md:text-xl mb-8 max-w-lg">
          Proporcionamos soluciones de control de acceso avanzadas y seguras
          para tu negocio.
        </p> */}
        <div className="w-[380px] mx-auto flex items-center">
          <Button
            text="Secondary Button"
            onClick={() => alert("Secondary Button Clicked")}
            variant="secondary"
            icon={FaArrowRight}
          />
          <Button
            text="Outlined Blue"
            onClick={() => alert("Outlined Blue Clicked")}
            variant="outlinedBlue"
            className="ml-3"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
