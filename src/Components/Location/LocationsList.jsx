import { Link } from "react-router-dom";
import { locations } from "../../Data/locations";
import { MapPin } from "lucide-react";
import { DrawCircleText } from "../DrawCircleText";

const LocationsList = () => {
  return (
    <section className="wrapper py-16 ">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10 text-center">
        Our Branches Across <span className="mr-2"/> <DrawCircleText svgClasses={'-top-1'}>Pakistan</DrawCircleText>
      </h2>

      {/* Masonry (Column) Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {Object.entries(locations).map(([city, data]) => (
          <div
            key={city}
            className="break-inside-avoid mb-6 backdrop-blur-md bg-white/70 border border-gray-200/50 shadow-md 
                       rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:bg-white/80"
          >
            {/* City Title */}
            <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
              <MapPin size={20} className="text-blue-500" />
              {city}
            </h3>

            {/* Branch List */}
            {data.branches ? (
              <ul className="space-y-3">
                {data.branches.map((branch, i) => (
                  <li key={i} className="border-l-2 border-blue-100 pl-3">
                    <Link
                      to={branch.href}
                      className="block font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {branch.name}
                    </Link>
                    <p className="text-sm text-gray-500">{branch.address}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="border-l-2 border-blue-100 pl-3">
                <Link
                  to={data.href}
                  className="block font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {data.name}
                </Link>
                <p className="text-sm text-gray-500">{data.address}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationsList;
