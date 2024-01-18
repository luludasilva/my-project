const Contact = () => {
    return (
        <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
            <h1 data-aos="fade-right"className="text-[70px] font-semibold mb-8 leading-normal uppercase text-white">Contáctanos</h1>
            <form data-aos="fade-left"action="" className="flex flex-col gap-2 lg:w-1/2">
                <div className="lg:flex gap-9">
                    <input className="w-full lg:my-3 my-4 rounded-lg bg-cyan-800 p-4 border-2 border-emerald-600 b_glow text-xl text-white" placeholder="Ingresa tu nombre"  type="text" />
                    <input className="w-full lg:my-3 my-4 rounded-lg bg-cyan-800 p-4 border-2 border-emerald-600 b_glow text-xl text-white" placeholder="Ingresa tu Email"  type="text" />
                </div>
                <textarea className="w-full my-3 rounded-lg bg-cyan-800 p-4 border-2 border-emerald-600 b_glow text-xl text-white" placeholder="Dejanos tu mensaje" name="" id="" cols="30" rows="10"></textarea>
                <button className="neno-button shadow-xl hover:shadow-emerald-600/50 text-white border-2 border-emerald-600 hover:bg-cyan-800 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold md-10" type="submit">Enviar</button>
            </form>
        </div>
    );
};
export default Contact; 