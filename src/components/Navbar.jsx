import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo11.jpg";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout, getCartCount, setShowSearch } =
    useContext(ShopContext);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A] text-white text-center text-sm py-2">
        Exclusive Price Drop!{" "}
        <span className="underline underline-offset-2">Offer Ends Soon!</span>
      </div>
      <nav className="flex items-center justify-between px-4 md:px-16 py-3 relative">
        <Link to="/">
          <img src={Logo} className="w-32 md:w-40" alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-6">
          {["/", "/collection", "/about", "/contact"].map((path, i) => {
            const text = path === "/" ? "Home" : path.slice(1).toUpperCase();
            return (
              <NavLink
                key={i}
                to={path}
                className={({ isActive }) =>
                  `relative px-2 py-1 text-sm font-medium transition duration-300 ${
                    isActive
                      ? "text-indigo-600"
                      : "text-gray-700 hover:text-indigo-500"
                  } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full`
                }
              >
                {text}
              </NavLink>
            );
          })}
          <img
            onClick={() => setShowSearch(true)}
            className="w-5 cursor-pointer"
            src={assets.search_icon}
            alt="search"
          />
          <NavLink to="/cart" className="relative">
            <img src={assets.Shopping_cart} className="w-5" alt="cart" />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-4 h-4 flex items-center justify-center rounded-full">
                {getCartCount()}
              </span>
            )}
          </NavLink>
          {!user ? (
            <NavLink
              to="/login"
              className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm"
            >
              Login
            </NavLink>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-2 hover:bg-gray-100"
              >
                <img
                  src={`https://ui-avatars.com/api/?name=${user.name}`}
                  alt="profile"
                  className="w-8 h-8 rounded-full"
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg text-sm overflow-hidden">
                  <Link
                    to="/collection"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Products
                  </Link>
                  <Link
                    to="/order"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Orders
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden text-indigo-600 cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {mobileOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-3 px-5 py-4 sm:hidden">
            {/* When NOT logged in → Show all pages + Login */}
            {!user && (
              <>
                {["/", "/collection", "/about", "/contact"].map((path, i) => {
                  const text =
                    path === "/" ? "Home" : path.slice(1).toUpperCase();
                  return (
                    <NavLink
                      key={i}
                      to={path}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-700"
                      }
                    >
                      {text}
                    </NavLink>
                  );
                })}

                <NavLink
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm text-center"
                >
                  Login
                </NavLink>
              </>
            )}

            {/* When LOGGED IN → Show ONLY Products, Orders, Logout */}
            {user && (
              <>
                <NavLink
                  to="/collection"
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-700 py-2"
                >
                  Products
                </NavLink>

                <NavLink
                  to="/order"
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-700 py-2"
                >
                  Orders
                </NavLink>

                <button
                  onClick={() => {
                    logout();
                    setMobileOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
