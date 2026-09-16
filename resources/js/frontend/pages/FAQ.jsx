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
        <div className="w-full bg-background text-on-surface">
            <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-xs font-bold uppercase tracking-widest text-tertiary font-mono mb-3 block">Support &amp; Compliance</span>
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase tracking-tight">Frequently Asked Questions</h1>
                    <div className="w-24 h-1 bg-tertiary mx-auto mb-6"></div>
                    <p className="text-secondary text-sm md:text-base leading-relaxed text-justify">
                        Technical details, compliance protocols, and system integration specs for AR Engineering solutions.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <div
                                key={index}
                                className={`bg-white rounded border overflow-hidden transition-all duration-300 shadow-none md:shadow-sm ${
                                    isOpen ? 'border-primary' : 'border-outline-variant/30 hover:border-primary'
                                }`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className={`w-full flex justify-between items-center p-6 text-left font-bold focus:outline-none cursor-pointer transition-colors ${
                                        isOpen ? 'bg-surface-container-low text-primary' : 'bg-white hover:bg-surface-container-low text-primary'
                                    }`}
                                >
                                    <span className="text-base font-bold uppercase tracking-tight leading-snug">{faq.question}</span>
                                    <span
                                        className="material-symbols-outlined text-secondary transition-transform duration-300 shrink-0 ml-4 text-2xl"
                                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    >
                                        keyboard_arrow_down
                                    </span>
                                </button>
                                <div
                                    className="transition-all duration-300 ease-in-out overflow-hidden"
                                    style={{
                                        maxHeight: isOpen ? '400px' : '0px',
                                        opacity: isOpen ? 1 : 0
                                    }}
                                >
                                    <p className="p-6 pt-3 text-secondary text-sm leading-relaxed border-t border-outline-variant/20 text-justify">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
