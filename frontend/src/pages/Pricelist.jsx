import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Pricelist.css';

const Pricelist = ({ language = 'sv', setLanguage = () => {} }) => {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState({});
  const [texts, setTexts] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found, please login');
        setProducts([]);
        return;
      }
      try {
        const res = await fetch('https://faktulitebackend.onrender.com/api/pricelist', {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        } else {
          console.error('Failed to fetch pricelist:', res.status);
          setProducts([]);
        }
      } catch (err) {
        console.error('Error fetching pricelist', err);
        setProducts([]);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const res = await fetch(`https://faktulitebackend.onrender.com/api/texts?page=pricelist&language=${language}`);
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

  const handleEdit = (id, field, value) => {
    setEditing(prev => ({ ...prev, [id]: { ...prev[id], [field]: value } }));
  };

  const handleSave = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found, please login');
      return;
    }
    try {
      const updates = editing[id] || {};
      await fetch(`https://faktulitebackend.onrender.com/api/pricelist/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updates)
      });
      setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
      setEditing(prev => ({ ...prev, [id]: undefined }));
    } catch (err) {
      console.error('Error saving product', err);
    }
  };



  return (
    <>
      <div className="pricelist-container">
        <Navbar language={language} setLanguage={setLanguage} />

        {/* Background overlay */}
        <div className="bg-overlay-price"></div>

        <div className="content-wrapper">
          <div className={`page-header ${isVisible ? 'visible' : ''}`}>
            <div className="header-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M4 8H28V24H4V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12H24M8 16H24M8 20H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h1>{texts.pricelist_title || 'Pricelist'}</h1>
            <p className="header-subtitle">{language === 'sv' ? 'Hantera dina produkter och priser' : 'Manage your products and prices'}</p>
          </div>

          <div className={`table-card ${isVisible ? 'visible' : ''}`}>
            <div className="table-wrapper">
              <table className="pricelist-table">
                <thead>
                  <tr>
                    <th className="desktop tablet">
                      <div className="th-content">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M5 6H11M5 10H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        {texts.product_service || 'Product/Service'}
                      </div>
                    </th>
                    <th className="desktop tablet">
                      <div className="th-content">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8 2V14M4 6L8 2L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {texts.in_price || 'In Price'}
                      </div>
                    </th>
                    <th className="desktop tablet mobile">
                      <div className="th-content">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M8 5V11M6 8H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        {texts.price || 'Price'}
                      </div>
                    </th>
                    <th className="desktop">
                      <div className="th-content">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2 4H14M2 8H14M2 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        {texts.description || 'Description'}
                      </div>
                    </th>
                    <th className="desktop tablet">
                      <div className="th-content">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <rect x="3" y="3" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M6 8H10M8 6V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        {texts.quantity || 'Quantity'}
                      </div>
                    </th>
                    <th className="desktop tablet mobile">
                      <div className="th-content">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2 8H14M8 2L14 8L8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {texts.total || 'Total'}
                      </div>
                    </th>
                    <th className="desktop tablet mobile">
                      <div className="th-content">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="4" r="1.5" fill="currentColor"/>
                          <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
                          <circle cx="8" cy="12" r="1.5" fill="currentColor"/>
                        </svg>
                        {texts.actions || 'Actions'}
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
                      <td className="desktop tablet">
                        <input
                          type="text"
                          value={editing[product.id]?.product || product.product}
                          onChange={(e) => handleEdit(product.id, 'product', e.target.value)}
                          className="table-input"
                        />
                      </td>
                      <td className="desktop tablet">
                        <div className="price-input-wrapper">
                          <span className="currency">$</span>
                          <input
                            type="number"
                            value={editing[product.id]?.in_price || product.in_price}
                            onChange={(e) => handleEdit(product.id, 'in_price', e.target.value)}
                            className="table-input price-input"
                          />
                        </div>
                      </td>
                      <td className="desktop tablet mobile">
                        <div className="price-input-wrapper">
                          <span className="currency">$</span>
                          <input
                            type="number"
                            value={editing[product.id]?.price || product.price}
                            onChange={(e) => handleEdit(product.id, 'price', e.target.value)}
                            className="table-input price-input"
                          />
                        </div>
                      </td>
                      <td className="desktop">
                        <input
                          type="text"
                          value={editing[product.id]?.description || product.description}
                          onChange={(e) => handleEdit(product.id, 'description', e.target.value)}
                          className="table-input"
                        />
                      </td>
                      <td className="desktop tablet">
                        <input
                          type="number"
                          value={editing[product.id]?.quantity || product.quantity}
                          onChange={(e) => handleEdit(product.id, 'quantity', e.target.value)}
                          className="table-input qty-input"
                        />
                      </td>
                      <td className="desktop tablet mobile total-cell">
                        <span className="total-amount">
                          ${((editing[product.id]?.price || product.price) * (editing[product.id]?.quantity || product.quantity)).toLocaleString()}
                        </span>
                      </td>
                      <td className="desktop tablet mobile action-cell">
                        <button onClick={() => handleSave(product.id)} className="save-btn">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8L6 11L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="desktop tablet">Save</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Pricelist;