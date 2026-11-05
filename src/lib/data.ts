export type CoreArea = { title: string; description: string };
export type FeaturedTech = { title: string };
export type Value = { title: string; description: string };
export type ProductCategory = { id: string; title: string; items: string[] };
export type Service = { title: string; description: string };
export type Industry = { title: string; description: string };

export const coreAreas = [
  {
    title: "IT Infrastructure and Hardware",
    description:
      "Enterprise-grade servers, storage, and computing platforms that form the backbone of reliable business operations.",
  },
  {
    title: "Enterprise Software and Licensing",
    description:
      "Licensed business software, cloud subscriptions, and enterprise applications sourced and managed with compliance in mind.",
  },
  {
    title: "Cloud Computing and Solutions",
    description:
      "Cloud migration, deployment, and management services that help organizations modernize and scale.",
  },
  {
    title: "Data Center and Storage Solutions",
    description:
      "Data center infrastructure, consolidation, and storage systems designed for performance, capacity, and resilience.",
  },
  {
    title: "Networking and Cybersecurity",
    description:
      "Enterprise networking and security solutions that protect data, users, and business-critical systems.",
  },
  {
    title: "IT Consulting and Technical Services",
    description:
      "Advisory, design, deployment, and ongoing support services aligned to your business objectives.",
  },
];

export const whyChoose = [
  "Customer-focused technology solutions tailored to operational needs.",
  "Reliable sourcing and procurement through established supplier relationships.",
  "Technical expertise across infrastructure, software, and networking.",
  "Enterprise-oriented solutions designed for scale and reliability.",
  "Professional project support from planning through delivery.",
  "Long-term customer partnerships built on trust and service.",
];

export const featuredTech = [
  "Servers",
  "Enterprise Storage",
  "Networking Equipment",
  "Cybersecurity",
  "Cloud Infrastructure",
  "Business Software",
];

export const values = [
  { title: "Innovation", description: "Embracing modern technology to solve real business challenges." },
  { title: "Integrity", description: "Honest, transparent dealings with customers, partners, and suppliers." },
  { title: "Customer Commitment", description: "Putting customer outcomes at the center of every engagement." },
  { title: "Excellence", description: "Delivering quality in products, services, and support." },
  { title: "Reliability", description: "Dependable sourcing, delivery, and technical support." },
  { title: "Partnership", description: "Building long-term relationships with customers and vendors." },
];


export const productCategories = [
  {
    id: "enterprise-computing",
    title: "Enterprise Computing",
    items: ["Rack servers", "Tower servers", "Enterprise computing platforms", "Virtualization infrastructure"],
  },
  {
    id: "enterprise-storage",
    title: "Enterprise Storage",
    items: [
      "Storage systems",
      "All-flash storage",
      "Hybrid storage",
      "Backup and recovery solutions",
      "Data protection infrastructure",
    ],
  },
  {
    id: "networking",
    title: "Networking Solutions",
    items: ["Enterprise switches", "Routers", "Wireless infrastructure", "Network management solutions"],
  },
  {
    id: "data-center",
    title: "Data Center Solutions",
    items: ["Data center infrastructure", "Hyperconverged infrastructure", "Virtualization", "Infrastructure consolidation"],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    items: ["Network security", "Firewalls", "Endpoint protection", "Security management solutions"],
  },
  {
    id: "software",
    title: "Software and Licensing",
    items: [
      "Microsoft software and cloud subscriptions",
      "Enterprise software licensing",
      "Backup software",
      "Virtualization software",
      "Security software",
    ],
  },
  {
    id: "computers",
    title: "Computers and Accessories",
    items: ["Business laptops", "Desktop computers", "Monitors", "Printers", "IT accessories"],
  },
];

export const services = [
  { title: "IT Infrastructure Consultancy", description: "Assessments and advisory to align infrastructure with business goals." },
  { title: "Solution Design and Architecture", description: "Design of scalable, resilient technology architectures." },
  { title: "Server and Storage Deployment", description: "Installation and configuration of servers and storage systems." },
  { title: "Network Implementation", description: "Design and rollout of enterprise network infrastructure." },
  { title: "Cloud Migration and Deployment", description: "Planning and execution of cloud adoption and migration." },
  { title: "Software Licensing Advisory", description: "Guidance on licensing models, compliance, and optimization." },
  { title: "System Integration", description: "Integration of hardware, software, and services into cohesive solutions." },
  { title: "Backup and Disaster Recovery", description: "Backup strategies and recovery planning to protect critical data." },
  { title: "Technical Support and Maintenance", description: "Ongoing support to keep systems reliable and up to date." },
  { title: "IT Project Implementation", description: "End-to-end delivery of IT projects with professional project support." },
];

export const industries = [
  { title: "Government and Public Sector", description: "Technology solutions supporting public service delivery and administration." },
  { title: "Banking and Financial Services", description: "Secure, reliable infrastructure for financial institutions." },
  { title: "Telecommunications", description: "Scalable systems supporting connectivity and service delivery." },
  { title: "Education", description: "Technology enabling teaching, research, and administration." },
  { title: "Healthcare", description: "Secure systems supporting clinical and operational workflows." },
  { title: "NGOs and Development Organizations", description: "Cost-effective, reliable technology for mission-driven organizations." },
  { title: "Private Enterprises", description: "Enterprise solutions for growing and established businesses." },
  { title: "Small and Medium Businesses", description: "Right-sized technology to support efficiency and growth." },
];

export const partners = [
  "Huawei",
  "Microsoft",
  "Fortinet",
  "HPE",
  "Dell Technologies",
  "Veeam",
];

export const inquiryCategories = [
  "Product Inquiry",
  "Request for Quotation",
  "Software Licensing",
  "Technical Services",
  "Tender and Procurement",
  "Partnership Opportunities",
  "General Inquiry",
];
