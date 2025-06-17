import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/section-title';
import ContactForm from '@/components/contact/ContactForm';

// Import images
import contactHero from '@/assets/gallary/28.jpg';
import officeImage from '@/assets/gallary/27.jpg';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src={contactHero} 
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
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
              
              <div className="relative rounded-lg overflow-hidden mb-8 group">
                <img 
                  src={officeImage} 
                  alt="Our Office" 
                  className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm border group hover:shadow-md transition-all duration-300">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Our Office</h3>
                    <p className="text-muted-foreground">
                      Plot No. 3/4, Street No. 30, Ground Floor,<br />
                      River walk, River Garden, Islamabad
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm border group hover:shadow-md transition-all duration-300">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground">sales@hdcorp.com</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm border group hover:shadow-md transition-all duration-300">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-muted-foreground">(+92) 332-0432677</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border">
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
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
