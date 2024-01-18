
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Services from "./Components/Services"
import Activities from "./Components/Activities";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () =>{
  return (
      <div className="bg-cyan-900">
          <Nav/>
          <Banner/>
          <About/>
          <Services/>
          <Activities/>
          <Projects/>
          <Contact/>
          <Footer/>
      </div>
  );
};
export default App; 
