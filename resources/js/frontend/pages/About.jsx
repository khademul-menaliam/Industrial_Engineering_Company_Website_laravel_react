import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="w-full">
            {/* Hero Banner */}
            <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden">
                <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVbKXiUA7xPQj89dhrbr0jwYhDX5VsLdm0HmboiN0rZ4hg1RvkMH0bI-J5rFE8TRFwJdRGB_XUn3gr-6XSyL23Lu571b5yjTu_-HmsPGozdp-J04pub88mCxNy7_rZQnfTcbNCy2XTGNax_kyDTlyNnrpnL8PoF2BZ6riibLJ3JDg9HaGU2yUSltzTu3hTVLcnRT8jqkwUMA0Y0GvL-OCjxpzEsVvLsQ0h5rO-HnnMso18KQDLdLgOqw')" }}></div>
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#111d23]/90 to-[#111d23]/40"></div>
                <div className="relative z-30 h-full flex flex-col items-start justify-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                    <div className="space-y-6 max-w-3xl">
                        <span className="inline-block border-l-4 border-tertiary pl-4 text-white text-xs uppercase tracking-widest bg-primary/20 backdrop-blur-sm py-1">Established 2024 | v2</span>
                        <h1 className="text-4xl md:text-6xl text-white font-bold uppercase tracking-tight leading-tight">
                            Precision Engineering <br /> <span className="text-tertiary">Industrial Safety</span>
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl font-light max-w-xl">
                            Redefining industrial standards through high-precision structural integration and world-class fire safety protocols.
                        </p>
                        <div className="pt-8 flex gap-4">
                            <Link to="/services" className="bg-tertiary text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-widest hover:bg-tertiary/90 transition-all">OUR CAPABILITIES</Link>
                            <Link to="/portfolio" className="border border-white/30 text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all">VIEW PORTFOLIO</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* History Narrative */}
            <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-surface-container-lowest p-8 md:p-20 rounded-xl shadow-sm border border-outline-variant/50 relative">
                        <div className="grid md:grid-cols-12 gap-12">
                            <div className="md:col-span-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-1 bg-tertiary"></div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-tight">The Architecture of Excellence</h2>
                                </div>
                            </div>
                            <div className="md:col-span-8 space-y-6 text-on-surface-variant text-sm leading-relaxed">
                                <p>
                                    Since our inception in early 2024, Titan Precision has operated at the critical intersection of structural integrity, digital innovation, and advanced life safety systems. Founded on the principle that modern engineering requires more than mechanical proficiency, we deliver holistic solutions for the complex technological ecosystems powering today's industrial landscape.
                                </p>
                                <p>
                                    Our specialized focus on <strong>fire safety engineering</strong> complements our core structural and mechanical competencies. By integrating fire suppression analytics and life safety protocols directly into the architectural phase, we ensure that safety is never an afterthought, but a fundamental pillar of design.
                                </p>
                                <p>
                                    Today, we are a multi-disciplinary powerhouse. Our methodology integrates real-time data analytics with traditional fabrication, ensuring every project—from municipal infrastructure to high-risk industrial plants—meets the most rigorous standards of 21st-century compliance and technical precision.
                                </p>
                            </div>
                            <div className="md:col-span-4 flex flex-col justify-center">
                                <div className="grid grid-cols-1 gap-8 border-l border-outline-variant pl-8">
                                    <div>
                                        <span className="text-tertiary font-bold text-4xl block">50+</span>
                                        <span className="text-on-surface-variant text-xs uppercase tracking-widest font-mono">Elite Engineers</span>
                                    </div>
                                    <div>
                                        <span className="text-tertiary font-bold text-4xl block">120+</span>
                                        <span className="text-on-surface-variant text-xs uppercase tracking-widest font-mono">Global Projects</span>
                                    </div>
                                    <div>
                                        <span className="text-tertiary font-bold text-4xl block">15</span>
                                        <span className="text-on-surface-variant text-xs uppercase tracking-widest font-mono">Safety Patents</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Pillars */}
            <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-t border-outline-variant/30">
                <div className="max-w-container-max mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-tertiary text-xs font-bold tracking-widest mb-4 block">CORE DIRECTIVES</span>
                        <h2 className="text-3xl font-bold text-primary uppercase">Strategic Pillars</h2>
                        <div className="w-24 h-1 bg-primary mx-auto opacity-20 mt-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Mission */}
                        <div className="pillar-card bg-surface-container-lowest p-8 rounded-lg border border-outline-variant/30 hover:shadow-xl flex flex-col h-full group transition-all duration-300">
                            <div className="mb-8 w-12 h-12 rounded bg-primary text-on-primary flex items-center justify-center group-hover:bg-tertiary transition-colors duration-300">
                                <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-4 border-b border-outline-variant/30 pb-4 group-hover:border-tertiary transition-colors duration-300">Mission</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed flex-grow">
                                To provide high-precision engineering and safety solutions that accelerate global industrial progress through technical innovation and structural excellence.
                            </p>
                        </div>
                        {/* Vision */}
                        <div className="pillar-card bg-surface-container-lowest p-8 rounded-lg border border-outline-variant/30 hover:shadow-xl flex flex-col h-full group transition-all duration-300">
                            <div className="mb-8 w-12 h-12 rounded bg-primary text-on-primary flex items-center justify-center group-hover:bg-tertiary transition-colors duration-300">
                                <span className="material-symbols-outlined text-2xl">visibility</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-4 border-b border-outline-variant/30 pb-4 group-hover:border-tertiary transition-colors duration-300">Vision</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed flex-grow">
                                To be the most trusted global partner in infrastructure engineering, redefining the limits of technical precision and safety in an evolving world.
                            </p>
                        </div>
                        {/* Values */}
                        <div className="pillar-card bg-surface-container-lowest p-8 rounded-lg border border-outline-variant/30 hover:shadow-xl flex flex-col h-full group transition-all duration-300">
                            <div className="mb-8 w-12 h-12 rounded bg-primary text-on-primary flex items-center justify-center group-hover:bg-tertiary transition-colors duration-300">
                                <span className="material-symbols-outlined text-2xl">verified</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-4 border-b border-outline-variant/30 pb-4 group-hover:border-tertiary transition-colors duration-300">Values</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed flex-grow">
                                Integrity, reliability, and precision. We hold ourselves accountable for every weld, every line of code, and every safety protocol we deploy.
                            </p>
                        </div>
                        {/* Safety Policy */}
                        <div className="pillar-card bg-surface-container-lowest p-8 rounded-lg border border-outline-variant/30 hover:shadow-xl flex flex-col h-full group transition-all duration-300">
                            <div className="mb-8 w-12 h-12 rounded bg-primary text-on-primary flex items-center justify-center group-hover:bg-tertiary transition-colors duration-300">
                                <span className="material-symbols-outlined text-2xl">local_fire_department</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-4 border-b border-outline-variant/30 pb-4 group-hover:border-tertiary transition-colors duration-300">Safety Policy</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed flex-grow">
                                Uncompromising adherence to international fire safety frameworks and a total commitment to zero-defect execution in all life safety deliverables.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
