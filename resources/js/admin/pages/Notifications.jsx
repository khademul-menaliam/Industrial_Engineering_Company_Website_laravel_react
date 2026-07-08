import React from 'react';

export default function Notifications() {
    const notifications = [
        { type: 'warning', text: 'Seismic Dampening Spec T-801 pressure tolerance requires manual confirmation.', time: '10m ago' },
        { type: 'success', text: 'System seeder successfully populated standard credentials.', time: '1h ago' },
        { type: 'info', text: 'Dr. Elena Vance modified the deep-foundation engineering specifications.', time: '4h ago' },
        { type: 'error', text: 'Backup telemetry server at TX-09 failed to respond to ping.', time: '1d ago' },
        { type: 'success', text: 'ISO 9001:2015 Recertification Plan successfully approved.', time: '2d ago' },
    ];

    return (
        <div className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-6 max-w-3xl">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg uppercase tracking-wider text-white">System Notifications</h3>
                <span className="text-xs text-primary font-bold cursor-pointer hover:underline">Mark all as read</span>
            </div>

            <div className="space-y-4">
                {notifications.map((n, idx) => (
                    <div 
                        key={idx} 
                        className="flex gap-4 items-start p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/10 hover:border-outline-variant/30 transition-all"
                    >
                        <span className={`material-symbols-outlined p-2 rounded-lg text-lg ${
                            n.type === 'success' ? 'text-green-400 bg-green-500/10' :
                            n.type === 'warning' ? 'text-yellow-400 bg-yellow-500/10' :
                            n.type === 'error' ? 'text-error bg-error/10' : 'text-primary bg-primary-container/20'
                        }`}>
                            {n.type === 'success' ? 'check_circle' :
                             n.type === 'warning' ? 'warning' :
                             n.type === 'error' ? 'dangerous' : 'info'}
                        </span>
                        <div className="flex-grow">
                            <p className="text-sm font-semibold text-white leading-relaxed">{n.text}</p>
                            <span className="text-[10px] text-on-surface-variant font-mono-data mt-1 block">{n.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
