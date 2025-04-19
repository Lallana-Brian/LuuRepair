import { useState } from "react";
import Btn from "../btn/Btn";

import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 px-6 py-4 bg-body backdrop-blur-md text-title z-50">
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

        <Btn
          className="px-2 font-medium flex items-center gap-2"
          text={
            <>
              <FaWhatsapp className="w-6 h-6 text-green-500" />
              +3777-674-366
            </>
          }
          bgColor="bg-white"
          hoverUnderline={true}
        />
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
        <Btn
          className="px-4 font-medium flex items-center gap-2"
          text={
            <>
              <FaWhatsapp className="w-5 h-5 text-green-500" />
              +3777-674-366
            </>
          }
          bgColor="bg-white"
          hoverUnderline={true}
        />
      </div>
    </nav>
  );
}
