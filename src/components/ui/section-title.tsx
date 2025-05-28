
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false,
  className
}: SectionTitleProps) => {
  return (
    <div className={cn(
      'mb-12 space-y-2',
      centered && 'text-center',
      className
    )}>
      <h2 className="font-bold">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
