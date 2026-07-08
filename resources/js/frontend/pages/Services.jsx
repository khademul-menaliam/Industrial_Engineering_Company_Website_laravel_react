import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <div className="w-full">
            
{/* HERO / INTRO */}
<section className="pt-16 pb-12 px-margin-desktop max-w-container-max mx-auto">
<div className="border-l-4 border-safety-orange pl-6">
<h2 className="text-sm font-bold text-safety-orange uppercase tracking-[0.3em] mb-2">Operational Hierarchy</h2>
<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Precision Engineering &amp; Industrial Solutions</h1>
<p className="text-lg text-on-surface-variant max-w-2xl">Deploying elite technical expertise across consulting, project execution, and lifecycle maintenance for mission-critical infrastructure.</p>
</div>
</section>
{/* CATEGORY 1: CONSULTING */}
<section className="py-12 px-margin-desktop max-w-container-max mx-auto">
<div className="flex items-center gap-4 mb-8">
<div className="h-px bg-white/10 flex-grow"></div>
<h2 className="text-xs font-bold text-primary uppercase tracking-[0.4em]">01. Consulting Services</h2>
<div className="h-px bg-white/10 flex-grow"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* MEP */}
<div className="service-card bg-surface-container p-8 rounded-xl border border-white/5 flex flex-col justify-between hover:border-primary/50 transition-all duration-300">
<div>
<div className="service-icon w-12 h-12 bg-primary-container text-primary rounded flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
</div>
<h3 className="text-xl font-bold text-white mb-2">MEP Design</h3>
<p className="text-sm text-on-surface-variant">Mechanical, Electrical, and Plumbing engineering frameworks for complex industrial facilities.</p>
</div>
</div>
{/* ANSYS */}
<div className="service-card bg-surface-container p-8 rounded-xl border border-white/5 flex flex-col justify-between hover:border-primary/50 transition-all duration-300">
<div>
<div className="service-icon w-12 h-12 bg-primary-container text-primary rounded flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
</div>
<h3 className="text-xl font-bold text-white mb-2">ANSYS Simulation</h3>
<p className="text-sm text-on-surface-variant">High-fidelity computational fluid dynamics and structural analysis for optimized system performance.</p>
</div>
</div>
{/* Industrial Pump System */}
<div className="service-card bg-surface-container p-8 rounded-xl border border-white/5 flex flex-col justify-between hover:border-primary/50 transition-all duration-300">
<div>
<div className="service-icon w-12 h-12 bg-primary-container text-primary rounded flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>water_damage</span>
</div>
<h3 className="text-xl font-bold text-white mb-2">Industrial Pump Systems</h3>
<p className="text-sm text-on-surface-variant">Strategic consulting on fluid transport logistics and high-capacity pumping architectures.</p>
</div>
</div>
{/* Flatbed Gain Dryer */}
<div className="service-card bg-surface-container p-8 rounded-xl border border-white/5 flex flex-col justify-between hover:border-primary/50 transition-all duration-300">
<div>
<div className="service-icon w-12 h-12 bg-primary-container text-primary rounded flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>dry</span>
</div>
<h3 className="text-xl font-bold text-white mb-2">Gain Dryer Systems</h3>
<p className="text-sm text-on-surface-variant">Engineering solutions for Flatbed Gain dryer systems tailored for agricultural and industrial processing.</p>
</div>
</div>
{/* Natural Ventilation */}
<div className="service-card bg-surface-container p-8 rounded-xl border border-white/5 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 lg:col-span-2">
<div className="flex flex-col md:flex-row md:items-center gap-8">
<div className="service-icon w-12 h-12 bg-primary-container text-primary rounded flex-shrink-0 flex items-center justify-center">
<span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>air</span>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-2">Natural Ventilation Systems</h3>
<p className="text-sm text-on-surface-variant">Passive airflow engineering and thermal chimney design for sustainable climate control.</p>
</div>
</div>
</div>
</div>
</section>
{/* CATEGORY 2: PROJECTS (DESIGN, SUPPLY & INSTALLATION) */}
<section className="py-16 bg-surface-container-lowest border-y border-white/5">
<div className="px-margin-desktop max-w-container-max mx-auto">
<div className="flex items-center gap-4 mb-12">
<div className="h-px bg-white/10 flex-grow"></div>
<h2 className="text-xs font-bold text-safety-orange uppercase tracking-[0.4em]">02. Projects (DSI)</h2>
<div className="h-px bg-white/10 flex-grow"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
{/* Featured: Fire Protection */}
<div className="md:col-span-7 group relative rounded-xl overflow-hidden shadow-2xl border border-white/5 aspect-[16/9] md:aspect-auto">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 saturate-50 brightness-50" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAiumoityh4wX-F5Lhjm6F8eqVBGedPxD296hj0_nx-EAAOA15TH4rZW3e9oMOeozoXpZvoHJIfpvexZRUFj1gWmXhGR4GrxA0WbxTCTG3kFP5HWhNqzzTRj7z5ACb9TK0aBFSif2TD1XkxwJNrm3ZNUpoWS8fPFH1JetmXn-1XkBWDwMWU1YbXxXUyjQ1FOEXRjmS7eX_vH4mRKxkqYe5cSF4XQcTZ89xaz-rlm1t-43UuufXe-goMIw')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 z-10">
<span className="bg-safety-orange text-white px-2 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Tactical Asset</span>
<h3 className="text-3xl font-bold text-white mb-2">Fire Protection &amp; Detection</h3>
<p className="text-on-surface-variant text-sm max-w-md">Full-cycle design, supply, and installation of advanced suppression and intelligence detection loops.</p>
</div>
</div>
{/* Right Stack */}
<div className="md:col-span-5 space-y-6">
{/* HVAC */}
<div className="bg-surface-container-high p-6 rounded-xl border border-white/5 hover:border-safety-orange/30 transition-all group">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-safety-orange mt-1">hvac</span>
<div>
<h4 className="font-bold text-white mb-1">HVAC Systems</h4>
<p className="text-xs text-on-surface-variant leading-relaxed">Integrated heating, cooling, and air quality infrastructure for high-density environments.</p>
</div>
</div>
</div>
{/* Industrial Pipe Work */}
<div className="bg-surface-container-high p-6 rounded-xl border border-white/5 hover:border-safety-orange/30 transition-all group">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-safety-orange mt-1">plumbing</span>
<div>
<h4 className="font-bold text-white mb-1">All Kinds of Industrial Pipe Work</h4>
<p className="text-xs text-on-surface-variant leading-relaxed">Precision fabrication and installation of chemical, water, and waste fluid networks.</p>
</div>
</div>
</div>
{/* Boiler & Steam */}
<div className="bg-surface-container-high p-6 rounded-xl border border-white/5 hover:border-safety-orange/30 transition-all group">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-safety-orange mt-1">factory</span>
<div>
<h4 className="font-bold text-white mb-1">Boiler &amp; Steam Line Solutions</h4>
<p className="text-xs text-on-surface-variant leading-relaxed">Heavy-duty thermal energy generation and distribution systems for process manufacturing.</p>
</div>
</div>
</div>
{/* Compressed Air */}
<div className="bg-surface-container-high p-6 rounded-xl border border-white/5 hover:border-safety-orange/30 transition-all group">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-safety-orange mt-1">airwave</span>
<div>
<h4 className="font-bold text-white mb-1">Compressed Air Systems</h4>
<p className="text-xs text-on-surface-variant leading-relaxed">Reliable pneumatic power distribution with high-efficiency filtration and compression units.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* CATEGORY 3: MAINTENANCE & SERVICES */}
<section className="py-16 px-margin-desktop max-w-container-max mx-auto">
<div className="flex items-center gap-4 mb-12">
<div className="h-px bg-white/10 flex-grow"></div>
<h2 className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.4em]">03. Maintenance &amp; Lifecycle</h2>
<div className="h-px bg-white/10 flex-grow"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Side Panel */}
<div className="lg:col-span-4 bg-surface-container-highest p-8 rounded-xl border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-8xl">settings_suggest</span>
</div>
<h3 className="text-2xl font-bold text-white mb-6">Zero-Downtime Maintenance</h3>
<p className="text-on-surface-variant text-sm mb-8 leading-relaxed">Our maintenance protocols ensure maximum operational uptime through predictive diagnostics and rapid response engineering.</p>
<button className="w-full bg-white text-background py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-safety-orange hover:text-white transition-all shadow-lg">Schedule Assessment</button>
</div>
{/* Main Grid */}
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-surface-container p-6 rounded-lg border border-white/5 flex items-center gap-4 hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-safety-orange text-3xl">water_pump</span>
<span className="text-sm font-bold uppercase tracking-widest text-white">All Kinds of Industrial Pumps</span>
</div>
<div className="bg-surface-container p-6 rounded-lg border border-white/5 flex items-center gap-4 hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-safety-orange text-3xl">electric_bolt</span>
<span className="text-sm font-bold uppercase tracking-widest text-white">Electric Motors</span>
</div>
<div className="bg-surface-container p-6 rounded-lg border border-white/5 flex items-center gap-4 hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-safety-orange text-3xl">engine</span>
<span className="text-sm font-bold uppercase tracking-widest text-white">Diesel Engine Service</span>
</div>
<div className="bg-surface-container p-6 rounded-lg border border-white/5 flex items-center gap-4 hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-safety-orange text-3xl">compress</span>
<span className="text-sm font-bold uppercase tracking-widest text-white">Compressor Maintenance</span>
</div>
<div className="bg-surface-container p-6 rounded-lg border border-white/5 flex items-center gap-4 hover:bg-surface-container-high transition-colors md:col-span-2">
<span className="material-symbols-outlined text-safety-orange text-3xl">bolt</span>
<span className="text-sm font-bold uppercase tracking-widest text-white">Generator Support &amp; Calibration</span>
</div>
</div>
</div>
</section>
{/* CTA SECTION */}
<section className="py-12 px-margin-desktop max-w-container-max mx-auto mb-16">
<div className="bg-primary-container p-12 rounded-xl border border-primary/20 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
<div>
<h3 className="text-2xl font-bold text-white mb-2">Initiate Tactical Protocol</h3>
<p className="text-on-primary-container text-sm">Deploy our rapid-response engineering team to evaluate your facility's integrity.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-safety-orange text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all">Request Site Audit</button>
<button className="border border-white/20 text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all">Contact HQ</button>
</div>
</div>
</section>

        </div>
    );
}
