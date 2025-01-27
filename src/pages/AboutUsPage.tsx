import { IoIosArrowDroprightCircle } from "react-icons/io";
import { TbWorldPin } from "react-icons/tb";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FeatureCardServices } from "../components/FeatureCardServices";
import { FaDatabase, FaBuilding, FaCogs, FaLock } from "react-icons/fa";

export const AboutUsPage: React.FC = () => {
  const navigate = useNavigate();
  const features = [
    { icon: FaDatabase, text: "Transparent Data Access" },
    { icon: FaBuilding, text: "Versatile options" },
    { icon: FaCogs, text: "Reliable performance" },
    { icon: FaLock, text: "Enhanced Security" },
  ];
  return (
    <div className="bg-gray-50">
      {/* Encabezado con imagen de fondo */}
      <header
        className="relative w-full h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://media-private.canva.com/MACdandYfnY/1/screen_2x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20241106%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241106T122201Z&X-Amz-Expires=40510&X-Amz-Signature=099a3e909a325747292e056807944b70c6d1a7af79df41a7eb0d599783c82e2d&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Wed%2C%2006%20Nov%202024%2023%3A37%3A11%20GMT")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white text-center md:text-5xl">
            About Us
          </h1>
        </div>
      </header>

      {/* Sección de Historia */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">
            Our Story
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed text-center">
            Founded in [Year], our journey began with a simple vision: [Brief
            company purpose or mission]. Over the years, we have grown and
            evolved, driven by our passion to [main value proposition or goal].
            Today, we are proud to serve our customers with dedication and
            innovation, always staying true to our roots.
          </p>
        </div>
      </section>

      {/* Sección de Misión y Visión */}
      <section className="py-16 bg-white px-6 lg:px-24">
        <div className="max-w-4xl mx-auto grid gap-16 lg:grid-cols-2 lg:gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Our Mission
            </h3>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Our mission is to [brief description of mission], empowering our
              clients and pushing boundaries in [industry or field]. We strive
              to make a lasting impact by [key objectives of the company].
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              We envision a world where [vision of the future], with a
              commitment to excellence, innovation, and growth. Our aim is to be
              a leader in [specific field or industry] by [core activities or
              focus].
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Valores */}
      <section
        id="features"
        className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:my-14 border-t-[1px] border-gray-400 w-4/5"
      >
        <div className=" flex max-w-[58rem] flex-col space-y-4 text-center ">
          <div>
            {" "}
            <TbWorldPin className="h-12 w-12 text-primary absolute left-16" />
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-4xl text-gray-950 text-left">
              Our Core Values
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
        <div className=" mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-gray-500 py-2">
            <div className="flex h-auto flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-black">
                  Tecnología de Última Generación
                </h3>
                <p className="text-base  text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptatum dolor veniam, in omnis culpa.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-gray-500 py-2">
            <div className="flex h-auto flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-black">
                  Eficiencia y Confianza
                </h3>
                <p className="text-base  text-gray-900">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit consequuntur quis odio, asperiores ullam doloribus?
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-gray-500 py-2">
            <div className="flex h-auto flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold font-bold text-lg text-black">
                  Soporte Técnico 24/7
                </h3>
                <p className="text-base  text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  reiciendis atque cumque, quidem maiores voluptate.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-gray-500 py-2">
            <div className="flex h-auto flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold font-bold text-lg text-black">
                  Soporte Técnico 24/7
                </h3>
                <p className="text-base  text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  reiciendis atque cumque, quidem maiores voluptate.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-gray-500 py-2">
            <div className="flex h-auto flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold font-bold text-lg text-black">
                  Soporte Técnico 24/7
                </h3>
                <p className="text-base  text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  reiciendis atque cumque, quidem maiores voluptate.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-gray-500 py-2">
            <div className="flex h-auto flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold font-bold text-lg text-black">
                  Soporte Técnico 24/7
                </h3>
                <p className="text-base  text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  reiciendis atque cumque, quidem maiores voluptate.
                </p>
              </div>
            </div>
          </div>
        </div>
        <FeatureCardServices
          title="Tailored financial solutions for any scenario"
          subtitle="Just because we can"
          description="Discover a range of financial instruments and personalized advice designed to meet your unique requirements."
          imageSrc="https://avigilon.imgix.net/https%3A%2F%2Fassets.avigilon.com%2Fimages%2F5050-Module-Images%2FProduct_Benefits_850x850-2-altavideoV3.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=800&q=80&w=800&s=55cf7e0da2d4f298df201912f58679e2"
          features={features}
          imagePosition="left" // Imagen a la izquierda
        />
      </section>
    </div>
  );
};
