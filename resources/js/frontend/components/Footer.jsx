import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';

const defaultSettings = {
    footer_corporate_office: "House-15, Road -1, Block-A,\nMohanagar Project,West Rampura,\nDhaka-1219, Bangladesh",
    footer_registered_office: "1/1/D, ShahidNajrul Islam Sharak,\nHatkhola Road, Dhaka, Bangladesh.",
    footer_email: "info@arengineeringbd.com",
    footer_description: "Industrial Engineering Solution Provider — Consultancy, Services, Supply & Erection.",
    social_facebook: "",
    social_linkedin: "",
    social_twitter: "",
    social_youtube: "",
    social_instagram: ""
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
                        social_facebook: res.data.settings.social_facebook || "",
                        social_linkedin: res.data.settings.social_linkedin || "",
                        social_twitter: res.data.settings.social_twitter || "",
                        social_youtube: res.data.settings.social_youtube || "",
                        social_instagram: res.data.settings.social_instagram || "",
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
                            className="h-14 w-auto object-contain rounded -ml-3 -mr-2 mr-1" 
                        />
                        Engineering
                    </div>
                    <div 
                        className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-8 rich-text"
                        dangerouslySetInnerHTML={{ __html: settings.footer_description }}
                    />
                    <div className="flex gap-3">
                        {settings.social_facebook && (
                            <a className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href={settings.social_facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                        )}
                        {settings.social_linkedin && (
                            <a className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href={settings.social_linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                                </svg>
                            </a>
                        )}
                        {settings.social_twitter && (
                            <a className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href={settings.social_twitter} aria-label="Twitter / X" target="_blank" rel="noopener noreferrer">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        )}
                        {settings.social_instagram && (
                            <a className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href={settings.social_instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.71.054 1.14.051 1.96.23 2.656.9.686.665.87 1.484.92 2.625.045.958.054 1.314.054 3.743v1.856c0 2.43-.009 2.784-.054 3.71-.05 1.14-.229 1.96-.9 2.656-.665.685-1.484.87-2.625.92-.958.044-1.314.054-3.743.054h-1.856c-2.43 0-2.784-.009-3.71-.054-1.14-.05-1.96-.229-2.656-.9-.686-.665-.87-1.484-.92-2.625C2.01 15.26 2 14.904 2 12.475v-1.856c0-2.43.009-2.784.054-3.71.05-1.14.229-1.96.9-2.656.665-.686 1.484-.87 2.625-.92C6.012 2.01 6.368 2 8.797 2h1.856zm-.12 1.778H10.3c-2.285 0-2.589.007-3.493.048-.795.036-1.227.168-1.516.28-.382.148-.655.325-.94.61-.284.285-.461.558-.61.94-.11.288-.242.72-.278 1.516-.041.904-.048 1.208-.048 3.493v1.896c0 2.286.007 2.589.048 3.493.036.796.168 1.228.28 1.516.148.383.325.656.61.94.285.284.558.461.94.61.288.11.72.242 1.516.278.904.041 1.208.048 3.493.048h1.896c2.286 0 2.589-.007 3.493-.048.796-.036 1.228-.168 1.516-.28.383-.148.656-.325.94-.61.284-.285.461-.558.61-.94.11-.288.242-.72.278-1.516.041-.904.048-1.208.048-3.493V10.3c0-2.285-.007-2.589-.048-3.493-.036-.795-.168-1.227-.28-1.516-.148-.382-.325-.655-.61-.94-.285-.284-.558-.461-.94-.61-.288-.11-.72-.242-1.516-.278-.904-.041-1.208-.048-3.493-.048h-1.896v-.002zm0 3.125a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2zm0 1.778a3.322 3.322 0 1 0 0 6.644 3.322 3.322 0 0 0 0-6.644zm5.556-2.115a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" clipRule="evenodd" />
                                </svg>
                            </a>
                        )}
                        {settings.social_youtube && (
                            <a className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href={settings.social_youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.52 3.545 12 3.545 12 3.545s-7.52 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.868.507 9.388.507 9.388.507s7.52 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
                                </svg>
                            </a>
                        )}
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
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                    <span className="font-mono text-[11px] text-on-surface-variant/70 uppercase tracking-widest">© 2026 AR ENGINEERING</span>
                    <span className="font-mono text-[10px] text-on-surface-variant/50 uppercase tracking-widest flex items-center gap-1">
                        | DEVELOPED BY{' '}
                        <a 
                            href="https://khademul-dev.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-tertiary hover:underline font-bold"
                        >
                            Khademul Islam
                        </a>
                    </span>
                </div>
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
