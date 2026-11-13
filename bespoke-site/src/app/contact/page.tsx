"use client";
import PageHero from "@/components/PageHero";
import { useState } from "react";

export default function ContactPage() {
  const [sent,setSent]=useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  return <>
    <PageHero eyebrow="Contact us" title="Let’s discuss your technology needs" description="Speak with our team about infrastructure, cloud, hardware, software, security, or ongoing technical support." />
    <section className="content-section" data-robot-target="contact"><div className="container" style={{display:"grid",gridTemplateColumns:"1fr 1.5fr",gap:"70px"}}>
      <div><span className="kicker">Get in touch</span><h2 style={{fontSize:"34px",margin:"12px 0",color:"#102238"}}>How can we help?</h2><p style={{color:"#65778a",lineHeight:1.8}}>General enquiries:<br/>Domain: bitsparktech.com<br/>Telephone: +251929316976<br/>Business hours: Monday–Friday, 8:30 AM – 5:30 PM</p><div className="content-card" style={{marginTop:"28px"}}><strong>Office location</strong><p>Map location and verified address will be added before public launch.</p></div></div>
      {sent?<div className="content-card"><h2>Thank you for contacting us.</h2><p>Your demonstration enquiry has been received. This frontend form is ready for backend integration.</p><button className="button button-primary" onClick={()=>setSent(false)}>Send another message</button></div>:<form className="form-grid" onSubmit={submit}><div className="field"><label>Full name</label><input required placeholder="Your name"/></div><div className="field"><label>Work email</label><input required type="email" placeholder="name@company.com"/></div><div className="field"><label>Phone number</label><input type="tel" placeholder="+000 000 0000"/></div><div className="field"><label>Service</label><select required defaultValue=""><option value="" disabled>Select a service</option><option>Cloud and infrastructure</option><option>Networking and security</option><option>Software development</option><option>Hardware supply</option><option>Technical support</option></select></div><div className="field full"><label>Subject</label><input required placeholder="How can we help?"/></div><div className="field full"><label>Message</label><textarea required rows={5} placeholder="Tell us about your requirements"/></div><div className="field full"><button className="button button-primary" style={{border:0,cursor:"pointer"}}>Send enquiry</button></div></form>}
    </div></section>
  </>;
}
