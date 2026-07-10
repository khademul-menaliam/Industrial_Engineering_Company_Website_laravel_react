import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Static Fallbacks for robustness
const FALLBACK_INTRO = {
    services_intro_title: 'Operational Hierarchy',
    services_intro_heading: 'Precision Engineering & Industrial Solutions',
    services_intro_description: 'Deploying elite technical expertise across consulting, project execution, and lifecycle maintenance for mission-critical infrastructure.'
};

const FALLBACK_ZERO_DOWNTIME = {
    zero_downtime_title: 'Zero-Downtime Maintenance',
    zero_downtime_description: 'Our maintenance protocols ensure maximum operational uptime through predictive diagnostics and rapid response engineering.',
    zero_downtime_link: '/contact'
};

const FALLBACK_CTA = {
    services_cta_title: 'Initiate Tactical Protocol',
    services_cta_description: 'Deploy our rapid-response engineering team to evaluate your facility\'s integrity.'
};

const FALLBACK_SERVICES = {
    consulting: [
        {
            title: 'MEP Design',
            slug: 'mep-design',
            short_description: 'Mechanical, Electrical, and Plumbing engineering frameworks for complex industrial facilities.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCICZLoyMCGiXOcS-UHEMXZSuWXbunAvy2wujPrbbYI8ByVbaFm99njmbHxjPlgFe1Mc2TNbGeBjQeEoIjWDGoPPWZrph0Zx8eV73pnBdGu5eqIrADkarzXS96Lw9TdCOxqJXOX-br-M3l0gr6XOdjiN9YwDXUq7zPqd1v_-c5oVuduVScrFK2lPVHwvZuIy-aHucZsYZrmoIN11P8oqafMRO-UALJ06Os65wxVBqLFtCss67Lv092u',
            icon: 'architecture'
        },
        {
            title: 'ANSYS Simulation',
            slug: 'ansys-simulation',
            short_description: 'High-fidelity computational fluid dynamics and structural analysis for optimized system performance.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp73VC91xCR3iu5rI02d-fVKu1wT1adUxD-NM0gTY21x4Nalt8ormNMKMhwvkto-TQ2p7rcYs2UgXjDsLAEneed2yBYPAECiTSg-xLdHhJ1eOf-0bZnrlRz9MrgUh2RCTwPaYh7r-gtx8oR3TnNQmkHTDXDIUDFJz2YRJB6in6TIgmTSJYZ9hBsx5HhyB1rHDtaYFy2qRIRUdp1uW4Dh53xZfF2pAiVPUJzNOkDc-s-0IvcA9Cv0uf',
            icon: 'precision_manufacturing'
        },
        {
            title: 'Industrial Pump Systems',
            slug: 'industrial-pump-systems',
            short_description: 'Strategic consulting on fluid transport logistics and high-capacity pumping architectures.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmP04yL-RMwuEwFiuk0IErZyGVDtCZ2cR7MRrprpxCaVGUhJT5d3AzPrKSolwVZhu784CkNEokpmiC9lSeMvUJYhItt8Ro4d9m3BaPhIjnlDJIEj1INjugcXV3eQSzDF1HJz1iKXG3Mpy4DDumg0bH3gteWN9HoGDQXawTpot-t4wWGYmlndSJH7SkJC2Qze4J0sd3c3O6iBmZXHF7QWR3KCa7e1K1EHmxXNQp5j8uNs90MOWlljle',
            icon: 'water_damage'
        },
        {
            title: 'Gain Dryer Systems',
            slug: 'gain-dryer-systems',
            short_description: 'Engineering solutions for Flatbed Gain dryer systems tailored for agricultural and industrial processing.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtEf0k-IUO5vZukJ5LQ4at5GgoTBXoG3Yk3XULf2MB_Xg94PZYYniDls2NtW5ZCWl0eZxisxIMnu_8s95jlp4_H4OeD0ZEYmTbK7RcxScK7H84rZ31fnZExTI9YQGm9zJpHPNxO7hn6YNyvK6LkwjaVmYOapYcfz4S2TI5_xOmLLXuFJ59gjFDZM6SLnHmWo_mu2n8XO5SJs4xoD1qg7NGsGtQgGeMVaOa72nHD8PzdxARFFu6rNjY',
            icon: 'dry'
        },
        {
            title: 'Natural Ventilation Systems',
            slug: 'natural-ventilation-systems',
            short_description: 'Passive airflow engineering and thermal chimney design for sustainable climate control solutions in high-scale environments.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwfNgtBC32UevUhZJHQGh8MP4GioRaxRGNyDm8sZpqzlPCIfI5E0PmFidSJRxwZcdLBNDFbHAE93BNJDmtFqnMIF9n6x756tDvuOicv-aEqJJKem3wK84pBrjzdDDSXdx9OUTpqCdzlp-M81945rfnUUlxXfxmSJWSg7zUCFW_SZV5r5lUbhiDgj3Lq87B9WqKZqT2kZoYYx84VcBfPG_jDbkcgUUeIS-vjPgNm0kT2R5I10Uvu12QSHekx5FuQG4KJ1mT2_Xr0YW2rw',
            icon: 'air',
            is_col_span_2: true
        }
    ],
    dsi: [
        {
            title: 'Fire Protection & Detection',
            slug: 'fire-protection-detection',
            short_description: 'Full-cycle design, supply, and installation of advanced suppression and intelligence detection loops.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJWJE-v-0uC5YaX0T-APoKQzTnHfJdootuqNi69Cli5_GSEL7Lx8hZ-EiFL4U19ssKxHZAanJmH5rdRioDDSmJz1N_jsyDzewISZAqVEEB3JoL6-S_KClpkrEzuA0FgimLaXHIuLPP6Gpl0EmEI70SN_N4-x1CS7Q8ztENdkzyrXHPNQDcNNSOSzFQwwXLdI71lAYUft7xxFg7NA6kbkI64SDLKxQii1n0I6Z-RB4I-rfN6fIaS4B3',
            icon: 'local_fire_department',
            tag: 'Tactical Asset',
            is_featured: true
        },
        {
            title: 'HVAC Systems',
            slug: 'hvac-systems',
            short_description: 'Integrated heating, cooling, and air quality infrastructure.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdcB4CILoOe8j0qWgbw3kqCTdj-wjIincqH2166KaA-bvCFGYdplL_NAR6TnR8qLFd69VNi--T96Gi1EV5SdsZBnM-wcRX1lcqjk5yGpVywHLkRarVNlzreC53l5iNA136GVWEKhRbxeV96bItAO52EhxL-HFJaZcq19Xc1GufhlKG_SuKVsGSAVJvHUMx0qmSnPY1S4NYp_adWFJJTcUQQUGu74Qs5jpWS2WCntZ8NT8DxsVcBMVJ',
            icon: 'hvac'
        },
        {
            title: 'Industrial Pipe Work',
            slug: 'industrial-pipe-work',
            short_description: 'Precision fabrication of water, gas, and chemical fluid networks.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfMFxNMmMWh5eaevLvK-TWWbFy2yT0u2aDm4FRuRqlHBS3CvOgU1CMTFlUyaGXu5mOhvnV2EDMGr810NDcBGY5PUnRsjYadRKw6Kb0VzmgywX1kBATBdewNhqJ9SBGse-b8vgyK4wRW9VSouAwZ2AmOEUJ2J4Di6cRu47cS3Y2S4YSTnCdFal5gAfVP_E0LCPPTslDUyAvARCEqIGVj38pH0RaVbAjyYBu2I2F_DM9a7W1PiyIwAYf',
            icon: 'plumbing'
        },
        {
            title: 'Boiler & Steam Lines',
            slug: 'boiler-steam-lines',
            short_description: 'Heavy-duty thermal energy generation and steam distribution loops.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVhUSv_IfonsyQ9zh97VvPgYPMKBiG0nSCioydcwOZy81Iwof5tDjbBJnTLPC9XHUspSvWM4Jn1Ma7nA--VRMYD542SpNraCxXlkQM1HApCz3KzaScJ4xqEeKW2vAPuuDvDgYwoGyDIvuZEpLlb53g2dJZc__3D3vlToJKuDdLWOSD8XANgH1xN7wRg8Am31BS-GE57-vIACdOUOX9h5hhWOwlprtyN3o_RtmuwErlRqv0eOC82d_e',
            icon: 'factory'
        },
        {
            title: 'Compressed Air Systems',
            slug: 'compressed-air-systems',
            short_description: 'Reliable pneumatic distribution with high-efficiency compressor setups.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2JJ-RWncff50novZhwGyNf43ZgC0IWmq-ECQ6X0RC5st1MtcscmDobC5EmKxzr8CmH--P5HSxAVhASO-XF-xbtxK_4C0kk9OCvZb5GgETdhJzWpYjSAFnz_B6uvegjWXh49oOA79Eb5rr6sOQBBX42xWA_MC2fuRhlYMtjftkLnzm-tyfl1lO-KYfauDNdXydJpxiOkgHhTNgPDpxkEA42ESL8YM1IcjlK1sF3GH5C97fZTP-TDX6',
            icon: 'airwave'
        }
    ],
    maintenance: [
        {
            title: 'Industrial Pumps',
            slug: 'industrial-pumps-maintenance',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQSzc4-Omk2O7cqDdYkBht4oXUrKOBLfF9B2NvAz1v5s8fo044ffl_V0MXEan1MIEp8aoVg6cDyiUQ5ha4kgpgUywQSAUEDBmD0hdL8el9l-vuHqdqPm1dmor4JgEPxh4zsr5MX7cDxbv3Sbnzt5_r61Re3mFDGotkC7xPta4FeS_lTV1k72kAKl7T02b_k1s7kZ6LBWguCTlZFZR5OBbQsoRSIo8_eD-mI2LcDiO5OmSBiDLgx-yp',
            icon: 'water_pump'
        },
        {
            title: 'Electric Motors',
            slug: 'electric-motors-maintenance',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFdE7jWQm4RmroV4gGjMRhPf6sJHQIiZxsU1ARGbmNOZTnnl9SOxTXBR4CJe44hV5r-tJMdkIihffYB2NJTW4V2Oddj_47COWdLh_p7nhve1n6L2DjLhBZAREMeptInV_j5xc4zw3kC_SFDvqYL4H3Lefnxxsl54ys2jdQz-0xSCumxFHz5_8Ts_o7cWAL7hddtG8R1Wcs-2f-UGnqWn32dIjVWzliiCPDtpGC2RzBuMCb2TrGv91C',
            icon: 'electric_bolt'
        },
        {
            title: 'Diesel Engines',
            slug: 'diesel-engines-maintenance',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3Zys3ZkzKMRanYpsw6Oqfq3qOGzasf0b2vM7wqNgtPs5leKuKQcvr4wo3ZG2EPUwrgjGSdbFqfjOn8QCbpwVYz4wJ5rYY_6LPwLQbgiiOt8kxyziyJG2GyR-7NBrTv2XWWce-UCheMDBFq5rcqozdwG5x_-QvhV0ewEqeMkGOOwW_E_kM8eM49_LahvKAQADh2kfsvGYGSArRq50cDqI_jt4llNoOH5fYoVXj4P3-TqASypuHbC6V',
            icon: 'engine'
        },
        {
            title: 'Compressors',
            slug: 'compressors-maintenance',
            image: 'https://lh3.googleusercontent.com/aida/AP1WRLs11jPUMVIo5IoD9PrDk6wsOWp67hjZ-XprgD14HayQyaZMlsIzC6RxyOHC25GbVtISKU9BrSHFhnDeJzts2Xf5oyvK996rFwFgcOpBl5n3RUzTBQNH1WNaCjZzufDi5NjTKANkTY2zcSVKWE7gVV3IzsmxEEQaXWi8UdmdwI9Dq7bTY6YlONWMOnhfLFV89hbHhP8CYRcPQNbhGYsr1LpbcsXefX4Nbj0ecnk3DjgkkAFC5U57qol_e9k',
            icon: 'compress'
        },
        {
            title: 'Generator Support & Diagnostics',
            slug: 'generator-support-diagnostics',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5cg5UzJan1TtUk8HxgXN1i70x7rvtF_UPF_d1iKoJZUyzfN4YMdPdqmbR758Z1rZOAI2LyY64zioYpHYdTU2bLGW4H5nU7bJh6-zJhpd596o0bSficb0qmBd2BiNmxwLz3EFkc4C2OC_47Q5XMgqUV2s3o_Cz0fZxkoy655uPmulOqfPxNU0ynRT6LZrGRUncWV_sk8CK3nLMFod7WqLVCyUg0SvZSfIRVPztlDTb_Wy9erTyubCY',
            icon: 'bolt',
            is_col_span_2: true
        }
    ]
};

export default function Services() {
    const [categories, setCategories] = useState(FALLBACK_SERVICES);
    const [settings, setSettings] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/services')
            .then(response => {
                if (response.data.success) {
                    const data = response.data;
                    setSettings(data.settings || {});
                    
                    // Only override if database has seeded categories
                    const cats = data.categories || {};
                    const newCats = {};
                    let hasData = false;

                    Object.keys(cats).forEach(key => {
                        if (cats[key] && cats[key].length > 0) {
                            newCats[key] = cats[key];
                            hasData = true;
                        }
                    });

                    if (hasData) {
                        setCategories(prev => ({
                            ...prev,
                            ...newCats
                        }));
                    }
                }
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching dynamic services:', err);
                setLoading(false); // Silent fallback to static mock content
            });
    }, []);

    // Helper to get text setting with fallback
    const getSetting = (key, fallback) => {
        return settings[key] !== undefined && settings[key] !== null ? settings[key] : fallback;
    };

    const introTitle = getSetting('services_intro_title', FALLBACK_INTRO.services_intro_title);
    const introHeading = getSetting('services_intro_heading', FALLBACK_INTRO.services_intro_heading);
    const introDescription = getSetting('services_intro_description', FALLBACK_INTRO.services_intro_description);

    const zeroDowntimeTitle = getSetting('zero_downtime_title', FALLBACK_ZERO_DOWNTIME.zero_downtime_title);
    const zeroDowntimeDesc = getSetting('zero_downtime_description', FALLBACK_ZERO_DOWNTIME.zero_downtime_description);
    const zeroDowntimeLink = getSetting('zero_downtime_link', FALLBACK_ZERO_DOWNTIME.zero_downtime_link);

    const ctaTitle = getSetting('services_cta_title', FALLBACK_CTA.services_cta_title);
    const ctaDesc = getSetting('services_cta_description', FALLBACK_CTA.services_cta_description);

    // Grouping variables
    const consultingList = categories.consulting || [];
    const dsiList = categories.dsi || [];
    const maintenanceList = categories.maintenance || [];

    // Separate featured and right stack for Projects DSI
    const featuredDsi = dsiList.find(s => s.is_featured) || dsiList[0];
    const rightStackDsi = dsiList.filter(s => s !== featuredDsi);

    // Separate side panel and items grid for Maintenance
    const sidePanelMaintenance = maintenanceList.find(s => s.is_featured) || maintenanceList[4]; // Generator by default
    const gridMaintenance = maintenanceList.filter(s => s !== sidePanelMaintenance);

    return (
        <div className="w-full bg-background text-on-surface">
            {/* HERO / INTRO */}
            <section className="pt-16 pb-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                <div className="border-l-4 border-tertiary pl-6">
                    <h2 className="text-xs font-bold text-tertiary uppercase tracking-[0.2em] mb-2 font-mono">{introTitle}</h2>
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 uppercase tracking-tight">{introHeading}</h1>
                    <p className="text-base text-secondary max-w-3xl leading-relaxed">
                        {introDescription}
                    </p>
                </div>
            </section>

            {/* CATEGORY 1: CONSULTING SERVICES */}
            {consultingList.length > 0 && (
                <section className="py-16 bg-surface px-margin-mobile md:px-margin-desktop border-t border-outline-variant/20">
                    <div className="max-w-container-max mx-auto">
                        <div className="flex items-center gap-4 mb-10">
                            <h2 className="text-xs font-bold text-primary uppercase tracking-[0.3em] flex-shrink-0 font-mono">01. Consulting Services</h2>
                            <div className="h-px bg-outline-variant/30 flex-grow"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {consultingList.map((service, idx) => {
                                const isColSpan2 = service.is_col_span_2 || (idx === consultingList.length - 1 && consultingList.length % 3 === 2);
                                if (isColSpan2) {
                                    return (
                                        <div key={service.id || idx} className="bg-white rounded-lg overflow-hidden flex flex-col group border border-outline-variant/30 hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-2">
                                            <div className="flex flex-col md:flex-row h-full">
                                                <div className="md:w-5/12 h-48 md:h-auto bg-surface-container-low overflow-hidden relative">
                                                    <img 
                                                        alt={service.title} 
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0" 
                                                        src={service.image} 
                                                    />
                                                    <div className="absolute top-4 left-4 w-10 h-10 bg-white text-tertiary rounded flex items-center justify-center shadow-md">
                                                        <span className="material-symbols-outlined text-xl">{service.icon || 'air'}</span>
                                                    </div>
                                                </div>
                                                <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-center">
                                                    <h3 className="text-base font-bold text-primary mb-2 uppercase tracking-tight">{service.title}</h3>
                                                    <p className="text-xs text-secondary leading-relaxed mb-6">{service.short_description}</p>
                                                    <Link className="inline-flex items-center text-tertiary text-[11px] font-bold uppercase tracking-wider hover:text-primary transition-colors font-mono" to={`/services/${service.slug}`}>
                                                        Explore Solution <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                return (
                                    <div key={service.id || idx} className="bg-white rounded-lg overflow-hidden flex flex-col group border border-outline-variant/30 hover:shadow-lg transition-all duration-300">
                                        <div className="h-44 bg-surface-container-low overflow-hidden relative">
                                            <img 
                                                alt={service.title} 
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0" 
                                                src={service.image} 
                                            />
                                            <div className="absolute top-4 left-4 w-10 h-10 bg-white text-tertiary rounded flex items-center justify-center shadow-md">
                                                <span className="material-symbols-outlined text-xl">{service.icon || 'settings'}</span>
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-base font-bold text-primary mb-2 uppercase tracking-tight">{service.title}</h3>
                                            <p className="text-xs text-secondary leading-relaxed mb-6 flex-grow">{service.short_description}</p>
                                            <Link className="inline-flex items-center text-tertiary text-[11px] font-bold uppercase tracking-wider hover:text-primary transition-colors font-mono" to={`/services/${service.slug}`}>
                                                View Details <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* CATEGORY 2: PROJECTS (DESIGN, SUPPLY & INSTALLATION) */}
            {dsiList.length > 0 && (
                <section className="py-20 bg-white border-y border-outline-variant/30 px-margin-mobile md:px-margin-desktop">
                    <div className="max-w-container-max mx-auto">
                        <div className="flex items-center gap-4 mb-10">
                            <h2 className="text-xs font-bold text-tertiary uppercase tracking-[0.3em] flex-shrink-0 font-mono">02. Projects (DSI)</h2>
                            <div className="h-px bg-outline-variant/30 flex-grow"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                            {/* Featured Card */}
                            {featuredDsi && (
                                <div className="md:col-span-7 group relative rounded-lg overflow-hidden shadow-sm border border-outline-variant/20 aspect-[16/9] md:aspect-auto flex flex-col justify-end min-h-[350px]">
                                    <img 
                                        alt={featuredDsi.title} 
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" 
                                        src={featuredDsi.image} 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent"></div>
                                    <div className="relative p-6 md:p-8 z-10 w-full">
                                        {featuredDsi.tag && (
                                            <span className="bg-tertiary text-white px-2.5 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider mb-3 inline-block font-mono">
                                                {featuredDsi.tag}
                                            </span>
                                        )}
                                        <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">{featuredDsi.title}</h3>
                                        <p className="text-gray-300 text-xs max-w-md leading-relaxed mb-6">{featuredDsi.short_description}</p>
                                        <Link className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded text-[11px] font-bold uppercase tracking-widest transition-colors backdrop-blur-sm font-mono" to={`/services/${featuredDsi.slug}`}>
                                            View Project Details
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {/* Right Stack */}
                            <div className="md:col-span-5 flex flex-col gap-4">
                                {rightStackDsi.map((service, idx) => (
                                    <div key={service.id || idx} className="bg-background p-4 rounded-lg flex flex-col sm:flex-row gap-4 border border-outline-variant/30 group hover:border-tertiary transition-all duration-300">
                                        <div className="w-full sm:w-24 h-36 sm:h-24 flex-shrink-0 rounded overflow-hidden bg-surface-container-low">
                                            {service.image && (
                                                <img 
                                                    alt={service.title} 
                                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
                                                    src={service.image} 
                                                />
                                            )}
                                        </div>
                                        <div className="flex flex-col justify-center flex-grow">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="material-symbols-outlined text-tertiary text-sm">{service.icon || 'settings'}</span>
                                                <h4 className="font-bold text-primary text-sm uppercase tracking-tight">{service.title}</h4>
                                            </div>
                                            <p className="text-[11px] text-secondary leading-relaxed mb-2 line-clamp-2">{service.short_description}</p>
                                            <Link className="text-tertiary text-[10px] font-bold uppercase tracking-wider hover:text-primary mt-auto font-mono flex items-center gap-1" to={`/services/${service.slug}`}>
                                                Explore <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CATEGORY 3: MAINTENANCE & LIFECYCLE */}
            {maintenanceList.length > 0 && (
                <section className="py-20 bg-surface px-margin-mobile md:px-margin-desktop">
                    <div className="max-w-container-max mx-auto">
                        <div className="flex items-center gap-4 mb-10">
                            <h2 className="text-xs font-bold text-secondary uppercase tracking-[0.3em] flex-shrink-0 font-mono">03. Maintenance &amp; Lifecycle</h2>
                            <div className="h-px bg-outline-variant/30 flex-grow"></div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* High-Contrast Side Panel */}
                            {sidePanelMaintenance && (
                                <div className="lg:col-span-4 bg-primary p-8 rounded-lg text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[300px]">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                        <span className="material-symbols-outlined text-[120px]">{sidePanelMaintenance.icon || 'settings_suggest'}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{zeroDowntimeTitle}</h3>
                                        <p className="text-gray-300 text-xs mb-10 leading-relaxed">
                                            {zeroDowntimeDesc}
                                        </p>
                                    </div>
                                    <Link to={`/services/${sidePanelMaintenance.slug}`} className="w-full text-center bg-tertiary text-white py-3.5 rounded font-mono font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md">
                                        View generator details
                                    </Link>
                                </div>
                            )}

                            {/* Main Grid */}
                            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {gridMaintenance.map((service, idx) => {
                                    const isLast = idx === gridMaintenance.length - 1 && gridMaintenance.length % 2 === 1;
                                    return (
                                        <div 
                                            key={service.id || idx} 
                                            className={`bg-white rounded-lg overflow-hidden flex group hover:shadow-md border border-outline-variant/30 transition-all duration-300 min-h-[6rem] ${isLast ? 'sm:col-span-2' : ''}`}
                                        >
                                            <img 
                                                alt={service.title} 
                                                className={`object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shrink-0 ${isLast ? 'w-1/4 hidden sm:block' : 'w-1/3'}`} 
                                                src={service.image} 
                                            />
                                            <div className="p-4 flex flex-col justify-center relative flex-grow">
                                                <span className="material-symbols-outlined text-tertiary text-xl absolute right-4 top-4 opacity-30 group-hover:opacity-100 transition-opacity">
                                                    {service.icon || 'settings_suggest'}
                                                </span>
                                                <h4 className="text-sm font-bold text-primary mb-1 uppercase tracking-tight max-w-[85%]">{service.title}</h4>
                                                <Link className="text-tertiary text-[10px] font-bold uppercase tracking-wider hover:text-primary font-mono mt-1" to={`/services/${service.slug}`}>
                                                    Details
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA SECTION */}
            <section className="py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16">
                <div className="bg-white p-8 md:p-10 rounded-lg border border-outline-variant/30 shadow-lg flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-2 uppercase tracking-tight">{ctaTitle}</h3>
                        <p className="text-secondary text-sm">{ctaDesc}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
                        <Link to="/contact" className="w-full md:w-auto text-center bg-tertiary text-white px-8 py-4 rounded font-mono font-bold text-[11px] uppercase tracking-widest shadow-md hover:brightness-110 transition-all">
                            Request Site Audit
                        </Link>
                        <Link to="/contact" className="w-full md:w-auto text-center border-2 border-primary text-primary px-8 py-4 rounded font-mono font-bold text-[11px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                            Contact HQ
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
