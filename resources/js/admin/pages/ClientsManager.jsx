import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ClientsManager() {
    const [activeTab, setActiveTab] = useState('clients');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    // States for Settings
    const [settings, setSettings] = useState({});
    const [heroBgFile, setHeroBgFile] = useState(null);

    // States for Clients
    const [clients, setClients] = useState([]);
    const [clientPagination, setClientPagination] = useState(null);
    const [clientForm, setClientForm] = useState({ id: null, name: '', logo: '', desc: '', type: 'VIEW PROJECTS', icon: 'open_in_new', is_active: true, order: 0 });
    const [isEditingClient, setIsEditingClient] = useState(false);

    // States for Testimonials
    const [testimonials, setTestimonials] = useState([]);
    const [testimonialPagination, setTestimonialPagination] = useState(null);
    const [testimonialForm, setTestimonialForm] = useState({ id: null, quote: '', author: '', role: '', avatar: '', is_active: true, order: 0 });
    const [isEditingTestimonial, setIsEditingTestimonial] = useState(false);

    const [deleteModal, setDeleteModal] = useState({ isOpen: false, type: null, id: null });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [clientsRes, settingsRes, testimonialsRes] = await Promise.all([
                axios.get('/api/admin/clients'),
                axios.get('/api/admin/clients/settings'),
                axios.get('/api/admin/clients/testimonials')
            ]);
            
            if (clientsRes.data.success) {
                setClients(clientsRes.data.data.data);
                setClientPagination(clientsRes.data.data);
            }
            if (settingsRes.data.success) {
                setSettings(settingsRes.data.data);
            }
            if (testimonialsRes.data.success) {
                setTestimonials(testimonialsRes.data.data.data);
                setTestimonialPagination(testimonialsRes.data.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setErrorMsg('Failed to load data.');
        } finally {
            setLoading(false);
        }
    };

    const showToast = (msg, type = 'success') => {
        if (type === 'success') {
            setMessage(msg);
            setErrorMsg(null);
        } else {
            setErrorMsg(msg);
            setMessage(null);
        }
        setTimeout(() => {
            setMessage(null);
            setErrorMsg(null);
        }, 4000);
    };

    // --- Settings Functions ---
    const handleSettingChange = (key, value) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    const handleSettingsSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            const formData = new FormData();
            
            // Append settings
            if (settings) {
                Object.keys(settings).forEach(key => {
                    if (settings[key] !== null && settings[key] !== undefined) {
                        formData.append(`settings[${key}]`, settings[key]);
                    }
                });
            }

            // Append file if exists
            if (heroBgFile) {
                formData.append('hero_bg_file', heroBgFile);
            }

            const res = await axios.post('/api/admin/clients/settings', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            
            if (res.data.hero_bg) {
                setSettings(prev => ({ ...prev, hero_bg: res.data.hero_bg }));
            }
            
            showToast('Settings updated successfully.');
            setHeroBgFile(null); // Reset file input
        } catch (error) {
            console.error(error);
            showToast('Failed to update settings.', 'error');
        } finally {
            setSaving(false);
        }
    };

    // --- Client Functions ---
    const fetchClientsPage = async (pageUrl) => {
        if (!pageUrl) return;
        const url = new URL(pageUrl);
        const page = url.searchParams.get('page');
        if (page) {
            try {
                const res = await axios.get(`/api/admin/clients?page=${page}`);
                setClients(res.data.data.data);
                setClientPagination(res.data.data);
            } catch (err) {
                console.error(err);
            }
        }
    };

    const handleClientInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setClientForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleClientSubmit = async (e) => {
        e.preventDefault();
        const url = isEditingClient ? `/api/admin/clients/${clientForm.id}` : '/api/admin/clients';
        try {
            const payload = { ...clientForm, order: parseInt(clientForm.order) || 0 };
            const res = await axios.post(url, payload);
            if (res.data.success) {
                setClientForm({ id: null, name: '', logo: '', desc: '', type: 'VIEW PROJECTS', icon: 'open_in_new', is_active: true, order: 0 });
                setIsEditingClient(false);
                fetchClientsPage(`/api/admin/clients?page=${clientPagination ? clientPagination.current_page : 1}`);
                showToast(isEditingClient ? 'Client updated!' : 'Client added!');
            }
        } catch (err) {
            console.error(err);
            showToast('Error saving client', 'error');
        }
    };

    // --- Testimonial Functions ---
    const fetchTestimonialsPage = async (pageUrl) => {
        if (!pageUrl) return;
        const url = new URL(pageUrl);
        const page = url.searchParams.get('page');
        if (page) {
            try {
                const res = await axios.get(`/api/admin/clients/testimonials?page=${page}`);
                setTestimonials(res.data.data.data);
                setTestimonialPagination(res.data.data);
            } catch (err) {
                console.error(err);
            }
        }
    };

    const handleTestimonialInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setTestimonialForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleTestimonialSubmit = async (e) => {
        e.preventDefault();
        const url = isEditingTestimonial ? `/api/admin/clients/testimonials/${testimonialForm.id}` : '/api/admin/clients/testimonials';
        try {
            const payload = { ...testimonialForm, order: parseInt(testimonialForm.order) || 0 };
            const res = await axios.post(url, payload);
            if (res.data.success) {
                setTestimonialForm({ id: null, quote: '', author: '', role: '', avatar: '', is_active: true, order: 0 });
                setIsEditingTestimonial(false);
                fetchTestimonialsPage(`/api/admin/clients/testimonials?page=${testimonialPagination ? testimonialPagination.current_page : 1}`);
                showToast(isEditingTestimonial ? 'Testimonial updated!' : 'Testimonial added!');
            }
        } catch (err) {
            console.error(err);
            showToast('Error saving testimonial', 'error');
        }
    };

    // --- Delete Functions ---
    const confirmDelete = async () => {
        if (!deleteModal.id) return;
        const { type, id } = deleteModal;
        const endpoint = type === 'client' ? `/api/admin/clients/${id}` : `/api/admin/clients/testimonials/${id}`;
        
        try {
            const response = await axios.delete(endpoint);
            if (response.data.success) {
                if (type === 'client') fetchClientsPage(`/api/admin/clients?page=${clientPagination ? clientPagination.current_page : 1}`);
                else fetchTestimonialsPage(`/api/admin/clients/testimonials?page=${testimonialPagination ? testimonialPagination.current_page : 1}`);
                showToast('Deleted successfully.');
            }
        } catch (error) {
            console.error('Error deleting:', error);
            showToast('Error deleting item.', 'error');
        } finally {
            setDeleteModal({ isOpen: false, type: null, id: null });
        }
    };

    if (loading) {
        return <div className="p-8 text-center text-on-surface-variant">Loading Data...</div>;
    }

    return (
        <div className="space-y-6">
            {/* Status alerts */}
            {message && (
                <div className="p-4 bg-[#cfe6f2] border border-[#b4cad6] rounded-lg text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="material-symbols-outlined">check_circle</span> {message}
                </div>
            )}
            {errorMsg && (
                <div className="p-4 bg-error/10 border border-error/30 rounded-lg text-error text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="material-symbols-outlined">error</span> {errorMsg}
                </div>
            )}

            {/* Navigation Tabs */}
            <div className="flex border-b border-outline-variant/30 gap-2 overflow-x-auto pb-px">
                {[
                    { id: 'settings', label: 'Page Settings & CTA', icon: 'settings' },
                    { id: 'clients', label: 'Manage Clients', icon: 'groups' },
                    { id: 'testimonials', label: 'Testimonials', icon: 'format_quote' }
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-5 py-3.5 border-b-2 font-semibold text-sm tracking-wide transition-all ${
                            activeTab === tab.id
                                ? 'border-primary text-white bg-primary/5'
                                : 'border-transparent text-on-surface-variant hover:text-white hover:bg-surface-container/50'
                        }`}
                    >
                        <span className="material-symbols-outlined text-lg">{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* TAB: Settings */}
            {activeTab === 'settings' && (
                <div className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-6">
                    <form onSubmit={handleSettingsSubmit} className="space-y-6">
                        {/* Hero Section Settings */}
                        <div>
                            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Hero Section Settings</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">Hero Subtitle</label>
                                    <input type="text" value={settings.hero_subtitle || ''} onChange={e => handleSettingChange('hero_subtitle', e.target.value)} className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">Hero Title</label>
                                    <input type="text" value={settings.hero_title || ''} onChange={e => handleSettingChange('hero_title', e.target.value)} className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">Hero Background Image</label>
                                    <div className="flex items-center gap-2">
                                        <input type="text" value={settings.hero_bg || ''} onChange={e => handleSettingChange('hero_bg', e.target.value)} className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" placeholder="Image URL (or upload a file)" />
                                        <input type="file" accept="image/*" onChange={e => setHeroBgFile(e.target.files[0])} className="w-1/3 bg-surface-container border border-outline-variant/50 rounded-lg px-2 py-1.5 text-white focus:outline-none text-sm file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-primary file:text-on-primary hover:file:brightness-110" />
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">Hero Description</label>
                                    <textarea value={settings.hero_desc || ''} onChange={e => handleSettingChange('hero_desc', e.target.value)} rows="3" className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"></textarea>
                                </div>
                            </div>
                        </div>
                        <hr className="border-outline-variant/30" />
                        {/* Clients & Testimonial Section Settings */}
                        <div>
                            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Section Headers</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">Clients Subtitle</label>
                                    <input type="text" value={settings.clients_section_subtitle || ''} onChange={e => handleSettingChange('clients_section_subtitle', e.target.value)} className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">Clients Title</label>
                                    <input type="text" value={settings.clients_section_title || ''} onChange={e => handleSettingChange('clients_section_title', e.target.value)} className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">Testimonials Title</label>
                                    <input type="text" value={settings.testimonials_section_title || ''} onChange={e => handleSettingChange('testimonials_section_title', e.target.value)} className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" />
                                </div>
                            </div>
                        </div>
                        <hr className="border-outline-variant/30" />
                        {/* Call To Action Settings */}
                        <div>
                            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Call To Action</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">CTA Title</label>
                                    <input type="text" value={settings.cta_title || ''} onChange={e => handleSettingChange('cta_title', e.target.value)} className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">CTA Description</label>
                                    <input type="text" value={settings.cta_desc || ''} onChange={e => handleSettingChange('cta_desc', e.target.value)} className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">CTA Button Text</label>
                                    <input type="text" value={settings.cta_button_text || ''} onChange={e => handleSettingChange('cta_button_text', e.target.value)} className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">CTA Button Link</label>
                                    <input type="text" value={settings.cta_button_link || ''} onChange={e => handleSettingChange('cta_button_link', e.target.value)} className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" disabled={saving} className="bg-tertiary text-white font-mono text-xs font-bold px-6 py-2.5 rounded uppercase tracking-wider hover:brightness-110 transition-all">
                                {saving ? 'Saving...' : 'Save All Settings'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* TAB: Clients */}
            {activeTab === 'clients' && (
                <div className="space-y-6">
                    <div className="bg-surface p-6 rounded-2xl border border-outline-variant/30">
                        <h3 className="text-lg font-bold text-white mb-4">{isEditingClient ? 'Edit Client' : 'Add New Client'}</h3>
                        <form onSubmit={handleClientSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-on-surface-variant mb-1">Name</label>
                                    <input type="text" name="name" value={clientForm.name} onChange={handleClientInputChange} required className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-on-surface-variant mb-1">Logo URL</label>
                                    <input type="url" name="logo" value={clientForm.logo} onChange={handleClientInputChange} required className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-on-surface-variant mb-1">Description</label>
                                <textarea name="desc" value={clientForm.desc} onChange={handleClientInputChange} required rows="2" className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"></textarea>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-on-surface-variant mb-1">Button Type</label>
                                    <input type="text" name="type" value={clientForm.type} onChange={handleClientInputChange} required className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" placeholder="e.g. VIEW PROJECTS" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-on-surface-variant mb-1">Button Icon</label>
                                    <input type="text" name="icon" value={clientForm.icon} onChange={handleClientInputChange} required className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" placeholder="e.g. open_in_new" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-on-surface-variant mb-1">Display Order</label>
                                    <input type="number" name="order" value={clientForm.order} onChange={handleClientInputChange} className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" name="is_active" checked={clientForm.is_active} onChange={handleClientInputChange} className="w-5 h-5 rounded border-outline-variant/50 text-primary bg-surface-container" />
                                    <span className="text-sm font-medium text-white">Active</span>
                                </label>
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button type="submit" className="px-6 py-2 bg-primary text-on-primary rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                                    {isEditingClient ? 'Update Client' : 'Save Client'}
                                </button>
                                {isEditingClient && (
                                    <button type="button" onClick={() => { setIsEditingClient(false); setClientForm({ id: null, name: '', logo: '', desc: '', type: 'VIEW PROJECTS', icon: 'open_in_new', is_active: true, order: 0 }); }} className="px-6 py-2 bg-surface-container-highest text-white rounded-lg font-semibold transition-colors">
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    <div className="bg-surface rounded-2xl border border-outline-variant/30 overflow-hidden">
                        <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-white">Manage Clients</h3>
                        </div>
                        {clients.length === 0 ? (
                            <div className="p-8 text-center text-on-surface-variant">No Clients found.</div>
                        ) : (
                            <div className="divide-y divide-outline-variant/30">
                                {clients.map(client => (
                                    <div key={client.id} className="p-6 flex items-start gap-4 hover:bg-surface-container/30 transition-colors">
                                        <div className="w-16 h-16 shrink-0 bg-white rounded p-1 flex items-center justify-center border border-outline-variant/30">
                                            <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain" />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h4 className="text-white font-bold">{client.name}</h4>
                                                {!client.is_active && <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-error/20 text-error uppercase tracking-wider">Inactive</span>}
                                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-surface-container-highest text-on-surface-variant uppercase tracking-wider">Order: {client.order}</span>
                                            </div>
                                            <p className="text-sm text-on-surface-variant line-clamp-1">{client.desc}</p>
                                        </div>
                                        <div className="flex gap-2 shrink-0">
                                            <button onClick={() => { setClientForm(client); setIsEditingClient(true); window.scrollTo(0, 0); }} className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-secondary hover:text-white hover:bg-secondary transition-colors">
                                                <span className="material-symbols-outlined text-sm">edit</span>
                                            </button>
                                            <button onClick={() => setDeleteModal({ isOpen: true, type: 'client', id: client.id })} className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-error hover:text-white hover:bg-error transition-colors">
                                                <span className="material-symbols-outlined text-sm">delete</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {clientPagination && clientPagination.last_page > 1 && (
                            <div className="p-4 border-t border-outline-variant/30 flex items-center justify-center gap-2">
                                {clientPagination.links.map((link, index) => (
                                    <button key={index} onClick={() => fetchClientsPage(link.url)} disabled={!link.url || link.active} className={`px-3 py-1 rounded text-sm transition-colors ${link.active ? 'bg-primary text-on-primary font-bold' : 'bg-surface-container text-white hover:bg-surface-container-highest'} ${!link.url && !link.active ? 'opacity-50 cursor-not-allowed' : ''}`} dangerouslySetInnerHTML={{ __html: link.label }} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* TAB: Testimonials */}
            {activeTab === 'testimonials' && (
                <div className="space-y-6">
                    <div className="bg-surface p-6 rounded-2xl border border-outline-variant/30">
                        <h3 className="text-lg font-bold text-white mb-4">{isEditingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}</h3>
                        <form onSubmit={handleTestimonialSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-on-surface-variant mb-1">Quote</label>
                                <textarea name="quote" value={testimonialForm.quote} onChange={handleTestimonialInputChange} required rows="3" className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"></textarea>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-on-surface-variant mb-1">Author Name</label>
                                    <input type="text" name="author" value={testimonialForm.author} onChange={handleTestimonialInputChange} required className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-on-surface-variant mb-1">Role / Company</label>
                                    <input type="text" name="role" value={testimonialForm.role} onChange={handleTestimonialInputChange} required className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-on-surface-variant mb-1">Avatar Image URL</label>
                                    <input type="url" name="avatar" value={testimonialForm.avatar} onChange={handleTestimonialInputChange} required className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-on-surface-variant mb-1">Display Order</label>
                                    <input type="number" name="order" value={testimonialForm.order} onChange={handleTestimonialInputChange} className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" name="is_active" checked={testimonialForm.is_active} onChange={handleTestimonialInputChange} className="w-5 h-5 rounded border-outline-variant/50 text-primary bg-surface-container" />
                                    <span className="text-sm font-medium text-white">Active</span>
                                </label>
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button type="submit" className="px-6 py-2 bg-primary text-on-primary rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                                    {isEditingTestimonial ? 'Update Testimonial' : 'Save Testimonial'}
                                </button>
                                {isEditingTestimonial && (
                                    <button type="button" onClick={() => { setIsEditingTestimonial(false); setTestimonialForm({ id: null, quote: '', author: '', role: '', avatar: '', is_active: true, order: 0 }); }} className="px-6 py-2 bg-surface-container-highest text-white rounded-lg font-semibold transition-colors">
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    <div className="bg-surface rounded-2xl border border-outline-variant/30 overflow-hidden">
                        <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-white">Manage Testimonials</h3>
                        </div>
                        {testimonials.length === 0 ? (
                            <div className="p-8 text-center text-on-surface-variant">No Testimonials found.</div>
                        ) : (
                            <div className="divide-y divide-outline-variant/30">
                                {testimonials.map(testimonial => (
                                    <div key={testimonial.id} className="p-6 flex items-start gap-4 hover:bg-surface-container/30 transition-colors">
                                        <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden border border-outline-variant/30">
                                            <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h4 className="text-white font-bold">{testimonial.author}</h4>
                                                <span className="text-xs text-tertiary uppercase font-mono">{testimonial.role}</span>
                                                {!testimonial.is_active && <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-error/20 text-error uppercase tracking-wider">Inactive</span>}
                                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-surface-container-highest text-on-surface-variant uppercase tracking-wider">Order: {testimonial.order}</span>
                                            </div>
                                            <p className="text-sm text-on-surface-variant line-clamp-2 italic">"{testimonial.quote}"</p>
                                        </div>
                                        <div className="flex gap-2 shrink-0">
                                            <button onClick={() => { setTestimonialForm(testimonial); setIsEditingTestimonial(true); window.scrollTo(0, 0); }} className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-secondary hover:text-white hover:bg-secondary transition-colors">
                                                <span className="material-symbols-outlined text-sm">edit</span>
                                            </button>
                                            <button onClick={() => setDeleteModal({ isOpen: true, type: 'testimonial', id: testimonial.id })} className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-error hover:text-white hover:bg-error transition-colors">
                                                <span className="material-symbols-outlined text-sm">delete</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {testimonialPagination && testimonialPagination.last_page > 1 && (
                            <div className="p-4 border-t border-outline-variant/30 flex items-center justify-center gap-2">
                                {testimonialPagination.links.map((link, index) => (
                                    <button key={index} onClick={() => fetchTestimonialsPage(link.url)} disabled={!link.url || link.active} className={`px-3 py-1 rounded text-sm transition-colors ${link.active ? 'bg-primary text-on-primary font-bold' : 'bg-surface-container text-white hover:bg-surface-container-highest'} ${!link.url && !link.active ? 'opacity-50 cursor-not-allowed' : ''}`} dangerouslySetInnerHTML={{ __html: link.label }} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Custom Delete Confirmation Modal */}
            {deleteModal.isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-all">
                    <div className="bg-surface border border-outline-variant/30 rounded-2xl p-6 max-w-sm w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex items-center gap-4 text-error mb-4">
                            <span className="material-symbols-outlined text-3xl">warning</span>
                            <h3 className="text-xl font-bold text-white">Confirm Deletion</h3>
                        </div>
                        <p className="text-on-surface-variant mb-6 leading-relaxed">
                            Are you absolutely sure you want to delete this {deleteModal.type}? This action cannot be undone.
                        </p>
                        <div className="flex gap-3 justify-end">
                            <button onClick={() => setDeleteModal({ isOpen: false, type: null, id: null })} className="px-5 py-2.5 rounded-lg font-semibold text-white bg-surface-container hover:bg-surface-container-highest transition-colors">
                                Cancel
                            </button>
                            <button onClick={confirmDelete} className="px-5 py-2.5 rounded-lg font-semibold text-white bg-error hover:bg-error/90 transition-colors shadow-lg shadow-error/20">
                                Yes, Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
