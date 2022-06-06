import "./sass/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Details from './pages/DecorWeb';
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import DecorWeb from "./pages/DecorWeb";


function App() {
  return (
    <div className="App">
      <Home/>
     
  
<Router>

<Routes>

<Route path="decorweb" element={<DecorWeb />} />
  
          
         
      
     

  
        </Routes>
      </Router>

      </div>
      
  
 
  );
}

export default App;
