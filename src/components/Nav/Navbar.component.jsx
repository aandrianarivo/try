import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Nav = () => {
  let Links = [
    { name: "Discover", link: "/Tamala" },
    { name: "About", link: "about" },
    { name: "Our service", link: "services" },
    { name: "Contact us", link: "#contact" },
  ];

  let [open, setOpen] = useState(false);
  let [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="shadow-md w-full">
      <div className="w-full md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FaBarsStaggered style={{ color: "white" }} />
        </div>
        <div className="w-full">
          <ul
            className={`w-full flex items-center justify-center text-center md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link, index) => (
              <li
                key={index}
                className="md:ml-8 text-xl md:my-0 my-7 mx-7 relative m-5"
                onMouseEnter={() => link.name === "Discover" && setDropdownOpen(true)}
                onMouseLeave={() => link.name === "Discover" && setDropdownOpen(false)}
              >
                <Link
                  to={link.link}
                  className="text-gray-700 hover:text-gray-400 duration-500"
                >
                  <strong>{link.name}</strong>
                </Link>
                {link.name === "Discover" && dropdownOpen && (
                  <ul className="absolute top-full left-0 bg-white shadow-lg mt-1 w-40">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/Tamala/discover/artisants">The artisants</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/Tamala/discover/crafts">The crafts</Link>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
