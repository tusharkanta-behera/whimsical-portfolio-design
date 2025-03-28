
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate web developer based in [Your Location]. I specialize in creating responsive 
              and user-friendly websites that provide exceptional user experiences. With a strong foundation in 
              both design and development, I bring ideas to life with clean, efficient code and beautiful design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying outdoor activities. I believe in continuous learning and staying updated with the latest 
              industry trends and best practices.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">My Approach</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-medium mb-2">User-Centered</h4>
                    <p className="text-sm text-muted-foreground">I create solutions with the end user in mind, ensuring intuitive and accessible experiences.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-medium mb-2">Detail-Oriented</h4>
                    <p className="text-sm text-muted-foreground">I pay attention to the small details that make a big difference in quality and performance.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden aspect-square">
            <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
            <div className="absolute inset-4 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-lg text-muted-foreground">Your Image Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
