import { motion } from "framer-motion"
import { fade, once } from "../../Data/Motion"
import { DrawCircleText } from "../DrawCircleText"
import { certificationsData } from "../../Data/Certifications"

const Certifications = () => {
  return (
    <section className="wrapper text-center py-15">
        <h2 className="text-3xl md:text-5xl font-bold ">Our <DrawCircleText svgClasses={'-top-4'}>Certifications</DrawCircleText></h2>
        <p className="mt-12">Your health, our commitment — validated by global certifications.</p>
    </section>
  )
}

export default Certifications