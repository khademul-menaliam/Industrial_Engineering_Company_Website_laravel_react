import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ServicesManager() {
    const [services, setServices] = useState([]);
    const [settings, setSettings] = useState({
        services_intro_title: '',
        services_intro_heading: '',
        services_intro_description: '',
        zero_downtime_title: '',
        zero_downtime_description: '',
        zero_downtime_link: '',
        services_cta_title: '',
        services_cta_description: ''
    });
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('settings'); // settings, consulting, dsi, maintenance
    const [showModal, setShowModal] = useState(false);
    const [currentService, setCurrentService] = useState(null); // null means adding new

    // Form states
    const [formTitle, setFormTitle] = useState('');
    const [formSlug, setFormSlug] = useState('');
    const [formCategory, setFormCategory] = useState('consulting');
    const [formShortDesc, setFormShortDesc] = useState('');
    const [formIcon, setFormIcon] = useState('settings');
    const [formTag, setFormTag] = useState('');
    const [formIsFeatured, setFormIsFeatured] = useState(false);
    const [formIsActive, setFormIsActive] = useState(true);
    const [formSortOrder, setFormSortOrder] = useState(0);
    
    // File inputs
    const [formImageFile, setFormImageFile] = useState(null);
    const [formHeroImageFile, setFormHeroImageFile] = useState(null);
    const [formImageUrl, setFormImageUrl] = useState('');
    const [formHeroImageUrl, setFormHeroImageUrl] = useState('');

    // Detail fields
    const [formDetailTitle, setFormDetailTitle] = useState('');
    const [formDetailDesc, setFormDetailDesc] = useState('');
    const [formBadges, setFormBadges] = useState('');
    const [formSpecs, setFormSpecs] = useState([]); // [{label:'', value:'', icon:''}]
    const [formMetrics, setFormMetrics] = useState([]); // [{label:'', percentage:50}]

    const [savingSettings, setSavingSettings] = useState(false);
    const [savingService, setSavingService] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setLoading(true);
        axios.get('/api/admin/services')
            .then(res => {
                if (res.data.success) {
                    setServices(res.data.services || []);
                    setSettings(prev => ({
                        ...prev,
                        ...(res.data.settings || {})
                    }));
                }
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading admin services:', err);
                setLoading(false);
            });
    };

    const handleSaveSettings = (e) => {
        e.preventDefault();
        setSavingSettings(true);
        axios.post('/api/admin/services/settings', { settings })
            .then(res => {
                alert('General Settings updated successfully.');
                setSavingSettings(false);
            })
            .catch(err => {
                console.error(err);
                alert('Failed to save settings.');
                setSavingSettings(false);
            });
    };

    const handleOpenAddModal = () => {
        setCurrentService(null);
        setFormTitle('');
        setFormSlug('');
        setFormCategory(activeTab === 'settings' ? 'consulting' : activeTab);
        setFormShortDesc('');
        setFormIcon('settings');
        setFormTag('');
        setFormIsFeatured(false);
        setFormIsActive(true);
        setFormSortOrder(services.length + 1);
        
        setFormImageFile(null);
        setFormHeroImageFile(null);
        setFormImageUrl('');
        setFormHeroImageUrl('');

        setFormDetailTitle('');
        setFormDetailDesc('');
        setFormBadges('');
        setFormSpecs([]);
        setFormMetrics([]);
        
        setShowModal(true);
    };

    const handleOpenEditModal = (service) => {
        setCurrentService(service);
        setFormTitle(service.title || '');
        setFormSlug(service.slug || '');
        setFormCategory(service.category || 'consulting');
        setFormShortDesc(service.short_description || '');
        setFormIcon(service.icon || 'settings');
        setFormTag(service.tag || '');
        setFormIsFeatured(!!service.is_featured);
        setFormIsActive(!!service.is_active);
        setFormSortOrder(service.sort_order || 0);
        
        setFormImageFile(null);
        setFormHeroImageFile(null);
        setFormImageUrl(service.image || '');
        setFormHeroImageUrl(service.hero_image || '');

        setFormDetailTitle(service.detail_title || '');
        setFormDetailDesc(service.detail_description || '');
        setFormBadges(service.badges || '');
        setFormSpecs(service.technical_specs || []);
        setFormMetrics(service.metrics || []);

        setShowModal(true);
    };

    const handleAddSpec = () => {
        setFormSpecs([...formSpecs, { label: '', value: '', icon: 'verified_user' }]);
    };

    const handleRemoveSpec = (idx) => {
        setFormSpecs(formSpecs.filter((_, i) => i !== idx));
    };

    const handleSpecChange = (idx, field, val) => {
        const updated = [...formSpecs];
        updated[idx][field] = val;
        setFormSpecs(updated);
    };

    const handleAddMetric = () => {
        setFormMetrics([...formMetrics, { label: '', percentage: 100 }]);
    };

    const handleRemoveMetric = (idx) => {
        setFormMetrics(formMetrics.filter((_, i) => i !== idx));
    };

    const handleMetricChange = (idx, field, val) => {
        const updated = [...formMetrics];
        updated[idx][field] = val;
        setFormMetrics(updated);
    };

    const handleSaveService = (e) => {
        e.preventDefault();
        setSavingService(true);

        const formData = new FormData();
        formData.append('category', formCategory);
        formData.append('title', formTitle);
        formData.append('slug', formSlug);
        formData.append('short_description', formShortDesc);
        formData.append('icon', formIcon);
        formData.append('tag', formTag);
        formData.append('is_featured', formIsFeatured ? '1' : '0');
        formData.append('is_active', formIsActive ? '1' : '0');
        formData.append('sort_order', formSortOrder);

        if (formImageFile) {
            formData.append('image', formImageFile);
        } else {
            formData.append('image_url', formImageUrl);
        }

        if (formHeroImageFile) {
            formData.append('hero_image', formHeroImageFile);
        } else {
            formData.append('hero_image_url', formHeroImageUrl);
        }

        formData.append('detail_title', formDetailTitle || formTitle);
        formData.append('detail_description', formDetailDesc);
        formData.append('badges', formBadges);
        formData.append('technical_specs', JSON.stringify(formSpecs));
        formData.append('metrics', JSON.stringify(formMetrics));

        const endpoint = currentService 
            ? `/api/admin/services/${currentService.id}` 
            : '/api/admin/services';

        axios.post(endpoint, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => {
                alert(currentService ? 'Service updated successfully.' : 'Service created successfully.');
                setShowModal(false);
                setSavingService(false);
                fetchData();
            })
            .catch(err => {
                console.error(err);
                alert(err.response?.data?.message || 'Failed to save service profile.');
                setSavingService(false);
            });
    };

    const handleDeleteService = (id) => {
        if (!confirm('Are you sure you want to delete this service profile? This action is permanent.')) return;

        axios.delete(`/api/admin/services/${id}`)
            .then(res => {
                alert('Service profile deleted successfully.');
                fetchData();
            })
            .catch(err => {
                console.error(err);
                alert('Failed to delete service profile.');
            });
    };

    const listByCategory = (cat) => services.filter(s => s.category === cat);

    const categoriesList = ['consulting', 'dsi', 'maintenance'];
    const tabHeaders = {
        settings: 'General settings',
        consulting: '01. Consulting',
        dsi: '02. Projects (DSI)',
        maintenance: '03. Maintenance'
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <div className="flex flex-col items-center gap-3">
                    <span className="material-symbols-outlined text-4xl text-sky-500 animate-spin">
                        progress_activity
                    </span>
                    <span className="text-sm text-on-surface-variant font-mono">Retrieving operational tables...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Tab Navigation */}
            <div className="flex border-b border-outline-variant/30 gap-2 overflow-x-auto pb-px">
                {Object.keys(tabHeaders).map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-3.5 text-xs font-bold uppercase tracking-widest border-b-2 transition-all ${
                            activeTab === tab 
                                ? 'border-sky-500 text-sky-400 bg-sky-950/20' 
                                : 'border-transparent text-on-surface-variant hover:text-white hover:bg-surface-container'
                        }`}
                    >
                        {tabHeaders[tab]}
                    </button>
                ))}
            </div>

            {/* TAB CONTENT: GENERAL SETTINGS */}
            {activeTab === 'settings' && (
                <form onSubmit={handleSaveSettings} className="bg-surface border border-outline-variant/30 rounded-xl p-8 space-y-6 max-w-4xl shadow-xl">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-sky-400 font-mono border-b border-outline-variant/30 pb-3 mb-6">
                        Services Page settings
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Intro Tag/Title</label>
                            <input 
                                type="text"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.services_intro_title || ''}
                                onChange={e => setSettings({ ...settings, services_intro_title: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Intro Heading</label>
                            <input 
                                type="text"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.services_intro_heading || ''}
                                onChange={e => setSettings({ ...settings, services_intro_heading: e.target.value })}
                            />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Intro Description</label>
                            <textarea 
                                rows="3"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg p-4 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.services_intro_description || ''}
                                onChange={e => setSettings({ ...settings, services_intro_description: e.target.value })}
                            />
                        </div>
                    </div>

                    <h3 className="text-sm font-bold uppercase tracking-widest text-sky-400 font-mono border-b border-outline-variant/30 pb-3 pt-6 mb-6">
                        Maintenance Side Panel Settings
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Promo Title</label>
                            <input 
                                type="text"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.zero_downtime_title || ''}
                                onChange={e => setSettings({ ...settings, zero_downtime_title: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Action Button Link</label>
                            <input 
                                type="text"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.zero_downtime_link || ''}
                                onChange={e => setSettings({ ...settings, zero_downtime_link: e.target.value })}
                            />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Promo Description</label>
                            <textarea 
                                rows="3"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg p-4 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.zero_downtime_description || ''}
                                onChange={e => setSettings({ ...settings, zero_downtime_description: e.target.value })}
                            />
                        </div>
                    </div>

                    <h3 className="text-sm font-bold uppercase tracking-widest text-sky-400 font-mono border-b border-outline-variant/30 pb-3 pt-6 mb-6">
                        Call To Action (CTA) Section settings
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">CTA Heading</label>
                            <input 
                                type="text"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.services_cta_title || ''}
                                onChange={e => setSettings({ ...settings, services_cta_title: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">CTA Description</label>
                            <input 
                                type="text"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.services_cta_description || ''}
                                onChange={e => setSettings({ ...settings, services_cta_description: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="pt-4 border-t border-outline-variant/30 flex justify-end">
                        <button
                            type="submit"
                            disabled={savingSettings}
                            className="bg-sky-500 hover:brightness-110 text-white px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 shadow-lg disabled:opacity-50 transition-all"
                        >
                            {savingSettings ? 'Saving Settings...' : 'Save General Config'}
                        </button>
                    </div>
                </form>
            )}

            {/* TAB CONTENT: SERVICES CRUD LISTS */}
            {categoriesList.includes(activeTab) && (
                <div className="space-y-6">
                    <div className="flex justify-between items-center bg-surface p-4 border border-outline-variant/30 rounded-lg">
                        <span className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant font-mono">
                            Total Loaded Profiles: {listByCategory(activeTab).length}
                        </span>
                        <button
                            onClick={handleOpenAddModal}
                            className="bg-sky-500 hover:brightness-110 text-white px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 transition-all shadow-md"
                        >
                            <span className="material-symbols-outlined text-sm">add</span> Create Service Profile
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {listByCategory(activeTab).map(service => (
                            <div key={service.id} className="bg-surface border border-outline-variant/30 rounded-xl overflow-hidden flex flex-col justify-between shadow-lg">
                                <div>
                                    <div className="h-40 bg-[#0b1519] relative">
                                        {service.image ? (
                                            <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-80" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-on-surface-variant">
                                                <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                                            </div>
                                        )}
                                        <div className="absolute top-3 left-3 bg-[#0b1519]/90 border border-outline-variant/30 rounded-full w-9 h-9 flex items-center justify-center text-sky-400">
                                            <span className="material-symbols-outlined text-base">{service.icon}</span>
                                        </div>
                                        {service.is_featured && (
                                            <span className="absolute top-3 right-3 bg-red-500 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-6 space-y-3">
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-bold text-white uppercase text-base tracking-tight">{service.title}</h4>
                                            <span className={`text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${service.is_active ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'}`}>
                                                {service.is_active ? 'Active' : 'Inactive'}
                                            </span>
                                        </div>
                                        <p className="text-xs text-on-surface-variant font-mono font-bold">Slug: <span className="text-sky-400">/services/{service.slug}</span></p>
                                        <p className="text-xs text-on-surface-variant line-clamp-3 leading-relaxed">{service.short_description}</p>
                                    </div>
                                </div>
                                <div className="p-6 border-t border-outline-variant/30 flex gap-2">
                                    <button
                                        onClick={() => handleOpenEditModal(service)}
                                        className="flex-grow bg-[#0b1519] border border-outline-variant/30 text-sky-400 hover:text-white hover:bg-sky-950/20 py-2.5 rounded text-xs font-semibold font-mono tracking-wider transition-all flex items-center justify-center gap-1.5"
                                    >
                                        <span className="material-symbols-outlined text-sm">edit</span> Modify Profile
                                    </button>
                                    <button
                                        onClick={() => handleDeleteService(service.id)}
                                        className="bg-red-500/10 border border-red-500/20 hover:bg-red-500 hover:text-white text-red-400 p-2.5 rounded transition-all"
                                        title="Delete Profile"
                                    >
                                        <span className="material-symbols-outlined text-sm">delete</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* FORM MODAL (ADD/EDIT) */}
            {showModal && (
                <div className="fixed inset-0 bg-[#000000]/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
                    <div className="bg-[#111d23] border border-outline-variant/30 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
                        {/* Modal Header */}
                        <div className="h-16 border-b border-outline-variant/30 px-6 flex items-center justify-between sticky top-0 bg-[#111d23] z-10">
                            <h3 className="font-bold text-white uppercase text-sm tracking-widest font-mono">
                                {currentService ? `Modify Profile: ${currentService.title}` : 'Create New Service Profile'}
                            </h3>
                            <button onClick={() => setShowModal(false)} className="text-on-surface-variant hover:text-white transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* Modal Form */}
                        <form onSubmit={handleSaveService} className="p-6 space-y-6 flex-grow">
                            {/* Section 1: Basic Fields */}
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 font-mono border-b border-outline-variant/20 pb-1.5">
                                    Card Specifications
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Service Title</label>
                                        <input 
                                            type="text" required
                                            className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs focus:border-sky-500 focus:outline-none"
                                            value={formTitle}
                                            onChange={e => setFormTitle(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Detail URL Slug</label>
                                        <input 
                                            type="text" placeholder="e.g. fire-protection"
                                            className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs focus:border-sky-500 focus:outline-none"
                                            value={formSlug}
                                            onChange={e => setFormSlug(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Category</label>
                                        <select 
                                            className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs focus:border-sky-500 focus:outline-none"
                                            value={formCategory}
                                            onChange={e => setFormCategory(e.target.value)}
                                        >
                                            <option value="consulting">01. Consulting Services</option>
                                            <option value="dsi">02. Projects (DSI)</option>
                                            <option value="maintenance">03. Maintenance & Lifecycle</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Material Icon Symbol</label>
                                        <input 
                                            type="text" placeholder="e.g. architecture"
                                            className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs focus:border-sky-500 focus:outline-none"
                                            value={formIcon}
                                            onChange={e => setFormIcon(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Asset Tag/Label</label>
                                        <input 
                                            type="text" placeholder="e.g. Tactical Asset"
                                            className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs focus:border-sky-500 focus:outline-none"
                                            value={formTag}
                                            onChange={e => setFormTag(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Sorting Index</label>
                                        <input 
                                            type="number"
                                            className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs focus:border-sky-500 focus:outline-none"
                                            value={formSortOrder}
                                            onChange={e => setFormSortOrder(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Short Card Description</label>
                                    <textarea 
                                        rows="2"
                                        className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-3 text-white text-xs focus:border-sky-500 focus:outline-none"
                                        value={formShortDesc}
                                        onChange={e => setFormShortDesc(e.target.value)}
                                    />
                                </div>
                                <div className="flex gap-6 pt-2">
                                    <label className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            className="rounded bg-[#0b1519] border-outline-variant/30 text-sky-500 focus:ring-sky-500 focus:ring-offset-[#111d23]" 
                                            checked={formIsFeatured}
                                            onChange={e => setFormIsFeatured(e.target.checked)}
                                        />
                                        Featured Item Layout
                                    </label>
                                    <label className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            className="rounded bg-[#0b1519] border-outline-variant/30 text-sky-500 focus:ring-sky-500 focus:ring-offset-[#111d23]" 
                                            checked={formIsActive}
                                            onChange={e => setFormIsActive(e.target.checked)}
                                        />
                                        Profile Active
                                    </label>
                                </div>
                            </div>

                            {/* Section 2: Media Assets */}
                            <div className="space-y-4 pt-4 border-t border-outline-variant/20">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 font-mono border-b border-outline-variant/20 pb-1.5">
                                    Media assets
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Card Thumbnail */}
                                    <div className="space-y-2 bg-[#0b1519] p-4 border border-outline-variant/20 rounded-lg">
                                        <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest font-mono">1. Card Thumbnail</span>
                                        <div className="space-y-2 mt-2">
                                            <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-wider">File Image Upload</label>
                                            <input 
                                                type="file" accept="image/*"
                                                className="w-full text-xs text-on-surface-variant file:bg-sky-500/10 file:border-0 file:text-sky-400 file:px-3 file:py-1.5 file:rounded file:text-xs file:font-semibold file:cursor-pointer"
                                                onChange={e => setFormImageFile(e.target.files[0])}
                                            />
                                            <div className="text-center text-[9px] text-on-surface-variant font-mono uppercase py-1">OR</div>
                                            <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-wider">Image Remote URL</label>
                                            <input 
                                                type="text"
                                                className="w-full bg-[#111d23] border border-outline-variant/30 rounded p-2 text-white text-[11px] focus:border-sky-500 focus:outline-none"
                                                value={formImageUrl}
                                                onChange={e => setFormImageUrl(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Detail Hero Image */}
                                    <div className="space-y-2 bg-[#0b1519] p-4 border border-outline-variant/20 rounded-lg">
                                        <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest font-mono">2. Detail Page Hero Cover</span>
                                        <div className="space-y-2 mt-2">
                                            <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-wider">File Image Upload</label>
                                            <input 
                                                type="file" accept="image/*"
                                                className="w-full text-xs text-on-surface-variant file:bg-sky-500/10 file:border-0 file:text-sky-400 file:px-3 file:py-1.5 file:rounded file:text-xs file:font-semibold file:cursor-pointer"
                                                onChange={e => setFormHeroImageFile(e.target.files[0])}
                                            />
                                            <div className="text-center text-[9px] text-on-surface-variant font-mono uppercase py-1">OR</div>
                                            <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-wider">Image Remote URL</label>
                                            <input 
                                                type="text"
                                                className="w-full bg-[#111d23] border border-outline-variant/30 rounded p-2 text-white text-[11px] focus:border-sky-500 focus:outline-none"
                                                value={formHeroImageUrl}
                                                onChange={e => setFormHeroImageUrl(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Deep Dive Details */}
                            <div className="space-y-4 pt-4 border-t border-outline-variant/20">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 font-mono border-b border-outline-variant/20 pb-1.5">
                                    Deep Dive Profile (Detail Page Details)
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Deep Dive Heading Title</label>
                                        <input 
                                            type="text" placeholder="e.g. Engineering Precision & Redundancy"
                                            className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs focus:border-sky-500 focus:outline-none"
                                            value={formDetailTitle}
                                            onChange={e => setFormDetailTitle(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Details Badges (Comma Separated)</label>
                                        <input 
                                            type="text" placeholder="e.g. Safe Mode Enabled, Dual-Loop Verified"
                                            className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs focus:border-sky-500 focus:outline-none"
                                            value={formBadges}
                                            onChange={e => setFormBadges(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Deep Dive Detailed Paragraph Description</label>
                                    <textarea 
                                        rows="4"
                                        className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-3 text-white text-xs focus:border-sky-500 focus:outline-none"
                                        value={formDetailDesc}
                                        onChange={e => setFormDetailDesc(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Section 4: Specifications List Editor */}
                            <div className="space-y-4 pt-4 border-t border-outline-variant/20">
                                <div className="flex justify-between items-center border-b border-outline-variant/20 pb-1.5">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 font-mono">
                                        Technical Specifications Lists
                                    </h4>
                                    <button 
                                        type="button" 
                                        onClick={handleAddSpec}
                                        className="bg-sky-500/10 border border-sky-500/20 text-sky-400 hover:bg-sky-500 hover:text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider font-mono transition-all"
                                    >
                                        + Add Spec Item
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    {formSpecs.map((spec, idx) => (
                                        <div key={idx} className="flex gap-2 items-center bg-[#0b1519] p-2 rounded border border-outline-variant/10">
                                            <input 
                                                type="text" placeholder="Label (e.g. Standard)" required
                                                className="w-1/3 bg-[#111d23] border border-outline-variant/30 rounded p-2 text-white text-xs focus:outline-none"
                                                value={spec.label}
                                                onChange={e => handleSpecChange(idx, 'label', e.target.value)}
                                            />
                                            <input 
                                                type="text" placeholder="Value (e.g. NFPA 72 Compliance)" required
                                                className="w-1/3 bg-[#111d23] border border-outline-variant/30 rounded p-2 text-white text-xs focus:outline-none"
                                                value={spec.value}
                                                onChange={e => handleSpecChange(idx, 'value', e.target.value)}
                                            />
                                            <input 
                                                type="text" placeholder="Material Icon (e.g. timer)"
                                                className="w-1/4 bg-[#111d23] border border-outline-variant/30 rounded p-2 text-white text-xs focus:outline-none"
                                                value={spec.icon}
                                                onChange={e => handleSpecChange(idx, 'icon', e.target.value)}
                                            />
                                            <button 
                                                type="button" 
                                                onClick={() => handleRemoveSpec(idx)}
                                                className="text-red-400 hover:text-red-500 p-1"
                                            >
                                                <span className="material-symbols-outlined text-base">delete</span>
                                            </button>
                                        </div>
                                    ))}
                                    {formSpecs.length === 0 && (
                                        <div className="text-center py-4 text-xs text-on-surface-variant font-mono uppercase">
                                            No Technical Specifications Configured
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Section 5: Metrics Lists Editor */}
                            <div className="space-y-4 pt-4 border-t border-outline-variant/20">
                                <div className="flex justify-between items-center border-b border-outline-variant/20 pb-1.5">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 font-mono">
                                        Operational Metrics
                                    </h4>
                                    <button 
                                        type="button" 
                                        onClick={handleAddMetric}
                                        className="bg-sky-500/10 border border-sky-500/20 text-sky-400 hover:bg-sky-500 hover:text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider font-mono transition-all"
                                    >
                                        + Add Metric Progress Bar
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    {formMetrics.map((m, idx) => (
                                        <div key={idx} className="flex gap-2 items-center bg-[#0b1519] p-2 rounded border border-outline-variant/10">
                                            <input 
                                                type="text" placeholder="Metric Name (e.g. Detection Accuracy)" required
                                                className="w-2/3 bg-[#111d23] border border-outline-variant/30 rounded p-2 text-white text-xs focus:outline-none"
                                                value={m.label}
                                                onChange={e => handleMetricChange(idx, 'label', e.target.value)}
                                            />
                                            <input 
                                                type="number" min="0" max="100" placeholder="Percentage (%)" required
                                                className="w-1/4 bg-[#111d23] border border-outline-variant/30 rounded p-2 text-white text-xs focus:outline-none"
                                                value={m.percentage}
                                                onChange={e => handleMetricChange(idx, 'percentage', e.target.value)}
                                            />
                                            <button 
                                                type="button" 
                                                onClick={() => handleRemoveMetric(idx)}
                                                className="text-red-400 hover:text-red-500 p-1"
                                            >
                                                <span className="material-symbols-outlined text-base">delete</span>
                                            </button>
                                        </div>
                                    ))}
                                    {formMetrics.length === 0 && (
                                        <div className="text-center py-4 text-xs text-on-surface-variant font-mono uppercase">
                                            No Metrics Configured
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Modal Action Buttons */}
                            <div className="pt-6 border-t border-outline-variant/30 flex justify-end gap-3 sticky bottom-0 bg-[#111d23] py-4">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="bg-transparent border border-outline-variant/80 hover:bg-surface-container text-on-surface-variant hover:text-white px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider font-mono transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={savingService}
                                    className="bg-sky-500 hover:brightness-110 text-white px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 shadow-lg disabled:opacity-50 transition-all"
                                >
                                    {savingService ? 'Saving Profile...' : 'Save Profile'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
