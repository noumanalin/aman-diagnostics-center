
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Car,
  Briefcase,
  FileText,
  MessageSquare,
  ClipboardCheck,
} from "lucide-react";
import { fade, once } from '../../Data/Motion'
import MyButton from "../MyButton";
import WavesBg from "../WavesBg";

// Features Array
const features = [
  { icon: Car, label: "Road Safety Initiative" },
  { icon: Briefcase, label: "Corporate Portal" },
  { icon: FileText, label: "Online Reports" },
  { icon: MessageSquare, label: "Feedback / Complaints" },
  { icon: ClipboardCheck, label: "Home Sample Collection" },
];

const HeroBanner = () => {
  return (
    <WavesBg>
      <section className="wrapper flex flex-col lg:flex-row items-center justify-between gap-10 py-10 ">
        {/* Left Text Section */}
        <motion.article
          variants={fade("right", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once }}
          className="text-center lg:text-left  space-y-1 z-10">
          <h3 className="text-lg font-medium text-gray-500">
            Welcome to <span className="bg-gradient-to-r from-[var(--primary-red)] to-[var(--secondary-blue)] bg-clip-text text-transparent">Aman Diagnostic Center</span>
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
            Most Trusted and <br className="hidden md:block" />
            <span
              className="bg-gradient-to-r from-[var(--primary-red)] to-[var(--secondary-blue)] bg-clip-text text-transparent"
            >
              Reliable Diagnostic
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            Services Provider in Pakistan
          </p>
          <MyButton className="uppercase">
            <Link to={"/contact"}>Contact Us</Link>
          </MyButton>
        </motion.article>

        {/* Right Features Card */}
        <motion.div
          variants={fade("left", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once }}

          className="relative border border-gray-300 rounded-2xl p-6 w-full max-w-sm space-y-4 z-10
     
     before:content-[''] before:absolute before:inset-0 before:rounded-2xl
     before:bg-[url('/assets/noise.jpeg')] before:bg-contain before:bg-repeat before:opacity-10 before:pointer-events-none"
        >
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition
       border border-gray-200 hover:bg-white/60 text-gray-800"
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <span className="text-base">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>


      </section>
    </WavesBg>
  );
};

export default HeroBanner;
