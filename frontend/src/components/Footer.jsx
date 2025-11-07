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
          margin: 0;
        }

        /* ===== RESPONSIVE DESIGN ===== */
        /* Mobile First - Base styles are optimized for mobile */

        /* Small Mobile (up to 480px) */
        @media (max-width: 480px) {
          .footer {
            padding: 1rem 0.75rem;
          }

          .footer hr {
            height: 1px;
            margin-bottom: 0.75rem;
          }

          .footer p {
            font-size: 0.75rem;
            line-height: 1.4;
          }
        }

        /* Medium Mobile (481px to 640px) */
        @media (min-width: 481px) and (max-width: 640px) {
          .footer {
            padding: 1.25rem 1rem;
          }

          .footer hr {
            height: 1.5px;
            margin-bottom: 0.875rem;
          }

          .footer p {
            font-size: 0.8rem;
          }
        }

        /* Tablet (641px to 768px) */
        @media (min-width: 641px) and (max-width: 768px) {
          .footer {
            padding: 1.5rem;
          }

          .footer p {
            font-size: 0.85rem;
          }
        }

        /* Small Desktop (769px to 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer {
            padding: 1.75rem;
          }

          .footer p {
            font-size: 0.9rem;
          }
        }

        /* Large Desktop (1025px and up) */
        @media (min-width: 1025px) {
          .footer {
            padding: 2rem;
          }

          .footer p {
            font-size: 0.875rem;
          }
        }

        /* Extra Large Screens (1440px and up) */
        @media (min-width: 1440px) {
          .footer {
            padding: 2.5rem;
          }

          .footer p {
            font-size: 0.9rem;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .footer {
            padding: 2rem 1rem;
          }
        }

        /* Landscape orientation on mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .footer {
            padding: 0.75rem 0.5rem;
          }

          .footer hr {
            height: 1px;
            margin-bottom: 0.5rem;
          }

          .footer p {
            font-size: 0.7rem;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .footer hr {
            background: #fff;
            height: 3px;
          }

          .footer p {
            color: #fff;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .footer hr {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
