import React from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import NavbarLinks from "../../data/navbar-links";
import { RiArrowRightUpLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import ProfileDropDown from "../core/Auth/ProfileDropDown";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-gray-600 bg-black">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to="/">
          <img src={logo} width={160} height={42} loading="lazy" />
        </Link>

        <div>
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <Link to={link?.path}>
                  <p
                    className={`${
                      matchRoute(link?.path)
                        ? "text-white border-b-[1px] border-b-white"
                        : "text-gray-400"
                    }`}
                  >
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Login/SignUp/Dashboard */}
        <div className="flex gap-x-4 items-center">
          {token === null && (
            <Link to="/login" className="flex flex-row items-center gap-x-2">
              <button className="text-gray-100 flex flex-row items-center">
                Login
                <RiArrowRightUpLine className="h-5 w-5" />
              </button>
            </Link>
          )}

          {token !== null && 
          <ProfileDropDown />
           } 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
