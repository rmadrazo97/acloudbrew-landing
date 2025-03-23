import React from 'react';
import './OurCraft.css';

const OurCraft = () => {
  return (
    <div className="our-craft">
      <h2>⚗️ Our Craft</h2>
      <p>Expertly brewed. Boldly delivered.</p>
      <p>At A Cloud Brew Studios, we blend cutting-edge technology, thoughtful design, and deep expertise to deliver software that scales and inspires. Here's what we specialize in:</p>
      <hr />
      <section>
        <h3>☕ Fullstack Software Development</h3>
        <p>Modern, scalable applications brewed with precision. From sleek frontends to powerful backends, we design and develop custom software solutions that are elegant, maintainable, and built for real-world growth. Whether it's a web platform, mobile app, or internal tool, we build with intention.</p>
        <p><strong>Key Ingredients:</strong> React, Next.js, NestJS, Node.js, PostgreSQL, MongoDB, TypeScript</p>
      </section>
      <hr />
      <section>
        <h3>☁️ Cloud Architecture & DevOps Consulting</h3>
        <p>Infrastructure that scales like clockwork. We architect robust, cloud-native systems that are reliable, secure, and fully automated. Whether you're migrating to the cloud, optimizing CI/CD pipelines, or building from scratch—we'll help you brew infrastructure that's resilient and future-proof.</p>
        <p><strong>Key Ingredients:</strong> AWS, Terraform, Docker, Kubernetes, GitHub Actions, CI/CD pipelines, VPC design</p>
      </section>
      <hr />
      <section>
        <h3>🤖 AI Integrations & Automations</h3>
        <p>Smart systems, beautifully integrated. Unlock the power of artificial intelligence and automation. From integrating LLMs and generative AI into your apps, to building intelligent workflows and data pipelines—we help you turn complexity into clarity.</p>
        <p><strong>Key Ingredients:</strong> OpenAI APIs, LangChain, Python, n8n, FastAPI, Retrieval-Augmented Generation (RAG), Zapier</p>
      </section>
    </div>
  );
};

export default OurCraft; 