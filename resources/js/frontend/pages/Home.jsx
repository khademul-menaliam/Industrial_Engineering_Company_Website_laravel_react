import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';

const defaultSlides = [
    {
        title: "Your Vision, Our Engineering",
        subtitle: "Providing innovative industrial engineering solutions",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-6-3cLDaU4VnChB7GYvXsbKGYaUSQp89TQMzPFB2mzN9h-twN_Ik0ERIwTHZl893AhxwYuDeJBpUz_Te3v4QodSCkIvOPT4LnqBzdD0xXzqao4xu7LGVMFi8uDk1RBAsAJ8WD6DoBrWMGYs0GS3ublBRyMlah8JfpIBCDpwl9bHchg3y6SZtECGaEZkc2Mq0LVkK9FWsDRzeGdczTiwZ-nDj601wiOgkjf4xBXx3abFizvqvfErfR"
    },
    {
        title: "Consulting & Projects",
        subtitle: "Expertise in MEP design, simulation, and installations.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZE8ooXcXGVdrAES5GxRjh2CbqkMapDOF7dPJO0EizqB5HwnYkoP812ufBh9eDJLrWeOc9HJFtnI7OGWxseciPJNt_tlS7z419VPOkGA7HM6htH-CeHOzR9fEGL59fSKItgd4SctPKTUVbJoU7g9DqjJw8JwJ8hhF2UQYz2eCXKhp61qfcNiLRBfBWi9L8ZxPisTO8hwxpoh-sP-exJvu6JnUbPrhtHvqUh9zGIYvbtTTvpk-ixIR8"
    },
    {
        title: "Maintenance & Services",
        subtitle: "Reliable support for all industrial systems.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxNuCaKpqaQ6E_QgXmtqTDHTvGXSdnnvvUJhny8QurhM1VLR9QtwmeNmgxJmmQGNGurQTtjdzuPdr5aMD0-URR7PfF2vAQhZgWb1BZCnPSgjZvBaWwULpTylYeYxN8r0ZBpATwKE45Bl_c-Qcpm-ovPo7p4HEl4siRfB-mp3IpftkCDbGlo1ucRsd6ZBCoNGk6AHGDtxAe3puRuacOxzOvTDoEUC7ll8mcbLudulRlfK6i1eEB-Wqa"
    }
];

const defaultServices = [
    {
        title: "Fire Pump Installation",
        description: "Design, installation, testing, and maintenance of high-capacity fire pump systems.",
        icon: "water_pump",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg0x0pxkxgg0rtFFIO8i69_V8VFWIbgw0QqilVEdA3jX4IXTZ1E7iPvtuxuB3z6sXBrpt9U7zRlrCYnn3AxOBvBHSpRGsZt_Mk8DesaccDqjNZa_DiDPQtWhHmjlMP1fmyvWkAFlO8qjebSmY93JMxn-80EMDGHFt9Ng2OaKUM-7gcoRk6XxcDr1Ytu6mIzkZf45OF2s2MKoOrNFbqu5wyJ3LGBpiUmfeYE6IAqJvptq5zrUkIykc9"
    },
    {
        title: "Building Fire Safety",
        description: "Comprehensive protection including alarms, extinguishers, and safety compliance audits.",
        icon: "detector_smoke",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8TMNnh_z6WYJ9BXosvX7O3z4QkdY2nvc0lCaDRwFf1nHXFEMR3cleXU7Bg3_AGNILdNp_DMUhqpjrGBNLlhEM9u7SF3X2_Yc-h-agp_brp65Hk9rRie2STvKdK8YbPqc8KGhkE9hDaNXrof2DW3HN0tvolGCDXL8_KR8VrHC3xiC9Xv3Nq1NIHM8uIAi8UuwpQ79QiYesouoD3sFSBnqhoIMJJ00qj6oUg-71-yc9_9o3LngpOViy"
    },
    {
        title: "Industrial Engineering",
        description: "MEP engineering, mechanical installation, and full-scale industrial project management.",
        icon: "engineering",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo0iBq4U9Ob2bakYJjedylfY3JyshBX-dcna1FGgcEc9X-Rdq2TCHh4OJi_s6BfJjolKnFK9NJmx0w8etv8aQydgoYpAHXPK_yE26lS8d4t98TGtegaIUA13e-OIs8GCKJeD0TN7Eeck8IuSwS2pPLgvHaWbQwq6f1eXm1bk3DURTW3Rsc62yOGBbWRnRLvXozeI7rqOqbsqccG-IwSiwsCpj5GcQSRuxXdIB83U0-RViYeE8y17IL"
    }
];

const defaultProcesses = [
    { step_number: "01", title: "Consultation", description: "Risk assessment & site analysis" },
    { step_number: "02", title: "Design", description: "CAD modeling & system engineering" },
    { step_number: "03", title: "Installation", description: "Precision mechanical deployment" },
    { step_number: "04", title: "Inspection", description: "Rigorous safety compliance auditing" },
    { step_number: "05", title: "Maintenance", description: "Ongoing 24/7 technical oversight" }
];

const defaultLeaders = [
    {
        name: "David Richardson",
        title: "Chief Executive Officer",
        quote: "Our mission is simple: to provide the structural foundation upon which global industries can thrive. Precision is not just a goal; it is our standard.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdqOTYnupjt5nefsPJfgjHM5HMSix_-gvu2_5cythhmuUcLI2PfYVTXEqEZoZ1zb_BJZFAqoKaO2V0Qm4QtjwKvcQwn1kVOunWU27xyjnDCZ1wxDwRNnBYPoQKmoaWg5knYpTELkqiYZPebgLV8ILc_SWCdQGmp7eaKshtYnYqq6CUgfmd6b1qfwjuahdRa5B3RSc9AR0An4EpvfDAh5TPWyEcrXzVj2G4N-irBFJVrqv46azTwU5Xdg"
    },
    {
        name: "Dr. Elena Vance",
        title: "Senior Strategic Advisor",
        quote: "The complexity of modern engineering requires a blend of traditional expertise and digital foresight. We provide that equilibrium.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6BlPBCRMJPlatpTIEpHMp_Qin1P514yu10fGxWT8RCgzgoxzfNiAixjZyyzruYkGHVQ5RjH0OBEc_KxD_hB3qcSwgxBXfCTdz75xqcQlWtmJnDVoVu7OJ9_8DQHmlEU1UMzGztma2yOZJNdmDHaGbntYYSAK2eccHc0A0NiIuJRImByMag29_G6K1EVot-b3ZHvp7O_PPDZ8Lu7dPLc2J8a7Q4Qw5LAllNFz5l83u3GMtrCZy6h2wdw"
    }
];

const defaultCompetencies = [
    {
        title: "Fire Safety & MEP",
        items: ["Advanced Suppression", "NFPA Compliance Audits", "Fire Load Management"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2K5DCzWYlO07uOYDok6Z-dcMMzyG-kVsbnogZ30SHtmVodPWrDys0vB8s5ILkFdnBbnIfPrgj9-osvMp5jpQyB-bmaE44XAiJhZdCwp6EYjKlMqrmT7c-sfj9RaB-dGSX5vDEo_pO2uqQLYApNb840hETNczsKSHe4g0AzEnd6Qf5Drx0xfoigGsjwFBuM15NK9st-lYEbNiZRS68CLYi60ZS4zHIpAmn89gWeAKB37gRzVouecvT7w",
        button_text: "Critical Spec",
        button_link: "/services"
    },
    {
        title: "Structural Systems",
        items: ["Seismic Load Analysis", "Steel Optimization", "Deep Foundation Design"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMVvYGqkxmARyUhVBYUegQTjy1kHkfLD-6pA155F0A41_aBUXxMT0gllzEo0V-QIxhjX-FVahEGRl2Zl0_SAFzozf4VBiBcli6hz6v-zTW6qnkplLFTBf7YqXPHH5IdvTeZHEHsL2n6qeAMsmxcRMSN1PJPJWUz30rdIsCsC-KNJGvkJD1KNvuyyNBFyTWcxUh8HJAdxeqACMQ2KpWhnwxmdjE18EJWdun_z_ADbdtmdCu-ooWPTOf-A",
        button_text: "View Details",
        button_link: "/services"
    },
    {
        title: "Robotics & Automation",
        items: ["PLC/SCADA Integration", "Robotic Workflow Design", "Process Optimization"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-kiJZgpt5bmFb5IQlPoyomn5YImZS06iSjadtCLU_WF2l3BlxszFEeJt-lE62iANDJfOcODa5aMCltdX5MjNX8eNNxPzent96l66MChTGi7LJZm7sqOOYpxsDVf0gU5yJaP3Dj5leVzL3tSEw3-Eoaz6ztMIO0LISR9zdw8qHdAFtdmimLk_DTitWiYit31F-_aJjLyhI_6YNJVsaElnBJYhBrQxcDw8MnmVKNDMm4KniXxzAhKnB2Q",
        button_text: "View Details",
        button_link: "/services"
    }
];

const defaultProjects = [
    {
        title: "Petrochemical Facility Upgrade",
        description: "Comprehensive overhaul of fire suppression and MEP systems for a 500,000 sq ft facility.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiQWpv_p1aKDB5L30gax4kmYeHVcmoem0ojGb8FtL8ekHEYNj6pvcUHul3vjwoCFvqjMke7gwjveP9xHrxXRbSA1E-LdOVgN8Rl_K3JiBE0tWdQfX86UDURnLG7lYWNw6XxqiAOqjOe0LCQ1zxQkSurK8gw6lgBV_lZrZaL6rhDCA8VkYr4bXnrpM7ZCDBGJo6qnswyN6-9f5uJ4WyScN3BsEDuybQBRdB3xjopadZOAhoCSFK6muG",
        link: "/portfolio"
    },
    {
        title: "Automotive Assembly Line Automation",
        description: "Integration of advanced robotics and structural support systems to increase throughput by 40%.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYSmVPZna91lP23HEHLg0N3b1_fhKs5jzK7vwSQwp01S3Q1SN0TjuDdDDVvouGKz3zBmKHyZzqhGMj8P0koc_UUKX5GGaxHDp3mVwqyoqtF5zZyMSa9HY2r1ASu1XZjAqoc8fX1A2IUmS3Z7n_Kg_ohFcVzjUXeb7sOKhbT0qgB4EJsIbMKxcWgy5MABVyD3R5zA_PY3c9_qNnhiLXPzhxLDHa7SaTepFypdlQZQIuBFQuNHI63HDS",
        link: "/portfolio"
    }
];

const defaultSettings = {
    capabilities_section_title: 'Core Engineering Capabilities',
    capabilities_section_subtitle: 'Engineered for absolute reliability in the most demanding industrial sectors.',
    process_section_title: 'Operational Methodology',
    leadership_section_title: 'Strategic Leadership',
    leadership_section_subtitle: 'Providing visionary guidance for complex industrial and structural challenges globally.',
    competencies_section_title: 'Core Competencies',
    competencies_section_subtitle: 'Comprehensive engineering specialized for the most demanding industrial environments.',
    projects_section_title: 'Featured Projects',
    projects_section_subtitle: 'Demonstrated excellence in large-scale industrial deployments.',
    clients_section_title: 'Trusted by Global Industry Leaders',
    clients_list: ['AERO-DYNAMICS', 'GLOBAL STEEL', 'NEXUS PETRO', 'TITAN MOTORS', 'HELIOS ENERGY'],
    contact_section_title: 'Request a Consultation',
    contact_section_description: 'Partner with our elite engineering team to secure and optimize your industrial operations. Fill out the form below to initiate a preliminary project assessment.',
    contact_headquarters_address: "400 Industrial Way, Suite 200\nDetroit, MI 48201",
    contact_support_phone: '1-800-TITAN-PRECISION',
    cta_section_title: 'READY FOR TITAN PRECISION?',
    cta_section_subtitle: 'Consult with our elite engineering team for high-stakes industrial solutions and structural integrity audits.',
    cta_primary_btn_text: 'Connect with Experts',
    cta_primary_btn_link: '/contact',
    cta_secondary_btn_text: 'Project Tender',
    cta_secondary_btn_link: '/contact',
};

export default function Home() {
    const [apiData, setApiData] = useState(null);
    const [apiLoading, setApiLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        api.get('/home')
            .then(res => {
                setApiData(res.data);
            })
            .catch(err => {
                console.error('Failed to retrieve homepage dynamic data:', err);
            })
            .finally(() => {
                setApiLoading(false);
            });
    }, []);

    const slides = apiData?.slides?.length ? apiData.slides : defaultSlides;

    useEffect(() => {
        if (!slides.length) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            e.target.reset();
        }, 3000);
    };

    const activeServices = apiData?.services?.length ? apiData.services : defaultServices;
    const activeProcesses = apiData?.processes?.length ? apiData.processes : defaultProcesses;
    const activeLeaders = apiData?.leaders?.length ? apiData.leaders : defaultLeaders;
    const activeCompetencies = apiData?.competencies?.length ? apiData.competencies : defaultCompetencies;
    const activeProjects = apiData?.projects?.length ? apiData.projects : defaultProjects;
    const activeClientsData = apiData?.clients?.length ? apiData.clients : [];

    const getSetting = (key) => apiData?.settings?.[key] || defaultSettings[key];

    return (
        <div className="w-full">
            {/* Hero Section with Slider */}
            <section className="relative w-full h-[600px] overflow-hidden bg-primary" id="hero-slider">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id || index}
                        className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ${
                            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                        }`}
                    >
                        <div 
                            className="absolute inset-0 bg-cover bg-center" 
                            style={{ backgroundImage: `url('${slide.image}')` }}
                        ></div>
                        <div className="absolute inset-0 bg-primary opacity-65"></div>
                        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-desktop text-center flex flex-col items-center gap-6">
                            <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl max-w-4xl uppercase tracking-tight">
                                {slide.title}
                            </h1>
                            <p className="text-base md:text-lg text-surface-container-high max-w-2xl leading-relaxed">
                                {slide.subtitle}
                            </p>
                            <Link 
                                to="/services" 
                                className="bg-tertiary text-white text-xs font-mono font-bold px-8 py-4 rounded uppercase tracking-widest hover:bg-opacity-90 transition-colors mt-4"
                            >
                                EXPLORE SERVICES
                            </Link>
                        </div>
                    </div>
                ))}

                {/* Navigation Dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentSlide === index ? 'bg-tertiary w-6' : 'bg-white/40 hover:bg-white'
                            }`}
                            onClick={() => setCurrentSlide(index)}
                        ></button>
                    ))}
                </div>
            </section>

            {/* Core Engineering Capabilities Services Section */}
            <section className="py-20 px-margin-desktop w-full max-w-container-max mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 uppercase tracking-tight">
                        {getSetting('capabilities_section_title')}
                    </h2>
                    <p className="text-secondary text-sm max-w-3xl mx-auto leading-relaxed">
                        {getSetting('capabilities_section_subtitle')}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {activeServices.map((service, index) => (
                        <div key={service.id || index} className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg overflow-hidden group hover:border-primary transition-colors duration-300">
                            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${service.image}')` }}></div>
                            <div className="p-6 flex flex-col gap-3">
                                <div className="flex items-center gap-2 text-primary">
                                    <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        {service.icon}
                                    </span>
                                    <h3 className="text-base font-bold uppercase tracking-tight">{service.title}</h3>
                                </div>
                                <p className="text-xs text-on-surface-variant leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-surface-container py-20 px-margin-desktop border-y border-outline-variant/30 w-full">
                <div className="w-full max-w-container-max mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-16 text-center uppercase tracking-tight">
                        {getSetting('process_section_title')}
                    </h2>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6 relative">
                        {activeProcesses.map((process, index) => (
                            <div key={process.id || index} className="flex-1 flex flex-col items-center text-center relative z-10">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-xs font-bold mb-3 border-2 border-surface-container ${
                                    index === activeProcesses.length - 1 ? 'bg-tertiary text-white shadow-md' : 'bg-primary text-white'
                                }`}>
                                    {process.step_number}
                                </div>
                                <h4 className="text-sm font-bold text-on-surface mb-1 uppercase tracking-wider">{process.title}</h4>
                                <p className="text-xs text-secondary leading-relaxed">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Leadership Section */}
            <section className="py-20 bg-background px-margin-desktop w-full max-w-container-max mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-tight">
                        {getSetting('leadership_section_title')}
                    </h2>
                    <p className="text-secondary text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
                        {getSetting('leadership_section_subtitle')}
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                    {activeLeaders.map((leader, index) => (
                        <div key={leader.id || index} className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/30 flex flex-col md:flex-row gap-6 items-center md:items-start group hover:border-primary transition-all duration-300">
                            <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 border border-outline-variant/30 group-hover:border-primary transition-colors">
                                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" alt={leader.name} src={leader.image} />
                            </div>
                            <div>
                                <span className="material-symbols-outlined text-primary text-3xl mb-2 opacity-50">format_quote</span>
                                <p className="text-xs italic text-on-surface-variant mb-4 leading-relaxed">
                                    "{leader.quote}"
                                </p>
                                <div>
                                    <h4 className="text-sm font-bold text-primary uppercase tracking-tight">{leader.name}</h4>
                                    <p className="text-[10px] text-tertiary uppercase tracking-widest font-mono mt-1 font-bold">{leader.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Competencies Highlight */}
            <section className="py-20 bg-surface-container px-margin-desktop w-full border-y border-outline-variant/30">
                <div className="max-w-container-max mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-tight">
                                {getSetting('competencies_section_title')}
                            </h2>
                            <p className="text-secondary text-sm mt-2 max-w-xl leading-relaxed">
                                {getSetting('competencies_section_subtitle')}
                            </p>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activeCompetencies.map((comp, index) => {
                            let bulletItems = [];
                            if (comp.items) {
                                bulletItems = typeof comp.items === 'string' ? JSON.parse(comp.items) : comp.items;
                            }
                            return (
                                <div key={comp.id || index} className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden group hover:shadow-md border border-outline-variant/30">
                                    <div className="h-48 overflow-hidden relative">
                                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={comp.title} src={comp.image} />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-base font-bold mb-4 text-primary uppercase tracking-tight">{comp.title}</h3>
                                        <ul className="space-y-2 mb-6 font-mono text-xs text-on-surface-variant">
                                            {bulletItems.map((bullet, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                                                        {index === 0 ? 'local_fire_department' : index === 1 ? 'architecture' : 'precision_manufacturing'}
                                                    </span>
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link 
                                            to={comp.button_link || '/services'} 
                                            className={`w-full py-3 rounded ${
                                                index === 0 ? 'bg-tertiary text-white' : 'border border-primary text-primary hover:bg-surface-container'
                                            } font-mono font-bold text-xs hover:bg-opacity-90 transition-all flex justify-center items-center gap-1 uppercase tracking-wider`}
                                        >
                                            {comp.button_text || 'View Details'} 
                                            {index === 0 ? (
                                                <span className="material-symbols-outlined text-sm">bolt</span>
                                            ) : (
                                                <span className="material-symbols-outlined text-sm">open_in_new</span>
                                            )}
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-20 bg-surface px-margin-desktop w-full max-w-container-max mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 uppercase tracking-tight">
                        {getSetting('projects_section_title')}
                    </h2>
                    <p className="text-secondary text-sm max-w-3xl mx-auto leading-relaxed">
                        {getSetting('projects_section_subtitle')}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {activeProjects.map((project, index) => (
                        <div key={project.id || index} className="bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant/30 group hover:shadow-lg transition-all duration-300">
                            <div className="h-64 overflow-hidden relative">
                                <img alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale" src={project.image} />
                            </div>
                            <div className="p-6">
                                <h3 className="text-base font-bold text-primary mb-2 uppercase tracking-tight">{project.title}</h3>
                                <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">{project.description}</p>
                                <Link className="inline-flex items-center gap-1 text-tertiary font-mono text-[11px] font-bold hover:text-primary transition-colors uppercase tracking-wider" to={project.link || '/portfolio'}>
                                    Read Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Client Directory Section */}
            <section className="pt-8 pb-12 bg-surface-container w-full border-y border-outline-variant/190 overflow-hidden">
                <div className="max-w-container-max mx-auto text-center px-margin-desktop">
                    <h3 className="text-[11px] font-mono font-bold text-secondary uppercase tracking-widest mb-6">
                        {getSetting('clients_section_title')}
                    </h3>
                </div>
                {activeClientsData.length > 0 ? (
                    <div className="w-full opacity-70 hover:opacity-100 transition-opacity marquee-container">
                        <div className="marquee-content">
                            {activeClientsData.map((client, index) => (
                                <Link 
                                    to="/clients" 
                                    key={`group1-${index}`} 
                                    className="flex items-center gap-4 px-6 md:px-10 mx-2 grayscale hover:grayscale-0 transition-all duration-300"
                                >
                                    <img src={client.logo} alt={client.name} className="h-16 w-auto object-contain" />
                                    <span className="font-mono text-base font-bold text-primary">{client.name}</span>
                                </Link>
                            ))}
                        </div>
                        <div className="marquee-content" aria-hidden="true">
                            {activeClientsData.map((client, index) => (
                                <Link 
                                    to="/clients" 
                                    key={`group2-${index}`} 
                                    className="flex items-center gap-2 px-6 md:px-10 mx-2 grayscale hover:grayscale-0 transition-all duration-300"
                                    tabIndex={-1}
                                >
                                    <img src={client.logo} alt={client.name} className="h-16 w-auto object-contain" />
                                    <span className="font-mono text-base font-bold text-primary">{client.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="max-w-container-max mx-auto text-center px-margin-desktop">
                        <p className="text-secondary text-sm">No clients to display.</p>
                    </div>
                )}
            </section>

            {/* Contact & Consultation Section */}
            <section className="py-20 bg-surface px-margin-desktop w-full max-w-container-max mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 uppercase tracking-tight">
                            {getSetting('contact_section_title')}
                        </h2>
                        <p className="text-secondary text-sm mb-8 max-w-lg leading-relaxed">
                            {getSetting('contact_section_description')}
                        </p>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-tertiary mt-1">location_on</span>
                                <div>
                                    <h4 className="text-sm font-bold text-primary uppercase font-mono">Headquarters</h4>
                                    <p className="text-xs text-on-surface-variant leading-relaxed mt-1">
                                        {getSetting('contact_headquarters_address').split('\n').map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-tertiary mt-1">call</span>
                                <div>
                                    <h4 className="text-sm font-bold text-primary uppercase font-mono">Support Support</h4>
                                    <p className="text-xs text-on-surface-variant leading-relaxed mt-1">
                                        {getSetting('contact_support_phone')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full bg-surface-container-lowest p-8 rounded-lg border border-outline-variant/30 shadow-sm">
                        {isSubmitted && (
                            <div className="mb-6 p-4 bg-[#cfe6f2] border border-[#b4cad6] rounded-lg text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                <span className="material-symbols-outlined">check_circle</span> Request Transmitted Successfully
                            </div>
                        )}
                        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-mono font-bold text-primary mb-1 uppercase tracking-wider">Full Name</label>
                                    <input required className="w-full rounded border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-sm px-4 py-2" placeholder="John Doe" type="text" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-mono font-bold text-primary mb-1 uppercase tracking-wider">Email Address</label>
                                    <input required className="w-full rounded border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-sm px-4 py-2" placeholder="john@company.com" type="email" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-mono font-bold text-primary mb-1 uppercase tracking-wider">Service Interest</label>
                                <select required className="w-full rounded border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-sm px-4 py-2">
                                    <option>Fire Safety &amp; MEP</option>
                                    <option>Structural Systems</option>
                                    <option>Robotics &amp; Automation</option>
                                    <option>General Consultation</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[10px] font-mono font-bold text-primary mb-1 uppercase tracking-wider">Project Details</label>
                                <textarea required className="w-full rounded border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-sm px-4 py-2" placeholder="Describe your operational needs..." rows="4"></textarea>
                            </div>
                            <button className="bg-tertiary text-white font-mono font-bold text-xs px-6 py-3 rounded uppercase tracking-wider hover:bg-opacity-90 transition-colors mt-2" type="submit">
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary relative overflow-hidden w-full">
                <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <div className="text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 uppercase tracking-tight">
                            {getSetting('cta_section_title')}
                        </h2>
                        <p className="text-on-primary-container text-xs md:text-sm max-w-xl leading-relaxed">
                            {getSetting('cta_section_subtitle')}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Link to={getSetting('cta_primary_btn_link')} className="bg-tertiary text-white px-6 py-3 rounded font-mono font-bold text-xs hover:bg-opacity-90 transition-colors uppercase tracking-wider">
                            {getSetting('cta_primary_btn_text')}
                        </Link>
                        <Link to={getSetting('cta_secondary_btn_link')} className="border border-on-primary-container text-white px-6 py-3 rounded font-mono font-bold text-xs hover:bg-white/10 transition-colors uppercase tracking-wider">
                            {getSetting('cta_secondary_btn_text')}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
