import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState('All');

    const projects = [
        {
            ref: "INF-402",
            category: "Infrastructure",
            title: "Harbor Bridge Seismic Retrofit v2",
            desc: "High-contrast structural reinforcement and fire suppression integration for high-traffic maritime trade corridors.",
            years: "2022 — 2024",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAd4eZuz_PyOxcYH9UsCsuBTtDdJYzkGWyqtW-z2l8CUJUtXVaEvtsStQ8Alz5ilkVA0N99pMbig67DtCMubB5tW-meTxz2O5FAAnkPywLxnhxqbiRrTr0aD2_G3GNzgX9q9ybsdd-OjOFjARIkNwWxTrEOKV7_gt-fKRxwqYxdu4GG5SXItTJ3uvKbBtTWXFUivVoOK-zzK2TWNB74CjBG45fsM4nJcVcPgQQh1vNecXrpOszqmEQvQQ"
        },
        {
            ref: "IND-901",
            category: "Industrial",
            title: "Automated Fire Defense Hub v2",
            desc: "Implementation of intelligent fire monitoring and automated suppression grid with zero-latency sensor arrays.",
            years: "ACTIVE OPS",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnZ4PYs8uJ3hVPBlCXpSAnPFhyPf7kGXi7FRAOP3BpzmMQe8qXUZpu-vnm3uaLrpR0sEr_93lbFPK5Oi-qDRAUncyQPkWIQddWDKQKNRPa9nL4tIJWcI9lTowRv49RhX9kG6MX4DA55BnzL2RM82NiE1PFDfOg3lcGLmYFbVzkyUZN5ULxkMLE6otGdr3ffjYQ1jsAOacSkp6_JBzf6wDYF-FWdpqky5qNDBRXPwlkWrGqYtK3qyBiQw"
        },
        {
            ref: "NRG-115",
            category: "Energy Safety",
            title: "Offshore Thermal Integrity v2",
            desc: "Engineering of foundation cooling and fireproof electrical containment for deep-water wind turbine clusters.",
            years: "2021 — 2024",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoqBG6C2XyRN28u8CP7Unn1B0GABuDfWj7t9SBpo6ZRqHsgNfyIOTyb2e2HP36_Hx_B6nCw0V9C8aE0hW8Sh4ewtNGxCRX48FxQ9l9_nzq1lQH4_r_r5yo4TshEbnhGaob7jQFgw9Atyukf1KBqwO3hejF9RPbB5MnYrrYFcC-HxT5boJZT2L1ztoB9oELecwsjj6fHRz9soGcB2m6UW_X6wu9w0g6doT3m7XS7IV0_7-6mgj2rMs66A"
        }
    ];

    const filteredProjects = activeTab === 'All' 
        ? projects 
        : projects.filter(p => p.category === activeTab);

    return (
        <div className="w-full">
            {/* HERO SECTION */}
            <section className="py-20 bg-surface-container-low px-margin-mobile md:px-margin-desktop"
                     style={{
                         backgroundImage: "radial-gradient(circle, #c3c7ca 1px, transparent 1px)",
                         backgroundSize: "32px 32px"
                     }}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div>
                            <span className="text-tertiary text-xs font-mono mb-4 block uppercase tracking-widest">— Project Archive</span>
                            <h1 className="text-4xl md:text-5xl font-bold text-primary uppercase tracking-tight">PROJECT PORTFOLIO v2</h1>
                        </div>
                        {/* Filter Tabs */}
                        <div className="flex flex-wrap gap-1 bg-surface-container p-1 border border-outline-variant">
                            {['All', 'Infrastructure', 'Industrial', 'Energy Safety'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-2 text-xs font-bold uppercase transition-all font-mono ${
                                        activeTab === tab 
                                            ? 'bg-white text-primary shadow-sm' 
                                            : 'text-on-surface-variant hover:bg-white/50'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid Listing */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((p, i) => (
                            <div key={i} className="group bg-white border border-outline-variant hover:shadow-xl transition-all duration-300">
                                <div className="relative h-64 overflow-hidden bg-black">
                                    <img alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale" src={p.img} />
                                    <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-mono px-4 py-1 uppercase">{p.ref}</div>
                                </div>
                                <div className="p-8">
                                    <div className="flex flex-col gap-2 mb-6">
                                        <span className="text-tertiary text-xs font-bold uppercase tracking-wider">{p.category}</span>
                                        <h3 className="text-lg font-bold text-primary uppercase group-hover:text-tertiary transition-colors leading-tight">{p.title}</h3>
                                    </div>
                                    <p className="text-on-surface-variant text-xs mb-8 line-clamp-2 leading-relaxed">{p.desc}</p>
                                    <div className="flex justify-between items-center border-t border-outline-variant/30 pt-6">
                                        <span className="text-[10px] text-outline font-bold uppercase tracking-widest font-mono">{p.years}</span>
                                        <a className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all font-mono" href="#detail">
                                            View Specs <span className="material-symbols-outlined text-tertiary text-sm">arrow_forward</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CASE STUDY DETAIL SECTION */}
            <section className="bg-white border-t border-outline-variant" id="detail">
                <div className="grid lg:grid-cols-2">
                    {/* Left: High Contrast Technical Image */}
                    <div className="relative h-[400px] lg:h-auto bg-black overflow-hidden">
                        <img alt="Industrial skyscraper" className="w-full h-full object-cover opacity-60 grayscale scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqxw8R5zcWj6stHhCB5a9GS0nhwCrOdnK-3wNnjMvEC8vFPPEuxcCiLZ1SUqceW1C7GoIB7q587h3NaUarTGuATxEBJDoEuEavrc3A0FaWveKQzVzsY92ss4MCsoz4CNnhWAjn-wEeMlwuIpE8wxDSOE4EQir42EETMCx1PUwyP9SqwinNM6TwS0WGoF5I4-Hkesu11DKLQMhXoam-VJaNrB7oIUZtDwY3z1uIUMjjwQiaMw0FJOTIww" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex flex-col justify-center p-margin-desktop">
                            <span className="text-white text-xs font-mono border-l-2 border-tertiary pl-4 mb-4 uppercase tracking-[0.2em]">Deployment: OCT 2024</span>
                            <h2 className="text-white font-bold text-4xl md:text-5xl mb-6 uppercase leading-tight tracking-tight">INDUSTRIAL FIRE GRID<br /><span className="text-tertiary">TITAN PRECISION</span></h2>
                        </div>
                    </div>
                    {/* Right: Technical Data Cards */}
                    <div className="p-margin-desktop bg-surface-container-lowest">
                        <div className="grid grid-cols-2 gap-px bg-outline-variant border border-outline-variant mb-12">
                            <div className="bg-white p-6">
                                <span className="text-outline text-[10px] font-mono uppercase block mb-2">Asset Owner</span>
                                <span className="text-primary font-bold text-base uppercase">National Grid Corp.</span>
                            </div>
                            <div className="bg-white p-6">
                                <span className="text-outline text-[10px] font-mono uppercase block mb-2">Safety Tier</span>
                                <span className="text-primary font-bold text-base uppercase">Industrial Class-A</span>
                            </div>
                            <div className="bg-white p-6">
                                <span className="text-outline text-[10px] font-mono uppercase block mb-2">Core Protocol</span>
                                <span className="text-primary font-bold text-base uppercase">Titan v2 / Sentinel</span>
                            </div>
                            <div className="bg-white p-6">
                                <span className="text-outline text-[10px] font-mono uppercase block mb-2">Status</span>
                                <div className="flex items-center gap-2 text-tertiary font-bold text-base uppercase">
                                    <span className="w-2 h-2 bg-tertiary animate-pulse"></span>
                                    Operational
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8 text-sm leading-relaxed">
                            <div className="border-l-4 border-primary pl-6">
                                <h4 className="text-primary font-bold uppercase mb-2">The Structural Challenge</h4>
                                <p className="text-on-surface-variant">High-voltage urban hubs face significant thermal risks. Traditional grids generate excessive heat compromising concrete integrity. Our task was a thermal overhaul of passive and active systems.</p>
                            </div>
                            <div className="border-l-4 border-tertiary pl-6">
                                <h4 className="text-primary font-bold uppercase mb-2">Precision Engineering Solution</h4>
                                <p className="text-on-surface-variant">Implementation of Titan Precision framework v2—modular, liquid-cooled structure with high-efficiency superconductors and AI sensory layer for isolation within 12ms.</p>
                            </div>
                        </div>
                        {/* Stats Bar */}
                        <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-outline-variant/30">
                            <div>
                                <span className="text-tertiary text-3xl font-bold block">98.4%</span>
                                <span className="text-outline text-[10px] font-bold uppercase tracking-tighter font-mono">Efficiency v2</span>
                            </div>
                            <div>
                                <span className="text-primary text-3xl font-bold block">220kT</span>
                                <span className="text-outline text-[10px] font-bold uppercase tracking-tighter font-mono">Carbon Mit.</span>
                            </div>
                            <div>
                                <span className="text-primary text-3xl font-bold block">ZERO</span>
                                <span className="text-outline text-[10px] font-bold uppercase tracking-tighter font-mono">Incidents</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Documentation Gallery */}
                <div className="max-w-7xl mx-auto px-margin-desktop py-24">
                    <div className="flex justify-between items-end mb-12 border-b border-outline-variant pb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-primary uppercase">Operational Logs v2</h3>
                            <p className="text-on-surface-variant mt-1 text-xs">Visual survey from initial foundation to systems deployment.</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:bg-primary hover:text-white transition-all"><span className="material-symbols-outlined">chevron_left</span></button>
                            <button class="w-10 h-10 flex items-center justify-center border border-outline-variant hover:bg-primary hover:text-white transition-all"><span class="material-symbols-outlined">chevron_right</span></button>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuCMcYQGvieoiUI-KdEYxuy5v3H0TGTRZC6zN00aGg2o9tv5v9JPxy9t_NMv7dl177l0pJ96A8TZpt87YN6wRYjt4LH_ta4kgtI97qckAeIJlAFXH90L4w-QQQ20mZP2E60DvlHYmP7jOsGotCrJp8KK_bflgTwAR0Ylw3pmP_fax_KAABh9wuGmJao4EA0bybTHOc26I23LWH1I7hQ_tNDeS4FUW-8FkMZWu3168oJm132ZiVyCP2bbYw",
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuBEUk9l0FZ6n3ZXBKXHppFTzMDBK60ax4YKbUrf9pGlMRFic0f-VcpYAZkNY0Dvo-pGAM7CZerdBIJqe2tI-l4fU85cNuK-N_HefRGGH6-Nz64gGmHzKFPhk-VPCAk-y8BHBRsDcvtmR2oY2kP2QoAbNICw1rguJ0vod4yaDxqNtxXCLWuBwo3FL4-xMuZMzNHNlo73KOg7hG5XWObeRe_CJHdAV0R62BFjTqiYWQPjMhi0_4cWsIeZyg",
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuCaALOvL-6oOIEmyoMuYA1cb0HyE1sJfAWTo1JYB74w57Ml6DoCSxs2b3iN3ZWprQvwmz2IrkS-DbI8WH1nacNx_g_QswzvjKUaIau4bG7f6QujS_aE3kT4Hstq8wGN-q2xu5ei1eyW7cm-VNPqUTPndFFp4bs9JbdDoY9Bsb9vHhSXkW_J0BwHH9eBOFb39wH0hiFjCjR12pBdLjeZhOdSUBo6_i6BG9yDjMuUPVOLGJlj2-Nwjb7TzQ",
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuBVmIKwVCrOMLkEv-eZss9UhC_n07Gu2kujsr46NCF6ksA1XbsW7X1mWWVha7mEib9rbGWoF4fh3VaHFYNSlVT5zqjfXFHejqZ0vjdLJ75YX6QoPu2YFwPudqnYf4jQkcNk_L2KNaBPALxtKYU-iuj6RAWo5l_x_YjOfx1aVg8zBB7bMia17QHYbc-ZAAlzC7Zf8i6upPVAwWaYTFVHFLGWtNDXWCwvN2LpWjDRwixbISb6cA03Dg_H2w"
                        ].map((img, idx) => (
                            <div key={idx} className="aspect-square bg-surface-container overflow-hidden border border-outline-variant/30 group cursor-zoom-in">
                                <img alt="Technical documentation" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src={img} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
