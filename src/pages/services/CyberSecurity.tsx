import { ArrowRight, CheckCircle, Shield, Lock, Eye, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const CyberSecurity = () => {
  const features = [
    {
      icon: Shield,
      title: 'Security Audits',
      description: 'Comprehensive security assessments to identify vulnerabilities.',
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Advanced encryption and data protection strategies.',
    },
    {
      icon: Eye,
      title: 'Threat Monitoring',
      description: '24/7 monitoring and real-time threat detection.',
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Secure your servers, networks, and cloud infrastructure.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold reveal">
              <span className="gradient-text">Cyber Security</span> Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto reveal-delay-100">
              Protect your business from cyber threats with comprehensive security solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-delay-200">
              <Button size="xl" variant="hero" asChild>
                <Link to="/contact">Security Audit</Link>
              </Button>
              <Button size="xl" variant="glass" asChild>
                <Link to="/portfolio">View Solutions</Link>
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
              Security <span className="gradient-text">Solutions</span>
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

      {/* CTA Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 reveal">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Secure Your <span className="gradient-text">Business</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's protect your business from cyber threats with advanced security solutions.
            </p>
            <Button size="xl" variant="hero" asChild>
              <Link to="/contact">
                Get Protected <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurity;