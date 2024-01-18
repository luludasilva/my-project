import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import img from '../assets/logotipoblanco.png';
const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () =>  setClick(!click);
  const content = 
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-cyan-900 transition">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="Banner">
            <li className="my-4 py-4 border-b bg-cyan-800 hover:bg-slate-800 hover:rounded">
              Inicio
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="my-4 py-4 border-b bg-cyan-800 hover:bg-slate-800 hover:rounded">
              Sobre Nosotros
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Services">
            <li className="my-4 py-4 border-b bg-cyan-800 hover:bg-slate-800 hover:rounded">
              Servicios
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Activities">
            <li className="my-4 py-4 border-b bg-cyan-800 hover:bg-slate-800 hover:rounded">
              Actividades
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="my-4 py-4 border-b bg-cyan-800 hover:bg-slate-800 hover:rounded">
              Contacto
            </li>
          </Link>
        </ul>
      </div>
    </>

return (
  <nav>
    <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-cyan-900">
      <div className="flex items-center flex-1 h-5 md-2">
        <span className="text-3xl font-bold text-emerald-200">
          <img src={img} height={400} width={400} className=" object-cover ml-[-6rem]"  /*style={{ height: "16rem", width: "auto", maxWidth: "100%" }}*/ alt="Logo" />
        </span>
      </div>
      <div className="lg:flex md:flex lg:flex-1 center justify-end items font-normal hidden">
        <div className="flex-10">
          <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Banner">
                <li className="hover:text-green-300 transition border-b-2 border-sky-900 hover:border-green-300 cursor-pointer">
                  Inicio
                </li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-green-300 transition border-b-2 border-sky-900 hover:border-green-300 cursor-pointer">
                  Sobre Nosotros
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Services">
                <li className="hover:text-green-300 transition border-b-2 border-sky-900 hover:border-green-300 cursor-pointer">
                  Servicios
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Activities">
                <li className="hover:text-green-300 transition border-b-2 border-sky-900 hover:border-green-300 cursor-pointer">
                  Actividades
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="hover:text-green-300 transition border-b-2 border-sky-900 hover:border-green-300 cursor-pointer">
                  Contacto
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className="block sm:hidden transition" onClick={handleClick}>
           {click ? <FaTimes /> : <CiMenuFries /> }
        </button>
      </div>
    </nav>
  );
};
export default Nav;
