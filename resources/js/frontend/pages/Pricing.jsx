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
        <div className="py-24 bg-surface max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
                <span className="text-secondary font-semibold text-xs tracking-widest uppercase">Investment & Tenders</span>
                <h1 className="text-white font-bold text-3xl md:text-5xl uppercase tracking-tight mt-4">Transparent Pricing Models</h1>
                <p class="text-on-surface-variant text-base md:text-lg max-w-xl mx-auto mt-4">
                    Tailored engineering consulting tiers for global industrial systems and structural integrity audits.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
                {plans.map((plan, index) => (
                    <div 
                        key={index} 
                        className={`rounded-xl p-8 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
                            plan.featured 
                                ? 'bg-surface-container-highest border-primary shadow-2xl relative shadow-primary/10' 
                                : 'bg-surface-container-lowest border-outline-variant/30 hover:border-outline'
                        }`}
                    >
                        {plan.featured && (
                            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase">
                                Recommended v2
                            </span>
                        )}

                        <div>
                            <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">{plan.name}</h3>
                            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">{plan.description}</p>
                            
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                                <span className="text-on-surface-variant text-sm font-mono-data">{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-3 text-sm text-on-surface-variant font-mono-data">
                                        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link 
                            to={plan.link}
                            className={`w-full py-4 rounded-lg font-bold text-center block text-sm tracking-wider uppercase transition-all ${
                                plan.featured 
                                    ? 'bg-secondary text-on-secondary hover:brightness-110 shadow-lg shadow-secondary/20' 
                                    : 'border border-primary text-primary hover:bg-primary hover:text-on-primary'
                            }`}
                        >
                            {plan.buttonText}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
