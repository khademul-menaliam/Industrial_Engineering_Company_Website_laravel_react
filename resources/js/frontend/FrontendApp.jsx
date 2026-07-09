import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import HowWeWork from './pages/HowWeWork';
import Clients from './pages/Clients';
import Careers from './pages/Careers';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

export default function FrontendApp() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-on-background font-sans antialiased">
            <Navbar />
            <div className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/how-we-work" element={<HowWeWork />} />
                    <Route path="/clients" element={<Clients />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FAQ />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}
