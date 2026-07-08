import React from 'react';

export default function Analytics() {
    const metrics = [
        { label: 'Active Telemetry Streams', value: '4 Streams', trend: '100% Uptime' },
        { label: 'System Process Load', value: '38%', trend: 'Optimized' },
        { label: 'Data Sync Rate', value: '540 records/min', trend: '+14% shift' },
        { label: 'Network Latency', value: '12ms', trend: 'Nominal' }
    ];

    return (
        <div className="space-y-8">
            {/* Telemetry Overview */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((m, idx) => (
                    <div key={idx} className="bg-surface p-6 rounded-xl border border-outline-variant/30">
                        <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-2">{m.label}</span>
                        <div className="text-2xl font-bold text-white mb-2">{m.value}</div>
                        <span className="text-[10px] font-mono-data text-secondary uppercase tracking-widest">{m.trend}</span>
                    </div>
                ))}
            </div>

            {/* Mock Chart Area */}
            <div className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-6">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg uppercase tracking-wider text-white">Structural Stress Telemetry (Mock)</h3>
                    <span className="text-xs text-on-surface-variant font-mono-data">REFRESH INTERVAL: 5S</span>
                </div>
                
                {/* Visualizing a mock bar chart using CSS */}
                <div className="h-64 flex items-end justify-between gap-3 pt-6 border-b border-l border-outline-variant/30 px-4">
                    <div className="w-full bg-primary/20 hover:bg-primary/50 transition-all rounded-t h-[60%] relative group">
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-white font-mono-data opacity-0 group-hover:opacity-100 transition-opacity">60kN</span>
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-on-surface-variant font-mono-data">MON</span>
                    </div>
                    <div className="w-full bg-primary/20 hover:bg-primary/50 transition-all rounded-t h-[45%] relative group">
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-white font-mono-data opacity-0 group-hover:opacity-100 transition-opacity">45kN</span>
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-on-surface-variant font-mono-data">TUE</span>
                    </div>
                    <div className="w-full bg-primary/20 hover:bg-primary/50 transition-all rounded-t h-[80%] relative group">
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-white font-mono-data opacity-0 group-hover:opacity-100 transition-opacity">80kN</span>
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-on-surface-variant font-mono-data">WED</span>
                    </div>
                    <div className="w-full bg-secondary-container/20 hover:bg-secondary-container/50 transition-all rounded-t h-[95%] relative group border border-secondary-container">
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-white font-mono-data opacity-0 group-hover:opacity-100 transition-opacity">95kN</span>
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-on-surface-variant font-mono-data">THU</span>
                    </div>
                    <div className="w-full bg-primary/20 hover:bg-primary/50 transition-all rounded-t h-[70%] relative group">
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-white font-mono-data opacity-0 group-hover:opacity-100 transition-opacity">70kN</span>
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-on-surface-variant font-mono-data">FRI</span>
                    </div>
                    <div className="w-full bg-primary/20 hover:bg-primary/50 transition-all rounded-t h-[30%] relative group">
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-white font-mono-data opacity-0 group-hover:opacity-100 transition-opacity">30kN</span>
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-on-surface-variant font-mono-data">SAT</span>
                    </div>
                    <div className="w-full bg-primary/20 hover:bg-primary/50 transition-all rounded-t h-[25%] relative group">
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-white font-mono-data opacity-0 group-hover:opacity-100 transition-opacity">25kN</span>
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-on-surface-variant font-mono-data">SUN</span>
                    </div>
                </div>
                <div className="h-6"></div> {/* spacer */}
            </div>
        </div>
    );
}
