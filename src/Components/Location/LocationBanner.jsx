import { motion } from "framer-motion";
import { useParams, useSearchParams } from "react-router-dom";
import { locations } from "../../Data/locations";
import Map from "../../Components/Location/Map";
import { Clock10, Mail, MapPin, Phone, LocateIcon } from "lucide-react";
import MapsProvider from "./MapsProvider";

const LocationBanner = () => {
  const { city } = useParams();
  const [searchParams] = useSearchParams();
  const subBranch = searchParams.get("branch");

  const locKey = Object.keys(locations).find(
    (key) => key.toLowerCase() === city.toLowerCase()
  );
  const loc = locations[locKey];

  if (!loc) {
    return (
      <div className="py-20 text-center text-xl text-red-600">
        ❌ Sorry, we don’t have data for this location.
      </div>
    );
  }

  let branches = loc.branches || [loc];
  if (subBranch && loc.branches) {
    branches = loc.branches.filter((b) =>
      b.href.toLowerCase().includes(subBranch.toLowerCase())
    );
  }

  return (
    <section className="pt-28 pb-20 px-4 md:px-10 bg-gradient-to-b from-gray-100 via-gray-50 to-white min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-4"
      >
        {locKey} Branch{branches.length > 1 ? "es" : ""}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
      >
        Visit our <strong>Aman Labs & Diagnostic Center</strong> in {locKey}. <br />
        We’re committed to your health and convenience.
      </motion.p>

<MapsProvider>
      <div className="wrapper space-y-10">
        {branches.map((branch, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="rounded-3xl p-8 md:p-10 bg-white/70 backdrop-blur-md border border-gray-200/60 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* Branch Name */}
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-3 flex items-center gap-3">
              <LocateIcon className="text-blue-600" /> {branch.name}
            </h2>

            {/* Address */}
            <p className="flex items-start gap-2 text-gray-700 mb-5">
              <MapPin className="text-blue-500 mt-[2px]" />
              {branch.address}
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-4 text-gray-800">
              <a
                href="mailto:amanlabs2012@gmail.com"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors"
              >
                <Mail className="w-5 h-5" /> amanlabs2012@gmail.com
              </a>

              <a
                href="tel:+923365660653"
                title="Click to call"
                className="flex items-center gap-3 px-5 py-2 rounded-full border border-blue-100 
                  bg-blue-50/30 backdrop-blur-sm hover:bg-blue-100/50 transition shadow-sm"
              >
                <motion.div
                  animate={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.1, 1, 1.1, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.6,
                    ease: "easeInOut",
                  }}
                >
                  <Phone className="w-6 h-6 text-red-500" />
                </motion.div>
                <strong className="text-blue-800">+92 336 5660653</strong>
              </a>

              <div className="flex items-center gap-2 text-gray-600">
                <Clock10 className="w-5 h-5 text-blue-500" />
                <span>Open 8:00 AM – 10:00 PM</span>
              </div>
            </div>

            {/* Embedded Map */}
            {branch.center && (
              <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
                <Map lat={branch.center.lat} lng={branch.center.lng} />
              </div>
            )}
          </motion.div>
        ))}
      </div>
      </MapsProvider>
    </section>
  );
};

export default LocationBanner;
