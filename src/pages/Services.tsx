import React from 'react';
import { Users, Briefcase, CreditCard, Globe, Database, BarChart2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/section-title';
import ServiceCard from '@/components/services/ServiceCard';

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
    icon: Users
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
    icon: Briefcase
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
    icon: CreditCard
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
    icon: Globe
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
    icon: Database
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
    icon: BarChart2
  }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Approach" 
            subtitle="How we work with clients to deliver results"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Assessment</h3>
              <p className="text-muted-foreground">
                We analyze your current operations, identify pain points, and establish baseline metrics.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-muted-foreground">
                We develop a tailored plan based on your specific business goals and challenges.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-muted-foreground">
                Our team works with yours to implement solutions with minimal disruption.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Optimization</h3>
              <p className="text-muted-foreground">
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
