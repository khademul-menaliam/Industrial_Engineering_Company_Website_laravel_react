import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ServicesManager() {
    const [services, setServices] = useState([]);
    const [categories, setCategories] = useState([]);
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
    const [activeTab, setActiveTab] = useState('settings'); // settings, categories, [category_slugs]
    const [showModal, setShowModal] = useState(false);
    const [currentService, setCurrentService] = useState(null);

    // Custom Toast & Confirmation states
    const [toast, setToast] = useState(null); // { message: '', type: 'success'|'error' }
    const [confirmModal, setConfirmModal] = useState({
        isOpen: false,
        title: '',
        message: '',
        onConfirm: null
    });

    // Category Modal States
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [catName, setCatName] = useState('');
    const [catSlug, setCatSlug] = useState('');
    const [catDesc, setCatDesc] = useState('');
    const [catSortOrder, setCatSortOrder] = useState(0);
    const [catIsActive, setCatIsActive] = useState(true);
    const [savingCategory, setSavingCategory] = useState(false);

    // Service Form states
    const [formTitle, setFormTitle] = useState('');
    const [formSlug, setFormSlug] = useState('');
    const [formCategory, setFormCategory] = useState('');
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
    const [formSpecs, setFormSpecs] = useState([]);
    const [formMetrics, setFormMetrics] = useState([]);

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
                    setCategories(res.data.categories || []);
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

    // Helper to trigger custom Toast
    const triggerToast = (message, type = 'success') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 4000);
    };

    // Helper to trigger custom Confirm Modal
    const triggerConfirm = (title, message, onConfirm) => {
        setConfirmModal({
            isOpen: true,
            title,
            message,
            onConfirm: () => {
                onConfirm();
                setConfirmModal({ isOpen: false, title: '', message: '', onConfirm: null });
            }
        });
    };

    const handleSaveSettings = (e) => {
        e.preventDefault();
        setSavingSettings(true);
        axios.post('/api/admin/services/settings', { settings })
            .then(res => {
                triggerToast('General Settings updated successfully.', 'success');
                setSavingSettings(false);
            })
            .catch(err => {
                console.error(err);
                triggerToast('Failed to save settings.', 'error');
                setSavingSettings(false);
            });
    };

    // Category CRUD
    const handleOpenAddCategoryModal = () => {
        setCurrentCategory(null);
        setCatName('');
        setCatSlug('');
        setCatDesc('');
        setCatSortOrder(categories.length + 1);
        setCatIsActive(true);
        setShowCategoryModal(true);
    };

    const handleOpenEditCategoryModal = (cat) => {
        setCurrentCategory(cat);
        setCatName(cat.name || '');
        setCatSlug(cat.slug || '');
        setCatDesc(cat.description || '');
        setCatSortOrder(cat.sort_order || 0);
        setCatIsActive(!!cat.is_active);
        setShowCategoryModal(true);
    };

    const handleSaveCategory = (e) => {
        e.preventDefault();
        setSavingCategory(true);

        const payload = {
            name: catName,
            slug: catSlug,
            description: catDesc,
            sort_order: catSortOrder,
            is_active: catIsActive
        };

        const endpoint = currentCategory 
            ? `/api/admin/services/categories/${currentCategory.id}` 
            : '/api/admin/services/categories';

        axios.post(endpoint, payload)
            .then(res => {
                triggerToast(currentCategory ? 'Category updated successfully.' : 'Category created successfully.', 'success');
                setShowCategoryModal(false);
                setSavingCategory(false);
                fetchData();
            })
            .catch(err => {
                console.error(err);
                triggerToast(err.response?.data?.message || 'Failed to save category.', 'error');
                setSavingCategory(false);
            });
    };

    const handleDeleteCategory = (id) => {
        triggerConfirm(
            'Delete Category',
            'Are you sure you want to delete this category? This operation is permanent and will fail if services are currently assigned to it.',
            () => {
                axios.delete(`/api/admin/services/categories/${id}`)
                    .then(res => {
                        triggerToast('Category deleted successfully.', 'success');
                        fetchData();
                    })
                    .catch(err => {
                        console.error(err);
                        triggerToast(err.response?.data?.message || 'Failed to delete category.', 'error');
                    });
            }
        );
    };

    // Service CRUD
    const handleOpenAddModal = () => {
        setCurrentService(null);
        setFormTitle('');
        setFormSlug('');
        setFormCategory(categories.find(c => c.slug === activeTab)?.slug || categories[0]?.slug || '');
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
        setFormCategory(service.category || '');
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
                triggerToast(currentService ? 'Service updated successfully.' : 'Service created successfully.', 'success');
                setShowModal(false);
                setSavingService(false);
                fetchData();
            })
            .catch(err => {
                console.error(err);
                triggerToast(err.response?.data?.message || 'Failed to save service profile.', 'error');
                setSavingService(false);
            });
    };

    const handleDeleteService = (id) => {
        triggerConfirm(
            'Delete Service Profile',
            'Are you sure you want to delete this service profile? This action is permanent and cannot be undone.',
            () => {
                axios.delete(`/api/admin/services/${id}`)
                    .then(res => {
                        triggerToast('Service profile deleted successfully.', 'success');
                        fetchData();
                    })
                    .catch(err => {
                        console.error(err);
                        triggerToast('Failed to delete service profile.', 'error');
                    });
            }
        );
    };

    const listByCategory = (catSlug) => services.filter(s => s.category === catSlug);

    return (
        <div className="space-y-8 relative">
            {/* Tab Navigation */}
            <div className="flex border-b border-outline-variant/30 gap-2 overflow-x-auto pb-px">
                <button
                    onClick={() => setActiveTab('settings')}
                    className={`px-6 py-3.5 text-xs font-bold uppercase tracking-widest border-b-2 shrink-0 transition-all ${
                        activeTab === 'settings' 
                            ? 'border-sky-500 text-sky-400 bg-sky-950/20' 
                            : 'border-transparent text-on-surface-variant hover:text-white hover:bg-surface-container'
                    }`}
                >
                    General settings
                </button>
                <button
                    onClick={() => setActiveTab('categories')}
                    className={`px-6 py-3.5 text-xs font-bold uppercase tracking-widest border-b-2 shrink-0 transition-all ${
                        activeTab === 'categories' 
                            ? 'border-sky-500 text-sky-400 bg-sky-950/20' 
                            : 'border-transparent text-on-surface-variant hover:text-white hover:bg-surface-container'
                    }`}
                >
                    Categories Manager
                </button>
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveTab(cat.slug)}
                        className={`px-6 py-3.5 text-xs font-bold uppercase tracking-widest border-b-2 shrink-0 transition-all ${
                            activeTab === cat.slug 
                                ? 'border-sky-500 text-sky-400 bg-sky-950/20' 
                                : 'border-transparent text-on-surface-variant hover:text-white hover:bg-surface-container'
                        }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* TAB CONTENT: GENERAL SETTINGS */}
            {activeTab === 'settings' && (
                <form onSubmit={handleSaveSettings} className="bg-surface border border-outline-variant/30 rounded-xl p-4 sm:p-6 md:p-8 space-y-6 max-w-4xl shadow-xl">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-sky-400 font-mono border-b border-outline-variant/30 pb-3 mb-6">
                        Services Page settings
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                        <div className="sm:col-span-2 space-y-2">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                        <div className="sm:col-span-2 space-y-2">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                            className="w-full sm:w-auto bg-sky-500 hover:brightness-110 text-white px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 transition-all"
                        >
                            {savingSettings ? 'Saving Settings...' : 'Save General Config'}
                        </button>
                    </div>
                </form>
            )}

            {/* TAB CONTENT: CATEGORIES MANAGER */}
            {activeTab === 'categories' && (
                <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-surface p-4 border border-outline-variant/30 rounded-lg gap-4">
                        <span className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant font-mono">
                            Total Dynamic Categories: {categories.length}
                        </span>
                        <button
                            onClick={handleOpenAddCategoryModal}
                            className="w-full sm:w-auto bg-sky-500 hover:brightness-110 text-white px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-all shadow-md"
                        >
                            <span className="material-symbols-outlined text-sm">add</span> Create Category
                        </button>
                    </div>

                    <div className="overflow-x-auto bg-surface border border-outline-variant/30 rounded-xl shadow-lg">
                        <table className="w-full text-left text-xs text-on-surface-variant">
                            <thead className="bg-[#0b1519] uppercase tracking-wider font-mono text-[10px] text-sky-400 border-b border-outline-variant/30">
                                <tr>
                                    <th className="px-6 py-4">Category Name</th>
                                    <th className="px-6 py-4">Slug / Route</th>
                                    <th className="px-6 py-4">Sorting</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-outline-variant/10">
                                {categories.map(cat => (
                                    <tr key={cat.id} className="hover:bg-sky-950/5">
                                        <td className="px-6 py-4 font-bold text-white uppercase">{cat.name}</td>
                                        <td className="px-6 py-4 font-mono text-sky-400">{cat.slug}</td>
                                        <td className="px-6 py-4 font-mono">{cat.sort_order}</td>
                                        <td className="px-6 py-4">
                                            <span className={`text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${cat.is_active ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'}`}>
                                                {cat.is_active ? 'Active' : 'Inactive'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right space-x-2">
                                            <button 
                                                onClick={() => handleOpenEditCategoryModal(cat)}
                                                className="text-sky-400 hover:text-white font-semibold font-mono uppercase tracking-wider"
                                            >
                                                Edit
                                            </button>
                                            <button 
                                                onClick={() => handleDeleteCategory(cat.id)}
                                                className="text-red-400 hover:text-red-500 font-semibold font-mono uppercase tracking-wider ml-4"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* TAB CONTENT: SERVICES CRUD LISTS */}
            {activeTab !== 'settings' && activeTab !== 'categories' && (
                <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-surface p-4 border border-outline-variant/30 rounded-lg gap-4">
                        <span className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant font-mono">
                            Category Profiles: {listByCategory(activeTab).length}
                        </span>
                        <button
                            onClick={handleOpenAddModal}
                            className="w-full sm:w-auto bg-sky-500 hover:brightness-110 text-white px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-all shadow-md"
                        >
                            <span className="material-symbols-outlined text-sm">add</span> Create Service Profile
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

            {/* CATEGORY FORM MODAL */}
            {showCategoryModal && (
                <div className="fixed inset-0 bg-[#000000]/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
                    <div className="bg-[#111d23] border border-outline-variant/30 rounded-xl w-full max-w-lg shadow-2xl flex flex-col">
                        <div className="h-16 border-b border-outline-variant/30 px-4 sm:px-6 flex items-center justify-between">
                            <h3 className="font-bold text-white uppercase text-xs sm:text-sm tracking-widest font-mono">
                                {currentCategory ? `Modify Category: ${currentCategory.name}` : 'Create New Category'}
                            </h3>
                            <button onClick={() => setShowCategoryModal(false)} className="text-on-surface-variant hover:text-white transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <form onSubmit={handleSaveCategory} className="p-4 sm:p-6 space-y-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Category Name</label>
                                <input 
                                    type="text" required
                                    className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs focus:border-sky-500 focus:outline-none"
                                    value={catName}
                                    onChange={e => setCatName(e.target.value)}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Slug / Identifier</label>
                                <input 
                                    type="text" placeholder="e.g. consulting"
                                    className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs focus:border-sky-500 focus:outline-none"
                                    value={catSlug}
                                    onChange={e => setCatSlug(e.target.value)}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Sort Order Index</label>
                                <input 
                                    type="number" required
                                    className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs focus:border-sky-500 focus:outline-none"
                                    value={catSortOrder}
                                    onChange={e => setCatSortOrder(e.target.value)}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Description</label>
                                <textarea 
                                    rows="2"
                                    className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs focus:border-sky-500 focus:outline-none"
                                    value={catDesc}
                                    onChange={e => setCatDesc(e.target.value)}
                                />
                            </div>
                            <div className="pt-2">
                                <label className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="rounded bg-[#0b1519] border-outline-variant/30 text-sky-500 focus:ring-sky-500 focus:ring-offset-[#111d23]" 
                                        checked={catIsActive}
                                        onChange={e => setCatIsActive(e.target.checked)}
                                    />
                                    Category Active
                                </label>
                            </div>

                            <div className="pt-4 border-t border-outline-variant/30 flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setShowCategoryModal(false)}
                                    className="bg-transparent border border-outline-variant/80 hover:bg-surface-container text-on-surface-variant hover:text-white px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider font-mono transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={savingCategory}
                                    className="bg-sky-500 hover:brightness-110 text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 shadow-lg disabled:opacity-50 transition-all"
                                >
                                    {savingCategory ? 'Saving...' : 'Save Category'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* SERVICE FORM MODAL */}
            {showModal && (
                <div className="fixed inset-0 bg-[#000000]/80 z-50 flex items-center justify-center p-2 sm:p-4 backdrop-blur-sm overflow-y-auto">
                    <div className="bg-[#111d23] border border-outline-variant/30 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
                        {/* Modal Header */}
                        <div className="h-16 border-b border-outline-variant/30 px-4 sm:px-6 flex items-center justify-between sticky top-0 bg-[#111d23] z-10">
                            <h3 className="font-bold text-white uppercase text-xs sm:text-sm tracking-widest font-mono">
                                {currentService ? `Modify Profile: ${currentService.title}` : 'Create New Service Profile'}
                            </h3>
                            <button onClick={() => setShowModal(false)} className="text-on-surface-variant hover:text-white transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* Modal Form */}
                        <form onSubmit={handleSaveService} className="p-4 sm:p-6 space-y-6 flex-grow">
                            {/* Section 1: Basic Fields */}
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 font-mono border-b border-outline-variant/20 pb-1.5">
                                    Card Specifications
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                                            {categories.map(cat => (
                                                <option key={cat.id} value={cat.slug}>{cat.name}</option>
                                            ))}
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
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                                <div className="flex justify-between items-center border-b border-outline-variant/20 pb-1.5 gap-2">
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
                                        <div key={idx} className="flex flex-col sm:flex-row gap-2 items-start sm:items-center bg-[#0b1519] p-3 rounded border border-outline-variant/10 w-full">
                                            <input 
                                                type="text" placeholder="Label (e.g. Standard)" required
                                                className="w-full sm:w-1/3 bg-[#111d23] border border-outline-variant/30 rounded p-2 text-white text-xs focus:outline-none"
                                                value={spec.label}
                                                onChange={e => handleSpecChange(idx, 'label', e.target.value)}
                                            />
                                            <input 
                                                type="text" placeholder="Value (e.g. NFPA 72 Compliance)" required
                                                className="w-full sm:w-1/3 bg-[#111d23] border border-outline-variant/30 rounded p-2 text-white text-xs focus:outline-none"
                                                value={spec.value}
                                                onChange={e => handleSpecChange(idx, 'value', e.target.value)}
                                            />
                                            <div className="flex gap-2 w-full sm:w-1/3 items-center">
                                                <input 
                                                    type="text" placeholder="Material Icon (e.g. timer)"
                                                    className="w-full bg-[#111d23] border border-outline-variant/30 rounded p-2 text-white text-xs focus:outline-none"
                                                    value={spec.icon}
                                                    onChange={e => handleSpecChange(idx, 'icon', e.target.value)}
                                                />
                                                <button 
                                                    type="button" 
                                                    onClick={() => handleRemoveSpec(idx)}
                                                    className="text-red-400 hover:text-red-500 p-1 shrink-0"
                                                >
                                                    <span className="material-symbols-outlined text-base">delete</span>
                                                </button>
                                            </div>
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
                                <div className="flex justify-between items-center border-b border-outline-variant/20 pb-1.5 gap-2">
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
                                        <div key={idx} className="flex flex-col sm:flex-row gap-2 items-start sm:items-center bg-[#0b1519] p-3 rounded border border-outline-variant/10 w-full">
                                            <input 
                                                type="text" placeholder="Metric Name (e.g. Detection Accuracy)" required
                                                className="w-full sm:w-2/3 bg-[#111d23] border border-outline-variant/30 rounded p-2 text-white text-xs focus:outline-none"
                                                value={m.label}
                                                onChange={e => handleMetricChange(idx, 'label', e.target.value)}
                                            />
                                            <div className="flex gap-2 w-full sm:w-1/3 items-center">
                                                <input 
                                                    type="number" min="0" max="100" placeholder="Percentage (%)" required
                                                    className="w-full bg-[#111d23] border border-outline-variant/30 rounded p-2 text-white text-xs focus:outline-none"
                                                    value={m.percentage}
                                                    onChange={e => handleMetricChange(idx, 'percentage', e.target.value)}
                                                />
                                                <button 
                                                    type="button" 
                                                    onClick={() => handleRemoveMetric(idx)}
                                                    className="text-red-400 hover:text-red-500 p-1 shrink-0"
                                                >
                                                    <span className="material-symbols-outlined text-base">delete</span>
                                                </button>
                                            </div>
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

            {/* CUSTOM TOAST NOTIFICATION */}
            {toast && (
                <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-lg shadow-2xl border transition-all duration-300 transform translate-y-0 animate-bounce ${
                    toast.type === 'success' 
                        ? 'bg-emerald-950/90 border-emerald-500/50 text-emerald-300' 
                        : 'bg-rose-950/90 border-rose-500/50 text-rose-300'
                }`}>
                    <span className="material-symbols-outlined">
                        {toast.type === 'success' ? 'check_circle' : 'error'}
                    </span>
                    <span className="text-xs font-bold font-mono tracking-wide uppercase">{toast.message}</span>
                    <button onClick={() => setToast(null)} className="text-on-surface-variant hover:text-white ml-2">
                        <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                </div>
            )}

            {/* CUSTOM CONFIRMATION MODAL */}
            {confirmModal.isOpen && (
                <div className="fixed inset-0 bg-[#000000]/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-[#111d23] border border-outline-variant/30 rounded-xl w-full max-w-md shadow-2xl overflow-hidden">
                        <div className="p-6 text-center space-y-4">
                            <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto">
                                <span className="material-symbols-outlined text-3xl">warning</span>
                            </div>
                            <h3 className="font-bold text-white uppercase text-sm tracking-widest font-mono">
                                {confirmModal.title}
                            </h3>
                            <p className="text-xs text-on-surface-variant leading-relaxed">
                                {confirmModal.message}
                            </p>
                        </div>
                        <div className="bg-[#0b1519] px-6 py-4 flex justify-end gap-3 border-t border-outline-variant/20">
                            <button
                                onClick={() => setConfirmModal({ isOpen: false, title: '', message: '', onConfirm: null })}
                                className="bg-transparent border border-outline-variant/80 hover:bg-surface-container text-on-surface-variant hover:text-white px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider font-mono transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmModal.onConfirm}
                                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider font-mono shadow-lg transition-all"
                            >
                                Confirm Action
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
