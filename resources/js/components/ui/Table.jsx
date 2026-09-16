import React from 'react';

export function Table({ className = '', children, ...props }) {
    return (
        <div className="w-full overflow-x-auto">
            <table className={`w-full text-left font-mono text-xs ${className}`} {...props}>
                {children}
            </table>
        </div>
    );
}

export function TableHeader({ className = '', children, ...props }) {
    return (
        <thead className={`border-b border-outline-variant/30 text-on-surface-variant font-mono text-xs pb-3 font-bold uppercase tracking-wider ${className}`} {...props}>
            {children}
        </thead>
    );
}

export function TableBody({ className = '', children, ...props }) {
    return (
        <tbody className={`divide-y divide-outline-variant/10 text-on-surface font-mono text-xs ${className}`} {...props}>
            {children}
        </tbody>
    );
}

export function TableRow({ className = '', children, ...props }) {
    return (
        <tr className={`hover:bg-surface-container-low transition-all ${className}`} {...props}>
            {children}
        </tr>
    );
}

export function TableHead({ className = '', children, ...props }) {
    return (
        <th className={`pb-3 px-4 font-bold text-on-surface-variant ${className}`} {...props}>
            {children}
        </th>
    );
}

export function TableCell({ className = '', children, ...props }) {
    return (
        <td className={`py-3 px-4 ${className}`} {...props}>
            {children}
        </td>
    );
}
