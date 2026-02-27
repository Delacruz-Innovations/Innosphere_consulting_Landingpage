import React from 'react';
import CalendlyPopup from '../CalendlyEmbed';
import StickyCTA from '../StickyCTA';

const VariationTwo = () => {
    const scrollToBooking = () => {
        document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#02050D] text-[#E2E8F0] font-sans pb-4 overflow-x-hidden">
            <CalendlyPopup
                fixed
                buttonText={
                    <>
                        <span className="relative flex h-3 w-3 mr-3 items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                        Book Diagnostic
                    </>
                }
                className="bg-gradient-to-r from-[#3498DB] to-[#7DB9E8] text-white shadow-2xl px-6 md:px-8 py-3 md:py-4 rounded-full font-bold tracking-wide flex items-center border border-white/30 hover:scale-105 transition-all duration-300 shadow-[#3498DB]/40"
            />

            {/* Navigation */}
            <nav className="w-full fixed top-0 z-50 bg-[#0A1121]/80 backdrop-blur-xl border-b border-[#1A253C]/50 px-6 lg:px-12 h-20 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img src="/assets/logo1.png" alt="Innosphere Logo" className="h-12 w-auto object-contain opacity-90" />
                    <div className="flex flex-col justify-center">
                        <span className="font-bold text-[18px] leading-[1.1] tracking-[0.15em] uppercase text-white">Innosphere</span>
                        <span className="font-bold text-[18px] leading-[1.1] tracking-[0.15em] uppercase text-white">Consulting</span>
                        <span className="text-[10px] tracking-[0.25em] font-medium text-[#7DB9E8] mt-1 uppercase">FZE | LLC</span>
                    </div>
                </div>
                <CalendlyPopup
                    buttonText="Book Session"
                    className="text-sm font-bold tracking-wider text-[#E2E8F0] hover:text-[#3498DB] transition-colors uppercase border-b-2 border-transparent hover:border-[#3498DB] pb-1"
                />
            </nav>

            {/* Asymmetrical Layout Wrapper */}
            <div className="pt-24 px-6 lg:px-12 max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 relative">

                {/* Background Glow */}
                <div className="fixed top-1/2 left-0 w-[800px] h-[800px] bg-[#1E417A]/10 rounded-full blur-[150px] -z-10 -translate-y-1/2 -translate-x-1/2"></div>

                {/* Left Column (Sticky Content) */}
                <div className="lg:col-span-5 relative">
                    <div className="sticky top-24">
                        <span className="inline-block px-4 py-2 bg-[#3498DB]/10 text-[#3498DB] text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-[#3498DB]/20">The Vision</span>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white leading-tight">
                            Consulting strategies that scale at <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3498DB] to-[#7DB9E8]">Founder Speed.</span>
                        </h1>
                        <p className="text-lg text-[#94A3B8] font-light leading-relaxed mb-6">
                            Enterprise capability and structured methodologies. Delivered through an agile, direct partnership specifically designed for companies that cannot afford to wait months for discovery and alignment.
                        </p>
                        <div className="space-y-4">
                            <CalendlyPopup
                                buttonText={<><span>Get Your AI Diagnostic</span><span className="text-2xl group-hover:translate-x-1 transition-transform">→</span></>}
                                className="w-full bg-[#3498DB] text-white font-bold text-lg px-8 py-4 rounded-2xl hover:bg-[#2980B9] transition-all shadow-lg shadow-[#3498DB]/20 flex items-center justify-between group"
                            />
                            <p className="text-xs font-medium tracking-wide text-center text-[#64748B] uppercase">Limited March sessions</p>
                        </div>
                    </div>
                </div>

                {/* Right Column (Scrolling Floating Cards) */}
                <div className="lg:col-span-7 space-y-6">

                    {/* Video Card */}
                    <div className="aspect-[21/9] w-full bg-[#0A1121] rounded-3xl border border-[#1A253C] flex items-center justify-center p-6 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#3498DB]/5 to-transparent"></div>
                        <span className="text-xs tracking-widest uppercase font-bold text-[#475569] z-10">[Motion Video Ad Embed]</span>
                    </div>

                    {/* Problem/Solution Card */}
                    <div className="bg-[#0A1121] rounded-3xl border border-[#1A253C] p-6 md:p-8 shadow-xl">
                        <h2 className="text-3xl font-black mb-4 text-white tracking-tight">Systemic Delays Must End</h2>
                        <p className="text-[#94A3B8] text-lg mb-4 leading-relaxed font-light">Traditional models enforce arbitrary timelines to justify pricing. Growing businesses need direct alignment instead of:</p>
                        <ul className="space-y-4 mb-4 text-[#CBD5E1]">
                            <li className="flex items-center gap-4 bg-[#080D1A] p-4 rounded-xl border border-[#1A253C]">
                                <span className="text-[#3498DB] text-2xl">•</span> Extended discovery timelines
                            </li>
                            <li className="flex items-center gap-4 bg-[#080D1A] p-4 rounded-xl border border-[#1A253C]">
                                <span className="text-[#3498DB] text-2xl">•</span> Layered account management
                            </li>
                            <li className="flex items-center gap-4 bg-[#080D1A] p-4 rounded-xl border border-[#1A253C]">
                                <span className="text-[#3498DB] text-2xl">•</span> Theoretical, non-executable briefs
                            </li>
                        </ul>
                        <div className="bg-[#1E417A]/20 p-6 rounded-2xl border border-[#1E417A]/30">
                            <p className="text-[#7DB9E8] font-bold tracking-wide">Clarity generated in weeks, not months.</p>
                        </div>
                    </div>

                    {/* Offer Card */}
                    <div className="bg-[#121B2E] rounded-3xl border border-[#1E417A]/50 p-6 md:p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#3498DB]/10 rounded-full blur-3xl"></div>
                        <span className="inline-block px-4 py-2 bg-[#02050D] text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4">Diagnostic Review</span>
                        <h2 className="text-3xl font-black text-white tracking-tight mb-4">AI & Structural Transformation Baseline</h2>
                        <p className="text-[#94A3B8] text-lg mb-6 font-light leading-relaxed">
                            A highly structured engagement that immediately surfaces automation opportunities, AI integration points, and systemic bottlenecks scaling operations.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 shrink-0 bg-[#0A1121] rounded-full flex items-center justify-center border border-[#1A253C] text-[#3498DB] font-bold">1</div>
                                <div>
                                    <h4 className="font-bold text-white">Evaluate Workflows</h4>
                                    <p className="text-sm font-light text-[#64748B] mt-1">Audit of internal operational efficiency.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 shrink-0 bg-[#0A1121] rounded-full flex items-center justify-center border border-[#1A253C] text-[#3498DB] font-bold">2</div>
                                <div>
                                    <h4 className="font-bold text-white">Map AI Utilization</h4>
                                    <p className="text-sm font-light text-[#64748B] mt-1">Realistic assessment of generative AI application.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 shrink-0 bg-[#0A1121] rounded-full flex items-center justify-center border border-[#1A253C] text-[#3498DB] font-bold">3</div>
                                <div>
                                    <h4 className="font-bold text-white">30-Day Execution Roadmap</h4>
                                    <p className="text-sm font-light text-[#64748B] mt-1">Outcome-driven direction. Less presentation.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Philosophy & Target Card */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-[#0A1121] p-6 md:p-8 rounded-3xl border border-[#1A253C]">
                            <h3 className="text-xl font-bold text-white mb-4">Less Decks.</h3>
                            <p className="text-sm text-[#94A3B8] font-light leading-relaxed">Presentations don't shift metrics. We specialize in converting high-level strategy directly into implementation-aware realities so that executing agents have exact direction.</p>
                        </div>
                        <div className="bg-[#0A1121] p-6 md:p-8 rounded-3xl border border-[#1A253C]">
                            <h3 className="text-xl font-bold text-[#E2E8F0] mb-4">Target Client</h3>
                            <ul className="text-sm text-[#94A3B8] font-light space-y-3">
                                <li>• <strong>Founders</strong> scaling ops</li>
                                <li>• <strong>SMEs</strong> adopting AI</li>
                                <li>• <strong>Leadership Teams</strong></li>
                                <li>• <strong>Innovation Hubs</strong></li>
                            </ul>
                        </div>
                    </div>

                    {/* Founder Note Card */}
                    <div className="bg-[#02050D] p-6 md:p-8 rounded-3xl border border-[#1E417A]/30 flex flex-col sm:flex-row items-center gap-10">
                        <div className="w-40 h-40 shrink-0 bg-[#0A1121] rounded-full border border-[#1A253C] flex items-center justify-center">
                            <span className="text-[10px] font-bold tracking-widest text-[#475569] uppercase">[Photo]</span>
                        </div>
                        <div>
                            <p className="text-lg text-[#CBD5E1] italic font-light leading-relaxed mb-4">
                                "The traditional model operates on delays. Innosphere was constructed specifically to circumvent that padding and offer founders the agility required to survive digital transition curves."
                            </p>
                            <p className="text-sm font-bold text-[#3498DB] uppercase tracking-wider">Founder, Innosphere</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Booking Section */}
            <section id="booking-section" className="py-6 px-6 max-w-5xl mx-auto mt-8 relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#3498DB]/10 blur-[120px] -z-10 rounded-full"></div>
                <div className="text-center mb-6">
                    <span className="inline-block px-4 py-2 bg-[#3498DB] text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4 shadow-lg shadow-[#3498DB]/30">Open Calendar</span>
                    <h2 className="text-4xl font-black mb-4 text-white tracking-tight">Initiate Operational Alignment</h2>
                    <p className="text-lg text-[#94A3B8] font-light max-w-2xl mx-auto mb-8">Start the transition out of technological paralysis and secure your initial diagnostic conversation below.</p>
                    <CalendlyPopup
                        buttonText="View Available Times"
                        className="bg-white text-[#0A1121] font-bold text-lg px-12 py-5 rounded-2xl hover:bg-slate-200 transition-colors shadow-2xl shadow-[#3498DB]/20"
                    />
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center pb-12 pt-20">
                <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Clarity over complexity.</h2>
                <p className="text-sm font-medium text-[#64748B] mb-2 uppercase tracking-widest">© 2026 Innosphere FZE | LLC</p>
                <a href="mailto:contact@innosphereconsulting.ae" className="text-xs text-[#3498DB] hover:text-white transition-colors">contact@innosphereconsulting.ae</a>
            </footer>

        </div>
    );
};

export default VariationTwo;
