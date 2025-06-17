import React from 'react';
import { Users, Briefcase, CreditCard, Globe, Database, BarChart2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/section-title';
import ServiceCard from '@/components/services/ServiceCard';

// Import images
import servicesHero from '@/assets/gallary/21.jpg';
import process1 from '@/assets/gallary/22.jpg';
import process2 from '@/assets/gallary/23.jpg';
import process3 from '@/assets/gallary/24.jpg';
import process4 from '@/assets/gallary/25.jpg';

// Import service images
import salesOpsImage from '@/assets/gallary/29.jpg';
import hrImage from '@/assets/gallary/30.jpg';
import financialImage from '@/assets/gallary/31.jpg';
import digitalImage from '@/assets/gallary/32.jpg';
import crmImage from '@/assets/gallary/33.jpg';
import projectImage from '@/assets/gallary/34.jpg';

const services = [
  {
    id: 'sales-operations',
    title: 'Sales Operations',
    description: 'Optimize your real estate sales team for maximum performance and efficiency.',
    features: [
      'Sales team recruitment and onboarding',
      'Training programs and performance tracking',
      'Sales process design and optimization',
      'KPI setup and monitoring systems',
      'Compensation structure design'
    ],
    icon: Users,
    image: salesOpsImage
  },
  {
    id: 'human-resources',
    title: 'Human Resources',
    description: 'Build and manage effective teams across your real estate organization.',
    features: [
      'Talent acquisition for specialized roles',
      'Organizational structure design',
      'Compliance management and documentation',
      'Performance evaluation systems',
      'Employee retention strategies'
    ],
    icon: Briefcase,
    image: hrImage
  },
  {
    id: 'financial-services',
    title: 'Financial Services',
    description: 'Establish robust financial systems for real estate operations and investor reporting.',
    features: [
      'Budgeting and forecasting models',
      'Cash flow management systems',
      'Investor reporting templates and dashboards',
      'Financial analysis for project feasibility',
      'Revenue optimization strategies'
    ],
    icon: CreditCard,
    image: financialImage
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Modernize your digital presence and marketing systems.',
    features: [
      'Website development and optimization',
      'Digital marketing strategy and implementation',
      'SEO and content marketing for real estate',
      'Comprehensive branding solutions',
      'Lead generation systems'
    ],
    icon: Globe,
    image: digitalImage
  },
  {
    id: 'crm-implementation',
    title: 'CRM Implementation',
    description: 'Set up and optimize real estate-specific CRM systems for your business.',
    features: [
      'CRM selection and customization',
      'Data migration and system integration',
      'Staff training and adoption strategies',
      'Process automation and workflow design',
      'Reporting and analytics setup'
    ],
    icon: Database,
    image: crmImage
  },
  {
    id: 'project-setup',
    title: 'End-to-End Project Setup',
    description: 'Launch new real estate projects with comprehensive operational support.',
    features: [
      'Complete project team assembly and training',
      'Marketing and sales infrastructure setup',
      'Technology implementation and integration',
      'Process documentation and optimization',
      'Performance monitoring systems'
    ],
    icon: BarChart2,
    image: projectImage
  }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src={servicesHero} 
            alt="Our Services" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive operational solutions designed specifically for real estate companies.
              From sales team optimization to technology implementation, we have you covered.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Operational Excellence Solutions" 
            subtitle="Specialized services for real estate businesses"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <SectionTitle 
            title="Our Approach" 
            subtitle="How we work with clients to deliver results"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img 
                  src={process1} 
                  alt="Assessment" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2 text-center">Assessment</h3>
              <p className="text-muted-foreground text-center">
                We analyze your current operations, identify pain points, and establish baseline metrics.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img 
                  src={process2} 
                  alt="Strategy" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2 text-center">Strategy</h3>
              <p className="text-muted-foreground text-center">
                We develop a tailored plan based on your specific business goals and challenges.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img 
                  src={process3} 
                  alt="Implementation" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2 text-center">Implementation</h3>
              <p className="text-muted-foreground text-center">
                Our team works with yours to implement solutions with minimal disruption.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img 
                  src={process4} 
                  alt="Optimization" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2 text-center">Optimization</h3>
              <p className="text-muted-foreground text-center">
                We monitor results, make adjustments, and ensure sustainable long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
