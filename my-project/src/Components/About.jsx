import { FaInstagram } from "react-icons/fa";
import img from "../assets/logo.jpg"
const About = () => {
    return (
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
             <img src={img} width={290} height={290} className="rounded border-2 p-1 border-emerald-600 img_glow" alt=""/>
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 className="text-[52px] font-semibold mb-8 leading-normal uppercase">Bienvenidos a <span className="text-white ">INTEGRA SPORT</span></h1>
                <p>Somos una escuela multideportiva dirigida exclusivamente a niños y adolescentes con discapacidad.<br></br> 
                Formada por Profesores de Educación Física, que trabajan de forma independiente y en diferentes instituciones, brindando iniciación en actividades acuáticas y multiderportivas. <br />
                Nuestra misión: Mejorar los aspectos físicos, sociales, afectivos y psiquicos de niños y adolescentes con discapacidad, procurando contribuir a su formación integral y aportando desde nuestra área, la eduacion física, herramientas para que logren desenvolverse de la forma más autónoma posible en la sociedad y de esta forma puedan alcanzar una plena integración social, educativa, cultural y laboral. 
                </p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="" ></a>
                            <FaInstagram className="text-[28px] rounded-full p-1 glow"/>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};
export default About; 