import { useEffect, useState } from "react";
import { header } from "../data";
import Nav from "./Nav";

import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

type HeaderProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ isOpen, setIsOpen }: HeaderProps) => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setIsScrolling(true) : setIsScrolling(false);
    });
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50`}>
      <div
        className={`${
          isScrolling ? "bg-neutral-500" : "bg-transparent"
        }   max-w-[1440px] mx-auto transition-all duration-500`}
      >
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
              <RiCloseFill />
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(true)}
              className="text-primary-200 text-2xl lg:hidden"
            >
              <RiMenu4Fill />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
