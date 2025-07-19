import { ArrowRight, CheckCircle, Code, Smartphone, Server, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const WebDevelopment = () => {
  const features = [
    {
      icon: Globe,
      title: 'Responsive Design',
      description: 'Mobile-first responsive designs that work perfectly on all devices.',
    },
    {
      icon: Code,
      title: 'Modern Technologies',
      description: 'Built with React, Vue, Angular, and other cutting-edge frameworks.',
    },
    {
      icon: Server,
      title: 'Performance Optimized',
      description: 'Fast loading times and optimal performance for better user experience.',
    },
    {
      icon: Smartphone,
      title: 'Progressive Web Apps',
      description: 'PWAs that provide native app-like experience in the browser.',
    },
  ];

  const packages = [
    {
      name: 'Basic Website',
      price: '$2,999',
      features: ['5-10 Pages', 'Responsive Design', 'Contact Form', 'Basic SEO', '30 Days Support'],
    },
    {
      name: 'Business Website',
      price: '$5,999',
      features: ['10-20 Pages', 'CMS Integration', 'E-commerce Ready', 'Advanced SEO', '90 Days Support'],
    },
    {
      name: 'Enterprise Solution',
      price: 'Custom',
      features: ['Unlimited Pages', 'Custom Features', 'API Integrations', 'Dedicated Support', '1 Year Warranty'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold reveal">
              <span className="gradient-text">Web Development</span> Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto reveal-delay-100">
              Create stunning, high-performance websites that drive results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-delay-200">
              <Button size="xl" variant="hero" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
              <Button size="xl" variant="glass" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Choose Our <span className="gradient-text">Web Development</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="glass-card p-6 text-center reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Development <span className="gradient-text">Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your requirements and goals' },
              { step: '02', title: 'Design', description: 'Creating wireframes and visual designs' },
              { step: '03', title: 'Development', description: 'Building your website with modern tech' },
              { step: '04', title: 'Launch', description: 'Testing, deployment, and ongoing support' },
            ].map((phase, index) => (
              <div key={index} className="text-center reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-bold gradient-text mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Web Development <span className="gradient-text">Packages</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="glass-card p-8 text-center reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                <div className="text-4xl font-bold gradient-text mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/contact">Choose Package</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 reveal">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Build Your <span className="gradient-text">Website</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss your project and create a website that drives results.
            </p>
            <Button size="xl" variant="hero" asChild>
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;