1 | 2 | import Image from "next/image";
2 | 3 | import { Button } from "@/components/Button";
4 | 5 | import { Card } from "@/components/Card";
6 | 7 | import { SectionHeading } from "@/components/SectionHeading";
7 | 8 | import {
9 | 9 |   coreAreas,
10 | 10 |   industries,
11 | 11 |   services,
12 | 12 |   whyChoose,
13 | 13 | } from "@/lib/data";
14 | 14 | 
15 | export const metadata = {
15 |   title: "Home",
16 |   description:
17 |     "BIT Spark Technologies PLC delivers reliable technology products, enterprise IT infrastructure, software licensing, and professional technology solutions.",
18 | };
19 | 
19 | export default function Home() {
20 |   return (
20 | 21 |       {/* 2. Hero Section */}
21 |       <section className="bg-card py-24 sm:py-32 lg:py-40">
22 |         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
23 |           <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
24 |             <div>
25 |               <p className="text-xs font-semibold uppercase tracking-widest text-indigo">
25 |                 Enterprise Technology Solutions
25 |               </p>
26 |               <h1 className="mt-2 text-3xl font-bold tracking-tight text-midnight-blue sm:text-4xl">
26 |                 Powering Business Through Technology.
26 |               </h1>
27 |               <p className="mt-6 text-base leading-relaxed text-foreground/90 max-w-xl">
27 |                 BIT Spark Technologies PLC is an Ethiopian technology company focused on providing enterprise IT products, software licensing, infrastructure solutions, and professional technical services. We help organizations identify, acquire, deploy, and manage technology solutions that support their operational requirements and digital transformation objectives.
27 |               </p>
28 |               <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
28 |                 <Button href="/solutions" className="px-5 py-2.5 text-sm font-semibold bg-indigo text-white hover:bg-indigo/90">
36 | 37 |       {/* 3. Who We Are / Company Introduction */}
37 |       <section className="py-20 bg-lightgray">
38 |         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
39 |           <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
40 |             <div>
41 |               <SectionHeading
41 |                 eyebrow="About BIT Spark Technologies"
42 |                 title="A trusted enterprise technology partner"
43 |                 description="BIT Spark Technologies PLC is an Ethiopian technology company focused on providing enterprise IT products, software licensing, infrastructure solutions, and professional technical services. We help organizations identify, acquire, deploy, and manage technology solutions that support their operational requirements and digital transformation objectives."
44 |               />
45 |             </div>
46 |             <div className="space-y-4">
47 |               <p className="text-foreground/90">
48 |                 We are committed to delivering reliable, secure, and scalable technology solutions that empower businesses across Ethiopia to achieve their digital transformation goals. Our team of experts works closely with each client to understand their unique needs and provide tailored solutions that drive results.
49 |               </p>
50 |               <p className="text-foreground/90">
50 |                 With a focus on quality, innovation, and customer satisfaction, we partner with leading technology vendors to bring the best enterprise products and services to our clients. From infrastructure deployment to ongoing technical support, BIT Spark is your trusted partner in technology.
51 |               </p>
51 |             </div>
52 |           </div>
53 |         </div>
53 |       </section>
28 |                   Explore Our Solutions
28 |                 </Button>
29 |                 <Button href="/contact" variant="outline" className="px-5 py-2.5 text-sm font-semibold hover:border-midnight-blue hover:text-midnight-blue">
29 |                   Contact Our Team
29 |                 </Button>
30 |               </div>
30 |             </div>
31 | 
31 |             <div className="lg:block hidden">
32 |               <Image
32 |                 src="/enterprise-data-center.jpg"
33 |                 alt="Modern enterprise data center with server racks and networking equipment"
33 |                 className="relative h-[480px] w-full rounded-lg shadow-xl object-cover"
33 |                 sizes="(max-width: 1200px) 100vw, 1200px"
33 |                 priority
34 |               />
35 |             </div>
35 |           </div>
36 |         </div>
36 |       </section>
21 |     < >
22 |       {/* 1. Header and Navigation */}
23 |       <header className="border-b border-border bg-white/95 backdrop-blur sticky top-0 z-50">
24 |         <div className="mx-auto max-w-7xl px-4 py-4 sm:px-8">
25 |           <div className="flex items-center justify-between">
26 |             <a href="/" className="flex items-center gap-2">
27 |               <Image
28 |                 src="/bit-spark-logo.svg"
29 |                 alt="BIT Spark Technologies PLC"
30 |                 width="40"
31 |                 height="40"
32 |                 className="rounded"
33 |               />
34 |               <span className="text-xl font-bold text-midnight-blue">BIT Spark</span>
35 |             </a>
35 |             <nav className="hidden sm:flex items-center gap-8">
36 |               <a href="/" className="text-foreground/70 hover:text-midnight-blue transition-colors">
37 |                 Home
38 |               </a>
39 |               <a href="/about" className="text-foreground/70 hover:text-midnight-blue transition-colors">
40 |                 About Us
41 |               </a>
42 |               <a href="/solutions" className="text-foreground/70 hover:text-midnight-blue transition-colors">
43 |                 Solutions
44 |               </a>
45 |               <a href="/services" className="text-foreground/70 hover:text-midnight-blue transition-colors">
46 |                 Services
47 |               </a>
48 |               <a href="/industries" className="text-foreground/70 hover:text-midnight-blue transition-colors">
49 |                 Industries
50 |               </a>
51 |               <a href="/partners" className="text-foreground/70 hover:text-midnight-blue transition-colors">
52 |                 Partners
53 |               </a>
54 |               <a href="/news" className="text-foreground/70 hover:text-midnight-blue transition-colors">
55 |                 News
56 |               </a>
57 |               <a href="/contact" className="text-foreground/70 hover:text-midnight-blue transition-colors">
58 |                 Contact
59 |               </a>
60 |             </nav>
61 |             <div className="flex items-center gap-3 sm:gap-4">
62 |               <Button href="/contact" variant="outline" className="px-4 py-2.5 text-sm">
63 |                 Request a Quote
64 |               </Button>
65 |             </div>
65 |           </div>
66 |         </div>
67 |       </header>

2 | import { Button } from "@/components/Button";
 3 | import { Card } from "@/components/Card";
 4 | import { SectionHeading } from "@/components/SectionHeading";
 5 | import {
 6 |   coreAreas,
 7 |   industries,
 8 |   services,
 9 |   whyChoose,
10 | } from "@/lib/data";
<div>
              <h4 className="text-white mb-4">Industries</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/industries/government" className="text-white/60 hover:text-white transition-colors text-sm">
                    Government and Public Sector
                  </a>
                </li>
                <li>
                  <a href="/industries/financial" className="text-white/60 hover:text-white transition-colors text-sm">
                    Banking and Financial Services
                  </a>
                </li>
                <li>
                  <a href="/industries/telecom" className="text-white/60 hover:text-white transition-colors text-sm">
                    Telecommunications
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-white/60 hover:text-white transition-colors text-sm">About Us</a>
                </li>
                <li>
                  <a href="/partners" className="text-white/60 hover:text-white transition-colors text-sm">Partners</a>
                </li>
                <li>
                  <a href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</a>
                </li>
              </ul>
            </div>

          <div className="mt-12 pt-8 border-t border-border border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">2024 BIT Spark Technologies PLC. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                  LinkedIn
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
                  Twitter
                </a>
              </div>
<div>
              <h4 className="text-white mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/solutions/enterprise-computing" className="text-white/60 hover:text-white transition-colors text-sm">
                    Enterprise Computing and Servers
                  </a>
                </li>
                <li>
                  <a href="/solutions/enterprise-storage" className="text-white/60 hover:text-white transition-colors text-sm">
                    Enterprise Storage Solutions
                  </a>
                </li>
                <li>
                  <a href="/solutions/data-center" className="text-white/60 hover:text-white transition-colors text-sm">
                    Data Center Infrastructure
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/services/consultancy" className="text-white/60 hover:text-white transition-colors text-sm">
                    IT Infrastructure Consultancy
                  </a>
                </li>
                <li>
                  <a href="/services/design" className="text-white/60 hover:text-white transition-colors text-sm">
                    Solution Design and Architecture
                  </a>
                </li>
                <li>
                  <a href="/services/deployment" className="text-white/60 hover:text-white transition-colors text-sm">
                    Server and Storage Deployment
                  </a>
                </li>
              </ul>
            </div>
</div>
           </div>
         </div>
       </section>

      {/* 11. Comprehensive Corporate Footer */}
      <footer className="bg-midnight-blue py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-5">
</div>
           </div>
         </div>
       </section>

      {/* 10. Technology Partners */}
      <section className="py-20 bg-lightgray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionHeading
              eyebrow="Technology Partners"
              title="Trusted Technology Partnerships"
              description="We partner with leading global technology vendors to deliver best-in-class solutions to our clients."
              align="center"
            />
          </div>
          <div className="grid gap-8 sm:grid-cols-6 lg:grid-cols-8">
            {productCategories.slice(0, 6).map((category) => (
              <div
                key={category.id}
                className="border rounded-md p-4 hover:border-indigo/30 transition-colors"
              >
                <h4 className="text-sm font-medium text-midnight-blue mb-2">{category.title}</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.items.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="text-xs text-foreground/60 rounded-md bg-indigo/10 px-2 py-1"
                    >
                      {item}
                    </span>
                  ))
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
</div>
           </div>
         </div>
       </section>

      {/* 9. Latest News and Updates */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionHeading
              eyebrow="Latest News"
              title="News and Updates"
              description="Recent insights, announcements, and industry updates from BIT Spark Technologies."
              align="center"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-white p-6 hover:border-indigo/30 transition-colors">
              <div className="h-48 rounded-lg bg-gradient-to-b from-indigo-50 to-snow-white overflow-hidden flex items-center justify-center">
                <p className="text-indigo/60">Featured</p>
              </div>
              <h3 className="mt-4 text-xl font-bold text-midnight-blue">Title of News Article</h3>
              <p className="mt-2 text-sm text-foreground/60">
                Posted on November 6, 2024 · 2 min read
              </p>
              <a href="/news/article" className="mt-4 text-indigo hover:text-indigo/90 transition-colors font-medium">
                Read More
              </a>
            </div>
            <div className="rounded-lg border border-border bg-white p-6 hover:border-indigo/30 transition-colors">
              <div className="h-48 rounded-lg bg-gradient-to-b from-indigo-50 to-snow-white overflow-hidden flex items-center justify-center">
                <p className="text-indigo/60">Insights</p>
              </div>
              <h3 className="mt-4 text-xl font-bold text-midnight-blue">Another Update</h3>
              <p className="mt-2 text-sm text-foreground/60">
                Posted on November 6, 2024 · 2 min read
              </p>
              <a href="/news/article" className="mt-4 text-indigo hover:text-indigo/90 transition-colors font-medium">
                Read More
              </a>
            </div>
            <div className="rounded-lg border border-border bg-white p-6 hover:border-indigo/30 transition-colors">
              <div className="h-48 rounded-lg bg-gradient-to-b from-indigo-50 to-snow-white overflow-hidden flex items-center justify-center">
                <p className="text-indigo/60">Announcement</p>
              </div>
              <h3 className="mt-4 text-xl font-bold text-midnight-blue">Project Launch</h3>
              <p className="mt-2 text-sm text-foreground/60">
                Posted on November 6, 2024 · 2 min read
              </p>
              <a href="/news/article" className="mt-4 text-indigo hover:text-indigo/90 transition-colors font-medium">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
</div>
           </div>
         </div>
       </section>

      {/* 8. Customer Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionHeading
              eyebrow="Customer Feedback"
              title="What Our Clients Say"
              description="Feedback from organizations we have partnered with on technology projects."
              align="center"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-white p-6">
              <p className="text-foreground/90 leading-relaxed mb-6">
                "BIT Spark Technologies helped us navigate complex software licensing requirements with professionalism and expertise. Their team was knowledgeable, responsive, and truly understood our needs."
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder-client.jpg"
                  alt="Client company logo"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-midnight-blue">Client Organization</p>
                  <p className="text-sm text-foreground/60">Organization Type</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <p className="text-foreground/90 leading-relaxed mb-6">
                "The enterprise infrastructure deployment was completed on time and within budget. BIT Spark's technical team demonstrated deep expertise and maintained clear communication throughout the project."
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder-client.jpg"
                  alt="Client company logo"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-midnight-blue">Client Organization</p>
                  <p className="text-sm text-foreground/60">Organization Type</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <p className="text-foreground/90 leading-relaxed mb-6">
                "Our cloud migration project with BIT Spark was seamless. Their planning, execution, and ongoing support exceeded our expectations. Highly recommended for enterprise technology projects."
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder-client.jpg"
                  alt="Client company logo"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-midnight-blue">Client Organization</p>
                  <p className="text-sm text-foreground/60">Organization Type</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</div>
           </div>
         </div>
       </section>

      {/* 7. Industries and Customers We Serve */}
      <section className="py-20 bg-lightgray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeading
              eyebrow="Industries"
              title="Sectors We Serve"
              description="Technology solutions tailored to the unique requirements of each sector we support."
              align="center"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="rounded-lg border border-border bg-white p-4 text-center hover:border-indigo/30 hover:bg-indigo/5 transition-colors"
              >
                <h3 className="text-sm font-semibold text-midnight-blue leading-tight">{industry.title}</h3>
                <p className="mt-1 text-xs text-foreground/70 leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
</div>
           </div>
         </div>
       </section>

      {/* 6. Strong Company Call-to-Action */}
      <section className="py-24 sm:py-32 lg:py-40 bg-midnight-blue">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo/60 mb-4">
              Start Your Technology Journey Today
            </p>
            <h2 className="text-3xl font-bold text-white mb-6">
              Partner with BIT Spark for Your Technology Needs
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Let's discuss how we can support your organization's digital transformation with the right products, solutions, and expertise tailored to your objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" className="px-8 py-3 text-lg font-semibold">
                Request a Quote
              </Button>
              <Button href="/contact" variant="outline" className="px-8 py-3 text-lg font-semibold hover:bg-white hover:text-midnight-blue transition-colors">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
</div>
           </div>
         </div>
       </section>

      {/* 5. Our Solutions */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeading
              eyebrow="Our Solutions"
              title="Enterprise Technology Solutions"
              description="We provide comprehensive technology solutions designed to meet the diverse needs of organizations across Ethiopia, from infrastructure deployment to ongoing technical support."
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <Card
                key={category.id}
                title={category.title}
                description={category.description}
                className="pb-0"
              >
                <div className="flex h-12 items-center justify-between">
                  <a href={`/solutions/${category.id}`} className="text-indigo hover:text-indigo/90 transition-colors font-medium">
                    Learn More
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
</div>
             </div>
           </div>
         </div>
       </section>

      {/* 2. Company Introduction */}
      <section className="bg-lightgray py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="About BIT Spark Technologies"
                title="A trusted enterprise technology partner"
                description="BIT Spark Technologies PLC is an enterprise technology provider helping organizations across Ethiopia build reliable, secure, and scalable digital environments. We supply enterprise-grade IT infrastructure, licensed business software, cloud solutions, and professional technical services—backed by dependable sourcing, technical expertise, and long-term customer partnerships."
export const metadata = {
  title: "Home",
  description:
    "BIT Spark Technologies PLC delivers reliable technology products, enterprise IT infrastructure, software licensing, and professional technology solutions.",
};

export default function Home() {
  return (
    < >
      {/* Hero */}
      <section className="bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-xl">
               <p className="text-xs font-semibold uppercase tracking-widest text-indigo">
                 Enterprise Technology Solutions
               </p>
               <h1 className="mt-2 text-3xl font-bold tracking-tight text-midnight-blue sm:text-4xl">
  Powering Business Through Technology.
                Powering Business Through Technology.
               </h1>
               <p className="mt-6 text-base leading-relaxed text-foreground/90 max-w-xl">
                 Enterprise technology products, infrastructure solutions, software licensing,
                 and professional IT services that help organizations build reliable and secure
                 digital environments.
               </p>
               <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                 <Button href="/products">Explore Our Solutions</Button>
                 <Button href="/contact" variant="outline">Contact Our Team</Button>
               </div>
             </div>

             <div className="relative h-[480px] w-full hidden lg:block">
               <Image
                 src="https://images.unsplash.com/photo-1558494949-ef646c4e61f6?w=1200&q=80&auto=format&fit=crop"
                 alt="Enterprise data center with server racks and networking equipment"
                 fill
                 sizes="(max-width: 1200px) 100vw, 1200px"
                 className="rounded-lg shadow-xl object-cover"
               />
             </div>

             {/* Mobile: image shown below the copy, stacked naturally in the single-column grid */}
             <div className="lg:hidden mt-6">
               <div className="relative h-[400px] w-full">
                 <Image
                   src="https://images.unsplash.com/photo-1558494949-ef646c4e61f6?w=900&q=80&auto=format&fit=crop"
                   alt="Enterprise data center with server racks and networking equipment"
                   fill
                   sizes="(max-width: 900px) 100vw, 900px"
                   className="rounded-lg shadow-lg object-cover"
                 />
               </div>
             </div>
           </div>
         </div>
       </section>