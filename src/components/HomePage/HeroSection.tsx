import { AuthScreen } from "@/utils/enums/auth.enum";
import heroImage from "../../assets/home_hero.png";

interface IProps {
  openModal: (screen: AuthScreen) => void;
}

export const HeroSection = ({ openModal }: IProps) => {
  return (
    <div className="hero h-4/5 border-b overflow-hidden border-black flex items-center justify-between">
      <div className="p-4 md:pl-36">
        <h1 className="text-6xl sm:text-8xl md:text-[120px] font-serif font-medium leading-tight text-[#242424] tracking-tighter">
          Human <br className="hidden md:block" /> stories & ideas
        </h1>
        <p className="mt-6 text-[#242424] text-base sm:text-xl md:text-2xl">
          A place to read, write, and deepen your understanding
        </p>

        <button
          onClick={() => openModal(AuthScreen.REGISTER)}
          className="mt-8 h-12 rounded-full text-lg px-12 bg-black text-white"
          role="button"
        >
          Start Reading
        </button>
      </div>
      <img
        src={heroImage}
        alt="Hero Image"
        className="max-w-md -mb-12 hidden md:block"
      />
    </div>
  );
};

export default HeroSection;
