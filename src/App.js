import './App.css';
import DigiNav from './components/DigiNav';
import DigiFooter from './components/DigiFooter';
import TechSkills from './components/TechSkills';
import Acads from './components/Acads';
import About from './components/About';
import Projects from './components/Projects';
import Achieve from './components/Achieve';
import Contact from './components/Contact';


function App() {
 
  return (
    <div >
      <DigiNav/>
      <div className="container-fluid">
        {/* get each component and add it here */}
       <About/>
       <Projects/>
        <Achieve/>
        <TechSkills/>
        <Acads/>
        <Contact/>

        
      </div>
    
      <DigiFooter/>
      

  
   
    </div>
  );
}

export default App;
