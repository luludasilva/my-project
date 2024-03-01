import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa';
import img from '../assets/isologotipoblanco.png';
const Footer = () => {
    return (
        <footer className='bg-cyan-950 text-white lg:px-8 px-4 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='text-center md:text-left'>
                    <span className='text-2xl font-semibold text-emerald-600 py-2 uppercase'>
                        <img src={img} height={200} width={200} className="object-cover mx-auto md:mx-0" alt="Logo" />
                    </span>
                </div>
                <div>
                    <h2 className='text-lg font-semibold text-emerald-600 py-2 uppercase'>Ubicación</h2>
                    <ul className='text-sm my-4'>
                        <li className='my-1'>Escuela multideportiva para personas con discapacidad</li>
                        <li className='my-1'>Mar del Plata</li>
                        <li className='my-1'>Argentina</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-lg font-semibold text-emerald-600 py-2 uppercase'>¡Sumate como Sponsor!</h2>
                    <p className='text-sm my-4'>Email: integra-sports@hotmail.com</p>
                </div>
                <div>
                    <h2 className='text-lg font-semibold text-emerald-600 py-2 uppercase'>Seguinos</h2>
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/integrasportsmdp/">
                            <FaInstagram className="text-lg rounded-full p-1 glow" />
                        </a>
                        <a href="https://www.facebook.com/integrasports?fref=ts">
                            <FaFacebook className="text-lg rounded-full p-1 glow" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;