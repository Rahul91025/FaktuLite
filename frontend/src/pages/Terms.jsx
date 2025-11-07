import { useState, useEffect } from 'react';
import axios from 'axios';
import './Terms.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = ({ language, setLanguage }) => {
  const [texts, setTexts] = useState({});

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const res = await axios.get(`https://faktulitebackend.onrender.com/api/texts?page=terms&language=${language}`);
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

  const englishText = `BY clicking Invoice Now, you choose to register according to the information that you have typed in and the text on the registration page and the terms here, and you at the same time accept the terms here.

You can use the program FOR FREE for 14 days.

123 Fakturera is so easy and self-explanatory that the chance that you will need support is minimal, but if you should need support, we are here for you, with our office manned for the most part of the day. After the trial period, the subscription continues and costs SEK 99 excluding VAT per month, which is billed annually. If you do not want to keep the program, just cancel the trial period by giving notice before 14 days from registration.

You have of course the right to terminate the use of the program without any costs, by giving us notice per email before 14 days from registration, that you do not want to continue with the program, and you then of course do not pay anything.

If we do not receive such a notice from you before 14 days from registration, then the order, for natural reasons, cannot be changed. With registration it is meant the date and time when you did choose to press the button Invoice Now.

Billing is for one year at a time.

The price for 123 Fakturera (offer price SEK 99 per month / ordinary price SEK 159 per month) is for the annual fee Start for one year's use of the program.

(When using the offer price of SEK 99, the one-year period is calculated from registration.)

All prices are excluding. VAT.

Offer, Inventory Control, Member Invoicing, Multiuser version and English printout are (or can be) additional modules that can be ordered later.

Intermediation, as well as invoicing, may take place from K-Soft Sverige AB, Box 2826, 187 28 Täby. In the future, we may choose to cooperate with another company for e.g. intermediation and invoicing. However, the customer relationship is with us. The payment is made to the company from which the invoice comes.

The annual fee is on a continuous basis, but if you do not wish to continue using the program, all you have to do is give notice thirty days before the start of the next one-year period.

The introductory offer ( SEK 99 per month) is for the annual fee Start for the first year. After the first year, the ordinary price is billed, which is currently, for annual fee Start, one hundred and fifty-nine kroner per month, for annual fee Remote control, three hundred kroner per month and for annual fee Pro, three hundred and thirty-three kroner per month. After one year, the annual Remote Control fee is invoiced as standard, but you can choose Start or Pro by giving notice at any time before the due date.

If you choose to keep the program by not notifying us by email within 14 days of registration that you do not wish to continue with the program, you accept that you will pay the invoice for your order. Failure to pay the invoice or late payment does not give the right to cancel the order. We are happy to help you with logo at a cost price.

License for the use of 123 Fakturera is of course sold in accordance with applicable laws.

In order to be able to help you more easily and provide you with support, as well as to comply with the laws, we, for natural reasons, have to store your information.

In connection with the storage of information, the law requires that we provide you with the following information:

If you order as a private person, you have the right to cancel as stated by law. Your information is stored so that we can help you, etc. We will use it to be able to help you if you need help, follow the laws regarding bookkeeping, etc. When there are upgrades and the like, we may send you offers and the like about our products and services by email or the like. You may be contacted by email, post and telephone. If you don't want to be contacted, just send us an email about it.

You can at any time ask not to be sent information about upgrades by email, letter or the like, and we will of course not do that. You send such a request to us by email, post or similar.

For natural reasons, we have to store, process and move your data. Your information is stored until further notice. You give us permission to store, process and move your data, as well as to send you offers and the like by email, letter and the like, and tell others that you are customer. Due to the way it works with software, permission also needs to be given to other parties. The permission is therefore granted to us, as well as to the companies and/or person(s) who own the software, the source code, the website and the like. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control us. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control the companies (if any), which own or will own the software, source code, website and the like. It is also given to current and future persons (if any) who own or will own the software, source code, website and the like. This applies both to current and future products and services. It is also given to another company, (like K-Soft Sverige AB), which we can use to send/sell products, upgrades and the like, either by intermediation or otherwise.

You of course have the right to request access to, change and deletion of the information we hold about you. You also have the right to request restriction of data processing, and to object to data processing and the right to data portability. You have the right to complain to the supervisory authority. You can find more legal information about us here. The laws of Ireland are the applicable laws. Placing an order is of course completely voluntary. Of course, we do not use any automated profiling or decisions.

If you wish to contact us, please use the information on this website.

Click on Invoice Now to register according to the information you have entered and the terms here. (Date and time of admission are entered automatically in our registers.)

Our experience is that our customers are very satisfied with the way we work and hope and believe that this will also be your experience.

Have a great day!`;

  const swedishText = `GENOM att klicka på Fakturera Nu väljer du att registrera dig enligt den information som du har skrivit in och texten på registreringssidan och villkoren här, och du accepterar samtidigt villkoren här.

Du kan använda programmet GRATIS i 14 dagar.

123 Fakturera är så enkelt och självförklarande att chansen att du behöver support är minimal, men om du skulle behöva support finns vi här för dig, med vårt kontor bemannat för det mesta av dagen. Efter provperioden fortsätter prenumerationen och kostar 99 SEK exklusive moms per månad, vilket faktureras årligen. Om du inte vill behålla programmet, avbryt bara provperioden genom att ge besked innan 14 dagar från registrering.

Du har naturligtvis rätt att säga upp användningen av programmet utan några kostnader, genom att ge oss besked per e-post innan 14 dagar från registrering, att du inte vill fortsätta med programmet, och du betalar naturligtvis ingenting då.

Om vi inte får ett sådant besked från dig innan 14 dagar från registrering, då kan beställningen, av naturliga skäl, inte ändras. Med registrering menas datum och tid då du valde att trycka på knappen Fakturera Nu.

Fakturering sker för ett år åt gången.

Priset för 123 Fakturera (erbjudandepris 99 SEK per månad / vanligt pris 159 SEK per månad) är för årsavgiften Start för ett års användning av programmet.

(När erbjudandepriset på 99 SEK används beräknas ettårsperioden från registrering.)

Alla priser är exklusive moms.

Erbjudande, Lagerkontroll, Medlemsfakturering, Multianvändarversion och Engelskt utskrift är (eller kan vara) ytterligare moduler som kan beställas senare.

Mellanhand, såväl som fakturering, kan ske från K-Soft Sverige AB, Box 2826, 187 28 Täby. I framtiden kan vi välja att samarbeta med ett annat företag för t.ex. mellanhand och fakturering. Kundrelationen är dock med oss. Betalningen görs till det företag från vilket fakturan kommer.

Årsavgiften är på löpande basis, men om du inte vill fortsätta använda programmet räcker det med att ge besked trettio dagar innan nästa ettårsperiod börjar.

Introduktionserbjudandet (99 SEK per månad) är för årsavgiften Start för det första året. Efter det första året faktureras det vanliga priset, vilket för närvarande är för årsavgift Start, ett hundra femtiofem kronor per månad, för årsavgift Fjärrkontroll, tre hundra kronor per månad och för årsavgift Pro, tre hundra trettiotre kronor per månad. Efter ett år faktureras årsavgiften Fjärrkontroll som standard, men du kan välja Start eller Pro genom att ge besked när som helst innan förfallodagen.

Om du väljer att behålla programmet genom att inte meddela oss via e-post inom 14 dagar från registrering att du inte vill fortsätta med programmet, accepterar du att du kommer att betala fakturan för din beställning. Underlåtenhet att betala fakturan eller sen betalning ger inte rätt att avbryta beställningen. Vi hjälper gärna till med logotyp till självkostnadspris.

Licens för användning av 123 Fakturera säljs naturligtvis i enlighet med tillämpliga lagar.

För att kunna hjälpa dig bättre och ge dig support, samt för att följa lagarna, måste vi naturligtvis lagra din information.

I samband med lagring av information kräver lagen att vi lämnar följande information till dig:

Om du beställer som privatperson har du rätt att ångra enligt lag. Din information lagras för att vi ska kunna hjälpa dig, etc. Vi kommer att använda den för att kunna hjälpa dig om du behöver hjälp, följa lagarna om bokföring, etc. När det finns uppgraderingar och liknande kan vi skicka erbjudanden och liknande om våra produkter och tjänster via e-post eller liknande. Du kan kontaktas via e-post, post och telefon. Om du inte vill bli kontaktad, skicka bara ett e-postmeddelande till oss om det.

Du kan när som helst be att inte få information om uppgraderingar via e-post, brev eller liknande, och vi kommer naturligtvis inte att göra det. Du skickar en sådan begäran till oss via e-post, post eller liknande.

Av naturliga skäl måste vi lagra, bearbeta och flytta dina data. Din information lagras tills vidare. Du ger oss tillstånd att lagra, bearbeta och flytta dina data, samt att skicka erbjudanden och liknande via e-post, brev och liknande, och berätta för andra att du är kund. På grund av hur det fungerar med programvara behöver tillstånd också ges till andra parter. Tillståndet ges därför till oss, samt till de företag och/eller personer som äger programvaran, källkoden, webbplatsen och liknande. Det ges också till nuvarande och framtida företag som ägs och/eller kontrolleras av en eller flera av dem som för närvarande äger och/eller kontrollerar oss. Det ges också till nuvarande och framtida företag som ägs och/eller kontrolleras av en eller flera av dem som för närvarande äger och/eller kontrollerar de företag (om några), som äger eller kommer att äga programvaran, källkoden, webbplatsen och liknande. Det ges också till nuvarande och framtida personer (om några) som äger eller kommer att äga programvaran, källkoden, webbplatsen och liknande. Detta gäller både för nuvarande och framtida produkter och tjänster. Det ges också till ett annat företag, (som K-Soft Sverige AB), som vi kan använda för att skicka/sälja produkter, uppgraderingar och liknande, antingen genom mellanhand eller på annat sätt.

Du har naturligtvis rätt att begära tillgång till, ändring och radering av den information vi har om dig. Du har också rätt att begära begränsning av databehandling, och att invända mot databehandling och rätten till dataportabilitet. Du har rätt att klaga till tillsynsmyndigheten. Du kan hitta mer juridisk information om oss här. Lagarna i Irland är de tillämpliga lagarna. Att lägga en beställning är naturligtvis helt frivilligt. Naturligtvis använder vi inte någon automatiserad profilering eller beslut.

Om du vill kontakta oss, använd informationen på denna webbplats.

Klicka på Fakturera Nu för att registrera dig enligt den information du har angett och villkoren här. (Datum och tid för antagning registreras automatiskt i våra register.)

Vår erfarenhet är att våra kunder är mycket nöjda med hur vi arbetar och hoppas och tror att detta också kommer att bli din erfarenhet.

Ha en bra dag!`;

  const termsText = texts.terms_content || (language === 'sv' ? swedishText : englishText);

  return (
    <div className="terms-container">
      <Navbar setLanguage={setLanguage} />
      <div className="terms-card">
        <header className="terms-header">
          <h1>{texts.title || (language === 'sv' ? 'Villkor och bestämmelser' : 'Terms and Conditions')}</h1>
          <p className="terms-subtitle">
            {texts.subtitle || (language === 'sv' ? 'Läs dessa villkor noga innan du fortsätter.' : 'Please read these terms carefully before proceeding.')}
          </p>
        </header>

        <div className="terms-body">
          <div className="terms-scroll">
            <p>{termsText}</p>
          </div>
        </div>

        <div className="terms-footer">
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

export default Terms;
