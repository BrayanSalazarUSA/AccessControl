import { FeatureCardServices } from "../components/FeatureCardServices";
import { FaDatabase, FaBuilding, FaCogs, FaLock } from "react-icons/fa";
import { HeroServices } from "../components/HeroServices";

export const ConsultingServicePage = () => {  
  const features1 = [
    { icon: FaDatabase, text: "Clear data visibility" },
    { icon: FaBuilding, text: "Reduced external factors" },
    { icon: FaCogs, text: "Enhanced stability" },
    { icon: FaLock, text: "Accelerated times" },
  ];

  const features2 = [
    { icon: FaDatabase, text: "Transparent Data Access" },
    { icon: FaBuilding, text: "Versatile options" },
    { icon: FaCogs, text: "Reliable performance" },
    { icon: FaLock, text: "Enhanced Security" },
  ];
  const features = [
    { text: 'Lightning-fast Performance' },
    { text: 'Bank-grade Security' },
    { text: 'AI-powered Insights' },
  ];

  const buttons = [
    {
      text: 'Get Started',
      variant: 'secondary',
      onClick: () => console.log('Get Started clicked'),
    },
    {
      text: 'Learn More',
      variant: 'outlinedGreen',
      onClick: () => console.log('Learn More clicked'),
    },
  ];
  
  return (
    <>
       <HeroServices
      title="Innova Access Control"
      subtitle="Why MyCompany?"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo quibusdam accusamus ipsa saepe nam explicabo aliquam laborum delectus."
      backgroundImage="https://media-private.canva.com/Ib8TU/MAFCAKIb8TU/1/s2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20241031%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241031T090606Z&X-Amz-Expires=59427&X-Amz-Signature=975e9b009bac1f38e9d1c33b3efd95fa5fb56d716279dbcf497d5b9682ba9719&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Fri%2C%2001%20Nov%202024%2001%3A36%3A33%20GMT"
      features={features}
      buttons={buttons}
    />
      <section>
        <div className="px-8 p-12 mx-auto md:px-12 lg:px-32 max-w-screen-xl flex flex-col  justify-center">
          <div className="flex flex-col">
            <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl">
            </div>
            <div className="mt-6 border-t pt-12">
              <FeatureCardServices
                title="Innovative financial solutions for every situation"
                subtitle="Because why not"
                description="Discover a variety of tools, services, and expert guidance tailored to your unique financial needs."
                imageSrc="https://avigilon.imgix.net/https%3A%2F%2Fassets.avigilon.com%2Fimages%2FAlta-Cloud-Video-Product_Benefits_850x850-1.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=800&q=80&w=800&s=637e8815ebaa4b7e1f86132f20ef7301"
                features={features1}
                imagePosition="right" // Imagen a la derecha
              />

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
