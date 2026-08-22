import React from 'react';
import { Link } from 'react-router-dom';

export default function HowWeWork() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden border-b border-outline-variant bg-surface-container-low"
                     style={{
                         backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)",
                         backgroundSize: "20px 20px"
                     }}>
                <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-xs font-bold text-tertiary uppercase tracking-widest font-mono">System Workflow 5.0</span>
                        </div>
                        <h1 className="text-primary font-bold text-4xl md:text-5xl mb-6 leading-tight uppercase tracking-tight">
                            Operational Integrity through <span className="text-tertiary underline decoration-2 underline-offset-8">Methodology.</span>
                        </h1>
                        <p className="text-on-surface-variant max-w-xl mb-10 text-base leading-relaxed text-justify">
                            A rigorous five-phase execution framework designed for high-consequence industrial environments. From initial site scanning and BIM modeling to final engineering commissioning.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="bg-tertiary text-white font-bold px-8 py-4 uppercase text-xs tracking-widest hover:bg-tertiary-container transition-all">Request Audit</Link>
                            <Link to="/services" className="border border-outline text-on-surface font-bold px-8 py-4 uppercase text-xs tracking-widest hover:bg-surface-container transition-colors">Technical Standards</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Phase HUD Navigation (Sticky-like sub-bar) */}
            <div className="bg-white border-b border-outline-variant h-14 flex items-center">
                <div className="px-margin-desktop max-w-container-max mx-auto w-full flex justify-between items-center overflow-x-auto scrollbar-hide">
                    <div className="flex gap-10 whitespace-nowrap">
                        <a className="font-mono text-[11px] text-tertiary font-bold uppercase py-4 border-b-2 border-tertiary" href="#phase1">01. Site Survey</a>
                        <a className="font-mono text-[11px] text-on-surface-variant hover:text-primary transition-colors py-4" href="#phase2">02. BIM Design</a>
                        <a className="font-mono text-[11px] text-on-surface-variant hover:text-primary transition-colors py-4" href="#phase3">03. Documentation</a>
                        <a className="font-mono text-[11px] text-on-surface-variant hover:text-primary transition-colors py-4" href="#phase4">04. Procurement</a>
                        <a className="font-mono text-[11px] text-on-surface-variant hover:text-primary transition-colors py-4" href="#phase5">05. Installation</a>
                    </div>
                    <div className="hidden md:flex items-center gap-4 border-l border-outline-variant pl-8">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="font-mono text-[10px] text-on-surface-variant">NODE_01: SYNCED</span>
                        </div>
                        <div className="text-on-surface-variant font-mono text-[10px]">VER: 5.0.0-STABLE</div>
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
                {/* Phase 1 */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-32 pt-12" id="phase1">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-tertiary/10 border border-tertiary/20"></div>
                        <div className="relative overflow-hidden aspect-video bg-surface-container-highest border border-outline-variant">
                            <img alt="Client Requirement & Site Survey" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-2rpEZ2Hj7Ibj_lnCJ7PgWc8FvoA4tJW4rX_q1aUvdAK_O6wZifyId_Cf174TlqxjM6T-7eLRma3yML-HSoZvS1Eg1eTcu7Oto9QVgNBy7JYimyazny1pePk31aYvSl_xPPWhI05zAG-IbLCZfqah31QFjNYlwE7YtS0Hmev8LKb8FqkwHVCiVF7024V-YArVOcwGZUocmnxUN9FIiXnii0HqrvHAMRy9VNPHbVISk729T9qlIuIODQ" />
                            <div className="absolute bottom-0 right-0 bg-primary text-white px-4 py-2 font-mono text-[10px]">DATA_STREAMS: LIVE</div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-tertiary"></span>
                            <span className="text-xs font-bold text-tertiary uppercase tracking-widest font-mono">PHASE 01</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase">Client Requirement &amp; Site Survey</h2>
                        <p className="text-on-surface-variant text-sm leading-relaxed text-justify">
                            Infrastructure analysis begins with client requirements and detailed site evaluations. We deploy advanced scanning and inspection techniques to build the foundational data required for exact engineering solutions.
                        </p>
                        <div className="space-y-4 pt-4 border-t border-outline-variant/30">
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-tertiary">filter_center_focus</span>
                                <div>
                                    <h4 className="font-bold text-sm uppercase">Site Mapping</h4>
                                    <p className="text-xs text-on-surface-variant text-justify">Full-scale spatial capture and data-driven client requirement profiling.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-tertiary">fact_check</span>
                                <div>
                                    <h4 className="font-bold text-sm uppercase">Compliance Audit</h4>
                                    <p className="text-xs text-on-surface-variant text-justify">Aligning early requirements with global safety codes and industrial specifications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Phase 2 */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-32" id="phase2">
                    <div className="order-2 md:order-1 space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-tertiary"></span>
                            <span className="text-xs font-bold text-tertiary uppercase tracking-widest font-mono">PHASE 02</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase">BIM Modeling &amp; Design</h2>
                        <p className="text-on-surface-variant text-sm leading-relaxed text-justify">
                            We design using advanced Building Information Modeling (BIM) to create precision digital twins of all Mechanical, Electrical, Plumbing (MEP), and Fire Safety layouts before execution.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-6 bg-white border-l-4 border-tertiary shadow-sm border border-outline-variant/30">
                                <div className="text-primary font-bold text-2xl mb-1">0.05mm</div>
                                <div className="text-[10px] text-on-surface-variant uppercase tracking-tighter font-mono">Modeling Tolerance</div>
                            </div>
                            <div className="p-6 bg-white border-l-4 border-primary shadow-sm border border-outline-variant/30">
                                <div className="text-primary font-bold text-2xl mb-1">100%</div>
                                <div className="text-[10px] text-on-surface-variant uppercase tracking-tighter font-mono">Collision Validation</div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="border border-outline-variant bg-surface-container relative aspect-square flex items-center justify-center overflow-hidden rounded-lg">
                            <div className="absolute inset-0 opacity-20"
                                 style={{
                                     backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
                                     backgroundSize: "20px 20px"
                                 }}></div>
                            <div className="relative w-4/5 h-4/5 border border-outline border-dashed opacity-40">
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-tertiary"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-tertiary"></div>
                            </div>
                            <span className="absolute top-2 right-2 font-mono text-[9px] text-outline">REF: BIM-MODEL-40</span>
                        </div>
                    </div>
                </div>

                {/* Phase 3 */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-32" id="phase3">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-tertiary/10 border border-tertiary/20"></div>
                        <div className="relative overflow-hidden aspect-video bg-surface-container-highest border border-outline-variant">
                            <img alt="Documentation & Approval Phase" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuXbUOUCQffP5fj--QqtvpuRgWP_g_ELMK5NfRvfaMMXjUu7IVrQYoeZFegXXu2hJViGk6ZOOE-cPH-hh6it5VNhInH5-nYxigBqdWnaecgXAFc8GGsZLP20qNCxxnrlav0NwN9VH4FCQeYone2mtinu-Wsg3r2Q90ztbZpUG3STm3TecSnph_Ki-TbRSSClfupUizxnJp-OplKYqtQ-mrZ9RHwTbEM8jJz5jPB-s02SxsQKHJwg4ZTg" />
                            <div className="absolute bottom-0 right-0 bg-primary text-white px-4 py-2 font-mono text-[10px]">REVIEWS: ACTIVE</div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-tertiary"></span>
                            <span className="text-xs font-bold text-tertiary uppercase tracking-widest font-mono">PHASE 03</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase">Documentation &amp; Approval</h2>
                        <p className="text-on-surface-variant text-sm leading-relaxed text-justify">
                            Drafting comprehensive shop drawings and compiling exhaustive technical submittals for regulatory clearances and client sign-offs.
                        </p>
                        <div className="space-y-4 pt-4 border-t border-outline-variant/30">
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-tertiary">description</span>
                                <div>
                                    <h4 className="font-bold text-sm uppercase">Shop Drawings</h4>
                                    <p className="text-xs text-on-surface-variant text-justify">Detailed drafting matching strict NFPA and BNBC system requirements.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-tertiary">task</span>
                                <div>
                                    <h4 className="font-bold text-sm uppercase">Technical Submittals</h4>
                                    <p className="text-xs text-on-surface-variant text-justify">Full material catalogs, compliance sheets, and verification documentation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Phase 4 */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-32" id="phase4">
                    <div className="order-2 md:order-1 space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-tertiary"></span>
                            <span className="text-xs font-bold text-tertiary uppercase tracking-widest font-mono">PHASE 04</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase">Procurement &amp; Supply</h2>
                        <p className="text-on-surface-variant text-sm leading-relaxed text-justify">
                            Sourcing and supplying authenticated, high-performance equipment and machinery in collaboration with global solution partners (like FIREX, NAFFCO, NITTAN, Lackeby, and Waterfall Pumps).
                        </p>
                        <div className="space-y-4 pt-4 border-t border-outline-variant/30">
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-tertiary">local_shipping</span>
                                <div>
                                    <h4 className="font-bold text-sm uppercase">Partner Network Logistics</h4>
                                    <p className="text-xs text-on-surface-variant text-justify">Securing and importing certified components directly from manufacture factories.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-tertiary">verified_user</span>
                                <div>
                                    <h4 className="font-bold text-sm uppercase">Quality Inspection</h4>
                                    <p className="text-xs text-on-surface-variant text-justify">Strict validation of certifications, warranties, and physical specifications upon delivery.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="border border-outline-variant bg-surface-container relative aspect-square flex items-center justify-center overflow-hidden rounded-lg">
                            <div className="absolute inset-0 opacity-20"
                                 style={{
                                     backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
                                     backgroundSize: "20px 20px"
                                 }}></div>
                            <div className="relative w-4/5 h-4/5 border border-outline border-dashed opacity-40">
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-tertiary"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-tertiary"></div>
                            </div>
                            <span className="absolute top-2 right-2 font-mono text-[9px] text-outline">REF: SUPPLY-LOG-77</span>
                        </div>
                    </div>
                </div>

                {/* Phase 5 */}
                <div className="bg-primary text-white p-12 md:p-16 rounded-lg relative overflow-hidden" id="phase5">
                    <div className="absolute inset-0 opacity-10 pointer-events-none"
                         style={{
                             backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                             backgroundSize: "20px 20px"
                         }}></div>
                    <div className="relative z-10 flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-8 h-[2px] bg-tertiary"></span>
                                <span className="text-xs font-bold text-tertiary uppercase tracking-widest font-mono">PHASE 05</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-tight">Installation &amp; Commissioning</h2>
                            <p className="text-sm opacity-80 mb-10 leading-relaxed text-justify">
                                Deploying specialized execution teams to perform physical installations, followed by comprehensive testing, commissioning, and validation processes.
                            </p>
                            <Link to="/contact" className="bg-tertiary text-white font-bold px-10 py-4 uppercase text-xs tracking-widest hover:bg-tertiary-container transition-all">Request Commissioning</Link>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="border-t border-white/20 pt-6">
                                <h5 className="font-bold text-sm text-tertiary mb-3 uppercase tracking-wider font-mono">01. Precision Deployment</h5>
                                <p className="text-xs opacity-75 leading-relaxed text-justify">Expert mechanical, piping, and electrical assemblies under strict field supervision.</p>
                            </div>
                            <div className="border-t border-white/20 pt-6">
                                <h5 className="font-bold text-sm text-tertiary mb-3 uppercase tracking-wider font-mono">02. Safety Testing</h5>
                                <p className="text-xs opacity-75 leading-relaxed text-justify">System pressure tests, voltage verifications, and hazard simulation drills.</p>
                            </div>
                            <div className="border-t border-white/20 pt-6">
                                <h5 className="font-bold text-sm text-tertiary mb-3 uppercase tracking-wider font-mono">03. Official Commissioning</h5>
                                <p className="text-xs opacity-75 leading-relaxed text-justify">Rigorous performance auditing and sign-offs for active operation.</p>
                            </div>
                            <div className="border-t border-white/20 pt-6">
                                <h5 className="font-bold text-sm text-tertiary mb-3 uppercase tracking-wider font-mono">04. Operations Training</h5>
                                <p className="text-xs opacity-75 leading-relaxed text-justify">Instructing client facility management teams on routine controls and protocols.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
