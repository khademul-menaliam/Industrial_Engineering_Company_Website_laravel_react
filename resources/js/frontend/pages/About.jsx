import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TEAM_MEMBERS = [
    {
        name: 'Marcus Vance, PE',
        role: 'Founder & CEO',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdqOTYnupjt5nefsPJfgjHM5HMSix_-gvu2_5cythhmuUcLI2PfYVTXEqEZoZ1zb_BJZFAqoKaO2V0Qm4QtjwKvcQwn1kVOunWU27xyjnDCZ1wxDwRNnBYPoQKmoaWg5knYpTELkqiYZPebgLV8ILc_SWCdQGmp7eaKshtYnYqq6CUgfmd6b1qfwjuahdRa5B3RSc9AR0An4EpvfDAh5TPWyEcrXzVj2G4N-irBFJVrqv46azTwU5Xdg',
        bio: 'Over 20 years leading heavy structural designs and municipal seismic upgrades. Ex-member of National Fire Protection Association.',
        linkedin: 'https://linkedin.com',
        email: 'm.vance@titanprecision.com'
    },
    {
        name: 'Elena Rostova',
        role: 'Chief BIM Coordinator',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8yelI8zz3zZB_xOggCH44uFkZOchwr5JoCd_YwatDrH8n2bP7Fv04diGqoMNBFVXOMmzVXMm1Khsv2cD2J-0JkNKh8F3_z7DomR998JD4YQYPZ_UjxrXmIWGtoML1XMieoQUBHmdn4yp6fpzuwCxQHLj5ZUUIbQEb27rxJabHV_br09iEBSL1zbTfFXr_Y5NDva3iJXgqTJTFje6DCSKeQv2KRfD1T_jtIJ1E2FNjMq3V1JFqmuYHBw',
        bio: 'Spearheads multi-disciplinary 3D CAD coordination and ISO 19650 compliance audits for high-density commercial complexes.',
        linkedin: 'https://linkedin.com',
        email: 'e.rostova@titanprecision.com'
    },
    {
        name: 'David Kincaid, SE',
        role: 'VP of Safety Engineering',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvuTpPHQiUF8AWDoCwA4kqw_PO_GQciyHYZ8UcxUpNMoSTKtKgmeCsjUtPRy9N_6fmkTxz4wHWCiinoDWX5xGH3XndC_T9cZGpZR7GmNCH6bkTai9vH9HeYpxzDGiJaSE3nHS83YN11K6NdHITWQUDqojLbj9_zLg1jRpabOHsEcdKnNG5Gukd7eGD8EIz3yd68DpqgwQx9MU0oECY1nTFkgeWhf4LkQDGSzS0qckA3BZRYTyKCTQsTw',
        bio: 'Specialist in hazardous materials structural isolation, thermal dynamics modeling, and automatic deluge design systems.',
        linkedin: 'https://linkedin.com',
        email: 'd.kincaid@titanprecision.com'
    },
    {
        name: 'Sarah Chen, PhD',
        role: 'Lead Material Analyst',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH0Yt5P09qX-6kP7R3K8J46G0fC8XJm-b_T_cZ2r_GjZ-6Xy7r9sT2Xm9vT5r9y_z_5r9z_5r9z_5r9z_5r9z_5r9z_5r9z_5r9z_5r9z_5',
        bio: 'Directs tensile strength and thermal stress testing for bespoke steel alloys. Author of 12 peer-reviewed safety publications.',
        linkedin: 'https://linkedin.com',
        email: 's.chen@titanprecision.com'
    }
];

const ADVISORS = [
    {
        name: 'Dr. Aris Thorne',
        role: 'Senior Structural Advisor',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdqOTYnupjt5nefsPJfgjHM5HMSix_-gvu2_5cythhmuUcLI2PfYVTXEqEZoZ1zb_BJZFAqoKaO2V0Qm4QtjwKvcQwn1kVOunWU27xyjnDCZ1wxDwRNnBYPoQKmoaWg5knYpTELkqiYZPebgLV8ILc_SWCdQGmp7eaKshtYnYqq6CUgfmd6b1qfwjuahdRa5B3RSc9AR0An4EpvfDAh5TPWyEcrXzVj2G4N-irBFJVrqv46azTwU5Xdg',
        message: 'Engineering safety is an iterative process of mathematical validation and material stress audits. We build the science that keeps cities standing.'
    },
    {
        name: 'Dame Clara Dupont',
        role: 'Industrial Compliance Advisor',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8yelI8zz3zZB_xOggCH44uFkZOchwr5JoCd_YwatDrH8n2bP7Fv04diGqoMNBFVXOMmzVXMm1Khsv2cD2J-0JkNKh8F3_z7DomR998JD4YQYPZ_UjxrXmIWGtoML1XMieoQUBHmdn4yp6fpzuwCxQHLj5ZUUIbQEb27rxJabHV_br09iEBSL1zbTfFXr_Y5NDva3iJXgqTJTFje6DCSKeQv2KRfD1T_jtIJ1E2FNjMq3V1JFqmuYHBw',
        message: 'Compliance with NFPA and international ISO standards is not a checklist, but the blueprint of modern infrastructure. Trust is built on compliance.'
    }
];

const MILESTONES = [
    {
        year: '2024',
        title: 'Establishment & Foundation',
        desc: 'Titan Precision founded in Chicago, focusing on seismic structural integrations and high-rise core safety modeling.'
    },
    {
        year: '2025',
        title: 'Fire Protection Expansion',
        desc: 'Launched dedicated Fire Protection & Life Safety division, obtaining ISO 9001 and ISO 19650 coordination status.'
    },
    {
        year: '2026',
        title: 'International Operations',
        desc: 'Contracted for municipal structural and industrial hazard suppression deliverables across three global regional offices.'
    }
];

export default function About() {
    return (
        <div className="w-full bg-[#fafbfc]">
            {/* Hero Banner */}
            <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden flex items-center">
                <div className="absolute inset-0 z-0 bg-cover bg-center filter brightness-50" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVbKXiUA7xPQj89dhrbr0jwYhDX5VsLdm0HmboiN0rZ4hg1RvkMH0bI-J5rFE8TRFwJdRGB_XUn3gr-6XSyL23Lu571b5yjTu_-HmsPGozdp-J04pub88mCxNy7_rZQnfTcbNCy2XTGNax_kyDTlyNnrpnL8PoF2BZ6riibLJ3JDg9HaGU2yUSltzTu3hTVLcnRT8jqkwUMA0Y0GvL-OCjxpzEsVvLsQ0h5rO-HnnMso18KQDLdLgOqw')" }}></div>
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
                
                <div className="relative z-30 px-margin-desktop max-w-container-max mx-auto w-full">
                    <div className="space-y-6 max-w-3xl">
                        <span className="inline-block border-l-4 border-tertiary pl-4 text-white text-xs uppercase tracking-widest bg-primary/20 backdrop-blur-sm py-1 font-mono">Established 2024 | Titan v2</span>
                        <h1 className="text-4xl md:text-6xl text-white font-bold uppercase tracking-tight leading-none">
                            Precision Engineering <br /> <span className="text-tertiary">Industrial Safety</span>
                        </h1>
                        <p className="text-white/80 text-base md:text-lg font-light max-w-xl leading-relaxed">
                            Redefining industrial standards through high-precision structural integration and world-class fire safety protocols.
                        </p>
                        <div className="pt-8 flex flex-wrap gap-4">
                            <Link to="/services" className="bg-tertiary text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0">OUR CAPABILITIES</Link>
                            <Link to="/portfolio" className="border border-white/30 text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all">VIEW PORTFOLIO</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* History Narrative & Counter Stats */}
            <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-1 bg-tertiary"></div>
                            <h2 className="text-3xl font-bold text-primary uppercase tracking-tight">The Architecture of Excellence</h2>
                        </div>
                        <div className="space-y-6 text-on-surface-variant text-sm sm:text-base leading-relaxed">
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
                    </div>
                    <div className="lg:col-span-5">
                        <div className="bg-white border border-outline-variant p-8 md:p-12 rounded-xl shadow-sm space-y-8 divide-y divide-outline-variant/30">
                            <div className="pb-6">
                                <span className="text-tertiary font-bold text-5xl block font-mono">50+</span>
                                <span className="text-primary font-bold text-xs uppercase tracking-widest font-mono mt-1 block">Elite Project Engineers</span>
                                <p className="text-[11px] text-on-surface-variant mt-2 leading-relaxed">PE licensed civil, mechanical, and fire suppression certified specialists.</p>
                            </div>
                            <div className="py-6">
                                <span className="text-tertiary font-bold text-5xl block font-mono">120+</span>
                                <span className="text-primary font-bold text-xs uppercase tracking-widest font-mono mt-1 block">Global Installations</span>
                                <p className="text-[11px] text-on-surface-variant mt-2 leading-relaxed">Successfully delivering industrial infrastructure solutions internationally.</p>
                            </div>
                            <div className="pt-6">
                                className="text-tertiary font-bold text-5xl block font-mono"
                                <span className="text-tertiary font-bold text-5xl block font-mono">15</span>
                                <span className="text-primary font-bold text-xs uppercase tracking-widest font-mono mt-1 block">Compliance Patents</span>
                                <p className="text-[11px] text-on-surface-variant mt-2 leading-relaxed">Proprietary mathematical algorithms for fluid dynamics and safety zones.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Pillars (Core Directives) - MOVED BEFORE MESSAGE FROM LEADERSHIP */}
            <section className="py-24 px-margin-desktop bg-surface-container-low border-t border-b border-outline-variant/30">
                <div className="max-w-container-max mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-tertiary text-xs font-bold tracking-widest mb-4 block uppercase font-mono">CORE DIRECTIVES</span>
                        <h2 className="text-3xl font-bold text-primary uppercase tracking-tight">Strategic Pillars</h2>
                        <div className="w-24 h-1.5 bg-tertiary mx-auto mt-4 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Mission */}
                        <div className="pillar-card bg-white p-8 rounded-xl border border-outline-variant/30 hover:shadow-xl flex flex-col h-full group transition-all duration-300 hover:border-primary">
                            <div className="mb-8 w-12 h-12 rounded bg-primary text-on-primary flex items-center justify-center group-hover:bg-tertiary transition-colors duration-300">
                                <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-4 border-b border-outline-variant/30 pb-4 group-hover:border-tertiary transition-colors duration-300 uppercase tracking-tight">Mission</h3>
                            <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed flex-grow font-light">
                                To provide high-precision engineering and safety solutions that accelerate global industrial progress through technical innovation and structural excellence.
                            </p>
                        </div>
                        {/* Vision */}
                        <div className="pillar-card bg-white p-8 rounded-xl border border-outline-variant/30 hover:shadow-xl flex flex-col h-full group transition-all duration-300 hover:border-primary">
                            <div className="mb-8 w-12 h-12 rounded bg-primary text-on-primary flex items-center justify-center group-hover:bg-tertiary transition-colors duration-300">
                                <span className="material-symbols-outlined text-2xl">visibility</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-4 border-b border-outline-variant/30 pb-4 group-hover:border-tertiary transition-colors duration-300 uppercase tracking-tight">Vision</h3>
                            <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed flex-grow font-light">
                                To be the most trusted global partner in infrastructure engineering, redefining the limits of technical precision and safety in an evolving world.
                            </p>
                        </div>
                        {/* Values */}
                        <div className="pillar-card bg-white p-8 rounded-xl border border-outline-variant/30 hover:shadow-xl flex flex-col h-full group transition-all duration-300 hover:border-primary">
                            <div className="mb-8 w-12 h-12 rounded bg-primary text-on-primary flex items-center justify-center group-hover:bg-tertiary transition-colors duration-300">
                                <span className="material-symbols-outlined text-2xl">verified</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-4 border-b border-outline-variant/30 pb-4 group-hover:border-tertiary transition-colors duration-300 uppercase tracking-tight">Values</h3>
                            <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed flex-grow font-light">
                                Integrity, reliability, and precision. We hold ourselves accountable for every weld, every line of code, and every safety protocol we deploy.
                            </p>
                        </div>
                        {/* Safety Policy */}
                        <div className="pillar-card bg-white p-8 rounded-xl border border-outline-variant/30 hover:shadow-xl flex flex-col h-full group transition-all duration-300 hover:border-primary">
                            <div className="mb-8 w-12 h-12 rounded bg-primary text-on-primary flex items-center justify-center group-hover:bg-tertiary transition-colors duration-300">
                                <span className="material-symbols-outlined text-2xl">local_fire_department</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-4 border-b border-outline-variant/30 pb-4 group-hover:border-tertiary transition-colors duration-300 uppercase tracking-tight">Safety Policy</h3>
                            <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed flex-grow font-light">
                                Uncompromising adherence to international fire safety frameworks and a total commitment to zero-defect execution in all life safety deliverables.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* MESSAGE FROM LEADERSHIP */}
            <section className="bg-primary text-white py-24 border-b border-white/10">
                <div className="max-w-container-max mx-auto px-margin-desktop space-y-16">
                    {/* CEO Message */}
                    <div className="bg-surface/5 border border-white/10 rounded-xl p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row items-center gap-12">
                        {/* Grayscale to color portrait */}
                        <div className="w-full lg:w-1/3 flex justify-center shrink-0">
                            <div className="relative group rounded-xl overflow-hidden border border-white/20 shadow-xl max-w-[280px]">
                                <img 
                                    className="w-full h-80 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" 
                                    alt="Marcus Vance, PE" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdqOTYnupjt5nefsPJfgjHM5HMSix_-gvu2_5cythhmuUcLI2PfYVTXEqEZoZ1zb_BJZFAqoKaO2V0Qm4QtjwKvcQwn1kVOunWU27xyjnDCZ1wxDwRNnBYPoQKmoaWg5knYpTELkqiYZPebgLV8ILc_SWCdQGmp7eaKshtYnYqq6CUgfmd6b1qfwjuahdRa5B3RSc9AR0An4EpvfDAh5TPWyEcrXzVj2G4N-irBFJVrqv46azTwU5Xdg" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-4 right-4 text-center">
                                    <h4 className="text-sm font-bold uppercase tracking-wide">Marcus Vance, PE</h4>
                                    <p className="text-[10px] text-tertiary uppercase font-mono mt-0.5">FOUNDER &amp; CEO</p>
                                </div>
                            </div>
                        </div>

                        {/* Statement */}
                        <div className="flex-grow space-y-6">
                            <span className="material-symbols-outlined text-tertiary text-5xl opacity-40 select-none block" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-relaxed">
                                A MESSAGE FROM OUR LEADERSHIP
                            </h3>
                            <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                                "At Titan Precision, our core mission is simple yet uncompromising: to design and deliver structural systems that prioritize human life and operational continuity. Modern industrial infrastructure demands rigorous calculations and zero tolerances. We hold ourselves responsible for every weld, every Revit block, and every thermal fluid dynamics simulation we deploy. We do not just build structures; we architect peace of mind."
                            </p>
                            <div className="pt-4 flex items-center gap-4">
                                <div className="w-10 h-0.5 bg-tertiary"></div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wider">Marcus Vance, PE</p>
                                    <p className="text-xs text-white/60 font-mono mt-0.5">CEO, Titan Precision Engineering</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* NEW: 2 ADVISORS MESSAGES */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
                        {ADVISORS.map((advisor, index) => (
                            <div key={index} className="bg-surface/5 border border-white/10 rounded-xl p-8 shadow-xl flex flex-col sm:flex-row gap-6 items-center sm:items-start group hover:border-tertiary transition-all duration-300">
                                <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-white/20 shadow-lg">
                                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={advisor.image} alt={advisor.name} />
                                </div>
                                <div className="flex-grow space-y-3 text-center sm:text-left">
                                    <span className="material-symbols-outlined text-tertiary text-2xl opacity-40 select-none block" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed italic">
                                        "{advisor.message}"
                                    </p>
                                    <div className="pt-2">
                                        <h4 className="text-sm font-bold text-white uppercase">{advisor.name}</h4>
                                        <p className="text-[10px] text-tertiary font-mono uppercase tracking-wider mt-0.5">{advisor.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR LEADERSHIP TEAM (COMPACT LAYOUT WITH SMALLER IMAGES) */}
            <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
                <div className="text-center mb-16">
                    <span className="text-tertiary text-xs font-bold tracking-[.25em] mb-4 block uppercase font-mono">Expert Personnel</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-tight">Our Leadership Team</h2>
                    <div className="w-24 h-1.5 bg-tertiary mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Reduced Image size & Horizontal Side-by-Side Detail Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {TEAM_MEMBERS.map((member, index) => (
                        <div 
                            key={index}
                            className="bg-white border border-outline-variant/30 rounded-xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-xl hover:border-primary transition-all duration-300"
                        >
                            {/* Smaller circular headshot */}
                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 border-2 border-outline-variant/50 shadow-md">
                                <img 
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                                    alt={member.name} 
                                    src={member.image} 
                                />
                            </div>

                            {/* Technical Details */}
                            <div className="flex-grow space-y-3 text-center sm:text-left">
                                <div>
                                    <span className="bg-tertiary text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded font-mono tracking-wider">
                                        {member.role}
                                    </span>
                                    <h4 className="font-bold text-primary uppercase text-lg tracking-tight mt-2">{member.name}</h4>
                                </div>
                                <p className="text-xs text-on-surface-variant leading-relaxed font-light">
                                    {member.bio}
                                </p>
                                <div className="flex items-center justify-center sm:justify-start gap-4 pt-2 font-mono text-[9px] text-on-surface-variant border-t border-outline-variant/10">
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-tertiary transition-colors">
                                        <span className="material-symbols-outlined text-sm">link</span> LINKEDIN
                                    </a>
                                    <a href={`mailto:${member.email}`} className="flex items-center gap-1 hover:text-tertiary transition-colors">
                                        <span className="material-symbols-outlined text-sm">mail</span> EMAIL
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* HISTORICAL TIMELINE */}
            <section className="py-24 bg-surface-container-low border-t border-b border-outline-variant/30">
                <div className="max-w-4xl mx-auto px-margin-desktop">
                    <div className="text-center mb-16">
                        <span className="text-tertiary text-xs font-bold tracking-[.25em] mb-4 block uppercase font-mono">Corporate Growth</span>
                        <h2 className="text-3xl font-bold text-primary uppercase tracking-tight">Milestones Timeline</h2>
                    </div>

                    <div className="relative border-l-2 border-outline-variant/50 ml-4 md:ml-32 space-y-12">
                        {MILESTONES.map((mile, index) => (
                            <div key={index} className="relative pl-8 md:pl-12 group">
                                {/* Bullet indicator */}
                                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-outline-variant group-hover:border-tertiary transition-colors duration-300 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 bg-transparent group-hover:bg-tertiary rounded-full transition-colors duration-300"></div>
                                </div>

                                {/* Year Badge */}
                                <span className="absolute -left-4 md:-left-32 top-0.5 bg-[#0b1519] border border-outline-variant/30 text-sky-400 font-bold font-mono text-xs px-3 py-1 rounded-md uppercase select-none shadow-sm">
                                    {mile.year}
                                </span>

                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-primary uppercase tracking-tight group-hover:text-tertiary transition-colors duration-300">
                                        {mile.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-2xl font-light">
                                        {mile.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
