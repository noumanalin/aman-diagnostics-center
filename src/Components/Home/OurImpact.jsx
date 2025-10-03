import { useState } from "react";
import { impactCards } from "../../Data/FactCards";
import { DrawCircleText } from "../DrawCircleText";
import { motion } from "framer-motion";
import { fade, once } from "../../Data/Motion";

const OurImpact = () => {
    const [flipped, setFlipped] = useState(null);

    const toggleFlip = (id) => {
        setFlipped(flipped === id ? null : id);
    };

    return (
        <section className="wrapper text-center py-12">
            <h2 className="text-5xl font-bold mb-12 ">
                Our Impact at a  <DrawCircleText svgClasses={'top-2'}>Glance</DrawCircleText>
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                {impactCards.map((card, index) => {
                    const FrontIcon = card.frontIcon;
                    const BackIcon = card.backIcon;

                    return (
                        <motion.div
                            key={card.id}
                            variants={fade("up", "spring", index * 0.08, 0.8)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once, amount: 0.2 }}
                            className="w-[260px] h-[320px] perspective cursor-pointer group"
                            onClick={() => toggleFlip(card.id)}
                        >
                            <div
                                className={`relative w-full h-full text-center transition-all duration-700 transform-style-preserve-3d 
                ${flipped === card.id ? "rotate-y-180" : ""} 
                sm:group-hover:rotate-y-180`}
                            >
                                {/* Front Side - Clean Professional Design */}
                                <div
                                    className="absolute w-full h-full flex flex-col items-center justify-center rounded-xl 
                  bg-white border border-gray-200 shadow-lg
                  text-gray-800 backface-hidden p-6
                  transition-all duration-300
                  group-hover:shadow-xl group-hover:border-[#2E3092]/20
                  group-hover:ring-2 group-hover:ring-[#2E3092]/10"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#ED1C24]/10 to-[#ED1C24]/20 rounded-full flex items-center justify-center mb-6 group-hover:from-[#ED1C24]/20 group-hover:to-[#ED1C24]/30 transition-colors">
                                        <FrontIcon size={32} className="text-[#ED1C24]" />
                                    </div>

                                    <h3 className="text-4xl font-bold text-gray-900 mb-2">{card.frontNumber}</h3>
                                    <p className="text-lg text-gray-600 font-medium">{card.frontTitle}</p>

                                    {/* Subtle hover effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2E3092]/0 to-[#2E3092]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                                </div>

                                {/* Back Side - Professional Info Card */}
                                <div
                                    className="absolute w-full h-full flex flex-col items-center justify-center rounded-xl 
                  bg-gradient-to-br from-gray-50 to-[#2E3092]/5
                  border border-gray-200 shadow-lg
                  text-gray-800 rotate-y-180 backface-hidden p-6
                  transition-all duration-300
                  group-hover:shadow-xl group-hover:border-[#2E3092]/20
                  group-hover:ring-2 group-hover:ring-[#2E3092]/10"
                                >
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#ED1C24]/10 to-[#ED1C24]/20 rounded-full flex items-center justify-center mb-4">
                                        <BackIcon size={28} className="text-[#ED1C24]" />
                                    </div>

                                    <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">{card.backTitle}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed text-center">{card.backDescription}</p>

                                    {/* Professional accent with brand colors */}
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#ED1C24] to-[#2E3092] rounded-full"></div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default OurImpact;