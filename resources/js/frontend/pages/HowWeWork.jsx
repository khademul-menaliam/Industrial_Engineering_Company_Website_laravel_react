import React from 'react';
import { Link } from 'react-router-dom';

export default function HowWeWork() {
    return (
        <div className="w-full">
            
{/* Hero Section with Background Shader */}
<section className="relative h-[614px] flex items-center overflow-hidden border-b border-outline-variant">

<div className="absolute inset-0 ar-grid pointer-events-none"></div>
<div className="relative z-10 px-margin-desktop max-w-7xl mx-auto w-full">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-6">
<div className="h-[2px] w-12 bg-secondary-container"></div>
<span className="font-label-caps text-label-caps text-secondary-container uppercase">Operational Framework</span>
</div>
<h1 className="font-display-lg text-display-lg md:text-7xl mb-6 text-on-background leading-tight">
                        Engineered for <span className="text-secondary-container">Certainty.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-8">
                        The Titan Precision execution model combines high-fidelity AR visualization with industrial-grade engineering to deliver mission-critical infrastructure.
                    </p>
<div className="flex gap-4">
<button className="bg-secondary-container text-black font-bold px-8 py-4 uppercase font-label-caps tracking-widest border border-secondary-container">Start Consultation</button>
<button className="border border-outline-variant text-on-surface font-bold px-8 py-4 uppercase font-label-caps tracking-widest hover:bg-surface-container transition-colors">Technical Specs</button>
</div>
</div>
</div>
</section>
{/* Phase Navigation (Sticky AR HUD Bar) */}
<div className="sticky top-20 z-40 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant h-16 flex items-center">
<div className="px-margin-desktop max-w-7xl mx-auto w-full flex justify-between items-center overflow-x-auto scrollbar-hide">
<div className="flex gap-12 whitespace-nowrap">
<a className="font-label-caps text-label-caps text-secondary-container border-b-2 border-secondary-container pb-1" href="#phase1">01. Strategic Consulting</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#phase2">02. Technical Design</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#phase3">03. Implementation</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#phase4">04. Maintenance</a>
</div>
<div className="hidden md:flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">settings_input_antenna</span>
<span className="font-mono-data text-mono-data">SIGNAL: OPTIMAL</span>
</div>
</div>
</div>
{/* Content Grid */}
<section className="py-24 px-margin-desktop max-w-7xl mx-auto space-y-32">
{/* Phase 1 */}
<div className="grid md:grid-cols-2 gap-gutter items-center" id="phase1">
<div className="relative group">
<div className="absolute -inset-4 border border-outline-variant/30 group-hover:border-secondary-container/50 transition-all duration-500"></div>
<div className="relative overflow-hidden aspect-video bg-indigo-900/20 border border-indigo-700/50 p-4">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-2rpEZ2Hj7Ibj_lnCJ7PgWc8FvoA4tJW4rX_q1aUvdAK_O6wZifyId_Cf174TlqxjM6T-7eLRma3yML-HSoZvS1Eg1eTcu7Oto9QVgNBy7JYimyazny1pePk31aYvSl_xPPWhI05zAG-IbLCZfqah31QFjNYlwE7YtS0Hmev8LKb8FqkwHVCiVF7024V-YArVOcwGZUocmnxUN9FIiXnii0HqrvHAMRy9VNPHbVISk729T9qlIuIODQ"/>
<div className="absolute top-8 left-8 bg-black/60 backdrop-blur-md px-4 py-2 border-l-4 border-secondary-container">
<span className="font-mono-data text-mono-data text-white">ANALYSIS_MODE: ACTIVE</span>
</div>
</div>
<div className="absolute -bottom-4 -right-4 w-32 h-32 border border-secondary-container/20 -z-10 bg-indigo-950"></div>
</div>
<div className="space-y-6">
<div className="inline-block px-3 py-1 bg-primary-container border border-primary text-primary font-label-caps text-label-caps">Phase 01</div>
<h2 className="font-headline-md text-headline-md text-4xl font-bold">Strategic Consulting</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
                        Every project begins with a deep-dive technical assessment. We map your current infrastructure against future operational requirements, identifying bottlenecks before they impact your ROI.
                    </p>
<ul className="space-y-4 font-body-md text-body-md">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary-container mt-1">check_circle</span>
<span>On-site architectural scanning and point-cloud data capture.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary-container mt-1">check_circle</span>
<span>Operational workflow analysis for optimized spatial throughput.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary-container mt-1">check_circle</span>
<span>Risk mitigation and regulatory compliance auditing (ISO/OSHA).</span>
</li>
</ul>
</div>
</div>
{/* Phase 2 */}
<div className="grid md:grid-cols-2 gap-gutter items-center" id="phase2">
<div className="order-2 md:order-1 space-y-6">
<div className="inline-block px-3 py-1 bg-primary-container border border-primary text-primary font-label-caps text-label-caps">Phase 02</div>
<h2 className="font-headline-md text-headline-md text-4xl font-bold">Technical Design &amp; Simulation</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
                        Our engineers transition from concept to digital twin. Using proprietary AR modeling, we simulate stresses, load-bearing capacities, and ergonomic flows in a virtual 1:1 environment.
                    </p>
<div className="grid grid-cols-2 gap-4 mt-8">
<div className="p-4 bg-indigo-950 border border-indigo-700/50">
<div className="text-secondary-container font-bold text-2xl mb-1">0.05mm</div>
<div className="font-label-caps text-[10px] text-on-surface-variant uppercase">Design Tolerance</div>
</div>
<div className="p-4 bg-indigo-950 border border-indigo-700/50">
<div className="text-secondary-container font-bold text-2xl mb-1">100%</div>
<div className="font-label-caps text-[10px] text-on-surface-variant uppercase">Collision Check</div>
</div>
</div>
</div>
<div className="order-1 md:order-2 relative">
<div className="aspect-square bg-indigo-900/10 border border-indigo-700 p-8 flex items-center justify-center relative crosshair crosshair-tl crosshair-tr crosshair-bl crosshair-br">

<div className="absolute bottom-4 right-4 font-mono-data text-[10px] text-on-surface-variant">COORD_SYSTEM: WGS84</div>
</div>
</div>
</div>
{/* Phase 3 Bento Grid */}
<div className="space-y-8" id="phase3">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<div className="inline-block px-3 py-1 bg-primary-container border border-primary text-primary font-label-caps text-label-caps mb-4">Phase 03</div>
<h2 className="font-headline-md text-headline-md text-4xl font-bold">Implementation &amp; Assembly</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                        The physical transition. Our crews use AR-guided assembly protocols to ensure zero-variance installation on-site, regardless of environment complexity.
                    </p>
</div>
<div className="grid md:grid-cols-12 grid-rows-2 gap-6 h-[600px]">
<div className="md:col-span-8 row-span-2 relative overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuXbUOUCQffP5fj--QqtvpuRgWP_g_ELMK5NfRvfaMMXjUu7IVrQYoeZFegXXu2hJViGk6ZOOE-cPH-hh6it5VNhInH5-nYxigBqdWnaecgXAFc8GGsZLP20qNCxxnrlav0NwN9VH4FCQeYone2mtinu-Wsg3r2Q90ztbZpUG3STm3TecSnph_Ki-TbRSSClfupUizxnJp-OplKYqtQ-mrZ9RHwTbEM8jJz5jPB-s02SxsQKHJwg4ZTg"/>
<div className="absolute inset-0 bg-gradient-to-t from-indigo-950 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="font-headline-md text-headline-md text-white mb-2">Automated Precision</h3>
<p className="font-body-md text-on-surface-variant max-w-sm">Robotic integration and AR-overlay verification during critical build steps.</p>
</div>
</div>
<div className="md:col-span-4 bg-indigo-900/30 border border-indigo-700 p-8 flex flex-col justify-between">
<span className="material-symbols-outlined text-4xl text-secondary-container">construction</span>
<div>
<h4 className="font-headline-md text-headline-md mb-2">Field Logistics</h4>
<p className="font-body-md text-on-surface-variant">Rapid deployment teams equipped for remote and hazardous zone assembly.</p>
</div>
</div>
<div className="md:col-span-4 bg-secondary-container p-8 flex flex-col justify-between">
<span className="material-symbols-outlined text-4xl text-black">verified</span>
<div>
<h4 className="font-headline-md text-headline-md text-black mb-2">QC Protocols</h4>
<p className="font-body-md text-black/80 font-medium">Secondary human verification of all automated sensor readings.</p>
</div>
</div>
</div>
</div>
{/* Phase 4 */}
<div className="bg-indigo-950 border-y border-outline-variant py-20 -mx-margin-desktop px-margin-desktop" id="phase4">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/3">
<div className="inline-block px-3 py-1 bg-primary-container border border-primary text-primary font-label-caps text-label-caps mb-4">Phase 04</div>
<h2 className="font-headline-md text-headline-md text-4xl font-bold mb-6">Lifecycle Maintenance</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-8">
                            Our relationship doesn't end at commissioning. We provide perpetual health monitoring and predictive maintenance to ensure 99.99% uptime for your assets.
                        </p>
<button className="bg-white text-black font-bold px-8 py-4 uppercase font-label-caps tracking-widest hover:bg-secondary-container hover:text-black transition-colors w-full md:w-auto">SLA Details</button>
</div>
<div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="border-l-2 border-indigo-700 pl-6 py-4">
<span className="material-symbols-outlined text-secondary-container mb-4">query_stats</span>
<h5 className="font-headline-md text-headline-md text-xl mb-2">Predictive Diagnostics</h5>
<p className="font-body-md text-on-surface-variant">IoT-integrated sensors detect thermal anomalies before mechanical failure occurs.</p>
</div>
<div className="border-l-2 border-indigo-700 pl-6 py-4">
<span className="material-symbols-outlined text-secondary-container mb-4">support_agent</span>
<h5 className="font-headline-md text-headline-md text-xl mb-2">24/7 Rapid Response</h5>
<p className="font-body-md text-on-surface-variant">Global field service engineers dispatched within 4 hours of critical alert.</p>
</div>
<div className="border-l-2 border-indigo-700 pl-6 py-4">
<span className="material-symbols-outlined text-secondary-container mb-4">update</span>
<h5 className="font-headline-md text-headline-md text-xl mb-2">Component Lifecycle</h5>
<p className="font-body-md text-on-surface-variant">Pre-emptive parts replacement programs based on real-world wear patterns.</p>
</div>
<div className="border-l-2 border-indigo-700 pl-6 py-4">
<span className="material-symbols-outlined text-secondary-container mb-4">security</span>
<h5 className="font-headline-md text-headline-md text-xl mb-2">Firmware Hardening</h5>
<p className="font-body-md text-on-surface-variant">Continuous security updates for all networked engineering systems.</p>
</div>
</div>
</div>
</div>
</section>
{/* CTA Section */}
<section className="py-32 px-margin-desktop bg-surface-container-lowest relative overflow-hidden">
<div className="absolute inset-0 ar-grid opacity-20 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="font-display-lg text-display-lg-mobile md:text-5xl mb-8 leading-tight">Ready to integrate <br/><span className="text-secondary-container">Titan Precision?</span></h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
                    Contact our lead engineering desk to schedule an initial feasibility study and site survey.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-6">
<a className="bg-secondary-container text-black font-bold px-10 py-5 uppercase font-label-caps tracking-widest text-sm flex items-center justify-center gap-3" href="/">
<span className="material-symbols-outlined">mail</span>
                        Request Proposal
                    </a>
<a className="border border-outline-variant text-on-surface font-bold px-10 py-5 uppercase font-label-caps tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-indigo-900/40" href="/">
<span className="material-symbols-outlined">download</span>
                        Process Catalog (PDF)
                    </a>
</div>
</div>
</section>

        </div>
    );
}
