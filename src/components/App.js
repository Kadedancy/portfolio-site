import logo from './logo.svg';
import Sidebar from './sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="MainDiv">      
        <p>Hello, I'm Kade Dancy</p>
        <p>I am a Senior pursuing a B.S. in Computer Engineering Technology with a minor in Mathematical Sciences.
          I expect to graduate in May 2026. I enjoy building creative software and hardware solutions for embedded systems.
          I am committed to pursuing a career in Software Engineering</p>
        <p>Through my academic and personal pursuits, I've been able to learn and develop proficiency in multiple programming languages,
           development environments, version control, and analytical problem solving. </p>

        <h1 className="SectionLine">Skills</h1>
        <p className="SectionItems">Arduino Python C/C++ HTML CSS SQL JavaScript Git Github</p> 
        <p className="SectionItems">VSCode VisualStudio STM32 KiCAD Multisim MicrosoftSuite</p>
      </div>
    </div>
  );
}

export default App;
