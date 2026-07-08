import React from 'react';

export default function Users() {
    const users = [
        { name: 'David Richardson', email: 'david@titanprecision-v2.com', role: 'CEO / Board Director', status: 'Active', location: 'HQ - London' },
        { name: 'Dr. Elena Vance', email: 'elena.vance@titanprecision-v2.com', role: 'Senior Strategic Advisor', status: 'Active', location: 'Research Lab - Munich' },
        { name: 'Marcus Brody', email: 'marcus@apexheavy.com', role: 'Client Representative', status: 'Active', location: 'Apex - New York' },
        { name: 'Sarah Connor', email: 'sarah.c@titanprecision-v2.com', role: 'Lead Fire Safety Engineer', status: 'On Site', location: 'Refinery - Texas' },
        { name: 'John Doe', email: 'john.doe@gmail.com', role: 'Staff Auditor', status: 'Suspended', location: 'Remote' },
    ];

    return (
        <div className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg uppercase tracking-wider text-white">Personnel Directory</h3>
                <span className="text-xs text-on-surface-variant font-semibold">Total Personnel: {users.length}</span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                    <thead>
                        <tr className="border-b border-outline-variant/30 text-on-surface-variant font-mono-data text-xs">
                            <th className="pb-3">NAME</th>
                            <th className="pb-3">EMAIL ADDRESS</th>
                            <th className="pb-3">SYSTEM ROLE</th>
                            <th className="pb-3">LOCATION</th>
                            <th className="pb-3">STATUS</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/10 text-white font-mono-data">
                        {users.map((u, index) => (
                            <tr key={index} className="hover:bg-surface-container-low transition-all">
                                <td className="py-4 font-semibold text-white">{u.name}</td>
                                <td className="py-4 text-primary font-semibold">{u.email}</td>
                                <td className="py-4 text-on-surface-variant">{u.role}</td>
                                <td className="py-4 text-on-surface-variant">{u.location}</td>
                                <td className="py-4">
                                    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${
                                        u.status === 'Active' ? 'bg-green-500/10 text-green-400' :
                                        u.status === 'On Site' ? 'bg-primary/10 text-primary' : 'bg-error/10 text-error'
                                    }`}>
                                        {u.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
