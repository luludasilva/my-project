import img1 from '../assets/danza.png';
import img2 from '../assets/natacion.png';
import img3 from '../assets/bocha.png';
import img4 from '../assets/basquet.png';
import img from '../assets/grupal.png';

const Projects = () => {
    return (
        <div className="p-2 px-10 flex flex-col items-center justify-center">
           <h1 className="text-[56px] font-semibold mb-8 leading-normal uppercase text-white">Tu equipo siempre te acompaña</h1>
           <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid cols-1 justify-around gap-20">
                <img data-aos="fade-up"height={400} width={400} className="w-full h-full object-cover flex items-center justify-center font-semibold text-teal-500 rounded-3xl p-1 border-2 border-emerald-600 b_glow" src={img1} alt="" />
                <img data-aos="fade-down"height={400} width={400} className="w-full h-full object-cover flex items-center justify-center font-semibold text-teal-500 rounded-3xl p-1 border-2 border-emerald-600 b_glow" src={img2} alt="" />
                <img data-aos="fade-up"height={400} width={400} className="w-full h-full object-cover flex items-center justify-center font-semibold text-teal-500 rounded-3xl p-1 border-2 border-emerald-600 b_glow" src={img3} alt="" />
                <img data-aos="fade-down"height={400} width={400} className="w-full h-full object-cover flex items-center justify-center font-semibold text-teal-500 rounded-3xl p-1 border-2 border-emerald-600 b_glow" src={img4} alt="" />
           </div>
           <div className="p-2 px-1 flex flex-col items-center justify-center">
                <img data-aos="fade-up"height={400} width={400} className="w-full h-full object-cover flex items-center justify-center font-semibold text-teal-500 rounded-3xl p-1 border-2 border-emerald-600 b_glow" src={img} alt="" />
        </div>
            
        </div>
    );
};
export default Projects; 