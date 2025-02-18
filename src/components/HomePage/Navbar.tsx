import logo from "../../assets/logo.svg";

export const Navbar = () => {
  return (
    <div className="navbar h-[75px] px-2 md:px-36 py-6 border-b border-black flex justify-between items-center">
      <img width={112} height={25} src={logo} alt="Logo" />
      <ul className="flex gap-6 text-sm font-medium items-center">
        <li className="hidden md:block cursor-pointer">Write</li>
        <li className="hidden md:block cursor-pointer">Sign in</li>
        <li className="bg-black text-white rounded-full px-3 py-2 cursor-pointer">
          Get Started
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
