import { FaInstagram } from "react-icons/fa";
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
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-20 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-50 items-center">
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right"className="text-[70px] font-semibold mb-8 leading-normal uppercase">Bienvenidos a <span className="text-teal-500 "> INTEGRA SPORT</span></h1>
                <p data-aos="fade-right" className="text-justify">Somos una escuela multideportiva dirigida exclusivamente a niños y adolescentes con discapacidad.<span></span>
                Formada por Profesores de Educación Física, que trabajan de forma independiente y en diferentes instituciones, brindando iniciación en actividades acuáticas y multiderportivas. <br />
                Nuestra misión: Mejorar los aspectos físicos, sociales, afectivos y psiquicos de niños y adolescentes con discapacidad, procurando contribuir a su formación integral y aportando desde nuestra área, la eduacion física, herramientas para que logren desenvolverse de la forma más autónoma posible en la sociedad y de esta forma puedan alcanzar una plena integración social, educativa, cultural y laboral. 
                </p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="" ></a>
                            <FaInstagram className="text-[35px] rounded-full p-1 glow"/>
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos="fade-up" src={img} width={290} height={290} className="rounded-full border-2 p-1 border-emerald-600 img_glow" alt=""/>
        </div>
    );
};
export default Banner; 