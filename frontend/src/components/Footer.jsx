import React from 'react';

const Footer = () => {
  return (
   <div className="footer">
      <hr />
      <p>© Lattfaktura, CRO no. 638537, 2025. All rights reserved.</p>
      <style>{`
        .footer {
          position: relative;
          left: 0;
          right: 0;
          text-align: center;
          padding: 1.5rem;
          margin-top: -0.5rem;
        }

        .footer hr {
          border: none;
          height: 2px;
          background: white;
          margin-bottom: 1rem;
        }

        .footer p {
          color: white;
          font-size: 0.875rem;
          font-weight: 500;
         

        }
      `}</style>
    </div>
  );
};

export default Footer;
