
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-b from-background to-background/70"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center lg:text-left lg:items-start">
        {/* Announcement banner */}
        <div className="mb-16 inline-flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-2 text-sm">
          <span className="inline-block rounded-full bg-primary px-2 py-1 text-xs font-medium">New</span>
          <span className="text-muted-foreground">Next Ventures is live!</span>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 max-w-5xl">
          I help founders turn ideas
          <br />
          into seamless{" "}
          <span className="italic-text text-muted-foreground">digital experiences</span>
        </h1>
        
        <div className="mt-12 flex items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-primary">
              <div className="h-full w-full bg-muted"></div>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-md text-muted-foreground">Hello, I'm <span className="text-white">Your Name</span></p>
              <p className="text-md text-muted-foreground">a Full Stack Developer</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          <Button className="rounded-full px-6 py-6 h-auto gap-2" size="lg">
            Let's Connect
            <ArrowRight className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-2 ml-2 text-muted-foreground">
            <Mail className="h-5 w-5" />
            <span>hello@yourname.com</span>
          </div>
        </div>
      </div>
      
      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 h-24 w-full">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 24C240 74 480 74 720 49.3C960 24 1200 0 1440 0V74H0V24Z"
            fill="currentColor"
            className="text-background opacity-20"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
