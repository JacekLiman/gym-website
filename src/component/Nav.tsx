

import { nav } from "../data";

const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center text-white gap-5">
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <a className="inline-block px-2 hover:text-primary-200 transition-all" href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
