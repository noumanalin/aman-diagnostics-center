import MyButton from "../MyButton";
import { motion } from "framer-motion";
import { fade, once } from "../../Data/Motion";
import { Phone } from "lucide-react"; // ✅ Lucide React icons (or use Heroicons/FontAwesome)

const FreeHomeSample = () => {
  return (
    <section className="w-screen h-auto min-h-[80vh] bg-[url('/assets/sample-banner.jpg')] bg-cover bg-center bg-fixed bg-no-repeat relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-0" />

      <div className="wrapper py-16 relative z-20 h-full min-h-[80vh] flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Content Section */}
          <motion.article
            variants={fade("right", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once }}
            className="flex-1 text-gray-100 text-center lg:text-left max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Free Home Sample Collection{" "}
              <span className="bg-gradient-to-r from-[var(--primary-red)] to-[var(--secondary-blue)] bg-clip-text text-transparent">
                At Your Doorstep
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed text-gray-200/90 pr-5 md:p-0">
              If you are looking for the best medical laboratory then IDC is
              always there. Get laboratory tests done easily with our Home
              Sample Collection.
            </p>

            {/* Trust Indicators */}
            <div className="mb-8 flex flex-col gap-3 justify-center lg:justify-start text-sm md:text-base">
              {[
                "Certified Lab Technicians",
                "Quick & Safe Process",
                "Free Service",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 w-fit bg-white/10 px-5 py-2 rounded-full backdrop-blur-sm border border-white/20 shadow-sm hover:bg-white/20 transition"
                >
                  <span className="w-2.5 h-2.5 bg-[var(--primary-red)] rounded-full animate-pulse"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <MyButton>BOOK A FREE SAMPLE</MyButton>

              <div className="flex flex-col sm:flex-row items-center gap-4 text-lg md:text-xl font-medium">
                <span className="opacity-80">or Call Us</span>

                {/* Phone with ring animation */}
                <a
                  href="tel:+923365660653"
                  title="click to call Now?"
                  className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 shadow hover:bg-white/20 transition"
                >
                  {/* Animated phone icon */}
                  <motion.div
                    animate={{
                      rotate: [0, -15, 15, -15, 0],
                      scale: [1, 1.1, 1, 1.1, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    <Phone className="w-6 h-6 text-[var(--primary-red)]" />
                  </motion.div>
                  <strong>+92 336 5660653</strong>
                </a>
              </div>
            </div>
          </motion.article>

          {/* Image Section */}
          <motion.figure
            variants={fade("left", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative max-w-md lg:max-w-lg xl:max-w-xl">
              <img
                src="/assets/lab-technician.png"
                alt="Lab Technician providing home sample collection"
                className="w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-[var(--primary-red)] text-white px-6 py-3 rounded-xl shadow-lg transform rotate-[-3deg]">
                <div className="text-sm font-bold">24/7 Available</div>
                <div className="text-xs opacity-90">Quick Response</div>
              </div>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default FreeHomeSample;
