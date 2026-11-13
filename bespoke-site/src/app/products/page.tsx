"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

const products=[
 {name:"Enterprise Business Laptop",category:"Laptops",brand:"Sample Brand",spec:"14-inch • 16GB RAM • 512GB SSD"},
 {name:"Rackmount Business Server",category:"Servers",brand:"Sample Brand",spec:"2U platform • Dual processor ready"},
 {name:"24-Port Managed Switch",category:"Networking",brand:"Sample Brand",spec:"Layer 3 • Gigabit Ethernet"},
 {name:"Dual-Band Wireless Access Point",category:"Wireless",brand:"Sample Brand",spec:"Wi-Fi 6 • Enterprise management"},
 {name:"Enterprise Firewall Appliance",category:"Security",brand:"Sample Brand",spec:"Throughput • VPN • Content filtering"},
 {name:"1TB NVMe Solid State Drive",category:"Storage",brand:"Sample Brand",spec:"PCIe NVMe • Enterprise workload"},
];
export default function ProductsPage(){
 const [query,setQuery]=useState(""); const [category,setCategory]=useState("All");
 const filtered=useMemo(()=>products.filter(p=>(category==="All"||p.category===category)&&(`${p.name} ${p.brand} ${p.spec}`.toLowerCase().includes(query.toLowerCase()))),[query,category]);
 return <><PageHero eyebrow="Technology products" title="Enterprise hardware and technology catalog" description="Explore a sample catalog of business-ready technology products. Inventory, pricing, and availability should be confirmed before quotation."/><section className="content-section"><div className="container">
 <div style={{display:"flex",gap:12,marginBottom:28}}><div style={{flex:1,maxWidth:430,position:"relative"}}><Search size={17} style={{position:"absolute",left:13,top:14,color:"#718096"}}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search sample products" style={{width:"100%",height:44,padding:"0 14px 0 40px",border:"1px solid #ccd8df",borderRadius:4}}/></div><div style={{display:"flex",alignItems:"center",gap:8}}><SlidersHorizontal size={17}/><select value={category} onChange={e=>setCategory(e.target.value)} style={{height:44,border:"1px solid #ccd8df",borderRadius:4,padding:"0 12px"}}>{["All","Laptops","Servers","Networking","Wireless","Security","Storage"].map(c=><option key={c}>{c}</option>)}</select></div></div>
 <div className="content-grid">{filtered.map((p,i)=><article className="content-card" key={p.name}><div style={{height:150,background:"#eef4f7",borderRadius:3,display:"flex",alignItems:"center",justifyContent:"center",color:"#93a4b1",fontWeight:800,fontSize:12}}>SAMPLE PRODUCT {i+1}</div><span style={{fontSize:11,color:"#087ea4",textTransform:"uppercase",letterSpacing:1,fontWeight:800,display:"block",marginTop:18}}>{p.category} • {p.brand}</span><h3>{p.name}</h3><p>{p.spec}</p><Link className="text-link" href="/request-quote">Request quotation <ArrowRight size={16}/></Link></article>)}</div>{filtered.length===0&&<p>No sample products match your search.</p>}
 </div></section></>;
}
