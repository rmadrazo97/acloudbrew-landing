import React from 'react';
import './HowWeWork.css';

const HowWeWork = () => {
  return (
    <div className="how-we-work">
      <h2>🛠️ Our Brewing Process</h2>
      <ol>
        <li><strong>Discovery & Kickoff</strong><br />We start with a deep dive into your goals, challenges, and vision. Whether it's a full build or a focused consulting project, we'll align on scope, stack, and priorities.</li>
        <li><strong>Roadmapping & Setup</strong><br />We design a roadmap tailored to your timeline and needs. We set up infrastructure, repos, pipelines, and anything else needed to kickstart development right.</li>
        <li><strong>Iterative Development</strong><br />We ship in sprints, communicate openly, and constantly refine. You'll get demos, deliverables, and full visibility—no black boxes, ever.</li>
        <li><strong>Launch & Scale</strong><br />Once everything's ready, we deploy with confidence and support your growth. Need to optimize, scale, or add features? We're already one step ahead.</li>
      </ol>
      <hr />
      <h3>☕ The Stack We Brew With</h3>
      <p>We use modern, battle-tested technologies—handpicked for speed, flexibility, and future-proofing. Here's a taste of our usual brew:</p>
      <ul>
        <li><strong>Frontend:</strong> React, Next.js, Tailwind CSS, Expo / React Native</li>
        <li><strong>Backend & APIs:</strong> Node.js, NestJS, Express, Python, FastAPI</li>
        <li><strong>Cloud & DevOps:</strong> AWS, Docker, Terraform, Kubernetes, VPC Design, GitHub Actions</li>
        <li><strong>Databases:</strong> PostgreSQL, MongoDB, MySQL, S3, DynamoDB</li>
        <li><strong>AI & Automation:</strong> OpenAI, LangChain, RAG pipelines, n8n, Zapier, Vector DBs (Pinecone, FAISS)</li>
        <li><strong>Monitoring & Tools:</strong> Grafana, Prometheus, Sentry, Datadog, Slack Integrations</li>
      </ul>
    </div>
  );
};

export default HowWeWork; 