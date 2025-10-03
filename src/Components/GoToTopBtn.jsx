import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const GoToTopBtn = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;

    setScrollPercent(scrolled);
    setIsVisible(scrollTop > 200); // Show button after scrolling a bit
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={goToTop}
      className={`fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center 
      z-50 transition-all duration-500 ease-out
      ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
      title="Go To Top"
      style={{
        background: `conic-gradient(var(--primary-red) ${scrollPercent}%, var(--secondary-blue) ${scrollPercent}%)`,
      }}
    >
      <div
        className="w-[46px] h-[46px] rounded-full flex items-center justify-center 
        bg-white/10 backdrop-blur-md 
        border border-white/20 shadow-lg shadow-[var(--primary-red)]/30
        hover:shadow-[var(--secondary-blue)]/50 hover:scale-110 
        transition-all duration-300"
      >
        <ArrowUp
          className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
          size={22}
        />
      </div>
    </button>
  );
};

export default GoToTopBtn;
