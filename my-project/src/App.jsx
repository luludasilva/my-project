import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Services from "./Components/Services";
import Activities from "./Components/Activities";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import { ThreeCircles } from 'react-loader-spinner';
import Notes from "./Components/Notes";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);   

  return (
    <>
      {loading ? (

       <div className="bg-cyan-950 h-[100vh] full-view flex justify-center items-center">
         <ThreeCircles
  visible={true}
  height="100"
  width="100"
  color="#14b8a6"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
        />
       </div>
      ) : (

        <div className="bg-cyan-900">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-8_PQNQLaOhKfUPA1yz4pqF4wJGUoAohLIQLciGW7pibDgg/viewform?usp=pp_url" target="_blank" class="fixed bottom-4 right-4 bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600">
      Contactanos!
    </a>
          <Nav />
          <Banner />
          <About />
          <Services />
          <Activities />
          <Projects />
          <Notes />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
