
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-background/70"></div>
      
      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-down">
          <span className="text-primary">Hello, I'm</span> <span className="block mt-2">Your Name</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-2xl animate-fade-up">
          Web Developer & Designer crafting beautiful digital experiences
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Button asChild size="lg">
            <a href="#projects">View My Work</a>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        
        <div className="mt-16 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path 
                d="M12 5L12 19M12 19L19 12M12 19L5 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
