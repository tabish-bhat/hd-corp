
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, BarChart2, Users, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div>
              <p className="text-accent font-medium mb-2">REAL ESTATE OPERATIONS CONSULTING</p>
              <h1 className="text-gradient">
                Operational Excellence for Real Estate: From Sales Teams to CRMs
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              We help real estate companies optimize their operations, boost sales performance, 
              streamline processes, and implement technology solutions that drive growth and profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <NavLink to="/contact" className="flex items-center">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
              <Button asChild variant="outline" size="lg">
                <NavLink to="/services">Our Services</NavLink>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 animate-slide-up">
            <div className="bg-white rounded-lg p-6 shadow-lg border hover:border-accent transition-colors">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sales Operations</h3>
              <p className="text-muted-foreground">Optimize recruitment, training, and sales processes.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border hover:border-accent transition-colors">
              <BarChart2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Financial Services</h3>
              <p className="text-muted-foreground">Expert budgeting, forecasting, and cash flow management.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border hover:border-accent transition-colors">
              <Database className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">CRM Implementation</h3>
              <p className="text-muted-foreground">Setup and optimize real estate specific CRMs.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border hover:border-accent transition-colors">
              <ArrowRight className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
              <p className="text-muted-foreground">Modern websites, digital marketing, and branding.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
