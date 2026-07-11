import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FaqManager() {
    const [faqs, setFaqs] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({ id: null, question: '', answer: '', is_active: true, order: 0 });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchFaqs();
    }, []);

    const fetchFaqs = async (page = 1) => {
        setLoading(true);
        try {
            const response = await axios.get(`/api/admin/faqs?page=${page}`);
            if (response.data.success) {
                setFaqs(response.data.data.data); // data.data is the array of items in Laravel pagination
                setPagination(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching FAQs:', error);
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (pageUrl) => {
        if (!pageUrl) return;
        const url = new URL(pageUrl);
        const page = url.searchParams.get('page');
        if (page) {
            fetchFaqs(page);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isEditing ? `/api/admin/faqs/${formData.id}` : '/api/admin/faqs';
        
        try {
            const payload = { ...formData, order: parseInt(formData.order) || 0 };
            const response = await axios.post(url, payload);
            if (response.data.success) {
                setFormData({ id: null, question: '', answer: '', is_active: true, order: 0 });
                setIsEditing(false);
                fetchFaqs(pagination ? pagination.current_page : 1);
            }
        } catch (error) {
            console.error('Error saving FAQ:', error);
        }
    };

    const handleEdit = (faq) => {
        setFormData(faq);
        setIsEditing(true);
        window.scrollTo(0, 0);
    };

    const [deleteModal, setDeleteModal] = useState({ isOpen: false, faqId: null });

    const handleDeleteClick = (id) => {
        setDeleteModal({ isOpen: true, faqId: id });
    };

    const confirmDelete = async () => {
        if (!deleteModal.faqId) return;
        
        try {
            const response = await axios.delete(`/api/admin/faqs/${deleteModal.faqId}`);
            if (response.data.success) {
                fetchFaqs(pagination ? pagination.current_page : 1);
            }
        } catch (error) {
            console.error('Error deleting FAQ:', error);
        } finally {
            setDeleteModal({ isOpen: false, faqId: null });
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-surface p-6 rounded-2xl border border-outline-variant/30">
                <h3 className="text-lg font-bold text-white mb-4">
                    {isEditing ? 'Edit FAQ' : 'Add New FAQ'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-on-surface-variant mb-1">Question</label>
                        <input
                            type="text"
                            name="question"
                            value={formData.question}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-on-surface-variant mb-1">Answer</label>
                        <textarea
                            name="answer"
                            value={formData.answer}
                            onChange={handleInputChange}
                            required
                            rows="4"
                            className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                        ></textarea>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-on-surface-variant mb-1">Display Order</label>
                            <input
                                type="number"
                                name="order"
                                value={formData.order}
                                onChange={handleInputChange}
                                className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                        <div className="flex items-end mb-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="is_active"
                                    checked={formData.is_active}
                                    onChange={handleInputChange}
                                    className="w-5 h-5 rounded border-outline-variant/50 text-primary focus:ring-primary bg-surface-container"
                                />
                                <span className="text-sm font-medium text-white">Active</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3 pt-2">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-primary text-on-primary rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                        >
                            {isEditing ? 'Update FAQ' : 'Save FAQ'}
                        </button>
                        {isEditing && (
                            <button
                                type="button"
                                onClick={() => {
                                    setIsEditing(false);
                                    setFormData({ id: null, question: '', answer: '', is_active: true, order: 0 });
                                }}
                                className="px-6 py-2 bg-surface-container-highest text-white rounded-lg font-semibold hover:bg-surface-container-highest/80 transition-colors"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>

            <div className="bg-surface rounded-2xl border border-outline-variant/30 overflow-hidden">
                <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-white">Manage FAQs</h3>
                </div>
                
                {loading ? (
                    <div className="p-8 text-center text-on-surface-variant">Loading FAQs...</div>
                ) : faqs.length === 0 ? (
                    <div className="p-8 text-center text-on-surface-variant">No FAQs found.</div>
                ) : (
                    <div className="divide-y divide-outline-variant/30">
                        {faqs.map(faq => (
                            <div key={faq.id} className="p-6 flex items-start gap-4 hover:bg-surface-container/30 transition-colors">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h4 className="text-white font-bold">{faq.question}</h4>
                                        {!faq.is_active && (
                                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-error/20 text-error uppercase tracking-wider">
                                                Inactive
                                            </span>
                                        )}
                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-surface-container-highest text-on-surface-variant uppercase tracking-wider">
                                            Order: {faq.order}
                                        </span>
                                    </div>
                                    <p className="text-sm text-on-surface-variant line-clamp-2">{faq.answer}</p>
                                </div>
                                <div className="flex gap-2 shrink-0">
                                    <button
                                        onClick={() => handleEdit(faq)}
                                        className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-secondary hover:text-white hover:bg-secondary transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-sm">edit</span>
                                    </button>
                                    <button
                                        onClick={() => handleDeleteClick(faq.id)}
                                        className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-error hover:text-white hover:bg-error transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-sm">delete</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {/* Pagination Controls */}
                {pagination && pagination.last_page > 1 && (
                    <div className="p-4 border-t border-outline-variant/30 flex items-center justify-center gap-2">
                        {pagination.links.map((link, index) => {
                            // Don't render prev/next if they are null
                            if (!link.url && !link.active) {
                                return (
                                    <span key={index} className="px-3 py-1 rounded bg-surface-container text-on-surface-variant/50 cursor-not-allowed text-sm" dangerouslySetInnerHTML={{ __html: link.label }} />
                                );
                            }
                            return (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(link.url)}
                                    disabled={!link.url || link.active}
                                    className={`px-3 py-1 rounded text-sm transition-colors ${
                                        link.active 
                                            ? 'bg-primary text-on-primary font-bold shadow-lg shadow-primary/20' 
                                            : 'bg-surface-container text-white hover:bg-surface-container-highest'
                                    } ${!link.url && !link.active ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Custom Delete Confirmation Modal */}
            {deleteModal.isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-all">
                    <div className="bg-surface border border-outline-variant/30 rounded-2xl p-6 max-w-sm w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex items-center gap-4 text-error mb-4">
                            <span className="material-symbols-outlined text-3xl">warning</span>
                            <h3 className="text-xl font-bold text-white">Confirm Deletion</h3>
                        </div>
                        <p className="text-on-surface-variant mb-6 leading-relaxed">
                            Are you absolutely sure you want to delete this FAQ? This action cannot be undone.
                        </p>
                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={() => setDeleteModal({ isOpen: false, faqId: null })}
                                className="px-5 py-2.5 rounded-lg font-semibold text-white bg-surface-container hover:bg-surface-container-highest transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-5 py-2.5 rounded-lg font-semibold text-white bg-error hover:bg-error/90 transition-colors shadow-lg shadow-error/20"
                            >
                                Yes, Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
