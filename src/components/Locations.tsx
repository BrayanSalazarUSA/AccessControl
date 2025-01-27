import Button from "./CustomButtom";

const Locations = () => {
  return (
    <div
      className="relative isolate overflow-hidden py-24"
      style={{
        backgroundImage: `url("https://brayansalazar.netlify.app/static/media/bgIMG.c39101e520e2997fc6d4.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>       
      <div className="mt-[-50px] flex h-screen items-center justify-center">
        <div className="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-6xl lg:pt-8">
          <h1 className="mt-10 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Take a tour of
            <span className="text-primary"> our offices</span>
          </h1>
          <p className="my-6 text-lg leading-8 text-gray-800">
            Welcome to our operation centers, we are located in Florida in the
            United States. In addition to this, we have a second location in
            Medellin Colombia. We encourage you to visit us.
          </p>
          <Button
          variant="primary"
          text="Schedule a Tour Now"
          className="mx-auto"
          />
          <div className="mt-5 flex items-center justify-center gap-x-6">
            <div className="flex w-4/5 mx-auto justify-center">
              <div className="xl:w-1/2 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://www.innovamonitoring.net/static/media/florida-locations.c96ae24ab240770ef54a.jpg"
                    alt="Main Office in South Florida"
                  />
                  <h4 className="tracking-widest text-primary text-xs font-medium title-font text-center">
                    MAIN OFFICE
                  </h4>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">
                    South Florida
                  </h2>
                  <p className="leading-relaxed text-base text-center">
                    Our secondary location strengthens our main office,
                    providing continued support for all clients worldwide.
                  </p>
                </div>
              </div>

              <div className="xl:w-1/2 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://www.innovamonitoring.net/static/media/medellin.ec2ece47248c09c40ebe.jpg"
                    alt="Second Operations Center in Medellin"
                  />
                  <h4 className="tracking-widest text-primary text-xs font-medium title-font text-center">
                    SECOND OPERATIONS CENTER
                  </h4>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">
                    Medellin, Colombia
                  </h2>
                  <p className="leading-relaxed text-base text-center">
                    Our secondary location strengthens our main office,
                    providing continued support for all clients worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
