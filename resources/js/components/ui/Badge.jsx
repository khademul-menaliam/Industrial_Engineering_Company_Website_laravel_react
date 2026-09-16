import React from 'react';

export default function Badge({
    className = '',
    children,
    ...props
}) {
    return (
        <span
            className={`bg-primary text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded font-mono tracking-wider shadow-sm inline-flex items-center gap-1 ${className}`}
            {...props}
        >
            {children}
        </span>
    );
}
