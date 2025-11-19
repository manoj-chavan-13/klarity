import React from "react";

import {
  Monitor,
  Server,
  Smartphone,
  Database,
  Cloud,
  Cpu,
} from "lucide-react";
import ServicePageLayout from "../../components/ServicePageLayout";

const TECH_CHOICE_DATA = {
  hero: {
    badge: "Stack Agnostic",
    titlePrefix: "We Work With",
    titleHighlight: "YOUR Tech Stack",
    subtitle:
      "We don't force technologies. We have experts in React, Node, Python, Java, .NET and more to fit your ecosystem.",
    cta: "Consult an Expert",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  subServices: [
    {
      title: "Frontend",
      description: "React, Vue, Angular, Svelte, Next.js.",
      icon: Monitor,
      features: ["SPA", "SSR", "Micro-frontends"],
    },
    {
      title: "Backend",
      description: "Node.js, Python (Django/Flask), Java, Go, .NET.",
      icon: Server,
      features: ["Microservices", "Serverless", "Monolith"],
    },
    {
      title: "Mobile",
      description: "React Native, Flutter, Swift (iOS), Kotlin (Android).",
      icon: Smartphone,
      features: ["Cross-platform", "Native", "Hybrid"],
    },
    {
      title: "Database",
      description: "PostgreSQL, MongoDB, MySQL, Redis, DynamoDB.",
      icon: Database,
      features: ["SQL", "NoSQL", "Caching"],
    },
    {
      title: "Cloud & DevOps",
      description: "AWS, Azure, Google Cloud, Docker, Kubernetes.",
      icon: Cloud,
      features: ["CI/CD", "IaC", "Scaling"],
    },
    {
      title: "AI & ML",
      description: "TensorFlow, PyTorch, OpenAI API integration.",
      icon: Cpu,
      features: ["Models", "NLP", "Computer Vision"],
    },
  ],
  process: [
    {
      title: "1. Assess",
      description: "Reviewing your current or desired technology stack.",
    },
    {
      title: "2. Match",
      description: "Assigning developers with specific stack expertise.",
    },
    {
      title: "3. Integrate",
      description: "Seamlessly blending into your technical environment.",
    },
  ],
  faqs: [
    {
      question: "Can you migrate us to a new stack?",
      answer:
        "Yes, we specialize in modernization and migration (e.g., monolith to microservices).",
    },
    {
      question: "Do you have certified developers?",
      answer:
        "Yes, many of our engineers hold AWS, Azure, and other specialized certifications.",
    },
  ],
};

export default function TechnologyChoicePage() {
  return <ServicePageLayout data={TECH_CHOICE_DATA} />;
}
