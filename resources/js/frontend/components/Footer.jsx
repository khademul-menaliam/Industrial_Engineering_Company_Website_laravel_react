import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="w-full bg-surface-container-low border-t border-outline-variant/30">
            <div className="w-full py-20 px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                <div className="col-span-1">
                    <div className="font-display-lg text-xl font-bold text-primary mb-6 uppercase tracking-tighter flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary">architecture</span>
                        Titan Precision v2
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-8">
                        High-precision engineering management and structural design solutions for mission-critical industrial sectors.
                    </p>
                    <div className="flex gap-3">
                        <a className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                            <span className="material-symbols-outlined text-sm">terminal</span>
                        </a>
                        <a className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                            <span className="material-symbols-outlined text-sm">security_update_good</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest text-[11px]">Directives</span>
                    <Link className="text-on-surface-variant hover:text-tertiary transition-all font-body-sm text-body-sm" to="/services">Structural Audits</Link>
                    <Link className="text-on-surface-variant hover:text-tertiary transition-all font-body-sm text-body-sm" to="/services">MEP Frameworks</Link>
                    <Link className="text-on-surface-variant hover:text-tertiary transition-all font-body-sm text-body-sm" to="/services">Process Control</Link>
                    <Link className="text-on-surface-variant hover:text-tertiary transition-all font-body-sm text-body-sm" to="/services">Load Balancing</Link>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest text-[11px]">Standards</span>
                    <a className="text-on-surface-variant hover:text-tertiary transition-all font-body-sm text-body-sm" href="#">ISO 9001 Management</a>
                    <a className="text-on-surface-variant hover:text-tertiary transition-all font-body-sm text-body-sm" href="#">NFPA Safety Protocols</a>
                    <a className="text-on-surface-variant hover:text-tertiary transition-all font-body-sm text-body-sm" href="#">OSHA Compliance</a>
                    <a className="text-on-surface-variant hover:text-tertiary transition-all font-body-sm text-body-sm" href="#">EU-DIR Directives</a>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest text-[11px]">Headquarters</span>
                    <div className="flex flex-col gap-3 text-on-surface-variant font-mono text-body-sm">
                        <p>888 Industrial Plaza, Zone 7</p>
                        <p>Sector B, Alpha Quadrant</p>
                        <p className="text-tertiary font-bold">ops@titanprecision-v2.com</p>
                    </div>
                </div>
            </div>
            <div className="w-full border-t border-outline-variant/20 py-8 px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="font-mono text-[11px] text-on-surface-variant/70 uppercase tracking-widest">© 2024 TITAN PRECISION // FORGE &amp; SENTINEL STANDARD v2.0</span>
                <div className="flex gap-6">
                    <span className="flex items-center gap-2 text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
                        <span className="material-symbols-outlined text-tertiary text-lg">verified</span> SYSTEM ENCRYPTED
                    </span>
                    <span className="flex items-center gap-2 text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
                        <span className="material-symbols-outlined text-tertiary text-lg">shield</span> SAFETY CERTIFIED
                    </span>
                </div>
            </div>
        </footer>
    );
}
