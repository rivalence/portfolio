import Presentation from './sections/Presentation';
import AboutMe from './sections/AboutMe'
import Parcours from './sections/Parcours'
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Presentation />
      <AboutMe />
      <Parcours />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
