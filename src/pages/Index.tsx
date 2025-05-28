
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';
import ClientsSection from '@/components/home/ClientsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <TestimonialsSection />
      <ClientsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
