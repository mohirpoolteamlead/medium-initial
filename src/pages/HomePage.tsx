import Navbar from "@/components/HomePage/Navbar";
import HeroSection from "@/components/HomePage/HeroSection";
import Footer from "@/components/HomePage/Footer";

const HomePage = () => {
  return (
    <div className="bg-[#f7f4ed] h-screen overflow-hidden">
      <div className="max-w-screen-2xl mx-auto h-full">
        {/* Navbar */}
        <Navbar />
        {/* Hero Section */}
        <HeroSection />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
