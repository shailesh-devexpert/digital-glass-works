import { Users, Target, Eye, Award, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import teamImage from '@/assets/team-collaboration.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that drive business growth.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring every solution meets their unique needs.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: 'Our clients trust us to deliver on time, on budget, and beyond expectations.',
    },
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Founder',
      bio: '15+ years in technology leadership, former senior engineer at Google.',
      image: '👨‍💼',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Expert in full-stack development and cloud architecture, MIT graduate.',
      image: '👩‍💻',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Security',
      bio: 'Cybersecurity specialist with government and enterprise experience.',
      image: '👨‍🔬',
    },
    {
      name: 'Emily Johnson',
      role: 'Design Director',
      bio: 'Award-winning UX/UI designer with a passion for user-centered design.',
      image: '👩‍🎨',
    },
  ];

  const achievements = [
    { year: '2018', title: 'Company Founded', description: 'Started with a vision to democratize technology solutions' },
    { year: '2019', title: 'First 100 Clients', description: 'Reached our first major milestone in customer growth' },
    { year: '2021', title: 'Award Recognition', description: 'Named "Best IT Services Company" by Tech Awards' },
    { year: '2023', title: 'Global Expansion', description: 'Expanded operations to serve clients worldwide' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold reveal">
                About <span className="gradient-text">TechSolutions</span>
              </h1>
              <p className="text-xl text-muted-foreground reveal-delay-100">
                We're a passionate team of technology experts dedicated to transforming businesses 
                through innovative digital solutions. Since 2018, we've been helping companies 
                navigate the digital landscape and achieve their goals.
              </p>
              <div className="reveal-delay-200">
                <Button size="lg" variant="glow" asChild>
                  <Link to="/contact">Work With Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative reveal-delay-300">
              <img
                src={teamImage}
                alt="Our team collaborating"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="glass-card p-8 reveal">
              <Target className="h-12 w-12 text-primary mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower businesses of all sizes with innovative technology solutions that drive growth, 
                enhance efficiency, and create competitive advantages in the digital marketplace.
              </p>
            </Card>
            <Card className="glass-card p-8 reveal-delay-100">
              <Eye className="h-12 w-12 text-secondary mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become the global leader in accessible technology solutions, making advanced digital 
                capabilities available to every business, regardless of size or industry.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The experts behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <div className="text-primary font-medium mb-3">{member.role}</div>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our growth story
            </p>
          </div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-6 reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {achievement.year}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 reveal">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to <span className="gradient-text">Partner</span> With Us?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how our expertise can help your business thrive.
            </p>
            <Button size="xl" variant="hero" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;