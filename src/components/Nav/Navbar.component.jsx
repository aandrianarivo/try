import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICES", link: "#services" },
    { name: "ABOUT", link: "#about" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-stone-800 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center  text-stone-100">
          Tamalà
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FaBarsStaggered style={{ color: "white" }} />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-stone-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-stone-100 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
