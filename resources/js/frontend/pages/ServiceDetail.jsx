import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function ServiceDetail() {
    const { slug } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(`/api/services/${slug}`)
            .then(response => {
                if (response.data.success) {
                    setService(response.data.service);
                } else {
                    setError('Service not found');
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err.response?.data?.message || 'Error loading service details');
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return (
            <div className="w-full min-h-[60vh] flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                    <span className="material-symbols-outlined text-4xl text-tertiary animate-spin">
                        progress_activity
                    </span>
                    <span className="text-sm text-secondary font-mono">Loading telemetry...</span>
                </div>
            </div>
        );
    }

    if (error || !service) {
        return (
            <div className="w-full min-h-[60vh] flex items-center justify-center px-margin-mobile">
                <div className="max-w-md w-full bg-white p-8 rounded-lg border border-outline-variant/30 text-center shadow-lg">
                    <span className="material-symbols-outlined text-5xl text-tertiary mb-4">
                        error
                    </span>
                    <h2 className="text-xl font-bold text-primary mb-2 uppercase tracking-tight">Access Denied</h2>
                    <p className="text-sm text-secondary mb-6">{error || 'The requested service profile does not exist.'}</p>
                    <Link to="/services" className="inline-block bg-primary text-white px-6 py-3 rounded text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all font-mono">
                        Return to Hierarchy
                    </Link>
                </div>
            </div>
        );
    }

    // Parse specifications and metrics
    const specs = service.technical_specs || [];
    const metrics = service.metrics || [];
    const badgeList = service.badges ? service.badges.split(',').map(b => b.trim()) : [];

    // Map categories to user-friendly titles
    const categoryLabels = {
        consulting: 'Consulting Services',
        dsi: 'Projects (DSI)',
        maintenance: 'Maintenance & Lifecycle'
    };

    return (
        <div className="w-full bg-background text-on-surface">
            <main className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-12">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-secondary text-xs font-mono mb-8 flex-wrap">
                    <Link className="hover:text-tertiary transition-colors" to="/services">Services</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="capitalize">{categoryLabels[service.category] || service.category}</span>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-primary font-bold">{service.title}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content Area */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        {/* Hero Section */}
                        <section className="border-b border-outline-variant/30 pb-6">
                            <span className="inline-block bg-tertiary/10 text-tertiary border border-tertiary/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-3 font-mono">
                                {service.tag || 'Operational Profile'}
                              </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 uppercase tracking-tight">
                                {service.title}
                            </h1>
                            <p className="text-sm md:text-base text-secondary leading-relaxed max-w-3xl">
                                {service.short_description}
                            </p>
                        </section>

                        {/* Deep Dive Image Card */}
                        <section className="bg-white border border-outline-variant/30 rounded-lg overflow-hidden shadow-sm">
                            <div className="h-64 md:h-96 w-full bg-surface-container-low relative">
                                <img 
                                    className="w-full h-full object-cover" 
                                    alt={service.detail_title || service.title} 
                                    src={service.hero_image || service.image} 
                                />
                                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 border border-outline-variant/30 rounded flex items-center gap-2 shadow-md">
                                    <span className="material-symbols-outlined text-tertiary text-xs animate-pulse">
                                        fiber_manual_record
                                    </span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary font-mono">
                                        Profile Verified
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 md:p-8">
                                <h2 className="text-lg md:text-xl font-bold text-primary border-b border-outline-variant/30 pb-2 mb-4 uppercase tracking-tight">
                                    {service.detail_title || 'Engineering Precision & Redundancy'}
                                </h2>
                                <p className="text-sm text-secondary leading-relaxed mb-6 whitespace-pre-line">
                                    {service.detail_description || 'No detailed specifications have been published for this service yet. Please contact our industrial headquarters for comprehensive technical blueprints and capability statements.'}
                                </p>
                                
                                {badgeList.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {badgeList.map((badge, idx) => (
                                            <span key={idx} className="bg-surface border border-outline-variant/50 text-secondary px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider font-mono">
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar / Widgets */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        {/* CTA Card */}
                        <div className="bg-white border border-outline-variant/30 rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-primary mb-3 uppercase tracking-tight">Initiate Project Assessment</h3>
                            <p className="text-xs text-secondary leading-relaxed mb-6">
                                Secure your facility with enterprise-grade industrial infrastructure. Schedule a comprehensive site audit with our engineering division.
                            </p>
                            <div className="flex flex-col gap-3">
                                <Link to="/contact" className="w-full bg-tertiary text-white py-3 rounded font-mono font-bold text-xs uppercase tracking-wider text-center hover:brightness-110 transition-all shadow-md flex justify-center items-center gap-2">
                                    Request Site Audit <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                                <Link to="/contact" className="w-full bg-transparent text-secondary border border-outline-variant/80 py-3 rounded font-mono font-bold text-xs uppercase tracking-wider text-center hover:bg-surface transition-all flex justify-center items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">call</span> Contact HQ
                                </Link>
                            </div>
                        </div>

                        {/* Technical Specs Grid */}
                        {specs.length > 0 && (
                            <div className="grid grid-cols-1 gap-3">
                                {specs.map((spec, idx) => (
                                    <div key={idx} className="bg-white border border-outline-variant/30 rounded-lg p-4 flex items-start gap-4 shadow-sm">
                                        <span className="material-symbols-outlined text-tertiary text-xl mt-0.5">
                                            {spec.icon || 'verified_user'}
                                        </span>
                                        <div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-secondary font-mono mb-0.5">
                                                {spec.label}
                                            </div>
                                            <div className="text-sm font-bold text-primary uppercase">
                                                {spec.value}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Operational Metrics */}
                        {metrics.length > 0 && (
                            <div className="bg-white border border-outline-variant/30 rounded-lg p-6 shadow-sm">
                                <h3 className="text-xs font-bold text-primary mb-4 border-b border-outline-variant/30 pb-2 uppercase tracking-widest font-mono">
                                    Operational Metrics
                                </h3>
                                <div className="space-y-4">
                                    {metrics.map((metric, idx) => (
                                        <div key={idx}>
                                            <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider font-mono mb-1.5">
                                                <span className="text-secondary">{metric.label}</span>
                                                <span className="text-primary">{metric.percentage}%</span>
                                            </div>
                                            <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                                                <div 
                                                    className="bg-primary h-full transition-all duration-1000" 
                                                    style={{ width: `${metric.percentage}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
