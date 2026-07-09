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
                            <span className="text-xs font-bold text-tertiary uppercase tracking-widest font-mono">System Workflow 4.0</span>
                        </div>
                        <h1 className="text-primary font-bold text-4xl md:text-5xl mb-6 leading-tight uppercase tracking-tight">
                            Operational Integrity through <span className="text-tertiary underline decoration-2 underline-offset-8">Methodology.</span>
                        </h1>
                        <p className="text-on-surface-variant max-w-xl mb-10 text-base leading-relaxed">
                            A rigorous four-phase execution framework designed for high-consequence industrial environments. From initial architectural scanning to predictive lifecycle management.
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
                        <a className="font-mono text-[11px] text-tertiary font-bold uppercase py-4 border-b-2 border-tertiary" href="#phase1">01. Strategic Consulting</a>
                        <a className="font-mono text-[11px] text-on-surface-variant hover:text-primary transition-colors py-4" href="#phase2">02. Technical Design</a>
                        <a className="font-mono text-[11px] text-on-surface-variant hover:text-primary transition-colors py-4" href="#phase3">03. Implementation</a>
                        <a className="font-mono text-[11px] text-on-surface-variant hover:text-primary transition-colors py-4" href="#phase4">04. Maintenance</a>
                    </div>
                    <div className="hidden md:flex items-center gap-4 border-l border-outline-variant pl-8">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="font-mono text-[10px] text-on-surface-variant">NODE_01: SYNCED</span>
                        </div>
                        <div className="text-on-surface-variant font-mono text-[10px]">VER: 2.0.4-STABLE</div>
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
                            <img alt="Strategic Consulting Phase" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-2rpEZ2Hj7Ibj_lnCJ7PgWc8FvoA4tJW4rX_q1aUvdAK_O6wZifyId_Cf174TlqxjM6T-7eLRma3yML-HSoZvS1Eg1eTcu7Oto9QVgNBy7JYimyazny1pePk31aYvSl_xPPWhI05zAG-IbLCZfqah31QFjNYlwE7YtS0Hmev8LKb8FqkwHVCiVF7024V-YArVOcwGZUocmnxUN9FIiXnii0HqrvHAMRy9VNPHbVISk729T9qlIuIODQ" />
                            <div className="absolute bottom-0 right-0 bg-primary text-white px-4 py-2 font-mono text-[10px]">DATA_STREAMS: LIVE</div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-tertiary"></span>
                            <span className="text-xs font-bold text-tertiary uppercase tracking-widest font-mono">PHASE 01</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase">Strategic Consulting</h2>
                        <p className="text-on-surface-variant text-sm leading-relaxed">
                            Infrastructure mapping begins with absolute data fidelity. We deploy high-resolution LiDAR and architectural scanning to generate an baseline dataset for all subsequent engineering decisions.
                        </p>
                        <div className="space-y-4 pt-4 border-t border-outline-variant/30">
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-tertiary">filter_center_focus</span>
                                <div>
                                    <h4 className="font-bold text-sm uppercase">Point-Cloud Capture</h4>
                                    <p className="text-xs text-on-surface-variant">Full-spectrum spatial documentation with sub-millimeter accuracy.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-tertiary">fact_check</span>
                                <div>
                                    <h4 className="font-bold text-sm uppercase">Compliance Audit</h4>
                                    <p className="text-xs text-on-surface-variant">Mapping regulatory requirements against operational goals.</p>
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
                        <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase">Technical Design &amp; Simulation</h2>
                        <p className="text-on-surface-variant text-sm leading-relaxed">
                            Designing for high-fidelity performance. Our virtual twin simulations test stress distribution, thermal dynamics, and ergonomic flow before a single component is fabricated.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-6 bg-white border-l-4 border-tertiary shadow-sm border border-outline-variant/30">
                                <div className="text-primary font-bold text-2xl mb-1">0.05mm</div>
                                <div className="text-[10px] text-on-surface-variant uppercase tracking-tighter font-mono">Manufacturing Tolerance</div>
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
                            <span className="absolute top-2 right-2 font-mono text-[9px] text-outline">REF: TP-SIM-82</span>
                        </div>
                    </div>
                </div>

                {/* Phase 3 */}
                <div className="mb-32" id="phase3">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-tertiary"></span>
                                <span className="text-xs font-bold text-tertiary uppercase tracking-widest font-mono">PHASE 03</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase">Implementation &amp; Assembly</h2>
                        </div>
                        <p className="text-on-surface-variant text-sm max-w-md leading-relaxed">
                            Physical integration via AR-guided protocols. Our deployment teams use precision HUDs to ensure site-accurate assembly and zero-variance installation.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-12 gap-6 h-[500px]">
                        <div className="md:col-span-8 relative overflow-hidden rounded-lg border border-outline-variant">
                            <img alt="Implementation" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuXbUOUCQffP5fj--QqtvpuRgWP_g_ELMK5NfRvfaMMXjUu7IVrQYoeZFegXXu2hJViGk6ZOOE-cPH-hh6it5VNhInH5-nYxigBqdWnaecgXAFc8GGsZLP20qNCxxnrlav0NwN9VH4FCQeYone2mtinu-Wsg3r2Q90ztbZpUG3STm3TecSnph_Ki-TbRSSClfupUizxnJp-OplKYqtQ-mrZ9RHwTbEM8jJz5jPB-s02SxsQKHJwg4ZTg" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <h3 className="font-bold text-xl mb-1 uppercase tracking-tight">Automated Systems Integration</h3>
                                <p className="text-sm opacity-80 max-w-sm">Robotic calibration and real-time sensor verification on-site.</p>
                            </div>
                        </div>
                        <div className="md:col-span-4 grid grid-rows-2 gap-6">
                            <div className="bg-primary p-8 text-white flex flex-col justify-between rounded-lg">
                                <span className="material-symbols-outlined text-4xl text-tertiary">construction</span>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 uppercase tracking-tight">Field Logistics</h4>
                                    <p className="text-xs opacity-75 leading-relaxed">Rapid-deployment specialist teams for hazardous environments.</p>
                                </div>
                            </div>
                            <div className="bg-surface-container-high border border-outline-variant p-8 flex flex-col justify-between rounded-lg">
                                <span className="material-symbols-outlined text-4xl text-primary">verified</span>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 uppercase tracking-tight">Quality Control</h4>
                                    <p className="text-xs text-on-surface-variant leading-relaxed">Triple-redundant verification of all tolerance thresholds.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Phase 4 */}
                <div className="bg-primary text-white p-12 md:p-16 rounded-lg relative overflow-hidden" id="phase4">
                    <div className="absolute inset-0 opacity-10 pointer-events-none"
                         style={{
                             backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                             backgroundSize: "20px 20px"
                         }}></div>
                    <div className="relative z-10 flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-8 h-[2px] bg-tertiary"></span>
                                <span className="text-xs font-bold text-tertiary uppercase tracking-widest font-mono">PHASE 04</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-tight">Lifecycle Maintenance</h2>
                            <p className="text-sm opacity-80 mb-10 leading-relaxed">
                                Ongoing structural health monitoring and predictive failure analysis. We provide persistent oversight to maintain industrial uptime at 99.99%.
                            </p>
                            <Link to="/contact" className="bg-tertiary text-white font-bold px-10 py-4 uppercase text-xs tracking-widest hover:bg-tertiary-container transition-all">SLA Specifications</Link>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="border-t border-white/20 pt-6">
                                <h5 className="font-bold text-sm text-tertiary mb-3 uppercase tracking-wider font-mono">01. Predictive Diagnostics</h5>
                                <p className="text-xs opacity-75 leading-relaxed">IoT sensor arrays monitoring vibration and thermal signatures 24/7.</p>
                            </div>
                            <div className="border-t border-white/20 pt-6">
                                <h5 className="font-bold text-sm text-tertiary mb-3 uppercase tracking-wider font-mono">02. Response Protocols</h5>
                                <p className="text-xs opacity-75 leading-relaxed">Four-hour emergency mobilization for critical infrastructure faults.</p>
                            </div>
                            <div className="border-t border-white/20 pt-6">
                                <h5 className="font-bold text-sm text-tertiary mb-3 uppercase tracking-wider font-mono">03. Wear Analytics</h5>
                                <p className="text-xs opacity-75 leading-relaxed">Machine learning models predicting component fatigue based on load data.</p>
                            </div>
                            <div className="border-t border-white/20 pt-6">
                                <h5 className="font-bold text-sm text-tertiary mb-3 uppercase tracking-wider font-mono">04. System Hardening</h5>
                                <p className="text-xs opacity-75 leading-relaxed">Iterative security patches and firmware updates for all logic controllers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
