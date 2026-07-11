import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectDemo() {
    return (
        <div className="w-full flex items-center justify-center min-h-[60vh] bg-surface-container-lowest">
            <div className="text-center p-8 max-w-lg mx-auto">
                <span className="material-symbols-outlined text-tertiary text-6xl mb-6">construction</span>
                <h1 className="text-3xl font-bold text-primary uppercase tracking-tight mb-4">Working On It</h1>
                <p className="text-on-surface-variant text-base leading-relaxed mb-8">
                    The detailed project demonstration and case studies will be published soon. We are currently finalizing the technical dossier.
                </p>
                <Link to="/clients" className="px-8 py-3 bg-tertiary text-white text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all rounded shadow-sm inline-block">
                    Return to Clients
                </Link>
            </div>
        </div>
    );
}
