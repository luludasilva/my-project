

const Notes = () => {
  const newsLinks = [
    {
      title: "Brillante performance en Canadá.",
      link: "https://www.bankmagazine.com.ar/integra-sports-brillante-performance-de-argentina-en-canada/",
    },
    {
      title: "JULIETA LASPINA: “ES UNA OPORTUNIDAD ÚNICA PARA LAS ESTRELLITAS”.",
      link: "https://marcadeportiva.com/natacion/26/07/2016/julieta-laspina-es-una-oportunidad-unica-para-las-estrellitas/",
    },
    {
      title: "Emotivo encuentro con Santi, el nadador marplatense de 9 años que completó los 1500 metros en aguas abiertas.",
      link: "https://www.concejomdp.gob.ar/prensa/gacetillas/gacetilla.php?id=1672",
    },
    {
      title: "\"Ir por más\": la misión de Integra Sports en su trabajo con chicos con discapacidad.",
      link: "https://www.infobrisas.com/noticias/2022/02/07/40559-ir-por-mas-la-mision-de-integra-sports-en-su-trabajo-con-chicos-con-discapacidad",
    },
    {
      title: "Conocé la historia de cuatro chicos del programa Integra Sports con Síndrome de Down que serán mundialistas.",
      link: "https://www.ole.com.ar/poli/chicos-mundial-natacion-ilusion-nota_0_B1TLqe0Zf.html",
    },
    {
      title: "INTEGRA SPORTS: LLEGA EL MUNDIAL DE NATACIÓN PARA CHICOS CON SINDROME DE DOWN.",
      link: "https://www.provincianet.com.ar/new/acompanamos-los-deportistas-de-integra-sports-al-campeonato-mundial-de-natacion-para-chicos-con",
    },
    {
      title: "Una escuela polideportiva entrena a los chicos con discapacidad.",
      link: "https://www.telam.com.ar/notas/202202/584089-escuela-polideportiva-discapacidad-mar-del-plata.html",
    },
    {
      title: "El municipio entregó equipamiento a una escuela multideportiva para personas con discapacidad.",
      link: "https://www.lacapitalmdp.com/el-municipio-entrego-equipamiento-a-una-escuela-multideportiva-para-personas-con-discapacidad/amp/",
    },
    {
      title: "El deporte como vehículo de integración y el compañerismo como símbolo de grandeza.",
      link: "https://elmarplatense.com/2023/08/14/el-deporte-como-vehiculo-de-integracion-y-el-companerismo-como-simbolo-de-grandeza/",
    },
    {
      title: "Chicos de Integra Sports compartieron clase con la Selección de Básquet para Atletas con Síndrome de Down.",
      link: "https://www.infobrisas.com/amp/noticias/2023/08/21/59052-chicos-de-integra-sports-compartieron-clase-con-la-seleccion-de-basquet-para-atletas-con-sindrome-de-down",
    },
    {
      title: "Integra Sports se alzó con 30 medallas en los Juegos Evita.",
      link: "https://www.0223.com.ar/nota/2023-10-5-11-0-0-integra-sports-se-alzo-con-30-medallas-en-los-juegos-evita",
    },
  ];

  return (
    <div id="Notes" className="lg:px-10 px-10 lg:py-0 py-10 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div data-aos="fade-right" className="h-full lg:py-40 flex flex-col justify-center lg:items-center items-center text-white text-justify">
        <h1 data-aos="fade-down" className="text-[52px] font-semibold mb-8 leading-normal uppercase text-center">¡Somos Noticia! </h1>
        <div data-aos="fade-up" className="grid grid-cols-6 gap-4">
          {newsLinks.map((link, index) => (
            <div key={index} className="col-span-2 lg:col-span-1 bg-gray-200 p-4 rounded-md ">
              <a href={link.link} className="text-[15px] flex items-center  justify-center font-semibold text-teal-700 hover:underline b_glow">
                {link.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
