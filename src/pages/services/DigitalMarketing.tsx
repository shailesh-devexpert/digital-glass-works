import { ArrowRight, CheckCircle, TrendingUp, Target, Users, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const DigitalMarketing = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'PPC Advertising',
      description: 'Strategic pay-per-click campaigns that maximize your ROI.',
    },
    {
      icon: Target,
      title: 'Social Media Marketing',
      description: 'Engage your audience across all major social platforms.',
    },
    {
      icon: Users,
      title: 'Content Marketing',
      description: 'Create compelling content that drives engagement and conversions.',
    },
    {
      icon: BarChart,
      title: 'Analytics & Optimization',
      description: 'Data-driven insights to continuously improve performance.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold reveal">
              <span className="gradient-text">Digital Marketing</span> Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto reveal-delay-100">
              Drive growth with data-driven digital marketing strategies that deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-delay-200">
              <Button size="xl" variant="hero" asChild>
                <Link to="/contact">Get Strategy</Link>
              </Button>
              <Button size="xl" variant="glass" asChild>
                <Link to="/portfolio">View Campaigns</Link>
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
              Marketing <span className="gradient-text">Services</span>
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
              Ready to Grow Your <span className="gradient-text">Business</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's create a marketing strategy that drives real results for your business.
            </p>
            <Button size="xl" variant="hero" asChild>
              <Link to="/contact">
                Start Campaign <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;