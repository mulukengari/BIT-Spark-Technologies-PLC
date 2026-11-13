export type IndustrySolution = {
  slug: string;
  title: string;
  cardTitle: string;
  summary: string;
  introduction: string;
  solutions: string[];
  outcomes: string[];
};

export const industrySolutions: IndustrySolution[] = [
  {
    slug: "financial-services",
    title: "Banking & Financial Services",
    cardTitle: "Financial services",
    summary: "Secure infrastructure, resilient connectivity, and protected business data.",
    introduction:
      "Financial organizations depend on trustworthy systems, dependable access to information, and services that remain available to customers and teams. We help plan and support the technology foundations behind those day-to-day operations.",
    solutions: [
      "Resilient data center, server, and branch connectivity",
      "Identity, access, endpoint, and network security",
      "Protected data, backup, and recovery environments",
      "Cloud platforms and business application integration",
      "Ongoing infrastructure monitoring and technical support",
    ],
    outcomes: [
      "Support continuity for customer-facing and internal services",
      "Improve control over access to systems and information",
      "Make infrastructure easier to manage as the organization grows",
    ],
  },
  {
    slug: "government",
    title: "Government & Public Sector",
    cardTitle: "Government",
    summary: "Reliable systems and secure infrastructure for accountable public services.",
    introduction:
      "Public-sector teams need technology that supports accessible services, connected offices, and responsible operations. We shape infrastructure and support around the needs of agencies, departments, and the people they serve.",
    solutions: [
      "Modern data center, cloud, and office infrastructure",
      "Secure connectivity and collaboration across locations",
      "Access controls, endpoint protection, and data safeguards",
      "Backup, recovery, and continuity planning",
      "Workflow automation and integration between business systems",
    ],
    outcomes: [
      "Keep essential services and teams connected",
      "Strengthen protection for organizational information",
      "Simplify the management of systems across departments",
    ],
  },
  {
    slug: "education",
    title: "Education",
    cardTitle: "Education",
    summary: "Connected learning environments for students, educators, and administrators.",
    introduction:
      "Schools, colleges, and universities rely on dependable campus technology for teaching, learning, and administration. We help institutions build connected environments that are manageable, secure, and ready to evolve.",
    solutions: [
      "Campus wired, wireless, and internet connectivity",
      "Managed computers, devices, and classroom technology",
      "Cloud collaboration and learning-platform infrastructure",
      "Data protection, backup, and recovery for institutional systems",
      "Automation and integration for administrative workflows",
    ],
    outcomes: [
      "Provide reliable access to digital learning resources",
      "Make devices and campus systems easier to support",
      "Protect institutional information and support service continuity",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    cardTitle: "Healthcare",
    summary: "Dependable networks and protected systems for clinical and administrative teams.",
    introduction:
      "Healthcare environments need reliable access to the systems that support clinical and administrative work. We focus on resilient infrastructure, careful access management, and practical support for connected care environments.",
    solutions: [
      "Reliable network and infrastructure for care locations",
      "Identity, access, and endpoint security for staff systems",
      "Data backup, recovery, and continuity capabilities",
      "Integration between operational and business applications",
      "Infrastructure maintenance and responsive technical support",
    ],
    outcomes: [
      "Reduce avoidable technology interruptions",
      "Support controlled access to sensitive information",
      "Keep essential systems maintainable and recoverable",
    ],
  },
  {
    slug: "telecommunications",
    title: "Telecommunications",
    cardTitle: "Telecommunications",
    summary: "Scalable infrastructure and operational support for connected services.",
    introduction:
      "Telecommunications providers need robust platforms and well-managed infrastructure to support demanding, always-connected operations. We help deliver the network, compute, security, and support capabilities behind those environments.",
    solutions: [
      "Scalable data center, compute, and storage infrastructure",
      "Enterprise network design, connectivity, and upgrades",
      "Network visibility, monitoring, and management platforms",
      "Security and access controls for operational environments",
      "Deployment, maintenance, and technical support services",
    ],
    outcomes: [
      "Scale infrastructure alongside changing service demands",
      "Improve visibility into network and system operations",
      "Support consistent deployment and maintenance practices",
    ],
  },
  {
    slug: "enterprise-sme",
    title: "Enterprise & SME",
    cardTitle: "Enterprise & SME",
    summary: "Practical technology foundations that support growth without needless complexity.",
    introduction:
      "Organizations of every size need technology that fits how they work today and can adapt as they grow. We bring infrastructure, security, software, and ongoing support together around your operational priorities.",
    solutions: [
      "Cloud, server, and storage solutions sized to your needs",
      "Office networking, connectivity, and collaboration tools",
      "Cybersecurity, endpoint management, and data backup",
      "Business software, system integration, and workflow automation",
      "Managed support, maintenance, and hardware deployment",
    ],
    outcomes: [
      "Build a technology environment that can grow with the business",
      "Reduce day-to-day IT complexity for internal teams",
      "Make support and technology investment more predictable",
    ],
  },
];
