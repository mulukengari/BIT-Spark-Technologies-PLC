1 | import Image from "next/image";
2 | import { Button } from "@/components/Button";
3 | import { Card } from "@/components/Card";
4 | import { SectionHeading } from "@/components/SectionHeading";
5 | import {
6 |   coreAreas,
7 |   industries,
8 |   services,
9 |   whyChoose,
10 | export const metadata = {
11 |   title: "Home",
12 |   description:
13 |     "BIT Spark Technologies PLC delivers reliable technology products, enterprise IT infrastructure, software licensing, and professional technology solutions.",
14 | };
15 | 
16 |   return (
17 |       {/* 2. Hero Section */}
18 |       <section className="bg-card py-24 sm:py-32 lg:py-40">
19 |         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
19 |           <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
20 |             <div>
21 |               <p className="text-xs font-semibold uppercase tracking-widest text-indigo">
22 |                 Enterprise Technology Solutions
22 |               </p>
23 |               <h1 className="mt-2 text-3xl font-bold tracking-tight text-midnight-blue sm:text-4xl">
24 |                 Powering Business Through Technology.
23 |               </h1>
24 |               <p className="mt-6 text-base leading-relaxed text-foreground/90 max-w-xl">
25 |                 BIT Spark Technologies PLC is an Ethiopian technology company focused on providing enterprise IT products, software licensing, infrastructure solutions, and professional technical services. We help organizations identify, acquire, deploy, and manage technology solutions that support their operational requirements and digital transformation objectives.
25 |               </p>
26 |               <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
27 |                 <Button href="/solutions" className="px-5 py-2.5 text-sm font-semibold bg-indigo text-white hover:bg-indigo/90">
33 |       {/* 3. Who We Are / Company Introduction */}
34 |       <section className="py-20 bg-lightgray">
35 |         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
36 |           <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
37 |             <div>
38 |               <SectionHeading
38 |                 eyebrow="About BIT Spark Technologies"
39 |                 title="A trusted enterprise technology partner"
40 |                 description="BIT Spark Technologies PLC is an Ethiopian technology company focused on providing enterprise IT products, software licensing, infrastructure solutions, and professional technical services. We help organizations identify, acquire, deploy, and manage technology solutions that support their operational requirements and digital transformation objectives."
41 |               />
42 |             </div>
43 |             <div className="space-y-4">
44 |               <p className="text-foreground/90">
45 |                 We are committed to delivering reliable, secure, and scalable technology solutions that empower businesses across Ethiopia to achieve their digital transformation goals. Our team of experts works closely with each client to understand their unique needs and provide tailored solutions that drive results.
46 |               </p>
47 |               <p className="text-foreground/90">
48 |                 With a focus on quality, innovation, and customer satisfaction, we partner with leading technology vendors to bring the best enterprise products and services to our clients. From infrastructure deployment to ongoing technical support, BIT Spark is your trusted partner in technology.
49 |               </p>
50 |             </div>
51 |           </div>
52 |         </div>
52 |       </section>
28 |                   Explore Our Solutions
27 |                 </Button>
28 |                 <Button href="/contact" variant="outline" className="px-5 py-2.5 text-sm font-semibold hover:border-midnight-blue hover:text-midnight-blue">
29 |                   Contact Our Team
30 |                 </Button>
31 |               </div>
30 |             </div>
31 | 
31 |             <div className="lg:block hidden">
32 |               <Image
33 |                 src="/enterprise-data-center.jpg"
34 |                 alt="Modern enterprise data center with server racks and networking equipment"
33 |                 className="relative h-[480px] w-full rounded-lg shadow-xl object-cover"
35 |                 sizes="(max-width: 1200px) 100vw, 1200px"
36 |                 priority
32 |               />
32 |             </div>
33 |           </div>
33 |         </div>
33 |       </section>
17 |     < >
17 |       {/* 1. Header and Navigation */}
18 |       <header className="border-b border-border bg-white/95 backdrop-blur sticky top-0 z-50">
18 |         <div className="mx-auto max-w-7xl px-4 py-4 sm:px-8">
19 |           <div className="flex items-center justify-between">
20 |             <a href="/" className="flex items-center gap-2">
21 |               <Image
22 |                 src="/bit-spark-logo.svg"
23 |                 alt="BIT Spark Technologies PLC"
24 |                 width="40"
24 |                 height="40"
25 |                 className="rounded"
25 |               />
26 |               <span className="text-xl font-bold text-midnight-blue">BIT Spark</span>
27 |             </a>
28 |             <nav className="hidden sm:flex items-center gap-8">
29 |               <a href="/" className="text-foreground/70 hover:text-midnight-blue transition-colors">
30 |                 Home
31 |               </a>
32 |               <a href="/about" className="text-foreground/70 hover:text-midnight-blue transition-colors">
33 |                 About Us
34 |               </a>
35 |               <a href="/solutions" className="text-foreground/70 hover:text-midnight-blue transition-colors">
36 |                 Solutions
37 |               </a>
38 |               <a href="/services" className="text-foreground/70 hover:text-midnight-blue transition-colors">
38 |                 Services
39 |               </a>
40 |               <a href="/industries" className="text-foreground/70 hover:text-midnight-blue transition-colors">
41 |                 Industries
42 |               </a>
<div className="flex items-center gap-4 px-4 py-3 border rounded-md bg-white hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-md bg-indigo flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 15a5 5 0 100-10 5 5 0 000 10zM10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 012-1zm0 9.66a1 1 0 01.832-.5h3.336a1 1 0 01.832.5v1a1 1 0 11-2 0v-1a1 1 0 01.832-.5h3.336a1 1 0 01.832.5v-1a1 1 0 11-2 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-midnight-blue">Infrastructure Solutions</p>
                  <p className="text-sm text-foreground/70">End-to-end infrastructure design, deployment, and management</p>
                </div>
              </div>
<div className="flex items-center gap-4 px-4 py-3 border rounded-md bg-white hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-md bg-indigo flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 15a5 5 0 100-10 5 5 0 000 10zM10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 012-1zm0 9.66a1 1 0 01.832-.5h3.336a1 1 0 01.832.5v1a1 1 0 11-2 0v-1a1 1 0 01.832-.5h3.336a1 1 0 01.832.5v-1a1 1 0 11-2 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-midnight-blue">Enterprise IT Products</p>
                  <p className="text-sm text-foreground/70">Comprehensive portfolio of enterprise hardware and software from leading vendors</p>
                </div>
              </div>
              <div className="flex items-center gap-4 px-4 py-3 border rounded-md bg-white hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-md bg-indigo flex items-center justify-center">
140 |       {/* 5. Our Solutions */}
141 |       <section className="py-20 bg-card">
142 |         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
143 |           <div className="mb-12">
145 |             <SectionHeading
145 |               eyebrow="Our Solutions"
146 |               title="Enterprise Technology Solutions"
147 |               description="We provide comprehensive technology solutions designed to meet the diverse needs of organizations across Ethiopia, from infrastructure deployment to ongoing technical support."
147 |             />
148 |           </div>
149 |           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
150 |             {productCategories.map((category) => (
151 |               <Card
152 |                 key={category.id}
153 |                 title={category.title}
154 |                 description={category.description}
155 |                 className="pb-0"
155 |               >
156 |                 <div className="flex h-12 items-center justify-between">
157 |                   <a href={\"/solutions/\" + category.id} className="text-indigo hover:text-indigo/90 transition-colors font-medium">
158 |                     Learn More
158 |                   </a>
162 |       {/* 6. Strong Company Call-to-Action */}
163 |       <section className="py-24 sm:py-32 lg:py-40 bg-midnight-blue">
164 |         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
165 |           <div className="max-w-2xl mx-auto text-center">
166 |             <p className="text-xs font-semibold uppercase tracking-widest text-indigo/60 mb-4">
167 |               Start Your Technology Journey Today
168 |             </p>
169 |             <h2 className="text-3xl font-bold text-white mb-6">
170 |               Partner with BIT Spark for Your Technology Needs
170 |             </h2>
171 |             <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
172 |               Let's discuss how we can support your organization's digital transformation with the right products, solutions, and expertise tailored to your objectives.
172 |             </p>
173 |             <div className="flex flex-col sm:flex-row gap-4 justify-center">
174 |               <Button href="/contact" variant="primary" className="px-8 py-3 text-lg font-semibold">
175 |                 Request a Quote
178 |       {/* 7. Industries and Customers We Serve */}
179 |       <section className="py-20 bg-lightgray">
180 |         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
181 |           <div className="mb-12">
182 |             <SectionHeading
182 |               eyebrow="Industries"
183 |               title="Sectors We Serve"
184 |               description="Technology solutions tailored to the unique requirements of each sector we support."
185 |               align="center"
186 |             />
187 |           </div>
188 |           <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
189 |             {industries.map((industry) => (
190 |               <div
191 |                 key={industry.title}
192 |                 className="rounded-lg border border-border bg-white p-4 text-center hover:border-indigo/30 hover:bg-indigo/5 transition-colors"
193 |               >
194 |                 <h3 className="text-sm font-semibold text-midnight-blue leading-tight">{industry.title}</h3>
195 |                 <p className="mt-1 text-xs text-foreground/70 leading-relaxed">{industry.description}</p>
196 |               </div>
197 |             ))}
198 |           </div>
199 |         </div>
199 |       </section>
175 |               </Button>
176 |               <Button href="/contact" variant="outline" className="px-8 py-3 text-lg font-semibold hover:bg-white hover:text-midnight-blue transition-colors">
176 |                 Contact Us
176 |               </Button>
177 |             </div>
178 |           </div>
178 |         </div>
178 |       </section>
156 |                 </div>
159 |               </Card>
160 |             ))}
161 |           </div>
162 |         </div>
162 |       </section>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 15a5 5 0 100-10 5 5 0 000 10zM10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 012-1zm0 9.66a1 1 0 01.832-.5h3.336a1 1 0 01.832.5v1a1 1 0 11-2 0v-1a1 1 0 01.832-.5h3.336a1 1 0 01.832.5v-1a1 1 0 11-2 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-midnight-blue">Software Licensing</p>
                  <p className="text-sm text-foreground/70">Licensed enterprise software and cloud subscriptions compliant with regulations</p>
                </div>
              </div>
43 |               <a href="/partners" className="text-foreground/70 hover:text-midnight-blue transition-colors">
44 |                 Partners
45 |               </a>
45 |               <a href="/news" className="text-foreground/70 hover:text-midnight-blue transition-colors">
46 |                 News
47 |               </a>
48 |               <a href="/contact" className="text-foreground/70 hover:text-midnight-blue transition-colors">
48 |                 Contact
49 |               </a>
50 |             </nav>
51 |             <div className="flex items-center gap-3 sm:gap-4">
52 |               <Button href="/contact" variant="outline" className="px-4 py-2.5 text-sm">
53 |                 Request a Quote
53 |               </Button>
54 |             </div>
55 |           </div>
56 |         </div>
56 |       </header>
16 | export default function Home() {
16 |   return (
10 | } from "@/lib/data";
251 |       {/* 9. Latest News and Updates */}
252 |       <section className="py-20 bg-card">
253 |         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
254 |           <div className="text-center mb-12">
254 |             <SectionHeading
254 |               eyebrow="Latest News"
255 |               title="News and Updates"
255 |               description="Recent insights, announcements, and industry updates from BIT Spark Technologies."
256 |               align="center"
256 |             />
256 |           </div>
257 |           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
258 |             <div className="rounded-lg border border-border bg-white p-6 hover:border-indigo/30 transition-colors">
259 |               <div className="h-48 rounded-lg bg-gradient-to-b from-indigo-50 to-snow-white overflow-hidden flex items-center justify-center">
260 |                 <p className="text-indigo/60">Featured</p>
261 |               </div>
262 |               <h3 className="mt-4 text-xl font-bold text-midnight-blue">Title of News Article</h3>
263 |               <p className="mt-2 text-sm text-foreground/60">
264 |                 Posted on November 6, 2024 · 2 min read
264 |               </p>
265 |               <a href="/news/article" className="mt-4 text-indigo hover:text-indigo/90 transition-colors font-medium">
266 |                 Read More
266 |               </a>
267 |             </div>
268 |             <div className="rounded-lg border border-border bg-white p-6 hover:border-indigo/30 transition-colors">
269 |               <div className="h-48 rounded-lg bg-gradient-to-b from-indigo-50 to-snow-white overflow-hidden flex items-center justify-center">
270 |                 <p className="text-indigo/60">Insights</p>
271 |               </div>
272 |               <h3 className="mt-4 text-xl font-bold text-midnight-blue">Another Update</h3>
273 |               <p className="mt-2 text-sm text-foreground/60">
274 |                 Posted on November 6, 2024 · 2 min read
274 |               </p>
275 |               <a href="/news/article" className="mt-4 text-indigo hover:text-indigo/90 transition-colors font-medium">
276 |                 Read More
276 |               </a>
277 |             </div>
287 |       {/* 10. Technology Partners */}
288 |       <section className="py-20 bg-lightgray">
289 |         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
288 |           <div className="text-center mb-12">
289 |             <SectionHeading
289 |               eyebrow="Technology Partners"
290 |               title="Trusted Technology Partnerships"
291 |               description="We partner with leading global technology vendors to deliver best-in-class solutions to our clients."
291 |               align="center"
292 |             />
292 |           </div>
293 |           <div className="grid gap-8 sm:grid-cols-6 lg:grid-cols-8">
294 |             {productCategories.slice(0, 6).map((category) => (
295 |               <div
295 |                 key={category.id}
296 |                 className="border rounded-md p-4 hover:border-indigo/30 transition-colors"
296 |               >
297 |                 <h4 className="text-sm font-medium text-midnight-blue mb-2">{category.title}</h4>
298 |                 <div className="flex flex-wrap gap-2 justify-center">
299 |                   {category.items.slice(0, 3).map((item) => (
300 |                     <span
308 |       {/* 11. Comprehensive Corporate Footer */}
309 |       <footer className="bg-midnight-blue py-20">
310 |         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
311 |           <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-5">
312 |             <div className="lg:col-span-2">
313 |               <a href="/" className="flex items-center gap-2 mb-6">
314 |                 <Image
315 |                   src="/bit-spark-logo.svg"
315 |                   alt="BIT Spark Technologies PLC"
316 |                   width="32"
316 |                   height="32"
317 |                   className="rounded"
317 |                 />
318 |                 <span className="text-white font-bold text-xl">BIT Spark</span>
319 |               </a>
320 |               <p className="text-white/60 text-sm leading-relaxed">
321 |                 BIT Spark Technologies PLC is an Ethiopian technology company focused on providing enterprise IT products, software licensing, infrastructure solutions, and professional technical services.
321 |               </p>
322 |             </div>

323 |             <div>
324 |               <h4 className="text-white mb-4">Solutions</h4>
325 |               <ul className="space-y-2">
326 |                 <li>
327 |                   <a href="/solutions/enterprise-computing" className="text-white/60 hover:text-white transition-colors text-sm">
328 |                     Enterprise Computing and Servers
330 |                 </li>
331 |                 <li>
332 |                   <a href="/solutions/enterprise-storage" className="text-white/60 hover:text-white transition-colors text-sm">
333 |                     Enterprise Storage Solutions
334 |                   </a>
335 |                 </li>
336 |                 <li>
337 |                   <a href="/solutions/data-center" className="text-white/60 hover:text-white transition-colors text-sm">
338 |                     Data Center Infrastructure
339 |                 </li>
340 |                 <li>
341 |                   <a href="/solutions/networking" className="text-white/60 hover:text-white transition-colors text-sm">
343 |                     Enterprise Networking
344 |                 </li>
347 |                 <li>
348 |                   <a href="/solutions/cloud" className="text-white/60 hover:text-white transition-colors text-sm">
349 |                     Cloud Computing and Virtualization
350 |                 </li>
351 |                 <li>
352 |                   <a href="/solutions/cybersecurity" className="text-white/60 hover:text-white transition-colors text-sm">
353 |                     Cybersecurity Solutions
354 |                 </li>
355 |                 <li>
356 |                   <a href="/solutions/software" className="text-white/60 hover:text-white transition-colors text-sm">
358 |                     Enterprise Software and Licensing
359 |                 </li>
362 |                 <li>
363 |                   <a href="/solutions/backup" className="text-white/60 hover:text-white transition-colors text-sm">
364 |                     Backup and Disaster Recovery
365 |                 </li>
366 |               </ul>
367 |             </div>

323 |             <div>
368 |             </div>

369 |             <div>
370 |               <h4 className="text-white mb-4">Industries</h4>
371 |               <ul className="space-y-2">
372 |                 <li>
373 |                   <a href="/industries/government" className="text-white/60 hover:text-white transition-colors text-sm">
374 |                     Government and Public Sector
375 |                 </li>
376 |                 <li>
377 |                   <a href="/industries/financial" className="text-white/60 hover:text-white transition-colors text-sm">
378 |                     Banking and Financial Services
379 |                 </li>
380 |                 <li>
381 |                   <a href="/industries/telecom" className="text-white/60 hover:text-white transition-colors text-sm">
382 |                     Telecommunications
383 |                 </li>
384 |                 <li>
385 |                   <a href="/industries/education" className="text-white/60 hover:text-white transition-colors text-sm">
386 |                     Education
387 |                 </li>
388 |                 <li>
389 |                   <a href="/industries/healthcare" className="text-white/60 hover:text-white transition-colors text-sm">
390 |                     Healthcare
391 |                 </li>
392 |               </ul>
393 |             </div>

394 |             <div>
395 |               <h4 className="text-white mb-4">Company</h4>
396 |               <ul className="space-y-2">
397 |                 <li>
398 |                   <a href="/about" className="text-white/60 hover:text-white transition-colors text-sm">About Us</a>
398 |                 </li>
399 |                 <li>
400 |                   <a href="/partners" className="text-white/60 hover:text-white transition-colors text-sm">Partners</a>
401 |                 </li>
402 |                 <li>
403 |                   <a href="/news" className="text-white/60 hover:text-white transition-colors text-sm">News</a>
404 |                 </li>
405 |                 <li>
406 |                   <a href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</a>
407 |                 </li>
408 |               </ul>
409 |             </div>
410 |           </div>

411 |           <div className="mt-12 pt-8 border-t border-border border-white/10">
412 |             <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
413 |               <p className="text-white/60 text-sm">2024 BIT Spark Technologies PLC. All rights reserved.</p>
414 |               <div className="flex gap-4">
415 |                 <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
416 |                   LinkedIn
417 |                 </a>
418 |                 <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
419 |                   Twitter
420 |                 </a>
421 |               </div>
422 |             </div>
423 |           </div>
424 |         </div>
424 |       </footer>
324 |               <h4 className="text-white mb-4">Services</h4>
325 |               <ul className="space-y-2">
326 |                 <li>
327 |                   <a href="/services/consultancy" className="text-white/60 hover:text-white transition-colors text-sm">
328 |                     IT Infrastructure Consultancy
330 |                 </li>
331 |                 <li>
332 |                   <a href="/services/design" className="text-white/60 hover:text-white transition-colors text-sm">
333 |                     Solution Design and Architecture
334 |                 </li>
337 |                 <li>
338 |                   <a href="/services/deployment" className="text-white/60 hover:text-white transition-colors text-sm">
339 |                     Server and Storage Deployment
340 |                 </li>
348 |                 <li>
349 |                   <a href="/services/network" className="text-white/60 hover:text-white transition-colors text-sm">
350 |                     Network Implementation
351 |                 </li>
352 |                 <li>
353 |                   <a href="/services/cloud-migration" className="text-white/60 hover:text-white transition-colors text-sm">
354 |                     Cloud Migration and Deployment
355 |                 </li>
356 |                 <li>
357 |                   <a href="/services/licensing" className="text-white/60 hover:text-white transition-colors text-sm">
358 |                     Software Licensing Advisory
359 |                 </li>
360 |                 <li>
361 |                   <a href="/services/integration" className="text-white/60 hover:text-white transition-colors text-sm">
362 |                     System Integration
363 |                 </li>
364 |                 <li>
365 |                   <a href="/services/support" className="text-white/60 hover:text-white transition-colors text-sm">
366 |                     Backup and Disaster Recovery
367 |                 </li>
367 |               </ul>
368 |             </div>
298 |                       key={item}
299 |                       className="text-xs text-foreground/60 rounded-md bg-indigo/10 px-2 py-1"
301 |                     >
302 |                       {item}
302 |                     </span>
303 |                   ))
304 |                 </div>
305 |               </div>
306 |             ))}
307 |           </div>
307 |         </div>
308 |       </section>
278 |             <div className="rounded-lg border border-border bg-white p-6 hover:border-indigo/30 transition-colors">
278 |               <div className="h-48 rounded-lg bg-gradient-to-b from-indigo-50 to-snow-white overflow-hidden flex items-center justify-center">
279 |                 <p className="text-indigo/60">Announcement</p>
280 |               </div>
281 |               <h3 className="mt-4 text-xl font-bold text-midnight-blue">Project Launch</h3>
282 |               <p className="mt-2 text-sm text-foreground/60">
283 |                 Posted on November 6, 2024 · 2 min read
283 |               </p>
284 |               <a href="/news/article" className="mt-4 text-indigo hover:text-indigo/90 transition-colors font-medium">
285 |                 Read More
285 |               </a>
286 |             </div>
287 |           </div>
287 |         </div>
287 |       </section>
199 |       {/* 8. Customer Testimonials */}
200 |       <section className="py-20">
201 |         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
201 |           <div className="text-center mb-12">
202 |             <SectionHeading
202 |               eyebrow="Customer Feedback"
203 |               title="What Our Clients Say"
203 |               description="Feedback from organizations we have partnered with on technology projects."
204 |               align="center"
205 |             />
206 |           </div>
207 |           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
208 |             <div className="rounded-lg border border-border bg-white p-6">
209 |               <p className="text-foreground/90 leading-relaxed mb-6">
210 |                 "BIT Spark Technologies helped us navigate complex software licensing requirements with professionalism and expertise. Their team was knowledgeable, responsive, and truly understood our needs."
211 |               </p>
212 |               <div className="flex items-center gap-4">
213 |                 <Image
214 |                   src="/placeholder-client.jpg"
215 |                   alt="Client company logo"
216 |                   className="w-10 h-10 rounded-full object-cover"
217 |                 />
218 |                 <div>
215 |                   <p className="font-medium text-midnight-blue">Client Organization</p>
216 |                   <p className="text-sm text-foreground/60">Organization Type</p>
217 |                 </div>
218 |               </div>
219 |             </div>
220 |             <div className="rounded-lg border border-border bg-white p-6">
221 |               <p className="text-foreground/90 leading-relaxed mb-6">
222 |                 "The enterprise infrastructure deployment was completed on time and within budget. BIT Spark's technical team demonstrated deep expertise and maintained clear communication throughout the project."
223 |               </p>
224 |               <div className="flex items-center gap-4">
225 |                 <Image
226 |                   src="/placeholder-client.jpg"
227 |                   alt="Client company logo"
228 |                   className="w-10 h-10 rounded-full object-cover"
229 |                 />
230 |                 <div>
231 |                   <p className="font-medium text-midnight-blue">Client Organization</p>
232 |                   <p className="text-sm text-foreground/60">Organization Type</p>
233 |                 </div>
234 |               </div>
235 |             </div>
236 |             <div className="rounded-lg border border-border bg-white p-6">
237 |               <p className="text-foreground/90 leading-relaxed mb-6">
238 |                 "Our cloud migration project with BIT Spark was seamless. Their planning, execution, and ongoing support exceeded our expectations. Highly recommended for enterprise technology projects."
238 |               </p>
239 |               <div className="flex items-center gap-4">
240 |                 <Image
241 |                   src="/placeholder-client.jpg"
242 |                   alt="Client company logo"
243 |                   className="w-10 h-10 rounded-full object-cover"
244 |                 />
245 |                 <div>
246 |                   <p className="font-medium text-midnight-blue">Client Organization</p>
247 |                   <p className="text-sm text-foreground/60">Organization Type</p>
248 |                 </div>
249 |               </div>
250 |             </div>
251 |           </div>
251 |         </div>
251 |       </section>

