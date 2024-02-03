import { header } from "../data";
import Nav from "./Nav";

import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {
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

          <div className="lg:flex items-center gap-5 hidden ">
            <button className="btn btn-sm bg-transparent text-white hover:text-primary-200 transition-all">
              {header.btnLoginText}
            </button>
            <button className="btn btn-sm btn-primary">
              {header.btnSignupText}
            </button>
          </div>

          <button className="text-primary-200 text-2xl lg:hidden">
            <RiMenu4Fill />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
