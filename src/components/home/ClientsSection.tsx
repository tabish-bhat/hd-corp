
import React from 'react';
import SectionTitle from '@/components/ui/section-title';

const clients = [
  { name: 'City Real Estate Group' },
  { name: 'Horizon Properties' },
  { name: 'Metropolitan Homes' },
  { name: 'Blue Sky Developers' },
  { name: 'Landmark Investments' },
  { name: 'Urban Housing Solutions' }
];

const ClientsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background border-t">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Trusted By Leading Real Estate Companies"
          centered
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-secondary/50 h-20 w-full flex items-center justify-center rounded-md px-6 border">
                <span className="text-primary font-semibold text-center">{client.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
