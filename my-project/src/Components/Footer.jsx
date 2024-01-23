import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa';
import img from '../assets/isologotipoblanco.png';
const Footer = () => {
    return (
        <footer className='bg-cyan-950 text-white lg:px-48 px-4 py20'>
            <div className='conteiner ml-[-5rem] mr-[-10rem] grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div className='mb-4 md:mb-0' >
                    <span className='text-3xl font-semibold text-emerald-600 py-2 uppercase'>
                    <img src={img} height={400} width={400} className=" object-cover ml-[-10rem]"   alt="Logo" />
                    </span>
                </div>
                <div >
                    <h2 className='text-[22px] font-semibold text-emerald-600 py-2 uppercase'>Ubicación</h2>
                    <ul className='text-[16px] my-4'>
                        <li className='my-2'>Escuela multideportiva para personas con discapacidad </li>
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
                    <div className="flex space-x-4">
                    <a href="https://www.instagram.com/integrasportsmdp/" >
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