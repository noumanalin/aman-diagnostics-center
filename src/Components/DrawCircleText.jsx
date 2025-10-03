
import { motion } from "framer-motion";

export const DrawCircleText = ({children, svgClasses}) => {
  return (
        <span className="relative px-4 py-3 overflow-visible">
         {children}
          <svg
            viewBox="0 0 300 150"
            fill="none"
            className={`absolute -left-3 -right-3 ${svgClasses}  translate-y-1`}
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#2E3092"
              strokeWidth="5"
              transform="scale(1,1.3)"
            />
          </svg>
          </span>
  );
};