import { FeatureCardServices } from "../components/FeatureCardServices";
import { FaDatabase, FaBuilding, FaCogs, FaLock } from "react-icons/fa";
import { HeroServices } from "../components/HeroServices";

import { TbWorldPin } from "react-icons/tb";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const AcessControlPage = () => {
  const navigate = useNavigate();

  const features2 = [
    { icon: FaDatabase, text: "Transparent Data Access" },
    { icon: FaBuilding, text: "Versatile options" },
    { icon: FaCogs, text: "Reliable performance" },
    { icon: FaLock, text: "Enhanced Security" },
  ];
  const features = [
    { text: "Lightning-fast Performance" },
    { text: "Bank-grade Security" },
    { text: "AI-powered Insights" },
  ];

  const buttons = [
    {
      text: "Get Started",
      variant: "secondary",
      onClick: () => console.log("Get Started clicked"),
    },
    {
      text: "Learn More",
      variant: "outlinedGreen",
      onClick: () => console.log("Learn More clicked"),
    },
  ];

  const images = [
    {
      src: "https://media-private.canva.com/fH7ms/MAFx4HfH7ms/1/s2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20241110%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241110T153004Z&X-Amz-Expires=97916&X-Amz-Signature=7cf6cfb7a8a1b5bf3fe3d3571f3f019a87008be237a6f9cab053066ee8a06db0&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Mon%2C%2011%20Nov%202024%2018%3A42%3A00%20GMT",
      alt: "Photo by Minh Pham",
      label: "VR",
    },
    {
      src: "https://marketplace.canva.com/wQZaM/MAD5z2wQZaM/1/tl/canva-MAD5z2wQZaM.jpg",
      alt: "Photo by Magicle",
      label: "Tech",
      colSpan: "md:col-span-2",
    },
    {
      src: "https://media-private.canva.com/FUP54/MAENeuFUP54/1/s2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20241111%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241111T104259Z&X-Amz-Expires=28106&X-Amz-Signature=b74f62c6e46251db877d3fb068b2009942e6499a54ef4a7720751db2391de2ca&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Mon%2C%2011%20Nov%202024%2018%3A31%3A25%20GMT",
      alt: "Photo by Martin Sanchez",
      label: "Dev",
      colSpan: "md:col-span-2",
    },
    {
      src: "https://marketplace.canva.com/MADGAnDS3Lg/1/thumbnail_large/canva-MADGAnDS3Lg.jpg",
      alt: "Photo by Lorenzo Herrera",
      label: "Retro",
    },
  ];

  return (
    <>
      <HeroServices
        title="Control De Accesso"
        subtitle="Seguridad avanzada y control autorizado en cada acceso"
        description="Nuestros sistemas de control de acceso permiten gestionar y autorizar el ingreso de personas de forma segura y efectiva, garantizando que solo personas autorizadas tengan acceso a las áreas designadas."
        backgroundImage="https://media-private.canva.com/Ib8TU/MAFCAKIb8TU/1/s2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20241031%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241031T090606Z&X-Amz-Expires=59427&X-Amz-Signature=975e9b009bac1f38e9d1c33b3efd95fa5fb56d716279dbcf497d5b9682ba9719&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Fri%2C%2001%20Nov%202024%2001%3A36%3A33%20GMT"
        features={features}
        buttons={buttons}
      />
      <div className="w-3/4 m-auto mt-20 h-auto">
        <h3 className="text-xl font-bold text-primary">We Are Access Gate</h3>
        <h1 className="text-4xl font-semibold mt-2 text-gray-800">
          YOUR SAFETY IN THE HANDS OF PROFESSIONALS
        </h1>

        <div className="w-full pt-7 md:flex">
          <p className="text-lg text-gray-800 mr-7 sm:mt-2">
            Welcome to Innova Monitoring, leaders in camera monitoring and
            security solutions. We pride ourselves on providing reliable, the
            latest in technology to protect our customers and ensure their peace
            of mind in an increasingly challenging world. At Innova, we
            understand the importance of security in all aspects of life,
            whether in homes, businesses or public spaces. Our highly trained
            and dedicated team strives to provide customized solutions that are
            tailored to each client's individual needs.
          </p>

          <p className="text-lg text-gray-800 mt-10 sm:mt-2">
            In today's digital age, surveillance and video monitoring are
            essential to ensure security in different environments, whether in
            offices, stores, homes or public areas. Our high-resolution,
            state-of-the-art camera systems provide a clear and detailed view of
            events in real time, allowing us to quickly detect and respond to
            potentially dangerous situations. In addition, we offer 24/7 remote
            monitoring services to provide continuous protection and peace of
            mind to our customers.
          </p>
        </div>
      </div>
      {/*  <section className="h-auto py-12">
        <div className="overflow-hidden bg-white mb-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-semibold text-primary">
                    Tecnología a la Vanguardia
                  </h2>
                  <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Automatización del control de acceso
                  </p>
                  <dl className="mt-7 max-w-xl space-y-3 text-base/7 text-gray-600 lg:max-w-none">
                    {features1.map((feature, index) => (
                      <div key={index} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon
                            aria-hidden="true"
                            className="absolute left-1 top-1 h-5 w-5 text-primary"
                          />
                          {feature.title}
                        </dt>{" "}
                        <dd className="inline">{feature.des}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <img
                alt="Product screenshot"
                src="https://marketplace.canva.com/4_7ag/MAEp_p4_7ag/1/tl/canva-MAEp_p4_7ag.jpg"
                width={200}
                height={100}
                className="w-[28rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[37rem] md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>
      </section> */}
      <div className="container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between my-24">
        <div className="grid gap-4 justify-items-center text-center md:flex-1">
          <div className="rounded-full border-8 border-primary p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-14 h-14 text-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              ></path>
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-black">Safe</h3>
          <p className="text-black">
            Our products are secure and private out-of-the-box
          </p>
        </div>

        <div className="grid gap-4 justify-items-center text-center md:flex-1">
          <div className="rounded-full border-8 border-primary p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-14 h-14 text-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              ></path>
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-black">Efficient</h3>
          <p className="text-black">
            Feel good about your wallet and the environment
          </p>
        </div>

        <div className="grid gap-4 justify-items-center text-center md:flex-1">
          <div className="rounded-full border-8 border-primary p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-14 h-14 text-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              ></path>
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-black">Proven</h3>
          <p className="text-black">
            Leading the Smart Home world for 10 years
          </p>
        </div>
      </div>
      <section className="container mx-auto px-4 space-y-6 pt-8 md:py-12 border-t-[1px] border-gray-400 w-4/5">
        <div className=" flex max-w-[58rem] flex-col space-y-4 text-center ">
          <div>
            <TbWorldPin className="h-12 w-12 text-primary absolute left-16" />
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-4xl text-gray-950 text-left">
              What power us moves you <br /> forward
            </h2>
            <motion.h3
              className="cursor-pointer font-bold text-primary w-28 flex items-center absolute right-32 top-16"
              whileHover={{ scale: 1.1, color: "#1D4ED8" }} // Ajusta el color a tu preferencia
              onClick={() => navigate("/about")}
            >
              Company
              <IoIosArrowDroprightCircle className="ml-2" />
            </motion.h3>
          </div>
        </div>
        <div className="bg-white h-auto">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-3 md:mb-6">
            <p className="hidden  text-gray-500 0 md:block">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {images.map((image, index) => (
            <a
              key={index}
              href="#"
              className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${
                image.colSpan || ""
              }`}
            >
              <img
                src={image.src}
                loading="lazy"
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                {image.label}
              </span>
            </a>
          ))}
        </div>
      </section>
      <section>
        <div className="px-8  mx-auto md:px-12 lg:px-32 max-w-screen-xl flex flex-col justify-center">
          <div className="flex flex-col">
            <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl"></div>
            <div className=" border-t pt-12">
              {/* Imagen a la izquierda */}
              <FeatureCardServices
                title="Tailored financial solutions for any scenario"
                subtitle="Just because we can"
                description="Discover a range of financial instruments and personalized advice designed to meet your unique requirements."
                imageSrc="https://avigilon.imgix.net/https%3A%2F%2Fassets.avigilon.com%2Fimages%2F5050-Module-Images%2FProduct_Benefits_850x850-2-altavideoV3.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=800&q=80&w=800&s=55cf7e0da2d4f298df201912f58679e2"
                features={features2}
                imagePosition="left" // Imagen a la izquierda
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
