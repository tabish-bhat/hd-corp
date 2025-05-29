import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hdCorpLogo from '@/assets/images/hd-corp-logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={hdCorpLogo} 
                alt="HD Corp Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-primary-foreground/80">
              Your trusted partner for business excellence.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Sales Operations
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Human Resources
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Financial Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Digital Transformation
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  CRM Implementation
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                <span className="text-sm">Ground Floor Riverwalk Apartments,<br />River Garden Society, Islamabad</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent" />
                <span className="text-sm">(+92) 332-0432677</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent" />
                <span className="text-sm">sales@hdcorp.com</span>
              </li>
              <li className="mt-4">
                <Button asChild className="bg-accent hover:bg-accent/90 text-primary">
                  <NavLink to="/contact">
                    Book a Consultation
                  </NavLink>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} HD Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
