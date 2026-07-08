import React from 'react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
    return (
        <div className="w-full">
            
{/* (A) PROJECT PORTFOLIO HERO SECTION */}
<section className="py-20 md:py-32 bg-surface px-margin-mobile md:px-margin-desktop">
<div className="max-w-7xl mx-auto">
<h1 className="text-5xl md:text-7xl font-bold text-white mb-16 tracking-tighter uppercase border-l-8 border-secondary pl-8">PROJECT PORTFOLIO v2</h1>
{/* Filter Tabs */}
<div className="flex flex-wrap gap-3 mb-16 border-b border-white/10 pb-8">
<button className="px-8 py-3 bg-secondary text-white font-bold text-label-caps transition-all">All Projects</button>
<button className="px-8 py-3 bg-surface-container-high text-on-surface-variant hover:text-white transition-all text-label-caps">Fire Safety</button>
<button className="px-8 py-3 bg-surface-container-high text-on-surface-variant hover:text-white transition-all text-label-caps">Heavy Infrastructure</button>
<button className="px-8 py-3 bg-surface-container-high text-on-surface-variant hover:text-white transition-all text-label-caps">Industrial Systems</button>
</div>
{/* Grid Listing */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Card 1 */}
<div className="group bg-surface-container-lowest rounded-none overflow-hidden border border-white/10 hover:border-secondary/50 transition-all duration-500 opacity-100 translate-y-0">
<div className="relative h-72 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd4eZuz_PyOxcYH9UsCsuBTtDdJYzkGWyqtW-z2l8CUJUtXVaEvtsStQ8Alz5ilkVA0N99pMbig67DtCMubB5tW-meTxz2O5FAAnkPywLxnhxqbiRrTr0aD2_G3GNzgX9q9ybsdd-OjOFjARIkNwWxTrEOKV7_gt-fKRxwqYxdu4GG5SXItTJ3uvKbBtTWXFUivVoOK-zzK2TWNB74CjBG45fsM4nJcVcPgQQh1vNecXrpOszqmEQvQQ"/>
<div className="absolute top-0 left-0 bg-secondary text-white text-label-caps px-4 py-2 font-bold uppercase">Infrastructure</div>
</div>
<div className="p-8">
<div className="flex flex-col gap-2 mb-6">
<div className="flex items-center text-secondary gap-1">
<span className="material-symbols-outlined text-[18px]">location_on</span>
<span className="text-mono-data uppercase">Singapore Maritime Cluster</span>
</div>
<h3 className="font-headline-md text-headline-md text-white uppercase group-hover:text-secondary transition-colors">Harbor Bridge Seismic Retrofit v2</h3>
</div>
<p className="text-on-surface-variant font-body-md mb-8 line-clamp-3">Full-scale structural reinforcement and fire suppression integration for high-traffic trade corridors using advanced composite materials.</p>
<div className="flex justify-between items-center border-t border-white/10 pt-6">
<span className="text-mono-data text-outline font-bold uppercase tracking-widest">2022 — 2024</span>
<a className="text-secondary font-bold text-label-caps flex items-center group-hover:translate-x-2 transition-transform" href="#detail">
                                Full Specs <span className="material-symbols-outlined ml-2">trending_flat</span>
</a>
</div>
</div>
</div>
{/* Card 2 */}
<div className="group bg-surface-container-lowest rounded-none overflow-hidden border border-white/10 hover:border-secondary/50 transition-all duration-500 opacity-100 translate-y-0">
<div className="relative h-72 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnZ4PYs8uJ3hVPBlCXpSAnPFhyPf7kGXi7FRAOP3BpzmMQe8qXUZpu-vnm3uaLrpR0sEr_93lbFPK5Oi-qDRAUncyQPkWIQddWDKQKNRPa9nL4tIJWcI9lTowRv49RhX9kG6MX4DA55BnzL2RM82NiE1PFDfOg3lcGLmYFbVzkyUZN5ULxkMLE6otGdr3ffjYQ1jsAOacSkp6_JBzf6wDYF-FWdpqky5qNDBRXPwlkWrGqYtK3qyBiQw"/>
<div className="absolute top-0 left-0 bg-secondary text-white text-label-caps px-4 py-2 font-bold uppercase">Industrial</div>
</div>
<div className="p-8">
<div className="flex flex-col gap-2 mb-6">
<div className="flex items-center text-secondary gap-1">
<span className="material-symbols-outlined text-[18px]">location_on</span>
<span className="text-mono-data uppercase">Munich High-Tech Park</span>
</div>
<h3 className="font-headline-md text-headline-md text-white uppercase group-hover:text-secondary transition-colors">Automated Fire Defense Hub v2</h3>
</div>
<p className="text-on-surface-variant font-body-md mb-8 line-clamp-3">Implementation of a 500,000 sq ft intelligent fire monitoring and automated suppression grid with zero-latency sensor arrays.</p>
<div className="flex justify-between items-center border-t border-white/10 pt-6">
<span className="text-mono-data text-outline font-bold uppercase tracking-widest">Active System</span>
<a className="text-secondary font-bold text-label-caps flex items-center group-hover:translate-x-2 transition-transform" href="#detail">
                                Full Specs <span className="material-symbols-outlined ml-2">trending_flat</span>
</a>
</div>
</div>
</div>
{/* Card 3 */}
<div className="group bg-surface-container-lowest rounded-none overflow-hidden border border-white/10 hover:border-secondary/50 transition-all duration-500 opacity-100 translate-y-0">
<div className="relative h-72 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoqBG6C2XyRN28u8CP7Unn1B0GABuDfWj7t9SBpo6ZRqHsgNfyIOTyb2e2HP36_Hx_B6nCw0V9C8aE0hW8Sh4ewtNGxCRX48FxQ9l9_nzq1lQH4_r_r5yo4TshEbnhGaob7jQFgw9Atyukf1KBqwO3hejF9RPbB5MnYrrYFcC-HxT5boJZT2L1ztoB9oELecwsjj6fHRz9soGcB2m6UW_X6wu9w0g6doT3m7XS7IV0_7-6mgj2rMs66A"/>
<div className="absolute top-0 left-0 bg-secondary text-white text-label-caps px-4 py-2 font-bold uppercase">Energy Safety</div>
</div>
<div className="p-8">
<div className="flex flex-col gap-2 mb-6">
<div className="flex items-center text-secondary gap-1">
<span className="material-symbols-outlined text-[18px]">location_on</span>
<span className="text-mono-data uppercase">North Sea Cluster</span>
</div>
<h3 className="font-headline-md text-headline-md text-white uppercase group-hover:text-secondary transition-colors">Offshore Thermal Integrity v2</h3>
</div>
<p className="text-on-surface-variant font-body-md mb-8 line-clamp-3">Specialized engineering of foundation cooling and fireproof electrical containment for deep-water turbine clusters.</p>
<div className="flex justify-between items-center border-t border-white/10 pt-6">
<span className="text-mono-data text-outline font-bold uppercase tracking-widest">2021 — 2024</span>
<a className="text-secondary font-bold text-label-caps flex items-center group-hover:translate-x-2 transition-transform" href="#detail">
                                Full Specs <span className="material-symbols-outlined ml-2">trending_flat</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
{/* (B) CASE STUDY DETAIL SECTION */}
<section className="relative bg-background" id="detail">
{/* Hero Banner */}
<div className="h-[650px] w-full relative">
<div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqxw8R5zcWj6stHhCB5a9GS0nhwCrOdnK-3wNnjMvEC8vFPPEuxcCiLZ1SUqceW1C7GoIB7q587h3NaUarTGuATxEBJDoEuEavrc3A0FaWveKQzVzsY92ss4MCsoz4CNnhWAjn-wEeMlwuIpE8wxDSOE4EQir42EETMCx1PUwyP9SqwinNM6TwS0WGoF5I4-Hkesu11DKLQMhXoam-VJaNrB7oIUZtDwY3z1uIUMjjwQiaMw0FJOTIww')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-start max-w-7xl mx-auto px-margin-desktop">
<div className="max-w-3xl">
<span className="text-secondary font-bold tracking-[0.2em] text-label-caps mb-6 block border-l-4 border-secondary pl-4">FIRE INTEGRITY SYSTEMS v2</span>
<h2 className="text-white font-display-lg text-5xl md:text-8xl mb-8 uppercase leading-[0.95]">INDUSTRIAL FIRE GRID <br/><span className="text-secondary">TITAN PRECISION</span></h2>
<p className="text-on-surface-variant text-xl md:text-2xl font-light leading-relaxed">Advanced thermal isolation and automated suppression architecture for high-risk industrial infrastructure.</p>
</div>
</div>
</div>
{/* Floating Meta Specs Row */}
<div className="max-w-7xl mx-auto px-margin-desktop -mt-20 relative z-10">
<div className="glass-card grid grid-cols-2 md:grid-cols-4 border-t-2 border-secondary">
<div className="flex flex-col gap-2 p-10 border-r border-white/10">
<span className="text-secondary font-label-caps uppercase tracking-widest">Asset Owner</span>
<span className="text-white font-bold text-lg uppercase">National Grid Corp.</span>
</div>
<div className="flex flex-col gap-2 p-10 border-r border-white/10">
<span className="text-secondary font-label-caps uppercase tracking-widest">Deployment</span>
<span className="text-white font-bold text-lg uppercase">OCT 2024</span>
</div>
<div className="flex flex-col gap-2 p-10 border-r border-white/10">
<span className="text-secondary font-label-caps uppercase tracking-widest">Safety Tier</span>
<span className="text-white font-bold text-lg uppercase">Heavy Industrial</span>
</div>
<div className="flex flex-col gap-2 p-10">
<span className="text-secondary font-label-caps uppercase tracking-widest">System Status</span>
<div className="flex items-center gap-3 text-secondary font-bold text-lg uppercase">
<span className="w-3 h-3 bg-secondary shadow-[0_0_10px_#ec6a06]"></span>
                        Full Operational v2
                    </div>
</div>
</div>
</div>
{/* Content Narrative & Gallery */}
<div className="max-w-7xl mx-auto px-margin-desktop py-32">
<div className="flex flex-col lg:flex-row gap-24 items-start">
{/* Narrative Blocks */}
<div className="lg:w-2/3 space-y-24">
<div className="space-y-8">
<div className="flex items-center gap-4 text-secondary">
<span className="text-mono-data font-bold">01 —</span>
<h3 className="text-white font-headline-md uppercase tracking-tight">The Structural Challenge</h3>
</div>
<p className="text-on-surface-variant font-body-lg leading-loose text-lg">
                            High-voltage urban hubs face significant thermal failure risks. Traditional copper-based grids suffer up to 15% transmission loss, generating excessive heat that compromises concrete integrity. Our task was a complete thermal overhaul of the substation's passive and active fire suppression systems to withstand peak-load summer cycles.
                        </p>
</div>
<div className="space-y-8">
<div className="flex items-center gap-4 text-secondary">
<span className="text-mono-data font-bold">02 —</span>
<h3 className="text-white font-headline-md uppercase tracking-tight">Precision Engineering Solution</h3>
</div>
<p className="text-on-surface-variant font-body-lg leading-loose text-lg">
                            We implemented the Titan Precision framework v2—a modular, liquid-cooled substation structure utilizing high-efficiency superconductors. This grid features an integrated AI sensory layer that isolates thermal anomalies within 12ms, preventing cascading failure across the metropolitan hub.
                        </p>
</div>
<div className="p-12 bg-surface-container border border-white/10 flex flex-col md:flex-row gap-12">
<div className="flex-1">
<span className="text-secondary text-5xl font-bold block mb-2">98.4%</span>
<span className="text-on-surface-variant font-label-caps uppercase">System Efficiency v2</span>
</div>
<div className="flex-1">
<span className="text-secondary text-5xl font-bold block mb-2">220kT</span>
<span className="text-on-surface-variant font-label-caps uppercase">Carbon Mitigation</span>
</div>
<div className="flex-1">
<span className="text-secondary text-5xl font-bold block mb-2">ZERO</span>
<span className="text-on-surface-variant font-label-caps uppercase">Thermal Incidents</span>
</div>
</div>
</div>
{/* Side Stats & CTA */}
<div className="lg:w-1/3 sticky top-32">
<div className="bg-surface-container-high p-10 border border-white/10">
<h4 className="font-display-lg text-[20px] text-white uppercase mb-10 pb-4 border-b border-secondary/30">Technical Parameters v2</h4>
<ul className="space-y-6">
<li className="flex justify-between items-center pb-4 border-b border-white/5">
<span className="text-on-surface-variant text-label-caps">Voltage Threshold</span>
<span className="text-mono-data font-bold text-secondary">400kV / 220kV</span>
</li>
<li className="flex justify-between items-center pb-4 border-b border-white/5">
<span className="text-on-surface-variant text-label-caps">Suppression Type</span>
<span className="text-mono-data font-bold text-secondary">Closed-Loop Liquid</span>
</li>
<li className="flex justify-between items-center pb-4 border-b border-white/5">
<span className="text-on-surface-variant text-label-caps">Core Alloy</span>
<span className="text-mono-data font-bold text-secondary">HTS Wire, Ceramic</span>
</li>
<li className="flex justify-between items-center">
<span className="text-on-surface-variant text-label-caps">Compliance</span>
<span className="text-mono-data font-bold text-secondary">ISO 45001 / NFPA</span>
</li>
</ul>
<button className="w-full mt-12 bg-secondary text-white font-bold py-5 hover:bg-secondary/90 transition-all uppercase tracking-widest text-label-caps flex justify-center items-center gap-3">
<span className="material-symbols-outlined">analytics</span>
                            Download Audit Report v2
                        </button>
</div>
</div>
</div>
{/* Gallery Widget */}
<div className="mt-40">
<div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
<div>
<h3 className="font-display-lg text-3xl text-white uppercase">Operational Documentation v2</h3>
<p className="text-on-surface-variant mt-2">Visual logs from structural survey to full system deployment.</p>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 flex items-center justify-center border border-white/10 text-on-surface-variant hover:border-secondary hover:text-white transition-all"><span className="material-symbols-outlined">west</span></button>
<button className="w-12 h-12 flex items-center justify-center border border-white/10 text-on-surface-variant hover:border-secondary hover:text-white transition-all"><span className="material-symbols-outlined">east</span></button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square bg-surface-container overflow-hidden border border-white/10 group">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMcYQGvieoiUI-KdEYxuy5v3H0TGTRZC6zN00aGg2o9tv5v9JPxy9t_NMv7dl177l0pJ96A8TZpt87YN6wRYjt4LH_ta4kgtI97qckAeIJlAFXH90L4w-QQQ20mZP2E60DvlHYmP7jOsGotCrJp8KK_bflgTwAR0Ylw3pmP_fax_KAABh9wuGmJao4EA0bybTHOc26I23LWH1I7hQ_tNDeS4FUW-8FkMZWu3168oJm132ZiVyCP2bbYw"/>
</div>
<div className="aspect-square bg-surface-container overflow-hidden border border-white/10 group">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEUk9l0FZ6n3ZXBKXHppFTzMDBK60ax4YKbUrf9pGlMRFic0f-VcpYAZkNY0Dvo-pGAM7CZerdBIJqe2tI-l4fU85cNuK-N_HefRGGH6-Nz64gGmHzKFPhk-VPCAk-y8BHBRsDcvtmR2oY2kP2QoAbNICw1rguJ0vod4yaDxqNtxXCLWuBwo3FL4-xMuZMzNHNlo73KOg7hG5XWObeRe_CJHdAV0R62BFjTqiYWQPjMhi0_4cWsIeZyg"/>
</div>
<div className="aspect-square bg-surface-container overflow-hidden border border-white/10 group">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaALOvL-6oOIEmyoMuYA1cb0HyE1sJfAWTo1JYB74w57Ml6DoCSxs2b3iN3ZWprQvwmz2IrkS-DbI8WH1nacNx_g_QswzvjKUaIau4bG7f6QujS_aE3kT4Hstq8wGN-q2xu5ei1eyW7cm-VNPqUTPndFFp4bs9JbdDoY9Bsb9vHhSXkW_J0BwHH9eBOFb39wH0hiFjCjR12pBdLjeZhOdSUBo6_i6BG9yDjMuUPVOLGJlj2-Nwjb7TzQ"/>
</div>
<div className="aspect-square bg-surface-container overflow-hidden border border-white/10 group">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVmIKwVCrOMLkEv-eZss9UhC_n07Gu2kujsr46NCF6ksA1XbsW7X1mWWVha7mEib9rbGWoF4fh3VaHFYNSlVT5zqjfXFHejqZ0vjdLJ75YX6QoPu2YFwPudqnYf4jQkcNk_L2KNaBPALxtKYU-iuj6RAWo5l_x_YjOfx1aVg8zBB7bMia17QHYbc-ZAAlzC7Zf8i6upPVAwWaYTFVHFLGWtNDXWCwvN2LpWjDRwixbISb6cA03Dg_H2w"/>
</div>
</div>
</div>
</div>
</section>

        </div>
    );
}
