import React from 'react';
import { Link } from 'react-router-dom';

export default function Clients() {
    const clients = [
        {
            name: "AEROSPACE DYNAMICS",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHhM5CQyNf-2wpSWD8R0GRIJWthECM38zcvUA4eDyEC3dkutMx7IUbxoGAFXvGWXRWLbuyHMm3KZn_AVmQtJ3CgvNCua0OPC9F9PEANdvLUQbWDY-ycan0q1J_BZPL_bdhmOwncJ6muFjKVDSEYZx9_Wzsfp1z_9Pi9PiL8IUYnpI4MaE05Fv14_uG0TEhNWb09OBXedhek01qEdYmIQtWsL4fH7bP6bkyn851veCw9p-kO6Sb13aExw",
            desc: "Propulsion system structural validation and ISO compliance.",
            type: "VIEW PROJECTS",
            icon: "open_in_new"
        },
        {
            name: "GLO-ENERGY CORP",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2t7mHdDsUpx9X8QfasEhqOmYyi89miODolxNLpG-fqSHU4SO7HSLdoOu9miBdtvt2_5qCywDtW0xvB5EfkRyGX6gYjVSJ4EupcKOrlrkmLU-8zANSlbtYy5eB4pAlnGtETh-dYz7jRSSSNpIINvNudAGf84iZhxWNhe2P_GgtwEZ2LZRxTzoTz74k6zESWh46juEXGGQjmQI1d_FgtWv7ivxQRBhQvx7n-PEQnZPH4Sc9-X-rwB4U5w",
            desc: "Grid-scale storage facility design and site assessment.",
            type: "CASE STUDY",
            icon: "description"
        },
        {
            name: "QUANTUM SYSTEMS",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl_vI4k33CjhKur-zT_xiyt6ZBXK96nqRwVG9383xgCWaoz4vJ9U8nCAKXL2iDrv5zr8QNqjljZ8n00JtthTi71ucjtANJ8gh6c_-jgCDY_GWQGYgFIPuyuoFqL6-60kg-nmphwH41Pl6ZUH9eWAnBuHYDsljjI7uJE4COwmv5rNZ4JjRkesS2pIOGfNW6Q8qtwQpcnetPRHL2H4fieKz5GYVhIAvR6jvqP7nuWqYAffmRtThqpKyWKQ",
            desc: "Clean-room infrastructure for semiconductor fabrication.",
            type: "VIEW PROJECTS",
            icon: "open_in_new"
        },
        {
            name: "OCEANIC LOGISTICS",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8jOlw_bpKvZEP3b_URBhFla7hGkihRmohwfdnGS5MHYf0DfFrAHvQqVpptkqZXdUKEBWfeEsgRg3M60bQgKW99Gs0toCtyI0swh8Hk9UxqdVNf5ULpVsqsQ9v-GpgwQlrJPZHmHN2-35SGYaL9uLDXPDS-aql9kdu1cPb7YIqn2Bxn0-Cr7aV1--JVpDbVc9JsVIhRQ9UIRqA2l5SQVO79V0E2bAmJODVJV-GpQ1E6sqMHTN6K9pLIw",
            desc: "Deep-water terminal stress analysis and reinforcement.",
            type: "CASE STUDY",
            icon: "description"
        },
        {
            name: "AUTO-BOTICS INC",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3qKpYsyUZ5Nb802lmmNk8UjHn-O6aCO5_mxIyAvaL8Fw8YtNTr-jJ8R3aLUqJyPMAK6ywJDY6EK3M-m5dMBFSaA6AUhuXwCFWrWAZ0PRtYtDSrMP-DGTgxo8QOzcsFNIOmeDpERpYhgzaUyufwlNxi4Eeo7s3aFrRZGgg4XixjxEATSgHHbw8U0G17h42ne-YKsUZjkqxNS4T8wE3emYwGD0E2zVi4REVdcFm5KAF2_hr34VtJvIZyA",
            desc: "Automated assembly line precision calibration.",
            type: "VIEW PROJECTS",
            icon: "open_in_new"
        },
        {
            name: "CIVIL-CORE INT",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4wEJk53uFhVFtqPlZ8W1N0Cf372TlJQqp5Iqzo30pqjoxc3hMjp2vk-9a0BXXY4dhZ7J8CfHVt1CPOh6r5jasYRHpKk_qIdlbfzTinUiFBrABz5sEHFAGEoeE27dlF9EVFio1qNTrVM2nL0t-jWHkNX6LjN7bLTSFFSOiDH4ZplZjvqOCqlRqIzs1IWZPbATLmgvFYHA3txRa74adEbGLdyv1nUDZOGs1K8ShW6bi3c3Fm62DePzUMA",
            desc: "Smart-city infrastructure and structural health monitoring.",
            type: "CASE STUDY",
            icon: "description"
        }
    ];

    const testimonials = [
        {
            quote: "Titan Precision's attention to structural detail and their proactive compliance reporting saved our project timeline from several potential delays. Their technical mastery is unparalleled in the aerospace sector.",
            author: "DR. MARCUS THORNE",
            role: "CTO, AEROSPACE DYNAMICS",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvjExXib_Nxk-SvgOlweLYNIMXiAUc_FhG9ARGCjwOoMpmTH45fWTtfstZ0w-S386_yFdltF0PME8X7QzYU9jtelFScX11aWF8Hq0BOCmAPWwxEf0PfXtGs5pT-d0AKbwZnTqvOzs8tSVKCftsNPHySXs23E4pPWTgLkpomC0SjxoYLospwj9i2vRpu6o0p0kdpPtkxqYp2paREyWOiJblEgOIQ9zGuiJqQlN3gXI9sapZ5u3L5eGM4g"
        },
        {
            quote: "The precision of their CAD models and the seamless integration into our existing BIM workflow was impressive. They operate with a level of reliability that is rare in complex infrastructure projects today.",
            author: "ELENA RODRIGUEZ",
            role: "DIR. INFRASTRUCTURE, GLO-ENERGY",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFV6u3u9-YFG6P5Q0oG1szItDw1R25dLti2RdrC0iN81qzGI7aW91oEucoLH98zYptBu7q3eRazG-ZY3z8yJyWGVS2mNYJq03-TiJZpQky3d7f4pHeLtbpCe0rrGXhqeVnmVJu1MoEo9FFBqCvS5-g2KfFhCCqPqonLkebozFYmQGV98xpWyDHr3px1qjF2UNQUK83WmDdAYV09RCn0w4eTeoR3nN6DHOwoYpshy26EYahvMt-UJBnWg"
        },
        {
            quote: "From initial site assessment to final ISO certification assistance, Titan Precision provided a turn-key experience that allowed us to focus on our core operational growth.",
            author: "JONATHAN STERLING",
            role: "OPERATIONS LEAD, STERLING SYSTEMS",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY-Oc4a7WC8vgYg0rPQkrPo-jdzEzPCjzCoZYKQE55jYdBoawjDIAPIqx8tv1Jv_m3sj0w5EM_VYdxQnFxSbqN9qmi3ccL0cQPDYv3HLmikSAJZFKrdMeusTKAVZye5Wtz5qjX0N294fsU-kGZHQD0Yl1GPcD80nsQ439o5nd8fnmPcpZRcoxIYFZNxYRJrE6S1UbtgvSNQX7tM8D5lTiLnrfl44-w1DttpqBcU37v3dpXIfKlc_aP0w"
        }
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-24 md:py-32 bg-surface-container-lowest border-b border-outline-variant">
                <div className="relative max-w-container-max mx-auto px-margin-desktop text-center">
                    <span className="inline-block px-4 py-1 rounded bg-[#ffdad6] text-[#ba1a1a] text-[11px] mb-8 font-bold font-mono">GLOBAL IMPACT • V2</span>
                    <h1 className="text-primary font-bold text-4xl md:text-5xl uppercase mb-6 tracking-tight">Strategic Partnerships</h1>
                    <p className="max-w-2xl mx-auto text-on-surface-variant text-base leading-relaxed">
                        Collaborating with global industry leaders to engineer mission-critical solutions across aerospace, high-tech infrastructure, and sustainable energy.
                    </p>
                </div>
            </section>

            {/* Interactive Client Grid Section */}
            <section className="py-24 bg-background">
                <div className="max-w-container-max mx-auto px-margin-desktop">
                    <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                        <div>
                            <h2 className="text-tertiary text-xs font-bold uppercase tracking-widest font-mono mb-2">PARTNERS &amp; CLIENTS</h2>
                            <h3 className="text-2xl font-bold text-primary uppercase">Technical Ecosystem</h3>
                        </div>
                        <a className="text-primary text-xs font-bold uppercase tracking-widest hover:text-tertiary transition-colors flex items-center gap-2 group font-mono" href="#">
                            VIEW ALL PARTNERS 
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {clients.map((c, i) => (
                            <div key={i} className="bg-surface-container-lowest border border-outline-variant hover:border-tertiary group p-8 rounded flex flex-col h-full hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center justify-center h-24 mb-8">
                                    <img className="max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100" alt={c.name} src={c.logo} />
                                </div>
                                <h4 className="text-base font-bold text-primary mb-2 uppercase">{c.name}</h4>
                                <p className="text-on-surface-variant text-xs mb-8 flex-grow leading-relaxed">{c.desc}</p>
                                <div className="flex gap-4">
                                    <a className="text-tertiary font-mono text-[11px] font-bold flex items-center gap-1 hover:underline" href="#">
                                        {c.type} <span className="material-symbols-outlined text-sm">{c.icon}</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 md:py-32 bg-surface-container-low border-y border-outline-variant">
                <div className="max-w-container-max mx-auto px-margin-desktop">
                    <div className="text-center mb-20">
                        <h2 className="text-2xl font-bold text-primary uppercase">Engineering Trust</h2>
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
        </div>
    );
}
