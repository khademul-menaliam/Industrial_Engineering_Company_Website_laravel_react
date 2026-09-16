import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
    const plans = [
        {
            name: "Standard Audit",
            price: "$4,500",
            period: "per audit",
            description: "Essential structural safety verification and baseline compliance testing.",
            features: [
                "Baseline Seismic & Structural Audit",
                "ISO 9001 Compliance Check",
                "Standard PDF Report Delivery",
                "Email Support Response in 48h"
            ],
            buttonText: "Schedule Audit",
            link: "/contact",
            featured: false
        },
        {
            name: "Enterprise Spec v2",
            price: "$12,000",
            period: "per project",
            description: "High-octane precision engineering modeling with comprehensive digital-twin integration.",
            features: [
                "Full Digital Twin & Predictive Simulation",
                "NFPA Fire Safety & MEP Optimization",
                "Advanced SCADA / PLC Architecture Design",
                "Priority 24/7 Phone & Email Support",
                "Custom CAD Blueprint & Compliance Files"
            ],
            buttonText: "Engage Experts",
            link: "/contact",
            featured: true
        },
        {
            name: "Elite Infrastructure",
            price: "Custom",
            period: "consultation basis",
            description: "Strategic advisory for mega-scale industrial infrastructure and high-stakes projects.",
            features: [
                "Custom Foundation & Deep Base Engineering",
                "Dedicated Engineering Lead Assignment",
                "On-Site Seismic & Stress Testing",
                "Unlimited Audits and Blueprint Tuning",
                "Strategic Board Review Meetings"
            ],
            buttonText: "Request Quote",
            link: "/contact",
            featured: false
        }
    ];

    return (
        <div className="w-full bg-background text-on-surface">
            <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-xs font-bold uppercase tracking-widest text-tertiary font-mono mb-3 block">Investment &amp; Tenders</span>
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase tracking-tight">Transparent Pricing Models</h1>
                    <div className="w-24 h-1 bg-tertiary mx-auto mb-6"></div>
                    <p className="text-secondary text-sm md:text-base leading-relaxed text-justify">
                        Tailored engineering consulting tiers for global industrial systems and structural integrity audits.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded p-8 flex flex-col justify-between transition-all duration-300 shadow-none md:shadow-sm ${
                                plan.featured
                                    ? 'bg-white border-2 border-tertiary relative md:hover:shadow-md ring-1 ring-tertiary/20'
                                    : 'bg-white border border-outline-variant/30 hover:border-primary md:hover:shadow-md'
                            }`}
                        >
                            {plan.featured && (
                                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-tertiary text-white px-4 py-1 rounded font-mono text-[10px] font-bold tracking-widest uppercase shadow-sm whitespace-nowrap">
                                    Recommended v2
                                </span>
                            )}

                            <div>
                                <h3 className="text-base font-bold uppercase tracking-tight text-primary mb-2">{plan.name}</h3>
                                <p className="text-secondary text-xs leading-relaxed mb-6 text-justify">{plan.description}</p>

                                <div className="flex items-baseline gap-2 mb-8 border-b border-outline-variant/30 pb-6">
                                    <span className="text-3xl md:text-4xl font-bold text-primary font-mono tracking-tight">{plan.price}</span>
                                    <span className="text-secondary text-xs font-mono uppercase">{plan.period}</span>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-2.5 text-xs text-secondary font-mono">
                                            <span className={`material-symbols-outlined text-base shrink-0 mt-0.5 ${plan.featured ? 'text-tertiary' : 'text-primary'}`}>check_circle</span>
                                            <span className="leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                to={plan.link}
                                className={`w-full text-center block font-mono font-bold text-xs uppercase transition-all ${
                                    plan.featured
                                        ? 'bg-tertiary text-white py-4 rounded tracking-widest hover:bg-opacity-90 shadow-none md:shadow-sm'
                                        : 'border border-primary text-primary hover:bg-surface-container py-3.5 rounded tracking-wider'
                                }`}
                            >
                                {plan.buttonText}
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
