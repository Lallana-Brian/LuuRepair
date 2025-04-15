import { useState } from "react";
import Btn from "../btn/Btn";
// Importar los íconos de Lucide React
import { Menu, X } from "lucide-react"; // Cambié la importación de react-feather a lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full px-6 py-4 bg-transparent backdrop-blur-md text-white z-50">
      {/* Degradado interno */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-b from-black/25 via-transparent to-transparent" />
      </div>

      {/* Navbar para móviles */}
      <div className="md:hidden flex items-center justify-between w-full z-10">
        {/* Botón hamburguesa */}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}{" "}
          {/* Usando los íconos de Lucide React */}
        </button>

        {/* Logo centrado */}
        <div className="w-1/3 text-center">
          <div className="inline-block w-24">
            {/* Aquí irá el logo */}LuuRepairs
          </div>
        </div>

        <Btn text="+3777674366"></Btn>
      </div>

      {/* Menú hamburguesa desplegable (solo en móvil) */}
      <div
        className={`md:hidden flex-col absolute top-full left-0 w-full bg-black/80 p-6 z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <a href="#" className="block hover:bg-yellow-500 ">
          Inicio
        </a>
        <a href="#" className="block hover:text-gray-400 py-2">
          Acerca
        </a>
        <a href="#" className="block hover:text-gray-400 py-2">
          Contacto
        </a>
      </div>

      {/* Navbar para pantallas medianas y grandes */}
      <div className="hidden md:flex items-center justify-between w-full z-10">
        <div className="w-32">{/* Aquí irá el logo */}LuuRepairs</div>
        <div className="flex items-center space-x-10">
          <a href="#" className="hover:text-yellow-500">
            Inicio
          </a>
          <a href="#" className="hover:text-yellow-500">
            Servicio
          </a>
          <a href="#" className="hover:text-yellow-500">
            Contacto
          </a>
        </div>
        <div className="w-48 flex justify-end">
          <a
            href="tel:+1234567890"
            className="bg-buttonHover  text-white font-semibold py-2 px-4 rounded-lg text-base transition"
          >
            📞+3777 67-4366
          </a>
        </div>
      </div>
    </nav>
  );
}
