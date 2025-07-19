import { useState } from 'react';
import { ExternalLink, Github, Filter, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'shopify', label: 'Shopify Development' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '$50M+', label: 'Client Revenue Generated' },
    { number: '4.9/5', label: 'Average Rating' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold reveal">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto reveal-delay-100">
              Discover the innovative solutions we've built for businesses across various industries. 
              Each project showcases our commitment to excellence and results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "glow" : "glass"}
                onClick={() => setActiveFilter(filter.id)}
                className="transition-all duration-300"
              >
                <Filter className="mr-2 h-4 w-4" />
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="glass-card overflow-hidden hover:scale-105 transition-all duration-300 reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="p-6">
                  <div className="text-6xl text-center mb-6">{project.image}</div>
                  
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{project.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-surface-variant rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-xs text-muted-foreground">
                            <Star className="h-3 w-3 text-primary mr-2 fill-current" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="glass" size="sm" className="flex-1" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-card p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to See Detailed <span className="gradient-text">Case Studies</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get in-depth insights into our project processes, challenges overcome, and results achieved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero">
                Download Case Studies
              </Button>
              <Button size="lg" variant="glass" asChild>
                <Link to="/contact">
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 reveal">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Start Your <span className="gradient-text">Project</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <Button size="xl" variant="hero" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;