"use client";

import { useEffect, useState } from "react";
import {
  AppWindow,
  Boxes,
  Check,
  ChevronDown,
  Cloud,
  Database,
  HardDrive,
  Network,
  Pause,
  Play,
  Server,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { CSSProperties } from "react";
import "./PartnersOverview.css";

type Domain = {
  id: string;
  title: string;
  category: string;
  icon: LucideIcon;
  features: [string, string, string];
  uptime: string;
  latency: string;
  bandwidth: string;
  accent: string;
};

const domains: Domain[] = [
  {
    id: "network",
    title: "Network",
    category: "Enterprise Connectivity",
    icon: Network,
    features: [
      "Enterprise WAN/LAN Optimization & SD-WAN",
      "High-speed routing, automated path selection & mesh layout",
      "Unified edge-to-core perimeter and micro-segmentation",
    ],
    uptime: "99.99",
    latency: "< 5",
    bandwidth: "Multi-Gb",
    accent: "#2563eb",
  },
  {
    id: "cloud",
    title: "Cloud Hub",
    category: "Cloud Platform",
    icon: Cloud,
    features: [
      "Hybrid and multi-cloud workload connectivity",
      "Centralized cloud landing zones, identity, and governance",
      "Scalable compute and resilient application services",
    ],
    uptime: "99.95",
    latency: "< 10",
    bandwidth: "Elastic",
    accent: "#0891b2",
  },
  {
    id: "data-center",
    title: "Data Center",
    category: "Enterprise Infrastructure",
    icon: Database,
    features: [
      "High-availability compute and critical workload hosting",
      "Resilient facilities, power, and environmental controls",
      "Capacity planning and lifecycle-aligned modernization",
    ],
    uptime: "99.99",
    latency: "< 2",
    bandwidth: "100 Gb",
    accent: "#7c3aed",
  },
  {
    id: "security",
    title: "Security",
    category: "Cybersecurity & Resilience",
    icon: ShieldCheck,
    features: [
      "Identity-aware security and zero-trust access policies",
      "Threat monitoring, response readiness, and clear visibility",
      "Unified perimeter controls and micro-segmentation",
    ],
    uptime: "99.99",
    latency: "< 10",
    bandwidth: "Always-on",
    accent: "#e11d48",
  },
  {
    id: "enterprise-compute",
    title: "Enterprise Compute",
    category: "Compute Platforms",
    icon: Server,
    features: [
      "Right-sized server platforms for business-critical workloads",
      "Virtualization and workload orchestration across environments",
      "Lifecycle planning for performance and availability",
    ],
    uptime: "99.99",
    latency: "< 5",
    bandwidth: "High I/O",
    accent: "#d97706",
  },
  {
    id: "enterprise-storage",
    title: "Enterprise Storage",
    category: "Data Platforms",
    icon: HardDrive,
    features: [
      "Scalable storage for structured and unstructured data",
      "Tiered performance, replication, and data protection",
      "Recovery-ready architecture aligned to retention needs",
    ],
    uptime: "99.99",
    latency: "< 3",
    bandwidth: "Multi-Gb",
    accent: "#0284c7",
  },
  {
    id: "software-licensing",
    title: "Software & Licensing",
    category: "Software Lifecycle",
    icon: AppWindow,
    features: [
      "Software portfolio aligned to business and user requirements",
      "License visibility, utilization, and renewal coordination",
      "Support for deployment, adoption, and lifecycle planning",
    ],
    uptime: "99.9",
    latency: "< 20",
    bandwidth: "Cloud-ready",
    accent: "#059669",
  },
  {
    id: "it-infrastructure",
    title: "IT Infrastructure",
    category: "Core Technology Services",
    icon: Boxes,
    features: [
      "Integrated infrastructure across sites and environments",
      "Consistent configuration, observability, and management",
      "Planned maintenance and operational support readiness",
    ],
    uptime: "99.95",
    latency: "< 10",
    bandwidth: "Multi-Gb",
    accent: "#4f46e5",
  },
];

const nodePositions: Record<string, { left: string; top: string }> = {
  network: { left: "50%", top: "9.4%" },
  cloud: { left: "80%", top: "18.4%" },
  "data-center": { left: "84.3%", top: "50%" },
  security: { left: "80%", top: "81.6%" },
  "enterprise-compute": { left: "50%", top: "90.6%" },
  "enterprise-storage": { left: "20%", top: "81.6%" },
  "software-licensing": { left: "15.7%", top: "50%" },
  "it-infrastructure": { left: "20%", top: "18.4%" },
};

const connectorPoints = [
  [350, 47],
  [560, 92],
  [590, 250],
  [560, 408],
  [350, 453],
  [140, 408],
  [110, 250],
  [140, 92],
] as const;

export default function PartnersOverview({ showIntro = false }: { showIntro?: boolean }) {
  const [selectedId, setSelectedId] = useState("network");
  const [optionsOpen, setOptionsOpen] = useState(true);
  const [benchmarksPaused, setBenchmarksPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [motionOverride, setMotionOverride] = useState<"system" | "enabled" | "paused">("system");
  const selected = domains.find((domain) => domain.id === selectedId) ?? domains[0];
  const SelectedIcon = selected.icon;
  const motionActive =
    motionOverride === "enabled" ||
    (motionOverride === "system" && !prefersReducedMotion);
  const dashboardStyle = { "--domain-accent": selected.accent } as CSSProperties & {
    "--domain-accent": string;
  };

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(preference.matches);

    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  function selectDomain(id: string) {
    if (domains.some((domain) => domain.id === id)) setSelectedId(id);
  }

  return (
    <section
      className={`core-dashboard${motionOverride === "enabled" ? " core-motion-enabled" : ""}${motionOverride === "paused" ? " core-motion-paused" : ""}`}
      data-robot-target="why-bitspark"
      aria-label="BITSpark Core Partner technology dashboard"
      style={dashboardStyle}
    >
      <div className="core-dashboard-container">
        {showIntro && (
          <header className="core-dashboard-heading">
            <span className="core-dashboard-eyebrow">Enterprise technology ecosystem</span>
            <h2>BITSpark Core Partner</h2>
            <p>
              Explore the connected enterprise technology domains and service targets that
              support your business.
            </p>
          </header>
        )}
        <div className="core-dashboard-grid">
          <section className="core-card core-diagram-card" aria-labelledby="architecture-heading">
            <header className="core-card-heading">
              <div>
                <span className="core-card-kicker">Architecture overview</span>
                <h3 id="architecture-heading">Enterprise technology domains</h3>
              </div>
              <div className="core-diagram-tools">
                <span className="core-legend"><i /> Active domain</span>
                <button
                  className="core-motion-toggle"
                  type="button"
                  aria-pressed={motionActive}
                  aria-label={motionActive ? "Pause dashboard animations" : "Play dashboard animations"}
                  onClick={() => {
                    if (motionActive) setMotionOverride("paused");
                    else setMotionOverride("enabled");
                  }}
                >
                  {motionActive
                    ? <Pause size={12} aria-hidden="true" />
                    : <Play size={12} fill="currentColor" aria-hidden="true" />}
                  {motionActive ? "Pause motion" : "Play motion"}
                </button>
              </div>
            </header>
            <div className="core-diagram" aria-label="Radial enterprise technology architecture">
              <svg className="core-wires" viewBox="0 0 700 500" preserveAspectRatio="none" aria-hidden="true">
                {connectorPoints.map(([x, y], index) => (
                  <line
                    key={domains[index].id}
                    className={selected.id === domains[index].id ? "core-wire core-wire-active" : "core-wire core-wire-flow"}
                    x1="350"
                    y1="250"
                    x2={x}
                    y2={y}
                  />
                ))}
                <circle className="core-orbit" cx="350" cy="250" r="160" />
              </svg>
              <div className="core-orbit-track" aria-hidden="true">
                <i className="core-orbit-dot core-orbit-dot-one" />
                <i className="core-orbit-dot core-orbit-dot-two" />
                <i className="core-orbit-dot core-orbit-dot-three" />
              </div>
              <div className="core-rings" aria-hidden="true">
                <div className="core-hub">
                  <span className="core-hub-mark"><i /><i /><i /></span>
                  <strong>BITSpark</strong>
                  <span>Core Partner</span>
                </div>
              </div>

              {domains.map((domain) => {
                const Icon = domain.icon;
                const position = nodePositions[domain.id];
                return (
                  <button
                    className="core-domain-node"
                    type="button"
                    key={domain.id}
                    data-domain={domain.id}
                    style={{
                      left: position.left,
                      top: position.top,
                      "--domain-accent": domain.accent,
                    } as CSSProperties & { "--domain-accent": string }}
                    aria-pressed={selected.id === domain.id}
                    onClick={() => selectDomain(domain.id)}
                  >
                    <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                    <span>{domain.title}</span>
                  </button>
                );
              })}
            </div>
          </section>

          <aside className="core-card core-detail-card" aria-labelledby="core-selected-title" aria-live="polite">
            <header className="core-detail-top">
              <div>
                <span className="core-selected-label"><i />{selected.category}</span>
                <h3 className="core-selected-title" key={selected.id} id="core-selected-title">
                  {selected.title}
                </h3>
              </div>
              <button
                className="core-benchmark-control"
                type="button"
                aria-label={benchmarksPaused ? "Resume benchmark display" : "Pause benchmark display"}
                title={benchmarksPaused ? "Resume benchmark display" : "Pause benchmark display"}
                onClick={() => setBenchmarksPaused((paused) => !paused)}
              >
                {benchmarksPaused
                  ? <Play size={15} fill="currentColor" aria-hidden="true" />
                  : <Pause size={15} aria-hidden="true" />}
              </button>
            </header>

            <ul className="core-feature-list" key={`features-${selected.id}`}>
              {selected.features.map((feature) => (
                <li key={feature}>
                  <span className="core-check"><Check size={11} strokeWidth={2.2} aria-hidden="true" /></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <section
              className={`core-benchmark${benchmarksPaused ? " is-paused" : ""}`}
              key={selected.id}
              aria-labelledby="benchmark-heading"
            >
              <header className="core-benchmark-heading">
                <h4 id="benchmark-heading">Performance Benchmarks</h4>
                <span className={`core-benchmark-status${benchmarksPaused ? " is-paused" : ""}`}>
                  <i />{benchmarksPaused ? "Paused" : "Target"}
                </span>
              </header>
              <span className="core-uptime-label">Uptime Goal</span>
              <div className="core-uptime-value" key={`uptime-${selected.id}`}>{selected.uptime}<span>%</span></div>
              <div className="core-uptime-track" aria-hidden="true"><span /></div>
              <span className="core-target-note">Illustrative service target</span>
            </section>
          </aside>
        </div>

        <section className="core-card core-metrics" key={selected.id} aria-label={`${selected.title} performance targets`}>
          <div className="core-metric">
            <span className="core-metric-label">Uptime Goal</span>
            <strong>{selected.uptime}<small>% availability</small></strong>
          </div>
          <div className="core-metric">
            <span className="core-metric-label">Latency Avg</span>
            <strong>{selected.latency}<small>ms</small></strong>
          </div>
          <div className="core-metric">
            <span className="core-metric-label">Bandwidth</span>
            <strong>{selected.bandwidth}</strong>
          </div>
        </section>

        <section className="core-card core-selector" aria-labelledby="core-selector-label">
          <span className="core-selector-label" id="core-selector-label">
            Select Enterprise Technology Domain Pillar
          </span>
          <button
            className="core-select-toggle"
            type="button"
            aria-expanded={optionsOpen}
            aria-controls="core-domain-options"
            onClick={() => setOptionsOpen((open) => !open)}
          >
            <span className="core-select-value">
              <SelectedIcon size={16} aria-hidden="true" />
              {selected.title}
            </span>
            <ChevronDown className={optionsOpen ? "core-chevron is-open" : "core-chevron"} size={16} aria-hidden="true" />
          </button>
          {optionsOpen && (
            <div className="core-domain-options" id="core-domain-options" role="listbox" aria-label="Enterprise technology domains">
              {domains.map((domain) => (
                <button
                  className="core-domain-option"
                  type="button"
                  role="option"
                  key={domain.id}
                  aria-selected={selected.id === domain.id}
                  onClick={() => selectDomain(domain.id)}
                >
                  <i />
                  {domain.title}
                </button>
              ))}
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
