import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

    return (
        <header className="w-full top-0 sticky shadow-lg bg-[#111d23] z-50">
            <nav className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-20">
                <Link to="/" className="flex items-center gap-2 whitespace-nowrap">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl">architecture</span>
                    <div className="font-headline-lg text-xl font-bold text-white tracking-tighter uppercase">
                        Ar <span className="text-tertiary">Engineering</span>
                    </div>
                </Link>
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-6">
                    <Link className="text-[#8d9aa1] font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest whitespace-nowrap" to="/services">Services</Link>
                    <Link className="text-[#8d9aa1] font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest whitespace-nowrap" to="/portfolio">Projects</Link>
                    <Link className="text-[#8d9aa1] font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest whitespace-nowrap" to="/clients">Testimonials</Link>
                    <Link className="text-[#8d9aa1] font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest whitespace-nowrap" to="/careers">Careers</Link>
                    
                    {/* Company Dropdown */}
                    <div className="relative group py-2">
                        <button className="flex items-center gap-1 text-[#8d9aa1] font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest whitespace-nowrap cursor-pointer">
                            Company
                            <span className="material-symbols-outlined text-sm select-none">keyboard_arrow_down</span>
                        </button>
                        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-[#111d23] border border-white/10 rounded shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-1 transition-all duration-200 z-50">
                            <Link className="block px-4 py-2.5 text-[#8d9aa1] hover:text-white hover:bg-white/5 transition-colors text-xs uppercase tracking-widest whitespace-nowrap" to="/about">About Us</Link>
                            <Link className="block px-4 py-2.5 text-[#8d9aa1] hover:text-white hover:bg-white/5 transition-colors text-xs uppercase tracking-widest whitespace-nowrap" to="/how-we-work">How It Works</Link>
                            <Link className="block px-4 py-2.5 text-[#8d9aa1] hover:text-white hover:bg-white/5 transition-colors text-xs uppercase tracking-widest whitespace-nowrap" to="/faq">FAQ</Link>
                        </div>
                    </div>

                    <Link className="text-[#8d9aa1] font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest whitespace-nowrap" to="/contact">Contact</Link>
                </div>
                
                {/* Desktop Download Button & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <a 
                        href="/AR_Engineering_Profile.pdf"
                        download
                        className="hidden lg:block bg-white/10 text-white border border-white/20 px-6 py-2.5 rounded text-xs font-bold uppercase tracking-widest hover:bg-white/20 hover:border-white/40 transition-all duration-200 whitespace-nowrap"
                    >
                        Download Profile
                    </a>
                    
                    <button 
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden text-[#8d9aa1] hover:text-white transition-colors cursor-pointer p-1"
                        aria-label="Open Menu"
                    >
                        <span className="material-symbols-outlined text-2xl">menu</span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Backdrop */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-[#111d23] border-l border-white/10 z-50 shadow-2xl p-6 transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <Link to="/" className="flex items-center gap-2 whitespace-nowrap" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="material-symbols-outlined text-tertiary-fixed-dim text-2xl">architecture</span>
                            <span className="font-headline-lg text-lg font-bold text-white tracking-tighter uppercase">
                                Ar <span className="text-tertiary">Engineering</span>
                            </span>
                        </Link>
                        <button 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-[#8d9aa1] hover:text-white p-1 cursor-pointer"
                            aria-label="Close Menu"
                        >
                            <span className="material-symbols-outlined text-2xl">close</span>
                        </button>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-col gap-4">
                        <Link 
                            className="text-[#8d9aa1] font-semibold hover:text-white py-2 text-sm uppercase tracking-widest border-b border-white/5 whitespace-nowrap" 
                            to="/services"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link 
                            className="text-[#8d9aa1] font-semibold hover:text-white py-2 text-sm uppercase tracking-widest border-b border-white/5 whitespace-nowrap" 
                            to="/portfolio"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link 
                            className="text-[#8d9aa1] font-semibold hover:text-white py-2 text-sm uppercase tracking-widest border-b border-white/5 whitespace-nowrap" 
                            to="/clients"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Testimonials
                        </Link>
                        <Link 
                            className="text-[#8d9aa1] font-semibold hover:text-white py-2 text-sm uppercase tracking-widest border-b border-white/5 whitespace-nowrap" 
                            to="/careers"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Careers
                        </Link>
                        
                        {/* Mobile Dropdown (Accordion) */}
                        <div className="border-b border-white/5">
                            <button 
                                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                                className="w-full flex items-center justify-between text-[#8d9aa1] font-semibold hover:text-white py-2 text-sm uppercase tracking-widest cursor-pointer"
                            >
                                <span className="whitespace-nowrap">Company</span>
                                <span className={`material-symbols-outlined transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180' : ''}`}>
                                    keyboard_arrow_down
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                isMobileAboutOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                            }`}>
                                <div className="flex flex-col gap-2 pl-4 pb-3">
                                    <Link 
                                        className="text-[#8d9aa1] hover:text-white py-1.5 text-xs uppercase tracking-widest whitespace-nowrap" 
                                        to="/about"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        About Us
                                    </Link>
                                    <Link 
                                        className="text-[#8d9aa1] hover:text-white py-1.5 text-xs uppercase tracking-widest whitespace-nowrap" 
                                        to="/how-we-work"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        How It Works
                                    </Link>
                                    <Link 
                                        className="text-[#8d9aa1] hover:text-white py-1.5 text-xs uppercase tracking-widest whitespace-nowrap" 
                                        to="/faq"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        FAQ
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link 
                            className="text-[#8d9aa1] font-semibold hover:text-white py-2 text-sm uppercase tracking-widest border-b border-white/5 whitespace-nowrap" 
                            to="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>

                {/* Mobile Download Profile Button */}
                <div className="mt-8">
                    <a 
                        href="/AR_Engineering_Profile.pdf"
                        download
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-center bg-white/10 text-white border border-white/20 py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-all duration-200 whitespace-nowrap w-full"
                    >
                        Download Profile
                    </a>
                </div>
            </div>
        </header>
    );
}
