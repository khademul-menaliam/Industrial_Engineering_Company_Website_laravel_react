import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="w-full">
            
{/* Hero Slider Section */}
<section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center bg-surface-container-lowest">
<div className="absolute inset-0 z-0 bg-cover bg-center scale-105 transition-all duration-[1000ms] ease-out opacity-100 translate-y-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQgqWhbGQlWq4PyZp-s8QEE87QZaxQWLz-n0Hn-FRaWNE6fAIhagXoFDmQgbh494h-X-Jr2irQmLbSm4A2StBPTHGMTVaUcC7TixKaUJo5oUGzvVYyAULCK9VSwNFWFK79hgA1VRQUN9nx0_PqEiLK4rAa2qfJwpSnoag-__zhs4moJQ5eI5t7GGp5Nw9S2kboVr2jO0-PI06ZUUVh3zB_k7qt2PuX3UNeBIr1nqA5z83nV_SDfGSrNw')" }}></div>
<div className="absolute inset-0 z-10 industrial-overlay transition-all duration-[1000ms] ease-out opacity-100 translate-y-0"></div>
<div className="relative z-20 text-center px-margin-mobile max-w-5xl transition-all duration-[1000ms] ease-out opacity-100 translate-y-0">
<div className="inline-block px-4 py-1.5 bg-secondary-container/10 border border-secondary-container/30 rounded-full mb-8">
<span className="text-secondary-container font-label-caps text-label-caps tracking-[0.3em]">Titan Precision Series v2</span>
</div>
<h1 className="text-white font-display-lg text-display-lg uppercase tracking-tight mb-8 leading-none">Innovative <br/><span className="text-primary">Engineering</span> Solutions v2</h1>
<p className="text-on-surface-variant font-body-lg text-body-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                    Setting the standard in high-precision industrial design. We engineer the critical infrastructure that powers global industry with uncompromising accuracy.
                </p>
<div className="flex flex-wrap justify-center gap-6">
<button className="bg-secondary-container text-on-secondary-container px-12 py-5 rounded-lg font-label-caps text-label-caps hover:brightness-110 hover:-translate-y-1 transition-all shadow-xl shadow-secondary-container/20">
                        Our Expertise
                    </button>
<button className="border border-outline text-white px-12 py-5 rounded-lg font-label-caps text-label-caps hover:bg-white/5 transition-all">
                        Technical Specs
                    </button>
</div>
</div>
{/* Slider Indicators */}
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4 transition-all duration-[1000ms] ease-out opacity-100 translate-y-0">
<div className="w-16 h-1 bg-secondary-container rounded-full"></div>
<div className="w-16 h-1 bg-outline-variant/30 rounded-full"></div>
<div className="w-16 h-1 bg-outline-variant/30 rounded-full"></div>
</div>
</section>
{/* About Us Introduction */}
<section className="py-32 bg-surface px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="grid md:grid-cols-2 gap-24 items-center transition-all duration-[1000ms] ease-out opacity-100 translate-y-0">
<div className="relative group">
<div className="absolute -inset-6 bg-indigo-deep/20 rounded-xl rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
<div className="relative h-[600px] w-full rounded-xl overflow-hidden border border-outline-variant/20 shadow-2xl">
<img className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6xgkUTZ0CJxOiMrdCY5HWnPam_-zwWx7vy0CJmveh7ZS_JOe6SYZJFtcRGcBVFDmHQTQNd7hAd6eTebvTWg-TdLKwC_ghcg54cEk_xBQw4aTRqnodb9p7aQnnYZDZwgM98ONSI7oyAfGMntl_opd1CH7n0WtMEIovr1K8ysZo4BJz7EaSVq6ps_-eaTTTiKUqDNrePld6kY7-15Woh_WLIeWINU2hGVdMCDYmUV-Tl3e_SfnENZZgTw"/>
</div>
</div>
<div>
<span className="text-secondary-container font-label-caps text-label-caps tracking-[0.2em] mb-4 block uppercase">Titan Precision v2</span>
<h2 className="font-display-lg text-headline-md md:text-display-lg text-on-surface mb-10 leading-tight">Precision in Every Component</h2>
<div className="space-y-8 font-body-md text-body-md text-on-surface-variant leading-loose">
<p className="">
                            Founded on the principles of structural integrity and technical innovation, Titan Precision v2 has emerged as a leader in industrial solution design. Our team of specialized engineers brings decades of combined experience across diverse sectors including energy, manufacturing, and logistics.
                        </p>
<p className="">
                            We don't just design systems; we engineer reliability. Every project we undertake is a testament to our commitment to precision, utilizing the latest in CAD technology and predictive modeling to ensure world-class engineering standards.
                        </p>
<div className="pt-6">
<a className="inline-flex items-center gap-3 text-secondary-container font-bold hover:gap-5 transition-all group" href="/">
<span className="font-label-caps text-label-caps uppercase tracking-wider">Explore our legacy</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</section>
{/* Leadership Message */}
<section className="py-32 bg-indigo-deep border-y border-outline-variant/10">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop transition-all duration-[1000ms] ease-out opacity-100 translate-y-0">
<div className="text-center mb-20">
<span className="text-secondary-container font-label-caps text-label-caps tracking-[0.2em] mb-4 block">Our Board</span>
<h2 className="font-display-lg text-headline-md md:text-display-lg text-white">Strategic Leadership</h2>
<p className="font-body-md text-body-md text-on-primary-container mt-4 max-w-2xl mx-auto">Providing visionary guidance for complex industrial and structural challenges globally.</p>
</div>
<div className="grid md:grid-cols-2 gap-10">
{/* CEO Card */}
<div className="bg-surface-container-lowest p-12 rounded-xl shadow-xl border border-outline-variant/10 hover:border-secondary-container/30 transition-all flex flex-col md:flex-row gap-10 items-center md:items-start group">
<div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 border-2 border-outline-variant/20 group-hover:border-secondary-container transition-colors">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdqOTYnupjt5nefsPJfgjHM5HMSix_-gvu2_5cythhmuUcLI2PfYVTXEqEZoZ1zb_BJZFAqoKaO2V0Qm4QtjwKvcQwn1kVOunWU27xyjnDCZ1wxDwRNnBYPoQKmoaWg5knYpTELkqiYZPebgLV8ILc_SWCdQGmp7eaKshtYnYqq6CUgfmd6b1qfwjuahdRa5B3RSc9AR0An4EpvfDAh5TPWyEcrXzVj2G4N-irBFJVrqv46azTwU5Xdg"/>
</div>
<div>
<span className="material-symbols-outlined text-secondary-container text-5xl mb-4 opacity-50">format_quote</span>
<p className="font-body-md text-body-md italic text-on-surface-variant mb-8 leading-relaxed">
                                "Our mission is simple: to provide the structural foundation upon which global industries can thrive. Precision is not just a goal; it is our standard."
                            </p>
<div>
<h4 className="font-headline-md text-headline-md text-on-surface">David Richardson</h4>
<p className="font-label-caps text-label-caps text-secondary-container uppercase tracking-widest mt-1">Chief Executive Officer</p>
</div>
</div>
</div>
{/* Advisor Card */}
<div className="bg-surface-container-lowest p-12 rounded-xl shadow-xl border border-outline-variant/10 hover:border-secondary-container/30 transition-all flex flex-col md:flex-row gap-10 items-center md:items-start group">
<div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 border-2 border-outline-variant/20 group-hover:border-secondary-container transition-colors">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6BlPBCRMJPlatpTIEpHMp_Qin1P514yu10fGxWT8RCgzgoxzfNiAixjZyyzruYkGHVQ5RjH0OBEc_KxD_hB3qcSwgxBXfCTdz75xqcQlWtmJnDVoVu7OJ9_8DQHmlEU1UMzGztma2yOZJNdmDHaGbntYYSAK2eccHc0A0NiIuJRImByMag29_G6K1EVot-b3ZHvp7O_PPDZ8Lu7dPLc2J8a7Q4Qw5LAllNFz5l83u3GMtrCZy6h2wdw"/>
</div>
<div>
<span className="material-symbols-outlined text-secondary-container text-5xl mb-4 opacity-50">format_quote</span>
<p className="font-body-md text-body-md italic text-on-surface-variant mb-8 leading-relaxed">
                                "The complexity of modern engineering requires a blend of traditional expertise and digital foresight. We provide that equilibrium."
                            </p>
<div>
<h4 className="font-headline-md text-headline-md text-on-surface">Dr. Elena Vance</h4>
<p className="font-label-caps text-label-caps text-secondary-container uppercase tracking-widest mt-1">Senior Strategic Advisor</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Services Highlight */}
<section className="py-32 bg-surface px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 transition-all duration-[1000ms] ease-out opacity-100 translate-y-0">
<div>
<span className="text-secondary-container font-label-caps text-label-caps tracking-[0.2em] mb-4 block">Our Disciplines</span>
<h2 className="font-display-lg text-headline-md md:text-display-lg text-on-surface">Core Competencies</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-xl">Comprehensive engineering specialized for the most demanding industrial environments.</p>
</div>
<button className="flex items-center gap-3 text-secondary-container font-bold group border border-secondary-container/30 px-6 py-3 rounded-lg hover:bg-secondary-container/5 transition-all">
<span className="font-label-caps text-label-caps uppercase tracking-wider">Full Catalog</span>
<span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
</button>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-[1000ms] ease-out opacity-100 translate-y-0">
{/* Service Card 1 - Fire Safety Focus */}
<div className="bg-surface-container-highest rounded-xl shadow-2xl overflow-hidden group hover:-translate-y-3 transition-all border-2 border-secondary-container/20 hover:border-secondary-container">
<div className="h-56 overflow-hidden relative">
<div className="absolute inset-0 bg-secondary-container/10 z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2K5DCzWYlO07uOYDok6Z-dcMMzyG-kVsbnogZ30SHtmVodPWrDys0vB8s5ILkFdnBbnIfPrgj9-osvMp5jpQyB-bmaE44XAiJhZdCwp6EYjKlMqrmT7c-sfj9RaB-dGSX5vDEo_pO2uqQLYApNb840hETNczsKSHe4g0AzEnd6Qf5Drx0xfoigGsjwFBuM15NK9st-lYEbNiZRS68CLYi60ZS4zHIpAmn89gWeAKB37gRzVouecvT7w"/>
<div className="absolute top-4 right-4 z-20 bg-secondary-container text-on-secondary-container px-3 py-1 rounded font-label-caps text-[10px] tracking-widest uppercase">High Priority</div>
</div>
<div className="p-10">
<h3 className="font-headline-md text-headline-md mb-6 text-on-surface">Fire Safety &amp; MEP</h3>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-4 text-body-sm text-on-surface-variant font-mono-data">
<span className="material-symbols-outlined text-secondary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                                Advanced Suppression Systems
                            </li>
<li className="flex items-center gap-4 text-body-sm text-on-surface-variant font-mono-data">
<span className="material-symbols-outlined text-secondary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                                NFPA Compliance Audits
                            </li>
<li className="flex items-center gap-4 text-body-sm text-on-surface-variant font-mono-data">
<span className="material-symbols-outlined text-secondary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>settings_input_component</span>
                                Fire Load Management
                            </li>
</ul>
<button className="w-full py-4 rounded-lg bg-secondary-container text-on-secondary-container font-bold hover:brightness-110 transition-all flex justify-center items-center gap-3 shadow-lg shadow-secondary-container/20">
<span className="font-label-caps text-label-caps uppercase tracking-wider">Critical Spec</span>
<span className="material-symbols-outlined text-sm">bolt</span>
</button>
</div>
</div>
{/* Service Card 2 */}
<div className="bg-surface-container-highest rounded-xl shadow-2xl overflow-hidden group hover:-translate-y-3 transition-all border border-outline-variant/10">
<div className="h-56 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[0.5] group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMVvYGqkxmARyUhVBYUegQTjy1kHkfLD-6pA155F0A41_aBUXxMT0gllzEo0V-QIxhjX-FVahEGRl2Zl0_SAFzozf4VBiBcli6hz6v-zTW6qnkplLFTBf7YqXPHH5IdvTeZHEHsL2n6qeAMsmxcRMSN1PJPJWUz30rdIsCsC-KNJGvkJD1KNvuyyNBFyTWcxUh8HJAdxeqACMQ2KpWhnwxmdjE18EJWdun_z_ADbdtmdCu-ooWPTOf-A"/>
</div>
<div className="p-10">
<h3 className="font-headline-md text-headline-md mb-6 text-on-surface">Structural Systems</h3>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-4 text-body-sm text-on-surface-variant font-mono-data">
<span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                                Seismic Load Analysis
                            </li>
<li className="flex items-center gap-4 text-body-sm text-on-surface-variant font-mono-data">
<span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
                                Steel Optimization
                            </li>
<li className="flex items-center gap-4 text-body-sm text-on-surface-variant font-mono-data">
<span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>foundation</span>
                                Deep Foundation Design
                            </li>
</ul>
<button className="w-full py-4 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-on-primary transition-all flex justify-center items-center gap-3">
<span className="font-label-caps text-label-caps uppercase tracking-wider">View Details</span>
<span className="material-symbols-outlined text-sm">open_in_new</span>
</button>
</div>
</div>
{/* Service Card 3 */}
<div className="bg-surface-container-highest rounded-xl shadow-2xl overflow-hidden group hover:-translate-y-3 transition-all border border-outline-variant/10">
<div className="h-56 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[0.5] group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-kiJZgpt5bmFb5IQlPoyomn5YImZS06iSjadtCLU_WF2l3BlxszFEeJt-lE62iANDJfOcODa5aMCltdX5MjNX8eNNxPzent96l66MChTGi7LJZm7sqOOYpxsDVf0gU5yJaP3Dj5leVzL3tSEw3-Eoaz6ztMIO0LISR9zdw8qHdAFtdmimLk_DTitWiYit31F-_aJjLyhI_6YNJVsaElnBJYhBrQxcDw8MnmVKNDMm4KniXxzAhKnB2Q"/>
</div>
<div className="p-10">
<h3 className="font-headline-md text-headline-md mb-6 text-on-surface">Robotics &amp; Automation</h3>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-4 text-body-sm text-on-surface-variant font-mono-data">
<span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
                                PLC/SCADA Integration
                            </li>
<li className="flex items-center gap-4 text-body-sm text-on-surface-variant font-mono-data">
<span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
                                Robotic Workflow Design
                            </li>
<li className="flex items-center gap-4 text-body-sm text-on-surface-variant font-mono-data">
<span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
                                Real-time Process Optimization
                            </li>
</ul>
<button className="w-full py-4 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-on-primary transition-all flex justify-center items-center gap-3">
<span className="font-label-caps text-label-caps uppercase tracking-wider">View Details</span>
<span className="material-symbols-outlined text-sm">open_in_new</span>
</button>
</div>
</div>
</div>
</section>
{/* CTA Section */}
<section className="py-24 bg-indigo-deep relative overflow-hidden">
<div className="absolute inset-0 opacity-10 pointer-events-none transition-all duration-[1000ms] opacity-0 translate-y-12 ease-out">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
</div>
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 transition-all duration-[1000ms] opacity-0 translate-y-12 ease-out">
<div className="text-white">
<h2 className="font-display-lg text-headline-md md:text-headline-md mb-4 uppercase tracking-tight">Ready for Titan Precision?</h2>
<p className="text-on-primary-container font-body-md text-body-md max-w-xl">Consult with our elite engineering team for high-stakes industrial solutions and structural integrity audits.</p>
</div>
<div className="flex flex-wrap gap-6">
<button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-lg font-bold font-label-caps text-label-caps shadow-2xl hover:brightness-110 transition-transform hover:-translate-y-1">Connect with Experts</button>
<button className="border border-white/30 text-white px-10 py-4 rounded-lg font-bold font-label-caps text-label-caps hover:bg-white/10 transition-colors">Project Tender</button>
</div>
</div>
</section>

        </div>
    );
}
