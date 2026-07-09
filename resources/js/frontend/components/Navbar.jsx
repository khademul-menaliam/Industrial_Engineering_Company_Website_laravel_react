import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className="w-full top-0 sticky shadow-lg bg-[#111d23] z-50">
            <nav className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-20">
                <Link to="/" className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl">architecture</span>
                    <div className="font-headline-lg text-xl font-bold text-white tracking-tighter uppercase">
                        Titan Precision <span className="text-tertiary">v2</span>
                    </div>
                </Link>
                
                <div className="hidden md:flex items-center gap-8">
                    <Link className="text-[#8d9aa1] font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest" to="/portfolio">Projects</Link>
                    <Link className="text-[#8d9aa1] font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest" to="/services">Services</Link>
                    <Link className="text-[#8d9aa1] font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest" to="/how-we-work">How We Work</Link>
                    <Link className="text-[#8d9aa1] font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest" to="/clients">Testimonials</Link>
                    <Link className="text-[#8d9aa1] font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest" to="/about">About Us</Link>
                    <Link className="text-[#8d9aa1] font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest" to="/careers">Careers</Link>
                    <Link className="text-[#8d9aa1] font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest" to="/contact">Contact</Link>
                    <Link className="text-[#8d9aa1] font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest" to="/faq">FAQ</Link>
                </div>
                
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => alert("Portal Access is restricted to authorized Titan hardware terminals only.")}
                        className="hidden md:block bg-white/10 text-white border border-white/20 px-6 py-2 rounded text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
                    >
                        Portal Access
                    </button>
                    <button className="md:hidden text-white">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </nav>
        </header>
    );
}
