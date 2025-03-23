import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent } from './ui/sheet';
import { cn } from '../lib/utils';

const TopMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-200 px-4 md:px-6 lg:px-8 flex items-center justify-between",
        isScrolled 
          ? "h-16 bg-coffee-cream/95 backdrop-blur-sm border-b border-coffee-light shadow-sm" 
          : "h-20 bg-transparent"
      )}
    >
      {/* Logo */}
      <a href="#" className="font-bold text-xl md:text-2xl transition-colors flex items-center">
        <Coffee className="h-6 w-6 mr-2 text-coffee-dark" />
        <span className="text-coffee-dark">A</span>
        <span className="text-coffee-dark">CloudBrew</span>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="px-4 py-2 text-sm font-medium text-coffee-dark hover:text-coffee-espresso transition-colors rounded-md hover:bg-coffee-light/50"
          >
            {item.name}
          </a>
        ))}
        <Button 
          className="ml-4 bg-coffee-dark hover:bg-coffee-espresso text-coffee-cream" 
          size="sm"
        >
          Get Started
        </Button>
      </nav>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-coffee-dark hover:bg-coffee-light/50"
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Open mobile menu"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile Navigation */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        {({ isOpen, setIsOpen }) => (
          <SheetContent 
            side="right" 
            className="p-0 bg-coffee-cream border-coffee-light" 
            data-state={isOpen ? "open" : "closed"}
            onClose={() => setIsOpen(false)}
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between mb-8">
                <a href="#" className="font-bold text-xl flex items-center">
                  <Coffee className="h-5 w-5 mr-2 text-coffee-dark" />
                  <span className="text-coffee-dark">ACloudBrew</span>
                </a>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-coffee-dark hover:bg-coffee-light/50"
                  aria-label="Close mobile menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <nav className="flex flex-col gap-4 flex-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-4 py-3 text-base font-medium text-coffee-dark hover:bg-coffee-light/50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
              
              <div className="pt-6 border-t border-coffee-light">
                <Button 
                  className="w-full bg-coffee-dark hover:bg-coffee-espresso text-coffee-cream"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </SheetContent>
        )}
      </Sheet>
    </header>
  );
};

export default TopMenu; 