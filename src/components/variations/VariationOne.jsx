import React from 'react';
import CalendlyPopup from '../CalendlyEmbed';
import StickyCTA from '../StickyCTA';

const VariationOne = () => {
    const scrollToBooking = () => {
        document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#050A14] text-[#F8FAFC] font-sans selection:bg-[#3498DB] selection:text-white pb-4">
            <CalendlyPopup
                fixed
                buttonText={
                    <>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <span>Book Diagnostic</span>
                    </>
                }
                className="bg-[#3498DB] text-white shadow-2xl px-6 md:px-8 py-3 md:py-4 rounded-full font-bold tracking-wide flex items-center border border-white/20 hover:bg-[#2980B9] hover:scale-105 transition-all duration-300 shadow-[#3498DB]/30"
            />

            {/* Navigation */}
            <nav className="w-full border-b border-[#1A253C] sticky top-0 z-40 bg-[#03060E]/95 backdrop-blur-md shadow-sm">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src="/assets/logo1.png" alt="Innosphere Logo" className="h-12 w-auto object-contain opacity-90" />
                        <div className="flex flex-col justify-center">
                            <span className="font-bold text-[18px] leading-[1.1] tracking-[0.15em] uppercase text-white">Innosphere</span>
                            <span className="font-bold text-[18px] leading-[1.1] tracking-[0.15em] uppercase text-white">Consulting</span>
                            <span className="text-[10px] tracking-[0.25em] font-medium text-white/70 mt-1 uppercase">FZE | LLC</span>
                        </div>
                    </div>
                    <CalendlyPopup
                        buttonText="Book Diagnostic"
                        className="hidden md:block bg-[#3498DB] text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-[#2980B9] transition-colors shadow-lg shadow-[#3498DB]/20"
                    />
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-8 pb-8 px-6 max-w-7xl mx-auto text-center relative">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1E417A]/20 rounded-full blur-[100px] -z-10"></div>
                <div className="inline-block px-4 py-1.5 rounded-full border border-[#3498DB]/30 bg-[#3498DB]/10 text-[#3498DB] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
                    Consulting, Without the Waiting.
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-tight max-w-5xl mx-auto text-white">
                    Enterprise Consulting Thinking. <br />
                    <span className="text-[#3498DB]">Founder-Speed Delivery.</span>
                </h1>
                <p className="text-lg md:text-xl font-light text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed text-center">
                    Innosphere Consulting helps UAE businesses access experienced consulting expertise without layers, long timelines, or unnecessary complexity — delivering clarity, strategy, and execution that moves at your business pace.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                    <CalendlyPopup
                        buttonText="Book Your AI & Digital Transformation Diagnostic"
                        className="bg-[#3498DB] text-white font-bold text-base px-8 py-4 rounded hover:bg-[#2980B9] transition-colors w-full sm:w-auto shadow-xl shadow-[#3498DB]/20"
                    />
                </div>
                <p className="text-sm font-medium text-slate-400 italic">Experience shaped within structured consulting and digital delivery environments.</p>
            </section>

            {/* Context Strip */}
            <div className="bg-[#121B2E] border-y border-[#1A253C] py-4 px-6">
                <p className="max-w-4xl mx-auto text-lg md:text-xl font-medium tracking-tight text-white text-center leading-relaxed">
                    A modern consulting experience for organisations navigating AI, automation, and digital transformation.
                </p>
            </div>

            {/* Video Placeholder */}
            <section className="py-6 px-6 max-w-5xl mx-auto">
                <div className="aspect-video w-full bg-[#080D1A] rounded-xl flex items-center justify-center border border-[#1A253C] shadow-2xl relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1E417A]/10 to-transparent rounded-xl"></div>
                    <span className="font-semibold text-sm tracking-widest text-[#475569] uppercase z-10">[Motion Ad / Video Embed]</span>
                </div>
            </section>

            {/* Problem Section (Structured Cards) */}
            <section className="py-6 px-6 max-w-6xl mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white max-w-3xl mx-auto">The traditional consulting model wasn’t built for modern business speed.</h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">Many organisations exploring digital transformation or AI adoption encounter systemic delays that halt momentum.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-[#0A1121] p-8 rounded-lg border border-[#1A253C]">
                        <span className="text-2xl mb-4 block text-[#3498DB]">01</span>
                        <h4 className="font-bold text-white mb-2 text-lg">Extended Timelines</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">Long discovery phases and layered communication structures delay critical insights.</p>
                    </div>
                    <div className="bg-[#0A1121] p-8 rounded-lg border border-[#1A253C]">
                        <span className="text-2xl mb-4 block text-[#3498DB]">02</span>
                        <h4 className="font-bold text-white mb-2 text-lg">Theoretical Strategy</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">Decks and presentations that fail to translate into practical implementation cycles.</p>
                    </div>
                    <div className="bg-[#0A1121] p-8 rounded-lg border border-[#1A253C]">
                        <span className="text-2xl mb-4 block text-[#3498DB]">03</span>
                        <h4 className="font-bold text-white mb-2 text-lg">High Risk</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">High engagement costs are required before any true strategic clarity emerges.</p>
                    </div>
                </div>
                <div className="bg-[#1E417A]/10 border border-[#1E417A]/30 p-6 rounded text-center max-w-3xl mx-auto">
                    <p className="text-xl font-bold text-[#7DB9E8]">For growing businesses, waiting months for direction isn’t viable.</p>
                </div>
            </section>

            {/* Approach */}
            <section className="py-6 px-6 bg-[#03060E] border-y border-[#1A253C]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">A more direct consulting experience</h2>
                        <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                            Innosphere Consulting prioritises momentum and clarity, providing enterprise-level insight without the traditional bloat.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto mb-16">
                        <div className="flex gap-4 items-start">
                            <span className="w-8 h-8 rounded-full bg-[#3498DB]/10 flex items-center justify-center text-[#3498DB] shrink-0 border border-[#3498DB]/20">✔</span>
                            <div>
                                <h4 className="font-bold text-white mb-1">Direct Collaboration</h4>
                                <p className="text-sm text-slate-400">Work directly with experienced consultants, skipping layers of account management.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <span className="w-8 h-8 rounded-full bg-[#3498DB]/10 flex items-center justify-center text-[#3498DB] shrink-0 border border-[#3498DB]/20">✔</span>
                            <div>
                                <h4 className="font-bold text-white mb-1">Faster Insight Cycles</h4>
                                <p className="text-sm text-slate-400">Accelerated discovery patterns designed to reach operative clarity sooner.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <span className="w-8 h-8 rounded-full bg-[#3498DB]/10 flex items-center justify-center text-[#3498DB] shrink-0 border border-[#3498DB]/20">✔</span>
                            <div>
                                <h4 className="font-bold text-white mb-1">Implementation-Aware</h4>
                                <p className="text-sm text-slate-400">Strategies developed with technical realities and organizational readiness in mind.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <span className="w-8 h-8 rounded-full bg-[#3498DB]/10 flex items-center justify-center text-[#3498DB] shrink-0 border border-[#3498DB]/20">✔</span>
                            <div>
                                <h4 className="font-bold text-white mb-1">AI-Enabled Thinking</h4>
                                <p className="text-sm text-slate-400">Future-ready frameworks ensuring relevance in a rapidly shifting digital landscape.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Offer */}
            <section className="py-6 px-6 max-w-5xl mx-auto">
                <div className="bg-[#0A1121] border border-[#1A253C] rounded-2xl p-10 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#3498DB]/5 rounded-full blur-3xl"></div>
                    <div className="relative z-10 text-center mb-12">
                        <span className="text-[#3498DB] font-bold tracking-widest text-xs uppercase mb-4 block">The Offer</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">AI & Digital Transformation Diagnostic</h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">A focused engagement designed to help you understand where your business stands and what actions will create meaningful impact.</p>
                    </div>

                    <div className="bg-[#03060E] border border-[#1A253C] rounded-xl p-8 mb-10 max-w-3xl mx-auto">
                        <p className="font-bold text-white uppercase tracking-wider text-sm mb-6 text-center border-b border-[#1A253C] pb-4">During your session, we will:</p>
                        <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-300">
                            <div className="flex items-start gap-2"><span className="text-[#3498DB] mt-0.5">•</span> Assess current workflows</div>
                            <div className="flex items-start gap-2"><span className="text-[#3498DB] mt-0.5">•</span> Map AI use cases</div>
                            <div className="flex items-start gap-2"><span className="text-[#3498DB] mt-0.5">•</span> Identify automation ops</div>
                            <div className="flex items-start gap-2"><span className="text-[#3498DB] mt-0.5">•</span> Highlight inefficiencies</div>
                            <div className="flex items-start gap-2 sm:col-span-2 justify-center"><span className="text-[#3498DB] mt-0.5">•</span> Provide a structured 30-day action roadmap</div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-xl font-bold text-white mb-6">Outcome: Direction, not just discussion.</p>
                        <CalendlyPopup
                            buttonText="Secure your March diagnostic session"
                            className="bg-[#3498DB] text-white font-bold text-base px-10 py-4 rounded hover:bg-[#2980B9] transition-colors shadow-lg shadow-[#3498DB]/20"
                        />
                    </div>
                </div>
            </section>

            {/* Why Us & Philosophy */}
            <section className="py-6 px-6 bg-[#03060E] border-y border-[#1A253C]">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="font-bold font-serif text-3xl md:text-4xl italic text-white mb-6">"Less decks. More progress."</h3>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            We’ve seen how valuable consulting insight can be — and also how easily it can remain in presentation form.<br /><br />
                            At Innosphere, our goal is to ensure clarity translates into movement. That means strategies that consider operational realities, technology ecosystems, and organisational readiness.
                        </p>
                    </div>
                    <div className="flex-1 bg-[#0A1121] border border-[#1A253C] rounded-xl p-8">
                        <h4 className="text-2xl font-bold text-white mb-8 border-b border-[#1A253C] pb-4">Who this is for</h4>
                        <ul className="space-y-4 text-slate-300 text-sm">
                            <li className="flex justify-between items-center"><strong className="text-white">Founders</strong> <span>scaling operations</span></li>
                            <li className="flex justify-between items-center"><strong className="text-white">SMEs</strong> <span>exploring automation & AI</span></li>
                            <li className="flex justify-between items-center"><strong className="text-white">Leadership teams</strong> <span>modernising systems</span></li>
                            <li className="flex justify-between items-center"><strong className="text-white">Innovation teams</strong> <span>validating strategy</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Booking */}
            <section id="booking-section" className="py-6 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white max-w-3xl mx-auto">If you’re exploring AI or digital transformation, start with clarity.</h2>
                    <p className="text-lg text-slate-400 mb-8">The diagnostic session provides a structured starting point.</p>
                    <CalendlyPopup
                        buttonText="Open Calendar"
                        className="bg-white text-[#0A1121] font-bold text-lg px-12 py-5 rounded-xl hover:bg-slate-200 transition-colors shadow-2xl shadow-[#3498DB]/10"
                    />
                </div>
            </section>

            <footer className="pt-4 pb-4 text-center border-t border-[#1A253C]">
                <p className="text-2xl font-bold text-[#E2E8F0] mb-4">Clarity before complexity. Momentum before delay.</p>
                <p className="text-sm text-[#64748B] uppercase tracking-widest font-bold mb-4 cursor-pointer hover:text-white transition-colors" onClick={scrollToBooking}>Book Diagnostic</p>
                <p className="text-xs text-[#64748B]">© 2026 Innosphere Consulting FZE | LLC</p>
            </footer>

        </div>
    );
};

export default VariationOne;
