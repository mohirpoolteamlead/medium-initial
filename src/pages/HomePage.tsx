import Navbar from "@/components/HomePage/Navbar";
import HeroSection from "@/components/HomePage/HeroSection";
import Footer from "@/components/HomePage/Footer";
import AuthModal from "@/components/auth/auth-modal";
import { useState } from "react";
import { AuthScreen } from "@/utils/enums/auth.enum";

const HomePage = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authScreen, setAuthScreen] = useState<AuthScreen>(AuthScreen.LOGIN);

  const openModal = (screen: AuthScreen) => {
    setAuthScreen(screen);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="bg-[#f7f4ed] h-screen overflow-hidden">
      <div className="max-w-screen-2xl mx-auto h-full">
        {/* Navbar */}
        <Navbar openModal={openModal} />
        {/* Hero Section */}
        <HeroSection openModal={openModal} />
        {/* Footer */}
        <Footer />
      </div>
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        setAuthScreen={setAuthScreen}
        screen={authScreen}
      />
    </div>
  );
};

export default HomePage;
