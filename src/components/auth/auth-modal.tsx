import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { AuthScreen } from "@/utils/enums/auth.enum";
import Login from "./login/login";
import Register from "./register/register";

interface IProps {
  screen: AuthScreen;
  isOpen: boolean;
  onClose: () => void;
  setAuthScreen: (value: AuthScreen) => void;
}

const AuthModal = ({ screen, isOpen, onClose, setAuthScreen }: IProps) => {
  const screenComponents = {
    login: <Login setAuthScreen={setAuthScreen} />,
    register: <Register setAuthScreen={setAuthScreen} />,
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay
        className="fixed inset-0 bg-black/50"
        aria-hidden="true"
        onClick={onClose}
      />
      <DialogContent className="sm:max-w-[425px]">
        {screenComponents[screen]}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
