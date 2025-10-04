import { Link } from "react-router-dom";


const NavButton = ({ children, href="/" }) => {
  return (
    <Link to={href}
      className="
        relative group inline-flex items-center justify-center
        px-3 py-2 md:px-8 md:py-3 rounded-md font-semibold text-white text-base
        transition-all duration-300 ease-in-out
        bg-gradient-to-r from-[var(--primary-red)] to-[var(--secondary-blue)]
        hover:shadow-[0_0_12px_var(--primary-red),0_0_12px_var(--color-secondary)] 
        overflow-hidden 
      "
    >
      {/* Expanding overlay on hover */}
      <span
        className="
          absolute left-0 block w-full h-0 
          transition-all duration-500 ease 
          bg-[var(--primary-red)] opacity-30 
          group-hover:h-full top-1/2 group-hover:top-0
        "
      />

      {/* Arrow SVG (slides in) */}
      <span
        className="
          absolute right-0 flex items-center justify-start 
          w-10 h-10 duration-300 transform 
          translate-x-full group-hover:translate-x-0 ease
        "
      >
        <svg
          className="w-5 h-5 -rotate-45"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>

      {/* Button text */}
      <span
        className="
          relative text-sm md:text-base text-center font-semibold
          transition-all duration-300 group-hover:-translate-x-3
        "
      >
        {children}
      </span>
    </Link>
  );
}

export default NavButton