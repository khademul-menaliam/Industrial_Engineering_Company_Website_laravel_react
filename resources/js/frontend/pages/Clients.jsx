import React from 'react';
import { Link } from 'react-router-dom';

export default function Clients() {
    return (
        <div className="w-full">
            
{/* Hero Section */}
<section className="relative overflow-hidden py-32 bg-surface-container-lowest border-b border-outline-variant">
<div className="absolute inset-0 opacity-20 pointer-events-none">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#4a449d,transparent_70%)]"></div>
</div>
<div className="relative max-w-[1280px] mx-auto px-margin-desktop text-center">
<span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-caps text-[10px] mb-8 border border-primary/50">GLOBAL IMPACT • V2</span>
<h1 className="font-display-lg text-display-lg text-on-surface mb-8 uppercase tracking-[0.2em]">Strategic Partnerships</h1>
<p className="max-w-2xl mx-auto font-body-lg text-body-lg text-on-surface-variant">
                    Collaborating with global industry leaders to engineer mission-critical solutions across aerospace, high-tech infrastructure, and sustainable energy.
                </p>
</div>
</section>
{/* Interactive Client Grid Section */}
<section className="py-24 bg-background">
<div className="max-w-[1280px] mx-auto px-margin-desktop">
<div className="mb-12 flex justify-between items-end">
<div>
<h2 className="font-label-caps text-primary mb-2">PARTNERS &amp; CLIENTS</h2>
<h3 className="font-headline-md text-on-surface uppercase">Technical Ecosystem</h3>
</div>
<a className="text-primary font-label-caps text-[12px] hover:underline flex items-center gap-2" href="/">VIEW ALL PARTNERS <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/* Client Card 1 */}
<div className="client-card relative bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant hover:border-primary group cursor-pointer">
<div className="p-12 flex items-center justify-center aspect-[16/9]">
<img className="max-h-16 w-auto object-contain brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHhM5CQyNf-2wpSWD8R0GRIJWthECM38zcvUA4eDyEC3dkutMx7IUbxoGAFXvGWXRWLbuyHMm3KZn_AVmQtJ3CgvNCua0OPC9F9PEANdvLUQbWDY-ycan0q1J_BZPL_bdhmOwncJ6muFjKVDSEYZx9_Wzsfp1z_9Pi9PiL8IUYnpI4MaE05Fv14_uG0TEhNWb09OBXedhek01qEdYmIQtWsL4fH7bP6bkyn851veCw9p-kO6Sb13aExw"/>
</div>
<div className="action-overlay absolute inset-0 bg-primary/95 flex flex-col items-center justify-center opacity-0 translate-y-4 transition-all duration-300 p-8 text-center">
<h4 className="font-headline-md text-on-primary mb-2">AEROSPACE DYNAMICS</h4>
<p className="text-on-primary/80 font-body-md mb-6">Propulsion system structural validation and ISO compliance.</p>
<button className="bg-surface-container-lowest text-primary font-label-caps px-6 py-2.5 rounded-lg hover:bg-on-primary transition-colors flex items-center gap-2">
                                VIEW PROJECTS <span className="material-symbols-outlined text-[18px]">open_in_new</span>
</button>
</div>
</div>
{/* Client Card 2 */}
<div className="client-card relative bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant hover:border-primary group cursor-pointer">
<div className="p-12 flex items-center justify-center aspect-[16/9]">
<img className="max-h-16 w-auto object-contain brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2t7mHdDsUpx9X8QfasEhqOmYyi89miODolxNLpG-fqSHU4SO7HSLdoOu9miBdtvt2_5qCywDtW0xvB5EfkRyGX6gYjVSJ4EupcKOrlrkmLU-8zANSlbtYy5eB4pAlnGtETh-dYz7jRSSSNpIINvNudAGf84iZhxWNhe2P_GgtwEZ2LZRxTzoTz74k6zESWh46juEXGGQjmQI1d_FgtWv7ivxQRBhQvx7n-PEQnZPH4Sc9-X-rwB4U5w"/>
</div>
<div className="action-overlay absolute inset-0 bg-primary/95 flex flex-col items-center justify-center opacity-0 translate-y-4 transition-all duration-300 p-8 text-center">
<h4 className="font-headline-md text-on-primary mb-2">GLO-ENERGY CORP</h4>
<p className="text-on-primary/80 font-body-md mb-6">Grid-scale storage facility design and site assessment.</p>
<button className="bg-surface-container-lowest text-primary font-label-caps px-6 py-2.5 rounded-lg hover:bg-on-primary transition-colors flex items-center gap-2">
                                CASE STUDY <span className="material-symbols-outlined text-[18px]">description</span>
</button>
</div>
</div>
{/* Client Card 3 */}
<div className="client-card relative bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant hover:border-primary group cursor-pointer">
<div className="p-12 flex items-center justify-center aspect-[16/9]">
<img className="max-h-16 w-auto object-contain brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl_vI4k33CjhKur-zT_xiyt6ZBXK96nqRwVG9383xgCWaoz4vJ9U8nCAKXL2iDrv5zr8QNqjljZ8n00JtthTi71ucjtANJ8gh6c_-jgCDY_GWQGYgFIPuyuoFqL6-60kg-nmphwH41Pl6ZUH9eWAnBuHYDsljjI7uJE4COwmv5rNZ4JjRkesS2pIOGfNW6Q8qtwQpcnetPRHL2H4fieKz5GYVhIAvR6jvqP7nuWqYAffmRtThqpKyWKQ"/>
</div>
<div className="action-overlay absolute inset-0 bg-primary/95 flex flex-col items-center justify-center opacity-0 translate-y-4 transition-all duration-300 p-8 text-center">
<h4 className="font-headline-md text-on-primary mb-2">QUANTUM SYSTEMS</h4>
<p className="text-on-primary/80 font-body-md mb-6">Clean-room infrastructure for semiconductor fabrication.</p>
<button className="bg-surface-container-lowest text-primary font-label-caps px-6 py-2.5 rounded-lg hover:bg-on-primary transition-colors flex items-center gap-2">
                                VIEW PROJECTS <span className="material-symbols-outlined text-[18px]">open_in_new</span>
</button>
</div>
</div>
{/* Client Card 4 */}
<div className="client-card relative bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant hover:border-primary group cursor-pointer">
<div className="p-12 flex items-center justify-center aspect-[16/9]">
<img className="max-h-16 w-auto object-contain brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8jOlw_bpKvZEP3b_URBhFla7hGkihRmohwfdnGS5MHYf0DfFrAHvQqVpptkqZXdUKEBWfeEsgRg3M60bQgKW99Gs0toCtyI0swh8Hk9UxqdVNf5ULpVsqsQ9v-GpgwQlrJPZHmHN2-35SGYaL9uLDXPDS-aql9kdu1cPb7YIqn2Bxn0-Cr7aV1--JVpDbVc9JsVIhRQ9UIRqA2l5SQVO79V0E2bAmJODVJV-GpQ1E6sqMHTN6K9pLIw"/>
</div>
<div className="action-overlay absolute inset-0 bg-primary/95 flex flex-col items-center justify-center opacity-0 translate-y-4 transition-all duration-300 p-8 text-center">
<h4 className="font-headline-md text-on-primary mb-2">OCEANIC LOGISTICS</h4>
<p className="text-on-primary/80 font-body-md mb-6">Deep-water terminal stress analysis and reinforcement.</p>
<button className="bg-surface-container-lowest text-primary font-label-caps px-6 py-2.5 rounded-lg hover:bg-on-primary transition-colors flex items-center gap-2">
                                CASE STUDY <span className="material-symbols-outlined text-[18px]">description</span>
</button>
</div>
</div>
{/* Client Card 5 */}
<div className="client-card relative bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant hover:border-primary group cursor-pointer">
<div className="p-12 flex items-center justify-center aspect-[16/9]">
<img className="max-h-16 w-auto object-contain brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3qKpYsyUZ5Nb802lmmNk8UjHn-O6aCO5_mxIyAvaL8Fw8YtNTr-jJ8R3aLUqJyPMAK6ywJDY6EK3M-m5dMBFSaA6AUhuXwCFWrWAZ0PRtYtDSrMP-DGTgxo8QOzcsFNIOmeDpERpYhgzaUyufwlNxi4Eeo7s3aFrRZGgg4XixjxEATSgHHbw8U0G17h42ne-YKsUZjkqxNS4T8wE3emYwGD0E2zVi4REVdcFm5KAF2_hr34VtJvIZyA"/>
</div>
<div className="action-overlay absolute inset-0 bg-primary/95 flex flex-col items-center justify-center opacity-0 translate-y-4 transition-all duration-300 p-8 text-center">
<h4 className="font-headline-md text-on-primary mb-2">AUTO-BOTICS INC</h4>
<p className="text-on-primary/80 font-body-md mb-6">Automated assembly line precision calibration.</p>
<button className="bg-surface-container-lowest text-primary font-label-caps px-6 py-2.5 rounded-lg hover:bg-on-primary transition-colors flex items-center gap-2">
                                VIEW PROJECTS <span className="material-symbols-outlined text-[18px]">open_in_new</span>
</button>
</div>
</div>
{/* Client Card 6 */}
<div className="client-card relative bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant hover:border-primary group cursor-pointer">
<div className="p-12 flex items-center justify-center aspect-[16/9]">
<img className="max-h-16 w-auto object-contain brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4wEJk53uFhVFtqPlZ8W1N0Cf372TlJQqp5Iqzo30pqjoxc3hMjp2vk-9a0BXXY4dhZ7J8CfHVt1CPOh6r5jasYRHpKk_qIdlbfzTinUiFBrABz5sEHFAGEoeE27dlF9EVFio1qNTrVM2nL0t-jWHkNX6LjN7bLTSFFSOiDH4ZplZjvqOCqlRqIzs1IWZPbATLmgvFYHA3txRa74adEbGLdyv1nUDZOGs1K8ShW6bi3c3Fm62DePzUMA"/>
</div>
<div className="action-overlay absolute inset-0 bg-primary/95 flex flex-col items-center justify-center opacity-0 translate-y-4 transition-all duration-300 p-8 text-center">
<h4 className="font-headline-md text-on-primary mb-2">CIVIL-CORE INT</h4>
<p className="text-on-primary/80 font-body-md mb-6">Smart-city infrastructure and structural health monitoring.</p>
<button className="bg-surface-container-lowest text-primary font-label-caps px-6 py-2.5 rounded-lg hover:bg-on-primary transition-colors flex items-center gap-2">
                                CASE STUDY <span className="material-symbols-outlined text-[18px]">description</span>
</button>
</div>
</div>
</div>
</div>
</section>
{/* Testimonials Section */}
<section className="py-32 bg-surface-container-lowest border-y border-outline-variant">
<div className="max-w-[1280px] mx-auto px-margin-desktop">
<div className="text-center mb-20">
<h2 className="font-headline-md text-headline-md text-on-surface mb-6 uppercase tracking-widest">Engineering Trust</h2>
<div className="h-0.5 w-24 bg-primary mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-stretch">
{/* Testimonial 1 */}
<div className="testimonial-card bg-surface-container-low rounded-xl p-10 relative flex flex-col h-full border border-outline-variant hover:border-primary/50 transition-all duration-700">
<span className="material-symbols-outlined text-primary/10 text-7xl absolute top-6 right-6 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
<div className="flex-grow">
<p className="font-body-md text-body-md italic text-on-surface leading-relaxed mb-10">
                                "Titan Precision's attention to structural detail and their proactive compliance reporting saved our project timeline from several potential delays. Their technical mastery is unparalleled in the aerospace sector."
                            </p>
</div>
<div className="flex items-center gap-5 mt-auto border-t border-outline-variant pt-8">
<img className="w-14 h-14 rounded-full object-cover border-2 border-primary grayscale hover:grayscale-0 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvjExXib_Nxk-SvgOlweLYNIMXiAUc_FhG9ARGCjwOoMpmTH45fWTtfstZ0w-S386_yFdltF0PME8X7QzYU9jtelFScX11aWF8Hq0BOCmAPWwxEf0PfXtGs5pT-d0AKbwZnTqvOzs8tSVKCftsNPHySXs23E4pPWTgLkpomC0SjxoYLospwj9i2vRpu6o0p0kdpPtkxqYp2paREyWOiJblEgOIQ9zGuiJqQlN3gXI9sapZ5u3L5eGM4g"/>
<div>
<h4 className="font-label-caps text-[13px] text-on-surface font-bold">DR. MARCUS THORNE</h4>
<p className="font-mono-data text-mono-data text-primary uppercase">CTO, AEROSPACE DYNAMICS</p>
</div>
</div>
</div>
{/* Testimonial 2 */}
<div className="testimonial-card bg-surface-container-low rounded-xl p-10 relative flex flex-col h-full border border-outline-variant hover:border-primary/50 transition-all duration-700">
<span className="material-symbols-outlined text-primary/10 text-7xl absolute top-6 right-6 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
<div className="flex-grow">
<p className="font-body-md text-body-md italic text-on-surface leading-relaxed mb-10">
                                "The precision of their CAD models and the seamless integration into our existing BIM workflow was impressive. They operate with a level of reliability that is rare in complex infrastructure projects today."
                            </p>
</div>
<div className="flex items-center gap-5 mt-auto border-t border-outline-variant pt-8">
<img className="w-14 h-14 rounded-full object-cover border-2 border-primary grayscale hover:grayscale-0 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFV6u3u9-YFG6P5Q0oG1szItDw1R25dLti2RdrC0iN81qzGI7aW91oEucoLH98zYptBu7q3eRazG-ZY3z8yJyWGVS2mNYJq03-TiJZpQky3d7f4pHeLtbpCe0rrGXhqeVnmVJu1MoEo9FFBqCvS5-g2KfFhCCqPqonLkebozFYmQGV98xpWyDHr3px1qjF2UNQUK83WmDdAYV09RCn0w4eTeoR3nN6DHOwoYpshy26EYahvMt-UJBnWg"/>
<div>
<h4 className="font-label-caps text-[13px] text-on-surface font-bold">ELENA RODRIGUEZ</h4>
<p className="font-mono-data text-mono-data text-primary uppercase">DIR. INFRASTRUCTURE, GLO-ENERGY</p>
</div>
</div>
</div>
{/* Testimonial 3 */}
<div className="testimonial-card bg-surface-container-low rounded-xl p-10 relative flex flex-col h-full border border-outline-variant hover:border-primary/50 transition-all duration-700">
<span className="material-symbols-outlined text-primary/10 text-7xl absolute top-6 right-6 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
<div className="flex-grow">
<p className="font-body-md text-body-md italic text-on-surface leading-relaxed mb-10">
                                "From initial site assessment to final ISO certification assistance, Titan Precision provided a turn-key experience that allowed us to focus on our core operational growth during a critical expansion phase."
                            </p>
</div>
<div className="flex items-center gap-5 mt-auto border-t border-outline-variant pt-8">
<img className="w-14 h-14 rounded-full object-cover border-2 border-primary grayscale hover:grayscale-0 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY-Oc4a7WC8vgYg0rPQkrPo-jdzEzPCjzCoZYKQE55jYdBoawjDIAPIqx8tv1Jv_m3sj0w5EM_VYdxQnFxSbqN9qmi3ccL0cQPDYv3HLmikSAJZFKrdMeusTKAVZye5Wtz5qjX0N294fsU-kGZHQD0Yl1GPcD80nsQ439o5nd8fnmPcpZRcoxIYFZNxYRJrE6S1UbtgvSNQX7tM8D5lTiLnrfl44-w1DttpqBcU37v3dpXIfKlc_aP0w"/>
<div>
<h4 className="font-label-caps text-[13px] text-on-surface font-bold">JONATHAN STERLING</h4>
<p className="font-mono-data text-mono-data text-primary uppercase">OPERATIONS LEAD, STERLING SYSTEMS</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* CTA Section */}
<section className="py-24 bg-primary-container relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
<div className="relative max-w-[1280px] mx-auto px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-12">
<div className="text-left max-w-2xl">
<h3 className="font-display-lg text-[32px] text-on-primary-container mb-4 uppercase tracking-wider">Initiate Technical Consultation</h3>
<p className="font-body-md text-body-md text-on-primary-container/80">Connect with our specialized engineering leads to scope your next infrastructure milestone with Titan Precision v2.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
<button className="bg-primary text-on-primary font-label-caps text-[14px] px-10 py-4 rounded-lg shadow-xl hover:brightness-110 transition-all duration-300 font-bold uppercase tracking-widest whitespace-nowrap">CONTACT SALES</button>
<button className="border-2 border-primary text-primary font-label-caps text-[14px] px-10 py-4 rounded-lg hover:bg-primary/10 transition-all duration-300 font-bold uppercase tracking-widest whitespace-nowrap">REQUEST QUOTE</button>
</div>
</div>
</section>

        </div>
    );
}
