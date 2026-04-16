import React from 'react';
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gold-900 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-serif text-white mb-2">GLOBAL <span className="text-gold-500">EDGE REALTY</span></h2>
        <p className="text-gray-500 text-sm mb-8">Premium Real Estate Solutions | Al Mankhool, Burjuman, Dubai</p>
        
        <div className="flex justify-center gap-8 text-gray-400 mb-8">
          <a 
            href="https://www.instagram.com/globaledge_realty/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gold-500 transition-colors transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://www.facebook.com/globaledgerealty/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gold-500 transition-colors transform hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/company/global-edge-realty" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gold-500 transition-colors transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://x.com/globaledgery"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-500 transition-colors transform hover:scale-110"
            aria-label="X (Twitter)"
          >
            <Twitter size={24} />
          </a>

          <a
            href="https://in.pinterest.com/globaledgerealty/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-500 transition-colors transform hover:scale-110"
            aria-label="Pinterest"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49-.09-.81-.17-2.05.04-2.93.19-.81 1.22-5.15 1.22-5.15s-.31-.62-.31-1.53c0-1.43.83-2.49 1.87-2.49.88 0 1.3.66 1.3 1.45 0 .89-.57 2.22-.86 3.45-.25 1.04.52 1.89 1.54 1.89 1.85 0 3.28-1.95 3.28-4.76 0-2.49-1.79-4.23-4.34-4.23-2.96 0-4.7 2.22-4.7 4.52 0 .9.35 1.86.78 2.38.09.11.1.21.07.33-.08.36-.26 1.04-.3 1.19-.05.19-.16.23-.37.14-1.39-.65-2.25-2.68-2.25-4.31 0-3.51 2.55-6.74 7.35-6.74 3.86 0 6.86 2.75 6.86 6.42 0 3.83-2.41 6.92-5.76 6.92-1.12 0-2.17-.58-2.53-1.27l-.69 2.63c-.25.97-.93 2.19-1.38 2.93 1.04.32 2.14.49 3.29.49 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </a>
        </div>
        
        <div className="flex justify-center gap-6 text-gray-500 text-xs">
           <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
        </div>

        <p className="text-gray-700 text-xs mt-8">© {new Date().getFullYear()} Global Edge Realty. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;