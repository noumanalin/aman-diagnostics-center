import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import TopNavbar from "./TopNavbar";
import { navbarLinks } from "../../Data/Navbar";
import NavButton from "./NavButton";
import MobileMenu from "./MobileMenu";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // ✅ Custom function to check parent active based on exact match or dropdown link match
  const isParentActive = (item) => {
    if (item.href === location.pathname + location.search) return true;

    if (item.dropDown) {
      return item.dropDown.some(
        (child) =>
          child.href === location.pathname + location.search ||
          (child.dropDown &&
            child.dropDown.some(
              (sub) => sub.href === location.pathname + location.search
            ))
      );
    }
    return false;
  };

  return (
    <>
      <TopNavbar />
      <header className="wrapper flex items-center justify-between py-2 relative">
        {/* Logo */}
        <Link to={"/"}>
          <img src="/assets/logo.png" alt="logo" className="w-50 md:w-70" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 relative">
          {navbarLinks.map((item, i) => {
            const active = isParentActive(item);

            return (
              <div key={i} className="relative group">
                <NavLink
                  to={item.href}
                  className={`capitalize font-medium transition-colors flex items-center gap-1 ${
                    active
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                >
                  {item.title}
                  {item.dropDown && (
                    <ChevronDown
                      size={14}
                      className="transition-transform group-hover:rotate-180"
                    />
                  )}
                </NavLink>

                {/* Dropdown */}
                {item.dropDown && (
                  <div
                    className="absolute left-0 top-full opacity-0 invisible group-hover:visible group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 
                    bg-white shadow-md rounded-md mt-2 py-2 min-w-[200px] z-50 transition-all duration-200"
                  >
                    {item.dropDown.map((drop, j) => (
                      <DropdownItem key={j} item={drop} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <NavButton href="/appointment">Book an Appointment</NavButton>

          {/* Hamburger */}
          <button
            className="flex flex-col justify-center items-center lg:hidden space-y-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`w-7 h-1 bg-gray-600 rounded transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-7 h-1 bg-gray-600 rounded transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-7 h-1 bg-gray-600 rounded transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>

      <hr className="wrapper text-gray-400" />

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} links={navbarLinks} />
    </>
  );
};

// ✅ DropdownItem (fix exact query match)
const DropdownItem = ({ item }) => {
  const location = useLocation();
  const fullPath = location.pathname + location.search;

  const isActive =
    fullPath === item.href ||
    (item.dropDown &&
      item.dropDown.some((sub) => sub.href === fullPath));

  return (
    <div className="relative group/item">
      <NavLink
        to={item.href}
        className={`block px-4 py-2 capitalize transition-colors flex items-center justify-between 
        ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"}`}
      >
        {item.title}
        {item.dropDown && (
          <ChevronDown
            size={14}
            className="ml-1 transition-transform group-hover/item:rotate-180"
          />
        )}
      </NavLink>

      {item.dropDown && (
        <div
          className="absolute left-full top-0 opacity-0 invisible 
          group-hover/item:opacity-100 group-hover/item:visible 
          bg-white shadow-md rounded-md py-2 min-w-[200px] z-50 
          transition-all duration-200"
        >
          {item.dropDown.map((sub, i) => (
            <DropdownItem key={i} item={sub} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
