import React from 'react';
import { Link } from 'react-router-dom';

export default function HowWeWork() {
    return (
        <div className="w-full bg-background text-on-surface">
            {/* Hero Section */}
            <section
                className="relative py-24 overflow-hidden border-b border-outline-variant/30 bg-surface-container-low"
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                }}
            >
                <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-xs font-bold text-tertiary uppercase tracking-widest font-mono">System Workflow 5.0</span>
                        </div>
                        <h1 className="text-primary font-bold text-4xl md:text-5xl mb-6 leading-tight uppercase tracking-tight">
                            Operational Integrity through <span className="text-tertiary underline decoration-2 underline-offset-8">Methodology.</span>
                        </h1>
                        <p className="text-secondary max-w-xl mb-10 text-base leading-relaxed text-justify">
                            A rigorous five-phase execution framework designed for high-consequence industrial environments. From initial site scanning and BIM modeling to final engineering commissioning.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="bg-tertiary text-white font-mono font-bold text-xs px-8 py-4 rounded uppercase tracking-widest hover:bg-opacity-90 transition-colors shadow-none md:shadow-sm"
                            >
                                Request Audit
                            </Link>
                            <Link
                                to="/services"
                                className="border border-primary text-primary hover:bg-surface-container font-mono font-bold text-xs px-6 py-3 rounded uppercase tracking-wider transition-all inline-flex items-center"
                            >
                                Technical Standards
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Phase HUD Navigation (Sticky sub-bar) */}
            <div className="bg-white border-b border-outline-variant/30 sticky top-0 z-20 shadow-none md:shadow-xs">
                <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full flex justify-between items-center overflow-x-auto scrollbar-hide">
                    <div className="flex gap-8 md:gap-10 whitespace-nowrap">
                        <a className="font-mono text-xs text-tertiary font-bold uppercase py-4 border-b-2 border-tertiary tracking-wider" href="#phase1">01. Site Survey</a>
                        <a className="font-mono text-xs text-secondary hover:text-primary transition-colors py-4 uppercase font-bold tracking-wider" href="#phase2">02. BIM Design</a>
                        <a className="font-mono text-xs text-secondary hover:text-primary transition-colors py-4 uppercase font-bold tracking-wider" href="#phase3">03. Documentation</a>
                        <a className="font-mono text-xs text-secondary hover:text-primary transition-colors py-4 uppercase font-bold tracking-wider" href="#phase4">04. Procurement</a>
                        <a className="font-mono text-xs text-secondary hover:text-primary transition-colors py-4 uppercase font-bold tracking-wider" href="#phase5">05. Installation</a>
                    </div>
                    <div className="hidden md:flex items-center gap-4 border-l border-outline-variant/30 pl-8">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="font-mono text-[10px] text-secondary font-bold">NODE_01: SYNCED</span>
                        </div>
                        <div className="text-secondary font-mono text-[10px] font-bold">VER: 5.0.0-STABLE</div>
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <main className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                {/* Phase 1 */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24 md:mb-32 pt-6" id="phase1">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-tertiary/10 border border-tertiary/20 rounded"></div>
                        <div className="relative overflow-hidden aspect-video bg-surface-container-low border border-outline-variant/30 rounded">
                            <img alt="Client Requirement & Site Survey" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-2rpEZ2Hj7Ibj_lnCJ7PgWc8FvoA4tJW4rX_q1aUvdAK_O6wZifyId_Cf174TlqxjM6T-7eLRma3yML-HSoZvS1Eg1eTcu7Oto9QVgNBy7JYimyazny1pePk31aYvSl_xPPWhI05zAG-IbLCZfqah31QFjNYlwE7YtS0Hmev8LKb8FqkwHVCiVF7024V-YArVOcwGZUocmnxUN9FIiXnii0HqrvHAMRy9VNPHbVISk729T9qlIuIODQ" />
                            <div className="absolute bottom-0 right-0 bg-primary text-white px-3 py-1 font-mono text-[10px] font-bold rounded">DATA_STREAMS: LIVE</div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-tertiary"></span>
                            <span className="text-xs font-bold text-tertiary uppercase tracking-widest font-mono">PHASE 01</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-tight">Client Requirement &amp; Site Survey</h2>
                        <p className="text-secondary text-sm leading-relaxed text-justify">
                            Infrastructure analysis begins with client requirements and detailed site evaluations. We deploy advanced scanning and inspection techniques to build the foundational data required for exact engineering solutions.
                        </p>
                        <div className="space-y-4 pt-4 border-t border-outline-variant/30">
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-tertiary text-2xl shrink-0">filter_center_focus</span>
                                <div>
                                    <h3 className="font-bold text-sm text-primary uppercase tracking-tight">Site Mapping</h3>
                                    <p className="text-xs text-secondary text-justify leading-relaxed">Full-scale spatial capture and data-driven client requirement profiling.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-tertiary text-2xl shrink-0">fact_check</span>
                                <div>
                                    <h3 className="font-bold text-sm text-primary uppercase tracking-tight">Compliance Audit</h3>
                                    <p className="text-xs text-secondary text-justify leading-relaxed">Aligning early requirements with global safety codes and industrial specifications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Phase 2 */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24 md:mb-32" id="phase2">
                    <div className="order-2 md:order-1 space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-tertiary"></span>
                            <span className="text-xs font-bold text-tertiary uppercase tracking-widest font-mono">PHASE 02</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-tight">BIM Modeling &amp; Design</h2>
                        <p className="text-secondary text-sm leading-relaxed text-justify">
                            We design using advanced Building Information Modeling (BIM) to create precision digital twins of all Mechanical, Electrical, Plumbing (MEP), and Fire Safety layouts before execution.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-6 bg-white rounded border-l-4 border-tertiary shadow-none md:shadow-sm border border-outline-variant/30">
                                <div className="text-primary font-bold font-mono text-2xl mb-1">0.05mm</div>
                                <div className="text-[10px] text-secondary uppercase tracking-wider font-mono font-bold">Modeling Tolerance</div>
                            </div>
                            <div className="p-6 bg-white rounded border-l-4 border-primary shadow-none md:shadow-sm border border-outline-variant/30">
                                <div className="text-primary font-bold font-mono text-2xl mb-1">100%</div>
                                <div className="text-[10px] text-secondary uppercase tracking-wider font-mono font-bold">Collision Validation</div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="border border-outline-variant/30 bg-surface-container-low relative aspect-square flex items-center justify-center overflow-hidden rounded shadow-none md:shadow-sm">
                            <div
                                className="absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
                                    backgroundSize: "20px 20px"
                                }}
                            ></div>
                            <div className="relative w-4/5 h-4/5 border border-outline-variant border-dashed opacity-40">
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-tertiary"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-tertiary"></div>
                            </div>
                            <span className="absolute top-3 right-3 font-mono text-[9px] text-secondary font-bold">REF: BIM-MODEL-40</span>
                        </div>
                    </div>
                </div>

                {/* Phase 3 */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24 md:mb-32" id="phase3">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-tertiary/10 border border-tertiary/20 rounded"></div>
                        <div className="relative overflow-hidden aspect-video bg-surface-container-low border border-outline-variant/30 rounded">
                            <img alt="Documentation & Approval Phase" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuXbUOUCQffP5fj--QqtvpuRgWP_g_ELMK5NfRvfaMMXjUu7IVrQYoeZFegXXu2hJViGk6ZOOE-cPH-hh6it5VNhInH5-nYxigBqdWnaecgXAFc8GGsZLP20qNCxxnrlav0NwN9VH4FCQeYone2mtinu-Wsg3r2Q90ztbZpUG3STm3TecSnph_Ki-TbRSSClfupUizxnJp-OplKYqtQ-mrZ9RHwTbEM8jJz5jPB-s02SxsQKHJwg4ZTg" />
                            <div className="absolute bottom-0 right-0 bg-primary text-white px-3 py-1 font-mono text-[10px] font-bold rounded">REVIEWS: ACTIVE</div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-tertiary"></span>
                            <span className="text-xs font-bold text-tertiary uppercase tracking-widest font-mono">PHASE 03</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-tight">Documentation &amp; Approval</h2>
                        <p className="text-secondary text-sm leading-relaxed text-justify">
                            Drafting comprehensive shop drawings and compiling exhaustive technical submittals for regulatory clearances and client sign-offs.
                        </p>
                        <div className="space-y-4 pt-4 border-t border-outline-variant/30">
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-tertiary text-2xl shrink-0">description</span>
                                <div>
                                    <h3 className="font-bold text-sm text-primary uppercase tracking-tight">Shop Drawings</h3>
                                    <p className="text-xs text-secondary text-justify leading-relaxed">Detailed drafting matching strict NFPA and BNBC system requirements.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-tertiary text-2xl shrink-0">task</span>
                                <div>
                                    <h3 className="font-bold text-sm text-primary uppercase tracking-tight">Technical Submittals</h3>
                                    <p className="text-xs text-secondary text-justify leading-relaxed">Full material catalogs, compliance sheets, and verification documentation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Phase 4 */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24 md:mb-32" id="phase4">
                    <div className="order-2 md:order-1 space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-tertiary"></span>
                            <span className="text-xs font-bold text-tertiary uppercase tracking-widest font-mono">PHASE 04</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-tight">Procurement &amp; Supply</h2>
                        <p className="text-secondary text-sm leading-relaxed text-justify">
                            Sourcing and supplying authenticated, high-performance equipment and machinery in collaboration with global solution partners (like FIREX, NAFFCO, NITTAN, Lackeby, and Waterfall Pumps).
                        </p>
                        <div className="space-y-4 pt-4 border-t border-outline-variant/30">
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-tertiary text-2xl shrink-0">local_shipping</span>
                                <div>
                                    <h3 className="font-bold text-sm text-primary uppercase tracking-tight">Partner Network Logistics</h3>
                                    <p className="text-xs text-secondary text-justify leading-relaxed">Securing and importing certified components directly from manufacture factories.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-tertiary text-2xl shrink-0">verified_user</span>
                                <div>
                                    <h3 className="font-bold text-sm text-primary uppercase tracking-tight">Quality Inspection</h3>
                                    <p className="text-xs text-secondary text-justify leading-relaxed">Strict validation of certifications, warranties, and physical specifications upon delivery.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="border border-outline-variant/30 bg-surface-container-low relative aspect-square flex items-center justify-center overflow-hidden rounded shadow-none md:shadow-sm">
                            <div
                                className="absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
                                    backgroundSize: "20px 20px"
                                }}
                            ></div>
                            <div className="relative w-4/5 h-4/5 border border-outline-variant border-dashed opacity-40">
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-tertiary"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-tertiary"></div>
                            </div>
                            <span className="absolute top-3 right-3 font-mono text-[9px] text-secondary font-bold">REF: SUPPLY-LOG-77</span>
                        </div>
                    </div>
                </div>

                {/* Phase 5 */}
                <div className="bg-primary text-white p-8 md:p-12 lg:p-16 rounded relative overflow-hidden shadow-none md:shadow-sm border border-outline-variant/30" id="phase5">
                    <div
                        className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{
                            backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                            backgroundSize: "20px 20px"
                        }}
                    ></div>
                    <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16">
                        <div className="lg:w-1/3">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-8 h-[2px] bg-tertiary"></span>
                                <span className="text-xs font-bold text-tertiary uppercase tracking-widest font-mono">PHASE 05</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight text-white">Installation &amp; Commissioning</h2>
                            <p className="text-sm text-white/80 mb-10 leading-relaxed text-justify">
                                Deploying specialized execution teams to perform physical installations, followed by comprehensive testing, commissioning, and validation processes.
                            </p>
                            <Link
                                to="/contact"
                                className="bg-tertiary text-white font-mono font-bold text-xs px-8 py-4 rounded uppercase tracking-widest hover:bg-opacity-90 transition-colors shadow-none md:shadow-sm inline-block"
                            >
                                Request Commissioning
                            </Link>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="border-t border-white/20 pt-6">
                                <h3 className="font-bold text-sm text-tertiary mb-3 uppercase tracking-wider font-mono">01. Precision Deployment</h3>
                                <p className="text-xs text-white/80 leading-relaxed text-justify">Expert mechanical, piping, and electrical assemblies under strict field supervision.</p>
                            </div>
                            <div className="border-t border-white/20 pt-6">
                                <h3 className="font-bold text-sm text-tertiary mb-3 uppercase tracking-wider font-mono">02. Safety Testing</h3>
                                <p className="text-xs text-white/80 leading-relaxed text-justify">System pressure tests, voltage verifications, and hazard simulation drills.</p>
                            </div>
                            <div className="border-t border-white/20 pt-6">
                                <h3 className="font-bold text-sm text-tertiary mb-3 uppercase tracking-wider font-mono">03. Official Commissioning</h3>
                                <p className="text-xs text-white/80 leading-relaxed text-justify">Rigorous performance auditing and sign-offs for active operation.</p>
                            </div>
                            <div className="border-t border-white/20 pt-6">
                                <h3 className="font-bold text-sm text-tertiary mb-3 uppercase tracking-wider font-mono">04. Operations Training</h3>
                                <p className="text-xs text-white/80 leading-relaxed text-justify">Instructing client facility management teams on routine controls and protocols.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
