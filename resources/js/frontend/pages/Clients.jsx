import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Clients() {
    const [currentPage, setCurrentPage] = useState(1);
    const [clients, setClients] = useState([]);
    const [settings, setSettings] = useState({});
    const [testimonials, setTestimonials] = useState([]);
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);
    const ITEMS_PER_PAGE = 12;

    useEffect(() => {
        axios.get('/api/clients')
            .then(res => {
                if (res.data.success) {
                    setClients(res.data.clients || []);
                    setSettings(res.data.settings || {});
                    setTestimonials(res.data.testimonials || []);
                    setPartners(res.data.partners || []);
                }
            })
            .catch(err => {
                console.error("Failed to fetch clients data", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const totalPages = Math.ceil(clients.length / ITEMS_PER_PAGE);
    const paginatedClients = clients.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    if (loading) {
        return (
            <div className="w-full h-[60vh] flex items-center justify-center bg-surface-container-lowest">
                <span className="material-symbols-outlined animate-spin text-tertiary text-4xl">autorenew</span>
            </div>
        );
    }

    return (
        <div className="w-full bg-background text-on-surface">
            {/* Hero Section */}
            <section className="relative h-[350px] md:h-[400px] flex items-center bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: `url('${settings.hero_bg}')` }}></div>
                </div>
                <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
                    <div className="max-w-2xl text-white">
                        <span className="text-xs font-bold tracking-[.3em] uppercase mb-4 text-outline-variant font-mono block">{settings.hero_subtitle}</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight uppercase">{settings.hero_title}</h1>
                        <p className="text-base md:text-lg text-white/80 font-light max-w-lg leading-relaxed text-justify">{settings.hero_desc}</p>
                    </div>
                </div>
            </section>

            {/* Solution Partners Section */}
            {partners.length > 0 && (
                <section className="py-24 bg-surface-container-low border-b border-outline-variant/30 px-margin-mobile md:px-margin-desktop">
                    <div className="max-w-container-max mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-tertiary text-xs font-bold tracking-widest mb-3 block uppercase font-mono">Strategic Alliances</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-tight">Solution Partners</h2>
                            <div className="h-1 w-16 bg-tertiary mx-auto mt-4"></div>
                        </div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 items-stretch">
                            {partners.map((partner, i) => (
                                <div key={partner.id || i} className="group bg-white rounded p-6 flex flex-col h-full border border-outline-variant/30 hover:border-primary transition-all duration-300 shadow-none md:shadow-sm md:hover:shadow-md">
                                    <span className="material-symbols-outlined text-tertiary text-3xl mb-4 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
                                    <div className="flex-grow">
                                        <span className="bg-primary text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded font-mono tracking-wider shadow-sm mb-3 inline-block">{partner.type}</span>
                                        <p className="text-sm text-secondary leading-relaxed mb-6 text-justify">
                                            {partner.desc}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-outline-variant/30">
                                        <div className="w-16 h-12 rounded bg-surface-container-low p-1.5 border border-outline-variant/30 flex items-center justify-center shrink-0">
                                            <img className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" alt={partner.name} src={partner.logo} />
                                        </div>
                                        <div>
                                            <h3 className="text-xs text-primary font-bold uppercase tracking-tight line-clamp-2">{partner.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Clients Directory Section (Static Logo Grid) */}
            {clients.length > 0 && (
                <section className="py-24 bg-background px-margin-mobile md:px-margin-desktop" id="client-section">
                    <div className="max-w-container-max mx-auto text-center">
                        <div className="mb-16">
                            <span className="text-tertiary text-xs font-bold uppercase tracking-widest font-mono mb-2 block">{settings.clients_section_subtitle}</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-tight">{settings.clients_section_title}</h2>
                            <div className="h-1 w-16 bg-tertiary mx-auto mt-4"></div>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-6 items-center">
                            {paginatedClients.map((c, i) => (
                                <div key={i} className="group flex flex-col items-center gap-3 w-36 md:w-40 shrink-0">
                                    <div className="w-full h-20 bg-white p-3 rounded border border-outline-variant/30 flex items-center justify-center shadow-none md:shadow-sm group-hover:border-primary transition-all duration-300">
                                        <img className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" alt={c.name} src={c.logo} />
                                    </div>
                                    <span className="text-xs font-mono font-bold text-secondary uppercase tracking-wider text-center line-clamp-1 w-full">{c.name}</span>
                                </div>
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <div className="mt-12 flex justify-center items-center gap-2 font-mono text-xs">
                                <button 
                                    disabled={currentPage === 1}
                                    onClick={() => {
                                        setCurrentPage(prev => Math.max(prev - 1, 1));
                                        document.getElementById('client-section')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="px-4 py-2.5 rounded border border-outline-variant/30 hover:border-primary text-primary disabled:opacity-30 disabled:hover:border-outline-variant/30 transition-colors flex items-center gap-1 font-bold uppercase tracking-wider bg-white font-mono text-xs cursor-pointer shadow-none md:shadow-sm"
                                >
                                    <span className="material-symbols-outlined text-sm">chevron_left</span> Prev
                                </button>
                                
                                <span className="text-secondary font-bold font-mono px-3 text-xs">
                                    Page {currentPage} of {totalPages}
                                </span>

                                <button 
                                    disabled={currentPage === totalPages}
                                    onClick={() => {
                                        setCurrentPage(prev => Math.min(prev + 1, totalPages));
                                        document.getElementById('client-section')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="px-4 py-2.5 rounded border border-outline-variant/30 hover:border-primary text-primary disabled:opacity-30 disabled:hover:border-outline-variant/30 transition-colors flex items-center gap-1 font-bold uppercase tracking-wider bg-white font-mono text-xs cursor-pointer shadow-none md:shadow-sm"
                                >
                                    Next <span className="material-symbols-outlined text-sm">chevron_right</span>
                                </button>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Call to Action */}
            <section className="py-24 bg-primary text-white text-center relative overflow-hidden px-margin-mobile md:px-margin-desktop">
                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">{settings.cta_title}</h2>
                    <p className="text-white/85 mb-8 leading-relaxed max-w-xl mx-auto text-sm sm:text-base text-justify">
                        {settings.cta_desc}
                    </p>
                    <Link
                        to={settings.cta_button_link || "/contact"}
                        className="bg-tertiary text-white text-xs font-mono font-bold px-8 py-4 rounded uppercase tracking-widest hover:bg-opacity-90 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-none md:shadow-sm"
                    >
                        {settings.cta_button_text} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
