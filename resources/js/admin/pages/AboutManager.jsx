import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function AboutManager() {
    const [settings, setSettings] = useState({});
    const [pillars, setPillars] = useState([]);
    const [advisors, setAdvisors] = useState([]);
    const [team, setTeam] = useState([]);
    const [milestones, setMilestones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState('settings'); // settings, pillars, advisors, team, milestones

    // Files inputs ref
    const heroFileRef = useRef(null);
    const ceoFileRef = useRef(null);
    const modalFileRef = useRef(null);

    // Modal control
    const [showModal, setShowModal] = useState(false);
    const [modalTarget, setModalTarget] = useState(null); // 'pillar', 'advisor', 'team', 'milestone'
    const [currentItem, setCurrentItem] = useState(null); // for editing

    // Form inputs for modals
    const [formTitle, setFormTitle] = useState('');
    const [formIcon, setFormIcon] = useState('');
    const [formDescription, setFormDescription] = useState('');
    const [formSortOrder, setFormSortOrder] = useState(0);

    const [formName, setFormName] = useState('');
    const [formRole, setFormRole] = useState('');
    const [formMessage, setFormMessage] = useState('');
    const [formBio, setFormBio] = useState('');
    const [formLinkedin, setFormLinkedin] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formYear, setFormYear] = useState('');

    // Toast and Confirm Modal states
    const [toast, setToast] = useState(null); // { message: '', type: 'success'|'error' }
    const [confirmModal, setConfirmModal] = useState({
        isOpen: false,
        title: '',
        message: '',
        onConfirm: null
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setLoading(true);
        axios.get('/api/admin/about')
            .then(res => {
                if (res.data.success) {
                    setSettings(res.data.settings || {});
                    setPillars(res.data.pillars || []);
                    setAdvisors(res.data.advisors || []);
                    setTeam(res.data.team || []);
                    setMilestones(res.data.milestones || []);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                triggerToast('Failed to load about data.', 'error');
                setLoading(false);
            });
    };

    const triggerToast = (message, type = 'success') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 4000);
    };

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

    // Bulksave settings with file upload support
    const handleSaveSettings = (e) => {
        e.preventDefault();
        setSaving(true);

        const formData = new FormData();
        formData.append('settings', JSON.stringify(settings));

        if (heroFileRef.current?.files[0]) {
            formData.append('about_hero_image', heroFileRef.current.files[0]);
        }
        if (ceoFileRef.current?.files[0]) {
            formData.append('about_ceo_image', ceoFileRef.current.files[0]);
        }

        axios.post('/api/admin/about/settings', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => {
                triggerToast('Settings updated successfully.', 'success');
                if (res.data.settings) {
                    setSettings(res.data.settings);
                }
                if (heroFileRef.current) heroFileRef.current.value = '';
                if (ceoFileRef.current) ceoFileRef.current.value = '';
                setSaving(false);
            })
            .catch(err => {
                console.error(err);
                triggerToast('Failed to update settings.', 'error');
                setSaving(false);
            });
    };

    // Open Add Modals
    const handleOpenAddModal = (target) => {
        setModalTarget(target);
        setCurrentItem(null);
        
        // Reset inputs
        setFormTitle('');
        setFormIcon('');
        setFormDescription('');
        setFormSortOrder(0);
        setFormName('');
        setFormRole('');
        setFormMessage('');
        setFormBio('');
        setFormLinkedin('');
        setFormEmail('');
        setFormYear('');
        if (modalFileRef.current) modalFileRef.current.value = '';

        setShowModal(true);
    };

    // Open Edit Modals
    const handleOpenEditModal = (target, item) => {
        setModalTarget(target);
        setCurrentItem(item);

        if (target === 'pillar') {
            setFormTitle(item.title || '');
            setFormIcon(item.icon || '');
            setFormDescription(item.description || '');
            setFormSortOrder(item.sort_order || 0);
        } else if (target === 'advisor') {
            setFormName(item.name || '');
            setFormRole(item.role || '');
            setFormMessage(item.message || '');
            setFormSortOrder(item.sort_order || 0);
        } else if (target === 'team') {
            setFormName(item.name || '');
            setFormRole(item.role || '');
            setFormBio(item.bio || '');
            setFormLinkedin(item.linkedin || '');
            setFormEmail(item.email || '');
            setFormSortOrder(item.sort_order || 0);
        } else if (target === 'milestone') {
            setFormYear(item.year || '');
            setFormTitle(item.title || '');
            setFormDescription(item.desc || '');
            setFormSortOrder(item.sort_order || 0);
        }

        if (modalFileRef.current) modalFileRef.current.value = '';
        setShowModal(true);
    };

    // Save item (Pillars, Advisors, Team, Milestones)
    const handleSaveItem = (e) => {
        e.preventDefault();
        setSaving(true);

        const formData = new FormData();
        if (modalFileRef.current?.files[0]) {
            formData.append('image_file', modalFileRef.current.files[0]);
        }

        let endpoint = '';
        if (modalTarget === 'pillar') {
            formData.append('title', formTitle);
            formData.append('icon', formIcon);
            formData.append('description', formDescription);
            formData.append('sort_order', formSortOrder);
            endpoint = currentItem ? `/api/admin/about/pillars/${currentItem.id}` : '/api/admin/about/pillars';
        } else if (modalTarget === 'advisor') {
            formData.append('name', formName);
            formData.append('role', formRole);
            formData.append('message', formMessage);
            formData.append('sort_order', formSortOrder);
            endpoint = currentItem ? `/api/admin/about/advisors/${currentItem.id}` : '/api/admin/about/advisors';
        } else if (modalTarget === 'team') {
            formData.append('name', formName);
            formData.append('role', formRole);
            formData.append('bio', formBio);
            formData.append('linkedin', formLinkedin);
            formData.append('email', formEmail);
            formData.append('sort_order', formSortOrder);
            endpoint = currentItem ? `/api/admin/about/team/${currentItem.id}` : '/api/admin/about/team';
        } else if (modalTarget === 'milestone') {
            formData.append('year', formYear);
            formData.append('title', formTitle);
            formData.append('desc', formDescription);
            formData.append('sort_order', formSortOrder);
            endpoint = currentItem ? `/api/admin/about/milestones/${currentItem.id}` : '/api/admin/about/milestones';
        }

        axios.post(endpoint, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => {
                triggerToast('Saved successfully.', 'success');
                setShowModal(false);
                setSaving(false);
                fetchData();
            })
            .catch(err => {
                console.error(err);
                triggerToast(err.response?.data?.message || 'Failed to save item.', 'error');
                setSaving(false);
            });
    };

    // Delete item
    const handleDeleteItem = (target, id) => {
        triggerConfirm(
            'Confirm Deletion',
            `Are you sure you want to delete this ${target} profile? This action is permanent.`,
            () => {
                let endpoint = '';
                if (target === 'pillar') endpoint = `/api/admin/about/pillars/${id}`;
                else if (target === 'advisor') endpoint = `/api/admin/about/advisors/${id}`;
                else if (target === 'team') endpoint = `/api/admin/about/team/${id}`;
                else if (target === 'milestone') endpoint = `/api/admin/about/milestones/${id}`;

                axios.delete(endpoint)
                    .then(res => {
                        triggerToast('Deleted successfully.', 'success');
                        fetchData();
                    })
                    .catch(err => {
                        console.error(err);
                        triggerToast('Failed to delete item.', 'error');
                    });
            }
        );
    };

    if (loading) {
        return (
            <div className="text-center py-12 text-sm text-on-surface-variant font-mono uppercase">
                Loading About configuration...
            </div>
        );
    }

    return (
        <div className="space-y-8 relative">
            {/* Tab navigation */}
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
                    onClick={() => setActiveTab('pillars')}
                    className={`px-6 py-3.5 text-xs font-bold uppercase tracking-widest border-b-2 shrink-0 transition-all ${
                        activeTab === 'pillars' 
                            ? 'border-sky-500 text-sky-400 bg-sky-950/20' 
                            : 'border-transparent text-on-surface-variant hover:text-white hover:bg-surface-container'
                    }`}
                >
                    Strategic Pillars ({pillars.length})
                </button>
                <button
                    onClick={() => setActiveTab('advisors')}
                    className={`px-6 py-3.5 text-xs font-bold uppercase tracking-widest border-b-2 shrink-0 transition-all ${
                        activeTab === 'advisors' 
                            ? 'border-sky-500 text-sky-400 bg-sky-950/20' 
                            : 'border-transparent text-on-surface-variant hover:text-white hover:bg-surface-container'
                    }`}
                >
                    Advisors ({advisors.length})
                </button>
                <button
                    onClick={() => setActiveTab('team')}
                    className={`px-6 py-3.5 text-xs font-bold uppercase tracking-widest border-b-2 shrink-0 transition-all ${
                        activeTab === 'team' 
                            ? 'border-sky-500 text-sky-400 bg-sky-950/20' 
                            : 'border-transparent text-on-surface-variant hover:text-white hover:bg-surface-container'
                    }`}
                >
                    Leadership Team ({team.length})
                </button>
                <button
                    onClick={() => setActiveTab('milestones')}
                    className={`px-6 py-3.5 text-xs font-bold uppercase tracking-widest border-b-2 shrink-0 transition-all ${
                        activeTab === 'milestones' 
                            ? 'border-sky-500 text-sky-400 bg-sky-950/20' 
                            : 'border-transparent text-on-surface-variant hover:text-white hover:bg-surface-container'
                    }`}
                >
                    Milestones ({milestones.length})
                </button>
            </div>

            {/* TAB 1: GENERAL SETTINGS */}
            {activeTab === 'settings' && (
                <form onSubmit={handleSaveSettings} className="bg-surface border border-outline-variant/30 rounded-xl p-4 sm:p-6 md:p-8 space-y-6 max-w-4xl shadow-xl">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-sky-400 font-mono border-b border-outline-variant/30 pb-3 mb-6">
                        Hero Banner settings
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Hero Title</label>
                            <input 
                                type="text"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.about_hero_title || ''}
                                onChange={e => setSettings({ ...settings, about_hero_title: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Hero Subtitle</label>
                            <input 
                                type="text"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.about_hero_subtitle || ''}
                                onChange={e => setSettings({ ...settings, about_hero_subtitle: e.target.value })}
                            />
                        </div>
                        <div className="sm:col-span-2 space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Hero Description</label>
                            <textarea 
                                rows="2"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg p-4 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.about_hero_description || ''}
                                onChange={e => setSettings({ ...settings, about_hero_description: e.target.value })}
                            />
                        </div>
                        <div className="sm:col-span-2 space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">Hero Cover Background</label>
                            {settings.about_hero_image && (
                                <img src={settings.about_hero_image} alt="Hero Banner Preview" className="h-24 w-auto object-cover rounded-lg border border-outline-variant/20 mb-2" />
                            )}
                            <input 
                                ref={heroFileRef}
                                type="file" accept="image/*"
                                className="w-full text-xs text-on-surface-variant file:mr-4 file:py-2.5 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[#0b1519] file:text-white hover:file:bg-sky-950/20"
                            />
                        </div>
                    </div>

                    <h3 className="text-sm font-bold uppercase tracking-widest text-sky-400 font-mono border-b border-outline-variant/30 pb-3 pt-6 mb-6">
                        Company Narrative & Counter Stats
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="sm:col-span-3 space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Narrative Title</label>
                            <input 
                                type="text"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.about_story_title || ''}
                                onChange={e => setSettings({ ...settings, about_story_title: e.target.value })}
                            />
                        </div>
                        <div className="sm:col-span-3 space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Paragraph 1</label>
                            <textarea 
                                rows="3"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg p-4 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.about_story_p1 || ''}
                                onChange={e => setSettings({ ...settings, about_story_p1: e.target.value })}
                            />
                        </div>
                        <div className="sm:col-span-3 space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Paragraph 2</label>
                            <textarea 
                                rows="3"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg p-4 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.about_story_p2 || ''}
                                onChange={e => setSettings({ ...settings, about_story_p2: e.target.value })}
                            />
                        </div>
                        <div className="sm:col-span-3 space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Paragraph 3</label>
                            <textarea 
                                rows="3"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg p-4 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.about_story_p3 || ''}
                                onChange={e => setSettings({ ...settings, about_story_p3: e.target.value })}
                            />
                        </div>

                        {/* Stat 1 */}
                        <div className="p-4 border border-outline-variant/30 rounded-xl space-y-3 bg-[#0b1519]/50">
                            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono border-b border-outline-variant/20 pb-1">Stat Metric 1</h4>
                            <div className="space-y-1">
                                <label className="text-[10px] text-on-surface-variant font-bold">Number/Value</label>
                                <input type="text" className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2 text-white text-xs" value={settings.about_stat1_number || ''} onChange={e => setSettings({...settings, about_stat1_number: e.target.value})}/>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] text-on-surface-variant font-bold">Short Label</label>
                                <input type="text" className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2 text-white text-xs" value={settings.about_stat1_label || ''} onChange={e => setSettings({...settings, about_stat1_label: e.target.value})}/>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] text-on-surface-variant font-bold">Description</label>
                                <textarea rows="2" className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2 text-white text-xs" value={settings.about_stat1_desc || ''} onChange={e => setSettings({...settings, about_stat1_desc: e.target.value})}/>
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="p-4 border border-outline-variant/30 rounded-xl space-y-3 bg-[#0b1519]/50">
                            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono border-b border-outline-variant/20 pb-1">Stat Metric 2</h4>
                            <div className="space-y-1">
                                <label className="text-[10px] text-on-surface-variant font-bold">Number/Value</label>
                                <input type="text" className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2 text-white text-xs" value={settings.about_stat2_number || ''} onChange={e => setSettings({...settings, about_stat2_number: e.target.value})}/>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] text-on-surface-variant font-bold">Short Label</label>
                                <input type="text" className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2 text-white text-xs" value={settings.about_stat2_label || ''} onChange={e => setSettings({...settings, about_stat2_label: e.target.value})}/>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] text-on-surface-variant font-bold">Description</label>
                                <textarea rows="2" className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2 text-white text-xs" value={settings.about_stat2_desc || ''} onChange={e => setSettings({...settings, about_stat2_desc: e.target.value})}/>
                            </div>
                        </div>

                        {/* Stat 3 */}
                        <div className="p-4 border border-outline-variant/30 rounded-xl space-y-3 bg-[#0b1519]/50">
                            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono border-b border-outline-variant/20 pb-1">Stat Metric 3</h4>
                            <div className="space-y-1">
                                <label className="text-[10px] text-on-surface-variant font-bold">Number/Value</label>
                                <input type="text" className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2 text-white text-xs" value={settings.about_stat3_number || ''} onChange={e => setSettings({...settings, about_stat3_number: e.target.value})}/>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] text-on-surface-variant font-bold">Short Label</label>
                                <input type="text" className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2 text-white text-xs" value={settings.about_stat3_label || ''} onChange={e => setSettings({...settings, about_stat3_label: e.target.value})}/>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] text-on-surface-variant font-bold">Description</label>
                                <textarea rows="2" className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2 text-white text-xs" value={settings.about_stat3_desc || ''} onChange={e => setSettings({...settings, about_stat3_desc: e.target.value})}/>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-sm font-bold uppercase tracking-widest text-sky-400 font-mono border-b border-outline-variant/30 pb-3 pt-6 mb-6">
                        CEO / Founder Leadership Quote
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">CEO Name</label>
                            <input 
                                type="text"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.about_ceo_name || ''}
                                onChange={e => setSettings({ ...settings, about_ceo_name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">CEO Role Title</label>
                            <input 
                                type="text"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.about_ceo_role || ''}
                                onChange={e => setSettings({ ...settings, about_ceo_role: e.target.value })}
                            />
                        </div>
                        <div className="sm:col-span-2 space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">CEO Signature Message</label>
                            <textarea 
                                rows="3"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg p-4 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.about_ceo_message || ''}
                                onChange={e => setSettings({ ...settings, about_ceo_message: e.target.value })}
                            />
                        </div>
                        <div className="sm:col-span-2 space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">CEO Portrait Image</label>
                            {settings.about_ceo_image && (
                                <img src={settings.about_ceo_image} alt="CEO Portrait Preview" className="h-24 w-auto object-cover rounded-lg border border-outline-variant/20 mb-2" />
                            )}
                            <input 
                                ref={ceoFileRef}
                                type="file" accept="image/*"
                                className="w-full text-xs text-on-surface-variant file:mr-4 file:py-2.5 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[#0b1519] file:text-white hover:file:bg-sky-950/20"
                            />
                        </div>
                    </div>

                    <div className="pt-4 border-t border-outline-variant/30 flex justify-end">
                        <button
                            type="submit"
                            disabled={saving}
                            className="w-full sm:w-auto bg-sky-500 hover:brightness-110 text-white px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 transition-all"
                        >
                            {saving ? 'Saving...' : 'Save General Info'}
                        </button>
                    </div>
                </form>
            )}

            {/* TAB 2: PILLARS CRUD */}
            {activeTab === 'pillars' && (
                <div className="space-y-6">
                    <div className="flex justify-between items-center bg-surface p-4 border border-outline-variant/30 rounded-lg">
                        <span className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant font-mono">
                            Strategic Pillars Defined: {pillars.length}
                        </span>
                        <button onClick={() => handleOpenAddModal('pillar')} className="bg-sky-500 hover:brightness-110 text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-1.5 shadow-md">
                            <span className="material-symbols-outlined text-sm">add</span> Add Pillar
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map(pillar => (
                            <div key={pillar.id} className="bg-surface border border-outline-variant/30 rounded-xl p-6 flex flex-col justify-between shadow-lg">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start border-b border-outline-variant/20 pb-3 gap-2">
                                        <div>
                                            <span className="material-symbols-outlined text-tertiary text-2xl">{pillar.icon}</span>
                                            <h4 className="font-bold text-white uppercase text-base tracking-tight mt-1">{pillar.title}</h4>
                                        </div>
                                        <span className="text-[10px] text-on-surface-variant font-mono">Sort: {pillar.sort_order}</span>
                                    </div>
                                    <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-4">
                                        {pillar.description}
                                    </p>
                                </div>
                                <div className="pt-6 border-t border-outline-variant/30 flex gap-2 mt-4">
                                    <button onClick={() => handleOpenEditModal('pillar', pillar)} className="flex-grow bg-[#0b1519] border border-outline-variant/30 text-sky-400 hover:text-white hover:bg-sky-950/20 py-2 rounded text-xs font-semibold font-mono tracking-wider transition-all flex items-center justify-center gap-1">
                                        <span className="material-symbols-outlined text-sm">edit</span> Edit
                                    </button>
                                    <button onClick={() => handleDeleteItem('pillar', pillar.id)} className="bg-red-500/10 border border-red-500/20 hover:bg-red-500 hover:text-white text-red-400 p-2 rounded transition-all">
                                        <span className="material-symbols-outlined text-sm">delete</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* TAB 3: ADVISORS CRUD */}
            {activeTab === 'advisors' && (
                <div className="space-y-6">
                    <div className="flex justify-between items-center bg-surface p-4 border border-outline-variant/30 rounded-lg">
                        <span className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant font-mono">
                            Advisors Defined: {advisors.length}
                        </span>
                        <button onClick={() => handleOpenAddModal('advisor')} className="bg-sky-500 hover:brightness-110 text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-1.5 shadow-md">
                            <span className="material-symbols-outlined text-sm">add</span> Add Advisor
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {advisors.map(advisor => (
                            <div key={advisor.id} className="bg-surface border border-outline-variant/30 rounded-xl p-6 flex flex-col justify-between shadow-lg">
                                <div className="space-y-4">
                                    <div className="flex gap-4 items-start border-b border-outline-variant/20 pb-3">
                                        <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-outline-variant/30 bg-[#0b1519]">
                                            {advisor.image && (
                                                <img src={advisor.image} alt={advisor.name} className="w-full h-full object-cover" />
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white uppercase text-base tracking-tight">{advisor.name}</h4>
                                            <p className="text-[10px] text-tertiary uppercase font-mono mt-0.5">{advisor.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-on-surface-variant italic leading-relaxed whitespace-pre-line">
                                        "{advisor.message}"
                                    </p>
                                </div>
                                <div className="pt-6 border-t border-outline-variant/30 flex gap-2 mt-4">
                                    <button onClick={() => handleOpenEditModal('advisor', advisor)} className="flex-grow bg-[#0b1519] border border-outline-variant/30 text-sky-400 hover:text-white hover:bg-sky-950/20 py-2 rounded text-xs font-semibold font-mono tracking-wider transition-all flex items-center justify-center gap-1">
                                        <span className="material-symbols-outlined text-sm">edit</span> Modify
                                    </button>
                                    <button onClick={() => handleDeleteItem('advisor', advisor.id)} className="bg-red-500/10 border border-red-500/20 hover:bg-red-500 hover:text-white text-red-400 p-2 rounded transition-all">
                                        <span className="material-symbols-outlined text-sm">delete</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* TAB 4: TEAM MEMBERS CRUD */}
            {activeTab === 'team' && (
                <div className="space-y-6">
                    <div className="flex justify-between items-center bg-surface p-4 border border-outline-variant/30 rounded-lg">
                        <span className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant font-mono">
                            Leadership Team: {team.length}
                        </span>
                        <button onClick={() => handleOpenAddModal('team')} className="bg-sky-500 hover:brightness-110 text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-1.5 shadow-md">
                            <span className="material-symbols-outlined text-sm">add</span> Add Member
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {team.map(member => (
                            <div key={member.id} className="bg-surface border border-outline-variant/30 rounded-xl p-6 flex flex-col justify-between shadow-lg">
                                <div className="space-y-4">
                                    <div className="flex gap-4 items-start border-b border-outline-variant/20 pb-3">
                                        <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-outline-variant/30 bg-[#0b1519]">
                                            {member.image && (
                                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white uppercase text-base tracking-tight">{member.name}</h4>
                                            <p className="text-[10px] text-tertiary uppercase font-mono mt-0.5">{member.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-on-surface-variant leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>
                                <div className="pt-6 border-t border-outline-variant/30 flex gap-2 mt-4">
                                    <button onClick={() => handleOpenEditModal('team', member)} className="flex-grow bg-[#0b1519] border border-outline-variant/30 text-sky-400 hover:text-white hover:bg-sky-950/20 py-2 rounded text-xs font-semibold font-mono tracking-wider transition-all flex items-center justify-center gap-1">
                                        <span className="material-symbols-outlined text-sm">edit</span> Edit Profile
                                    </button>
                                    <button onClick={() => handleDeleteItem('team', member.id)} className="bg-red-500/10 border border-red-500/20 hover:bg-red-500 hover:text-white text-red-400 p-2 rounded transition-all">
                                        <span className="material-symbols-outlined text-sm">delete</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* TAB 5: MILESTONES */}
            {activeTab === 'milestones' && (
                <div className="space-y-6">
                    <div className="flex justify-between items-center bg-surface p-4 border border-outline-variant/30 rounded-lg">
                        <span className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant font-mono">
                            Timeline Years Defined: {milestones.length}
                        </span>
                        <button onClick={() => handleOpenAddModal('milestone')} className="bg-sky-500 hover:brightness-110 text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-1.5 shadow-md">
                            <span className="material-symbols-outlined text-sm">add</span> Add Milestone
                        </button>
                    </div>

                    <div className="overflow-x-auto bg-surface border border-outline-variant/30 rounded-xl shadow-lg">
                        <table className="w-full text-left text-xs text-on-surface-variant">
                            <thead className="bg-[#0b1519] uppercase tracking-wider font-mono text-[10px] text-sky-400 border-b border-outline-variant/30">
                                <tr>
                                    <th className="px-6 py-4">Year</th>
                                    <th className="px-6 py-4">Title Heading</th>
                                    <th className="px-6 py-4">Description Text</th>
                                    <th className="px-6 py-4">Sort Order</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-outline-variant/10">
                                {milestones.map(mile => (
                                    <tr key={mile.id} className="hover:bg-sky-950/5">
                                        <td className="px-6 py-4 font-bold text-white font-mono">{mile.year}</td>
                                        <td className="px-6 py-4 font-bold text-white uppercase">{mile.title}</td>
                                        <td className="px-6 py-4 max-w-sm truncate">{mile.desc}</td>
                                        <td className="px-6 py-4 font-mono">{mile.sort_order}</td>
                                        <td className="px-6 py-4 text-right space-x-3">
                                            <button onClick={() => handleOpenEditModal('milestone', mile)} className="text-sky-400 hover:text-white font-mono uppercase">Edit</button>
                                            <button onClick={() => handleDeleteItem('milestone', mile.id)} className="text-red-400 hover:text-red-500 font-mono uppercase">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* ADD/EDIT ITEM MODAL */}
            {showModal && (
                <div className="fixed inset-0 bg-[#000000]/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
                    <div className="bg-[#111d23] border border-outline-variant/30 rounded-xl w-full max-w-lg shadow-2xl flex flex-col">
                        <div className="h-16 border-b border-outline-variant/30 px-4 sm:px-6 flex items-center justify-between">
                            <h3 className="font-bold text-white uppercase text-xs sm:text-sm tracking-widest font-mono">
                                {currentItem ? `Modify ${modalTarget}` : `Add New ${modalTarget}`}
                            </h3>
                            <button onClick={() => setShowModal(false)} className="text-on-surface-variant hover:text-white transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <form onSubmit={handleSaveItem} className="p-4 sm:p-6 space-y-4">
                            {/* PILLAR FORM FIELDS */}
                            {modalTarget === 'pillar' && (
                                <>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Pillar Title</label>
                                            <input type="text" required placeholder="e.g. Mission" className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs" value={formTitle} onChange={e => setFormTitle(e.target.value)}/>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Icon Tag (Material icon)</label>
                                            <input type="text" required placeholder="e.g. rocket_launch" className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs" value={formIcon} onChange={e => setFormIcon(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Description Text</label>
                                        <textarea rows="4" required className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs" value={formDescription} onChange={e => setFormDescription(e.target.value)}/>
                                    </div>
                                </>
                            )}

                            {/* ADVISOR FORM FIELDS */}
                            {modalTarget === 'advisor' && (
                                <>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Advisor Name</label>
                                            <input type="text" required placeholder="e.g. Dr. Aris Thorne" className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs" value={formName} onChange={e => setFormName(e.target.value)}/>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Advisor Role</label>
                                            <input type="text" required placeholder="e.g. Senior Structural Advisor" className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs" value={formRole} onChange={e => setFormRole(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Advisory Message</label>
                                        <textarea rows="4" required className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs" value={formMessage} onChange={e => setFormMessage(e.target.value)}/>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Headshot Avatar Image</label>
                                        <input ref={modalFileRef} type="file" accept="image/*" className="w-full text-xs text-on-surface-variant file:mr-4 file:py-2 file:px-3 file:rounded file:bg-[#0b1519] file:text-white hover:file:bg-sky-950/20"/>
                                    </div>
                                </>
                            )}

                            {/* TEAM MEMBER FORM FIELDS */}
                            {modalTarget === 'team' && (
                                <>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Member Name</label>
                                            <input type="text" required placeholder="e.g. Sarah Chen, PhD" className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs" value={formName} onChange={e => setFormName(e.target.value)}/>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Role Title</label>
                                            <input type="text" required placeholder="e.g. Lead Material Analyst" className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs" value={formRole} onChange={e => setFormRole(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">LinkedIn Profile (URL)</label>
                                            <input type="url" placeholder="https://..." className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs" value={formLinkedin} onChange={e => setFormLinkedin(e.target.value)}/>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Email Address</label>
                                            <input type="email" placeholder="s.chen@..." className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs" value={formEmail} onChange={e => setFormEmail(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Short Biography</label>
                                        <textarea rows="3" required className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs" value={formBio} onChange={e => setFormBio(e.target.value)}/>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Avatar Headshot Image</label>
                                        <input ref={modalFileRef} type="file" accept="image/*" className="w-full text-xs text-on-surface-variant file:mr-4 file:py-2 file:px-3 file:rounded file:bg-[#0b1519] file:text-white hover:file:bg-sky-950/20"/>
                                    </div>
                                </>
                            )}

                            {/* MILESTONES FORM FIELDS */}
                            {modalTarget === 'milestone' && (
                                <>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Year</label>
                                            <input type="text" required placeholder="e.g. 2026" className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs" value={formYear} onChange={e => setFormYear(e.target.value)}/>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Milestone Title</label>
                                            <input type="text" required placeholder="e.g. Expansion" className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs" value={formTitle} onChange={e => setFormTitle(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Detailed Description</label>
                                        <textarea rows="4" required className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs" value={formDescription} onChange={e => setFormDescription(e.target.value)}/>
                                    </div>
                                </>
                            )}

                            {/* Sort order (common field) */}
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Sorting Index Order</label>
                                <input type="number" className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs" value={formSortOrder} onChange={e => setFormSortOrder(e.target.value)}/>
                            </div>

                            <div className="pt-4 border-t border-outline-variant/30 flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="bg-transparent border border-outline-variant/80 hover:bg-surface-container text-on-surface-variant hover:text-white px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider font-mono transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={saving}
                                    className="bg-sky-500 hover:brightness-110 text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 shadow-lg disabled:opacity-50 transition-all"
                                >
                                    {saving ? 'Saving...' : 'Save Item'}
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
