import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="w-full">
            {/* Hero Banner */}
<section className="relative w-full h-[600px] overflow-hidden">
<div className="absolute inset-0 z-0 bg-cover bg-center scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1PzaJj5thKnZqzNh7ZiG1yrDA9K_BfbHP5wi8tI4x1egrcvVvAaAm7z7NK21bDMpxoUtpGOQz1IFC5lf_twLVR3Hm8eegjbzlv38KJBCbPWgIu6OL8EmjvvDSIxH0SUY4fdhkxEld8IQNeNrzpvB6XCNghkEEDBI6NZYi1E0W4YORKVD2QMvn08vAQijDGXYIardCYAN-uzzDvSDFfkVQ0Q1mu7d5aIE_nWJsBegS6BcPrdzcKXqIeA')" }}></div>
<div className="absolute inset-0 z-10 industrial-overlay"></div>
{/* Industrial Accents */}
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-background to-secondary z-20 opacity-50"></div>
<div className="absolute bottom-0 left-0 w-full h-px bg-outline-variant/30 z-20"></div>
<div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-margin-mobile md:px-margin-desktop">
<span className="inline-block border border-secondary/40 px-4 py-2 rounded-full text-secondary text-label-caps mb-8 bg-secondary/10 backdrop-blur-sm">ESTABLISHED 2024 | v2</span>
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tighter uppercase max-w-4xl">
                Technical Precision &amp; <br className="hidden md:block"/> <span className="text-secondary">Integrated Fire Safety</span>
</h1>
<div className="mt-12 w-32 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
</div>
</section>
{/* History Narrative */}
<section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
<div className="max-w-5xl mx-auto">
<div className="bg-surface-container p-8 md:p-16 rounded-2xl shadow-2xl border border-outline-variant/10 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-5">
<span className="material-symbols-outlined text-[120px]">engineering</span>
</div>
<div className="flex items-center gap-6 mb-12">
<div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-4xl">precision_manufacturing</span>
</div>
<div>
<h2 className="font-headline-md text-display-lg-mobile text-on-surface">The Architecture of Excellence</h2>
<div className="h-1 w-20 bg-secondary mt-2"></div>
</div>
</div>
<div className="space-y-8 narrative-justified text-on-surface-variant font-body-lg leading-relaxed">
<p className="">
                        Since our inception in early 2024, Titan Precision has operated at the critical intersection of structural integrity, digital innovation, and advanced life safety systems. Founded on the principle that modern engineering requires more than mechanical proficiency, we deliver holistic solutions for the complex technological ecosystems powering today's industrial landscape.
                    </p>
<p className="">
                        Our specialized focus on <strong>fire safety engineering</strong> complements our core structural and mechanical competencies. By integrating fire suppression analytics and life safety protocols directly into the architectural phase, we ensure that safety is never an afterthought, but a fundamental pillar of design.
                    </p>
<p className="">
                        Today, we are a multi-disciplinary powerhouse. Our methodology integrates real-time data analytics with traditional fabrication, ensuring every project—from municipal infrastructure to high-risk industrial plants—meets the most rigorous standards of 21st-century compliance and technical precision.
                    </p>
</div>
<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-outline-variant/30">
<div className="flex flex-col">
<span className="text-secondary font-display-lg text-3xl mb-1">50+</span>
<span className="text-on-surface-variant text-label-caps">Engineers</span>
</div>
<div className="flex flex-col">
<span className="text-secondary font-display-lg text-3xl mb-1">120+</span>
<span className="text-on-surface-variant text-label-caps">Projects</span>
</div>
<div className="flex flex-col">
<span className="text-secondary font-display-lg text-3xl mb-1">15</span>
<span className="text-on-surface-variant text-label-caps">Fire Patents</span>
</div>
<div className="flex flex-col">
<span className="text-secondary font-display-lg text-3xl mb-1">ISO</span>
<span className="text-on-surface-variant text-label-caps">9001:2015</span>
</div>
</div>
</div>
</div>
</section>
{/* Strategic Pillars */}
<section className="py-24 px-margin-mobile md:px-margin-desktop bg-background">
<div className="max-w-container-max mx-auto">
<div className="text-center mb-20">
<span className="text-secondary text-label-caps mb-4 block">CORE DIRECTIVES</span>
<h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-on-surface mb-6">Strategic Pillars</h2>
<p className="text-on-surface-variant font-body-md max-w-2xl mx-auto opacity-80">The foundational values and precision-driven directives that govern our operations and define our professional standard.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/* Mission */}
<div className="pillar-card bg-surface-container p-8 rounded-xl border border-outline-variant/20 hover:border-secondary/50 hover:bg-surface-container-high shadow-lg flex flex-col h-full group transition-all duration-700 opacity-100 translate-y-0">
<div className="mb-8 w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
<span className="material-symbols-outlined text-secondary group-hover:text-on-secondary text-3xl">rocket_launch</span>
</div>
<h3 className="font-headline-md text-on-surface mb-4 accent-gradient-border pb-2">Mission</h3>
<p className="text-on-surface-variant text-body-md mb-6 leading-relaxed flex-grow">
                        To provide high-precision engineering and safety solutions that accelerate global industrial progress through technical innovation.
                    </p>
</div>
{/* Vision */}
<div className="pillar-card bg-surface-container p-8 rounded-xl border border-outline-variant/20 hover:border-secondary/50 hover:bg-surface-container-high shadow-lg flex flex-col h-full group transition-all duration-700 opacity-100 translate-y-0">
<div className="mb-8 w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
<span className="material-symbols-outlined text-secondary group-hover:text-on-secondary text-3xl">visibility</span>
</div>
<h3 className="font-headline-md text-on-surface mb-4 accent-gradient-border pb-2">Vision</h3>
<p className="text-on-surface-variant text-body-md mb-6 leading-relaxed flex-grow">
                        To be the most trusted global partner in infrastructure engineering, redefining the limits of technical precision and safety.
                    </p>
</div>
{/* Values */}
<div className="pillar-card bg-surface-container p-8 rounded-xl border border-outline-variant/20 hover:border-secondary/50 hover:bg-surface-container-high shadow-lg flex flex-col h-full group transition-all duration-700 opacity-100 translate-y-0">
<div className="mb-8 w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
<span className="material-symbols-outlined text-secondary group-hover:text-on-secondary text-3xl">verified</span>
</div>
<h3 className="font-headline-md text-on-surface mb-4 accent-gradient-border pb-2">Values</h3>
<p className="text-on-surface-variant text-body-md mb-6 leading-relaxed flex-grow">
                        Integrity, reliability, and precision. We hold ourselves accountable for every weld, every line of code, and every safety protocol.
                    </p>
</div>
{/* Safety Policy */}
<div className="pillar-card bg-surface-container p-8 rounded-xl border border-outline-variant/20 hover:border-secondary/50 hover:bg-surface-container-high shadow-lg flex flex-col h-full group transition-all duration-700 opacity-100 translate-y-0">
<div className="mb-8 w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
<span className="material-symbols-outlined text-secondary group-hover:text-on-secondary text-3xl">local_fire_department</span>
</div>
<h3 className="font-headline-md text-on-surface mb-4 accent-gradient-border pb-2">Safety Policy</h3>
<p className="text-on-surface-variant text-body-md mb-6 leading-relaxed flex-grow">
                        Uncompromising adherence to international fire safety frameworks and a commitment to zero-defect execution in life safety deliverables.
                    </p>
</div>
</div>
</div>
</section>
{/* Footer */}
        </div>
    );
}
