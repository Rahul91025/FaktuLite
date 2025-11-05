import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';

const Home = ({ language = "sv", setLanguage = () => {} }) => {
  const [texts, setTexts] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/texts?page=home&language=${language}`);
        const data = await res.json();
        const textMap = {};
        data.forEach(item => {
          textMap[item.key] = item.value;
        });
        setTexts(textMap);
      } catch (err) {
        console.error('Error fetching texts', err);
      }
    };
    fetchTexts();
    
    setTimeout(() => setIsVisible(true), 100);
  }, [language]);

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      
      <div className="home-container">
        {/* Subtle Background Elements */}
        <div className="bg-gradient"></div>
        <div className="bg-grid"></div>

        <div className={`home-content ${isVisible ? 'visible' : ''}`}>
          
          <div className="content-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L10.5 6L16 6.75L12 10.5L13 16L8 13.25L3 16L4 10.5L0 6.75L5.5 6L8 1Z" fill="currentColor"/>
            </svg>
            <span>{language === 'sv' ? 'Pålitlig & Enkel' : 'Trusted & Simple'}</span>
          </div>

          <h1 className="hero-title">
            {texts.welcome_title || (language === 'sv' ? 'Välkommen till 123Fakturera' : 'Welcome to 123Fakturera')}
          </h1>
          
          <p className="hero-subtitle">
            {texts.welcome_subtitle || (language === 'sv' ? 'Din pålitliga faktureringslösning för moderna företag.' : 'Your trusted invoicing solution for modern businesses.')}
          </p>

          <div className="cta-buttons">
            <button className="primary-button" onClick={() => window.location.href = '/login'}>
              <span>{texts.get_started_button || (language === 'sv' ? 'Kom igång' : 'Get Started')}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 10L13 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 7L13 10L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="secondary-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 6V10L12.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{language === 'sv' ? 'Läs mer' : 'Learn More'}</span>
            </button>
          </div>

          {/* Feature highlights */}
          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>{language === 'sv' ? 'Snabb' : 'Fast'}</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>{language === 'sv' ? 'Säker' : 'Secure'}</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span>{language === 'sv' ? 'Effektiv' : 'Efficient'}</span>
            </div>
          </div>


        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home