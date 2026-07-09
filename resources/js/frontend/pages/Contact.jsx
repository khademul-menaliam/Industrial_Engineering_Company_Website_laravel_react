import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
    const [focusedInput, setFocusedInput] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFocus = (name) => {
        setFocusedInput(name);
    };

    const handleBlur = () => {
        setFocusedInput('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            e.target.reset();
        }, 3000);
    };

    return (
        <div className="w-full">
            <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
                {/* Page Title */}
                <div className="mb-16">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-[#4c616c] mb-4">Connect with our team</h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 uppercase tracking-tight">CONTACT US <span className="text-tertiary">Titan Precision v2</span></h1>
                    <div className="w-24 h-1.5 bg-tertiary rounded-full"></div>
                </div>

                {/* Urgent Callout */}
                <div className="mb-12 bg-tertiary text-white p-8 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
                    <div className="flex items-center gap-6">
                        <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>report_problem</span>
                        <div>
                            <h3 className="text-2xl font-bold uppercase tracking-tight">URGENT: SAFETY INQUIRY</h3>
                            <p className="text-sm opacity-95 mt-1 leading-relaxed">For immediate structural failure concerns or site safety hazards, use our priority channel.</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => alert("Urgent Safety priority channel connected. Deploying direct terminal contact...")}
                        className="whitespace-nowrap bg-white text-tertiary px-8 py-4 rounded-lg font-bold text-xs tracking-widest hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        PRIORITY RESPONSE
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Pane: Contact Form Card */}
                    <div className="bg-white rounded-xl border border-outline-variant/30 p-8 md:p-12 order-2 lg:order-1 shadow-sm">
                        <h3 className="text-2xl font-bold mb-8 text-primary uppercase tracking-tight">Send a Message</h3>
                        
                        {isSubmitted && (
                            <div className="mb-6 p-4 bg-[#cfe6f2] border border-[#b4cad6] rounded-lg text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                <span className="material-symbols-outlined">check_circle</span> Inquiry Transmitted Successfully
                            </div>
                        )}
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className={`text-[10px] font-bold tracking-wider uppercase transition-colors duration-200 ${focusedInput === 'name' ? 'text-[#4c616c]' : 'text-on-surface-variant'}`}>FULL NAME</label>
                                    <input 
                                        onFocus={() => handleFocus('name')}
                                        onBlur={handleBlur}
                                        required
                                        className="w-full h-14 px-4 bg-background border border-outline-variant/30 rounded-lg focus:outline-none focus:border-[#4c616c] focus:ring-1 focus:ring-[#4c616c] text-on-surface text-sm transition-all" 
                                        placeholder="John Doe" 
                                        type="text" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className={`text-[10px] font-bold tracking-wider uppercase transition-colors duration-200 ${focusedInput === 'email' ? 'text-[#4c616c]' : 'text-on-surface-variant'}`}>CORPORATE EMAIL</label>
                                    <input 
                                        onFocus={() => handleFocus('email')}
                                        onBlur={handleBlur}
                                        required
                                        className="w-full h-14 px-4 bg-background border border-outline-variant/30 rounded-lg focus:outline-none focus:border-[#4c616c] focus:ring-1 focus:ring-[#4c616c] text-on-surface text-sm transition-all" 
                                        placeholder="j.doe@company.com" 
                                        type="email" 
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className={`text-[10px] font-bold tracking-wider uppercase transition-colors duration-200 ${focusedInput === 'dept' ? 'text-[#4c616c]' : 'text-on-surface-variant'}`}>DEPARTMENT INTEREST</label>
                                <select 
                                    onFocus={() => handleFocus('dept')}
                                    onBlur={handleBlur}
                                    className="w-full h-14 px-4 bg-background border border-outline-variant/30 rounded-lg focus:outline-none focus:border-[#4c616c] focus:ring-1 focus:ring-[#4c616c] text-on-surface text-sm transition-all appearance-none"
                                >
                                    <option>Structural Engineering</option>
                                    <option>Compliance &amp; Safety</option>
                                    <option>Technical Resources</option>
                                    <option>Project Procurement</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className={`text-[10px] font-bold tracking-wider uppercase transition-colors duration-200 ${focusedInput === 'details' ? 'text-[#4c616c]' : 'text-on-surface-variant'}`}>PROJECT DETAILS</label>
                                <textarea 
                                    onFocus={() => handleFocus('details')}
                                    onBlur={handleBlur}
                                    required
                                    className="w-full p-4 bg-background border border-outline-variant/30 rounded-lg focus:outline-none focus:border-[#4c616c] focus:ring-1 focus:ring-[#4c616c] text-on-surface text-sm transition-all" 
                                    placeholder="Please describe your technical requirements..." 
                                    rows="5"
                                ></textarea>
                            </div>
                            <button className="w-full py-4 bg-primary text-white rounded-lg font-bold text-xs tracking-widest uppercase hover:brightness-110 shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0" type="submit">
                                SUBMIT INQUIRY
                            </button>
                        </form>
                    </div>

                    {/* Right Pane: Info & Map Card */}
                    <div className="flex flex-col gap-8 order-1 lg:order-2">
                        <div className="bg-white rounded-xl p-8 md:p-12 border border-outline-variant/30 shadow-sm">
                            <h3 className="text-2xl font-bold mb-8 text-primary uppercase tracking-tight">Corporate Headquarters</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="bg-surface-container p-3 rounded-lg border border-outline-variant/30">
                                        <span className="material-symbols-outlined text-[#4c616c] !text-3xl">location_on</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-bold text-[#4c616c] mb-1 uppercase tracking-wider font-mono">OFFICE ADDRESS</h4>
                                        <p className="text-base font-bold text-primary">1280 Engineering Plaza<br />Suite 400, Industrial District<br />Chicago, IL 60601</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="bg-surface-container p-3 rounded-lg border border-outline-variant/30">
                                        <span className="material-symbols-outlined text-[#4c616c] !text-3xl">phone_in_talk</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-bold text-[#4c616c] mb-1 uppercase tracking-wider font-mono">TECHNICAL SUPPORT</h4>
                                        <p className="text-base font-bold text-primary">+1 (800) 555-0192</p>
                                        <p className="text-xs text-on-surface-variant font-mono mt-1">Mon - Fri: 8:00 AM - 6:00 PM CST</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="bg-surface-container p-3 rounded-lg border border-outline-variant/30">
                                        <span className="material-symbols-outlined text-[#4c616c] !text-3xl">mail</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-bold text-[#4c616c] mb-1 uppercase tracking-wider font-mono">GENERAL INQUIRIES</h4>
                                        <p className="text-base font-bold text-primary">contact@titanprecision.com</p>
                                    </div>
                                </div>
                            </div>
                            {/* Inline Map Placeholder */}
                            <div className="mt-12 w-full h-64 rounded-xl overflow-hidden border border-outline-variant/30 shadow-inner relative group">
                                <div className="absolute inset-0 bg-surface-container animate-pulse"></div>
                                <img className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" alt="Corporate office complex map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxU7jTojfIGAD6pxvJSGDir2eB2D-tRFcfxCAfIMdI8aTEwS8z1PbjiaCDajjAknsLj1zOS3AFQ_LpHUky4Tfe7YsTKCltIvvEyF2Jv6K1K9pxmT80GNP8Dr-6SQImvY8i-hOA8RsIHrlByMI2rbargNC0ELEb77OjQpUrDQ2DTd2zMwEVyifZ_amef2R4LVlIxQZcjmGAIG8VYZhK9e-GoybaRkNkN4g2wzmHI4rQb_vSBGE_re5Q3Q" />
                                <div 
                                    onClick={() => window.open('https://maps.google.com', '_blank')}
                                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg text-[10px] font-bold flex items-center gap-2 border border-outline-variant/30 cursor-pointer hover:bg-gray-100 transition-colors text-primary"
                                >
                                    <span className="material-symbols-outlined text-[#4c616c] text-sm">explore</span>
                                    OPEN IN MAPS
                                </div>
                            </div>
                        </div>
                        {/* Status Badges */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg border-l-4 border-[#4c616c] shadow-sm border border-outline-variant/30">
                                <p className="text-[10px] font-bold text-on-surface-variant mb-1 uppercase tracking-wider font-mono">RESPONSE TIME</p>
                                <p className="text-lg font-bold text-primary">&lt; 12 HOURS</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-[#4c616c] shadow-sm border border-outline-variant/30">
                                <p className="text-[10px] font-bold text-on-surface-variant mb-1 uppercase tracking-wider font-mono">SYSTEM STATUS</p>
                                <p className="text-lg font-bold text-primary font-mono">OPERATIONAL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
