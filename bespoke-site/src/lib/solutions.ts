import {
  Boxes,
  CloudCog,
  Headset,
  Network,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type SolutionCategory = {
  number: string;
  title: string;
  slug: string;
  description: string;
  services: string[];
  image: string;
  icon: LucideIcon;
  visual: string;
};

export const solutionCategories: SolutionCategory[] = [
  {
    number: "01",
    title: "Data Center & Infrastructure",
    slug: "infrastructure",
    description: "Design, supply, deployment and support of reliable enterprise data center infrastructure.",
    services: [
      "Data Center Design and Implementation",
      "Enterprise Server Infrastructure",
      "Enterprise Storage Systems",
      "Hyper-Converged Infrastructure (HCI)",
      "Backup and Disaster Recovery Infrastructure",
      "Data Center Power, Rack and Cooling Solutions",
    ],
    image: "Data Center & Infrastructure.png",
    icon: Boxes,
    visual: "infrastructure",
  },
  {
    number: "02",
    title: "Cloud, Compute & Storage",
    slug: "cloud",
    description: "Modernize IT environments through scalable computing, storage and cloud technologies.",
    services: [
      "Private, Public and Hybrid Cloud",
      "Server and Desktop Virtualization",
      "Enterprise Storage Solutions",
      "Cloud Migration and Integration",
      "Backup and Disaster Recovery",
      "Cloud Management and Automation",
    ],
    image: "CloudComputing.png",
    icon: CloudCog,
    visual: "cloud",
  },
  {
    number: "03",
    title: "Enterprise Networking & Connectivity",
    slug: "networking",
    description: "Build secure, scalable and high-performance enterprise networks that connect people, systems and business operations.",
    services: [
      "Enterprise LAN and WAN",
      "Wireless LAN (WLAN)",
      "Routing and Switching",
      "Software-Defined Networking (SDN)",
      "Network Monitoring and Management",
      "Unified Communications and Collaboration",
    ],
    image: "EnterpriseNetworking.png",
    icon: Network,
    visual: "network",
  },
  {
    number: "04",
    title: "Cybersecurity & Data Protection",
    slug: "security",
    description: "Protect enterprise infrastructure, applications and business information against evolving security threats.",
    services: [
      "Network and Endpoint Security",
      "Firewall and Perimeter Protection",
      "Identity and Access Management",
      "Security Monitoring and Assessment",
      "Data Protection and Backup Security",
      "Security Operations and Incident Response",
    ],
    image: "CyberSecurity.png",
    icon: ShieldCheck,
    visual: "security",
  },
  {
    number: "05",
    title: "Software & Business Automation",
    slug: "software",
    description: "Enable digital transformation through enterprise applications, software solutions and intelligent business automation.",
    services: [
      "Enterprise Resource Planning (ERP)",
      "Microsoft 365 and Digital Workplace",
      "Business Process Automation",
      "Software Development and Integration",
      "API Development and Integration",
      "Business Intelligence and Analytics",
    ],
    image: "Software&automation.png",
    icon: Workflow,
    visual: "software",
  },
  {
    number: "06",
    title: "IT Managed Services & Support",
    slug: "consulting",
    description: "Keep business technology reliable through professional implementation, maintenance and technical support.",
    services: [
      "IT Infrastructure Assessment",
      "Installation and Configuration",
      "Preventive and Corrective Maintenance",
      "Infrastructure Monitoring",
      "Technical Support and Troubleshooting",
      "IT Consulting and Outsourcing",
    ],
    image: "ITManageServices.png",
    icon: Headset,
    visual: "support",
  },
];
