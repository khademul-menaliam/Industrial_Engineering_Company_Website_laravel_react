import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
    const location = useLocation();

    const isCompanyRoute =
        location.pathname === '/about' ||
        location.pathname.startsWith('/how-we-work') ||
        location.pathname.startsWith('/faq');

    useEffect(() => {
        if (isCompanyRoute) {
            setIsMobileAboutOpen(true);
        }
    }, [location.pathname]);

    return (
        <header className="w-full top-0 sticky shadow-lg bg-midnight z-50">
            <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">
                <Link to="/" className="flex items-center whitespace-nowrap gap-1">
                    <img 
                        src="/logo.png" 
                        alt="AR Engineering Logo" 
                        className="h-10 w-auto object-contain rounded mt-2 -ml-2 -mr-1" 
                        style={{ filter: "invert(1)" }}
                    />
                    <div className="text-xl font-bold text-white tracking-tighter uppercase mt-2">
                        <span className="text-tertiary">Engineering</span>
                    </div>
                </Link>
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link className={`font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest whitespace-nowrap ${location.pathname === '/services' ? 'text-white' : 'text-[#8d9aa1]'}`} to="/services">Services</Link>
                    {/* <Link className="text-[#8d9aa1] font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest whitespace-nowrap" to="/portfolio">Projects</Link> */}
                    <Link className={`font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest whitespace-nowrap ${location.pathname === '/clients' ? 'text-white' : 'text-[#8d9aa1]'}`} to="/clients">Partners</Link>
                    <Link className={`font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest whitespace-nowrap ${location.pathname === '/careers' ? 'text-white' : 'text-[#8d9aa1]'}`} to="/careers">Careers</Link>
                    
                    {/* Company Dropdown */}
                    <div className="relative group py-2">
                        <button className={`flex items-center font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest whitespace-nowrap cursor-pointer ${isCompanyRoute ? 'text-white' : 'text-[#8d9aa1]'}`}>
                            Company
                            <span className="material-symbols-outlined text-sm select-none transition-transform duration-200 group-hover:rotate-180 mb-2">keyboard_arrow_down</span>
                        </button>
                        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-midnight border border-white/10 rounded shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-1 transition-all duration-200 z-50">
                            <Link className={`block px-4 py-2.5 hover:text-white hover:bg-white/5 transition-colors text-xs uppercase tracking-widest whitespace-nowrap ${location.pathname === '/about' ? 'text-white bg-white/10 font-bold' : 'text-[#8d9aa1]'}`} to="/about">About Us</Link>
                            <Link className={`block px-4 py-2.5 hover:text-white hover:bg-white/5 transition-colors text-xs uppercase tracking-widest whitespace-nowrap ${location.pathname === '/how-we-work' ? 'text-white bg-white/10 font-bold' : 'text-[#8d9aa1]'}`} to="/how-we-work">How It Works</Link>
                            <Link className={`block px-4 py-2.5 hover:text-white hover:bg-white/5 transition-colors text-xs uppercase tracking-widest whitespace-nowrap ${location.pathname === '/faq' ? 'text-white bg-white/10 font-bold' : 'text-[#8d9aa1]'}`} to="/faq">FAQ</Link>
                        </div>
                    </div>

                    <Link className={`font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest whitespace-nowrap ${location.pathname === '/contact' ? 'text-white' : 'text-[#8d9aa1]'}`} to="/contact">Contact</Link>
                </div>
                
                {/* Desktop Download Button & Mobile Toggle */}
                <div className="flex items-center gap-2">
                    <a 
                        href="/AR_Engineering_Profile.pdf"
                        download
                        className="hidden lg:block bg-white/10 text-white border border-white/20 px-4 py-2.5 rounded text-xs font-bold uppercase tracking-widest hover:bg-white/20 hover:border-white/40 transition-all duration-200 whitespace-nowrap"
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
            <div className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-midnight border-l border-white/10 z-50 shadow-2xl p-6 transition-all duration-300 ease-in-out lg:hidden flex flex-col justify-between ${
                isMobileMenuOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'
            }`}>
                <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <Link to="/" className="flex items-center whitespace-nowrap gap-1" onClick={() => setIsMobileMenuOpen(false)}>
                            <img 
                                src="/logo.png" 
                                alt="AR Engineering Logo" 
                                className="h-10 w-auto object-contain rounded -ml-2 -mr-1" 
                                style={{ filter: "invert(1)" }}
                            />
                            <span className="text-lg font-bold text-white tracking-tighter uppercase mt-1">
                                <span className="text-tertiary">Engineering</span>
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
                            className={`font-semibold hover:text-white py-2 text-sm uppercase tracking-widest border-b border-white/5 whitespace-nowrap ${location.pathname === '/services' ? 'text-white font-bold' : 'text-[#8d9aa1]'}`}
                            to="/services"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Services
                        </Link>
                        {/* <Link 
                            className="text-[#8d9aa1] font-semibold hover:text-white py-2 text-sm uppercase tracking-widest border-b border-white/5 whitespace-nowrap" 
                            to="/portfolio"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Projects
                        </Link> */}
                        <Link 
                            className={`font-semibold hover:text-white py-2 text-sm uppercase tracking-widest border-b border-white/5 whitespace-nowrap ${location.pathname === '/clients' ? 'text-white font-bold' : 'text-[#8d9aa1]'}`}
                            to="/clients"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Partners
                        </Link>
                        <Link 
                            className={`font-semibold hover:text-white py-2 text-sm uppercase tracking-widest border-b border-white/5 whitespace-nowrap ${location.pathname === '/careers' ? 'text-white font-bold' : 'text-[#8d9aa1]'}`}
                            to="/careers"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Careers
                        </Link>
                        
                        {/* Mobile Dropdown (Accordion) */}
                        <div className="border-b border-white/5">
                            <button 
                                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                                className={`w-full flex items-center justify-between font-semibold hover:text-white py-2 text-sm uppercase tracking-widest cursor-pointer ${isCompanyRoute ? 'text-white' : 'text-[#8d9aa1]'}`}
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
                                        className={`py-1.5 text-xs uppercase tracking-widest whitespace-nowrap transition-colors ${location.pathname === '/about' ? 'text-white font-bold' : 'text-[#8d9aa1] hover:text-white'}`}
                                        to="/about"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        About Us
                                    </Link>
                                    <Link 
                                        className={`py-1.5 text-xs uppercase tracking-widest whitespace-nowrap transition-colors ${location.pathname === '/how-we-work' ? 'text-white font-bold' : 'text-[#8d9aa1] hover:text-white'}`}
                                        to="/how-we-work"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        How It Works
                                    </Link>
                                    <Link 
                                        className={`py-1.5 text-xs uppercase tracking-widest whitespace-nowrap transition-colors ${location.pathname === '/faq' ? 'text-white font-bold' : 'text-[#8d9aa1] hover:text-white'}`}
                                        to="/faq"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        FAQ
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link 
                            className={`font-semibold hover:text-white py-2 text-sm uppercase tracking-widest border-b border-white/5 whitespace-nowrap ${location.pathname === '/contact' ? 'text-white font-bold' : 'text-[#8d9aa1]'}`}
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
