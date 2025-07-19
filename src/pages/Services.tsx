import { Globe, Smartphone, Search, TrendingUp, Shield, ShoppingCart, Code, Cloud } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import cyberImage from '@/assets/cybersecurity.jpg';
import marketingImage from '@/assets/digital-marketing.jpg';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern frameworks like React, Vue, and Angular.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure & Scalable'],
      price: 'Starting at $2,999',
      image: '🌐',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter.',
      features: ['Native Performance', 'Cross-Platform', 'App Store Optimization', 'Push Notifications'],
      price: 'Starting at $5,999',
      image: '📱',
    },
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Comprehensive search engine optimization to improve your online visibility and rankings.',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Analytics & Reporting'],
      price: 'Starting at $899/month',
      image: '🔍',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies including PPC, social media, content marketing, and more.',
      features: ['PPC Campaigns', 'Social Media Marketing', 'Content Strategy', 'Conversion Optimization'],
      price: 'Starting at $1,499/month',
      image: '📈',
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      features: ['Security Audits', 'Threat Monitoring', 'Data Protection', 'Compliance Support'],
      price: 'Starting at $2,499/month',
      image: '🔒',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms using Shopify, WooCommerce, and custom solutions.',
      features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Mobile Optimized'],
      price: 'Starting at $3,999',
      image: '🛒',
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your specific business requirements.',
      features: ['Custom Development', 'API Integration', 'Database Design', 'Maintenance & Support'],
      price: 'Custom Pricing',
      image: '💻',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud migration, infrastructure setup, and ongoing management for scalable solutions.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps', 'Monitoring & Support'],
      price: 'Starting at $1,999/month',
      image: '☁️',
    },
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: ['Basic Website', 'SEO Setup', 'Social Media Setup', 'Monthly Reporting'],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: ['Custom Web App', 'Advanced SEO', 'Digital Marketing', 'Mobile App', 'Priority Support'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: ['Full Custom Development', 'Enterprise Security', 'Dedicated Team', '24/7 Support', 'SLA Guarantee'],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold reveal">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto reveal-delay-100">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300 reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.image}</div>
                    <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <div className="text-primary font-bold mb-4">{service.price}</div>
                    <Button variant="glass" className="w-full" size="sm">
                      Learn More
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Specialized services that set us apart
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8 reveal">
              <h3 className="text-3xl font-bold">Advanced Cybersecurity</h3>
              <p className="text-muted-foreground text-lg">
                Protect your business with our comprehensive cybersecurity solutions. We provide 
                24/7 monitoring, threat detection, and rapid response to keep your data safe.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-3" />
                  <span>Real-time threat monitoring</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-3" />
                  <span>Penetration testing</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-3" />
                  <span>Compliance management</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-3" />
                  <span>Employee security training</span>
                </li>
              </ul>
              <Button variant="glow" size="lg">Request Security Audit</Button>
            </div>
            <div className="reveal-delay-200">
              <img src={cyberImage} alt="Cybersecurity" className="rounded-2xl w-full h-auto shadow-2xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal order-2 lg:order-1">
              <img src={marketingImage} alt="Digital Marketing" className="rounded-2xl w-full h-auto shadow-2xl" />
            </div>
            <div className="space-y-8 reveal-delay-200 order-1 lg:order-2">
              <h3 className="text-3xl font-bold">Strategic Digital Marketing</h3>
              <p className="text-muted-foreground text-lg">
                Drive growth with our data-driven digital marketing strategies. We help you reach 
                the right audience and convert them into loyal customers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-primary mr-3" />
                  <span>Multi-channel campaigns</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-primary mr-3" />
                  <span>Advanced analytics & reporting</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-primary mr-3" />
                  <span>Conversion optimization</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-primary mr-3" />
                  <span>ROI-focused strategies</span>
                </li>
              </ul>
              <Button variant="glow" size="lg">Start Marketing Campaign</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Service <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the perfect package for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`glass-card p-8 relative hover:scale-105 transition-transform duration-300 reveal ${pkg.popular ? 'border-primary/50 glow' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                    <span className="text-muted-foreground">{pkg.period}</span>
                  </div>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={pkg.popular ? "hero" : "glass"} 
                  className="w-full" 
                  size="lg"
                  asChild
                >
                  <Link to="/contact">Choose Plan</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 reveal">
            <h2 className="text-3xl md:text-5xl font-bold">
              Need a <span className="gradient-text">Custom Solution</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss your unique requirements and create a tailored solution for your business.
            </p>
            <Button size="xl" variant="hero" asChild>
              <Link to="/contact">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;