import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, BarChart2, CreditCard, Globe, Database, Briefcase, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/ui/section-title';

// Import service images
import salesOpsImage from '@/assets/gallary/Artboard 2.jpg';
import hrImage from '@/assets/gallary/Artboard 3.jpg';
import financialImage from '@/assets/gallary/Artboard 5.jpg';
import digitalImage from '@/assets/gallary/Artboard 6.jpg';
import crmImage from '@/assets/gallary/Artboard 7.jpg';
import projectImage from '@/assets/gallary/Artboard 8.jpg';

const services = [
  {
    title: 'Sales Operations',
    description: 'Optimize your sales team recruitment, training, process design, and performance tracking.',
    icon: Users,
    link: '/services#sales-operations',
    image: salesOpsImage
  },
  {
    title: 'Human Resources',
    description: 'Expert hiring support, organizational structure setup, and payroll compliance management.',
    icon: Briefcase,
    link: '/services#human-resources',
    image: hrImage
  },
  {
    title: 'Financial Services',
    description: 'Strategic budgeting, forecasting, cash flow management, and investor reporting.',
    icon: CreditCard,
    link: '/services#financial-services',
    image: financialImage
  },
  {
    title: 'Digital Transformation',
    description: 'Website development, digital marketing, SEO, and comprehensive branding solutions.',
    icon: Globe,
    link: '/services#digital-transformation',
    image: digitalImage
  },
  {
    title: 'CRM Implementation',
    description: 'Setup real estate-specific CRMs, staff training, and process automation.',
    icon: Database,
    link: '/services#crm-implementation',
    image: crmImage
  },
  {
    title: 'End-to-End Project Setup',
    description: 'Launch new real estate projects with complete operations, staffing, marketing, and tech.',
    icon: BarChart2,
    link: '/services#project-setup',
    image: projectImage
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Services" 
          subtitle="Comprehensive operational solutions for real estate businesses"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <CardHeader className="relative">
                <service.icon className="h-12 w-12 text-primary mb-2" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <NavLink to={service.link} className="flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <NavLink to="/services" className="flex items-center">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
