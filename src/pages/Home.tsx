import { motion } from 'framer-motion';
import Header from "../components/Header";
import FeaturesItems from "../components/FeaturesItems";
import Locations from "../components/Locations";
interface HomeProps {
  title: string;
}

export const Home: React.FC<HomeProps> = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <div className="text-neutral-dark">
      {/* Sección de Encabezado */}
      <Header />

     
      {/* Sección de Características */}
      <div className="relative w-full h-auto bg-white">
     <FeaturesItems/>
     <div className="bg-white sm:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-900">
          Our Network of Trusted Partners
        </h2>
        
        {/* Primera fila de imágenes */}
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-5 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {[
            { src: "https://www.innovatechcorp.net/images/brands/axis-logo.png", alt: "Axis" },
            { src: "https://www.innovatechcorp.net/images/brands/down.png", alt: "Down" },
            { src: "https://www.innovatechcorp.net/images/brands/control4.png", alt: "Control4" },
            { src: "https://www.innovatechcorp.net/images/brands/elan-Logo.jpg", alt: "Elan" },
            { src: "https://www.innovatechcorp.net/images/brands/MikroTik-logo.jpg", alt: "MikroTik" }
          ].map((image, index) => (
            <motion.img
              key={index}
              className="col-span-2 max-h-12 w-full lg:col-span-1 object-cover"
              src={image.src}
              alt={image.alt}
              width="188"
              height="58"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: index * 0.2 }}
            />
          ))}
        </div>

        {/* Segunda fila de imágenes */}
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-5 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {[
            { src: "https://www.innovatechcorp.net/images/brands/nortek.jpg", alt: "Nortek" },
            { src: "https://www.innovatechcorp.net/images/brands/pakedge_logo_color.jpg", alt: "Pakedge" },
            { src: "https://www.innovatechcorp.net/images/brands/skyvuecom.jpg", alt: "Skyvue" },
            { src: "https://www.innovatechcorp.net/images/brands/snapone.svg", alt: "SnapOne" },
            { src: "https://www.innovatechcorp.net/images/brands/triad_logo_color_color.jpg", alt: "Triad" }
          ].map((image, index) => (
            <motion.img
              key={index}
              className="col-span-2 max-h-12 w-full lg:col-span-1 object-cover"
              src={image.src}
              alt={image.alt}
              width="188"
              height="58"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: index * 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
       {/*  <FeaturesSection /> */}
        {/* Sección de Llamado a la Acción */}
        {/* <section className="h-auto py-12">
          <div className="overflow-hidden bg-white mb-6">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <h2 className="text-base/7 font-semibold text-primary">
                      Deploy faster
                    </h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      A better workflow
                    </p>

                    <dl className="mt-7 max-w-xl space-y-3 text-base/7 text-gray-600 lg:max-w-none">
                      {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                          <dt className="inline font-semibold text-gray-900">
                            <feature.icon
                              aria-hidden="true"
                              className="absolute left-1 top-1 h-5 w-5 text-primary"
                            />
                            {feature.name}
                          </dt>{" "}
                          <dd className="inline">{feature.description}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
                <img
                  alt="Product screenshot"
                  src={hikImage}
                  width={200}
                  height={100}
                  className="w-[28rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[37rem] md:-ml-4 lg:-ml-0"
                />
              </div>
            </div>
          </div>

          <div className="mx-10 py-5">
            <ParallaxSection baseVelocity={-5}>
              Access Control Systems
            </ParallaxSection>
            <ParallaxSection baseVelocity={5}>Best Technology</ParallaxSection>
          </div>
        </section> */}
        <Locations/>
      </div>
    </div>
  );
};
