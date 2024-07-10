import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa';
import img from '../assets/isologotipoblanco.png';

const Footer = () => {
    return (
        <footer className='bg-cyan-950 text-white lg:px-20 px-4 py-10'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div className='mb-4 md:mb-0 flex justify-center md:justify-start'>
                    <img src={img} height={200} width={200} className="object-cover" alt="Logo" />
                </div>
                <div>
                    <h2 className='text-[22px] font-semibold text-emerald-600 py-2 uppercase'>Ubicación</h2>
                    <ul className='text-[16px] my-4'>
                        <li className='my-2'>Escuela multideportiva para personas con discapacidad</li>
                        <li className='my-2'>Mar del Plata</li>
                        <li className='my-2'>Argentina</li>
                    </ul>
                </div>
                <div className='mb-4 md:mb-0'>
                    <h2 className='text-[22px] font-semibold text-emerald-600 py-2 uppercase'>¡Sumate como Sponsor!</h2>
                    <p className='text-[16px] my-4'>Email: integra-sports@hotmail.com</p>
                </div>
                <div className='mb-4 md:mb-0'>
                    <h2 className='text-[22px] font-semibold text-emerald-600 py-2 uppercase'>Seguinos</h2>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="https://www.instagram.com/integrasportsmdp/">
                            <FaInstagram className="text-[35px] rounded-full p-1 glow"/>
                        </a>
                        <a href="https://www.facebook.com/integrasports?fref=ts">
                            <FaFacebook className="text-[35px] rounded-full p-1 glow" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
