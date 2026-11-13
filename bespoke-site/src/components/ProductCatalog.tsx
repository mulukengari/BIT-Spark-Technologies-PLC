"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

const products = [
  {
    name: "Enterprise Business Laptop",
    category: "Laptops",
    brand: "Sample Brand",
    spec: "14-inch • 16GB RAM • 512GB SSD",
  },
  {
    name: "Rackmount Business Server",
    category: "Servers",
    brand: "Sample Brand",
    spec: "2U platform • Dual processor ready",
  },
  {
    name: "24-Port Managed Switch",
    category: "Networking",
    brand: "Sample Brand",
    spec: "Layer 3 • Gigabit Ethernet",
  },
  {
    name: "Dual-Band Wireless Access Point",
    category: "Wireless",
    brand: "Sample Brand",
    spec: "Wi-Fi 6 • Enterprise management",
  },
  {
    name: "Enterprise Firewall Appliance",
    category: "Security",
    brand: "Sample Brand",
    spec: "Throughput • VPN • Content filtering",
  },
  {
    name: "1TB NVMe Solid State Drive",
    category: "Storage",
    brand: "Sample Brand",
    spec: "PCIe NVMe • Enterprise workload",
  },
];

const categories = [
  "All",
  "Laptops",
  "Servers",
  "Networking",
  "Wireless",
  "Security",
  "Storage",
];

export default function ProductCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(
    () =>
      products.filter(
        (product) =>
          (category === "All" || product.category === category) &&
          `${product.name} ${product.brand} ${product.spec}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [query, category]
  );

  return (
    <>
      <h2 className="sr-only">Sample products and catalog filters</h2>
      <div className="product-filters">
        <div className="product-search">
          <Search size={17} aria-hidden="true" />
          <label className="sr-only" htmlFor="product-search">
            Search sample products
          </label>
          <input
            id="product-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search sample products"
          />
        </div>
        <div className="product-category">
          <label htmlFor="product-category">Filter by category</label>
          <select
            id="product-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
      {filtered.length > 0 ? (
        <div className="content-grid">
          {filtered.map((product, index) => (
            <article className="content-card" key={product.name}>
              <div className="sample-product-art" aria-hidden="true">
                SAMPLE PRODUCT {index + 1}
              </div>
              <span className="product-category-label">
                {product.category} • {product.brand}
              </span>
              <h3>{product.name}</h3>
              <p>{product.spec}</p>
              <Link className="text-link" href="/request-quote">
                Request a quotation for {product.name} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p role="status">No sample products match your search.</p>
      )}
    </>
  );
}