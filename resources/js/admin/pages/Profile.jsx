import React from 'react';

export default function Profile() {
    return (
        <div className="bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-8 max-w-2xl">
            <div className="flex items-center gap-6 pb-6 border-b border-outline-variant/30">
                <div className="w-20 h-20 rounded-full border-2 border-primary/50 overflow-hidden shrink-0">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdqOTYnupjt5nefsPJfgjHM5HMSix_-gvu2_5cythhmuUcLI2PfYVTXEqEZoZ1zb_BJZFAqoKaO2V0Qm4QtjwKvcQwn1kVOunWU27xyjnDCZ1wxDwRNnBYPoQKmoaWg5knYpTELkqiYZPebgLV8ILc_SWCdQGmp7eaKshtYnYqq6CUgfmd6b1qfwjuahdRa5B3RSc9AR0An4EpvfDAh5TPWyEcrXzVj2G4N-irBFJVrqv46azTwU5Xdg" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">System Administrator</h3>
                    <p className="text-sm text-secondary font-mono-data uppercase tracking-widest mt-1">Super Admin Account</p>
                </div>
            </div>

            <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider">First Name</label>
                        <input 
                            type="text" 
                            defaultValue="System" 
                            className="w-full px-4 py-2.5 bg-surface-container border border-outline-variant/50 rounded-lg text-white text-sm focus:outline-none focus:border-primary"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Last Name</label>
                        <input 
                            type="text" 
                            defaultValue="Admin" 
                            className="w-full px-4 py-2.5 bg-surface-container border border-outline-variant/50 rounded-lg text-white text-sm focus:outline-none focus:border-primary"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Email Address</label>
                    <input 
                        type="email" 
                        defaultValue="admin@gmail.com" 
                        disabled
                        className="w-full px-4 py-2.5 bg-surface-container border border-outline-variant/50 rounded-lg text-on-surface-variant text-sm cursor-not-allowed"
                    />
                    <p className="text-[10px] text-on-surface-variant italic">Email cannot be modified directly in the static Phase 1 release.</p>
                </div>

                <div className="space-y-2">
                    <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Authorized Locations</label>
                    <input 
                        type="text" 
                        defaultValue="Global HQ (London), Secure Node TX" 
                        disabled
                        className="w-full px-4 py-2.5 bg-surface-container border border-outline-variant/50 rounded-lg text-on-surface-variant text-sm cursor-not-allowed"
                    />
                </div>

                {/* Submit button */}
                <div className="pt-4 border-t border-outline-variant/30 flex justify-end">
                    <button className="bg-primary text-on-primary px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all">
                        Update Profile Information
                    </button>
                </div>
            </div>
        </div>
    );
}
