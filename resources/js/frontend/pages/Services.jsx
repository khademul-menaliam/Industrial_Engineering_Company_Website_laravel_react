import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <div className="w-full">
            {/* HERO / INTRO */}
            <section className="pt-12 pb-8 px-margin-desktop max-w-container-max mx-auto">
                <div className="border-l-4 border-tertiary pl-6">
                    <h2 className="text-xs font-bold text-tertiary uppercase tracking-[0.2em] mb-2">Operational Hierarchy</h2>
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 uppercase tracking-tight">Precision Engineering &amp; Industrial Solutions</h1>
                    <p className="text-base text-secondary max-w-3xl leading-relaxed">
                        Deploying elite technical expertise across consulting, project execution, and lifecycle maintenance for mission-critical infrastructure.
                    </p>
                </div>
            </section>

            {/* CATEGORY 1: CONSULTING */}
            <section className="py-10 px-margin-desktop max-w-container-max mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-xs font-bold text-primary uppercase tracking-[0.3em] flex-shrink-0">01. Consulting Services</h2>
                    <div className="h-px bg-outline-variant flex-grow"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* MEP */}
                    <div className="bg-white p-8 rounded-lg border border-outline-variant/30 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                        <div>
                            <div className="w-10 h-10 bg-primary/5 text-primary rounded flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-2xl">architecture</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-2 uppercase">MEP Design</h3>
                            <p className="text-sm text-secondary leading-relaxed">Mechanical, Electrical, and Plumbing engineering frameworks for complex industrial facilities.</p>
                        </div>
                    </div>
                    {/* ANSYS */}
                    <div className="bg-white p-8 rounded-lg border border-outline-variant/30 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                        <div>
                            <div className="w-10 h-10 bg-primary/5 text-primary rounded flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-2 uppercase">ANSYS Simulation</h3>
                            <p className="text-sm text-secondary leading-relaxed">High-fidelity computational fluid dynamics and structural analysis for optimized system performance.</p>
                        </div>
                    </div>
                    {/* Industrial Pump System */}
                    <div className="bg-white p-8 rounded-lg border border-outline-variant/30 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                        <div>
                            <div className="w-10 h-10 bg-primary/5 text-primary rounded flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-2xl">water_damage</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-2 uppercase">Industrial Pump Systems</h3>
                            <p className="text-sm text-secondary leading-relaxed">Strategic consulting on fluid transport logistics and high-capacity pumping architectures.</p>
                        </div>
                    </div>
                    {/* Flatbed Gain Dryer */}
                    <div className="bg-white p-8 rounded-lg border border-outline-variant/30 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                        <div>
                            <div className="w-10 h-10 bg-primary/5 text-primary rounded flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-2xl">dry</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-2 uppercase">Gain Dryer Systems</h3>
                            <p className="text-sm text-secondary leading-relaxed">Engineering solutions for Flatbed Gain dryer systems tailored for agricultural and industrial processing.</p>
                        </div>
                    </div>
                    {/* Natural Ventilation */}
                    <div className="bg-white p-8 rounded-lg border border-outline-variant/30 hover:shadow-lg transition-all duration-300 lg:col-span-2">
                        <div className="flex flex-col md:flex-row md:items-center gap-8 h-full">
                            <div className="w-12 h-12 bg-primary/5 text-primary rounded flex-shrink-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-2xl">air</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-primary mb-2 uppercase">Natural Ventilation Systems</h3>
                                <p className="text-sm text-secondary leading-relaxed">Passive airflow engineering and thermal chimney design for sustainable climate control solutions in high-scale environments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CATEGORY 2: PROJECTS (DESIGN, SUPPLY & INSTALLATION) */}
            <section className="py-16 bg-white border-y border-outline-variant/30">
                <div className="px-margin-desktop max-w-container-max mx-auto">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-xs font-bold text-tertiary uppercase tracking-[0.3em] flex-shrink-0">02. Projects (DSI)</h2>
                        <div className="h-px bg-outline-variant/30 flex-grow"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        {/* Featured: Fire Protection */}
                        <div className="md:col-span-7 group relative rounded-lg overflow-hidden shadow-sm border border-outline-variant/30 aspect-[16/9] md:aspect-auto">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAiumoityh4wX-F5Lhjm6F8eqVBGedPxD296hj0_nx-EAAOA15TH4rZW3e9oMOeozoXpZvoHJIfpvexZRUFj1gWmXhGR4GrxA0WbxTCTG3kFP5HWhNqzzTRj7z5ACb9TK0aBFSif2TD1XkxwJNrm3ZNUpoWS8fPFH1JetmXn-1XkBWDwMWU1YbXxXUyjQ1FOEXRjmS7eX_vH4mRKxkqYe5cSF4XQcTZ89xaz-rlm1t-43UuufXe-goMIw')" }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 z-10">
                                <span className="bg-tertiary text-white px-2 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest mb-3 inline-block font-mono">Tactical Asset</span>
                                <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">Fire Protection &amp; Detection</h3>
                                <p className="text-gray-300 text-sm max-w-md leading-relaxed">Full-cycle design, supply, and installation of advanced suppression and intelligence detection loops.</p>
                            </div>
                        </div>
                        {/* Right Stack */}
                        <div className="md:col-span-5 space-y-4">
                            {/* HVAC */}
                            <div className="bg-background p-6 rounded-lg border border-outline-variant/30 group hover:border-tertiary transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary mt-1">hvac</span>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1 uppercase text-sm">HVAC Systems</h4>
                                        <p className="text-xs text-secondary leading-relaxed">Integrated heating, cooling, and air quality infrastructure for high-density environments.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Industrial Pipe Work */}
                            <div className="bg-background p-6 rounded-lg border border-outline-variant/30 group hover:border-tertiary transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary mt-1">plumbing</span>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1 uppercase text-sm">All Kinds of Industrial Pipe Work</h4>
                                        <p className="text-xs text-secondary leading-relaxed">Precision fabrication and installation of chemical, water, and waste fluid networks.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Boiler & Steam */}
                            <div className="bg-background p-6 rounded-lg border border-outline-variant/30 group hover:border-tertiary transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary mt-1">factory</span>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1 uppercase text-sm">Boiler &amp; Steam Line Solutions</h4>
                                        <p className="text-xs text-secondary leading-relaxed">Heavy-duty thermal energy generation and distribution systems for process manufacturing.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Compressed Air */}
                            <div className="bg-background p-6 rounded-lg border border-outline-variant/30 group hover:border-tertiary transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary mt-1">airwave</span>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1 uppercase text-sm">Compressed Air Systems</h4>
                                        <p className="text-xs text-secondary leading-relaxed">Reliable pneumatic power distribution with high-efficiency filtration and compression units.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CATEGORY 3: MAINTENANCE & SERVICES */}
            <section className="py-16 px-margin-desktop max-w-container-max mx-auto">
                <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-xs font-bold text-secondary uppercase tracking-[0.3em] flex-shrink-0">03. Maintenance &amp; Lifecycle</h2>
                    <div className="h-px bg-outline-variant/30 flex-grow"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Side Panel */}
                    <div className="lg:col-span-4 bg-primary p-8 rounded-lg text-white shadow-lg relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <span className="material-symbols-outlined text-[120px]">settings_suggest</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Zero-Downtime Maintenance</h3>
                            <p className="text-gray-300 text-sm mb-10 leading-relaxed">Our maintenance protocols ensure maximum operational uptime through predictive diagnostics and rapid response engineering.</p>
                        </div>
                        <Link to="/contact" className="w-full text-center bg-tertiary text-white py-3.5 rounded-sm font-bold text-[11px] uppercase tracking-widest hover:brightness-110 transition-all">Schedule Assessment</Link>
                    </div>
                    {/* Main Grid */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-surface p-6 rounded-lg border border-outline-variant/30 flex items-center gap-4 hover:border-primary/20 transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-tertiary text-3xl">water_pump</span>
                            <span className="text-[11px] font-bold uppercase tracking-widest text-primary font-mono">Industrial Pump Maintenance</span>
                        </div>
                        <div className="bg-surface p-6 rounded-lg border border-outline-variant/30 flex items-center gap-4 hover:border-primary/20 transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-tertiary text-3xl">electric_bolt</span>
                            <span className="text-[11px] font-bold uppercase tracking-widest text-primary font-mono">Electric Motors</span>
                        </div>
                        <div className="bg-surface p-6 rounded-lg border border-outline-variant/30 flex items-center gap-4 hover:border-primary/20 transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-tertiary text-3xl">engineering</span>
                            <span className="text-[11px] font-bold uppercase tracking-widest text-primary font-mono">Diesel Engine Service</span>
                        </div>
                        <div className="bg-surface p-6 rounded-lg border border-outline-variant/30 flex items-center gap-4 hover:border-primary/20 transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-tertiary text-3xl">compress</span>
                            <span className="text-[11px] font-bold uppercase tracking-widest text-primary font-mono">Compressor Calibration</span>
                        </div>
                        <div className="bg-surface p-6 rounded-lg border border-outline-variant/30 flex items-center gap-4 hover:border-primary/20 transition-colors shadow-sm md:col-span-2">
                            <span className="material-symbols-outlined text-tertiary text-3xl">bolt</span>
                            <span className="text-[11px] font-bold uppercase tracking-widest text-primary font-mono">Generator Support &amp; Diagnostics</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-12 px-margin-desktop max-w-container-max mx-auto mb-16">
                <div className="bg-white p-10 rounded-lg border border-outline-variant/30 shadow-xl flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-2 uppercase tracking-tight">Initiate Tactical Protocol</h3>
                        <p className="text-secondary text-sm">Deploy our rapid-response engineering team to evaluate your facility's integrity.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact" className="bg-tertiary text-white px-8 py-4 rounded-sm font-bold text-[11px] uppercase tracking-widest shadow-md hover:brightness-110 transition-all">Request Site Audit</Link>
                        <Link to="/contact" className="border-2 border-primary text-primary px-8 py-4 rounded-sm font-bold text-[11px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">Contact HQ</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
