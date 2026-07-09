import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            e.target.reset();
        }, 3000);
    };

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative w-full h-[600px] flex items-center justify-center">
                <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJ9042T9W5hW6Q2itLxV_f2FRp-hmhNZ8FHXxdlsE94rXExdO8oNa0b5jjZe12UZFOjGNBb6lg3nHCHO3QsfUPAjy0eJt3K0uuyqJonzGpPirh7flFyRb1bdcNFOSse7omgEmoyH6nYimUXFp1jIdOU7TH8T5o1CeCwjchhQmoKvz5jEgcRiuPsQIDEQJajL5PLDORMKfplIE28eazhJ__YRVfnYmsykQ50N7_OHtX8WR7jj01kMfI')" }}
                ></div>
                <div className="absolute inset-0 bg-primary opacity-65"></div>
                <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-desktop text-center flex flex-col items-center gap-6">
                    <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl max-w-4xl uppercase tracking-tight">
                        Industrial Fire Safety &amp; Engineering Management
                    </h1>
                    <p className="text-base md:text-lg text-surface-container-high max-w-2xl leading-relaxed">
                        Precision-engineered fire protection, compliance, and industrial maintenance for high-stakes environments.
                    </p>
                    <Link to="/services" className="bg-tertiary text-white text-xs font-mono font-bold px-8 py-4 rounded uppercase tracking-widest hover:bg-opacity-90 transition-colors mt-4">
                        EXPLORE SERVICES
                    </Link>
                </div>
            </section>

            {/* Core Engineering Capabilities Services Section */}
            <section className="py-20 px-margin-desktop w-full max-w-container-max mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 uppercase tracking-tight">Core Engineering Capabilities</h2>
                    <p className="text-secondary text-sm max-w-3xl mx-auto leading-relaxed">Engineered for absolute reliability in the most demanding industrial sectors.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Service 1 */}
                    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg overflow-hidden group hover:border-primary transition-colors duration-300">
                        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCg0x0pxkxgg0rtFFIO8i69_V8VFWIbgw0QqilVEdA3jX4IXTZ1E7iPvtuxuB3z6sXBrpt9U7zRlrCYnn3AxOBvBHSpRGsZt_Mk8DesaccDqjNZa_DiDPQtWhHmjlMP1fmyvWkAFlO8qjebSmY93JMxn-80EMDGHFt9Ng2OaKUM-7gcoRk6XxcDr1Ytu6mIzkZf45OF2s2MKoOrNFbqu5wyJ3LGBpiUmfeYE6IAqJvptq5zrUkIykc9')" }}></div>
                        <div className="p-6 flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-primary">
                                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>water_pump</span>
                                <h3 className="text-base font-bold uppercase tracking-tight">Fire Pump Installation</h3>
                            </div>
                            <p className="text-xs text-on-surface-variant leading-relaxed">
                                Design, installation, testing, and maintenance of high-capacity fire pump systems.
                            </p>
                        </div>
                    </div>
                    {/* Service 2 */}
                    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg overflow-hidden group hover:border-primary transition-colors duration-300">
                        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8TMNnh_z6WYJ9BXosvX7O3z4QkdY2nvc0lCaDRwFf1nHXFEMR3cleXU7Bg3_AGNILdNp_DMUhqpjrGBNLlhEM9u7SF3X2_Yc-h-agp_brp65Hk9rRie2STvKdK8YbPqc8KGhkE9hDaNXrof2DW3HN0tvolGCDXL8_KR8VrHC3xiC9Xv3Nq1NIHM8uIAi8UuwpQ79QiYesouoD3sFSBnqhoIMJJ00qj6oUg-71-yc9_9o3LngpOViy')" }}></div>
                        <div className="p-6 flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-primary">
                                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>detector_smoke</span>
                                <h3 className="text-base font-bold uppercase tracking-tight">Building Fire Safety</h3>
                            </div>
                            <p className="text-xs text-on-surface-variant leading-relaxed">
                                Comprehensive protection including alarms, extinguishers, and safety compliance audits.
                            </p>
                        </div>
                    </div>
                    {/* Service 3 */}
                    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg overflow-hidden group hover:border-primary transition-colors duration-300">
                        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCo0iBq4U9Ob2bakYJjedylfY3JyshBX-dcna1FGgcEc9X-Rdq2TCHh4OJi_s6BfJjolKnFK9NJmx0w8etv8aQydgoYpAHXPK_yE26lS8d4t98TGtegaIUA13e-OIs8GCKJeD0TN7Eeck8IuSwS2pPLgvHaWbQwq6f1eXm1bk3DURTW3Rsc62yOGBbWRnRLvXozeI7rqOqbsqccG-IwSiwsCpj5GcQSRuxXdIB83U0-RViYeE8y17IL')" }}></div>
                        <div className="p-6 flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-primary">
                                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>engineering</span>
                                <h3 className="text-base font-bold uppercase tracking-tight">Industrial Engineering</h3>
                            </div>
                            <p className="text-xs text-on-surface-variant leading-relaxed">
                                MEP engineering, mechanical installation, and full-scale industrial project management.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-surface-container py-20 px-margin-desktop border-y border-outline-variant/30 w-full">
                <div className="w-full max-w-container-max mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-16 text-center uppercase tracking-tight">Operational Methodology</h2>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6 relative">
                        {/* Step 1 */}
                        <div className="flex-1 flex flex-col items-center text-center relative z-10">
                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-mono text-xs font-bold mb-3 border-2 border-surface-container">01</div>
                            <h4 className="text-sm font-bold text-on-surface mb-1 uppercase tracking-wider">Consultation</h4>
                            <p className="text-xs text-secondary leading-relaxed">Risk assessment &amp; site analysis</p>
                        </div>
                        {/* Step 2 */}
                        <div className="flex-1 flex flex-col items-center text-center relative z-10">
                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-mono text-xs font-bold mb-3 border-2 border-surface-container">02</div>
                            <h4 className="text-sm font-bold text-on-surface mb-1 uppercase tracking-wider">Design</h4>
                            <p className="text-xs text-secondary leading-relaxed">CAD modeling &amp; system engineering</p>
                        </div>
                        {/* Step 3 */}
                        <div className="flex-1 flex flex-col items-center text-center relative z-10">
                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-mono text-xs font-bold mb-3 border-2 border-surface-container">03</div>
                            <h4 className="text-sm font-bold text-on-surface mb-1 uppercase tracking-wider">Installation</h4>
                            <p className="text-xs text-secondary leading-relaxed">Precision mechanical deployment</p>
                        </div>
                        {/* Step 4 */}
                        <div className="flex-1 flex flex-col items-center text-center relative z-10">
                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-mono text-xs font-bold mb-3 border-2 border-surface-container">04</div>
                            <h4 className="text-sm font-bold text-on-surface mb-1 uppercase tracking-wider">Inspection</h4>
                            <p className="text-xs text-secondary leading-relaxed">Rigorous safety compliance auditing</p>
                        </div>
                        {/* Step 5 */}
                        <div className="flex-1 flex flex-col items-center text-center relative z-10">
                            <div className="w-12 h-12 rounded-full bg-tertiary text-white flex items-center justify-center font-mono text-xs font-bold mb-3 border-2 border-surface-container shadow-md">05</div>
                            <h4 className="text-sm font-bold text-on-surface mb-1 uppercase tracking-wider">Maintenance</h4>
                            <p className="text-xs text-secondary leading-relaxed">Ongoing 24/7 technical oversight</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Leadership Section */}
            <section className="py-20 bg-background px-margin-desktop w-full max-w-container-max mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-tight">Strategic Leadership</h2>
                    <p className="text-secondary text-sm mt-3 max-w-2xl mx-auto leading-relaxed">Providing visionary guidance for complex industrial and structural challenges globally.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                    {/* CEO Card */}
                    <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/30 flex flex-col md:flex-row gap-6 items-center md:items-start group hover:border-primary transition-all duration-300">
                        <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 border border-outline-variant/30 group-hover:border-primary transition-colors">
                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" alt="David Richardson" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdqOTYnupjt5nefsPJfgjHM5HMSix_-gvu2_5cythhmuUcLI2PfYVTXEqEZoZ1zb_BJZFAqoKaO2V0Qm4QtjwKvcQwn1kVOunWU27xyjnDCZ1wxDwRNnBYPoQKmoaWg5knYpTELkqiYZPebgLV8ILc_SWCdQGmp7eaKshtYnYqq6CUgfmd6b1qfwjuahdRa5B3RSc9AR0An4EpvfDAh5TPWyEcrXzVj2G4N-irBFJVrqv46azTwU5Xdg" />
                        </div>
                        <div>
                            <span className="material-symbols-outlined text-primary text-3xl mb-2 opacity-50">format_quote</span>
                            <p className="text-xs italic text-on-surface-variant mb-4 leading-relaxed">
                                "Our mission is simple: to provide the structural foundation upon which global industries can thrive. Precision is not just a goal; it is our standard."
                            </p>
                            <div>
                                <h4 className="text-sm font-bold text-primary uppercase tracking-tight">David Richardson</h4>
                                <p className="text-[10px] text-tertiary uppercase tracking-widest font-mono mt-1 font-bold">Chief Executive Officer</p>
                            </div>
                        </div>
                    </div>
                    {/* Advisor Card */}
                    <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/30 flex flex-col md:flex-row gap-6 items-center md:items-start group hover:border-primary transition-all duration-300">
                        <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 border border-outline-variant/30 group-hover:border-primary transition-colors">
                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" alt="Dr. Elena Vance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6BlPBCRMJPlatpTIEpHMp_Qin1P514yu10fGxWT8RCgzgoxzfNiAixjZyyzruYkGHVQ5RjH0OBEc_KxD_hB3qcSwgxBXfCTdz75xqcQlWtmJnDVoVu7OJ9_8DQHmlEU1UMzGztma2yOZJNdmDHaGbntYYSAK2eccHc0A0NiIuJRImByMag29_G6K1EVot-b3ZHvp7O_PPDZ8Lu7dPLc2J8a7Q4Qw5LAllNFz5l83u3GMtrCZy6h2wdw" />
                        </div>
                        <div>
                            <span className="material-symbols-outlined text-primary text-3xl mb-2 opacity-50">format_quote</span>
                            <p className="text-xs italic text-on-surface-variant mb-4 leading-relaxed">
                                "The complexity of modern engineering requires a blend of traditional expertise and digital foresight. We provide that equilibrium."
                            </p>
                            <div>
                                <h4 className="text-sm font-bold text-primary uppercase tracking-tight">Dr. Elena Vance</h4>
                                <p className="text-[10px] text-tertiary uppercase tracking-widest font-mono mt-1 font-bold">Senior Strategic Advisor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Competencies Highlight */}
            <section className="py-20 bg-surface-container px-margin-desktop w-full border-y border-outline-variant/30">
                <div className="max-w-container-max mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-tight">Core Competencies</h2>
                            <p className="text-secondary text-sm mt-2 max-w-xl leading-relaxed">Comprehensive engineering specialized for the most demanding industrial environments.</p>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Card 1 - Fire Safety Focus */}
                        <div className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden group hover:shadow-md border border-outline-variant/30">
                            <div className="h-48 overflow-hidden relative">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Advanced Fire Safety Systems" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2K5DCzWYlO07uOYDok6Z-dcMMzyG-kVsbnogZ30SHtmVodPWrDys0vB8s5ILkFdnBbnIfPrgj9-osvMp5jpQyB-bmaE44XAiJhZdCwp6EYjKlMqrmT7c-sfj9RaB-dGSX5vDEo_pO2uqQLYApNb840hETNczsKSHe4g0AzEnd6Qf5Drx0xfoigGsjwFBuM15NK9st-lYEbNiZRS68CLYi60ZS4zHIpAmn89gWeAKB37gRzVouecvT7w" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-base font-bold mb-4 text-primary uppercase tracking-tight">Fire Safety &amp; MEP</h3>
                                <ul className="space-y-2 mb-6 font-mono text-xs text-on-surface-variant">
                                    <li className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                                        Advanced Suppression
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                                        NFPA Compliance Audits
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>settings_input_component</span>
                                        Fire Load Management
                                    </li>
                                </ul>
                                <Link to="/services" className="w-full py-3 rounded bg-tertiary text-white font-mono font-bold text-xs hover:bg-opacity-90 transition-all flex justify-center items-center gap-1 uppercase tracking-wider">
                                    Critical Spec <span className="material-symbols-outlined text-sm">bolt</span>
                                </Link>
                            </div>
                        </div>
                        {/* Service Card 2 */}
                        <div className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden group hover:shadow-md border border-outline-variant/30">
                            <div className="h-48 overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Industrial Structural Engineering" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMVvYGqkxmARyUhVBYUegQTjy1kHkfLD-6pA155F0A41_aBUXxMT0gllzEo0V-QIxhjX-FVahEGRl2Zl0_SAFzozf4VBiBcli6hz6v-zTW6qnkplLFTBf7YqXPHH5IdvTeZHEHsL2n6qeAMsmxcRMSN1PJPJWUz30rdIsCsC-KNJGvkJD1KNvuyyNBFyTWcxUh8HJAdxeqACMQ2KpWhnwxmdjE18EJWdun_z_ADbdtmdCu-ooWPTOf-A" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-base font-bold mb-4 text-primary uppercase tracking-tight">Structural Systems</h3>
                                <ul className="space-y-2 mb-6 font-mono text-xs text-on-surface-variant">
                                    <li className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                                        Seismic Load Analysis
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
                                        Steel Optimization
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>foundation</span>
                                        Deep Foundation Design
                                    </li>
                                </ul>
                                <Link to="/services" className="w-full py-3 rounded border border-primary text-primary font-mono font-bold text-xs hover:bg-surface-container transition-all flex justify-center items-center gap-1 uppercase tracking-wider">
                                    View Details <span className="material-symbols-outlined text-sm">open_in_new</span>
                                </Link>
                            </div>
                        </div>
                        {/* Service Card 3 */}
                        <div className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden group hover:shadow-md border border-outline-variant/30">
                            <div className="h-48 overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Industrial Automation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-kiJZgpt5bmFb5IQlPoyomn5YImZS06iSjadtCLU_WF2l3BlxszFEeJt-lE62iANDJfOcODa5aMCltdX5MjNX8eNNxPzent96l66MChTGi7LJZm7sqOOYpxsDVf0gU5yJaP3Dj5leVzL3tSEw3-Eoaz6ztMIO0LISR9zdw8qHdAFtdmimLk_DTitWiYit31F-_aJjLyhI_6YNJVsaElnBJYhBrQxcDw8MnmVKNDMm4KniXxzAhKnB2Q" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-base font-bold mb-4 text-primary uppercase tracking-tight">Robotics &amp; Automation</h3>
                                <ul className="space-y-2 mb-6 font-mono text-xs text-on-surface-variant">
                                    <li className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
                                        PLC/SCADA Integration
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
                                        Robotic Workflow Design
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
                                        Process Optimization
                                    </li>
                                </ul>
                                <Link to="/services" className="w-full py-3 rounded border border-primary text-primary font-mono font-bold text-xs hover:bg-surface-container transition-all flex justify-center items-center gap-1 uppercase tracking-wider">
                                    View Details <span className="material-symbols-outlined text-sm">open_in_new</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-20 bg-surface px-margin-desktop w-full max-w-container-max mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 uppercase tracking-tight">Featured Projects</h2>
                    <p className="text-secondary text-sm max-w-3xl mx-auto leading-relaxed">Demonstrated excellence in large-scale industrial deployments.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Project 1 */}
                    <div className="bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant/30 group hover:shadow-lg transition-all duration-300">
                        <div className="h-64 overflow-hidden relative">
                            <img alt="Industrial Plant Upgrade" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiQWpv_p1aKDB5L30gax4kmYeHVcmoem0ojGb8FtL8ekHEYNj6pvcUHul3vjwoCFvqjMke7gwjveP9xHrxXRbSA1E-LdOVgN8Rl_K3JiBE0tWdQfX86UDURnLG7lYWNw6XxqiAOqjOe0LCQ1zxQkSurK8gw6lgBV_lZrZaL6rhDCA8VkYr4bXnrpM7ZCDBGJo6qnswyN6-9f5uJ4WyScN3BsEDuybQBRdB3xjopadZOAhoCSFK6muG" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-base font-bold text-primary mb-2 uppercase tracking-tight">Petrochemical Facility Upgrade</h3>
                            <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">Comprehensive overhaul of fire suppression and MEP systems for a 500,000 sq ft facility.</p>
                            <Link className="inline-flex items-center gap-1 text-tertiary font-mono text-[11px] font-bold hover:text-primary transition-colors uppercase tracking-wider" to="/portfolio">
                                Read Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant/30 group hover:shadow-lg transition-all duration-300">
                        <div className="h-64 overflow-hidden relative">
                            <img alt="Robotics Automation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYSmVPZna91lP23HEHLg0N3b1_fhKs5jzK7vwSQwp01S3Q1SN0TjuDdDDVvouGKz3zBmKHyZzqhGMj8P0koc_UUKX5GGaxHDp3mVwqyoqtF5zZyMSa9HY2r1ASu1XZjAqoc8fX1A2IUmS3Z7n_Kg_ohFcVzjUXeb7sOKhbT0qgB4EJsIbMKxcWgy5MABVyD3R5zA_PY3c9_qNnhiLXPzhxLDHa7SaTepFypdlQZQIuBFQuNHI63HDS" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-base font-bold text-primary mb-2 uppercase tracking-tight">Automotive Assembly Line Automation</h3>
                            <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">Integration of advanced robotics and structural support systems to increase throughput by 40%.</p>
                            <Link className="inline-flex items-center gap-1 text-tertiary font-mono text-[11px] font-bold hover:text-primary transition-colors uppercase tracking-wider" to="/portfolio">
                                Read Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Directory Section */}
            <section className="py-16 bg-surface-container px-margin-desktop w-full border-y border-outline-variant/30">
                <div className="max-w-container-max mx-auto text-center">
                    <h3 className="text-[11px] font-mono font-bold text-secondary uppercase tracking-widest mb-8">Trusted by Global Industry Leaders</h3>
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale font-mono text-sm font-bold text-primary">
                        <span>AERO-DYNAMICS</span>
                        <span>GLOBAL STEEL</span>
                        <span>NEXUS PETRO</span>
                        <span>TITAN MOTORS</span>
                        <span>HELIOS ENERGY</span>
                    </div>
                </div>
            </section>

            {/* Contact & Consultation Section */}
            <section className="py-20 bg-surface px-margin-desktop w-full max-w-container-max mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 uppercase tracking-tight">Request a Consultation</h2>
                        <p className="text-secondary text-sm mb-8 max-w-lg leading-relaxed">Partner with our elite engineering team to secure and optimize your industrial operations. Fill out the form below to initiate a preliminary project assessment.</p>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-tertiary mt-1">location_on</span>
                                <div>
                                    <h4 className="text-sm font-bold text-primary uppercase font-mono">Headquarters</h4>
                                    <p className="text-xs text-on-surface-variant leading-relaxed mt-1">400 Industrial Way, Suite 200<br />Detroit, MI 48201</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-tertiary mt-1">call</span>
                                <div>
                                    <h4 className="text-sm font-bold text-primary uppercase font-mono">Support Support</h4>
                                    <p className="text-xs text-on-surface-variant leading-relaxed mt-1">1-800-TITAN-PRECISION</p>
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
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 uppercase tracking-tight">READY FOR TITAN PRECISION?</h2>
                        <p className="text-on-primary-container text-xs md:text-sm max-w-xl leading-relaxed">Consult with our elite engineering team for high-stakes industrial solutions and structural integrity audits.</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/contact" className="bg-tertiary text-white px-6 py-3 rounded font-mono font-bold text-xs hover:bg-opacity-90 transition-colors uppercase tracking-wider">Connect with Experts</Link>
                        <Link to="/contact" className="border border-on-primary-container text-white px-6 py-3 rounded font-mono font-bold text-xs hover:bg-white/10 transition-colors uppercase tracking-wider">Project Tender</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
