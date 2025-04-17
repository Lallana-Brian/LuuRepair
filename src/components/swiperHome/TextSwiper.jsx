import { ArrowRight } from "lucide-react";
import Btn from "../btn/Btn";

const TextSwiper = () => {
  return (
    <div className="flex flex-col justify-center items-start sm:absolute sm:top-[30%] sm:left-[8%] sm:w-[60%] sm:z-10 text-left p-4 sm:p-0 md:mt-50 font-sans">
      <h1 className="text-black sm:text-container text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        Tu lugar único para
        <br />
        reparaciones de <br />
        dispositivos.
      </h1>
      <h2 className="text-black sm:text-container text-1xl md:text-1xl lg:text-1xl xl:text-1xl mt-5 ">
        Especializados en reparación y mantenimiento,
        <br /> actualizaciones de Hardware e instalación de Software
      </h2>
      <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row justify-start w-full space-y-4 sm:space-x-4 sm:space-y-0">
        {/* Botón Reserva una cita */}
        {/* <button className="px-5 py-2 text-black text-lg sm:text-xl mt-4 sm:mt-0 bg-yellow-400 hover:bg-yellow-500 border-2 border-solid border-yellow-500 rounded-lg transition-colors duration-300">
          Reserva una cita
        </button> */}
        <Btn
          text="Reserva tu reparación"
          bgColor="bg-yellow-400"
          textColor="text-black"
          disableHover={false}
          className="mt-5"
        />

        {/* Botón Conocer más */}
        <button className="px-5 py-2 text-lg sm:text-xl mt-4 sm:mt-0 border-none hover:text-gray-400 flex items-center space-x-2 transition-all duration-300">
          <span className="text-black hover:underline sm:text-white">
            Conocer más
          </span>
          <ArrowRight
            size={18} // Tamaño más pequeño para el icono en pantallas pequeñas
            className="text-black hover:text-gray-400 sm:text-white"
          />
        </button>
      </div>
    </div>
  );
};

export default TextSwiper;
