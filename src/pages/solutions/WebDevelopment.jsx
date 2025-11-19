import React from "react";
import ServicePageLayout from "../../components/ServicePageLayout";

import { Monitor, Server, Smartphone, Box, Cloud, Layout } from "lucide-react";

const WEB_DEV_DATA = {
  hero: {
    badge: "Top 1% Web Engineers",
    titlePrefix: "Responsive Websites &",
    titleHighlight: "Complex Web Apps",
    subtitle:
      "We build responsive, high-performance web applications tailored to your business needs. From PWAs to Enterprise SaaS.",
    cta: "Start Web Project",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  subServices: [
    {
      title: "Frontend Development",
      description:
        "Pixel-perfect, responsive interfaces using React, Vue, and Angular.",
      icon: Monitor,
      features: ["React/Next.js", "Responsive UI", "Animation"],
    },
    {
      title: "Backend Systems",
      description:
        "Robust, scalable server-side architectures using Node, Python, or Go.",
      icon: Server,
      features: ["Microservices", "API Design", "Database Arch"],
    },
    {
      title: "PWA Development",
      description:
        "Progressive Web Apps that offer native-like experiences on the web.",
      icon: Smartphone,
      features: ["Offline Mode", "Push Notifs", "Fast Load"],
    },
    {
      title: "E-Commerce",
      description: "Custom shopping experiences with secure payment gateways.",
      icon: Box,
      features: ["Stripe/PayPal", "Inventory Mgmt", "Analytics"],
    },
    {
      title: "SaaS Platforms",
      description:
        "Multi-tenant architectures designed for scalability and subscription models.",
      icon: Cloud,
      features: ["Multi-tenancy", "Subscription", "Admin Panels"],
    },
    {
      title: "CMS Solutions",
      description: "Tailored content management systems for easy updates.",
      icon: Layout,
      features: ["Headless CMS", "WordPress", "Strapi"],
    },
  ],
  process: [
    {
      title: "1. Discovery",
      description:
        "We analyze your business goals and define the technical roadmap.",
    },
    {
      title: "2. Development",
      description: "Agile sprints focused on delivering high-quality code.",
    },
    {
      title: "3. Deployment",
      description: "CI/CD pipelines ensure smooth, bug-free launches.",
    },
  ],
  faqs: [
    {
      question: "What web frameworks do you use?",
      answer:
        "We specialize in React, Next.js, Vue, and Angular for frontend, and Node.js, Python, or Go for backend.",
    },
    {
      question: "Are your websites SEO friendly?",
      answer:
        "Yes, we prioritize semantic HTML, fast load times (Core Web Vitals), and SSR/SSG for optimal SEO.",
    },
  ],
};

export default function WebDevelopmentPage() {
  return <ServicePageLayout data={WEB_DEV_DATA} />;
}
