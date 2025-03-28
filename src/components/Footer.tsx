
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-xl">
              <span className="text-primary">AB</span>
            </span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {year} Your Name. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((platform) => (
              <a 
                key={platform}
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={platform}
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
