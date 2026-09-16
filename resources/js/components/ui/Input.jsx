import React from 'react';

export default function Input({
    label,
    id,
    error,
    className = '',
    wrapperClassName = '',
    ...props
}) {
    return (
        <div className={`w-full ${wrapperClassName}`}>
            {label && (
                <label
                    htmlFor={id}
                    className="text-[10px] font-mono font-bold text-primary mb-1 uppercase tracking-wider block"
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                className={`w-full rounded border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-sm px-4 py-2 text-on-surface transition-all ${
                    error ? 'border-error focus:border-error focus:ring-error' : ''
                } ${className}`}
                {...props}
            />
            {error && (
                <span className="text-[10px] font-mono text-error mt-1 block uppercase tracking-wider">
                    {error}
                </span>
            )}
        </div>
    );
}
