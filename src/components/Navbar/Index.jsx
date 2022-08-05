import React, { useState } from "react";
import logo from "../../assets/logo.png";
import moon from "../../assets/moon.png";
import { Link } from "react-scroll";

const Index = ({ setmode }) => {
  const [toogleMenu, setToogleMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  if (darkMode) {
    setmode("dark");
    document.body.classList.add("dark");
  } else {
    setmode("light");
    document.body.classList.remove("dark");
  }

  const menus = [
    {
      id: 1,
      title: "homepage",
    },
    {
      id: 2,
      title: "about",
    },
    {
      id: 3,
      title: "services",
    },
    {
      id: 4,
      title: "works",
    },
    {
      id: 5,
      title: "contact",
    },
  ];
  return (
    <div>
      <nav className="w-full fixed top-0 bg-white z-10 dark:bg-slate-900">
        <div className="container mx-auto py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="w-8" src={logo} alt="" />
            <span className="text-2xl font-bold text-indigo-900 dark:text-white">
              {"<Ynsalc />"}
            </span>
          </div>
          <ul className="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase">
            {menus.map((menu) => (
              <Link
                key={menu.id}
                to={menu.title}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-gray-500 cursor-pointer"
              >
                {menu.title}
              </Link>
            ))}
          </ul>
          <img
            id="moon"
            src={moon}
            className="hidden md:block w-5 cursor-pointer"
            alt=""
            onClick={() => setDarkMode(!darkMode)}
          />
          <div
            id="hamburger"
            className="space-y-1 md:hidden cursor-pointer z-20"
            onClick={() => setToogleMenu(!toogleMenu)}
          >
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </div>
          <ul
            id="menu"
            className={`${
              toogleMenu ? null : "hidden"
            } bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center`}
          >
            {menus.map((menu) => (
              <Link
                key={menu.id}
                to={menu.title}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-gray-500 cursor-pointer"
              >
                {menu.title}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Index;
