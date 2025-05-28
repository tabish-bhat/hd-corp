
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import SectionTitle from '@/components/ui/section-title';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  className?: string;
}

const Testimonial = ({ quote, author, position, company, className }: TestimonialProps) => (
  <Card className={cn("h-full flex flex-col", className)}>
    <CardContent className="pt-6 flex-1">
      <div className="mb-4 text-5xl text-primary">"</div>
      <p className="italic text-muted-foreground">{quote}</p>
    </CardContent>
    <CardFooter className="flex flex-col items-start pt-0">
      <p className="font-semibold">{author}</p>
      <p className="text-sm text-muted-foreground">{position}, {company}</p>
    </CardFooter>
  </Card>
);

const testimonials = [
  {
    quote: "HD Corp transformed our sales operations. They implemented KPIs that increased our conversion rates by 35% in just three months.",
    author: "Sarah Johnson",
    position: "VP of Sales",
    company: "Metropolitan Real Estate"
  },
  {
    quote: "Their CRM implementation saved us countless hours and dramatically improved our lead management. The ROI was evident within weeks.",
    author: "Michael Chen",
    position: "Director of Operations",
    company: "Horizon Properties"
  },
  {
    quote: "The financial forecasting tools they developed gave us unprecedented visibility into our cash flow, which was critical during our expansion.",
    author: "David Rodriguez",
    position: "CFO",
    company: "Landmark Development Group"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Success stories from real estate professionals"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
