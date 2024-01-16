
import img from "../assets/foto1.png"
const About = () => {
    return (
        <div id="About" className="lg:px-10 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
             <img data-aos="fade-up" src={img} width={800} height={800} className="rounded border-2 p-1 border-emerald-600 img_glow" alt=""/>
            <div data-aos="fade-right" className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white text-justify">
                <h1 className="text-[52px] font-semibold mb-8 leading-normal uppercase">Sobre nosotros </h1>
                <p>Siendo Profesores de Educación Física que trabajamos con personas con discapacidad de forma independiente y en diferentes instituciones, es que en junio de 2012 surgió esta iniciativa al contemplar que en la ciudad de Mar del Plata no hay una entidad que se ocupe de la "iniciación en actividades acuáticas y multideportivas de niños y adolescentes con discapacidad".</p><span></span>
                <p>Esta propuesta pretende mejorar los aspectos físicos, sociales, afectivos y psíquicos de niños y adolescentes con discapacidad, procurando contribuir a su formación integral y aportando desde nuestra área, la Educación Física, para que logren desenvolverse de la forma más autónoma posible en la sociedad y de esta forma puedan alcanzar una plena integración social, educativa, cultural y laboral.</p><span></span>

            </div>
           
        </div>
    );
};
export default About; 