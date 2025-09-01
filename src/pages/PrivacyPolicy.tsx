import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Effective Date: September 1, 2025
            </p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              {/* Introduction */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  HD Corp ("we," "our," "us") respects your privacy and is committed to protecting 
                  your personal information. This Privacy Policy explains how we collect, use, 
                  and safeguard your information when you interact with us, including through our 
                  website at{' '}
                  <a 
                    href="https://www.thehdcorp.com/" 
                    className="text-primary hover:text-primary/80 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.thehdcorp.com/
                  </a>
                </p>
              </section>

              <Separator className="my-8" />

              {/* Information We Collect */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect personal information including your name, email address, phone 
                  number, and other details you provide when filling out our lead forms or 
                  contacting us directly.
                </p>
              </section>

              <Separator className="my-8" />

              {/* How We Use Your Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Your information is used to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Contact you regarding your inquiry or request</li>
                  <li>Provide details about our products or services</li>
                  <li>Send additional information upon your request after initial contact</li>
                </ul>
              </section>

              <Separator className="my-8" />

              {/* Sharing of Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">4. Sharing of Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, rent, or share your personal information with any third parties. 
                  All data is stored and used internally by HD Corp for the purposes stated above.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Data Retention */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">5. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the 
                  purposes outlined in this Privacy Policy or as required by law.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Compliance & Consent */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">6. Compliance & Consent</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By submitting your information through our forms, you consent to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                  <li>The collection and processing of your personal data for the purposes stated in this Privacy Policy</li>
                  <li>Receiving communications related to your inquiry or services you request</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  You may withdraw your consent at any time by contacting us at the email provided below.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Your Rights */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to request access, correction, or deletion of your personal 
                  information. To exercise these rights, please contact us using the information below.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Contact Us */}
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">8. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                
                <div className="bg-slate-50 p-6 rounded-lg space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a 
                      href="mailto:sales@thehdcorp.com" 
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      sales@thehdcorp.com
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a 
                      href="tel:+923390411222" 
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      +92 339 0411222
                    </a>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">
                      Islamabad, Pakistan
                    </span>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
