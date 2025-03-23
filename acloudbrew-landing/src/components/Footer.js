import React from 'react';
import { Coffee, Twitter, Github, Mail, Youtube, ExternalLink, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-coffee-dark text-coffee-cream pt-10 md:pt-16 pb-6 md:pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Top Section with Tagline - Responsive */}
        <div className="mb-8 md:mb-12 max-w-3xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
            Artisan cloud solutions brewed to perfection
          </h2>
          <p className="text-coffee-light/80 text-base md:text-lg">
            All-in-one cloud infrastructure platform for modern businesses
          </p>
          
          <div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-8">
            <Button className="bg-coffee-accent hover:bg-coffee-accent/90 text-coffee-espresso text-sm md:text-base py-1.5 h-auto">
              Start Brewing
            </Button>
            <Button variant="outline" className="border-coffee-light hover:bg-coffee-espresso/10 text-sm md:text-base py-1.5 h-auto">
              Book a Demo <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Accordion Style Footer */}
        <div className="md:hidden border-t border-coffee-medium/30 py-4">
          <MobileFooterSection 
            title="About Us" 
            initiallyOpen={true}
            content={
              <div className="space-y-4 pt-2">
                <div className="flex items-center">
                  <Coffee className="h-6 w-6 mr-2 text-coffee-accent" />
                  <span className="font-bold text-xl">ACloudBrew</span>
                </div>
                <p className="text-coffee-light/70 text-sm">
                  Your partner in cloud infrastructure. We help you build, deploy and scale your applications with ease.
                </p>
                <div className="flex space-x-4 pt-1">
                  <a href="#" className="text-coffee-light hover:text-coffee-accent transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="text-coffee-light hover:text-coffee-accent transition-colors">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a href="#" className="text-coffee-light hover:text-coffee-accent transition-colors">
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </a>
                </div>
              </div>
            } 
          />
          
          <MobileFooterSection 
            title="Solutions & Resources" 
            content={
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2">
                <a href="#" className="text-coffee-light/70 hover:text-coffee-accent transition-colors text-sm">
                  Managed Cloud
                </a>
                <a href="#" className="text-coffee-light/70 hover:text-coffee-accent transition-colors text-sm">
                  Documentation
                </a>
                <a href="#" className="text-coffee-light/70 hover:text-coffee-accent transition-colors text-sm">
                  DevOps Automation
                </a>
                <a href="#" className="text-coffee-light/70 hover:text-coffee-accent transition-colors text-sm">
                  Blog
                </a>
                <a href="#" className="text-coffee-light/70 hover:text-coffee-accent transition-colors text-sm">
                  Cloud Security
                </a>
                <a href="#" className="text-coffee-light/70 hover:text-coffee-accent transition-colors text-sm">
                  Tutorials
                </a>
              </div>
            } 
          />
          
          <MobileFooterSection 
            title="Contact" 
            content={
              <ul className="space-y-2 pt-2">
                <li className="flex items-start space-x-3 text-sm text-coffee-light/70">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>acloudbrew@proton.me</span>
                </li>
                <li className="text-sm text-coffee-light/70">
                  <p>ACLOUDBREW STUDIOS LLC</p>
                  <p className="mt-0.5">1209 MOUNTAIN ROAD PL NE,</p>
                  <p className="mt-0.5">STE N, ALBUQUERQUE, NM 87110</p>
                </li>
              </ul>
            } 
          />
        </div>
        
        {/* Desktop Footer Grid - Hidden on Mobile */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 py-8 border-t border-coffee-medium/30">
          {/* Column 1: Logo and Social */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Coffee className="h-8 w-8 mr-2 text-coffee-accent" />
              <span className="font-bold text-2xl">ACloudBrew</span>
            </div>
            
            <p className="text-coffee-light/70 text-sm max-w-xs">
              Your partner in cloud infrastructure. We help you build, deploy and scale your applications with ease.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-coffee-light hover:text-coffee-accent transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-coffee-light hover:text-coffee-accent transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-coffee-light hover:text-coffee-accent transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          {/* Column 2: Solutions */}
          <div>
            <h3 className="font-medium text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-coffee-light/70 hover:text-coffee-accent transition-colors text-sm">
                  Managed Cloud
                </a>
              </li>
              <li>
                <a href="#" className="text-coffee-light/70 hover:text-coffee-accent transition-colors text-sm">
                  DevOps Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-coffee-light/70 hover:text-coffee-accent transition-colors text-sm">
                  Serverless Architecture
                </a>
              </li>
              <li>
                <a href="#" className="text-coffee-light/70 hover:text-coffee-accent transition-colors text-sm">
                  Cloud Security
                </a>
              </li>
              <li>
                <a href="#" className="text-coffee-light/70 hover:text-coffee-accent transition-colors text-sm">
                  Disaster Recovery
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Resources */}
          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-coffee-light/70 hover:text-coffee-accent transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-coffee-light/70 hover:text-coffee-accent transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-coffee-light/70 hover:text-coffee-accent transition-colors text-sm">
                  Community Forum
                </a>
              </li>
              <li>
                <a href="#" className="text-coffee-light/70 hover:text-coffee-accent transition-colors text-sm">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-coffee-light/70 hover:text-coffee-accent transition-colors text-sm">
                  API Reference
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-coffee-light/70">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>acloudbrew@proton.me</span>
              </li>
              <li className="text-sm text-coffee-light/70">
                <p>ACLOUDBREW STUDIOS LLC</p>
                <p className="mt-1">1209 MOUNTAIN ROAD PL NE,</p>
                <p className="mt-1">STE N, ALBUQUERQUE, NM 87110</p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-4 mt-4 md:pt-8 md:mt-8 border-t border-coffee-medium/30 flex flex-col md:flex-row justify-between items-center text-coffee-light/60 text-xs md:text-sm">
          <div className="mb-3 md:mb-0">
            © {currentYear} ACloudBrew. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-1 md:gap-y-2">
            <a href="#" className="hover:text-coffee-accent transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-coffee-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-coffee-accent transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Mobile accordion section component for better space utilization
const MobileFooterSection = ({ title, content, initiallyOpen = false }) => {
  const [isOpen, setIsOpen] = React.useState(initiallyOpen);
  
  return (
    <div className="py-2 border-b border-coffee-medium/20">
      <button 
        className="flex w-full justify-between items-center py-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="font-medium text-base">{title}</h3>
        <ChevronDown 
          className={cn(
            "h-4 w-4 text-coffee-light/70 transition-transform duration-200",
            isOpen ? "transform rotate-180" : ""
          )} 
        />
      </button>
      
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        {content}
      </div>
    </div>
  );
};

export default Footer; 