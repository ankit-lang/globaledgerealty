import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppPopup: React.FC = () => {
      const handleClick = () => {
            window.open('https://wa.me/919811669862', '_blank');
      };

      return (
            <div className="fixed bottom-6 right-6 z-50">
                  <a href="https://wa.me/919811669862" target="_blank" rel="noopener noreferrer">
                  <button
                        onClick={handleClick}
                        className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg animate-pulse hover:animate-none hover:scale-110 transition-all duration-300 ease-in-out"
                        aria-label="Contact us on WhatsApp"
                  >
                        <FaWhatsapp size={28} />
                  </button>
                  </a>
            </div>
      );
};

export default WhatsAppPopup;