import React from 'react';
import { cn } from '../lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const HowWeWork = () => {
  const process = [
    {
      title: "Discovery & Kickoff",
      description: "We start with a deep dive into your goals, challenges, and vision. Whether it's a full build or a focused consulting project, we'll align on scope, stack, and priorities."
    },
    {
      title: "Roadmapping & Setup",
      description: "We design a roadmap tailored to your timeline and needs. We set up infrastructure, repos, pipelines, and anything else needed to kickstart development right."
    },
    {
      title: "Iterative Development",
      description: "We ship in sprints, communicate openly, and constantly refine. You'll get demos, deliverables, and full visibility—no black boxes, ever."
    },
    {
      title: "Launch & Scale",
      description: "Once everything's ready, we deploy with confidence and support your growth. Need to optimize, scale, or add features? We're already one step ahead."
    }
  ];

  const techStacks = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "Tailwind CSS", "Expo", "React Native"]
    },
    {
      category: "Backend & APIs",
      technologies: ["Node.js", "NestJS", "Express", "Python", "FastAPI"]
    },
    {
      category: "Cloud & DevOps",
      technologies: ["AWS", "Docker", "Terraform", "Kubernetes", "VPC Design", "GitHub Actions"]
    },
    {
      category: "Databases",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "S3", "DynamoDB"]
    },
    {
      category: "AI & Automation",
      technologies: ["OpenAI", "LangChain", "RAG pipelines", "n8n", "Zapier", "Vector DBs"]
    },
    {
      category: "Monitoring & Tools",
      technologies: ["Grafana", "Prometheus", "Sentry", "Datadog", "Slack Integrations"]
    }
  ];

  return (
    <section id="process" className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-coffee-cream/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-dark">
            Our Brewing Process
          </h2>
          <p className="text-xl md:text-2xl text-coffee-dark/80 font-light mb-4">
            Methodical. Transparent. Effective.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-16 relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-coffee-medium/20 transform md:translate-x-[-0.5px] hidden md:block"></div>
          
          {process.map((step, index) => (
            <div key={index} className="mb-8 md:mb-0">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className={cn(
                  "md:w-1/2 relative",
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:order-2"
                )}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute w-4 h-4 rounded-full bg-coffee-accent z-10 top-7"
                    style={{
                      left: index % 2 === 0 ? 'auto' : '-8px',
                      right: index % 2 === 0 ? '-8px' : 'auto',
                    }}
                  ></div>
                  
                  <Card className="border-0 shadow-md transition-shadow duration-300 bg-white hover:shadow-lg overflow-hidden">
                    <div className="h-1 bg-gradient-to-r from-coffee-medium to-coffee-accent"></div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-coffee-dark/10 text-coffee-dark flex items-center justify-center font-bold mr-3">
                          {index + 1}
                        </div>
                        <CardTitle className="text-xl font-semibold text-coffee-dark">
                          {step.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-coffee-dark/80">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={cn(
                  "hidden md:block md:w-1/2",
                  index % 2 === 0 ? "md:pl-12 md:order-2" : "md:pr-12"
                )}>
                  {/* Empty space for timeline layout */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-coffee-dark">
              The Stack We Brew With
            </h3>
            <p className="max-w-3xl mx-auto text-coffee-dark/70">
              We use modern, battle-tested technologies—handpicked for speed, flexibility, and future-proofing. Here's a taste of our usual brew:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStacks.map((stack, index) => (
              <Card 
                key={index}
                className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 overflow-hidden"
              >
                <div className="h-1 bg-gradient-to-r from-coffee-medium to-coffee-accent"></div>
                <CardHeader className="pb-0">
                  <CardTitle className="text-lg font-medium text-coffee-dark">
                    {stack.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {stack.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        className="bg-coffee-dark/5 text-coffee-dark hover:bg-coffee-dark/10 px-2 py-1 rounded-sm font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork; 