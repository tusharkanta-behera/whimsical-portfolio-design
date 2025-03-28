
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      
      {/* Blog Section (empty for now) */}
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Blog</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
        </div>
      </section>
      
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
