import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Clients() {
    const [currentPage, setCurrentPage] = useState(1);
    const [clients, setClients] = useState([]);
    const [settings, setSettings] = useState({});
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const ITEMS_PER_PAGE = 6;

    useEffect(() => {
        axios.get('/api/clients')
            .then(res => {
                if (res.data.success) {
                    setClients(res.data.clients || []);
                    setSettings(res.data.settings || {});
                    setTestimonials(res.data.testimonials || []);
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
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[350px] md:h-[400px] flex items-center bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: `url('${settings.hero_bg}')` }}></div>
                </div>
                <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full">
                    <div className="max-w-2xl text-white">
                        <p className="text-xs font-bold tracking-[.3em] uppercase mb-4 text-outline-variant">{settings.hero_subtitle}</p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight uppercase">{settings.hero_title}</h1>
                        <p className="text-lg text-primary-fixed font-medium max-w-lg leading-relaxed">{settings.hero_desc}</p>
                    </div>
                </div>
            </section>

            {/* Interactive Client Grid Section */}
            <section className="py-24 bg-background">
                <div className="max-w-container-max mx-auto px-margin-desktop">
                    <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                        <div>
                            <h2 className="text-tertiary text-xs font-bold uppercase tracking-widest font-mono mb-2">{settings.clients_section_subtitle}</h2>
                            <h3 className="text-2xl font-bold text-primary uppercase">{settings.clients_section_title}</h3>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="client-grid">
                        {paginatedClients.map((c, i) => (
                            <div key={i} className="bg-surface-container-lowest border border-outline-variant hover:border-tertiary group p-6 rounded flex flex-col h-full hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center justify-center h-28 mb-6">
                                    <img className="max-h-20 max-w-[80%] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" alt={c.name} src={c.logo} />
                                </div>
                                <h4 className="text-base font-bold text-primary mb-2 uppercase">{c.name}</h4>
                                <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">{c.desc}</p>
                                <div className="flex gap-4">
                                    <Link to="/project-demo" className="text-tertiary font-mono text-[11px] font-bold flex items-center gap-1 hover:underline">
                                        {c.type} <span className="material-symbols-outlined text-sm">{c.icon}</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {totalPages >= 1 && (
                        <div className="mt-12 flex justify-center items-center gap-2 font-mono text-xs">
                            <button 
                                disabled={currentPage === 1}
                                onClick={() => {
                                    setCurrentPage(prev => Math.max(prev - 1, 1));
                                    document.getElementById('client-grid')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-4 py-2.5 rounded border border-outline-variant hover:border-primary text-primary disabled:opacity-30 disabled:hover:border-outline-variant transition-colors flex items-center gap-1 font-bold uppercase tracking-wider bg-white"
                            >
                                <span className="material-symbols-outlined text-sm">chevron_left</span> Prev
                            </button>
                            
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                                <button
                                    key={pageNum}
                                    onClick={() => {
                                        setCurrentPage(pageNum);
                                        document.getElementById('client-grid')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className={`w-10 h-10 rounded font-bold transition-all ${
                                        currentPage === pageNum
                                            ? 'bg-primary text-white shadow-md'
                                            : 'bg-surface-container-lowest border border-outline-variant hover:border-primary text-primary'
                                    }`}
                                >
                                    {pageNum}
                                </button>
                            ))}

                            <button 
                                disabled={currentPage === totalPages}
                                onClick={() => {
                                    setCurrentPage(prev => Math.min(prev + 1, totalPages));
                                    document.getElementById('client-grid')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-4 py-2.5 rounded border border-outline-variant hover:border-primary text-primary disabled:opacity-30 disabled:hover:border-outline-variant transition-colors flex items-center gap-1 font-bold uppercase tracking-wider bg-white"
                            >
                                Next <span className="material-symbols-outlined text-sm">chevron_right</span>
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Testimonials Section */}
            {testimonials.length > 0 && (
                <section className="py-24 md:py-32 bg-surface-container-low border-y border-outline-variant">
                    <div className="max-w-container-max mx-auto px-margin-desktop">
                        <div className="text-center mb-20">
                            <h2 className="text-2xl font-bold text-primary uppercase">{settings.testimonials_section_title}</h2>
                            <div className="h-1 w-16 bg-tertiary mx-auto mt-4"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                            {testimonials.map((t, i) => (
                                <div key={i} className="bg-surface-container-lowest rounded p-10 flex flex-col h-full border border-outline-variant hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <span className="material-symbols-outlined text-tertiary text-4xl mb-6 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                                    <div className="flex-grow">
                                        <p className="text-sm text-primary leading-relaxed mb-10 italic">
                                            "{t.quote}"
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4 mt-auto pt-8 border-t border-outline-variant/30">
                                        <img className="w-12 h-12 rounded-full object-cover grayscale" alt={t.author} src={t.avatar} />
                                        <div>
                                            <h4 className="text-[11px] text-primary font-bold uppercase tracking-wider">{t.author}</h4>
                                            <p className="text-[10px] text-on-surface-variant uppercase font-mono mt-0.5">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Call to Action */}
            <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="max-w-3xl mx-auto px-margin-desktop relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">{settings.cta_title}</h2>
                    <p className="text-primary-fixed mb-10 leading-relaxed max-w-xl mx-auto text-base">
                        {settings.cta_desc}
                    </p>
                    <Link to={settings.cta_button_link || "/contact"} className="px-10 py-4 bg-tertiary text-white text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all rounded shadow-sm inline-flex items-center gap-2">
                        {settings.cta_button_text} <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
