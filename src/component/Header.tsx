import { header } from "../data";
import Nav from "./Nav";

import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";


type HeaderProps = {
    isOpen:boolean,
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ isOpen, setIsOpen }:HeaderProps) => {

  
  return (
    <header className="fixed top-0 left-0 w-screen z-10">
      <div className="max-w-[1444px] mx-auto">
        <div className="py-6 px-10 flex justify-between items-center">
          <div>
            <a href="/">
              <img className="h-[30px]" src={header.logo} alt="" />
            </a>
          </div>
          <div className="hidden lg:block">
            <Nav />
          </div>

          <div className="lg:flex items-center gap-3 hidden ">
            <button className="btn btn-sm bg-transparent text-white hover:text-primary-200 transition-all">
              {header.btnLoginText}
            </button>
            <button className="btn btn-sm btn-primary">
              {header.btnSignupText}
            </button>
          </div>

          {isOpen ? (
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-200 text-2xl lg:hidden"
            >
              <RiMenu4Fill />
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(true)}
              className="text-primary-200 text-2xl lg:hidden"
            >
              <RiCloseFill />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
