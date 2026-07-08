import React from 'react';
import { Link } from 'react-router-dom';

export default function Careers() {
    return (
        <div className="w-full">
            
{/* Hero Section */}
<section className="relative h-[480px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvuTpPHQiUF8AWDoCwA4kqw_PO_GQciyHYZ8UcxUpNMoSTKtKgmeCsjUtPRy9N_6fmkTxz4wHWCiinoDWX5xGH3XndC_T9cZGpZR7GmNCH6bkTai9vH9HeYpxzDGiJaSE3nHS83YN11K6NdHITWQUDqojLbj9_zLg1jRpabOHsEcdKnNG5Gukd7eGD8EIz3yd68DpqgwQx9MU0oECY1nTFkgeWhf4LkQDGSzS0qckA3BZRYTyKCTQsTw')" }}></div>
<div className="absolute inset-0 bg-background/85 mix-blend-multiply"></div>
</div>
<div className="relative z-10 px-margin-desktop max-w-[1440px] mx-auto w-full">
<div className="max-w-2xl text-on-primary-container">
<h1 className="font-display-lg text-display-lg mb-4 text-white">CAREERS</h1>
<p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-lg uppercase tracking-[0.2em] font-bold">Engineering the Future of Infrastructure</p>
</div>
</div>
</section>
{/* Main Content Container */}
<div className="max-w-[1440px] mx-auto px-margin-desktop py-24 space-y-32">
{/* Section 1: Why Join Us */}
<section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center" id="why-join-us">
<div className="space-y-8">
<div className="section-divider pb-4">
<h2 className="font-display-lg text-display-lg text-white mb-2 uppercase">Why Join Us</h2>
<span className="font-label-caps text-label-caps text-secondary-container tracking-widest">CULTURE &amp; MISSION</span>
</div>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                        At Titan Precision, we don't just complete projects; we solve the unsolvable. Our culture is built on the pillars of rigorous calculation, radical innovation, and structural integrity. 
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="p-6 bg-primary-container border border-outline-variant/30 rounded-lg">
<span className="material-symbols-outlined text-secondary-container text-3xl mb-4">precision_manufacturing</span>
<h4 className="font-headline-md text-headline-md text-primary mb-2 text-lg">Elite Standards</h4>
<p className="font-body-md text-body-md text-on-surface-variant/80">Work alongside the industry's top 2% of engineering talent on high-stakes global infrastructure.</p>
</div>
<div className="p-6 bg-primary-container border border-outline-variant/30 rounded-lg">
<span className="material-symbols-outlined text-secondary-container text-3xl mb-4">rocket_launch</span>
<h4 className="font-headline-md text-headline-md text-primary mb-2 text-lg">Mission First</h4>
<p className="font-body-md text-body-md text-on-surface-variant/80">Every calculation serves a purpose: creating a safer, more resilient world for the next century.</p>
</div>
</div>
<ul className="space-y-4 font-body-md text-on-surface">
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-container text-sm">check_circle</span> Comprehensive Technical Training &amp; Mentorship</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-container text-sm">check_circle</span> Competitive Equity &amp; High-Performance Bonuses</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-container text-sm">check_circle</span> State-of-the-art BIM &amp; FEA Software Access</li>
</ul>
</div>
<div className="relative h-[500px] rounded-xl overflow-hidden group">
<div className="absolute inset-0 bg-secondary-container/10 mix-blend-overlay z-10"></div>
<img alt="Engineers collaborating" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8yelI8zz3zZB_xOggCH44uFkZOchwr5JoCd_YwatDrH8n2bP7Fv04diGqoMNBFVXOMmzVXMm1Khsv2cD2J-0JkNKh8F3_z7DomR998JD4YQYPZ_UjxrXmIWGtoML1XMieoQUBHmdn4yp6fpzuwCxQHLj5ZUUIbQEb27rxJabHV_br09iEBSL1zbTfFXr_Y5NDva3iJXgqTJTFje6DCSKeQv2KRfD1T_jtIJ1E2FNjMq3V1JFqmuYHBw"/>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background to-transparent z-20">
<p className="font-mono-data text-mono-data text-white italic">"Precision is not an act, it is a habit." — Titan Engineering Principle #1</p>
</div>
</div>
</section>
{/* Section 2: Job Vacancies */}
<section id="job-vacancies">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-gutter">
<div className="section-divider pb-4">
<h2 className="font-display-lg text-display-lg text-white mb-2 uppercase">Job Vacancies</h2>
<span className="font-label-caps text-label-caps text-secondary-container tracking-widest">TECHNICAL &amp; ENGINEERING ROLES</span>
</div>
<div className="flex gap-2">
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">search</span>
<input className="pl-10 pr-4 py-2 bg-primary-container border border-outline-variant rounded text-mono-data font-mono-data w-64 text-on-surface focus:border-secondary-container transition-colors" placeholder="Filter by role..." type="text"/>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/* Job Card 1 */}
<div className="job-card group cursor-pointer bg-primary-container border-l-4 border-secondary-container p-8 rounded shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full duration-700 opacity-100 translate-y-0">
<div className="flex justify-between items-start mb-6">
<div className="flex flex-wrap gap-2">
<span className="bg-secondary-container text-white px-3 py-1 rounded font-label-caps text-[10px] tracking-widest uppercase shadow-sm">Urgent</span>
<span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded font-label-caps text-[10px] tracking-widest uppercase">Remote</span>
</div>
<span className="text-outline font-mono-data text-[12px]">ID: AR-204</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-4">Senior Structural Engineer</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">Lead analysis for large-scale urban infrastructure projects using advanced FEA modeling and BIM integration.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-outline-variant/20">
<span className="font-label-caps text-label-caps text-secondary-container group-hover:brightness-125 transition-all">Apply Now</span>
<span className="material-symbols-outlined job-card-arrow text-secondary-container">arrow_forward</span>
</div>
</div>
{/* Job Card 2 */}
<div className="job-card group cursor-pointer bg-primary-container border-l-4 border-primary p-8 rounded shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full duration-700 opacity-100 translate-y-0">
<div className="flex justify-between items-start mb-6">
<div className="flex flex-wrap gap-2">
<span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded font-label-caps text-[10px] tracking-widest uppercase">Full-Time</span>
<span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded font-label-caps text-[10px] tracking-widest uppercase">On-Site</span>
</div>
<span className="text-outline font-mono-data text-[12px]">ID: AR-198</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-4">BIM Coordinator</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">Orchestrate multi-disciplinary model coordination and ensure ISO certification compliance across global project phases.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-outline-variant/20">
<span className="font-label-caps text-label-caps text-primary group-hover:text-tertiary transition-colors">Apply Now</span>
<span className="material-symbols-outlined job-card-arrow text-primary">arrow_forward</span>
</div>
</div>
{/* Job Card 3 */}
<div className="job-card group cursor-pointer bg-primary-container border-l-4 border-primary p-8 rounded shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full duration-700 opacity-100 translate-y-0">
<div className="flex justify-between items-start mb-6">
<div className="flex flex-wrap gap-2">
<span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded font-label-caps text-[10px] tracking-widest uppercase">Contract</span>
<span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded font-label-caps text-[10px] tracking-widest uppercase">Hybrid</span>
</div>
<span className="text-outline font-mono-data text-[12px]">ID: AR-312</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-4">Civil Project Manager</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">Manage full lifecycle of civil works, from feasibility studies to site delivery, ensuring budget and safety KPI adherence.</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-outline-variant/20">
<span className="font-label-caps text-label-caps text-primary group-hover:text-tertiary transition-colors">Apply Now</span>
<span className="material-symbols-outlined job-card-arrow text-primary">arrow_forward</span>
</div>
</div>
</div>
</section>
{/* Section 3: Internship */}
<section className="bg-primary-container/20 border border-outline-variant/20 rounded-2xl p-12 lg:p-20 relative overflow-hidden" id="internship">
<div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
<span className="material-symbols-outlined text-[200px] text-primary">school</span>
</div>
<div className="max-w-3xl relative z-10">
<div className="section-divider pb-4 mb-8">
<h2 className="font-display-lg text-display-lg text-white mb-2 uppercase">Internship Program</h2>
<span className="font-label-caps text-label-caps text-secondary-container tracking-widest">EMERGING TALENT INCUBATOR</span>
</div>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
                        Are you a final-year engineering student or recent graduate ready to put theory into practice? Our Internship Program offers 6-month immersive rotations within our core technical divisions.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-12">
<div>
<h4 className="font-label-caps text-label-caps text-primary uppercase mb-4 tracking-wider">Summer 2025 Cohort</h4>
<p className="font-body-md text-on-surface-variant">Applications open until March 1st. Focused on Structural Systems and Sustainable Materials.</p>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-primary uppercase mb-4 tracking-wider">Qualifications</h4>
<p className="font-body-md text-on-surface-variant">BSc/MSc in Civil, Mechanical or Electrical Engineering. Proficient in AutoCAD/Revit.</p>
</div>
</div>
<button className="px-8 py-4 border-2 border-secondary-container text-secondary-container rounded font-label-caps text-label-caps hover:bg-secondary-container hover:text-white transition-all uppercase tracking-widest font-bold">
                        Inquire for Internships
                    </button>
</div>
</section>
{/* Application Section (Portal v2) */}
<section className="max-w-4xl mx-auto" id="application-form">
<div className="bg-primary-container/50 rounded-xl overflow-hidden border border-outline-variant/30 backdrop-blur-sm">
<div className="p-8 md:p-16">
<div className="mb-12 border-b border-outline-variant/30 pb-8 text-center">
<h2 className="font-display-lg text-display-lg text-on-surface mb-4">Application Portal v2</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Precision is our standard. Please submit your technical dossier below.</p>
</div>
{/* Banners */}
<div className="hidden mb-8 p-4 bg-secondary-container text-white rounded flex items-center gap-3 border border-secondary-fixed/20" id="success-banner">
<span className="material-symbols-outlined">check_circle</span>
<p className="font-label-caps text-label-caps">Application Logged. Confirmation dispatching to your inbox.</p>
</div>
<div className="hidden mb-8 p-4 bg-error-container text-on-error-container rounded flex items-center gap-3 border border-error/20" id="error-banner">
<span className="material-symbols-outlined">report</span>
<p className="font-label-caps text-label-caps">Validation Error: Review mandatory fields.</p>
</div>
<form className="space-y-10" id="job-app-form" onsubmit="handleFormSubmit(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-8">
<div className="space-y-3">
<label className="font-label-caps text-label-caps text-primary uppercase">Full Name</label>
<input className="w-full px-4 py-4 bg-primary-container border border-outline-variant/50 rounded font-body-md text-on-surface transition-all focus:border-secondary-container" placeholder="Enter legal name" required="" type="text"/>
</div>
<div className="space-y-3">
<label className="font-label-caps text-label-caps text-primary uppercase">Email Address</label>
<input className="w-full px-4 py-4 bg-primary-container border border-outline-variant/50 rounded font-body-md text-on-surface transition-all focus:border-secondary-container" placeholder="name@domain.com" required="" type="email"/>
</div>
<div className="space-y-3">
<label className="font-label-caps text-label-caps text-primary uppercase">Target Position</label>
<select className="w-full px-4 py-4 bg-primary-container border border-outline-variant/50 rounded font-body-md text-on-surface transition-all focus:border-secondary-container appearance-none" id="position-select" required="">
<option value="">Select vacancy...</option>
<option value="Senior Structural Engineer">Senior Structural Engineer</option>
<option value="BIM Coordinator">BIM Coordinator</option>
<option value="Civil Project Manager">Civil Project Manager</option>
<option value="Graduate Intern">Graduate Intern Program</option>
</select>
</div>
<div className="space-y-3">
<label className="font-label-caps text-label-caps text-primary uppercase">LinkedIn Profile</label>
<input className="w-full px-4 py-4 bg-primary-container border border-outline-variant/50 rounded font-body-md text-on-surface transition-all focus:border-secondary-container" placeholder="linkedin.com/in/profile" type="url"/>
</div>
</div>
<div className="space-y-3">
<label className="font-label-caps text-label-caps text-primary uppercase">Resume / Portfolio (PDF)</label>
<div className="file-upload-zone rounded p-12 flex flex-col items-center justify-center cursor-pointer group bg-background/50" id="drop-zone">
<input accept=".pdf" className="hidden" id="resume-input" type="file"/>
<span className="material-symbols-outlined text-5xl text-outline group-hover:text-secondary-container mb-4 transition-colors">inventory_2</span>
<p className="font-body-md text-body-md text-on-surface-variant text-center mb-2">
<span className="text-secondary-container font-bold">Initiate Upload</span> or drag file here
                                    </p>
<p className="font-mono-data text-mono-data text-outline">Max: 10MB (PDF/DOCX)</p>
<div className="hidden mt-6 px-6 py-3 bg-secondary-container text-white rounded font-mono-data text-mono-data flex items-center gap-3" id="file-name">
<span className="material-symbols-outlined text-sm">attach_file</span>
<span className="" id="name-text">filename.pdf</span>
<button className="hover:text-primary-fixed" type="button">
<span className="material-symbols-outlined text-sm">close</span>
</button>
</div>
</div>
</div>
<div className="space-y-3">
<label className="font-label-caps text-label-caps text-primary uppercase">Professional Executive Summary</label>
<textarea className="w-full px-4 py-4 bg-primary-container border border-outline-variant/50 rounded font-body-md text-on-surface transition-all focus:border-secondary-container" placeholder="Highlight key engineering milestones and competencies..." rows="5"></textarea>
</div>
<div className="flex flex-col md:flex-row items-center gap-6 pt-6">
<button className="px-12 py-5 bg-secondary-container text-white rounded font-label-caps text-label-caps shadow-lg shadow-secondary-container/20 hover:brightness-110 active:scale-95 transition-all w-full md:w-auto uppercase tracking-widest font-bold" type="submit">
                                    Transmit Application
                                </button>
<button className="px-8 py-5 text-on-surface-variant font-label-caps text-label-caps border border-outline-variant hover:bg-surface-container-highest rounded transition-colors uppercase tracking-widest" type="button">
                                    Save Progress
                                </button>
</div>
</form>
</div>
</div>
</section>
</div>

        </div>
    );
}
