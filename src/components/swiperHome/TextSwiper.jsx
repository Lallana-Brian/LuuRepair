import { ArrowRight } from "lucide-react";

const TextSwiper = () => {
  return (
    <div className="flex flex-col justify-center items-start sm:absolute sm:top-[30%] sm:left-[8%] sm:w-[60%] sm:z-10 text-left p-4 sm:p-0 md:mt-50 font-sans">
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black sm:text-white text-shadow-custom">
        Tu lugar único para
        <br />
        reparaciones de <br />
        dispositivos.
      </h1>
      <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row justify-start w-full space-y-4 sm:space-x-4 sm:space-y-0">
        {/* Botón Reserva una cita */}
        <button
          className="px-5 py-2 text-black text-lg sm:text-xl mt-4 sm:mt-0 bg-yellow-400 hover:bg-yellow-500 border-2 border-solid border-yellow-500 rounded-lg transition-colors duration-300"
          // onClick={() => navigate("/turnos")}  // Aquí podrías descomentar si quieres que navegue a la página de turnos
        >
          Reserva una cita
        </button>

        {/* Botón Conocer más */}
        <button
          // Asegúrate de tener esta ruta en tu `react-router`
          className="px-5 py-2 text-lg sm:text-xl mt-4 sm:mt-0 border-none hover:text-gray-400 flex items-center space-x-2 transition-all duration-300"
        >
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
