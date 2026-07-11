import React, { useState, useEffect } from 'react';

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const response = await fetch('/api/faqs');
                const result = await response.json();
                if (result.success) {
                    setFaqs(result.data);
                }
            } catch (error) {
                console.error("Error fetching FAQs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFaqs();
    }, []);

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
