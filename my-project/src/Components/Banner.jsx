import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa';
import img from '../assets/escudoblanco.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
    useEffect(() => {
         AOS.init({
        easing: "ease-in-out-quart",
        delay: 0,
        duration: 750
    })
    }, [])

    
    return (
        <div className="lg:px-10 px-10 lg:py-0 py-10 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <img data-aos="fade-up" src={img} width={800} height={800} className="rounded-full border-2 p-1 border-emerald-600 img_glow" alt=""/>
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white text-justify">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal uppercase  text-justify justify-center">Bienvenidos a < div className="text-teal-500"> INTEGRA SPORTS</div></h1>
                <p data-aos="fade-right">Somos una escuela multideportiva dirigida exclusivamente a niños y adolescentes con discapacidad. Formada por Profesores de Educación Física, que trabajan de forma independiente y en diferentes instituciones, brindando iniciación en actividades acuáticas y multiderportivas.</p>
                <p data-aos="fade-right">Nuestra misión: Mejorar los aspectos físicos, sociales, afectivos y psíquicos de niños y adolescentes con discapacidad, procurando contribuir a su formación integral y aportando desde nuestra área, la educación física, herramientas para que logren desenvolverse de la forma más autónoma posible en la sociedad y de esta forma puedan alcanzar una plena integración social, educativa, cultural y laboral.</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="https://www.instagram.com/integrasportsmdp/">
                                <FaInstagram className="text-[35px] rounded-full p-1 glow"/>
                            </a>
                            <a href="https://www.facebook.com/integrasports?fref=ts">
                                <FaFacebook className="text-[35px] rounded-full p-1 glow" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner; 