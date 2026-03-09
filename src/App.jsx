import "./index.css"
import Navbar from './componets/Navbar';
import Hero from "./componets/Hero";
import About from "./componets/About";
import Skills from "./componets/Skills";
import Projects from "./componets/Projects";


const App = () => {
  return (  
    <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    </div>
  );
}
 
export default App;
