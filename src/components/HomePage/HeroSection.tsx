import heroImage from "../../assets/home_hero.png";

export const HeroSection = () => {
  return (
    <div className="hero h-4/5 border-b overflow-hidden border-black flex items-center justify-between">
      <div className="p-4 md:pl-36">
        <h1 className="text-6xl sm:text-8xl md:text-[120px] font-serif font-medium leading-tight text-[#242424] tracking-tighter">
          Human <br className="hidden md:block" /> stories & ideas
        </h1>
        <p className="mt-6 text-[#242424] text-base sm:text-xl md:text-2xl">
          A place to read, write, and deepen your understanding
        </p>

        <button className="mt-8 h-12 rounded-full text-lg px-12 ">
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
