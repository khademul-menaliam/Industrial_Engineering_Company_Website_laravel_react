import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CareersManager() {
    const [vacancies, setVacancies] = useState([]);
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('vacancies'); // vacancies, applications
    const [showModal, setShowModal] = useState(false);
    const [currentVacancy, setCurrentVacancy] = useState(null);

    // Vacancy Form States
    const [formRef, setFormRef] = useState('');
    const [formTitle, setFormTitle] = useState('');
    const [formType, setFormType] = useState('Full-Time');
    const [formDesc, setFormDesc] = useState('');
    const [formSortOrder, setFormSortOrder] = useState(0);
    const [formIsActive, setFormIsActive] = useState(true);
    const [savingVacancy, setSavingVacancy] = useState(false);

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
        axios.get('/api/admin/careers')
            .then(res => {
                if (res.data.success) {
                    setVacancies(res.data.vacancies || []);
                    setApplications(res.data.applications || []);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                triggerToast('Failed to load career data.', 'error');
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

    // Vacancy Handlers
    const handleOpenAddModal = () => {
        setCurrentVacancy(null);
        setFormRef('');
        setFormTitle('');
        setFormType('Full-Time');
        setFormDesc('');
        setFormSortOrder(vacancies.length + 1);
        setFormIsActive(true);
        setShowModal(true);
    };

    const handleOpenEditModal = (v) => {
        setCurrentVacancy(v);
        setFormRef(v.ref || '');
        setFormTitle(v.title || '');
        setFormType(v.type || 'Full-Time');
        setFormDesc(v.description || '');
        setFormSortOrder(v.sort_order || 0);
        setFormIsActive(!!v.is_active);
        setShowModal(true);
    };

    const handleSaveVacancy = (e) => {
        e.preventDefault();
        setSavingVacancy(true);

        const payload = {
            ref: formRef,
            title: formTitle,
            type: formType,
            description: formDesc,
            sort_order: formSortOrder,
            is_active: formIsActive
        };

        const endpoint = currentVacancy 
            ? `/api/admin/careers/vacancies/${currentVacancy.id}` 
            : '/api/admin/careers/vacancies';

        axios.post(endpoint, payload)
            .then(res => {
                triggerToast(currentVacancy ? 'Vacancy updated successfully.' : 'Vacancy created successfully.', 'success');
                setShowModal(false);
                setSavingVacancy(false);
                fetchData();
            })
            .catch(err => {
                console.error(err);
                triggerToast(err.response?.data?.message || 'Failed to save vacancy.', 'error');
                setSavingVacancy(false);
            });
    };

    const handleDeleteVacancy = (id) => {
        triggerConfirm(
            'Remove Vacancy',
            'Are you sure you want to delete this vacancy profile? This operation is permanent.',
            () => {
                axios.delete(`/api/admin/careers/vacancies/${id}`)
                    .then(res => {
                        triggerToast('Job vacancy removed successfully.', 'success');
                        fetchData();
                    })
                    .catch(err => {
                        console.error(err);
                        triggerToast('Failed to delete job vacancy.', 'error');
                    });
            }
        );
    };

    const handleDeleteApplication = (id) => {
        triggerConfirm(
            'Remove Application',
            'Are you sure you want to delete this applicant profile? This action will permanently remove their application and attached technical dossier file.',
            () => {
                axios.delete(`/api/admin/careers/applications/${id}`)
                    .then(res => {
                        triggerToast('Applicant profile deleted successfully.', 'success');
                        fetchData();
                    })
                    .catch(err => {
                        console.error(err);
                        triggerToast('Failed to delete application.', 'error');
                    });
            }
        );
    };

    if (loading) {
        return (
            <div className="text-center py-12 text-sm text-on-surface-variant font-mono uppercase">
                Loading Career Configuration...
            </div>
        );
    }

    return (
        <div className="space-y-8 relative">
            {/* Tab navigation */}
            <div className="flex border-b border-outline-variant/30 gap-2 overflow-x-auto pb-px">
                <button
                    onClick={() => setActiveTab('vacancies')}
                    className={`px-6 py-3.5 text-xs font-bold uppercase tracking-widest border-b-2 shrink-0 transition-all ${
                        activeTab === 'vacancies' 
                            ? 'border-sky-500 text-sky-400 bg-sky-950/20' 
                            : 'border-transparent text-on-surface-variant hover:text-white hover:bg-surface-container'
                    }`}
                >
                    Job Vacancies ({vacancies.length})
                </button>
                <button
                    onClick={() => setActiveTab('applications')}
                    className={`px-6 py-3.5 text-xs font-bold uppercase tracking-widest border-b-2 shrink-0 transition-all ${
                        activeTab === 'applications' 
                            ? 'border-sky-500 text-sky-400 bg-sky-950/20' 
                            : 'border-transparent text-on-surface-variant hover:text-white hover:bg-surface-container'
                    }`}
                >
                    Applicant Profiles ({applications.length})
                </button>
            </div>

            {/* TAB 1: VACANCIES CRUD */}
            {activeTab === 'vacancies' && (
                <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-surface p-4 border border-outline-variant/30 rounded-lg gap-4">
                        <span className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant font-mono">
                            Total Open Positions: {vacancies.length}
                        </span>
                        <button
                            onClick={handleOpenAddModal}
                            className="w-full sm:w-auto bg-sky-500 hover:brightness-110 text-white px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-all shadow-md"
                        >
                            <span className="material-symbols-outlined text-sm">add</span> Add Vacancy
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {vacancies.map(v => (
                            <div key={v.id} className="bg-surface border border-outline-variant/30 rounded-xl p-6 flex flex-col justify-between shadow-lg">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start border-b border-outline-variant/20 pb-3 gap-2">
                                        <div>
                                            <span className="bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded">
                                                {v.type}
                                            </span>
                                            <h4 className="font-bold text-white uppercase text-base tracking-tight mt-2">{v.title}</h4>
                                            <p className="text-[10px] text-on-surface-variant font-mono uppercase mt-1">Ref: {v.ref}</p>
                                        </div>
                                        <span className={`text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded shrink-0 ${v.is_active ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'}`}>
                                            {v.is_active ? 'Active' : 'Inactive'}
                                        </span>
                                    </div>
                                    <p className="text-xs text-on-surface-variant line-clamp-4 leading-relaxed">
                                        {v.description}
                                    </p>
                                </div>
                                <div className="pt-6 border-t border-outline-variant/30 flex gap-2 mt-4">
                                    <button
                                        onClick={() => handleOpenEditModal(v)}
                                        className="flex-grow bg-[#0b1519] border border-outline-variant/30 text-sky-400 hover:text-white hover:bg-sky-950/20 py-2 rounded text-xs font-semibold font-mono tracking-wider transition-all flex items-center justify-center gap-1.5"
                                    >
                                        <span className="material-symbols-outlined text-sm">edit</span> Modify
                                    </button>
                                    <button
                                        onClick={() => handleDeleteVacancy(v.id)}
                                        className="bg-red-500/10 border border-red-500/20 hover:bg-red-500 hover:text-white text-red-400 p-2 rounded transition-all"
                                        title="Delete Vacancy"
                                    >
                                        <span className="material-symbols-outlined text-sm">delete</span>
                                    </button>
                                </div>
                            </div>
                        ))}

                        {vacancies.length === 0 && (
                            <div className="col-span-full text-center py-12 text-sm text-on-surface-variant font-mono uppercase border border-outline-variant/30 rounded-xl bg-surface">
                                No job openings have been defined.
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* TAB 2: APPLICATIONS LISTING */}
            {activeTab === 'applications' && (
                <div className="space-y-6">
                    <span className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant font-mono">
                        Submitted Job Applications: {applications.length}
                    </span>

                    <div className="overflow-x-auto bg-surface border border-outline-variant/30 rounded-xl shadow-lg">
                        <table className="w-full text-left text-xs text-on-surface-variant">
                            <thead className="bg-[#0b1519] uppercase tracking-wider font-mono text-[10px] text-sky-400 border-b border-outline-variant/30">
                                <tr>
                                    <th className="px-6 py-4">Applicant Name</th>
                                    <th className="px-6 py-4">Email Address</th>
                                    <th className="px-6 py-4">Position</th>
                                    <th className="px-6 py-4">Dossier / Resume</th>
                                    <th className="px-6 py-4">Date Sent</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-outline-variant/10">
                                {applications.map(app => (
                                    <tr key={app.id} className="hover:bg-sky-950/5">
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-white uppercase">{app.name}</div>
                                            {app.linkedin && (
                                                <a href={app.linkedin} target="_blank" rel="noopener noreferrer" className="text-[10px] text-sky-400 hover:underline font-mono inline-flex items-center gap-0.5 mt-0.5">
                                                    LinkedIn <span className="material-symbols-outlined text-[10px]">open_in_new</span>
                                                </a>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 font-mono">{app.email}</td>
                                        <td className="px-6 py-4 font-bold text-white uppercase">{app.position}</td>
                                        <td className="px-6 py-4">
                                            {app.dossier_path ? (
                                                <a href={app.dossier_path} target="_blank" rel="noopener noreferrer" className="bg-sky-500/10 border border-sky-500/20 text-sky-400 hover:bg-sky-500 hover:text-white px-3 py-1.5 rounded font-mono font-bold uppercase tracking-wider text-[9px] inline-flex items-center gap-1 transition-all">
                                                    <span className="material-symbols-outlined text-xs">download</span> Download Resume
                                                </a>
                                            ) : (
                                                <span className="text-on-surface-variant/50 font-mono italic">No File</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 font-mono text-[10px]">
                                            {new Date(app.created_at).toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button 
                                                onClick={() => handleDeleteApplication(app.id)}
                                                className="text-red-400 hover:text-red-500 font-semibold font-mono uppercase tracking-wider"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* VACANCY ADD/EDIT MODAL */}
            {showModal && (
                <div className="fixed inset-0 bg-[#000000]/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
                    <div className="bg-[#111d23] border border-outline-variant/30 rounded-xl w-full max-w-lg shadow-2xl flex flex-col">
                        <div className="h-16 border-b border-outline-variant/30 px-4 sm:px-6 flex items-center justify-between">
                            <h3 className="font-bold text-white uppercase text-xs sm:text-sm tracking-widest font-mono">
                                {currentVacancy ? `Modify Vacancy: ${currentVacancy.ref}` : 'Add New Vacancy'}
                            </h3>
                            <button onClick={() => setShowModal(false)} className="text-on-surface-variant hover:text-white transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <form onSubmit={handleSaveVacancy} className="p-4 sm:p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Reference (Ref)</label>
                                    <input 
                                        type="text" required placeholder="e.g. AR-204"
                                        className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs focus:border-sky-500 focus:outline-none"
                                        value={formRef}
                                        onChange={e => setFormRef(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Employment Type</label>
                                    <select 
                                        className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs focus:border-sky-500 focus:outline-none"
                                        value={formType}
                                        onChange={e => setFormType(e.target.value)}
                                    >
                                        <option value="Full-Time">Full-Time</option>
                                        <option value="Part-Time">Part-Time</option>
                                        <option value="Immediate">Immediate</option>
                                        <option value="Contract">Contract</option>
                                        <option value="Internship">Internship</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Vacancy Title</label>
                                <input 
                                    type="text" required placeholder="e.g. Senior BIM Architect"
                                    className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs focus:border-sky-500 focus:outline-none"
                                    value={formTitle}
                                    onChange={e => setFormTitle(e.target.value)}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Sorting Index</label>
                                <input 
                                    type="number" required
                                    className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs focus:border-sky-500 focus:outline-none"
                                    value={formSortOrder}
                                    onChange={e => setFormSortOrder(e.target.value)}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Role Description</label>
                                <textarea 
                                    rows="4" required placeholder="Describe the responsibilities and prerequisites..."
                                    className="w-full bg-[#0b1519] border border-outline-variant/30 rounded p-2.5 text-white text-xs focus:border-sky-500 focus:outline-none"
                                    value={formDesc}
                                    onChange={e => setFormDesc(e.target.value)}
                                />
                            </div>
                            <div className="pt-2">
                                <label className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="rounded bg-[#0b1519] border-outline-variant/30 text-sky-500 focus:ring-sky-500 focus:ring-offset-[#111d23]" 
                                        checked={formIsActive}
                                        onChange={e => setFormIsActive(e.target.checked)}
                                    />
                                    Vacancy Open / Active
                                </label>
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
                                    disabled={savingVacancy}
                                    className="bg-sky-500 hover:brightness-110 text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 shadow-lg disabled:opacity-50 transition-all"
                                >
                                    {savingVacancy ? 'Saving...' : 'Save Vacancy'}
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
