import { nav } from "../data";
import { header } from "../data";

type NavMobileProps = {
    isOpen:boolean
}

const NavMobile = ({ isOpen }:NavMobileProps) => {

  return (
    <div
      className={`lg:hidden fixed w-screen h-screen top-0 left-0 bg-neutral-500 flex items-center justify-center transition-all duration-400  ${
        isOpen ? "-translate-y-0" : "-translate-y-full"
      }  `}
    >
      <nav>
        <ul className="text-center text-white space-y-5">
          {nav.map((item, idx) => {
            return (
              <li key={idx}>
                <a
                  className="text-white hover:text-primary-200 transition-all"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-20 flex gap-10">
        <button className="btn btn-sm text-white hover:text-primary-200 transition">{header.btnLoginText}</button>
        <button className="btn btn-sm btn-primary ">
          {header.btnSignupText}
        </button>
      </div>
    </div>
  );
};

export default NavMobile;
