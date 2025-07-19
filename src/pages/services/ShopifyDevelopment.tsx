import { ArrowRight, CheckCircle, ShoppingCart, Palette, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ShopifyDevelopment = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Custom Shopify Stores',
      description: 'Tailored e-commerce solutions built on the Shopify platform.',
    },
    {
      icon: Palette,
      title: 'Theme Customization',
      description: 'Custom themes that reflect your brand and engage customers.',
    },
    {
      icon: Zap,
      title: 'App Development',
      description: 'Custom Shopify apps to extend your store functionality.',
    },
    {
      icon: Users,
      title: 'Migration Services',
      description: 'Seamless migration from other platforms to Shopify.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold reveal">
              <span className="gradient-text">Shopify Development</span> Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto reveal-delay-100">
              Build powerful e-commerce stores on Shopify that drive sales and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-delay-200">
              <Button size="xl" variant="hero" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
              <Button size="xl" variant="glass" asChild>
                <Link to="/portfolio">View Stores</Link>
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
              Shopify <span className="gradient-text">Expertise</span>
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
              Ready to Launch Your <span className="gradient-text">Shopify Store</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's build an e-commerce store that converts visitors into customers.
            </p>
            <Button size="xl" variant="hero" asChild>
              <Link to="/contact">
                Start Your Store <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopifyDevelopment;