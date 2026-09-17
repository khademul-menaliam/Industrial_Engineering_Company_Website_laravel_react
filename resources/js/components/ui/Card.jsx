import React from 'react';

const cardVariants = {
    standard: 'p-6 rounded border border-outline-variant/30 hover:border-primary transition-all duration-300 shadow-none md:shadow-sm md:hover:shadow-md',
    feature: 'p-8 md:p-12 rounded border border-outline-variant/30 hover:border-primary transition-all duration-300 shadow-none md:shadow-sm md:hover:shadow-md',
    container: 'p-6 rounded border border-outline-variant/20 transition-all duration-300',
};

const defaultVariantBg = {
    standard: 'bg-surface-container-lowest',
    feature: 'bg-surface-container-lowest',
    container: 'bg-surface-container-low',
};

export default function Card({
    variant = 'standard',
    className = '',
    children,
    ...props
}) {
    const baseStyle = cardVariants[variant] || cardVariants.standard;
    const hasCustomBg = /\bbg-/.test(className);
    const bgStyle = hasCustomBg ? '' : (defaultVariantBg[variant] || defaultVariantBg.standard);

    return (
        <div
            className={`${bgStyle} ${baseStyle} ${className}`.trim()}
            {...props}
        >
            {children}
        </div>
    );
}
