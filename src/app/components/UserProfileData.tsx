// UserProfileData.jsx
import { MdOutlineSettings } from "react-icons/md";
const useUserProfileData = () => {
  const userProfileData = [
    {
      icon: <MdOutlineSettings style={{ height: "100%" }} />,
      title: "Perfil",
      desc: "Cuenta",
      iconColor: "#03C9D7",
      iconBg: "#E5FAFB",
    },
  ];

  return userProfileData;
};

export default useUserProfileData;
