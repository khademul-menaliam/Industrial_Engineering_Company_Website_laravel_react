import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ContactManager() {
    const [settings, setSettings] = useState({
        contact_title: '',
        contact_subtitle: '',
        contact_urgent_title: '',
        contact_urgent_description: '',
        contact_urgent_btn: '',
        contact_address: '',
        contact_phone: '',
        contact_phone_hours: '',
        contact_email: '',
        contact_map_image: '',
        contact_response_time: ''
    });
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState('settings'); // settings, inquiries

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
        axios.get('/api/admin/contact')
            .then(res => {
                if (res.data.success) {
                    setSettings(prev => ({
                        ...prev,
                        ...(res.data.settings || {})
                    }));
                    setInquiries(res.data.inquiries || []);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                triggerToast('Failed to load contact data.', 'error');
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

    const handleSaveSettings = (e) => {
        e.preventDefault();
        setSaving(false);
        axios.post('/api/admin/contact/settings', { settings })
            .then(res => {
                triggerToast('Contact settings saved successfully.', 'success');
            })
            .catch(err => {
                console.error(err);
                triggerToast('Failed to update settings.', 'error');
            });
    };

    const handleDeleteInquiry = (id) => {
        triggerConfirm(
            'Remove Message',
            'Are you sure you want to delete this message profile? This operation is permanent.',
            () => {
                axios.delete(`/api/admin/contact/inquiries/${id}`)
                    .then(res => {
                        triggerToast('Message removed successfully.', 'success');
                        fetchData();
                    })
                    .catch(err => {
                        console.error(err);
                        triggerToast('Failed to delete message.', 'error');
                    });
            }
        );
    };

    if (loading) {
        return (
            <div className="text-center py-12 text-sm text-on-surface-variant font-mono uppercase">
                Loading Contact Configuration...
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
                    Contact Coordinates Settings
                </button>
                <button
                    onClick={() => setActiveTab('inquiries')}
                    className={`px-6 py-3.5 text-xs font-bold uppercase tracking-widest border-b-2 shrink-0 transition-all ${
                        activeTab === 'inquiries' 
                            ? 'border-sky-500 text-sky-400 bg-sky-950/20' 
                            : 'border-transparent text-on-surface-variant hover:text-white hover:bg-surface-container'
                    }`}
                >
                    User Inquiries ({inquiries.length})
                </button>
            </div>

            {/* TAB 1: COORDINATES SETTINGS */}
            {activeTab === 'settings' && (
                <form onSubmit={handleSaveSettings} className="bg-surface border border-outline-variant/30 rounded-xl p-4 sm:p-6 md:p-8 space-y-6 max-w-4xl shadow-xl">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-sky-400 font-mono border-b border-outline-variant/30 pb-3 mb-6">
                        Page Title & Callout settings
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Page Title Heading</label>
                            <input 
                                type="text"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.contact_title || ''}
                                onChange={e => setSettings({ ...settings, contact_title: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Page Title Subtitle</label>
                            <input 
                                type="text"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.contact_subtitle || ''}
                                onChange={e => setSettings({ ...settings, contact_subtitle: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Safety Urgent Banner Title</label>
                            <input 
                                type="text"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.contact_urgent_title || ''}
                                onChange={e => setSettings({ ...settings, contact_urgent_title: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Safety Urgent Action Button</label>
                            <input 
                                type="text"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.contact_urgent_btn || ''}
                                onChange={e => setSettings({ ...settings, contact_urgent_btn: e.target.value })}
                            />
                        </div>
                        <div className="sm:col-span-2 space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Safety Urgent Description</label>
                            <textarea 
                                rows="2"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg p-4 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.contact_urgent_description || ''}
                                onChange={e => setSettings({ ...settings, contact_urgent_description: e.target.value })}
                            />
                        </div>
                    </div>

                    <h3 className="text-sm font-bold uppercase tracking-widest text-sky-400 font-mono border-b border-outline-variant/30 pb-3 pt-6 mb-6">
                        Coordinates & Maps settings
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Office Phone Support</label>
                            <input 
                                type="text"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.contact_phone || ''}
                                onChange={e => setSettings({ ...settings, contact_phone: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Office Phone Hours</label>
                            <input 
                                type="text"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.contact_phone_hours || ''}
                                onChange={e => setSettings({ ...settings, contact_phone_hours: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Office Email Address</label>
                            <input 
                                type="email"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.contact_email || ''}
                                onChange={e => setSettings({ ...settings, contact_email: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Expected Response Time</label>
                            <input 
                                type="text"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.contact_response_time || ''}
                                onChange={e => setSettings({ ...settings, contact_response_time: e.target.value })}
                            />
                        </div>
                        <div className="sm:col-span-2 space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Office Maps Cover URL</label>
                            <input 
                                type="text"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.contact_map_image || ''}
                                onChange={e => setSettings({ ...settings, contact_map_image: e.target.value })}
                            />
                        </div>
                        <div className="sm:col-span-2 space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Office Physical Address</label>
                            <textarea 
                                rows="3"
                                className="w-full bg-[#0b1519] border border-outline-variant/30 rounded-lg p-4 text-white text-sm focus:border-sky-500 focus:outline-none"
                                value={settings.contact_address || ''}
                                onChange={e => setSettings({ ...settings, contact_address: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="pt-4 border-t border-outline-variant/30 flex justify-end">
                        <button
                            type="submit"
                            disabled={saving}
                            className="w-full sm:w-auto bg-sky-500 hover:brightness-110 text-white px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 transition-all"
                        >
                            {saving ? 'Saving Config...' : 'Save coordinates'}
                        </button>
                    </div>
                </form>
            )}

            {/* TAB 2: USER INQUIRIES */}
            {activeTab === 'inquiries' && (
                <div className="space-y-6">
                    <span className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant font-mono">
                        Submitted Message Listings: {inquiries.length}
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {inquiries.map(inq => (
                            <div key={inq.id} className="bg-surface border border-outline-variant/30 rounded-xl p-6 flex flex-col justify-between shadow-lg">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start border-b border-outline-variant/20 pb-3 gap-2">
                                        <div>
                                            <h4 className="font-bold text-white uppercase text-base tracking-tight">{inq.name}</h4>
                                            <p className="text-xs text-on-surface-variant font-mono">{inq.email}</p>
                                        </div>
                                        <button 
                                            onClick={() => handleDeleteInquiry(inq.id)}
                                            className="text-red-400 hover:text-red-500 p-1.5 bg-red-500/10 rounded border border-red-500/20 transition-all"
                                            title="Delete Message"
                                        >
                                            <span className="material-symbols-outlined text-sm">delete</span>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                        <div className="font-mono text-on-surface-variant">
                                            Interest: <span className="text-sky-400 font-bold uppercase">{inq.department}</span>
                                        </div>
                                        <div className="font-mono text-on-surface-variant sm:text-right">
                                            Sent: <span className="text-white">{new Date(inq.created_at).toLocaleString()}</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-on-surface-variant bg-[#0b1519] p-4 rounded border border-outline-variant/10 whitespace-pre-line leading-relaxed">
                                        {inq.details}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {inquiries.length === 0 && (
                            <div className="col-span-full text-center py-12 text-sm text-on-surface-variant font-mono uppercase border border-outline-variant/30 rounded-xl bg-surface">
                                No contact submissions have been received.
                            </div>
                        )}
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
