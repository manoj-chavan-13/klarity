import React from "react";
import ServicePageLayout from "../../components/ServicePageLayout";

import { Users, Layout, PenTool, Layers, Box, Activity } from "lucide-react";

const UX_UI_DATA = {
  hero: {
    badge: "Award-Winning Design",
    titlePrefix: "User-Centric Design &",
    titleHighlight: "Digital Interfaces",
    subtitle:
      "We craft intuitive, engaging prototypes and interfaces that delight users and drive conversions.",
    cta: "Start Design Project",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
  },
  subServices: [
    {
      title: "User Research",
      description:
        "In-depth analysis of user behavior, personas, and journey mapping.",
      icon: Users,
      features: ["User Interviews", "Personas", "User Journeys"],
    },
    {
      title: "Wireframing",
      description:
        "Low-fidelity structural blueprints to define flow and layout.",
      icon: Layout,
      features: ["Sitemaps", "Information Arch", "Flowcharts"],
    },
    {
      title: "UI Design",
      description:
        "High-fidelity, pixel-perfect visual designs with modern aesthetics.",
      icon: PenTool,
      features: ["Visual Design", "Iconography", "Typography"],
    },
    {
      title: "Prototyping",
      description: "Interactive prototypes to test flows before development.",
      icon: Layers,
      features: ["Clickable Models", "Micro-interactions", "User Testing"],
    },
    {
      title: "Design Systems",
      description: "Scalable component libraries for consistent branding.",
      icon: Box,
      features: ["Style Guides", "Components", "Documentation"],
    },
    {
      title: "UX Audits",
      description:
        "Evaluation of existing products to identify usability issues.",
      icon: Activity,
      features: ["Heuristic Eval", "Accessibility", "Optimization"],
    },
  ],
  process: [
    {
      title: "1. Empathize",
      description: "Understanding user needs through research.",
    },
    {
      title: "2. Ideate",
      description: "Sketching and wireframing potential solutions.",
    },
    {
      title: "3. Prototype",
      description: "Creating high-fidelity interactives for testing.",
    },
  ],
  faqs: [
    {
      question: "Do you provide design-only services?",
      answer:
        "Yes, we can deliver design files (Figma/Sketch) ready for your dev team to implement.",
    },
    {
      question: "What tools do you use?",
      answer:
        "We primarily use Figma for design and prototyping, along with Adobe Creative Suite.",
    },
  ],
};

export default function UXUIDesignPage() {
  return <ServicePageLayout data={UX_UI_DATA} />;
}
