import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Services from "./Components/Services";
import Activities from "./Components/Activities";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
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
          <Nav />
          <Banner />
          <About />
          <Services />
          <Activities />
          <Projects />
          <Contact />
          <Notes />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
