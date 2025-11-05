import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Terms from './pages/Terms';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricelist from './pages/Pricelist';
import './App.css';

function App() {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home language={language} setLanguage={setLanguage} />} />
        <Route path="/login" element={<Login language={language} setLanguage={setLanguage} />} />
        <Route path="/terms" element={<Terms language={language} setLanguage={setLanguage} />} />
        <Route path="/about" element={<About language={language} setLanguage={setLanguage} />} />
        <Route path="/contact" element={<Contact language={language} setLanguage={setLanguage} />} />
        <Route path="/pricelist" element={<Pricelist language={language} setLanguage={setLanguage} />} />
      </Routes>
    </Router>
  );
}

export default App;
