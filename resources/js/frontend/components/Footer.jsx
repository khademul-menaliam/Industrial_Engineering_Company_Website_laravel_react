import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';

const defaultSettings = {
    footer_corporate_office: "House-15, Road -1, Block-A,\nMohanagar Project,West Rampura,\nDhaka-1219, Bangladesh",
    footer_registered_office: "1/1/D, ShahidNajrul Islam Sharak,\nHatkhola Road, Dhaka, Bangladesh.",
    footer_email: "info@arengineeringbd.com",
    footer_description: "Industrial Engineering Solution Provider — Consultancy, Services, Supply & Erection."
};

export default function Footer() {
    const [settings, setSettings] = useState(defaultSettings);

    useEffect(() => {
        api.get('/home')
            .then(res => {
                if (res.data && res.data.settings) {
                    setSettings({
                        footer_corporate_office: res.data.settings.footer_corporate_office || defaultSettings.footer_corporate_office,
                        footer_registered_office: res.data.settings.footer_registered_office || defaultSettings.footer_registered_office,
                        footer_email: res.data.settings.footer_email || defaultSettings.footer_email,
                        footer_description: res.data.settings.footer_description || defaultSettings.footer_description,
                    });
                }
            })
            .catch(err => {
                console.error("Failed to load footer settings:", err);
            });
    }, []);
    return (
        <footer className="w-full bg-surface-container-low border-t border-outline-variant/30">
            <div className="w-full py-20 px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                <div className="col-span-1">
                    <div className="font-display-lg text-xl font-bold text-primary mb-2 uppercase tracking-tighter flex items-center">
                        <img 
                            src="/logo.png" 
                            alt="AR Engineering Logo" 
                            className="h-14 w-auto object-contain rounded -ml-3 -mr-2" 
                        />
                        Engineering
                    </div>
                    <div 
                        className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-8 rich-text"
                        dangerouslySetInnerHTML={{ __html: settings.footer_description }}
                    />
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
                    <span className="text-primary font-bold text-xs uppercase tracking-widest text-[11px]">Offices & Contact</span>
                    <div className="flex flex-col gap-4 text-on-surface-variant font-mono text-xs">
                        <div>
                            <span className="text-primary font-bold text-[10px] uppercase tracking-wider block mb-1">Corporate Office</span>
                            <div 
                                className="leading-relaxed opacity-95 rich-text"
                                dangerouslySetInnerHTML={{ __html: settings.footer_corporate_office ? settings.footer_corporate_office.replace(/\n/g, '<br>') : '' }}
                            />
                        </div>
                        <div>
                            <span className="text-primary font-bold text-[10px] uppercase tracking-wider block mb-1">Registered Office</span>
                            <div 
                                className="leading-relaxed opacity-95 rich-text"
                                dangerouslySetInnerHTML={{ __html: settings.footer_registered_office ? settings.footer_registered_office.replace(/\n/g, '<br>') : '' }}
                            />
                        </div>
                        <div className="pt-2 border-t border-outline-variant/10">
                            <a href={`mailto:${settings.footer_email}`} className="text-tertiary font-bold hover:underline transition-all flex items-center gap-1.5 font-sans text-xs">
                                <span className="material-symbols-outlined text-sm">mail</span>
                                {settings.footer_email}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full border-t border-outline-variant/20 py-8 px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="font-mono text-[11px] text-on-surface-variant/70 uppercase tracking-widest">© 2026 AR ENGINEERING</span>
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
