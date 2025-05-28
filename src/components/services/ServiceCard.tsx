
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

const ServiceCard = ({ id, title, description, features, icon: Icon }: ServiceCardProps) => {
  return (
    <Card id={id} className="scroll-mt-24">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Icon className="h-10 w-10 text-primary" />
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 list-disc list-inside ml-4">
          {features.map((feature, index) => (
            <li key={index} className="text-muted-foreground">{feature}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <NavLink to="/contact" className="flex items-center justify-center">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </NavLink>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
