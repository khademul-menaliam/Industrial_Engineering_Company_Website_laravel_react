import React, { useState } from 'react';

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What industries do you specialize in?",
            answer: "Titan Precision v2 specializes in heavy industries, structural infrastructure, fire safety engineering (MEP), and industrial automation. We engineer systems that require extreme precision and strict safety compliance."
        },
        {
            question: "Are your designs compliant with international standards?",
            answer: "Yes, all our engineering systems are built to meet and exceed global regulatory standards, including ISO 9001:2015, NFPA codes for fire safety, and regional seismic and environmental requirements."
        },
        {
            question: "How do you ensure quality control during development?",
            answer: "We use predictive digital twin modeling, advanced CAD technologies, and rigorous physical stress tests. Our quality protocols ensure zero-tolerance for component failure."
        },
        {
            question: "Can we integrate your automated robotics systems with existing workflows?",
            answer: "Absolutely. Our specialized automation team designs custom PLC/SCADA interfaces to integrate state-of-the-art industrial robotics directly into your legacy pipelines."
        },
        {
            question: "How do I request a project audit or tender?",
            answer: "You can reach out through our Secure Portal on the Contact page, or initiate a direct Project Tender inquiry. Our engineering directors will evaluate your requirements and provide compliance specs."
        }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="py-24 bg-background max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
                <span className="text-tertiary font-bold text-xs tracking-widest uppercase font-mono">Support & Compliance</span>
                <h1 className="text-primary font-bold text-3xl md:text-5xl uppercase tracking-tight mt-4">Frequently Asked Questions</h1>
                <p className="text-on-surface-variant text-base md:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
                    Technical details, compliance protocols, and system integration specs for Titan Precision v2 solutions.
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-xl border border-outline-variant/30 overflow-hidden transition-all duration-300 hover:border-tertiary"
                    >
                        <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex justify-between items-center p-6 text-left text-primary font-semibold focus:outline-none"
                        >
                            <span className="text-base md:text-lg font-bold uppercase tracking-tight leading-tight">{faq.question}</span>
                            <span className="material-symbols-outlined text-primary transition-transform duration-300" style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                keyboard_arrow_down
                            </span>
                        </button>
                        <div 
                            className="transition-all duration-300 ease-in-out overflow-hidden"
                            style={{ 
                                maxHeight: activeIndex === index ? '200px' : '0px',
                                opacity: activeIndex === index ? 1 : 0
                            }}
                        >
                            <p className="p-6 pt-0 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
