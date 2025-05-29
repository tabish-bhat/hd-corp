import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/section-title';
import ContactForm from '@/components/contact/ContactForm';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Ready to optimize your real estate operations? Get in touch with our team of experts today.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Get in Touch" 
                subtitle="We're here to help with your operational needs"
              />
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Our Office</h3>
                    <p className="text-muted-foreground">
                      Ground Floor Riverwalk Apartments,<br />
                      River Garden Society, Islamabad
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground">sales@hdcorp.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-muted-foreground">(+92) 332-0432677</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span>10:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <SectionTitle 
                title="Send Us a Message" 
                subtitle="Fill out the form and we'll be in touch shortly"
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
