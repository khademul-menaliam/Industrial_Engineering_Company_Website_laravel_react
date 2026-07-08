import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/10">
<div className="w-full py-24 px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
<div className="col-span-1 md:col-span-1 lg:col-span-1">
<div className="font-display-lg text-headline-sm font-bold text-primary mb-8 uppercase tracking-tighter">
                    Titan Precision v2
                </div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-10">
                    Delivering high-precision engineering and structural design solutions for the world's most demanding industrial environments. Titan Precision certified.
                </p>
<div className="flex gap-4">
<a className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center hover:bg-primary transition-all group" href="/">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-primary">public</span>
</a>
<a className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center hover:bg-primary transition-all group" href="/">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-primary">hub</span>
</a>
</div>
</div>
<div className="flex flex-col gap-6">
<span className="text-on-surface font-bold font-label-caps text-label-caps uppercase tracking-widest">Solutions</span>
<Link className="text-on-surface-variant hover:text-primary transition-all font-body-sm text-body-sm" to="/services">Structural Design</Link>
<Link className="text-on-surface-variant hover:text-primary transition-all font-body-sm text-body-sm" to="/services">Fire Safety MEP</Link>
<Link className="text-on-surface-variant hover:text-primary transition-all font-body-sm text-body-sm" to="/services">Industrial Automation</Link>
<Link className="text-on-surface-variant hover:text-primary transition-all font-body-sm text-body-sm" to="/portfolio">Infrastructure</Link>
</div>
<div className="flex flex-col gap-6">
<span className="text-on-surface font-bold font-label-caps text-label-caps uppercase tracking-widest">Compliance</span>
<a className="text-on-surface-variant hover:text-primary transition-all font-body-sm text-body-sm" href="/">ISO 9001:2015</a>
<a className="text-on-surface-variant hover:text-primary transition-all font-body-sm text-body-sm" href="/">Security Standards</a>
<a className="text-on-surface-variant hover:text-primary transition-all font-body-sm text-body-sm" href="/">Quality Protocols</a>
<a className="text-on-surface-variant hover:text-primary transition-all font-body-sm text-body-sm" href="/">Environmental</a>
</div>
<div className="flex flex-col gap-6">
<span className="text-on-surface font-bold font-label-caps text-label-caps uppercase tracking-widest">Contact</span>
<div className="flex flex-col gap-4 text-on-surface-variant font-mono-data text-body-sm">
<p className="">Global Headquarters</p>
<p className="">888 Industrial Plaza</p>
<p className="">contact@titanprecision-v2.com</p>
</div>
</div>
</div>
<div className="w-full border-t border-outline-variant/5 py-10 px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<span className="font-mono-data text-[12px] text-on-surface-variant/60 uppercase tracking-widest">© 2024 TITAN PRECISION. TITAN PRECISION SERIES v2.</span>
<div className="flex gap-8">
<span className="flex items-center gap-2 text-on-surface-variant font-label-caps text-label-caps">
<span className="material-symbols-outlined text-secondary-container text-lg">verified</span> ISO CERTIFIED
                </span>
<span className="flex items-center gap-2 text-on-surface-variant font-label-caps text-label-caps">
<span className="material-symbols-outlined text-secondary-container text-lg">security</span> SECURE PORTAL
                </span>
</div>
</div>
</footer>
    );
}
