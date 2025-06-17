import React from 'react';
import { ArrowRight, Award, BarChart2, CheckCircle, Target } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/section-title';

// Import images
import aboutHero from '@/assets/gallary/15.jpg';
import ourStory from '@/assets/gallary/16.jpg';
import mission from '@/assets/gallary/17.jpg';
import vision from '@/assets/gallary/18.jpg';
import whyRealEstate from '@/assets/gallary/19.jpg';
import ctaImage from '@/assets/gallary/20.jpg';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutHero} 
            alt="About HD Corp" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">About HD Corp</h1>
            <p className="text-xl text-muted-foreground">
              We're a team of operational experts dedicated to helping real estate companies optimize 
              their processes, systems, and teams for maximum effectiveness.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden group">
              <img 
                src={ourStory} 
                alt="Our Story" 
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
            <div>
              <SectionTitle 
                title="Our Story" 
                subtitle="From industry challenges to tailored solutions"
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  HD Corp was founded in 2018 by a team of real estate operations 
                  specialists who recognized that many companies in the industry were struggling 
                  with inefficient processes, outdated technology, and untrained sales teams.
                </p>
                <p>
                  After years of working with leading developers and agencies, we saw the same 
                  operational challenges repeating across organizations. We created HD Corp to 
                  address these pain points with systematic, proven solutions.
                </p>
                <p>
                  Today, we're proud to have helped over 50 real estate companies transform their 
                  operations and achieve sustainable growth through improved sales processes, 
                  optimized financial operations, and modern digital solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg border group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img 
                  src={mission} 
                  alt="Our Mission" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground">
                To empower real estate companies with the operational systems, processes, 
                and expertise needed to realize their full potential in today's competitive market.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg border group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img 
                  src={vision} 
                  alt="Our Vision" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground">
                To be the leading operational consulting partner for real estate companies, 
                known for delivering measurable results through our deep industry expertise 
                and innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Real Estate */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="relative rounded-lg overflow-hidden mb-12">
            <img 
              src={whyRealEstate} 
              alt="Why Real Estate" 
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <SectionTitle 
                title="Why We Specialize in Real Estate" 
                subtitle="Our deep industry knowledge creates operational success"
                centered
                className="text-primary-foreground"
              />
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center text-muted-foreground mb-12">
            <p>
              Unlike general business consultants, we focus exclusively on real estate operations. 
              This specialization gives us unmatched insight into the unique challenges and opportunities 
              in the real estate industry, from property development to sales and management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border group hover:shadow-xl transition-all duration-300">
              <BarChart2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Industry-Specific Metrics</h4>
              <p className="text-muted-foreground">
                We understand the critical KPIs that drive real estate success, from conversion rates 
                to cost-per-lead and sales velocity.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border group hover:shadow-xl transition-all duration-300">
              <ArrowRight className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Sales Cycle Expertise</h4>
              <p className="text-muted-foreground">
                Our team has managed thousands of real estate transactions and understands the 
                unique sales cycle in different property segments.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border group hover:shadow-xl transition-all duration-300">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Tailored Technology Solutions</h4>
              <p className="text-muted-foreground">
                We've implemented and optimized every major CRM and tech solution specifically for 
                real estate operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ctaImage} 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Ready to Work Together?</h2>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Let's discuss how our operational expertise can help your real estate business 
              achieve its full potential.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-primary transform hover:scale-105 transition-transform"
            >
              <NavLink to="/contact" className="flex items-center">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
