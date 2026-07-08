import React from 'react';

export default function Settings() {
    return (
        <div className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-8 max-w-2xl">
            <h3 className="font-bold text-lg uppercase tracking-wider text-white border-b border-outline-variant/30 pb-4">
                System Parameters
            </h3>

            <div className="space-y-6">
                {/* Telemetry settings */}
                <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Telemetry Controls</h4>
                    <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/10">
                        <div>
                            <p className="text-sm font-semibold text-white">Live Data Synchronization</p>
                            <p className="text-xs text-on-surface-variant">Sync stress telemetry with the digital twin server in real-time.</p>
                        </div>
                        <input type="checkbox" defaultChecked className="rounded bg-surface-container border-outline-variant text-primary focus:ring-primary" />
                    </div>
                </div>

                {/* Database Backup Server */}
                <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Backup Target</h4>
                    <div className="space-y-2">
                        <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Backup Node URI</label>
                        <input 
                            type="text" 
                            defaultValue="https://backup-us-east.titanprecision-v2.com" 
                            className="w-full px-4 py-2.5 bg-surface-container border border-outline-variant/50 rounded-lg text-white text-sm focus:outline-none focus:border-primary"
                        />
                    </div>
                </div>

                {/* Email Reports */}
                <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Automated Reports</h4>
                    <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/10">
                        <div>
                            <p className="text-sm font-semibold text-white">Weekly Compliance Summary</p>
                            <p className="text-xs text-on-surface-variant">Send weekly ISO audit PDF summaries to the strategic board.</p>
                        </div>
                        <input type="checkbox" defaultChecked className="rounded bg-surface-container border-outline-variant text-primary focus:ring-primary" />
                    </div>
                </div>

                {/* Submit button */}
                <div className="pt-4 border-t border-outline-variant/30 flex justify-end">
                    <button className="bg-primary text-on-primary px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all">
                        Save System Settings
                    </button>
                </div>
            </div>
        </div>
    );
}
