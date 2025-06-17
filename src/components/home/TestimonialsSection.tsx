import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import SectionTitle from '@/components/ui/section-title';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

// Import testimonial images
import testimonial1 from '@/assets/gallary/11.jpg';
import testimonial2 from '@/assets/gallary/12.jpg';
import testimonial3 from '@/assets/gallary/13.jpg';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
  className?: string;
}

const Testimonial = ({ quote, author, position, company, image, className }: TestimonialProps) => (
  <Card className={cn("h-full flex flex-col group hover:shadow-xl transition-all duration-300", className)}>
    <div className="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={author}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
    </div>
    <CardContent className="pt-6 flex-1">
      <Quote className="h-8 w-8 text-primary mb-4" />
      <p className="italic text-muted-foreground text-lg leading-relaxed">{quote}</p>
    </CardContent>
    <CardFooter className="flex flex-col items-start pt-0">
      <p className="font-semibold text-lg">{author}</p>
      <p className="text-sm text-muted-foreground">{position}, {company}</p>
    </CardFooter>
  </Card>
);

const testimonials = [
  {
    quote: "HD Corp transformed our sales operations. They implemented KPIs that increased our conversion rates by 35% in just three months.",
    author: "Sarah Johnson",
    position: "VP of Sales",
    company: "Metropolitan Real Estate",
    image: testimonial1
  },
  {
    quote: "Their CRM implementation saved us countless hours and dramatically improved our lead management. The ROI was evident within weeks.",
    author: "Michael Chen",
    position: "Director of Operations",
    company: "Horizon Properties",
    image: testimonial2
  },
  {
    quote: "The financial forecasting tools they developed gave us unprecedented visibility into our cash flow, which was critical during our expansion.",
    author: "David Rodriguez",
    position: "CFO",
    company: "Landmark Development Group",
    image: testimonial3
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Success stories from real estate professionals"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
