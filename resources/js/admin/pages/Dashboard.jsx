import React from 'react';

export default function Dashboard() {
    const stats = [
        { name: 'Annual Revenue Tenders', value: '$24.8M', change: '+12.5%', icon: 'payments', color: 'text-primary', bg: 'bg-primary-container/20' },
        { name: 'Active Blueprints', value: '142 Specs', change: '+8.2%', icon: 'architecture', color: 'text-secondary', bg: 'bg-secondary-container/10' },
        { name: 'Active Engineers', value: '48 Leads', change: 'Stable', icon: 'engineering', color: 'text-tertiary', bg: 'bg-tertiary-container/20' },
        { name: 'Safety Compliance Rate', value: '100%', change: 'Ideal', icon: 'verified', color: 'text-success', bg: 'bg-green-500/10' },
    ];

    const alerts = [
        { id: 'T-801', title: 'Deep Base Foundation Stress Test', status: 'Approved', priority: 'High', date: 'Jul 08, 2026' },
        { id: 'T-802', title: 'SCADA PLC System Overload Audit', status: 'Pending', priority: 'Medium', date: 'Jul 07, 2026' },
        { id: 'T-803', title: 'MEP Fire Suppression Valve Test', status: 'In Review', priority: 'High', date: 'Jul 06, 2026' },
        { id: 'T-804', title: 'ISO 9001:2015 Recertification Plan', status: 'Approved', priority: 'Low', date: 'Jul 05, 2026' },
    ];

    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-surface p-6 rounded-xl border border-outline-variant/30 hover:border-outline transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">{stat.name}</span>
                            <span className={`material-symbols-outlined ${stat.color} ${stat.bg} p-2 rounded-lg text-xl`}>
                                {stat.icon}
                            </span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">{stat.value}</span>
                            <span className={`text-xs font-semibold ${stat.change.includes('+') ? 'text-green-400' : 'text-on-surface-variant'}`}>
                                {stat.change}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Split */}
            <div className="grid lg:grid-cols-3 gap-6">
                {/* Active Audits Table */}
                <div className="bg-surface rounded-xl border border-outline-variant/30 p-6 lg:col-span-2 space-y-6">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-lg uppercase tracking-wider text-white">Active Compliance Audits</h3>
                        <span className="text-xs text-primary font-bold cursor-pointer hover:underline">View All</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-outline-variant/30 text-on-surface-variant font-mono-data text-xs">
                                    <th className="pb-3">SPEC ID</th>
                                    <th className="pb-3">AUDIT SPEC</th>
                                    <th className="pb-3">PRIORITY</th>
                                    <th className="pb-3">STATUS</th>
                                    <th className="pb-3">DATE</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-outline-variant/10 text-white font-mono-data">
                                {alerts.map((alert) => (
                                    <tr key={alert.id} className="hover:bg-surface-container-low transition-all">
                                        <td className="py-4 font-bold text-primary">{alert.id}</td>
                                        <td className="py-4">{alert.title}</td>
                                        <td className="py-4">
                                            <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${
                                                alert.priority === 'High' ? 'bg-error/15 text-error' :
                                                alert.priority === 'Medium' ? 'bg-secondary/15 text-secondary' : 'bg-primary/15 text-primary'
                                            }`}>
                                                {alert.priority}
                                            </span>
                                        </td>
                                        <td className="py-4">
                                            <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${
                                                alert.status === 'Approved' ? 'bg-green-500/10 text-green-400' :
                                                alert.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-400' : 'bg-primary/10 text-primary'
                                            }`}>
                                                {alert.status}
                                            </span>
                                        </td>
                                        <td className="py-4 text-on-surface-variant">{alert.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* System Activity */}
                <div className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-6">
                    <h3 className="font-bold text-lg uppercase tracking-wider text-white">System Security Log</h3>
                    <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                            <span className="material-symbols-outlined text-green-400 bg-green-500/10 p-2 rounded-lg text-lg">check_circle</span>
                            <div>
                                <h4 className="text-sm font-semibold text-white">Database integrity check clean</h4>
                                <p className="text-xs text-on-surface-variant mt-1">2 hours ago</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <span className="material-symbols-outlined text-primary bg-primary-container/20 p-2 rounded-lg text-lg">sync</span>
                            <div>
                                <h4 className="text-sm font-semibold text-white">Titan v2 digital twins synchronized</h4>
                                <p className="text-xs text-on-surface-variant mt-1">4 hours ago</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <span className="material-symbols-outlined text-yellow-400 bg-yellow-500/10 p-2 rounded-lg text-lg">vpn_key</span>
                            <div>
                                <h4 className="text-sm font-semibold text-white">Authorized Login from Admin User</h4>
                                <p className="text-xs text-on-surface-variant mt-1">6 hours ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
