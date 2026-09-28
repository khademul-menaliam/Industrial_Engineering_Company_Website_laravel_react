import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Static Fallbacks for robustness
const FALLBACK_SETTINGS = {
    contact_title: 'CONTACT US',
    contact_subtitle: 'Connect with our team',
    contact_urgent_title: 'URGENT: SAFETY INQUIRY',
    contact_urgent_description: 'For immediate structural failure concerns or site safety hazards, use our priority channel.',
    contact_urgent_btn: 'PRIORITY RESPONSE',
    contact_address: "1280 Engineering Plaza\nSuite 400, Industrial District\nChicago, IL 60601",
    contact_phone: '+1 (800) 555-0192',
    contact_phone_hours: 'Mon - Fri: 8:00 AM - 6:00 PM CST',
    contact_email: 'info@arengineeringbd.com',
    contact_map_image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxU7jTojfIGAD6pxvJSGDir2eB2D-tRFcfxCAfIMdI8aTEwS8z1PbjiaCDajjAknsLj1zOS3AFQ_LpHUky4Tfe7YsTKCltIvvEyF2Jv6K1K9pxmT80GNP8Dr-6SQImvY8i-hOA8RsIHrlByMI2rbargNC0ELEb77OjQpUrDQ2DTd2zMwEVyifZ_amef2R4LVlIxQZcjmGAIG8VYZhK9e-GoybaRkNkN4g2wzmHI4rQb_vSBGE_re5Q3Q',
    contact_response_time: '< 12 HOURS',
};

export default function Contact() {
    const [settings, setSettings] = useState(FALLBACK_SETTINGS);
    const [focusedInput, setFocusedInput] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    // Form inputs
    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formDept, setFormDept] = useState('Structural Engineering');
    const [formDetails, setFormDetails] = useState('');

    useEffect(() => {
        axios.get('/api/contact')
            .then(res => {
                if (res.data.success && res.data.settings) {
                    setSettings(prev => ({
                        ...prev,
                        ...res.data.settings
                    }));
                }
            })
            .catch(err => {
                console.error('Error loading contact settings:', err);
            });
    }, []);

    const handleFocus = (name) => {
        setFocusedInput(name);
    };

    const handleBlur = () => {
        setFocusedInput('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        const payload = {
            name: formName,
            email: formEmail,
            department: formDept,
            details: formDetails
        };

        axios.post('/api/contact/submit', payload)
            .then(res => {
                setIsSubmitted(true);
                setFormName('');
                setFormEmail('');
                setFormDetails('');
                setSubmitting(false);
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 4000);
            })
            .catch(err => {
                console.error(err);
                alert('Failed to transmit inquiry. Please check connection and try again.');
                setSubmitting(false);
            });
    };

    // Helper to get setting
    const getVal = (key) => settings[key] || FALLBACK_SETTINGS[key];

    return (
        <div className="w-full bg-background text-on-surface">
            <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
                {/* Page Title */}
                <div className="mb-16">
                    <span className="text-xs font-bold uppercase tracking-widest text-tertiary font-mono mb-3 block">{getVal('contact_subtitle')}</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 uppercase tracking-tight">
                        {getVal('contact_title')} <span className="text-tertiary">AR Engineering</span>
                    </h1>
                    <div className="w-24 h-1 bg-tertiary"></div>
                </div>

                {/* Urgent Callout */}
                <div className="mb-12 bg-tertiary text-white p-6 md:p-8 rounded flex flex-col md:flex-row justify-between items-center gap-6 shadow-none md:shadow-md">
                    <div className="flex items-center gap-6">
                        <span className="material-symbols-outlined text-4xl md:text-5xl shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>report_problem</span>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">{getVal('contact_urgent_title')}</h2>
                            <p className="text-sm opacity-95 mt-1 leading-relaxed text-justify">{getVal('contact_urgent_description')}</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => alert("Urgent Safety priority channel connected. Deploying direct terminal contact...")}
                        className="whitespace-nowrap bg-white text-tertiary hover:bg-surface-container font-mono font-bold text-xs px-8 py-4 rounded uppercase tracking-widest transition-colors cursor-pointer shadow-none md:shadow-sm shrink-0"
                    >
                        {getVal('contact_urgent_btn')}
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Pane: Contact Form Card */}
                    <div className="bg-white rounded border border-outline-variant/30 p-8 md:p-12 order-2 lg:order-1 shadow-none md:shadow-sm">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary uppercase tracking-tight">Send a Message</h2>
                        
                        {isSubmitted && (
                            <div className="mb-6 p-4 bg-primary text-white rounded text-xs font-bold uppercase font-mono tracking-wider flex items-center gap-2 shadow-sm">
                                <span className="material-symbols-outlined text-base">check_circle</span> Inquiry Transmitted Successfully
                            </div>
                        )}
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="block text-[10px] font-mono font-bold text-primary mb-1 uppercase tracking-wider">FULL NAME</label>
                                    <input 
                                        onFocus={() => handleFocus('name')}
                                        onBlur={handleBlur}
                                        required
                                        className="w-full rounded border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-sm px-4 py-2.5 text-on-surface transition-all"
                                        placeholder="John Doe" 
                                        type="text" 
                                        value={formName}
                                        onChange={e => setFormName(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] font-mono font-bold text-primary mb-1 uppercase tracking-wider">CORPORATE EMAIL</label>
                                    <input 
                                        onFocus={() => handleFocus('email')}
                                        onBlur={handleBlur}
                                        required
                                        className="w-full rounded border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-sm px-4 py-2.5 text-on-surface transition-all"
                                        placeholder="j.doe@company.com" 
                                        type="email" 
                                        value={formEmail}
                                        onChange={e => setFormEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="block text-[10px] font-mono font-bold text-primary mb-1 uppercase tracking-wider">DEPARTMENT INTEREST</label>
                                <select 
                                    onFocus={() => handleFocus('dept')}
                                    onBlur={handleBlur}
                                    className="w-full rounded border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-sm px-4 py-2.5 text-on-surface transition-all"
                                    value={formDept}
                                    onChange={e => setFormDept(e.target.value)}
                                >
                                    <option value="Structural Engineering">Structural Engineering</option>
                                    <option value="Compliance & Safety">Compliance &amp; Safety</option>
                                    <option value="Technical Resources">Technical Resources</option>
                                    <option value="Project Procurement">Project Procurement</option>
                                </select>
                            </div>
                            <div className="space-y-1">
                                <label className="block text-[10px] font-mono font-bold text-primary mb-1 uppercase tracking-wider">PROJECT DETAILS</label>
                                <textarea 
                                    onFocus={() => handleFocus('details')}
                                    onBlur={handleBlur}
                                    required
                                    className="w-full rounded border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-sm p-4 text-on-surface transition-all"
                                    placeholder="Please describe your technical requirements..." 
                                    rows="5"
                                    value={formDetails}
                                    onChange={e => setFormDetails(e.target.value)}
                                ></textarea>
                            </div>
                            <button 
                                disabled={submitting}
                                className="w-full py-4 bg-primary text-white rounded font-bold font-mono text-xs tracking-widest uppercase hover:brightness-110 shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 cursor-pointer"
                                type="submit"
                            >
                                {submitting ? 'TRANSMITTING...' : 'SUBMIT INQUIRY'}
                            </button>
                        </form>

                        {/* RESPONSE TIME CARD */}
                        <div className="mt-8 bg-surface-container-low p-5 rounded border-l-4 border-tertiary border border-outline-variant/30 flex items-center justify-between shadow-none md:shadow-sm">
                            <div>
                                <p className="text-[10px] font-bold text-secondary mb-1 uppercase tracking-wider font-mono">RESPONSE TIME</p>
                                <p className="text-lg font-bold text-primary font-mono">{getVal('contact_response_time')}</p>
                            </div>
                            <span className="material-symbols-outlined text-tertiary text-2xl">speed</span>
                        </div>
                    </div>

                    {/* Right Pane: Info & Map Card */}
                    <div className="flex flex-col gap-8 order-1 lg:order-2">
                        <div className="bg-white rounded p-8 md:p-12 border border-outline-variant/30 shadow-none md:shadow-sm">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary uppercase tracking-tight">Corporate Headquarters</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="bg-surface-container-low p-3 rounded border border-outline-variant/30 shrink-0">
                                        <span className="material-symbols-outlined text-secondary text-2xl">location_on</span>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-secondary mb-1 uppercase tracking-wider font-mono block">OFFICE ADDRESS</span>
                                        <p className="text-base font-bold text-primary whitespace-pre-line">{getVal('contact_address')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="bg-surface-container-low p-3 rounded border border-outline-variant/30 shrink-0">
                                        <span className="material-symbols-outlined text-secondary text-2xl">phone_in_talk</span>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-secondary mb-1 uppercase tracking-wider font-mono block">TECHNICAL SUPPORT</span>
                                        <p className="text-base font-bold text-primary">{getVal('contact_phone')}</p>
                                        <p className="text-xs text-secondary font-mono mt-1">{getVal('contact_phone_hours')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="bg-surface-container-low p-3 rounded border border-outline-variant/30 shrink-0">
                                        <span className="material-symbols-outlined text-secondary text-2xl">mail</span>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-secondary mb-1 uppercase tracking-wider font-mono block">GENERAL INQUIRIES</span>
                                        <p className="text-base font-bold text-primary">{getVal('contact_email')}</p>
                                    </div>
                                </div>
                            </div>
                            {/* Inline Map */}
                            <div className="mt-12 w-full h-64 rounded overflow-hidden border border-outline-variant/30 shadow-none md:shadow-sm relative group">
                                <img 
                                    className="absolute inset-0 w-full h-full object-cover grayscale-0 md:grayscale opacity-100 md:opacity-50 md:group-hover:opacity-100 md:group-hover:grayscale-0 transition-all duration-500" 
                                    alt="Corporate office complex map" 
                                    src={getVal('contact_map_image')} 
                                />
                                <div 
                                    onClick={() => window.open('https://maps.google.com', '_blank')}
                                    className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded shadow-sm text-[10px] font-bold font-mono uppercase tracking-wider flex items-center gap-2 border border-outline-variant/30 cursor-pointer hover:bg-surface-container transition-colors text-primary"
                                >
                                    <span className="material-symbols-outlined text-secondary text-sm">explore</span>
                                    OPEN IN MAPS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
