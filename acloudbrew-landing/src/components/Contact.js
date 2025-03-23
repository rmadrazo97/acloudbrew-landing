import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Calendar, MessageSquare, FileText, Mail, Phone, Building } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-coffee-cream/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-dark">
            Let's Brew Something Brilliant Together
          </h2>
          <p className="text-xl md:text-xl text-coffee-dark/80 font-light max-w-3xl mx-auto">
            Whether you're launching a product, scaling infrastructure, or exploring AI-powered solutions, 
            we're here to bring your ideas to life—with clarity, craftsmanship, and care.
          </p>
          <p className="text-lg md:text-lg text-coffee-dark/70 mt-3 font-medium max-w-3xl mx-auto">
            Reach out. Let's build the future, one brew at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Company Information Card */}
          <Card className="border-0 shadow-md bg-white overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-coffee-medium to-coffee-accent"></div>
            <CardHeader>
              <div className="flex items-center mb-2">
                <Building className="h-5 w-5 text-coffee-accent mr-2" />
                <CardTitle className="text-xl text-coffee-dark">Organization</CardTitle>
              </div>
              <CardDescription className="text-coffee-dark/70">
                Our company details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-coffee-dark mb-1">A Cloud Brew Studios</h4>
                <p className="text-coffee-dark/70 text-sm">
                  <span className="font-medium">Legal Entity Name:</span> ACLOUDBREW STUDIOS LLC
                </p>
                <p className="text-coffee-dark/70 text-sm">
                  <span className="font-medium">Business Name in New Mexico:</span> No — we operate under our registered LLC name.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Location Card */}
          <Card className="border-0 shadow-md bg-white overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-coffee-medium to-coffee-accent"></div>
            <CardHeader>
              <div className="flex items-center mb-2">
                <Building className="h-5 w-5 text-coffee-accent mr-2" />
                <CardTitle className="text-xl text-coffee-dark">Principal Place of Business</CardTitle>
              </div>
              <CardDescription className="text-coffee-dark/70">
                Our headquarters location
              </CardDescription>
            </CardHeader>
            <CardContent>
              <address className="not-italic text-coffee-dark/80 leading-relaxed">
                1209 Mountain Road Pl NE<br />
                Ste N<br />
                Albuquerque, NM 87110<br />
                United States
              </address>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <Card className="border-0 shadow-md bg-white overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-coffee-medium to-coffee-accent"></div>
            <CardHeader>
              <div className="flex items-center mb-2">
                <Mail className="h-5 w-5 text-coffee-accent mr-2" />
                <CardTitle className="text-xl text-coffee-dark">Contact Us</CardTitle>
              </div>
              <CardDescription className="text-coffee-dark/70">
                Get in touch with our team
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-coffee-dark/5 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-coffee-accent" />
                </div>
                <div>
                  <p className="text-sm text-coffee-dark/60">Email</p>
                  <a href="mailto:acloudbrew@proton.me" className="text-coffee-dark hover:text-coffee-accent transition-colors">
                    acloudbrew@proton.me
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-coffee-dark/5 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-coffee-accent" />
                </div>
                <div>
                  <p className="text-sm text-coffee-dark/60">Phone</p>
                  <a href="tel:+17073691900" className="text-coffee-dark hover:text-coffee-accent transition-colors">
                    +1 (707) 369-1900
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-coffee-dark">
            Ready to get started?
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button className="bg-coffee-dark hover:bg-coffee-dark/90 text-white px-6 py-6 h-auto">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Discovery Call
            </Button>
            <Button className="bg-coffee-accent hover:bg-coffee-accent/90 text-white px-6 py-6 h-auto">
              <FileText className="mr-2 h-5 w-5" />
              Request a Custom Proposal
            </Button>
            <Button className="bg-coffee-medium hover:bg-coffee-medium/90 text-white px-6 py-6 h-auto">
              <MessageSquare className="mr-2 h-5 w-5" />
              Send Us a Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 