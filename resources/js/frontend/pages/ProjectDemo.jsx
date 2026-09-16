import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectDemo() {
    return (
        <div className="w-full bg-background text-on-surface flex items-center justify-center min-h-[65vh] px-margin-mobile md:px-margin-desktop py-24">
            <main className="max-w-container-max mx-auto w-full flex items-center justify-center">
                <div className="bg-white p-8 md:p-12 rounded border border-outline-variant/30 text-center max-w-lg mx-auto shadow-none md:shadow-sm">
                    <span className="material-symbols-outlined text-tertiary text-6xl mb-6 inline-block">
                        construction
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-tight mb-4">
                        Working On It
                    </h1>
                    <p className="text-secondary text-sm md:text-base leading-relaxed mb-8 text-justify">
                        The detailed project demonstration and case studies will be published soon. We are currently finalizing the technical dossier.
                    </p>
                    <Link
                        to="/clients"
                        className="bg-tertiary text-white text-xs font-mono font-bold px-8 py-4 rounded uppercase tracking-widest hover:bg-opacity-90 transition-colors shadow-none md:shadow-sm inline-block"
                    >
                        Return to Clients
                    </Link>
                </div>
            </main>
        </div>
    );
}
