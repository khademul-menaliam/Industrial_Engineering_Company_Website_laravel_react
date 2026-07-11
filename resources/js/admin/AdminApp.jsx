import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Users from './pages/Users';
import Analytics from './pages/Analytics';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import HomepageManager from './pages/HomepageManager';
import ServicesManager from './pages/ServicesManager';
import ContactManager from './pages/ContactManager';
import CareersManager from './pages/CareersManager';
import AboutManager from './pages/AboutManager';
import FaqManager from './pages/FaqManager';
import ClientsManager from './pages/ClientsManager';

export default function AdminApp() {
    const location = useLocation();

    const navItems = [
        { name: 'Dashboard', path: '/', icon: 'dashboard' },
        { name: 'Home Page', path: '/homepage', icon: 'edit_document' },
        { name: 'Services Page', path: '/services-manager', icon: 'room_service' },
        { name: 'About Page', path: '/about-manager', icon: 'info' },
        { name: 'Contact Page', path: '/contact-manager', icon: 'contact_mail' },
        { name: 'Careers Page', path: '/careers-manager', icon: 'work' },
        { name: 'FAQ Page', path: '/faq-manager', icon: 'quiz' },
        { name: 'Clients Page', path: '/clients-manager', icon: 'groups' },
        { name: 'Products', path: '/products', icon: 'inventory_2' },
        { name: 'Orders', path: '/orders', icon: 'shopping_cart' },
        { name: 'Users', path: '/users', icon: 'group' },
        { name: 'Analytics', path: '/analytics', icon: 'monitoring' },
        { name: 'Notifications', path: '/notifications', icon: 'notifications' },
        { name: 'Settings', path: '/settings', icon: 'settings' },
        { name: 'Profile', path: '/profile', icon: 'account_circle' },
    ];

    return (
        <div className="flex min-h-screen bg-surface-container-lowest text-on-surface font-sans antialiased">
            {/* Sidebar */}
            <aside className="w-64 bg-surface border-r border-outline-variant/30 flex flex-col justify-between shrink-0">
                <div>
                    {/* Header Logo */}
                    <div className="h-20 flex items-center px-8 border-b border-outline-variant/30 gap-3">
                        <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                            shield_with_heart
                        </span>
                        <div className="flex flex-col">
                            <span className="font-bold text-white uppercase text-sm tracking-widest">Titan Control</span>
                            <span className="text-[10px] text-on-surface-variant font-mono-data uppercase tracking-widest">System Administrator</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="p-4 space-y-1.5 font-medium">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all ${
                                        isActive
                                            ? 'bg-primary text-on-primary shadow-lg shadow-primary/20'
                                            : 'text-on-surface-variant hover:text-white hover:bg-surface-container'
                                    }`}
                                >
                                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                                        {item.icon}
                                    </span>
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Footer Section with Logout */}
                <div className="p-4 border-t border-outline-variant/30 space-y-3">
                    <div className="flex items-center gap-3 px-4 py-2">
                        <div className="w-9 h-9 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary font-bold text-sm">
                            AD
                        </div>
                        <div className="flex flex-col overflow-hidden">
                            <span className="font-bold text-xs text-white truncate">Administrator</span>
                            <span className="text-[10px] text-on-surface-variant truncate">admin@gmail.com</span>
                        </div>
                    </div>
                    
                    <a
                        href="/titan-secure/logout"
                        className="flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm font-semibold tracking-wide text-error hover:bg-error-container/10 transition-all"
                    >
                        <span className="material-symbols-outlined text-lg">logout</span>
                        Sign Out
                    </a>
                </div>
            </aside>

            {/* Main Area */}
            <div className="flex-grow flex flex-col min-w-0">
                {/* Header Bar */}
                <header className="h-20 bg-surface border-b border-outline-variant/30 px-8 flex items-center justify-between shrink-0">
                    <div>
                        <h2 className="text-xl font-bold uppercase tracking-wider text-white">
                            {navItems.find((item) => item.path === location.pathname)?.name || 'Control Panel'}
                        </h2>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <span className="material-symbols-outlined text-on-surface-variant hover:text-white cursor-pointer transition-colors">
                                notifications
                            </span>
                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-secondary rounded-full"></span>
                        </div>
                        <div className="w-px h-6 bg-outline-variant/30"></div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold text-white">System Admin</span>
                            <div className="w-10 h-10 rounded-full border border-primary/30 overflow-hidden">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdqOTYnupjt5nefsPJfgjHM5HMSix_-gvu2_5cythhmuUcLI2PfYVTXEqEZoZ1zb_BJZFAqoKaO2V0Qm4QtjwKvcQwn1kVOunWU27xyjnDCZ1wxDwRNnBYPoQKmoaWg5knYpTELkqiYZPebgLV8ILc_SWCdQGmp7eaKshtYnYqq6CUgfmd6b1qfwjuahdRa5B3RSc9AR0An4EpvfDAh5TPWyEcrXzVj2G4N-irBFJVrqv46azTwU5Xdg" alt="Avatar" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Panel */}
                <main className="flex-grow p-8 overflow-y-auto">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/homepage" element={<HomepageManager />} />
                        <Route path="/services-manager" element={<ServicesManager />} />
                        <Route path="/about-manager" element={<AboutManager />} />
                        <Route path="/contact-manager" element={<ContactManager />} />
                        <Route path="/careers-manager" element={<CareersManager />} />
                        <Route path="/faq-manager" element={<FaqManager />} />
                        <Route path="/clients-manager" element={<ClientsManager />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/notifications" element={<Notifications />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}
