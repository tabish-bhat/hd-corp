
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, BarChart2, CreditCard, Globe, Database, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/ui/section-title';

const services = [
  {
    title: 'Sales Operations',
    description: 'Optimize your sales team recruitment, training, process design, and performance tracking.',
    icon: Users,
    link: '/services#sales-operations'
  },
  {
    title: 'Human Resources',
    description: 'Expert hiring support, organizational structure setup, and payroll compliance management.',
    icon: Briefcase,
    link: '/services#human-resources'
  },
  {
    title: 'Financial Services',
    description: 'Strategic budgeting, forecasting, cash flow management, and investor reporting.',
    icon: CreditCard,
    link: '/services#financial-services'
  },
  {
    title: 'Digital Transformation',
    description: 'Website development, digital marketing, SEO, and comprehensive branding solutions.',
    icon: Globe,
    link: '/services#digital-transformation'
  },
  {
    title: 'CRM Implementation',
    description: 'Setup real estate-specific CRMs, staff training, and process automation.',
    icon: Database,
    link: '/services#crm-implementation'
  },
  {
    title: 'End-to-End Project Setup',
    description: 'Launch new real estate projects with complete operations, staffing, marketing, and tech.',
    icon: BarChart2,
    link: '/services#project-setup'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-2" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <NavLink to={service.link}>Learn More</NavLink>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <NavLink to="/services">View All Services</NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
