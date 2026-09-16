import React from 'react';

const cardVariants = {
    standard: 'bg-white p-6 rounded border border-outline-variant/30 hover:border-primary transition-all duration-300 shadow-none md:shadow-sm md:hover:shadow-md',
    feature: 'bg-white p-8 md:p-12 rounded border border-outline-variant/30 hover:border-primary transition-all duration-300 shadow-none md:shadow-sm md:hover:shadow-md',
    container: 'bg-surface-container-low p-6 rounded border border-outline-variant/20 transition-all duration-300',
};

export default function Card({
    variant = 'standard',
    className = '',
    children,
    ...props
}) {
    const baseStyle = cardVariants[variant] || cardVariants.standard;

    return (
        <div
            className={`${baseStyle} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
