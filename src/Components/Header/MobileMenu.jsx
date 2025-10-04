import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const MobileMenu = ({ isOpen, setIsOpen, links }) => {
  return (
    <div
      className={`fixed inset-0 z-40 transition ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* Background overlay */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sheet Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with close button */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            className="text-2xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col mt-4 px-4">
          {links.map((item, i) => (
            <MobileDropdownItem
              key={i}
              item={item}
              depth={0}
              setIsOpen={setIsOpen}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

// ✅ Helper to check if a parent or nested link is active
const useIsParentActive = (item) => {
  const location = useLocation();
  const fullPath = location.pathname + location.search;

  if (item.href === fullPath) return true;

  if (item.dropDown) {
    return item.dropDown.some(
      (child) =>
        child.href === fullPath ||
        (child.dropDown &&
          child.dropDown.some((sub) => sub.href === fullPath))
    );
  }

  return false;
};

// ✅ Recursive dropdown item
const MobileDropdownItem = ({ item, depth, setIsOpen }) => {
  const [isOpen, setLocalOpen] = useState(false);
  const active = useIsParentActive(item);

  return (
    <div className="flex flex-col">
      {/* Main link / toggle */}
      <div
        className="flex items-center justify-between cursor-pointer py-2"
        onClick={() => item.dropDown && setLocalOpen(!isOpen)}
      >
        <NavLink
          to={item.href}
          onClick={() => setIsOpen(false)}
          className={`capitalize font-medium transition-colors ${
            active ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
          }`}
        >
          {item.title}
        </NavLink>

        {item.dropDown && (
          <ChevronDown
            size={16}
            className={`transition-transform ${
              isOpen ? "rotate-180" : ""
            } ${active ? "text-blue-600" : "text-gray-600"}`}
          />
        )}
      </div>

      {/* Dropdown children */}
      {item.dropDown && isOpen && (
        <div className="flex flex-col pl-4 border-l border-gray-200">
          {item.dropDown.map((child, i) => (
            <MobileDropdownItem
              key={i}
              item={child}
              depth={depth + 1}
              setIsOpen={setIsOpen}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
