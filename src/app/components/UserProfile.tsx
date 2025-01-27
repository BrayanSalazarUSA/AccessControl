import { Logout } from "@mui/icons-material";
import React, { useRef } from "react";
import { MdOutlineCancel } from "react-icons/md";
import useOutsideClick from "../helpers/useIutsideClick.js"

interface UserProfileProps {
  userProfile: {
    name: string;
    role: { rolName: string };
    email: string;
    image: string | null;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({setIsClicked}) => {
  const userRef = useRef<HTMLDivElement>(null);

  const handleProfileClick = () => {
    // Acción para manejar el clic en el perfil
    console.log("Perfil clickeado");
  };

useOutsideClick(userRef, () => setIsClicked(prev => ({ ...prev, userProfile: false })));

  return (
    <div
      ref={userRef}
      className="z-50 nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] py-3 rounded-lg w-[340px]"
    >
 
      <div className="flex gap-5 items-center mt-3 border-color border-b-1 pb-6 px-8 ">
        <img
          className="rounded-full h-16 w-16 userimg"
          src={"https://innova-bucket.s3.amazonaws.com/profiles/profile.png"}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-lg dark:text-gray-200">
            Brayan Salazar
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Administrador
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            brayan@accescontrol.net
          </p>
        </div>
        <button
                onClick={()=> setIsClicked(prev => ({ ...prev, userProfile: false }))}
                  type="button"
                  className="text-gray-300 absolute top-6 right-2 text-lg rounded p-1 px-2 bg-orange"
                ><MdOutlineCancel />
                </button>
      </div>
     
      <div>
      
        {[
          {
            title: "Ajustes",
            desc: "Configura tu cuenta",
            icon: "⚙️",
            hoverClass: "",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex gap-5 px-8 border-t-[1.5px] border-b-[1.5px] border-gray-500 p-1 cursor-pointer dark:hover:bg-secondary-dark-bg`}
            onClick={handleProfileClick}
          >
            
            <div>
              <p className="font-semibold dark:text-gray-200">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))} 
      </div>
      <div className="mt-3 px-10">
        <button
          type="button"
          className={`bg-secondary p-2  rounded-xl w-full xhover:drop-shadow-xl `}
        >
         <Logout/> Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
