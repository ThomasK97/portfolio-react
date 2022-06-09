import "./sass/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Details from './pages/DecorWeb';
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import DecorWeb from "./pages/DecorWeb";
import JsFrameworks from "./pages/JsFrameworks";
import ProjectExam from "./pages/ProjectExam";


function App() {
  return (
    <div className="App">
     <Router>






  <Routes>
    
    <Route index element={<Home />} />

    <Route path="decorweb" element={<DecorWeb />} />
    <Route path="jsframeworks" element={<JsFrameworks />} />
    <Route path="projectexam" element={<ProjectExam />} />
   


  </Routes>
</Router>
      
  </div>
 
  );
}

export default App;
