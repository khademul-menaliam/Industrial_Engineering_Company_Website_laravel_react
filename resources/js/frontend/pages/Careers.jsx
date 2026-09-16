import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

// Static fallbacks for vacancies if loading fails
const FALLBACK_VACANCIES = [
    {
        ref: 'AR-204',
        title: 'Senior Structural Engineer',
        type: 'Immediate',
        description: 'Leading high-rise structural analysis using advanced FEA modeling. Required: PE License, 10+ years experience.'
    },
    {
        ref: 'AR-198',
        title: 'BIM Coordinator',
        type: 'Full-Time',
        description: 'Management of Revit models and multi-disciplinary coordination. ISO 19650 compliance oversight.'
    },
    {
        ref: 'AR-312',
        title: 'Civil Project Manager',
        type: 'Contract',
        description: 'Direct site operations for infrastructure delivery. Focus on safety KPI and budget management.'
    }
];

const ITEMS_PER_PAGE = 6; // 2 rows on 3-column desktop layout

export default function Careers() {
    const [vacancies, setVacancies] = useState(FALLBACK_VACANCIES);
    const [selectedPosition, setSelectedPosition] = useState('');
    const [fileName, setFileName] = useState('');
    const [dossierFile, setDossierFile] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showAll, setShowAll] = useState(false);
    
    // Form Inputs
    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formLinkedin, setFormLinkedin] = useState('');
    const [formSummary, setFormSummary] = useState('');

    const fileInputRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        axios.get('/api/careers')
            .then(res => {
                if (res.data.success && res.data.vacancies && res.data.vacancies.length > 0) {
                    setVacancies(res.data.vacancies);
                }
            })
            .catch(err => {
                console.error('Error loading vacancies:', err);
            });
    }, []);

    const handleJobCardClick = (title) => {
        setSelectedPosition(title);
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            setDossierFile(file);
        }
    };

    const resetFile = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setFileName('');
        setDossierFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData();
        formData.append('name', formName);
        formData.append('email', formEmail);
        formData.append('position', selectedPosition);
        formData.append('linkedin', formLinkedin);
        formData.append('summary', formSummary);
        if (dossierFile) {
            formData.append('dossier', dossierFile);
        }

        axios.post('/api/careers/apply', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => {
                setIsSubmitted(true);
                setSubmitting(false);
                setFormName('');
                setFormEmail('');
                setFormLinkedin('');
                setFormSummary('');
                setFileName('');
                setDossierFile(null);
                setSelectedPosition('');
                if (fileInputRef.current) fileInputRef.current.value = '';
                
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 4000);
            })
            .catch(err => {
                console.error(err);
                alert(err.response?.data?.message || 'Failed to submit application. Please verify inputs.');
                setSubmitting(false);
            });
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset page to 1 when search query changes
    };

    // Filter vacancies based on search query
    const filteredVacancies = vacancies.filter(v => 
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.ref.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Pagination calculations
    const totalPages = Math.ceil(filteredVacancies.length / ITEMS_PER_PAGE);
    const paginatedVacancies = showAll 
        ? filteredVacancies 
        : filteredVacancies.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className="w-full bg-background text-on-surface">
            {/* Hero */}
            <section className="relative h-[350px] md:h-[400px] flex items-center bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvuTpPHQiUF8AWDoCwA4kqw_PO_GQciyHYZ8UcxUpNMoSTKtKgmeCsjUtPRy9N_6fmkTxz4wHWCiinoDWX5xGH3XndC_T9cZGpZR7GmNCH6bkTai9vH9HeYpxzDGiJaSE3nHS83YN11K6NdHITWQUDqojLbj9_zLg1jRpabOHsEcdKnNG5Gukd7eGD8EIz3yd68DpqgwQx9MU0oECY1nTFkgeWhf4LkQDGSzS0qckA3BZRYTyKCTQsTw')" }}></div>
                </div>
                <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
                    <div className="max-w-2xl text-white">
                        <span className="text-xs font-bold tracking-[.3em] uppercase mb-4 text-outline-variant font-mono block">Employer Brand</span>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight uppercase">ENGINEERING CAREERS</h1>
                        <p className="text-base md:text-lg text-white/80 font-light max-w-lg leading-relaxed text-justify">Defining structural reliability and industrial excellence for the global market.</p>
                    </div>
                </div>
            </section>

            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 space-y-24">
                {/* Section 1: Why Join Us */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="why-join-us">
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-tight relative pb-4">
                                Why Join Us
                                <span className="absolute bottom-0 left-0 w-10 h-1 bg-tertiary"></span>
                            </h2>
                            <p className="mt-6 text-secondary leading-relaxed text-sm text-justify">
                                AR Engineering is an industrial leader in structural engineering. We seek individuals who value mathematical precision, operational reliability, and uncompromising safety standards.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-4 p-6 bg-white border border-outline-variant/30 rounded group hover:border-primary transition-all duration-300 shadow-none md:shadow-sm md:hover:shadow-md">
                                <span className="material-symbols-outlined text-primary text-2xl">verified</span>
                                <div>
                                    <h3 className="font-bold text-primary uppercase text-sm tracking-tight mb-1">Industrial Standards</h3>
                                    <p className="text-xs text-secondary text-justify leading-relaxed">Work within a framework of rigorous ISO-certified protocols on critical national infrastructure.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 bg-white border border-outline-variant/30 rounded group hover:border-primary transition-all duration-300 shadow-none md:shadow-sm md:hover:shadow-md">
                                <span className="material-symbols-outlined text-primary text-2xl">engineering</span>
                                <div>
                                    <h3 className="font-bold text-primary uppercase text-sm tracking-tight mb-1">Engineering Focus</h3>
                                    <p className="text-xs text-secondary text-justify leading-relaxed">We prioritize technical expertise over corporate fluff. Your engineering skill is your primary asset.</p>
                                </div>
                            </div>
                        </div>
                        <ul className="space-y-3 font-mono text-xs text-secondary">
                            <li className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-tertiary text-base">check</span> Continuing Technical Education</li>
                            <li className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-tertiary text-base">check</span> Comprehensive Health &amp; Life Insurance</li>
                            <li className="flex items-center gap-3 font-medium"><span className="material-symbols-outlined text-tertiary text-base">check</span> Modern BIM/FEA Workstation Allocation</li>
                        </ul>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="aspect-[16/10] bg-surface-container-low rounded overflow-hidden border border-outline-variant/30 shadow-none md:shadow-sm">
                            <img alt="Engineering professional" className="w-full h-full object-cover filter grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8yelI8zz3zZB_xOggCH44uFkZOchwr5JoCd_YwatDrH8n2bP7Fv04diGqoMNBFVXOMmzVXMm1Khsv2cD2J-0JkNKh8F3_z7DomR998JD4YQYPZ_UjxrXmIWGtoML1XMieoQUBHmdn4yp6fpzuwCxQHLj5ZUUIbQEb27rxJabHV_br09iEBSL1zbTfFXr_Y5NDva3iJXgqTJTFje6DCSKeQv2KRfD1T_jtIJ1E2FNjMq3V1JFqmuYHBw" />
                        </div>
                    </div>
                </section>

                {/* Section 2: Job Vacancies */}
                <section id="job-vacancies">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-tight relative pb-4">
                                Job Vacancies
                                <span className="absolute bottom-0 left-0 w-10 h-1 bg-tertiary"></span>
                            </h2>
                        </div>
                        <div className="w-full md:w-auto">
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-sm">search</span>
                                <input 
                                    className="w-full md:w-64 pl-10 pr-4 py-2 bg-background border border-outline-variant/30 rounded text-xs text-on-surface placeholder:text-outline-variant focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono"
                                    placeholder="FILTER BY DISCIPLINE..."
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {paginatedVacancies.map((vacancy, idx) => (
                            <div 
                                key={vacancy.id || idx} 
                                onClick={() => handleJobCardClick(vacancy.title)} 
                                className="bg-white border border-outline-variant/30 p-6 rounded flex flex-col h-full cursor-pointer group hover:border-primary transition-all duration-300 shadow-none md:shadow-sm md:hover:shadow-md"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <span className="bg-primary text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded font-mono tracking-wider shadow-sm">
                                        {vacancy.type}
                                    </span>
                                    <span className="text-[10px] font-bold text-secondary uppercase font-mono tracking-wider">
                                        Ref: {vacancy.ref}
                                    </span>
                                </div>
                                <h3 className="text-base font-bold text-primary mb-2 uppercase tracking-tight">{vacancy.title}</h3>
                                <p className="text-xs text-secondary mb-6 leading-relaxed text-justify flex-grow">{vacancy.description}</p>
                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-outline-variant/30">
                                    <span className="text-[11px] font-bold uppercase tracking-wider font-mono text-tertiary group-hover:text-primary transition-colors flex items-center gap-1">
                                        Apply Details
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">chevron_right</span>
                                    </span>
                                </div>
                            </div>
                        ))}
                        {filteredVacancies.length === 0 && (
                            <div className="col-span-full text-center py-12 text-sm text-secondary font-mono uppercase">
                                No Job Vacancies match your criteria.
                            </div>
                        )}
                    </div>

                    {/* Pagination & Show All Bar */}
                    {filteredVacancies.length > 0 && (
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 border-t border-outline-variant/30 pt-6">
                            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs">
                                <button 
                                    disabled={currentPage === 1 || showAll}
                                    onClick={() => {
                                        setCurrentPage(prev => Math.max(prev - 1, 1));
                                        document.getElementById('job-vacancies').scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="px-4 py-2.5 rounded border border-outline-variant/30 hover:border-primary text-primary disabled:opacity-30 disabled:hover:border-outline-variant/30 transition-colors flex items-center gap-1 font-bold uppercase tracking-wider bg-white font-mono text-xs cursor-pointer shadow-none md:shadow-sm"
                                >
                                    <span className="material-symbols-outlined text-sm">chevron_left</span> Prev
                                </button>
                                
                                {!showAll && Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                                    <button
                                        key={pageNum}
                                        onClick={() => {
                                            setCurrentPage(pageNum);
                                            document.getElementById('job-vacancies').scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className={`w-10 h-10 rounded font-bold font-mono text-xs transition-all flex items-center justify-center cursor-pointer ${
                                            currentPage === pageNum
                                                ? 'bg-primary text-white shadow-sm'
                                                : 'bg-white border border-outline-variant/30 hover:border-primary text-primary shadow-none md:shadow-sm'
                                        }`}
                                    >
                                        {pageNum}
                                    </button>
                                ))}

                                {showAll && (
                                    <span className="text-secondary font-mono uppercase px-3 py-2 bg-surface-container rounded border border-outline-variant/20 text-xs">
                                        Showing All Results ({filteredVacancies.length})
                                    </span>
                                )}

                                <button 
                                    disabled={currentPage === totalPages || showAll}
                                    onClick={() => {
                                        setCurrentPage(prev => Math.min(prev + 1, totalPages));
                                        document.getElementById('job-vacancies').scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="px-4 py-2.5 rounded border border-outline-variant/30 hover:border-primary text-primary disabled:opacity-30 disabled:hover:border-outline-variant/30 transition-colors flex items-center gap-1 font-bold uppercase tracking-wider bg-white font-mono text-xs cursor-pointer shadow-none md:shadow-sm"
                                >
                                    Next <span className="material-symbols-outlined text-sm">chevron_right</span>
                                </button>
                            </div>

                            <button
                                onClick={() => {
                                    setShowAll(!showAll);
                                    setCurrentPage(1);
                                }}
                                className="border border-primary text-primary hover:bg-surface-container font-mono font-bold text-xs px-5 py-2.5 rounded uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-sm">
                                    {showAll ? 'pages' : 'unfold_more'}
                                </span>
                                {showAll ? 'Paginated View' : 'See All'}
                            </button>
                        </div>
                    )}
                </section>

                {/* Section 3: Internship */}
                <section className="bg-primary text-white p-8 md:p-12 lg:p-16 rounded relative overflow-hidden border border-outline-variant/20 shadow-none md:shadow-md" id="internship">
                    <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                        <span className="material-symbols-outlined text-[240px]">architecture</span>
                    </div>
                    <div className="max-w-3xl relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-6">Internship Program</h2>
                        <p className="text-sm sm:text-base text-white/85 mb-8 leading-relaxed text-justify max-w-2xl">
                            Designed for final-year engineering students. We provide 6-month immersive rotations within our structural and civil divisions to build practical technical competencies.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 border-l border-white/20 pl-6 font-mono">
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-tertiary mb-2">Summer Cohort</h4>
                                <p className="text-xs text-white/75 leading-relaxed text-justify">Applications for the 2025 cycle are currently being processed. Closing date: March 1st.</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-tertiary mb-2">Prerequisites</h4>
                                <p className="text-xs text-white/75 leading-relaxed text-justify">Enrollment in an accredited Engineering program (Civil, Structural, or Mechanical).</p>
                            </div>
                        </div>
                        <button className="border border-white/30 hover:bg-white/10 text-white font-mono font-bold text-xs px-8 py-4 rounded uppercase tracking-widest transition-all backdrop-blur-sm cursor-pointer" onClick={() => handleJobCardClick('Graduate Intern Program')}>
                            Program Inquiry
                        </button>
                    </div>
                </section>

                {/* Application Section */}
                <section ref={formRef} className="max-w-4xl mx-auto" id="application-form">
                    <div className="bg-white border border-outline-variant/30 p-6 md:p-10 lg:p-12 rounded shadow-none md:shadow-sm">
                        <div className="mb-12 pb-6 border-b border-outline-variant/30">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-tight mb-2">Application Portal v2</h2>
                            <p className="text-secondary text-sm">Please complete all mandatory fields and attach your technical dossier for review.</p>
                        </div>
                        
                        {isSubmitted && (
                            <div className="mb-8 p-4 bg-primary text-white rounded text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-3 shadow-sm">
                                <span className="material-symbols-outlined text-base">check_circle</span> Application Transmitted Successfully.
                            </div>
                        )}
                        
                        <form className="space-y-8" id="job-app-form" onSubmit={handleFormSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="block text-[10px] font-mono font-bold text-primary mb-1 uppercase tracking-wider">Legal Full Name</label>
                                    <input
                                        className="w-full rounded border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-sm px-4 py-2.5 text-on-surface transition-all"
                                        required
                                        type="text"
                                        value={formName}
                                        onChange={e => setFormName(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] font-mono font-bold text-primary mb-1 uppercase tracking-wider">Corporate Email Address</label>
                                    <input
                                        className="w-full rounded border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-sm px-4 py-2.5 text-on-surface transition-all"
                                        required
                                        type="email"
                                        value={formEmail}
                                        onChange={e => setFormEmail(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] font-mono font-bold text-primary mb-1 uppercase tracking-wider">Specified Position</label>
                                    <select
                                        value={selectedPosition}
                                        onChange={(e) => setSelectedPosition(e.target.value)}
                                        className="w-full rounded border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-sm px-4 py-2.5 text-on-surface transition-all"
                                        required
                                    >
                                        <option value="">Select vacancy...</option>
                                        {vacancies.map((vacancy, index) => (
                                            <option key={vacancy.id || index} value={vacancy.title}>{vacancy.title}</option>
                                        ))}
                                        <option value="Graduate Intern Program">Graduate Intern Program</option>
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] font-mono font-bold text-primary mb-1 uppercase tracking-wider">LinkedIn / Professional Link</label>
                                    <input
                                        className="w-full rounded border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-sm px-4 py-2.5 text-on-surface transition-all"
                                        type="url"
                                        value={formLinkedin}
                                        onChange={e => setFormLinkedin(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="block text-[10px] font-mono font-bold text-primary mb-1 uppercase tracking-wider">Technical Dossier (PDF/DOCX)</label>
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className="file-upload-zone rounded p-8 flex flex-col items-center justify-center cursor-pointer bg-background/50 hover:bg-surface-container-low transition-colors border border-dashed border-outline-variant/40"
                                >
                                    <input ref={fileInputRef} accept=".pdf,.docx,.doc" className="hidden" type="file" onChange={handleFileChange} />
                                    <span className="material-symbols-outlined text-3xl text-outline mb-2">upload_file</span>
                                    <p className="text-xs font-bold text-on-surface uppercase tracking-wider mb-1">Upload Documents</p>
                                    <p className="text-[10px] text-secondary uppercase font-mono">Size limit: 10 megabytes</p>
                                    {fileName && (
                                        <div className="mt-4 px-3 py-1.5 bg-primary text-white rounded text-[10px] font-bold uppercase font-mono tracking-wider flex items-center gap-2 shadow-sm">
                                            <span className="material-symbols-outlined text-sm">attach_file</span>
                                            <span className="truncate max-w-[180px]">{fileName}</span>
                                            <button className="ml-2 hover:text-tertiary" onClick={resetFile} type="button">
                                                <span className="material-symbols-outlined text-sm">close</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="block text-[10px] font-mono font-bold text-primary mb-1 uppercase tracking-wider">Executive Summary / Experience Overview</label>
                                <textarea
                                    className="w-full rounded border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-sm px-4 py-2.5 text-on-surface transition-all"
                                    placeholder="Summarize your engineering expertise..."
                                    rows="4"
                                    value={formSummary}
                                    onChange={e => setFormSummary(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-6 pt-4">
                                <button
                                    disabled={submitting}
                                    className="py-4 px-10 bg-primary text-white rounded font-bold font-mono text-xs tracking-widest uppercase hover:brightness-110 shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 w-full md:w-auto disabled:opacity-50 cursor-pointer"
                                    type="submit"
                                >
                                    {submitting ? 'TRANSMITTING...' : 'Transmit Application'}
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}
