import React from "react";
import { featuredImages } from "../../assets/data/dataStore"; // ← esta es la clave

const FeaturedServices = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <h1 className="text-3xl font-bold text-center mb-12">
        Nuestros Servicios
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {featuredImages.map((item, index) => (
          <div
            key={index}
            className="relative w-80 bg-[#fef08a] rounded-xl overflow-hidden shadow-md"
          >
            {/* Imagen con clip-path */}
            <div className="relative h-48 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover clip-arrow"
              />
            </div>
            {/* Texto */}
            <div className="p-6">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <h3 className="text-gray-600 mt-2">{item.subtitle}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedServices;
