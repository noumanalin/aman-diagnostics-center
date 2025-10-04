import { LoadScript } from "@react-google-maps/api";

const MapsProvider = ({ children }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyA6qX1ZAzdagmxwaBKOnEbt4GYmpO5miCQ">
      {children}
    </LoadScript>
  );
};

export default MapsProvider;
