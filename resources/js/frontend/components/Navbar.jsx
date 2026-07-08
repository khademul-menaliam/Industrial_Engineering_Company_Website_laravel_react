import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className="w-full top-0 sticky shadow-2xl bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30 z-50">
<nav className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-20">
<Link to="/" className="font-headline-md text-headline-md font-bold text-primary tracking-tighter uppercase">
                Titan Precision v2
            </Link>
<div className="hidden md:flex items-center gap-10">
<Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-caps text-label-caps" to="/portfolio">Projects</Link>
<Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-caps text-label-caps" to="/services">Services</Link>
<Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-caps text-label-caps" to="/how-we-work">How We Work</Link>
<Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-caps text-label-caps" to="/clients">Testimonials</Link>
<Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-caps text-label-caps" to="/about">About</Link>
</div>
<div className="flex items-center gap-4">
<a href="/admin/login" className="hidden md:block bg-primary text-on-primary px-8 py-2.5 rounded-lg font-label-caps text-label-caps hover:bg-tertiary-fixed-dim transition-all shadow-[0_0_15px_rgba(196,193,251,0.3)] text-center">Client Portal</a>
<button className="md:hidden text-on-surface">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</nav>
</header>
    );
}
