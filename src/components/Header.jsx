import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "./lyout.jsx/Container";
import { useSelector } from "react-redux";
import Logout from "../pages/LogoutButton";
import { SiSuzuki } from "react-icons/si";
import { MdAddCall } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const navigate = useNavigate();

  const status = useSelector((state) => state.auth.status);

  const navItems = [
    {
      name: "About us",
      slug: "about",
      active: true,
    },
    {
      name: "Cars",
      slug: "/cars",
      active: true,
    },
    {
      name: "Create Enquiry",
      slug: "/enquiry",
      active: true,
    },
    {
      name: "Test Drive",
      slug: "/test_drive",
      active: true,
    },
    // {
    //   name: "Book Now",
    //   slug: "/book",
    //   active: true,
    // },
    {
      name: "Video",
      slug: "/video",
      active: true,
      //   active: !status,
    },
    // {
    //   name: "Login",
    //   slug: "/login",
    //   active: !status,
    // },
  ];

  const [isShow, setIsShow] = useState(false);

  return (
    <header className={`shadow sticky z-50 top-0 header `}>
      <nav className="nav">
        <div>
          <ul>
            <li className="flex items-center mx-4">
              <SiSuzuki className="mx-2" size={20} color="pink" />
              <NavLink className="text-gray-500  md:text-md text-xs">
                Nexa Bariatu
              </NavLink>
              <li className="flex items-center lg:hidden flex mx-4">
                <MdAddCall className="mr-1" />
                <NavLink className="text-sm font-normal	 text-gray-900">
                  7463883147
                </NavLink>
              </li>
            </li>
          </ul>
        </div>

        <div className="nav__menu">
          <ul className={`lg:flex nav__menu__left ${isShow ? "show" : "hide"}`}>
            {navItems.map((item) => {
              return item.active ? (
                <li className="m-4" key={item.name}>
                  <NavLink
                    to={item.slug}
                    onClick={() => setIsShow(false)}
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-blue-500" : "text-black-500"
                      } text-sm font-normal	 `
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ) : null;
            })}
          </ul>
        </div>

        <div>
          <ul>
            <li className="flex items-center lg:flex hidden mx-4">
              <MdAddCall className="mr-1" />
              <NavLink className="text-sm font-normal	 text-black-900">
                7463883147
              </NavLink>
            </li>

            <li className="flex items-center lg:hidden flex mr-4">
              <GiHamburgerMenu
                size={24}
                color="black"
                className="cursor-pointer"
                onClick={() => setIsShow((prev) => !prev)}
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// <ul>
//     {navItems?.map((item) => {
//         return item?.active ? (
//             <li key={item?.name}>
//                 <button
//                     onClick={() => {
//                         navigate(item?.slug)
//                     }}
//                 >
//                     {item.name}
//                 </button>
//             </li>
//         ) : null
//     })}
//     {status && <Logout>logout</Logout>}
// </ul>
