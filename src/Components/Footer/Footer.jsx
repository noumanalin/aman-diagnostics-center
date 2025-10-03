import { Link } from "react-router-dom";
import { navbarLinks, socialLinks } from "../../Data/Navbar";
import logo from "/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-700 pt-12">
      <section className="wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* 1. Logo & Company Info */}
        <article className="text-center md:text-left">
          <img src={logo} alt="Aman Labs Logo" className="w-40 mb-4 mx-auto md:mx-0" />
          <p className="text-sm mb-2 italic text-gray-600">
            Reliable Diagnostic Services You Can Trust
          </p>
          <p className="text-sm">
            Office No 05-A, Ground Floor, Wasil Plaza, Near Haleem Ghar,
            <br /> Blue Area, Islamabad
          </p>
          <p className="text-sm mt-2">
            <strong>Phone:</strong>{" "}
            <a href="tel:+92512120751" className="hover:text-[var(--primary-red)]">
              051 2120751
            </a>
            ,{" "}
            <a href="tel:+923365660653" className="hover:text-[var(--primary-red)]">
              +92 336 5660653
            </a>
          </p>
          <p className="text-sm">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:amanlabs2012@gmail.com"
              className="hover:text-[var(--primary-red)]"
            >
              amanlabs2012@gmail.com
            </a>
          </p>
        </article>

        {/* 2. Quick Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-2">
            {navbarLinks.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-sm text-gray-600 hover:text-[var(--primary-red)] transition-colors capitalize"
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </div>

        {/* 3. Diagnostics Services */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">Diagnostics Services</h2>
          <ul className="flex flex-col gap-2">
            {navbarLinks[2]?.dropDown?.slice(0, 7).map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-sm text-gray-600 hover:text-[var(--primary-red)] transition-colors capitalize"
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </div>

        {/* 4. Social Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">Connect With Us</h2>
          <p className="text-sm text-gray-600">
            Follow us for health tips, updates, and exclusive offers.
          </p>

          <div className="flex justify-center md:justify-start space-x-3 mt-3 ">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-10 h-10 flex items-center justify-center 
                 border border-gray-400 text-gray-600  overflow-hidden"
              >
                {/* Background Overlay (slides up on hover) */}
                <span
                  className="absolute bottom-[-100%] left-0 w-full h-full 
                   bg-gradient-to-b from-[var(--secondary-blue)] to-[var(--primary-red)] 
                   transition-all duration-500 ease-out 
                   group-hover:bottom-0"
                ></span>

                {/* Icon */}
                <item.icon
                  size={18}
                  className="relative z-10 transition-colors duration-300 group-hover:text-white"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <hr className="wrapper border-gray-300 my-8" />

      {/* Copyright */}
      <section className="wrapper py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} <strong>Aman Labs & Diagnostics Center</strong>. All Rights Reserved.
      </section>
    </footer>
  );
};

export default Footer;
