import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div className="w-full">
            
{/* Page Title */}
<div className="mb-16">
<h2 className="font-label-caps text-label-caps uppercase text-safety-orange mb-4">Connect with our team</h2>
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6">CONTACT US <span className="text-safety-orange">Titan Precision v2</span></h1>
<div className="w-24 h-1.5 bg-safety-orange rounded-full"></div>
</div>
{/* Urgent Callout */}
<div className="mb-12 bg-surface-container-high text-white p-6 rounded-xl border-l-8 border-safety-orange flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined !text-4xl text-safety-orange" data-icon="report_problem">report_problem</span>
<div>
<h3 className="font-headline-md text-headline-md">URGENT: SAFETY INQUIRY</h3>
<p className="font-body-md text-body-md opacity-90">For immediate structural failure concerns or site safety hazards, use our priority channel.</p>
</div>
</div>
<button className="whitespace-nowrap bg-safety-orange text-white px-8 py-3 rounded-lg font-label-caps text-label-caps hover:scale-105 transition-transform shadow-lg">
                PRIORITY RESPONSE
            </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
{/* Left Pane: Contact Form Card */}
<div className="bg-surface-container-high rounded-xl border border-outline-variant p-8 md:p-12 order-2 lg:order-1 shadow-2xl">
<h3 className="font-headline-md text-headline-md mb-8 text-safety-orange">Send a Message</h3>
<form action="#" className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">FULL NAME</label>
<input className="w-full h-14 px-4 bg-surface-container-lowest border border-outline-variant rounded-lg focus:border-safety-orange text-on-surface font-body-md text-body-md input-thick-outline transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">CORPORATE EMAIL</label>
<input className="w-full h-14 px-4 bg-surface-container-lowest border border-outline-variant rounded-lg focus:border-safety-orange text-on-surface font-body-md text-body-md input-thick-outline transition-all" placeholder="j.doe@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">DEPARTMENT INTEREST</label>
<select className="w-full h-14 px-4 bg-surface-container-lowest border border-outline-variant rounded-lg focus:border-safety-orange text-on-surface font-body-md text-body-md input-thick-outline transition-all appearance-none">
<option>Structural Engineering</option>
<option>Compliance &amp; Safety</option>
<option>Technical Resources</option>
<option>Project Procurement</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">PROJECT DETAILS</label>
<textarea className="w-full p-4 bg-surface-container-lowest border border-outline-variant rounded-lg focus:border-safety-orange text-on-surface font-body-md text-body-md input-thick-outline transition-all" placeholder="Please describe your technical requirements..." rows="5"></textarea>
</div>
<button className="w-full py-4 bg-safety-orange text-white rounded-lg font-label-caps text-label-caps hover:brightness-110 shadow-lg transition-all transform hover:-translate-y-1" type="submit">
                        SUBMIT INQUIRY
                    </button>
</form>
</div>
{/* Right Pane: Info & Map Card */}
<div className="flex flex-col gap-8 order-1 lg:order-2">
<div className="bg-surface-container-low rounded-xl p-8 md:p-12 border border-outline-variant shadow-xl">
<h3 className="font-headline-md text-headline-md mb-8 text-safety-orange">Corporate Headquarters</h3>
<div className="space-y-8">
<div className="flex items-start gap-6">
<div className="bg-surface-container-highest p-3 rounded-lg border border-outline-variant">
<span className="material-symbols-outlined text-safety-orange !text-3xl" data-icon="location_on">location_on</span>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-safety-orange mb-1">OFFICE ADDRESS</h4>
<p className="font-body-lg text-body-lg font-bold text-on-surface">1280 Engineering Plaza<br/>Suite 400, Industrial District<br/>Chicago, IL 60601</p>
</div>
</div>
<div className="flex items-start gap-6">
<div className="bg-surface-container-highest p-3 rounded-lg border border-outline-variant">
<span className="material-symbols-outlined text-safety-orange !text-3xl" data-icon="phone_in_talk">phone_in_talk</span>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-safety-orange mb-1">TECHNICAL SUPPORT</h4>
<p className="font-body-lg text-body-lg font-bold text-on-surface">+1 (800) 555-0192</p>
<p className="font-mono-data text-mono-data text-on-surface-variant">Mon - Fri: 8:00 AM - 6:00 PM CST</p>
</div>
</div>
<div className="flex items-start gap-6">
<div className="bg-surface-container-highest p-3 rounded-lg border border-outline-variant">
<span className="material-symbols-outlined text-safety-orange !text-3xl" data-icon="mail">mail</span>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-safety-orange mb-1">GENERAL INQUIRIES</h4>
<p className="font-body-lg text-body-lg font-bold text-on-surface">contact@titanprecision.com</p>
</div>
</div>
</div>
{/* Inline Map Placeholder */}
<div className="mt-12 w-full h-64 rounded-xl overflow-hidden border border-outline-variant shadow-inner relative group">
<div className="absolute inset-0 bg-surface-container-highest animate-pulse"></div>
<img className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" data-location="Chicago" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxU7jTojfIGAD6pxvJSGDir2eB2D-tRFcfxCAfIMdI8aTEwS8z1PbjiaCDajjAknsLj1zOS3AFQ_LpHUky4Tfe7YsTKCltIvvEyF2Jv6K1K9pxmT80GNP8Dr-6SQImvY8i-hOA8RsIHrlByMI2rbargNC0ELEb77OjQpUrDQ2DTd2zMwEVyifZ_amef2R4LVlIxQZcjmGAIG8VYZhK9e-GoybaRkNkN4g2wzmHI4rQb_vSBGE_re5Q3Q"/>
<div className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur px-4 py-2 rounded-full shadow-lg font-label-caps text-label-caps flex items-center gap-2 border border-outline-variant cursor-pointer hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-safety-orange" data-icon="explore">explore</span>
                            OPEN IN MAPS
                        </div>
</div>
</div>
{/* Status Badges */}
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container-low p-4 rounded-lg border-l-4 border-safety-orange shadow-md">
<p className="font-label-caps text-label-caps text-on-surface-variant mb-1">RESPONSE TIME</p>
<p className="font-headline-md text-headline-md font-bold text-on-surface">&lt; 12 HOURS</p>
</div>
<div className="bg-surface-container-low p-4 rounded-lg border-l-4 border-safety-orange shadow-md">
<p className="font-label-caps text-label-caps text-on-surface-variant mb-1">SYSTEM STATUS</p>
<p className="font-headline-md text-headline-md font-bold text-on-surface">OPERATIONAL</p>
</div>
</div>
</div>
</div>

        </div>
    );
}
