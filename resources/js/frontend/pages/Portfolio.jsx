import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Comprehensive, verified engineering projects repository
const DEFAULT_PROJECTS = [
    {
        id: 'inf-402',
        ref: "INF-402",
        category: "Infrastructure",
        title: "Harbor Bridge Seismic Retrofit v2",
        desc: "High-contrast structural reinforcement and automated fire suppression integration for high-traffic maritime trade corridors.",
        challenge: "Continuous tidal salinity erosion coupled with intense seismic micro-fractures in maritime pylons threatening primary container traffic.",
        solution: "Engineered ultra-high-tensile composite sleeve jacketing with internal liquid sensor channels and automated deluge manifolds.",
        years: "2022 — 2024",
        owner: "Port & Maritime Authority",
        tier: "Class-A Critical Corridor",
        protocol: "AR Sentinel Seismic / NFPA 502",
        status: "Operational",
        stat1_val: "99.2%",
        stat1_lbl: "Stress Dampening",
        stat2_val: "1.4M",
        stat2_lbl: "Daily Protected",
        stat3_val: "ZERO",
        stat3_lbl: "Service Outages",
        tags: ["Seismic Jacketing", "NFPA 502", "Composite Alloys"],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAd4eZuz_PyOxcYH9UsCsuBTtDdJYzkGWyqtW-z2l8CUJUtXVaEvtsStQ8Alz5ilkVA0N99pMbig67DtCMubB5tW-meTxz2O5FAAnkPywLxnhxqbiRrTr0aD2_G3GNzgX9q9ybsdd-OjOFjARIkNwWxTrEOKV7_gt-fKRxwqYxdu4GG5SXItTJ3uvKbBtTWXFUivVoOK-zzK2TWNB74CjBG45fsM4nJcVcPgQQh1vNecXrpOszqmEQvQQ"
    },
    {
        id: 'ind-901',
        ref: "IND-901",
        category: "Industrial",
        title: "Automated Fire Defense Hub v2",
        desc: "Implementation of intelligent fire monitoring and automated suppression grid with zero-latency sensor arrays across 60,000 sq ft.",
        challenge: "High-voltage urban substation hubs generate extreme thermal loads that compromise structural concrete integrity and increase spontaneous flashover risk.",
        solution: "Implementation of AR Engineering framework v2—modular, liquid-cooled enclosures with high-efficiency superconductors and an AI sensory layer for isolation within 12ms.",
        years: "ACTIVE OPS",
        owner: "National Grid Corp.",
        tier: "Industrial Class-A Hazard",
        protocol: "AR Engineering / Sentinel Grid",
        status: "Active Ops",
        stat1_val: "98.4%",
        stat1_lbl: "Thermal Efficiency",
        stat2_val: "12ms",
        stat2_lbl: "Reaction Speed",
        stat3_val: "ZERO",
        stat3_lbl: "Safety Incidents",
        tags: ["Thermal Modeling", "Liquid Cooling", "NFPA 850"],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnZ4PYs8uJ3hVPBlCXpSAnPFhyPf7kGXi7FRAOP3BpzmMQe8qXUZpu-vnm3uaLrpR0sEr_93lbFPK5Oi-qDRAUncyQPkWIQddWDKQKNRPa9nL4tIJWcI9lTowRv49RhX9kG6MX4DA55BnzL2RM82NiE1PFDfOg3lcGLmYFbVzkyUZN5ULxkMLE6otGdr3ffjYQ1jsAOacSkp6_JBzf6wDYF-FWdpqky5qNDBRXPwlkWrGqYtK3qyBiQw"
    },
    {
        id: 'nrg-115',
        ref: "NRG-115",
        category: "Energy Safety",
        title: "Offshore Thermal Integrity v2",
        desc: "Engineering of foundation cooling and fireproof electrical containment for deep-water wind turbine clusters.",
        challenge: "Harsh salt spray, extreme vibration cycles, and thermal spikes inside nacelle housings causing intermittent turbine shutdowns.",
        solution: "Deployed sealed nitrogen inerting systems, passive heat exchangers, and continuous fiber-optic temperature telemetry along the subsea loop.",
        years: "2021 — 2024",
        owner: "Nordik Marine Energy",
        tier: "Deep-Water Marine Tier-1",
        protocol: "AR Cryo-Thermal Dynamic Shunt",
        status: "Operational",
        stat1_val: "220kT",
        stat1_lbl: "Carbon Mitigated",
        stat2_val: "450MW",
        stat2_lbl: "Continuous Yield",
        stat3_val: "100%",
        stat3_lbl: "Thermal Redundancy",
        tags: ["Offshore Wind", "Nitrogen Inerting", "DNV-GL Spec"],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoqBG6C2XyRN28u8CP7Unn1B0GABuDfWj7t9SBpo6ZRqHsgNfyIOTyb2e2HP36_Hx_B6nCw0V9C8aE0hW8Sh4ewtNGxCRX48FxQ9l9_nzq1lQH4_r_r5yo4TshEbnhGaob7jQFgw9Atyukf1KBqwO3hejF9RPbB5MnYrrYFcC-HxT5boJZT2L1ztoB9oELecwsjj6fHRz9soGcB2m6UW_X6wu9w0g6doT3m7XS7IV0_7-6mgj2rMs66A"
    },
    {
        id: 'com-330',
        ref: "COM-330",
        category: "Commercial & MEP",
        title: "Metropolis High-Rise Smoke & Air Loop",
        desc: "Integrated pressurization, HVAC filtration, and zoned stairwell smoke ejection architecture for a 52-story commercial tower.",
        challenge: "Extreme stack-effect pressure variances throughout vertical elevator shafts during simulated fire drills in high-density corporate core.",
        solution: "Designed variable-pitch high-capacity induction extractors coupled to computerized acoustic air dampeners to maintain positive exit pressure.",
        years: "2023 — 2025",
        owner: "Metropolis Tower Real Estate",
        tier: "High-Density Commercial",
        protocol: "AR Pneumatic Scram / NFPA 92",
        status: "Operational",
        stat1_val: "52",
        stat1_lbl: "Levels Protected",
        stat2_val: "99.98%",
        stat2_lbl: "Airflow Purity",
        stat3_val: "< 45s",
        stat3_lbl: "Smoke Evacuation",
        tags: ["Stairwell Pressurization", "NFPA 92", "HVAC Loop"],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqxw8R5zcWj6stHhCB5a9GS0nhwCrOdnK-3wNnjMvEC8vFPPEuxcCiLZ1SUqceW1C7GoIB7q587h3NaUarTGuATxEBJDoEuEavrc3A0FaWveKQzVzsY92ss4MCsoz4CNnhWAjn-wEeMlwuIpE8wxDSOE4EQir42EETMCx1PUwyP9SqwinNM6TwS0WGoF5I4-Hkesu11DKLQMhXoam-VJaNrB7oIUZtDwY3z1uIUMjjwQiaMw0FJOTIww"
    },
    {
        id: 'inf-608',
        ref: "INF-608",
        category: "Infrastructure",
        title: "Trans-Regional Pipeline Vaults",
        desc: "Automated rupture containment, high-speed acoustic leak verification, and secondary isolation chambers for hydrocarbon transit.",
        challenge: "Remote desert pipeline junctions with extreme day-to-night temperature variations causing cyclical thermal fatigue in valve junctions.",
        solution: "Constructed subterranean reinforced blast containment cells with ultrasonic flaw detection nodes communicating with central SCADA.",
        years: "2022 — 2023",
        owner: "Continental Logistics",
        tier: "Hazard Level 4 Critical",
        protocol: "AR Acoustic Telemetry / ISO 13849",
        status: "Operational",
        stat1_val: "850km",
        stat1_lbl: "Pipeline Monitored",
        stat2_val: "0.05s",
        stat2_lbl: "Valve Isolation",
        stat3_val: "ZERO",
        stat3_lbl: "Containment Leaks",
        tags: ["Blast Vaults", "Ultrasonic Telemetry", "SCADA Integration"],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdcB4CILoOe8j0qWgbw3kqCTdj-wjIincqH2166KaA-bvCFGYdplL_NAR6TnR8qLFd69VNi--T96Gi1EV5SdsZBnM-wcRX1lcqjk5yGpVywHLkRarVNlzreC53l5iNA136GVWEKhRbxeV96bItAO52EhxL-HFJaZcq19Xc1GufhlKG_SuKVsGSAVJvHUMx0qmSnPY1S4NYp_adWFJJTcUQQUGu74Qs5jpWS2WCntZ8NT8DxsVcBMVJ"
    },
    {
        id: 'ind-520',
        ref: "IND-520",
        category: "Industrial",
        title: "Cleanroom Fire Suppression Grid",
        desc: "Residue-free clean agent fire extinguishing system engineered for sub-micron semiconductor fabrication cleanrooms.",
        challenge: "Standard water sprinkler suppression would cause catastrophic multi-million dollar destruction of sensitive wafer printing equipment.",
        solution: "Installed 3M Novec 1230 gas distribution nozzles with dual-spectrum optical flame sensors and sub-second room sealing dampers.",
        years: "ACTIVE OPS",
        owner: "Apex Microelectronics Inc.",
        tier: "Cleanroom ISO Class 4",
        protocol: "AR CleanGuard Zero-Residue",
        status: "Active Ops",
        stat1_val: "100%",
        stat1_lbl: "Asset Protection",
        stat2_val: "< 8s",
        stat2_lbl: "Discharge Time",
        stat3_val: "ZERO",
        stat3_lbl: "Water Residue",
        tags: ["Novec 1230", "Cleanroom ISO 4", "Laser Detection"],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2JJ-RWncff50novZhwGyNf43ZgC0IWmq-ECQ6X0RC5st1MtcscmDobC5EmKxzr8CmH--P5HSxAVhASO-XF-xbtxK_4C0kk9OCvZb5GgETdhJzWpYjSAFnz_B6uvegjWXh49oOA79Eb5rr6sOQBBX42xWA_MC2fuRhlYMtjftkLnzm-tyfl1lO-KYfauDNdXydJpxiOkgHhTNgPDpxkEA42ESL8YM1IcjlK1sF3GH5C97fZTP-TDX6"
    }
];

const GALLERY_LOGS = [
    {
        title: "Subterranean Foundation Structural Audit",
        category: "Deep Seismic Scan",
        ref: "LOG-01",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMcYQGvieoiUI-KdEYxuy5v3H0TGTRZC6zN00aGg2o9tv5v9JPxy9t_NMv7dl177l0pJ96A8TZpt87YN6wRYjt4LH_ta4kgtI97qckAeIJlAFXH90L4w-QQQ20mZP2E60DvlHYmP7jOsGotCrJp8KK_bflgTwAR0Ylw3pmP_fax_KAABh9wuGmJao4EA0bybTHOc26I23LWH1I7hQ_tNDeS4FUW-8FkMZWu3168oJm132ZiVyCP2bbYw"
    },
    {
        title: "Thermal Manifold Fluidic Calibration",
        category: "Cryo-Dynamics",
        ref: "LOG-02",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEUk9l0FZ6n3ZXBKXHppFTzMDBK60ax4YKbUrf9pGlMRFic0f-VcpYAZkNY0Dvo-pGAM7CZerdBIJqe2tI-l4fU85cNuK-N_HefRGGH6-Nz64gGmHzKFPhk-VPCAk-y8BHBRsDcvtmR2oY2kP2QoAbNICw1rguJ0vod4yaDxqNtxXCLWuBwo3FL4-xMuZMzNHNlo73KOg7hG5XWObeRe_CJHdAV0R62BFjTqiYWQPjMhi0_4cWsIeZyg"
    },
    {
        title: "High-Pressure Gas Distribution Loop",
        category: "Fluid Dynamics",
        ref: "LOG-03",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaALOvL-6oOIEmyoMuYA1cb0HyE1sJfAWTo1JYB74w57Ml6DoCSxs2b3iN3ZWprQvwmz2IrkS-DbI8WH1nacNx_g_QswzvjKUaIau4bG7f6QujS_aE3kT4Hstq8wGN-q2xu5ei1eyW7cm-VNPqUTPndFFp4bs9JbdDoY9Bsb9vHhSXkW_J0BwHH9eBOFb39wH0hiFjCjR12pBdLjeZhOdSUBo6_i6BG9yDjMuUPVOLGJlj2-Nwjb7TzQ"
    },
    {
        title: "Modular Deluge Valve Array Commissioning",
        category: "Pneumatic Control",
        ref: "LOG-04",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVmIKwVCrOMLkEv-eZss9UhC_n07Gu2kujsr46NCF6ksA1XbsW7X1mWWVha7mEib9rbGWoF4fh3VaHFYNSlVT5zqjfXFHejqZ0vjdLJ75YX6QoPu2YFwPudqnYf4jQkcNk_L2KNaBPALxtKYU-iuj6RAWo5l_x_YjOfx1aVg8zBB7bMia17QHYbc-ZAAlzC7Zf8i6upPVAwWaYTFVHFLGWtNDXWCwvN2LpWjDRwixbISb6cA03Dg_H2w"
    }
];

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState('All');
    const [projects, setProjects] = useState(DEFAULT_PROJECTS);
    const [selectedProject, setSelectedProject] = useState(DEFAULT_PROJECTS[1]); // Default to IND-901
    const [previewImage, setPreviewImage] = useState(null);

    useEffect(() => {
        // Attempt to fetch any dynamic projects from backend if configured
        axios.get('/api/home')
            .then(res => {
                if (res.data?.projects && res.data.projects.length > 0) {
                    const mapped = res.data.projects.map((p, idx) => ({
                        id: `api-prj-${p.id || idx}`,
                        ref: `PRJ-${String(p.id || idx + 1).padStart(3, '0')}`,
                        category: p.category || "Industrial",
                        title: p.title,
                        desc: p.description,
                        challenge: p.challenge || "Heavy industrial compliance and structural integration challenge.",
                        solution: p.solution || "Precision engineering protocol deployed by AR Engineering certified specialists.",
                        years: "VERIFIED",
                        owner: p.owner || "Industrial Client",
                        tier: "Class-A Certified",
                        protocol: "AR Protocol v2",
                        status: "Operational",
                        stat1_val: "99%",
                        stat1_lbl: "Compliance",
                        stat2_val: "100%",
                        stat2_lbl: "Operational",
                        stat3_val: "ZERO",
                        stat3_lbl: "Incidents",
                        tags: ["Engineering", "Compliance"],
                        img: p.image || DEFAULT_PROJECTS[0].img
                    }));
                    // Merge with defaults to ensure rich variety
                    setProjects([...DEFAULT_PROJECTS, ...mapped]);
                }
            })
            .catch(() => {
                // Keep default projects on failure
            });
    }, []);

    // Filter categories list
    const categories = ['All', 'Infrastructure', 'Industrial', 'Energy Safety', 'Commercial & MEP'];

    const filteredProjects = activeTab === 'All'
        ? projects
        : projects.filter(p => p.category.toLowerCase().includes(activeTab.toLowerCase()) || activeTab.toLowerCase().includes(p.category.toLowerCase()));

    const handleSelectProject = (project) => {
        setSelectedProject(project);
        const el = document.getElementById('detail');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full bg-background text-on-surface">
            {/* 1. BRAND CONSISTENT HERO SECTION */}
            <section className="relative h-[350px] md:h-[400px] flex items-center bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-35">
                    <div 
                        className="w-full h-full bg-center bg-cover scale-105 filter grayscale contrast-125" 
                        style={{ 
                            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAd4eZuz_PyOxcYH9UsCsuBTtDdJYzkGWyqtW-z2l8CUJUtXVaEvtsStQ8Alz5ilkVA0N99pMbig67DtCMubB5tW-meTxz2O5FAAnkPywLxnhxqbiRrTr0aD2_G3GNzgX9q9ybsdd-OjOFjARIkNwWxTrEOKV7_gt-fKRxwqYxdu4GG5SXItTJ3uvKbBtTWXFUivVoOK-zzK2TWNB74CjBG45fsM4nJcVcPgQQh1vNecXrpOszqmEQvQQ')" 
                        }}
                    ></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60"></div>

                <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
                    <div className="max-w-2xl text-white">
                        <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider mb-4 text-outline-variant font-mono flex items-center gap-2">
                            <span className="w-2 h-2 bg-tertiary"></span>
                            PROJECT ARCHIVE // VERIFIED DEPLOYMENTS
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight uppercase">
                            ENGINEERING PORTFOLIO
                        </h1>
                        <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed text-justify">
                            Rigorous structural reinforcements, automated fire safety grids, and lifecycle mechanical infrastructure deployed across high-consequence industrial facilities.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. FILTER TOOLBAR & INTRO BAR */}
            <section className="border-b border-outline-variant/30 bg-surface-container-low sticky top-0 z-20 shadow-none md:shadow-xs">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Category Filter Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
                        {categories.map((tab) => {
                            const count = tab === 'All' 
                                ? projects.length 
                                : projects.filter(p => p.category.toLowerCase().includes(tab.toLowerCase()) || tab.toLowerCase().includes(p.category.toLowerCase())).length;

                            const isActive = activeTab === tab;
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all font-mono whitespace-nowrap rounded flex items-center gap-2 cursor-pointer ${
                                        isActive
                                            ? 'bg-primary text-white shadow-none md:shadow-sm'
                                            : 'bg-white hover:bg-surface-container text-primary border border-outline-variant/30'
                                    }`}
                                >
                                    <span>{tab}</span>
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                                        isActive ? 'bg-tertiary text-white' : 'bg-surface-container text-secondary'
                                    }`}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Status Counter */}
                    <div className="flex items-center gap-3 text-xs font-mono text-secondary">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>SHOWING {filteredProjects.length} VERIFIED DEPLOYMENTS</span>
                    </div>
                </div>
            </section>

            {/* 3. PROJECT CATALOG GRID */}
            <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((p) => {
                        const isSelected = selectedProject?.id === p.id;
                        return (
                            <div 
                                key={p.id || p.ref} 
                                className={`bg-white rounded overflow-hidden flex flex-col group border transition-all duration-300 ${
                                    isSelected 
                                        ? 'border-tertiary shadow-none md:shadow-sm ring-1 ring-tertiary'
                                        : 'border-outline-variant/30 hover:border-primary shadow-none md:shadow-sm md:hover:shadow-md'
                                }`}
                            >
                                {/* Project Image Box */}
                                <div className="relative h-56 bg-surface-container-low overflow-hidden">
                                    <img 
                                        alt={p.title} 
                                        className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                                        src={p.img} 
                                    />
                                    {/* Tech Reference Badge */}
                                    <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-mono px-3 py-1 uppercase tracking-widest font-bold backdrop-blur-sm rounded">
                                        {p.ref}
                                    </div>
                                    {/* Status Badge */}
                                    <div className="absolute top-3 right-3 bg-white text-primary text-[10px] font-mono px-2.5 py-1 uppercase tracking-wider font-bold shadow-none md:shadow-sm rounded flex items-center gap-1.5 border border-outline-variant/30">
                                        <span className={`w-1.5 h-1.5 rounded-full ${p.status.toLowerCase().includes('active') ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
                                        {p.status}
                                    </div>
                                </div>

                                {/* Project Card Content */}
                                <div className="p-6 md:p-8 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between gap-2 mb-2">
                                        <span className="text-tertiary text-xs font-mono font-bold uppercase tracking-wider">
                                            {p.category}
                                        </span>
                                        <span className="text-[10px] text-secondary font-bold uppercase tracking-wider font-mono">
                                            {p.years}
                                        </span>
                                    </div>

                                    <h3 className="text-base font-bold text-primary mb-3 uppercase tracking-tight group-hover:text-tertiary transition-colors leading-snug">
                                        {p.title}
                                    </h3>

                                    <p className="text-xs text-secondary leading-relaxed mb-6 flex-grow text-justify line-clamp-3">
                                        {p.desc}
                                    </p>

                                    {/* Tags */}
                                    {p.tags && p.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                            {p.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="text-[10px] font-mono bg-surface-container text-secondary px-2 py-0.5 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Card Footer Actions */}
                                    <div className="flex justify-between items-center border-t border-outline-variant/30 pt-4 mt-auto">
                                        <div className="text-[11px] font-mono text-secondary uppercase">
                                            Owner: <span className="text-primary font-bold">{p.owner.split(' ')[0]}</span>
                                        </div>
                                        <button 
                                            onClick={() => handleSelectProject(p)}
                                            className="text-tertiary hover:text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all font-mono cursor-pointer"
                                        >
                                            View Specs <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 4. CASE STUDY & TECHNICAL BLUEPRINT DETAIL SECTION */}
            <section className="bg-white border-t border-outline-variant/30" id="detail">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
                    {/* Section Eyebrow */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-outline-variant/30 pb-6">
                        <div>
                            <span className="text-xs font-bold text-tertiary uppercase tracking-[0.2em] font-mono block mb-2">
                                FEATURED CASE STUDY // {selectedProject.ref}
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-tight">
                                TECHNICAL SPECIFICATION ANALYSIS
                            </h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-mono text-secondary">ACTIVE SELECTION:</span>
                            <span className="bg-primary text-white font-mono text-xs font-bold px-3 py-1 rounded">
                                {selectedProject.title}
                            </span>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                        {/* Left: High Contrast Technical Image & Overlay */}
                        <div className="lg:col-span-6 relative bg-primary rounded overflow-hidden flex flex-col justify-end min-h-[420px] shadow-none md:shadow-sm border border-outline-variant/30">
                            <img 
                                alt={selectedProject.title} 
                                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale contrast-125" 
                                src={selectedProject.img} 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>

                            <div className="relative z-10 p-8 md:p-10 space-y-4 text-white">
                                <span className="inline-block bg-tertiary text-white text-[11px] font-mono px-3 py-1 uppercase tracking-widest font-bold rounded">
                                    DEPLOYMENT TIMELINE: {selectedProject.years}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-tight">
                                    {selectedProject.title}
                                </h3>
                                <p className="text-xs md:text-sm text-white/90 leading-relaxed text-justify max-w-lg">
                                    {selectedProject.desc}
                                </p>
                                <div className="pt-2 flex flex-wrap gap-2">
                                    {selectedProject.tags && selectedProject.tags.map((tag, idx) => (
                                        <span key={idx} className="bg-white/10 text-white text-[10px] font-mono px-2.5 py-1 rounded backdrop-blur-sm border border-white/15">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Technical Data Cards & Solutions */}
                        <div className="lg:col-span-6 bg-surface-container-low p-8 md:p-10 rounded border border-outline-variant/30 flex flex-col justify-between space-y-8 shadow-none md:shadow-sm">
                            {/* 4 Metadata Chips */}
                            <div className="grid grid-cols-2 gap-px bg-outline-variant/30 border border-outline-variant/30 rounded overflow-hidden">
                                <div className="bg-white p-5">
                                    <span className="text-secondary text-[10px] font-mono font-bold uppercase tracking-wider block mb-1">Asset Owner</span>
                                    <span className="text-primary font-bold text-sm uppercase">{selectedProject.owner}</span>
                                </div>
                                <div className="bg-white p-5">
                                    <span className="text-secondary text-[10px] font-mono font-bold uppercase tracking-wider block mb-1">Safety Tier</span>
                                    <span className="text-primary font-bold text-sm uppercase">{selectedProject.tier}</span>
                                </div>
                                <div className="bg-white p-5">
                                    <span className="text-secondary text-[10px] font-mono font-bold uppercase tracking-wider block mb-1">Core Protocol</span>
                                    <span className="text-primary font-bold text-sm uppercase">{selectedProject.protocol}</span>
                                </div>
                                <div className="bg-white p-5">
                                    <span className="text-secondary text-[10px] font-mono font-bold uppercase tracking-wider block mb-1">Current Status</span>
                                    <div className="flex items-center gap-2 text-tertiary font-bold text-sm uppercase">
                                        <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                                        {selectedProject.status}
                                    </div>
                                </div>
                            </div>

                            {/* Challenge & Solution */}
                            <div className="space-y-6">
                                <div className="border-l-4 border-primary pl-5">
                                    <h4 className="text-primary font-bold uppercase text-xs tracking-wider mb-2 font-mono">
                                        The Structural &amp; Life-Safety Challenge
                                    </h4>
                                    <p className="text-secondary text-xs leading-relaxed text-justify">
                                        {selectedProject.challenge}
                                    </p>
                                </div>
                                <div className="border-l-4 border-tertiary pl-5">
                                    <h4 className="text-tertiary font-bold uppercase text-xs tracking-wider mb-2 font-mono">
                                        Precision Engineering Architecture
                                    </h4>
                                    <p className="text-secondary text-xs leading-relaxed text-justify">
                                        {selectedProject.solution}
                                    </p>
                                </div>
                            </div>

                            {/* Stats Bar */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-outline-variant/30">
                                <div>
                                    <span className="text-tertiary text-2xl md:text-3xl font-bold font-mono block">
                                        {selectedProject.stat1_val}
                                    </span>
                                    <span className="text-secondary text-[10px] font-bold uppercase tracking-wider font-mono block mt-1">
                                        {selectedProject.stat1_lbl}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-primary text-2xl md:text-3xl font-bold font-mono block">
                                        {selectedProject.stat2_val}
                                    </span>
                                    <span className="text-secondary text-[10px] font-bold uppercase tracking-wider font-mono block mt-1">
                                        {selectedProject.stat2_lbl}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-primary text-2xl md:text-3xl font-bold font-mono block">
                                        {selectedProject.stat3_val}
                                    </span>
                                    <span className="text-secondary text-[10px] font-bold uppercase tracking-wider font-mono block mt-1">
                                        {selectedProject.stat3_lbl}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. DOCUMENTATION & OPERATIONAL LOGS */}
            <section className="py-24 bg-surface-container-low border-t border-outline-variant/30">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-outline-variant/30 pb-6">
                        <div>
                            <span className="text-xs font-bold text-tertiary uppercase tracking-[0.2em] font-mono block mb-2">
                                FIELD VERIFICATION
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-tight">
                                OPERATIONAL LOGS &amp; SITE SURVEYS
                            </h2>
                            <p className="text-secondary mt-1 text-xs text-justify max-w-xl">
                                Visual telemetry from site inspection, computational stress simulation, to final safety commissioning.
                            </p>
                        </div>
                        <div className="text-xs font-mono text-secondary">
                            ARCHIVE RECORDS: 4 ENTRIES
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {GALLERY_LOGS.map((item, idx) => (
                            <div 
                                key={idx} 
                                onClick={() => setPreviewImage(item)}
                                className="bg-white rounded overflow-hidden border border-outline-variant/30 group cursor-pointer shadow-none md:shadow-sm md:hover:shadow-md hover:border-primary transition-all duration-300 flex flex-col"
                            >
                                <div className="aspect-[4/3] bg-surface-container overflow-hidden relative">
                                    <img 
                                        alt={item.title} 
                                        className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                                        src={item.img} 
                                    />
                                    <div className="absolute top-2 right-2 bg-primary/90 text-white text-[9px] font-mono px-2 py-0.5 rounded uppercase">
                                        {item.ref}
                                    </div>
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                        <span className="material-symbols-outlined text-2xl">zoom_in</span>
                                    </div>
                                </div>
                                <div className="p-4 flex flex-col flex-grow">
                                    <span className="text-[10px] font-mono font-bold text-tertiary uppercase mb-1">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xs font-bold text-primary uppercase leading-snug">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Optional Image Modal Preview */}
            {previewImage && (
                <div 
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setPreviewImage(null)}
                >
                    <div 
                        className="bg-white rounded overflow-hidden max-w-3xl w-full border border-outline-variant/30 shadow-2xl relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative aspect-video bg-black">
                            <img alt={previewImage.title} className="w-full h-full object-contain" src={previewImage.img} />
                            <button 
                                onClick={() => setPreviewImage(null)}
                                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-tertiary flex items-center justify-center transition-colors cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-lg">close</span>
                            </button>
                        </div>
                        <div className="p-6 bg-white flex justify-between items-center">
                            <div>
                                <span className="text-xs font-mono text-tertiary font-bold uppercase block mb-1">
                                    {previewImage.category} // {previewImage.ref}
                                </span>
                                <h3 className="text-base font-bold text-primary uppercase tracking-tight">
                                    {previewImage.title}
                                </h3>
                            </div>
                            <span className="text-xs font-mono text-secondary">AR INSPECTION ARCHIVE</span>
                        </div>
                    </div>
                </div>
            )}

            {/* 6. BRAND CONSISTENT CTA SECTION (MATCHING SERVICES & ABOUT) */}
            <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                <div className="bg-white p-8 md:p-12 rounded border border-outline-variant/30 shadow-none md:shadow-sm flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    <div className="max-w-xl">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            <span className="w-2 h-2 bg-tertiary"></span>
                            <span className="text-xs font-mono font-bold text-tertiary uppercase tracking-widest">TACTICAL ENGAGEMENT</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 uppercase tracking-tight">
                            HAVE A MISSION-CRITICAL PROJECT?
                        </h2>
                        <p className="text-secondary text-xs md:text-sm leading-relaxed text-justify">
                            Deploy our licensed structural engineers and certified life-safety team to evaluate your industrial facility, blueprint compliance, and lifecycle integrity.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
                        <Link 
                            to="/contact" 
                            className="w-full md:w-auto text-center bg-tertiary text-white text-xs font-mono font-bold px-8 py-4 rounded uppercase tracking-widest hover:bg-opacity-90 transition-colors shadow-none md:shadow-sm"
                        >
                            Request Site Audit
                        </Link>
                        <Link 
                            to="/services" 
                            className="w-full md:w-auto text-center border border-primary text-primary hover:bg-surface-container font-mono font-bold text-xs px-6 py-3 rounded uppercase tracking-wider transition-all"
                        >
                            Explore Capabilities
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
