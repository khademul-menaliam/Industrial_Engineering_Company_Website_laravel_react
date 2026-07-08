import React from 'react';

export default function Products() {
    const products = [
        { id: 'PROD-V2-01', name: 'Seismic Dampening Steel Support', category: 'Structural', spec: 'Grade-80 Steel, 2.5Hz damper', status: 'In Production', quantity: '14 Units' },
        { id: 'PROD-V2-02', name: 'Deluge Valve Control Assembly', category: 'Fire Safety', spec: '4-inch Flanged, SCADA ready', status: 'Testing', quantity: '8 Units' },
        { id: 'PROD-V2-03', name: 'SCADA Automation PLC module', category: 'Robotics', spec: 'Siemens S7-1500 compatible', status: 'In Stock', quantity: '24 Units' },
        { id: 'PROD-V2-04', name: 'Heavy Deep-Foundation Piles', category: 'Infrastructure', spec: 'Pre-stressed Concrete, 12m length', status: 'In Production', quantity: '50 Units' },
        { id: 'PROD-V2-05', name: 'Thermal Barrier Shield Panel', category: 'Safety', spec: 'High-density Ceramic, ISO Class A', status: 'Testing', quantity: '12 Units' },
    ];

    return (
        <div className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h3 className="font-bold text-lg uppercase tracking-wider text-white">Component & Blueprint Inventory</h3>
                <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">add</span> Add New Spec
                </button>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4">
                <input 
                    type="text" 
                    placeholder="Search specifications, components..." 
                    className="flex-grow max-w-md px-4 py-2.5 bg-surface-container border border-outline-variant/50 rounded-lg text-white text-sm focus:outline-none focus:border-primary"
                />
                <select className="px-4 py-2.5 bg-surface-container border border-outline-variant/50 rounded-lg text-white text-sm focus:outline-none focus:border-primary">
                    <option>All Categories</option>
                    <option>Structural</option>
                    <option>Fire Safety</option>
                    <option>Robotics</option>
                    <option>Infrastructure</option>
                </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                    <thead>
                        <tr className="border-b border-outline-variant/30 text-on-surface-variant font-mono-data text-xs">
                            <th className="pb-3">COMP ID</th>
                            <th className="pb-3">NAME</th>
                            <th className="pb-3">CATEGORY</th>
                            <th className="pb-3">SPECIFICATIONS</th>
                            <th className="pb-3">STATUS</th>
                            <th className="pb-3">QUANTITY</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/10 text-white font-mono-data">
                        {products.map((p) => (
                            <tr key={p.id} className="hover:bg-surface-container-low transition-all">
                                <td className="py-4 font-bold text-primary">{p.id}</td>
                                <td className="py-4 font-semibold">{p.name}</td>
                                <td className="py-4 text-on-surface-variant">{p.category}</td>
                                <td className="py-4 text-on-surface-variant italic">{p.spec}</td>
                                <td className="py-4">
                                    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${
                                        p.status === 'In Stock' ? 'bg-green-500/10 text-green-400' :
                                        p.status === 'In Production' ? 'bg-primary/10 text-primary' : 'bg-yellow-500/10 text-yellow-400'
                                    }`}>
                                        {p.status}
                                    </span>
                                </td>
                                <td className="py-4 text-on-surface-variant">{p.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
