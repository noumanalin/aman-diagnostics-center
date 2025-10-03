import { MailIcon, Phone } from "lucide-react";
import { socialLinks } from "../../Data/Navbar";

const TopNavbar = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-red-600 w-full text-white text-sm">
      <article className="container mx-auto px-2 py-1 flex items-center justify-center text-center gap-3 flex-wrap">
        {/* Phone */}
        <span className="flex items-center gap-1">
          <Phone size={16} />
          <a href="tel:+923365660653">+92 336 5660653</a>
        </span>

        {/* Email */}
        <span className="flex items-center gap-1">
          <MailIcon size={16} />
          <a href="mailto:amanlabs2012@gmail.com">amanlabs2012@gmail.com</a>
        </span>

        <span>|</span>

        {/* Social Links */}
        <span className="flex items-center gap-2">
          {socialLinks &&
            socialLinks.map((item, index) => {
              const Icon = item.icon; // dynamically pick icon
              return (
                <a
                  key={index}
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.title}
                  className="hover:text-gray-200 transition-colors"
                >
                  <Icon size={16} />
                </a>
              );
            })}
        </span>
      </article>
    </section>
  );
};

export default TopNavbar;
