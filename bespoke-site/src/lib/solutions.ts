export type SolutionCategory = {
  number: string;
  title: string;
  seoTitle: string;
  slug: string;
  description: string;
  overview: string;
  services: string[];
  outcomes: string[];
  faqs: { question: string; answer: string }[];
  image: string;
  visual: string;
};

export const solutionCategories: SolutionCategory[] = [
  {
    number: "01",
    title: "Data Center & Infrastructure",
    seoTitle: "Data Center Infrastructure Solutions",
    slug: "infrastructure",
    description: "Data center infrastructure solutions for enterprise servers, storage, power, racks, cooling, and disaster recovery.",
    overview:
      "Data center infrastructure services start with the needs of your workloads, facility, and operations. We help plan and deliver enterprise servers, storage, power, racks, cooling, and protection as one data center environment.",
    services: [
      "Data Center Design and Implementation",
      "Enterprise Server Infrastructure",
      "Enterprise Storage Systems",
      "Hyper-Converged Infrastructure (HCI)",
      "Backup and Disaster Recovery Infrastructure",
      "Data Center Power, Rack and Cooling Solutions",
    ],
    outcomes: [
      "An infrastructure design matched to workload and capacity requirements",
      "A practical basis for resilience, backup, and disaster recovery planning",
      "Coordinated deployment of compute, storage, rack, power, and cooling",
    ],
    faqs: [
      {
        question: "What does data center infrastructure work include?",
        answer:
          "It can include data center design, servers, enterprise storage, hyper-converged infrastructure, backup and disaster recovery, and rack, power, and cooling planning.",
      },
      {
        question: "How should an organization plan a data center upgrade?",
        answer:
          "Start by documenting workload, capacity, facility, resilience, and operating requirements. Those requirements help shape the compute, storage, power, cooling, and recovery design.",
      },
    ],
    image: "Data Center & Infrastructure.png",
    visual: "infrastructure",
  },
  {
    number: "02",
    title: "Cloud, Compute & Storage",
    seoTitle: "Cloud Computing and Storage Solutions",
    slug: "cloud",
    description: "Cloud computing, virtualization, migration, enterprise storage, and hybrid cloud solutions aligned to your organization.",
    overview:
      "Cloud computing services cover private, public, and hybrid cloud architectures, workload migration, virtualization, and cloud management. We align compute and enterprise storage with security, integration, backup, and day-to-day operations.",
    services: [
      "Private, Public and Hybrid Cloud",
      "Server and Desktop Virtualization",
      "Enterprise Storage Solutions",
      "Cloud Migration and Integration",
      "Backup and Disaster Recovery",
      "Cloud Management and Automation",
    ],
    outcomes: [
      "Cloud and compute options assessed against workload requirements",
      "Migration and integration planned around applications and data",
      "Storage, backup, and management needs considered as part of the design",
    ],
    faqs: [
      {
        question: "What cloud environments can you help plan?",
        answer:
          "The service scope includes private, public, and hybrid cloud, alongside virtualization, cloud management, and enterprise storage planning.",
      },
      {
        question: "What should be considered before migrating a workload?",
        answer:
          "Review application and data dependencies, security, integration, backup, and operational needs before deciding migration scope and sequencing.",
      },
    ],
    image: "CloudComputing.png",
    visual: "cloud",
  },
  {
    number: "03",
    title: "Enterprise Networking & Connectivity",
    seoTitle: "Enterprise Networking Solutions",
    slug: "networking",
    description: "Enterprise networking services for secure LAN, WAN, Wi-Fi, routing, switching, and network operations.",
    overview:
      "Enterprise networking solutions connect offices, users, devices, and workloads across local and wide area networks. Our networking work can include wired and wireless LAN, routing and switching, software-defined networking, network visibility, and unified communications.",
    services: [
      "Enterprise LAN and WAN",
      "Wireless LAN (WLAN)",
      "Routing and Switching",
      "Software-Defined Networking (SDN)",
      "Network Monitoring and Management",
      "Unified Communications and Collaboration",
    ],
    outcomes: [
      "Network architecture aligned to site, user, and application requirements",
      "Connectivity and wireless coverage planned across locations",
      "Monitoring and management considered throughout the network lifecycle",
    ],
    faqs: [
      {
        question: "What does enterprise networking cover?",
        answer:
          "Enterprise networking can cover LAN and WAN, wireless LAN, routing and switching, software-defined networking, network monitoring, and unified communications.",
      },
      {
        question: "What information helps plan a multi-site network?",
        answer:
          "Document locations, users, applications, wired and wireless needs, connectivity dependencies, and network operations requirements to guide the architecture.",
      },
    ],
    image: "EnterpriseNetworking.png",
    visual: "network",
  },
  {
    number: "04",
    title: "Cybersecurity & Data Protection",
    seoTitle: "Cybersecurity and Data Protection Solutions",
    slug: "security",
    description: "Cybersecurity services for networks, endpoints, identity, firewalls, data protection, and incident response.",
    overview:
      "Cybersecurity services protect networks, endpoints, identities, applications, and business data through layered controls. We support firewall and perimeter protection, identity and access management, security assessment, monitoring, backup protection, and incident-response planning.",
    services: [
      "Network and Endpoint Security",
      "Firewall and Perimeter Protection",
      "Identity and Access Management",
      "Security Monitoring and Assessment",
      "Data Protection and Backup Security",
      "Security Operations and Incident Response",
    ],
    outcomes: [
      "Security priorities identified across infrastructure and user access",
      "Protection and recovery controls considered together",
      "Monitoring and incident-response responsibilities made clearer",
    ],
    faqs: [
      {
        question: "What areas can cybersecurity planning include?",
        answer:
          "The service scope includes network and endpoint security, firewalls, identity and access management, security assessment, data protection, and incident response.",
      },
      {
        question: "How do cybersecurity and data protection work together?",
        answer:
          "Security controls help protect systems and data, while backup and recovery planning addresses how the organization can restore data and services after disruption.",
      },
    ],
    image: "CyberSecurity.png",
    visual: "security",
  },
  {
    number: "05",
    title: "Software & Business Automation",
    seoTitle: "Business Software and Automation Solutions",
    slug: "software",
    description: "Business software and automation services for ERP, digital workplace, software integration, and analytics.",
    overview:
      "Business software and automation connect applications to work processes and reporting needs. Services include ERP, Microsoft 365 and digital workplace, business process automation, software development, API and system integration, and business intelligence.",
    services: [
      "Enterprise Resource Planning (ERP)",
      "Microsoft 365 and Digital Workplace",
      "Business Process Automation",
      "Software Development and Integration",
      "API Development and Integration",
      "Business Intelligence and Analytics",
    ],
    outcomes: [
      "Software choices aligned to business processes and existing systems",
      "Integration needs considered across applications and data",
      "Automation and reporting opportunities defined around real workflows",
    ],
    faqs: [
      {
        question: "What business software and automation services are included?",
        answer:
          "The scope can include ERP, Microsoft 365 and digital workplace, business process automation, software development, API integration, and business intelligence.",
      },
      {
        question: "Where should a business start with process automation?",
        answer:
          "Map the current workflow, systems, data, and handoffs first. This helps identify practical automation and integration opportunities without assuming every step should be automated.",
      },
    ],
    image: "Software&automation.png",
    visual: "software",
  },
  {
    number: "06",
    title: "IT Managed Services & Support",
    seoTitle: "Managed IT Services and Technical Support",
    slug: "consulting",
    description: "Managed IT services for infrastructure assessment, deployment, maintenance, monitoring, and technical support.",
    overview:
      "Managed IT services and support help organizations assess, install, configure, maintain, and monitor their infrastructure. Engagements can cover technical troubleshooting, preventive and corrective maintenance, IT consulting, and outsourcing.",
    services: [
      "IT Infrastructure Assessment",
      "Installation and Configuration",
      "Preventive and Corrective Maintenance",
      "Infrastructure Monitoring",
      "Technical Support and Troubleshooting",
      "IT Consulting and Outsourcing",
    ],
    outcomes: [
      "Infrastructure priorities and support requirements documented",
      "Installation, maintenance, and monitoring responsibilities defined",
      "Technical support aligned to the organization's operating needs",
    ],
    faqs: [
      {
        question: "What can managed IT services cover?",
        answer:
          "Support may cover infrastructure assessment, installation and configuration, preventive and corrective maintenance, monitoring, troubleshooting, consulting, and outsourcing.",
      },
      {
        question: "How should an organization define its IT support scope?",
        answer:
          "Identify the systems and locations in scope, current support needs, maintenance and monitoring responsibilities, and the response expectations that fit daily operations.",
      },
    ],
    image: "ITManageServices.png",
    visual: "support",
  },
];
