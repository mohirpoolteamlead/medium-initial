import { AuthScreen } from "@/utils/enums/auth.enum";
import logo from "../../assets/logo.svg";

interface IProps {
  openModal: (screen: AuthScreen) => void;
}

export const Navbar = ({ openModal }: IProps) => {
  return (
    <div className="navbar h-[75px] px-2 md:px-36 py-6 border-b border-black flex justify-between items-center">
      <img width={112} height={25} src={logo} alt="Logo" />
      <ul className="flex gap-6 text-sm font-medium items-center">
        <li
          onClick={() => openModal(AuthScreen.LOGIN)}
          className="hidden md:block cursor-pointer"
        >
          Write
        </li>
        <li
          onClick={() => openModal(AuthScreen.LOGIN)}
          className="hidden md:block cursor-pointer"
        >
          Sign in
        </li>
        <li
          onClick={() => openModal(AuthScreen.REGISTER)}
          className="bg-black text-white rounded-full px-3 py-2 cursor-pointer"
          role="button"
        >
          Get Started
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
