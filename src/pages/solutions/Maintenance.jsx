import React from "react";
import ServicePageLayout from "../../components/ServicePageLayout";

import { Activity, Lock, Settings, Zap, Layers, Server } from "lucide-react";

const MAINTENANCE_DATA = {
  hero: {
    badge: "24/7 Reliability",
    titlePrefix: "Monitoring, Updates &",
    titleHighlight: "Long-term Care",
    subtitle:
      "We ensure your software remains secure, up-to-date, and performant with round-the-clock monitoring and support.",
    cta: "Get Support Plan",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  subServices: [
    {
      title: "24/7 Monitoring",
      description: "Real-time tracking of uptime, errors, and performance.",
      icon: Activity,
      features: ["Uptime Checks", "Error Logging", "Alerts"],
    },
    {
      title: "Security Updates",
      description: "Regular patching of vulnerabilities and dependencies.",
      icon: Lock,
      features: ["Patch Mgmt", "Audits", "Compliance"],
    },
    {
      title: "Bug Fixes",
      description: "Rapid resolution of any issues that arise in production.",
      icon: Settings,
      features: ["SLA Response", "Hotfixes", "Tracking"],
    },
    {
      title: "Performance Tuning",
      description: "Optimizing databases and code for speed.",
      icon: Zap,
      features: ["DB Indexing", "Caching", "Load Balancing"],
    },
    {
      title: "Feature Updates",
      description: "Ongoing development of new features as you grow.",
      icon: Layers,
      features: ["Agile", "CI/CD", "Versioning"],
    },
    {
      title: "Server Management",
      description: "Handling infrastructure, backups, and scaling.",
      icon: Server,
      features: ["AWS/Azure", "Backups", "Disaster Recovery"],
    },
  ],
  process: [
    {
      title: "1. Audit",
      description: "We review your current system health and security.",
    },
    {
      title: "2. Onboarding",
      description: "Setting up monitoring tools and access.",
    },
    {
      title: "3. Support",
      description: "Continuous monitoring and rapid incident response.",
    },
  ],
  faqs: [
    {
      question: "What are your SLA times?",
      answer:
        "We offer varied SLA tiers, with critical issue response times as low as 1 hour.",
    },
    {
      question: "Do you support code you didn't write?",
      answer:
        "Yes, we can audit and take over maintenance for existing codebases after a review.",
    },
  ],
};

export default function MaintenancePage() {
  return <ServicePageLayout data={MAINTENANCE_DATA} />;
}
