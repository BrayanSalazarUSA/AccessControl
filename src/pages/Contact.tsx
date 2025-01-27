import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section style={{
            backgroundImage: `url(https://media-private.canva.com/MAC-Il1bYfc/1/screen_2x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20241103%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241103T212451Z&X-Amz-Expires=102133&X-Amz-Signature=ba661d4d8c865d072622065d612387da1aea78395d983ad7955b662ede06d5b6&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Tue%2C%2005%20Nov%202024%2001%3A47%3A04%20GMT)`,
          }}>
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width="150"
            height="150"
            x="100%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            stroke-width="0"
          ></path>
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        ></rect>
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#020202] to-[#0845df] opacity-20"></div>
      </div>
      <div className="container px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h1 className="text-2xl font-semibold text-gray-200 capitalize lg:text-3xl">
              Contact us for <br /> more info
            </h1>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <FaMapMarkerAlt className="w-6 h-6 mx-2 text-primary" />
                <span className="mx-2 text-gray-300 truncate w-72">
                  Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <FaPhone className="w-6 h-6 mx-2 text-primary" />
                <span className="mx-2 text-gray-300 truncate w-72">
                  (257) 563-7401
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <FaEnvelope className="w-6 h-6 mx-2 text-primary" />
                <span className="mx-2 text-gray-300 truncate w-72">
                  acb@example.com
                </span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-gray-200">Follow us</h3>
              <div className="flex mt-4 -mx-1.5">
                <a
                  className="mx-1.5 text-gray-200 hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  <FaTwitter className="w-8 h-8" />
                </a>
                <a
                  className="mx-1.5 text-gray-200 hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  <FaLinkedin className="w-8 h-8" />
                </a>
                <a
                  className="mx-1.5 text-gray-200 hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  <FaFacebook className="w-8 h-8" />
                </a>
                <a
                  className="mx-1.5 text-gray-200 hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  <FaInstagram className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 py-10 bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50">
              <h1 className="text-lg font-medium text-gray-700">
                What do you want to ask
              </h1>

              <form className="mt-6">
                <div className="flex-1">
                  <label className="text-gray-600 mb-4 font-mono">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-primary focus:ring-primary focus:outline-none"
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="text-gray-600 mb-4 font-mono">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-primary focus:ring-primary focus:outline-none"
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="text-gray-600 mb-4 font-mono">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-primary focus:ring-primary focus:outline-none"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-6 text-sm font-medium text-white bg-primary rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300">
                  Get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
