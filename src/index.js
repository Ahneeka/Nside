import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Careers from './components/Careers';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/"  element={<App/>} />
    <Route path="/careers"  element={<Careers/>} />
    <Route path="/about"  element={<About/>} />
    <Route path="/projects"  element={<Projects/>} />
    <Route path="/contact"  element={<Contact/>} />
  </Routes>
</BrowserRouter>
</>
);


reportWebVitals();
