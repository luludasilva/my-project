
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Services from "./Components/Services"
import Activities from "./Components/Activities";

const App = () =>{
  return (
      <div className="bg-cyan-900">
          <Nav/>
          <Banner/>
          <About/>
          <Services/>
          <Activities/>
      </div>
  );
};
export default App; 
