import React from "react";
import ServicePageLayout from "../../components/ServicePageLayout";

import {
  Settings,
  Zap,
  RefreshCw,
  Server,
  Activity,
  Cloud,
} from "lucide-react";

const CUSTOM_SOFT_DATA = {
  hero: {
    badge: "Enterprise Engineering",
    titlePrefix: "Bespoke Software &",
    titleHighlight: "Workflow Solutions",
    subtitle:
      "Tailor-made software specifically engineered to optimize your unique business processes and workflows.",
    cta: "Build Custom Solution",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  },
  subServices: [
    {
      title: "Enterprise Software",
      description: "Large-scale applications for internal business management.",
      icon: Settings,
      features: ["ERP Systems", "CRM", "HRM"],
    },
    {
      title: "Workflow Automation",
      description:
        "Tools to automate repetitive tasks and increase efficiency.",
      icon: Zap,
      features: ["Process Mining", "Bots", "Integration"],
    },
    {
      title: "Legacy Modernization",
      description: "Upgrading outdated systems to modern cloud architectures.",
      icon: RefreshCw,
      features: ["Cloud Migration", "Refactoring", "Security"],
    },
    {
      title: "API Development",
      description: "Robust APIs to connect disparate systems and data.",
      icon: Server,
      features: ["REST/GraphQL", "Documentation", "Security"],
    },
    {
      title: "Data Analytics",
      description: "Dashboards and tools to visualize business intelligence.",
      icon: Activity,
      features: ["BI Tools", "Reporting", "Visualisation"],
    },
    {
      title: "Cloud Solutions",
      description: "Native cloud applications leveraging AWS, Azure, or GCP.",
      icon: Cloud,
      features: ["Serverless", "Containers", "Scaling"],
    },
  ],
  process: [
    {
      title: "1. Analysis",
      description: "Mapping your current workflows and pain points.",
    },
    {
      title: "2. Architecture",
      description: "Designing a custom solution that fits your stack.",
    },
    {
      title: "3. Development",
      description: "Building the solution with regular feedback loops.",
    },
  ],
  faqs: [
    {
      question: "Do I own the code?",
      answer:
        "Yes, you own 100% of the intellectual property and source code upon completion.",
    },
    {
      question: "Can you integrate with our existing tools?",
      answer:
        "Absolutely. We specialize in API integrations with tools like Salesforce, HubSpot, SAP, etc.",
    },
  ],
};

export default function CustomSoftwarePage() {
  return <ServicePageLayout data={CUSTOM_SOFT_DATA} />;
}
