
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A responsive web application built with React and Tailwind CSS.',
      tags: ['React', 'Tailwind CSS', 'TypeScript'],
      imageAlt: 'Project One Preview',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'An e-commerce platform with payment integration and user authentication.',
      tags: ['Next.js', 'Stripe', 'Supabase'],
      imageAlt: 'Project Two Preview',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A mobile-first dashboard with analytics and real-time data visualization.',
      tags: ['React', 'Chart.js', 'Firebase'],
      imageAlt: 'Project Three Preview',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was an opportunity 
            to learn new technologies and solve unique problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">{project.imageAlt}</span>
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 bg-secondary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">View Details</Button>
                <Button size="sm">Live Demo</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
