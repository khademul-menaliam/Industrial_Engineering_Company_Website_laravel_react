import React, { useState, useEffect } from 'react';
import api from '../../api/axios';

export default function HomepageManager() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [activeTab, setActiveTab] = useState('slider');

    // Data states
    const [slides, setSlides] = useState([]);
    const [services, setServices] = useState([]);
    const [processes, setProcesses] = useState([]);
    const [leaders, setLeaders] = useState([]);
    const [competencies, setCompetencies] = useState([]);
    const [projects, setProjects] = useState([]);
    const [settings, setSettings] = useState({});

    // Modals & form state for creation/editing
    const [editingItem, setEditingItem] = useState(null); // { type, item }
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({});
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        fetchHomepageData();
    }, []);

    const fetchHomepageData = async () => {
        setLoading(true);
        try {
            const response = await api.get('/home');
            setSlides(response.data.slides || []);
            setServices(response.data.services || []);
            setProcesses(response.data.processes || []);
            setLeaders(response.data.leaders || []);
            setCompetencies(response.data.competencies || []);
            setProjects(response.data.projects || []);
            setSettings(response.data.settings || {});
        } catch (error) {
            console.error('Failed to load homepage data', error);
            setErrorMsg('Failed to load home page configuration data.');
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

    // Bulk settings update
    const handleSettingsSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            await api.post('/admin/home/settings', { settings });
            showToast('General settings updated successfully.');
        } catch (error) {
            console.error(error);
            showToast('Failed to update general settings.', 'error');
        } finally {
            setSaving(false);
        }
    };

    const handleSettingChange = (key, value) => {
        setSettings(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleClientsChange = (index, value) => {
        const updated = [...(settings.clients_list || [])];
        updated[index] = value;
        handleSettingChange('clients_list', updated);
    };

    const addClientRow = () => {
        const updated = [...(settings.clients_list || []), ''];
        handleSettingChange('clients_list', updated);
    };

    const removeClientRow = (index) => {
        const updated = (settings.clients_list || []).filter((_, i) => i !== index);
        handleSettingChange('clients_list', updated);
    };

    // CRUD functions for repeatable entities
    const openCreateModal = (type) => {
        let initialData = {};
        if (type === 'slide') initialData = { title: '', subtitle: '', image_url: '', sort_order: 0, is_active: true };
        else if (type === 'service') initialData = { title: '', description: '', icon: 'engineering', image_url: '', sort_order: 0, is_active: true };
        else if (type === 'process') initialData = { step_number: '01', title: '', description: '', sort_order: 0, is_active: true };
        else if (type === 'leader') initialData = { name: '', title: '', quote: '', image_url: '', sort_order: 0, is_active: true };
        else if (type === 'competency') initialData = { title: '', items: [''], image_url: '', button_text: 'View Details', button_link: '/services', sort_order: 0, is_active: true };
        else if (type === 'project') initialData = { title: '', description: '', image_url: '', link: '/portfolio', sort_order: 0, is_active: true };

        setEditingItem({ type, isNew: true });
        setFormData(initialData);
        setImageFile(null);
        setModalOpen(true);
    };

    const openEditModal = (type, item) => {
        let prepData = { ...item };
        // For image fields, we store the current image path in 'image_url' for editing view
        if (item.image) {
            prepData.image_url = item.image;
        }
        if (type === 'competency' && typeof item.items === 'string') {
            try {
                prepData.items = JSON.parse(item.items);
            } catch (e) {
                prepData.items = [item.items];
            }
        }
        setEditingItem({ type, isNew: false, id: item.id });
        setFormData(prepData);
        setImageFile(null);
        setModalOpen(true);
    };

    const handleFormChange = (key, value) => {
        setFormData(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleCompetencyItemChange = (index, value) => {
        const updated = [...(formData.items || [])];
        updated[index] = value;
        handleFormChange('items', updated);
    };

    const addCompetencyItem = () => {
        const updated = [...(formData.items || []), ''];
        handleFormChange('items', updated);
    };

    const removeCompetencyItem = (index) => {
        const updated = (formData.items || []).filter((_, i) => i !== index);
        handleFormChange('items', updated);
    };

    const handleSaveItem = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            const type = editingItem.type;
            const isNew = editingItem.isNew;
            const id = editingItem.id;

            // Use FormData for file uploads
            const submitData = new FormData();
            Object.keys(formData).forEach(key => {
                if (key === 'items') {
                    // Send items array properly
                    formData.items.forEach((item, idx) => {
                        submitData.append(`items[${idx}]`, item);
                    });
                } else if (key !== 'image') {
                    // Convert boolean to numeric string for PHP backend forms
                    if (typeof formData[key] === 'boolean') {
                        submitData.append(key, formData[key] ? '1' : '0');
                    } else {
                        submitData.append(key, formData[key] ?? '');
                    }
                }
            });

            if (imageFile) {
                submitData.append('image', imageFile);
            }

            let endpoint = `/admin/home/${type}s`;
            if (!isNew) {
                endpoint += `/${id}`;
            }

            await api.post(endpoint, submitData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} saved successfully.`);
            setModalOpen(false);
            fetchHomepageData();
        } catch (error) {
            console.error(error);
            showToast('Failed to save item. Make sure images are under 5MB.', 'error');
        } finally {
            setSaving(false);
        }
    };

    const handleDeleteItem = async (type, id) => {
        if (!window.confirm(`Are you sure you want to delete this ${type}?`)) return;
        setSaving(true);
        try {
            await api.delete(`/admin/home/${type}s/${id}`);
            showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully.`);
            fetchHomepageData();
        } catch (error) {
            console.error(error);
            showToast('Failed to delete item.', 'error');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
                <span className="material-symbols-outlined text-4xl text-primary animate-spin">sync</span>
                <span className="text-sm font-semibold text-on-surface-variant font-mono-data">RETRIEVING HOMEPAGE CONFIGURATION...</span>
            </div>
        );
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

            {/* Premium Navigation Tabs */}
            <div className="flex border-b border-outline-variant/30 gap-2 overflow-x-auto pb-px">
                {[
                    { id: 'slider', label: 'Hero Slider', icon: 'splitscreen' },
                    { id: 'capabilities', label: 'Capabilities & Services', icon: 'water_pump' },
                    { id: 'process_leaders', label: 'Methodology & Leaders', icon: 'engineering' },
                    { id: 'competencies_projects', label: 'Competencies & Projects', icon: 'architecture' },
                    { id: 'settings', label: 'Settings & CTA', icon: 'settings' }
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

            {/* TAB CONTENT: Hero Slider */}
            {activeTab === 'slider' && (
                <div className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-lg uppercase tracking-wider text-white">Hero Slider Slides</h3>
                            <p className="text-xs text-on-surface-variant mt-1">Configure slides appearing on the main landing slider.</p>
                        </div>
                        <button
                            onClick={() => openCreateModal('slide')}
                            className="bg-primary text-on-primary font-mono text-xs font-bold px-4 py-2.5 rounded uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined text-sm">add</span> Add Slide
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {slides.map(slide => (
                            <div key={slide.id} className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg overflow-hidden flex flex-col justify-between">
                                <div>
                                    <div className="h-40 bg-cover bg-center relative" style={{ backgroundImage: `url('${slide.image}')` }}>
                                        <div className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-white font-mono-data">
                                            Order: {slide.sort_order}
                                        </div>
                                        {!slide.is_active && (
                                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-xs font-bold text-error uppercase tracking-wider">
                                                Inactive
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4 space-y-2">
                                        <h4 className="font-bold text-white uppercase text-sm line-clamp-1">{slide.title}</h4>
                                        <p className="text-xs text-on-surface-variant line-clamp-2">{slide.subtitle}</p>
                                    </div>
                                </div>
                                <div className="p-4 border-t border-outline-variant/10 flex justify-end gap-2 bg-surface-container-low">
                                    <button
                                        onClick={() => openEditModal('slide', slide)}
                                        className="text-primary hover:bg-primary/10 p-2 rounded transition-colors flex items-center"
                                        title="Edit Slide"
                                    >
                                        <span className="material-symbols-outlined text-sm">edit</span>
                                    </button>
                                    <button
                                        onClick={() => handleDeleteItem('slide', slide.id)}
                                        className="text-error hover:bg-error/10 p-2 rounded transition-colors flex items-center"
                                        title="Delete Slide"
                                    >
                                        <span className="material-symbols-outlined text-sm">delete</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* TAB CONTENT: Capabilities & Services */}
            {activeTab === 'capabilities' && (
                <div className="space-y-6">
                    <form onSubmit={handleSettingsSubmit} className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-4">
                        <h3 className="font-bold text-lg uppercase tracking-wider text-white">Capabilities Section Header</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Section Title</label>
                                <input
                                    type="text"
                                    value={settings.capabilities_section_title || ''}
                                    onChange={e => handleSettingChange('capabilities_section_title', e.target.value)}
                                    className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Section Subtitle</label>
                                <input
                                    type="text"
                                    value={settings.capabilities_section_subtitle || ''}
                                    onChange={e => handleSettingChange('capabilities_section_subtitle', e.target.value)}
                                    className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end pt-2">
                            <button
                                type="submit"
                                disabled={saving}
                                className="bg-tertiary text-white font-mono text-xs font-bold px-6 py-2.5 rounded uppercase tracking-wider hover:brightness-110 transition-all"
                            >
                                {saving ? 'Saving...' : 'Update Capabilities Header'}
                            </button>
                        </div>
                    </form>

                    <div className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-lg uppercase tracking-wider text-white">Services List</h3>
                                <p className="text-xs text-on-surface-variant mt-1">Manage core capability service cards.</p>
                            </div>
                            <button
                                onClick={() => openCreateModal('service')}
                                className="bg-primary text-on-primary font-mono text-xs font-bold px-4 py-2.5 rounded uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-sm">add</span> Add Service
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map(service => (
                                <div key={service.id} className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg overflow-hidden flex flex-col justify-between">
                                    <div>
                                        <div className="h-32 bg-cover bg-center relative" style={{ backgroundImage: `url('${service.image}')` }}>
                                            <div className="absolute top-2 left-2 bg-tertiary px-2 py-0.5 rounded text-[10px] text-white font-mono-data flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[10px]">{service.icon}</span>
                                                {service.icon}
                                            </div>
                                            <div className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-white font-mono-data">
                                                Order: {service.sort_order}
                                            </div>
                                            {!service.is_active && (
                                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-xs font-bold text-error uppercase tracking-wider">
                                                    Inactive
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4 space-y-2">
                                            <h4 className="font-bold text-white uppercase text-sm">{service.title}</h4>
                                            <p className="text-xs text-on-surface-variant line-clamp-3">{service.description}</p>
                                        </div>
                                    </div>
                                    <div className="p-4 border-t border-outline-variant/10 flex justify-end gap-2 bg-surface-container-low">
                                        <button
                                            onClick={() => openEditModal('service', service)}
                                            className="text-primary hover:bg-primary/10 p-2 rounded transition-colors flex items-center"
                                            title="Edit Service"
                                        >
                                            <span className="material-symbols-outlined text-sm">edit</span>
                                        </button>
                                        <button
                                            onClick={() => handleDeleteItem('service', service.id)}
                                            className="text-error hover:bg-error/10 p-2 rounded transition-colors flex items-center"
                                            title="Delete Service"
                                        >
                                            <span className="material-symbols-outlined text-sm">delete</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* TAB CONTENT: Processes & Leadership */}
            {activeTab === 'process_leaders' && (
                <div className="space-y-6">
                    {/* Operational Methodology Section */}
                    <div className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-6">
                        <form onSubmit={handleSettingsSubmit} className="space-y-4 border-b border-outline-variant/30 pb-6">
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold text-lg uppercase tracking-wider text-white">Methodology Section Title</h3>
                                <button
                                    type="submit"
                                    disabled={saving}
                                    className="bg-tertiary text-white font-mono text-xs font-bold px-6 py-2.5 rounded uppercase tracking-wider hover:brightness-110 transition-all"
                                >
                                    Update Title
                                </button>
                            </div>
                            <div className="space-y-1 max-w-md">
                                <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Title</label>
                                <input
                                    type="text"
                                    value={settings.process_section_title || ''}
                                    onChange={e => handleSettingChange('process_section_title', e.target.value)}
                                    className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                />
                            </div>
                        </form>

                        <div className="flex justify-between items-center">
                            <div>
                                <h4 className="font-bold text-base uppercase tracking-wider text-white">Methodology Steps</h4>
                                <p className="text-xs text-on-surface-variant mt-1">Configure the process steps list (ideally 5 steps).</p>
                            </div>
                            <button
                                onClick={() => openCreateModal('process')}
                                className="bg-primary text-on-primary font-mono text-xs font-bold px-4 py-2.5 rounded uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-sm">add</span> Add Step
                            </button>
                        </div>

                        <div className="overflow-x-auto bg-surface-container-lowest border border-outline-variant/20 rounded-lg">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead>
                                    <tr className="border-b border-outline-variant/30 text-on-surface-variant font-mono-data text-xs bg-surface-container">
                                        <th className="p-3">STEP #</th>
                                        <th className="p-3">TITLE</th>
                                        <th className="p-3">DESCRIPTION</th>
                                        <th className="p-3">SORT</th>
                                        <th className="p-3">STATUS</th>
                                        <th className="p-3 text-right">ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-outline-variant/10 text-white font-mono-data">
                                    {processes.map(proc => (
                                        <tr key={proc.id} className="hover:bg-surface-container-low transition-all">
                                            <td className="p-3 font-bold text-tertiary">{proc.step_number}</td>
                                            <td className="p-3 font-semibold">{proc.title}</td>
                                            <td className="p-3 text-xs text-on-surface-variant max-w-xs truncate">{proc.description}</td>
                                            <td className="p-3">{proc.sort_order}</td>
                                            <td className="p-3">
                                                <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${
                                                    proc.is_active ? 'bg-green-500/10 text-green-400' : 'bg-error/15 text-error'
                                                }`}>
                                                    {proc.is_active ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td className="p-3 text-right flex justify-end gap-1">
                                                <button
                                                    onClick={() => openEditModal('process', proc)}
                                                    className="text-primary hover:bg-primary/10 p-1.5 rounded transition-colors flex items-center"
                                                >
                                                    <span className="material-symbols-outlined text-sm">edit</span>
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteItem('process', proc.id)}
                                                    className="text-error hover:bg-error/10 p-1.5 rounded transition-colors flex items-center"
                                                >
                                                    <span className="material-symbols-outlined text-sm">delete</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Strategic Leadership Section */}
                    <div className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-6">
                        <form onSubmit={handleSettingsSubmit} className="space-y-4 border-b border-outline-variant/30 pb-6">
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold text-lg uppercase tracking-wider text-white">Leadership Section Settings</h3>
                                <button
                                    type="submit"
                                    disabled={saving}
                                    className="bg-tertiary text-white font-mono text-xs font-bold px-6 py-2.5 rounded uppercase tracking-wider hover:brightness-110 transition-all"
                                >
                                    Update Leadership Header
                                </button>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Title</label>
                                    <input
                                        type="text"
                                        value={settings.leadership_section_title || ''}
                                        onChange={e => handleSettingChange('leadership_section_title', e.target.value)}
                                        className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Subtitle</label>
                                    <input
                                        type="text"
                                        value={settings.leadership_section_subtitle || ''}
                                        onChange={e => handleSettingChange('leadership_section_subtitle', e.target.value)}
                                        className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>
                        </form>

                        <div className="flex justify-between items-center">
                            <div>
                                <h4 className="font-bold text-base uppercase tracking-wider text-white">Leaders Profiles</h4>
                                <p className="text-xs text-on-surface-variant mt-1">Manage profiles (like CEO, Strategic Advisor) appearing on the landing page.</p>
                            </div>
                            <button
                                onClick={() => openCreateModal('leader')}
                                className="bg-primary text-on-primary font-mono text-xs font-bold px-4 py-2.5 rounded uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-sm">add</span> Add Leader
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {leaders.map(leader => (
                                <div key={leader.id} className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant/20 flex gap-4 items-start justify-between">
                                    <div className="flex gap-4">
                                        <div className="w-20 h-20 rounded overflow-hidden bg-cover bg-center shrink-0 border border-outline-variant/20" style={{ backgroundImage: `url('${leader.image}')` }}></div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm">{leader.name}</h4>
                                            <p className="text-[10px] text-tertiary font-mono uppercase font-bold tracking-wider mt-0.5">{leader.title}</p>
                                            <p className="text-xs text-on-surface-variant italic mt-2 line-clamp-3">"{leader.quote}"</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 shrink-0">
                                        <button
                                            onClick={() => openEditModal('leader', leader)}
                                            className="text-primary hover:bg-primary/10 p-1.5 rounded transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-sm">edit</span>
                                        </button>
                                        <button
                                            onClick={() => handleDeleteItem('leader', leader.id)}
                                            className="text-error hover:bg-error/10 p-1.5 rounded transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-sm">delete</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* TAB CONTENT: Competencies & Projects */}
            {activeTab === 'competencies_projects' && (
                <div className="space-y-6">
                    {/* Core Competencies Header */}
                    <form onSubmit={handleSettingsSubmit} className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-4">
                        <h3 className="font-bold text-lg uppercase tracking-wider text-white">Competencies Header Settings</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Title</label>
                                <input
                                    type="text"
                                    value={settings.competencies_section_title || ''}
                                    onChange={e => handleSettingChange('competencies_section_title', e.target.value)}
                                    className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Subtitle</label>
                                <input
                                    type="text"
                                    value={settings.competencies_section_subtitle || ''}
                                    onChange={e => handleSettingChange('competencies_section_subtitle', e.target.value)}
                                    className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end pt-2">
                            <button
                                type="submit"
                                disabled={saving}
                                className="bg-tertiary text-white font-mono text-xs font-bold px-6 py-2.5 rounded uppercase tracking-wider hover:brightness-110 transition-all"
                            >
                                Update Competencies Header
                            </button>
                        </div>
                    </form>

                    {/* Competency cards */}
                    <div className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-lg uppercase tracking-wider text-white">Competency Cards</h3>
                                <p className="text-xs text-on-surface-variant mt-1">Configure lists and links for main competency sectors.</p>
                            </div>
                            <button
                                onClick={() => openCreateModal('competency')}
                                className="bg-primary text-on-primary font-mono text-xs font-bold px-4 py-2.5 rounded uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-sm">add</span> Add Competency Card
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {competencies.map(comp => {
                                let bullets = [];
                                if (comp.items) {
                                    bullets = typeof comp.items === 'string' ? JSON.parse(comp.items) : comp.items;
                                }
                                return (
                                    <div key={comp.id} className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg overflow-hidden flex flex-col justify-between">
                                        <div>
                                            <div className="h-32 bg-cover bg-center relative" style={{ backgroundImage: `url('${comp.image}')` }}>
                                                <div className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-white font-mono-data">
                                                    Order: {comp.sort_order}
                                                </div>
                                            </div>
                                            <div className="p-4 space-y-3">
                                                <h4 className="font-bold text-white uppercase text-sm">{comp.title}</h4>
                                                <ul className="space-y-1">
                                                    {bullets.map((bullet, i) => (
                                                        <li key={i} className="text-xs text-on-surface-variant font-mono flex items-center gap-1">
                                                            <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
                                                            {bullet}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="pt-2 flex items-center gap-2">
                                                    <span className="text-[10px] bg-surface-container px-2 py-1 rounded font-mono text-on-surface-variant uppercase">Link: {comp.button_link}</span>
                                                    <span className="text-[10px] bg-surface-container px-2 py-1 rounded font-mono text-on-surface-variant uppercase">Btn: {comp.button_text}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 border-t border-outline-variant/10 flex justify-end gap-2 bg-surface-container-low">
                                            <button
                                                onClick={() => openEditModal('competency', comp)}
                                                className="text-primary hover:bg-primary/10 p-2 rounded transition-colors flex items-center"
                                                title="Edit competency card"
                                            >
                                                <span className="material-symbols-outlined text-sm">edit</span>
                                            </button>
                                            <button
                                                onClick={() => handleDeleteItem('competency', comp.id)}
                                                className="text-error hover:bg-error/10 p-2 rounded transition-colors flex items-center"
                                                title="Delete competency card"
                                            >
                                                <span className="material-symbols-outlined text-sm">delete</span>
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Featured Projects Settings & list */}
                    <div className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-6">
                        <form onSubmit={handleSettingsSubmit} className="space-y-4 border-b border-outline-variant/30 pb-6">
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold text-lg uppercase tracking-wider text-white">Projects Section Settings</h3>
                                <button
                                    type="submit"
                                    disabled={saving}
                                    className="bg-tertiary text-white font-mono text-xs font-bold px-6 py-2.5 rounded uppercase tracking-wider hover:brightness-110 transition-all"
                                >
                                    Update Projects Header
                                </button>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Title</label>
                                    <input
                                        type="text"
                                        value={settings.projects_section_title || ''}
                                        onChange={e => handleSettingChange('projects_section_title', e.target.value)}
                                        className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Subtitle</label>
                                    <input
                                        type="text"
                                        value={settings.projects_section_subtitle || ''}
                                        onChange={e => handleSettingChange('projects_section_subtitle', e.target.value)}
                                        className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>
                        </form>

                        <div className="flex justify-between items-center">
                            <div>
                                <h4 className="font-bold text-base uppercase tracking-wider text-white">Featured Projects List</h4>
                                <p className="text-xs text-on-surface-variant mt-1">Configure project cards (case studies).</p>
                            </div>
                            <button
                                onClick={() => openCreateModal('project')}
                                className="bg-primary text-on-primary font-mono text-xs font-bold px-4 py-2.5 rounded uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-sm">add</span> Add Project Card
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {projects.map(proj => (
                                <div key={proj.id} className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg overflow-hidden flex flex-col justify-between">
                                    <div>
                                        <div className="h-44 bg-cover bg-center relative" style={{ backgroundImage: `url('${proj.image}')` }}>
                                            <div className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-white font-mono-data">
                                                Order: {proj.sort_order}
                                            </div>
                                        </div>
                                        <div className="p-4 space-y-2">
                                            <h4 className="font-bold text-white uppercase text-sm line-clamp-1">{proj.title}</h4>
                                            <p className="text-xs text-on-surface-variant line-clamp-3 leading-relaxed">{proj.description}</p>
                                            <div className="pt-2 text-[10px] text-tertiary font-mono-data font-bold">LINK: {proj.link}</div>
                                        </div>
                                    </div>
                                    <div className="p-4 border-t border-outline-variant/10 flex justify-end gap-2 bg-surface-container-low">
                                        <button
                                            onClick={() => openEditModal('project', proj)}
                                            className="text-primary hover:bg-primary/10 p-2 rounded transition-colors flex items-center"
                                            title="Edit Project"
                                        >
                                            <span className="material-symbols-outlined text-sm">edit</span>
                                        </button>
                                        <button
                                            onClick={() => handleDeleteItem('project', proj.id)}
                                            className="text-error hover:bg-error/10 p-2 rounded transition-colors flex items-center"
                                            title="Delete Project"
                                        >
                                            <span className="material-symbols-outlined text-sm">delete</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* TAB CONTENT: General Settings, Clients, CTA, and Contact Info */}
            {activeTab === 'settings' && (
                <form onSubmit={handleSettingsSubmit} className="space-y-6">
                    {/* Trusted Clients Settings */}
                    <div className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-4">
                        <div>
                            <h3 className="font-bold text-lg uppercase tracking-wider text-white">Trusted Clients Directory</h3>
                            <p className="text-xs text-on-surface-variant mt-1">Section header and list of client names appearing on the footer scroll.</p>
                        </div>
                        <div className="space-y-1 max-w-md">
                            <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Clients Section Title</label>
                            <input
                                type="text"
                                value={settings.clients_section_title || ''}
                                onChange={e => handleSettingChange('clients_section_title', e.target.value)}
                                className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                            />
                        </div>
                        <div className="space-y-3 pt-2">
                            <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Clients Names</label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {(settings.clients_list || []).map((client, idx) => (
                                    <div key={idx} className="flex gap-2 items-center">
                                        <input
                                            type="text"
                                            value={client}
                                            onChange={e => handleClientsChange(idx, e.target.value)}
                                            className="flex-grow bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeClientRow(idx)}
                                            className="text-error hover:bg-error/10 p-2 rounded transition-colors shrink-0"
                                        >
                                            <span className="material-symbols-outlined text-sm">close</span>
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={addClientRow}
                                    className="border border-dashed border-outline-variant hover:border-white text-on-surface-variant hover:text-white px-3 py-2 rounded text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-xs">add</span> Add Client
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Contact & Location Details */}
                    <div className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-4">
                        <h3 className="font-bold text-lg uppercase tracking-wider text-white">Contact & Headquarters Section</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Form Section Title</label>
                                <input
                                    type="text"
                                    value={settings.contact_section_title || ''}
                                    onChange={e => handleSettingChange('contact_section_title', e.target.value)}
                                    className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Form Section Description</label>
                                <textarea
                                    value={settings.contact_section_description || ''}
                                    onChange={e => handleSettingChange('contact_section_description', e.target.value)}
                                    rows="2"
                                    className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                ></textarea>
                            </div>
                            <div className="space-y-1">
                                <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Headquarters Address (nl formatted)</label>
                                <textarea
                                    value={settings.contact_headquarters_address || ''}
                                    onChange={e => handleSettingChange('contact_headquarters_address', e.target.value)}
                                    rows="2"
                                    className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                ></textarea>
                            </div>
                            <div className="space-y-1">
                                <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Support Support Phone</label>
                                <input
                                    type="text"
                                    value={settings.contact_support_phone || ''}
                                    onChange={e => handleSettingChange('contact_support_phone', e.target.value)}
                                    className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA Block */}
                    <div className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-4">
                        <h3 className="font-bold text-lg uppercase tracking-wider text-white">Call To Action (CTA) Section</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">CTA Title</label>
                                <input
                                    type="text"
                                    value={settings.cta_section_title || ''}
                                    onChange={e => handleSettingChange('cta_section_title', e.target.value)}
                                    className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">CTA Subtitle</label>
                                <input
                                    type="text"
                                    value={settings.cta_section_subtitle || ''}
                                    onChange={e => handleSettingChange('cta_section_subtitle', e.target.value)}
                                    className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Primary Button Text</label>
                                <input
                                    type="text"
                                    value={settings.cta_primary_btn_text || ''}
                                    onChange={e => handleSettingChange('cta_primary_btn_text', e.target.value)}
                                    className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Primary Button Link</label>
                                <input
                                    type="text"
                                    value={settings.cta_primary_btn_link || ''}
                                    onChange={e => handleSettingChange('cta_primary_btn_link', e.target.value)}
                                    className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Secondary Button Text</label>
                                <input
                                    type="text"
                                    value={settings.cta_secondary_btn_text || ''}
                                    onChange={e => handleSettingChange('cta_secondary_btn_text', e.target.value)}
                                    className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Secondary Button Link</label>
                                <input
                                    type="text"
                                    value={settings.cta_secondary_btn_link || ''}
                                    onChange={e => handleSettingChange('cta_secondary_btn_link', e.target.value)}
                                    className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit settings */}
                    <div className="flex justify-end bg-surface border border-outline-variant/30 rounded-xl p-4">
                        <button
                            type="submit"
                            disabled={saving}
                            className="bg-primary text-on-primary font-mono text-xs font-bold px-8 py-3 rounded-lg uppercase tracking-widest hover:brightness-110 transition-all"
                        >
                            {saving ? 'Saving System Parameters...' : 'Save Dynamic System Parameters'}
                        </button>
                    </div>
                </form>
            )}

            {/* HIGH-FIDELITY ITEM EDIT MODAL */}
            {modalOpen && editingItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                    <div className="bg-surface border border-outline-variant/40 rounded-xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container">
                            <h4 className="font-bold text-white uppercase tracking-wider text-sm">
                                {editingItem.isNew ? 'Create' : 'Modify'} {editingItem.type}
                            </h4>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="text-on-surface-variant hover:text-white transition-colors"
                            >
                                <span className="material-symbols-outlined text-lg">close</span>
                            </button>
                        </div>

                        {/* Form Body */}
                        <form onSubmit={handleSaveItem} className="flex-grow overflow-y-auto p-6 space-y-4">
                            {/* Slide / Leader / Service / Competency / Project Titles */}
                            {['slide', 'service', 'leader', 'competency', 'project'].includes(editingItem.type) && (
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">
                                        {editingItem.type === 'leader' ? 'Full Name' : 'Title'}
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.title || formData.name || ''}
                                        onChange={e => handleFormChange(editingItem.type === 'leader' ? 'name' : 'title', e.target.value)}
                                        className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                    />
                                </div>
                            )}

                            {/* Service Icon */}
                            {editingItem.type === 'service' && (
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Material Icon Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.icon || ''}
                                        onChange={e => handleFormChange('icon', e.target.value)}
                                        placeholder="e.g. water_pump, detector_smoke, engineering"
                                        className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                    />
                                </div>
                            )}

                            {/* Process step number */}
                            {editingItem.type === 'process' && (
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Step Number</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.step_number || ''}
                                            onChange={e => handleFormChange('step_number', e.target.value)}
                                            placeholder="e.g. 01"
                                            className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Step Title</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.title || ''}
                                            onChange={e => handleFormChange('title', e.target.value)}
                                            className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Leader designation/title */}
                            {editingItem.type === 'leader' && (
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Designation / Role</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.title || ''}
                                        onChange={e => handleFormChange('title', e.target.value)}
                                        placeholder="e.g. Chief Executive Officer"
                                        className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                    />
                                </div>
                            )}

                            {/* Descriptions / Subtitles / Quotes */}
                            {['slide', 'service', 'leader', 'process', 'project'].includes(editingItem.type) && (
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">
                                        {editingItem.type === 'slide' ? 'Subtitle' : editingItem.type === 'leader' ? 'Personal Quote' : 'Description'}
                                    </label>
                                    <textarea
                                        required
                                        value={formData.subtitle || formData.description || formData.quote || ''}
                                        onChange={e => {
                                            const field = editingItem.type === 'slide' ? 'subtitle' : editingItem.type === 'leader' ? 'quote' : 'description';
                                            handleFormChange(field, e.target.value);
                                        }}
                                        rows="3"
                                        className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                    ></textarea>
                                </div>
                            )}

                            {/* Competency bullets */}
                            {editingItem.type === 'competency' && (
                                <div className="space-y-3">
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Bullet Items List</label>
                                    <div className="space-y-2">
                                        {(formData.items || []).map((bullet, idx) => (
                                            <div key={idx} className="flex gap-2">
                                                <input
                                                    type="text"
                                                    required
                                                    value={bullet}
                                                    onChange={e => handleCompetencyItemChange(idx, e.target.value)}
                                                    placeholder="Bullet item spec"
                                                    className="flex-grow bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removeCompetencyItem(idx)}
                                                    className="text-error hover:bg-error/10 p-2 rounded transition-colors shrink-0"
                                                >
                                                    <span className="material-symbols-outlined text-sm">close</span>
                                                </button>
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            onClick={addCompetencyItem}
                                            className="border border-dashed border-outline-variant hover:border-white text-on-surface-variant hover:text-white px-3 py-2 rounded text-xs font-semibold flex items-center justify-center gap-1 transition-colors w-full"
                                        >
                                            <span className="material-symbols-outlined text-xs">add</span> Add Bullet Point
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Competency Links and button text */}
                            {editingItem.type === 'competency' && (
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Button Text</label>
                                        <input
                                            type="text"
                                            value={formData.button_text || ''}
                                            onChange={e => handleFormChange('button_text', e.target.value)}
                                            className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Button Link</label>
                                        <input
                                            type="text"
                                            value={formData.button_link || ''}
                                            onChange={e => handleFormChange('button_link', e.target.value)}
                                            className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Project Link */}
                            {editingItem.type === 'project' && (
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Project Case Study Link</label>
                                    <input
                                        type="text"
                                        value={formData.link || ''}
                                        onChange={e => handleFormChange('link', e.target.value)}
                                        className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                    />
                                </div>
                            )}

                            {/* Image Selection (Upload OR remote URI URL) */}
                            {['slide', 'service', 'leader', 'competency', 'project'].includes(editingItem.type) && (
                                <div className="space-y-3 border-t border-outline-variant/20 pt-3">
                                    <h5 className="text-xs font-bold text-white uppercase tracking-wider">Image Configuration</h5>
                                    
                                    {/* Upload file */}
                                    <div className="space-y-1">
                                        <label className="block text-[10px] font-bold text-on-surface-variant uppercase font-mono">Upload New Image File</label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={e => setImageFile(e.target.files[0])}
                                            className="w-full bg-surface-container border border-outline-variant/50 rounded text-xs text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-on-primary hover:file:brightness-110 cursor-pointer"
                                        />
                                    </div>

                                    <div className="text-center font-mono-data text-[10px] text-on-surface-variant">--- OR ---</div>

                                    {/* Remote URL */}
                                    <div className="space-y-1">
                                        <label className="block text-[10px] font-bold text-on-surface-variant uppercase font-mono">Image URL Path</label>
                                        <input
                                            type="text"
                                            value={formData.image_url || ''}
                                            onChange={e => handleFormChange('image_url', e.target.value)}
                                            placeholder="https://example.com/image.jpg"
                                            className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-xs focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Order & Status */}
                            <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/20 pt-4">
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase font-mono">Sort Order Index</label>
                                    <input
                                        type="number"
                                        value={formData.sort_order || 0}
                                        onChange={e => handleFormChange('sort_order', parseInt(e.target.value) || 0)}
                                        className="w-full bg-surface-container border border-outline-variant/50 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="flex items-center gap-2 mt-6">
                                    <input
                                        type="checkbox"
                                        id="modal_is_active"
                                        checked={formData.is_active !== false}
                                        onChange={e => handleFormChange('is_active', e.target.checked)}
                                        className="rounded bg-surface-container border-outline-variant text-primary focus:ring-primary h-4 w-4"
                                    />
                                    <label htmlFor="modal_is_active" className="text-xs font-bold text-on-surface-variant uppercase font-mono select-none">
                                        Active / Visible
                                    </label>
                                </div>
                            </div>

                            {/* Footer Buttons */}
                            <div className="pt-4 border-t border-outline-variant/30 flex justify-end gap-3 bg-surface">
                                <button
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                    className="border border-outline text-on-surface-variant font-mono text-xs font-bold px-5 py-2.5 rounded uppercase hover:bg-surface-container transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={saving}
                                    className="bg-primary text-on-primary font-mono text-xs font-bold px-6 py-2.5 rounded uppercase tracking-wider hover:brightness-110 transition-all"
                                >
                                    {saving ? 'Saving...' : 'Save Configuration'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
