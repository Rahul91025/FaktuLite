import { useState, useEffect } from 'react';
import axios from 'axios';
import './Contact.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = ({ language, setLanguage }) => {
  const [texts, setTexts] = useState({});

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/texts?page=contact&language=${language}`);
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

  const englishText = `Contact Us

Get in touch with the 123 Fakturera team. We're here to help with any questions or support you may need.

Email: support@123fakturera.se
Phone: +46 123 456 789
Address: Box 2826, 187 28 Täby, Sweden

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM CET

We aim to respond to all inquiries within 24 hours.`;

  const swedishText = `Kontakta oss

Kom i kontakt med 123 Fakturera-teamet. Vi finns här för att hjälpa till med frågor eller support du kan behöva.

E-post: support@123fakturera.se
Telefon: +46 123 456 789
Adress: Box 2826, 187 28 Täby, Sverige

Kontorstider:
Måndag - Fredag: 9:00 - 17:00 CET

Vi strävar efter att svara på alla förfrågningar inom 24 timmar.`;

  const contactText = texts.contact_content || (language === 'sv' ? swedishText : englishText);

  return (
    <div className="contact-container">
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="contact-card">
        <header className="contact-header">
          <h1>{texts.title || (language === 'sv' ? 'Kontakta oss' : 'Contact Us')}</h1>
          <p className="contact-subtitle">
            {texts.subtitle || (language === 'sv' ? 'Vi finns här för att hjälpa.' : 'We are here to help.')}
          </p>
        </header>

        <div className="contact-body">
          <div className="contact-scroll">
            <p>{contactText}</p>
          </div>
        </div>

        <div className="contact-footer">
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

export default Contact;
