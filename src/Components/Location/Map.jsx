import { GoogleMap, Marker } from "@react-google-maps/api";
import { motion } from "framer-motion";
import { zoomIn, once } from "../../Data/Motion";

const containerStyle = {
    width: "100%",
    height: "600px",
};

const Map = ({ lat, lng }) => {
    const center = { lat, lng };

    // or calculate from: https://www.latlong.net/convert-address-to-lat-long.html
    // lat: 39.911287,
    // lng: -79.160302,

    return (
        <motion.section
            variants={zoomIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: once }}
        >
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                <Marker position={center} />
            </GoogleMap>
        </motion.section>
    );
};

export default Map;
