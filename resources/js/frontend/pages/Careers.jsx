import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Careers() {
    const [selectedPosition, setSelectedPosition] = useState('');
    const [fileName, setFileName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const fileInputRef = useRef(null);
    const formRef = useRef(null);

    const handleJobCardClick = (title) => {
        setSelectedPosition(title);
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const resetFile = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setFileName('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            e.target.reset();
            setFileName('');
            setSelectedPosition('');
        }, 3000);
    };

    return (
        <div className="w-full">
            {/* Hero */}
            <section className="relative h-[350px] md:h-[400px] flex items-center bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvuTpPHQiUF8AWDoCwA4kqw_PO_GQciyHYZ8UcxUpNMoSTKtKgmeCsjUtPRy9N_6fmkTxz4wHWCiinoDWX5xGH3XndC_T9cZGpZR7GmNCH6bkTai9vH9HeYpxzDGiJaSE3nHS83YN11K6NdHITWQUDqojLbj9_zLg1jRpabOHsEcdKnNG5Gukd7eGD8EIz3yd68DpqgwQx9MU0oECY1nTFkgeWhf4LkQDGSzS0qckA3BZRYTyKCTQsTw')" }}></div>
                </div>
                <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full">
                    <div className="max-w-2xl text-white">
                        <p className="text-xs font-bold tracking-[.3em] uppercase mb-4 text-outline-variant">Employer Brand</p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight uppercase">ENGINEERING CAREERS</h1>
                        <p className="text-lg text-primary-fixed font-medium max-w-lg leading-relaxed">Defining structural reliability and industrial excellence for the global market.</p>
                    </div>
                </div>
            </section>

            <div className="max-w-container-max mx-auto px-margin-desktop py-24 space-y-32">
                {/* Section 1: Why Join Us */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start" id="why-join-us">
                    <div className="lg:col-span-5 space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold text-primary uppercase tracking-tight relative pb-4">
                                Why Join Us
                                <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-tertiary"></span>
                            </h2>
                            <p className="mt-8 text-on-surface-variant leading-relaxed text-sm">
                                Titan Precision is an industrial leader in structural engineering. We seek individuals who value mathematical precision, operational reliability, and uncompromising safety standards.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex gap-4 p-5 bg-white border border-outline-variant rounded hover:border-tertiary transition-colors duration-300">
                                <span className="material-symbols-outlined text-primary">verified</span>
                                <div>
                                    <h4 className="font-bold text-primary uppercase text-sm tracking-wide mb-1">Industrial Standards</h4>
                                    <p className="text-xs text-on-surface-variant">Work within a framework of rigorous ISO-certified protocols on critical national infrastructure.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-5 bg-white border border-outline-variant rounded hover:border-tertiary transition-colors duration-300">
                                <span className="material-symbols-outlined text-primary">engineering</span>
                                <div>
                                    <h4 className="font-bold text-primary uppercase text-sm tracking-wide mb-1">Engineering Focus</h4>
                                    <p className="text-xs text-on-surface-variant">We prioritize technical expertise over corporate fluff. Your engineering skill is your primary asset.</p>
                                </div>
                            </div>
                        </div>
                        <ul className="space-y-3 font-mono text-xs">
                            <li className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-tertiary text-lg">check</span> Continuing Technical Education</li>
                            <li className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-tertiary text-lg">check</span> Comprehensive Health &amp; Life Insurance</li>
                            <li className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-tertiary text-lg">check</span> Modern BIM/FEA Workstation Allocation</li>
                        </ul>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="aspect-[16/10] bg-surface-container rounded overflow-hidden border border-outline-variant/30">
                            <img alt="Engineering professional" className="w-full h-full object-cover filter grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8yelI8zz3zZB_xOggCH44uFkZOchwr5JoCd_YwatDrH8n2bP7Fv04diGqoMNBFVXOMmzVXMm1Khsv2cD2J-0JkNKh8F3_z7DomR998JD4YQYPZ_UjxrXmIWGtoML1XMieoQUBHmdn4yp6fpzuwCxQHLj5ZUUIbQEb27rxJabHV_br09iEBSL1zbTfFXr_Y5NDva3iJXgqTJTFje6DCSKeQv2KRfD1T_jtIJ1E2FNjMq3V1JFqmuYHBw" />
                        </div>
                    </div>
                </section>

                {/* Section 2: Job Vacancies */}
                <section id="job-vacancies">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-primary uppercase tracking-tight relative pb-4">
                                Job Vacancies
                                <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-tertiary"></span>
                            </h2>
                        </div>
                        <div className="w-full md:w-auto">
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-sm">search</span>
                                <input className="pl-10 pr-4 py-2 bg-white border border-outline-variant rounded text-xs font-semibold w-full md:w-64 placeholder:text-outline focus:border-primary focus:ring-1 focus:ring-primary" placeholder="FILTER BY DISCIPLINE..." type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Job Card 1 */}
                        <div onClick={() => handleJobCardClick('Senior Structural Engineer')} className="bg-white border border-outline-variant p-8 rounded flex flex-col h-full cursor-pointer group hover:border-primary hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-[10px] font-bold text-tertiary border border-tertiary px-2 py-0.5 rounded uppercase tracking-tighter">Immediate</span>
                                <span className="text-[10px] font-bold text-outline-variant uppercase font-mono tracking-wider">Ref: AR-204</span>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3 uppercase tracking-tight">Senior Structural Engineer</h3>
                            <p className="text-xs text-on-surface-variant mb-10 leading-relaxed">Leading high-rise structural analysis using advanced FEA modeling. Required: PE License, 10+ years experience.</p>
                            <div className="mt-auto flex items-center justify-between pt-6 border-t border-outline-variant/30">
                                <span className="text-[11px] font-bold uppercase tracking-widest text-primary group-hover:text-tertiary transition-colors">Review Details</span>
                                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">chevron_right</span>
                            </div>
                        </div>
                        {/* Job Card 2 */}
                        <div onClick={() => handleJobCardClick('BIM Coordinator')} className="bg-white border border-outline-variant p-8 rounded flex flex-col h-full cursor-pointer group hover:border-primary hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-[10px] font-bold text-on-surface-variant border border-outline-variant px-2 py-0.5 rounded uppercase tracking-tighter">Full-Time</span>
                                <span className="text-[10px] font-bold text-outline-variant uppercase font-mono tracking-wider">Ref: AR-198</span>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3 uppercase tracking-tight">BIM Coordinator</h3>
                            <p className="text-xs text-on-surface-variant mb-10 leading-relaxed">Management of Revit models and multi-disciplinary coordination. ISO 19650 compliance oversight.</p>
                            <div className="mt-auto flex items-center justify-between pt-6 border-t border-outline-variant/30">
                                <span className="text-[11px] font-bold uppercase tracking-widest text-primary group-hover:text-tertiary transition-colors">Review Details</span>
                                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">chevron_right</span>
                            </div>
                        </div>
                        {/* Job Card 3 */}
                        <div onClick={() => handleJobCardClick('Civil Project Manager')} className="bg-white border border-outline-variant p-8 rounded flex flex-col h-full cursor-pointer group hover:border-primary hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-[10px] font-bold text-on-surface-variant border border-outline-variant px-2 py-0.5 rounded uppercase tracking-tighter">Contract</span>
                                <span className="text-[10px] font-bold text-outline-variant uppercase font-mono tracking-wider">Ref: AR-312</span>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3 uppercase tracking-tight">Civil Project Manager</h3>
                            <p className="text-xs text-on-surface-variant mb-10 leading-relaxed">Direct site operations for infrastructure delivery. Focus on safety KPI and budget management.</p>
                            <div className="mt-auto flex items-center justify-between pt-6 border-t border-outline-variant/30">
                                <span className="text-[11px] font-bold uppercase tracking-widest text-primary group-hover:text-tertiary transition-colors">Review Details</span>
                                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">chevron_right</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Internship */}
                <section className="bg-primary text-white p-12 lg:p-20 rounded relative overflow-hidden" id="internship">
                    <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                        <span className="material-symbols-outlined text-[240px]">architecture</span>
                    </div>
                    <div className="max-w-3xl relative z-10">
                        <h2 className="text-3xl font-bold uppercase tracking-tight mb-8">Internship Program</h2>
                        <p className="text-base text-primary-fixed opacity-90 mb-10 leading-relaxed">
                            Designed for final-year engineering students. We provide 6-month immersive rotations within our structural and civil divisions to build practical technical competencies.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 border-l border-white/20 pl-8 font-mono">
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-tertiary mb-2">Summer Cohort</h4>
                                <p className="text-xs opacity-80 leading-relaxed">Applications for the 2025 cycle are currently being processed. Closing date: March 1st.</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-tertiary mb-2">Prerequisites</h4>
                                <p className="text-xs opacity-80 leading-relaxed">Enrollment in an accredited Engineering program (Civil, Structural, or Mechanical).</p>
                            </div>
                        </div>
                        <button className="px-10 py-3 border border-white text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-200" onClick={() => handleJobCardClick('Graduate Intern')}>
                            Program Inquiry
                        </button>
                    </div>
                </section>

                {/* Application Section */}
                <section ref={formRef} className="max-w-4xl mx-auto" id="application-form">
                    <div className="bg-white border border-outline-variant p-8 md:p-16 rounded shadow-sm">
                        <div className="mb-16 pb-8 border-b border-outline-variant/30">
                            <h2 className="text-3xl font-bold text-primary uppercase tracking-tight mb-4">Application Portal v2</h2>
                            <p className="text-on-surface-variant text-sm">Please complete all mandatory fields and attach your technical dossier for review.</p>
                        </div>
                        
                        {isSubmitted && (
                            <div className="mb-8 p-4 bg-primary text-white rounded text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                                <span className="material-symbols-outlined">check_circle</span> Application Transmitted Successfully.
                            </div>
                        )}
                        
                        <form className="space-y-12" id="job-app-form" onSubmit={handleFormSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest block font-mono">Legal Full Name</label>
                                    <input className="w-full px-4 py-3 bg-white border border-outline-variant rounded text-sm transition-all focus:border-primary focus:ring-1 focus:ring-primary" required type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest block font-mono">Corporate Email Address</label>
                                    <input className="w-full px-4 py-3 bg-white border border-outline-variant rounded text-sm transition-all focus:border-primary focus:ring-1 focus:ring-primary" required type="email" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest block font-mono">Specified Position</label>
                                    <select 
                                        value={selectedPosition} 
                                        onChange={(e) => setSelectedPosition(e.target.value)} 
                                        className="w-full px-4 py-3 bg-white border border-outline-variant rounded text-sm transition-all focus:border-primary focus:ring-1 focus:ring-primary" 
                                        required
                                    >
                                        <option value="">Select vacancy...</option>
                                        <option value="Senior Structural Engineer">Senior Structural Engineer</option>
                                        <option value="BIM Coordinator">BIM Coordinator</option>
                                        <option value="Civil Project Manager">Civil Project Manager</option>
                                        <option value="Graduate Intern">Graduate Intern Program</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest block font-mono">LinkedIn / Professional Link</label>
                                    <input className="w-full px-4 py-3 bg-white border border-outline-variant rounded text-sm transition-all focus:border-primary focus:ring-1 focus:ring-primary" type="url" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-primary uppercase tracking-widest block font-mono">Technical Dossier (PDF/DOCX)</label>
                                <div 
                                    onClick={() => fileInputRef.current?.click()}
                                    className="file-upload-zone rounded-lg p-10 flex flex-col items-center justify-center cursor-pointer bg-background/30 hover:bg-background/50 transition-colors border border-dashed border-outline-variant"
                                >
                                    <input ref={fileInputRef} accept=".pdf,.docx" className="hidden" type="file" onChange={handleFileChange} />
                                    <span className="material-symbols-outlined text-3xl text-outline mb-3">upload_file</span>
                                    <p className="text-xs font-bold text-on-surface uppercase tracking-wider mb-1">Upload Documents</p>
                                    <p className="text-[10px] text-outline-variant uppercase font-mono">Size limit: 10 megabytes</p>
                                    {fileName && (
                                        <div className="mt-6 px-4 py-2 bg-primary text-white rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-2">
                                            <span className="material-symbols-outlined text-sm">attach_file</span>
                                            <span className="truncate max-w-[180px]">{fileName}</span>
                                            <button className="ml-2 hover:text-tertiary" onClick={resetFile} type="button">
                                                <span className="material-symbols-outlined text-sm">close</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-primary uppercase tracking-widest block font-mono">Executive Summary / Experience Overview</label>
                                <textarea className="w-full px-4 py-3 bg-white border border-outline-variant rounded text-sm transition-all focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Summarize your engineering expertise..." rows="4"></textarea>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-6 pt-6">
                                <button className="px-12 py-4 bg-tertiary text-white text-xs font-bold uppercase tracking-[.2em] hover:brightness-110 active:scale-95 transition-all w-full md:w-auto shadow-sm" type="submit">
                                    Transmit Application
                                </button>
                                <button className="text-[10px] font-bold text-outline-variant uppercase tracking-widest hover:text-primary transition-colors" type="button">
                                    Save Progress (Draft)
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}
