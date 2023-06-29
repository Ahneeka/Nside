
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Navbar from './components/Navbar';
import Careers from './pages/Careers';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Navbar/>} />
          <Route path="/careers"  element={<Careers/>} />
          <Route path="/about"  element={<About/>} />
          <Route path="/projects"  element={<Projects/>} />
          <Route path="/contact"  element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
