import React from 'react';
import { cn } from '../lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Button } from './ui/button';

const WhyCloudBrew = () => {
  const benefits = [
    {
      title: "Global Talent, Local Excellence",
      description: "Our team spans Latin America and Europe, allowing us to deliver top-tier engineering talent at competitive rates. With overlapping time zones, English fluency, and cultural alignment, you get the communication and quality of an in-house team—without the overhead.",
      points: [
        "Faster turnaround times with distributed productivity",
        "Cost-effective rates without compromising quality",
        "Collaborative, real-time communication across time zones",
        "Fresh perspectives from a diverse global team"
      ]
    },
    {
      title: "Senior-Level Expertise, End-to-End",
      description: "Every project is led by seasoned engineers with fullstack and cloud architecture experience. You won't be handed off to junior developers—you'll work with people who understand product, scale, and long-term impact."
    },
    {
      title: "Built With Leading-Edge Tech",
      description: "We don't rely on yesterday's tools. From AI integrations to modern DevOps pipelines, we build with the latest and most effective technologies—tailored to your business goals."
    },
    {
      title: "A True Partnership Approach",
      description: "We don't just ship code. We dive deep into your vision, help shape your roadmap, and stay agile as your needs evolve. Think of us as your remote CTO, DevOps team, and product co-pilot—all in one."
    },
    {
      title: "Clean Code. Clean Conscience.",
      description: "Sustainable codebases, ethical AI use, and respectful collaboration are baked into our process. Because good tech starts with good values."
    }
  ];

  return (
    <section id="why-us" className="py-16 px-4 md:px-6 lg:px-8 bg-coffee-cream/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-dark">
            Why Cloud Brew?
          </h2>
          <p className="text-xl md:text-2xl text-coffee-dark/80 font-light mb-4">
            Not just developers — artisans of innovation.
          </p>
          <p className="max-w-3xl mx-auto text-coffee-dark/70">
            We're not a factory. We're a boutique software studio, blending modern technology with global talent to craft software that works—and lasts. Here's what makes A Cloud Brew Studios the right partner for your next project:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className={cn(
                "border border-coffee-light/30 shadow-sm hover:shadow-md transition-shadow duration-300",
                "bg-white/80 backdrop-blur-sm",
                "h-full flex flex-col"
              )}
            >
              <CardHeader className="pb-2 border-b border-coffee-light/20">
                <CardTitle className="text-lg font-medium text-coffee-dark">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="py-4 flex-grow">
                <p className="text-coffee-dark/80 text-sm">
                  {benefit.description}
                </p>
                
                {benefit.points && (
                  <ul className="mt-4 space-y-2">
                    {benefit.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-coffee-accent mt-1.5 mr-2"></span>
                        <span className="text-sm text-coffee-dark/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-coffee-dark/80 font-medium mb-6">
            The future of tech is handcrafted, distributed, and smart. That's what we brew.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className={cn(
                "bg-coffee-dark hover:bg-coffee-dark/90 text-coffee-cream",
                "shadow-sm rounded-md px-6 py-2 font-medium transition-colors"
              )}
            >
              Meet the Team
            </Button>
            <Button 
              className={cn(
                "bg-coffee-accent hover:bg-coffee-accent/90 text-coffee-dark",
                "shadow-sm rounded-md px-6 py-2 font-medium transition-colors"
              )}
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCloudBrew; 