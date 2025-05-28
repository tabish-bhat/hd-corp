import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Real Estate Operations?</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Book a free 30-minute consultation with our team of experts. We'll analyze your current operations
            and provide insights on how to optimize your business for growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary">
              <NavLink to="/contact" className="flex items-center">
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </NavLink>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary">
              <NavLink to="/services">
                Explore Our Services
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
