import React from 'react';
import { cn } from '../lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const AboutUs = () => {
  const beliefs = [
    "Innovation should be accessible.",
    "Automation should be human-centered.",
    "Tech should feel like magic—but work like clockwork.",
    "You deserve a dev team that cares as much as you do."
  ];

  const teamValues = [
    {
      title: "Small Studio, Big Impact",
      description: "We're proudly independent, boutique, and intentionally small. That means we focus deeply on a few projects at a time, bringing senior-level attention and strategic insight to every sprint, every architecture decision, every pull request. No burnt coffee. No burnt-out developers. Just intentional, high-quality builds."
    },
    {
      title: "Globally Brewed",
      description: "Our team spans Latin America and Europe, operating across time zones to deliver faster and work smarter. This global blend brings you the best of both worlds: the agility of a startup, the expertise of a seasoned dev team, and the warmth of people who really give a damn."
    }
  ];

  return (
    <section id="about" className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-coffee-dark to-coffee-espresso text-coffee-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-cream">
            About Us
          </h2>
          <p className="text-xl md:text-2xl text-coffee-cream/80 font-light mb-6">
            Fuelled by caffeine. Driven by code.
          </p>
          <p className="max-w-3xl mx-auto text-coffee-cream/70 mb-8">
            At A Cloud Brew Studios, we believe great software is like a great cup of coffee: crafted with care, steeped in depth, and designed to energize.
          </p>
          <p className="max-w-3xl mx-auto text-coffee-cream/70 mb-10">
            We're a collective of engineers, architects, and dreamers who came together to create something better than the average dev shop. We wanted to brew meaningful software—not just pour out lines of code. So we started this studio with one mission:
          </p>
          <blockquote className="max-w-2xl mx-auto px-8 py-4 my-8 border-l-4 border-coffee-accent bg-coffee-espresso/50 text-xl italic text-coffee-cream/90">
            To blend tech excellence with warmth, clarity, and purpose.
          </blockquote>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {teamValues.map((value, index) => (
            <Card 
              key={index}
              className={cn(
                "border-0 shadow-md hover:shadow-lg transition-shadow duration-300",
                "bg-coffee-espresso/40 text-coffee-cream",
                "overflow-hidden"
              )}
            >
              <div className="h-1 bg-gradient-to-r from-coffee-accent to-coffee-cream/50"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-coffee-cream">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-coffee-cream/80">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <Card 
            className={cn(
              "border-0 shadow-md transition-shadow duration-300",
              "bg-coffee-espresso/40 text-coffee-cream",
              "overflow-hidden"
            )}
          >
            <div className="h-1 bg-gradient-to-r from-coffee-accent to-coffee-cream/50"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-semibold text-coffee-cream">
                What We Believe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                {beliefs.map((belief, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-coffee-accent mt-1.5 mr-2"></span>
                    <span className="text-coffee-cream/80">{belief}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-coffee-cream/80 mb-6 max-w-3xl mx-auto">
            Whether you're building your first MVP, scaling your cloud architecture, or integrating AI into your workflows—we're here to make it smooth, efficient, and maybe even a little fun.
          </p>
          <p className="text-coffee-cream/90 font-medium text-lg mb-8">
            Brewed with passion. Served with purpose. That's A Cloud Brew Studios.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className={cn(
                "bg-coffee-accent hover:bg-coffee-accent/90 text-coffee-espresso",
                "shadow-sm rounded-md px-6 py-2 font-medium transition-colors",
                "border border-transparent hover:border-coffee-cream/10"
              )}
            >
              Work With Us
            </Button>
            <Button 
              variant="outline" 
              className={cn(
                "bg-transparent border-coffee-cream/30 text-coffee-cream",
                "hover:bg-coffee-accent/10 hover:border-coffee-cream/40",
                "shadow-sm rounded-md px-6 py-2 font-medium transition-colors"
              )}
            >
              Follow Our Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 