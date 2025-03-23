import React from 'react';
import { cn } from '../lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const OurCraft = () => {
  const services = [
    {
      title: "Fullstack Software Development",
      description: "Modern, scalable applications brewed with precision. From sleek frontends to powerful backends, we design and develop custom software solutions that are elegant, maintainable, and built for real-world growth.",
      tools: ["React", "Next.js", "NestJS", "Node.js", "PostgreSQL", "MongoDB", "TypeScript"],
    },
    {
      title: "Cloud Architecture & DevOps",
      description: "Infrastructure that scales like clockwork. We architect robust, cloud-native systems that are reliable, secure, and fully automated. Whether you're migrating to the cloud, optimizing CI/CD pipelines, or building from scratch—we'll help you brew infrastructure that's resilient and future-proof.",
      tools: ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "CI/CD pipelines", "VPC design"],
    },
    {
      title: "AI Integrations & Automations",
      description: "Smart systems, beautifully integrated. Unlock the power of artificial intelligence and automation. From integrating LLMs and generative AI into your apps, to building intelligent workflows and data pipelines—we help you turn complexity into clarity.",
      tools: ["OpenAI APIs", "LangChain", "Python", "n8n", "FastAPI", "Retrieval-Augmented Generation", "Zapier"],
    }
  ];

  return (
    <section id="services" className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-dark">
            Our Craft
          </h2>
          <p className="text-xl md:text-2xl text-coffee-dark/80 font-light mb-4">
            Expertly brewed. Boldly delivered.
          </p>
          <p className="max-w-3xl mx-auto text-coffee-dark/70">
            At A Cloud Brew Studios, we blend cutting-edge technology, thoughtful design, and deep expertise to deliver software that scales and inspires.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={cn(
                "border-0 shadow-md hover:shadow-lg transition-shadow duration-300",
                "bg-gradient-to-b from-white to-coffee-cream/20",
                "overflow-hidden"
              )}
            >
              <div className="h-2 bg-gradient-to-r from-coffee-medium to-coffee-accent"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-coffee-dark">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm text-coffee-dark/60">
                  {/* Empty description to create space */}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-coffee-dark/80 mb-6">
                  {service.description}
                </p>
                <div>
                  <p className="text-sm font-medium text-coffee-dark mb-2">
                    Key Technologies:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tools.map((tool, idx) => (
                      <Badge 
                        key={idx} 
                        className="bg-coffee-dark/10 text-coffee-dark hover:bg-coffee-dark/20 px-2 py-1 rounded-sm font-normal"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCraft; 