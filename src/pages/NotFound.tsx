
import React, { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="flex items-center">
            <NavLink to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </NavLink>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
