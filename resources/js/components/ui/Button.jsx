import React from 'react';

const variantClasses = {
    cta: 'bg-tertiary text-white text-xs font-mono font-bold px-8 py-4 rounded uppercase tracking-widest hover:bg-opacity-90 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer',
    form: 'py-4 bg-primary text-white rounded font-bold text-xs tracking-widest uppercase hover:brightness-110 shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2 cursor-pointer',
    secondary: 'border border-primary text-primary hover:bg-surface-container font-mono font-bold text-xs px-6 py-3 rounded uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 cursor-pointer',
};

export default function Button({
    variant = 'cta',
    className = '',
    children,
    type = 'button',
    ...props
}) {
    const baseStyle = variantClasses[variant] || variantClasses.cta;

    return (
        <button
            type={type}
            className={`${baseStyle} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
