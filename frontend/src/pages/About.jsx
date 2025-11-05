import { useState, useEffect } from 'react';
import axios from 'axios';
import './About.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = ({ language, setLanguage }) => {
  const [texts, setTexts] = useState({});

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/texts?page=about&language=${language}`);
        const textMap = {};
        res.data.forEach(item => {
          textMap[item.key] = item.value;
          textMap[`${item.key}_id`] = item.id;
        });
        setTexts(textMap);
      } catch (err) {
        console.error('Error fetching texts', err);
      }
    };
    fetchTexts();
  }, [language]);

  const englishText = `About 123 Fakturera

123 Fakturera is a comprehensive invoicing solution designed to simplify your business operations. Our platform offers easy-to-use tools for creating, managing, and sending invoices, tracking payments, and maintaining customer relationships.

Key Features:
- Intuitive invoice creation
- Automated payment reminders
- Detailed reporting and analytics
- Secure data storage
- Multi-language support

Our mission is to empower businesses of all sizes with reliable and efficient invoicing tools that save time and reduce errors.`;

  const swedishText = `Om 123 Fakturera

123 Fakturera är en omfattande faktureringslösning utformad för att förenkla dina affärsoperationer. Vår plattform erbjuder lättanvända verktyg för att skapa, hantera och skicka fakturor, spåra betalningar och upprätthålla kundrelationer.

Nyckelfunktioner:
- Intuitiv fakturaskapande
- Automatiska betalningspåminnelser
- Detaljerad rapportering och analys
- Säker datalagring
- Flerspråkigt stöd

Vårt uppdrag är att ge företag av alla storlekar pålitliga och effektiva faktureringsverktyg som sparar tid och minskar fel.`;

  const aboutText = texts.about_content || (language === 'sv' ? swedishText : englishText);

  return (
    <div className="about-container">
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="about-card">
        <header className="about-header">
          <h1>{texts.title || (language === 'sv' ? 'Om oss' : 'About Us')}</h1>
          <p className="about-subtitle">
            {texts.subtitle || (language === 'sv' ? 'Lär känna oss bättre.' : 'Learn more about us.')}
          </p>
        </header>

        <div className="about-body">
          <div className="about-scroll">
            <p>{aboutText}</p>
          </div>
        </div>

        <div className="about-footer">
          <button
            onClick={() => window.location.href = '/'}
            className="home-button"
          >
            {texts.back_button || (language === 'sv' ? 'Gå tillbaka till hemsidan' : 'Go Back to Homepage')}
          </button>

          <div className="flags">
            <img src="https://storage.123fakturere.no/public/flags/SE.png" alt="Swedish" onClick={() => setLanguage('sv')} />
            <img src="https://storage.123fakturere.no/public/flags/GB.png" alt="English" onClick={() => setLanguage('en')} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
