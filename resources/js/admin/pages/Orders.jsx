import React from 'react';

export default function Orders() {
    const orders = [
        { id: 'TNDR-2026-091', client: 'Apex Heavy Industries', tier: 'Enterprise Spec v2', value: '$240,000', status: 'Active', date: 'Jul 08, 2026' },
        { id: 'TNDR-2026-092', client: 'GigaLogistics Systems', tier: 'Standard Audit', value: '$45,000', status: 'Completed', date: 'Jul 07, 2026' },
        { id: 'TNDR-2026-093', client: 'Vance Energy Labs', tier: 'Elite Infrastructure', value: '$750,000', status: 'Active', date: 'Jul 04, 2026' },
        { id: 'TNDR-2026-094', client: 'Global Power Plant Group', tier: 'Enterprise Spec v2', value: '$480,000', status: 'Pending Review', date: 'Jun 28, 2026' },
        { id: 'TNDR-2026-095', client: 'Novatech Manufacturing', tier: 'Standard Audit', value: '$90,000', status: 'Cancelled', date: 'Jun 15, 2026' },
    ];

    return (
        <div className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg uppercase tracking-wider text-white">Project Tenders & Contracts</h3>
                <span className="text-xs text-on-surface-variant font-semibold">Total Contracts: {orders.length}</span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                    <thead>
                        <tr className="border-b border-outline-variant/30 text-on-surface-variant font-mono-data text-xs">
                            <th className="pb-3">TENDER ID</th>
                            <th className="pb-3">CLIENT ORGANIZATION</th>
                            <th className="pb-3">DESIGN TIER</th>
                            <th className="pb-3">CONTRACT VALUE</th>
                            <th className="pb-3">STATUS</th>
                            <th className="pb-3">DATE ISSUED</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/10 text-white font-mono-data">
                        {orders.map((o) => (
                            <tr key={o.id} className="hover:bg-surface-container-low transition-all">
                                <td className="py-4 font-bold text-primary">{o.id}</td>
                                <td className="py-4 font-semibold">{o.client}</td>
                                <td className="py-4 text-on-surface-variant">{o.tier}</td>
                                <td className="py-4 text-secondary font-bold">{o.value}</td>
                                <td className="py-4">
                                    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${
                                        o.status === 'Completed' ? 'bg-green-500/10 text-green-400' :
                                        o.status === 'Active' ? 'bg-primary/10 text-primary' :
                                        o.status === 'Cancelled' ? 'bg-error/10 text-error' : 'bg-yellow-500/10 text-yellow-400'
                                    }`}>
                                        {o.status}
                                    </span>
                                </td>
                                <td className="py-4 text-on-surface-variant">{o.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
