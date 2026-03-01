import React from 'react';
import CalendlyPopup from '../CalendlyEmbed';
import StickyCTA from '../StickyCTA';

const VariationThree = () => {
    const scrollToBooking = () => {
        document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-black text-white font-serif selection:bg-white selection:text-black pb-4">
            <CalendlyPopup
                fixed
                buttonText="Free 1hour audit →"
                className="bg-white text-black shadow-2xl shadow-white/10 px-6 md:px-8 py-4 md:py-5 rounded-none font-bold tracking-widest flex items-center border border-transparent hover:border-white/50 hover:bg-black hover:text-white uppercase text-xs transition-colors duration-300"
            />

            {/* Navigation */}
            <nav className="w-full border-b border-white/20 sticky top-0 z-40 bg-black/90 backdrop-blur-md">
                <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 h-20 flex items-center justify-between font-sans">
                    <div className="flex items-center gap-2 md:gap-4">
                        <img src="/assets/logo1.png" alt="Innosphere Logo" className="h-8 md:h-12 w-auto object-contain opacity-90" />
                        <div className="flex flex-col justify-center">
                            <span className="font-bold text-[13px] md:text-[18px] leading-[1.1] tracking-[0.15em] uppercase text-white">Innosphere</span>
                            <span className="font-bold text-[13px] md:text-[18px] leading-[1.1] tracking-[0.15em] uppercase text-white">Consulting</span>
                            <span className="text-[8px] md:text-[10px] tracking-[0.25em] font-medium text-white/70 mt-0.5 md:mt-1 uppercase">FZE | LLC</span>
                        </div>
                    </div>
                    <CalendlyPopup
                        buttonText="Free 1hour audit"
                        className="border border-white hover:bg-white hover:text-black px-3 md:px-6 py-1.5 md:py-2 text-[10px] md:text-xs font-semibold tracking-widest uppercase transition-colors shrink-0"
                    />
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-8 pb-8 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-white/20 flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4 font-sans text-sm tracking-widest uppercase text-white/60">
                        <span className="w-8 h-px bg-white/60"></span>
                        <span>Consulting, Without the Waiting.</span>
                    </div>
                    <h1 className="text-6xl md:text-[7rem] leading-[0.9] tracking-tight mb-8">
                        Enterprise<br /><span className="text-white/40 italic">Thinking.</span><br />Founder-Speed<br />Delivery.
                    </h1>
                </div>
                <div className="flex-1 pb-4">
                    <p className="font-sans text-xl md:text-2xl font-light leading-relaxed text-white/80 mb-12 max-w-2xl">
                        Innosphere Consulting helps UAE businesses access experienced consulting expertise without layers, long timelines, or unnecessary complexity  delivering clarity, strategy, and execution that moves at your business pace.
                    </p>
                    <div className="space-y-4">
                        <CalendlyPopup
                            buttonText="👉 Book Your AI & Digital Transformation Diagnostic"
                            className="bg-white text-black font-bold font-sans text-lg px-8 py-5 hover:bg-white/90 transition-colors w-full md:w-auto uppercase tracking-wider block text-center"
                        />
                        <p className="font-sans text-sm tracking-widest uppercase text-white/50">(Limited March availability)</p>
                    </div>
                    <p className="mt-16 text-lg text-white/60 italic border-l block border-white/20 pl-6">
                        Experience shaped within structured consulting and digital delivery environments  now delivered through a more direct engagement model.
                    </p>
                </div>
            </section>

            {/* Context Strip */}
            <section className="py-6 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-white/20">
                <p className="font-sans text-2xl md:text-4xl font-light tracking-tight text-white/90 text-center uppercase">
                    A modern consulting experience for organisations navigating AI, automation, and digital transformation.
                </p>
            </section>

            {/* Motion Ad Placeholder */}
            <section className="py-4 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-white/20">
                <div className="aspect-[16/9] w-full bg-white/5 flex items-center justify-center border border-white/20 group hover:border-white/50 transition-colors">
                    <span className="font-sans text-sm tracking-widest uppercase text-white/40">[Motion Ad / Video Embed Placeholder]</span>
                </div>
            </section>

            {/* Problem & Positioning Grid Side-by-Side */}
            <section className="px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-white/20 grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
                <div className="py-6 lg:pr-16">
                    <h2 className="text-5xl md:text-6xl tracking-tight mb-12">The traditional consulting model wasn’t built for modern business speed.</h2>
                    <p className="font-sans text-xl text-white/60 mb-12">Many organisations exploring digital transformation or AI adoption encounter:</p>
                    <ul className="space-y-6 font-sans text-lg text-white/80 mb-16 border-l border-white/20 pl-8">
                        <li>Extended discovery timelines</li>
                        <li>Layered communication structures</li>
                        <li>Strategy that remains theoretical</li>
                        <li>Delayed implementation cycles</li>
                        <li>High engagement costs before clarity emerges</li>
                    </ul>
                    <p className="text-3xl tracking-tight text-white/90 italic">
                        "For growing businesses, momentum matters  and waiting months for direction isn’t always viable."
                    </p>
                </div>

                <div className="py-6 lg:pl-16">
                    <h2 className="text-5xl md:text-6xl tracking-tight mb-4">A more direct consulting experience</h2>
                    <p className="font-sans text-xl text-white/60 mb-12 leading-relaxed">
                        Innosphere Consulting was created with a different delivery philosophy. You gain access to experienced consultants who understand enterprise delivery  but engage in a way that prioritises:
                    </p>
                    <div className="font-sans grid sm:grid-cols-2 gap-2 md:gap-8 mb-4">
                        <div className="border-t border-white/20 pt-2">
                            <span className="block text-2xl mb-2">✔</span>
                            <span className="text-lg text-white/90 uppercase tracking-widest">Direct collaboration</span>
                        </div>
                        <div className="border-t border-white/20 pt-2">
                            <span className="block text-2xl mb-2">✔</span>
                            <span className="text-lg text-white/90 uppercase tracking-widest">Faster insight cycles</span>
                        </div>
                        <div className="border-t border-white/20 pt-2">
                            <span className="block text-2xl mb-2">✔</span>
                            <span className="text-lg text-white/90 uppercase tracking-widest">Practical recommendations</span>
                        </div>
                        <div className="border-t border-white/20 pt-2">
                            <span className="block text-2xl mb-2">✔</span>
                            <span className="text-lg text-white/90 uppercase tracking-widest">Implementation-aware strategy</span>
                        </div>
                        <div className="border-t border-white/20 pt-2 sm:col-span-2">
                            <span className="block text-2xl mb-2">✔</span>
                            <span className="text-lg text-white/90 uppercase tracking-widest">AI-enabled thinking</span>
                        </div>
                    </div>
                    <p className="text-4xl tracking-tight text-white/90">
                        The result: clarity delivered in weeks, not months.
                    </p>
                </div>
            </section>

            {/* Credibility Narrative */}
            <section className="py-6 px-6 lg:px-12 max-w-4xl mx-auto text-center border-b border-white/20">
                <h2 className="text-5xl md:text-6xl tracking-tight mb-16">Built from experience. <br /><span className="italic text-white/50">Designed for modern business pace.</span></h2>
                <div className="font-sans text-xl font-light text-white/70 leading-relaxed space-y-8 text-left max-w-2xl mx-auto">
                    <p>Innosphere Consulting was not created from theory. It was shaped by firsthand exposure to how strategy is developed and delivered across structured consulting environments and digital transformation initiatives.</p>
                    <p>Over time, one observation became clear  while traditional consulting brings depth and rigour, the model itself can sometimes slow momentum for organisations that need clarity sooner.</p>
                    <p>Layers of communication, extended discovery phases, and delayed implementation often create a gap between insight and action.</p>
                    <p className="font-serif text-3xl text-white tracking-tight my-12 text-center italic">Innosphere was founded to close that gap.</p>
                    <p>Our consultants bring experience shaped within consulting ecosystems, product delivery environments, and transformation programmes. That perspective informs how we approach every engagement  with structured thinking, practical delivery awareness, and a clear focus on outcomes.</p>
                </div>
            </section>

            {/* Offer & Ideal Client */}
            <section className="px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-white/20">
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/20">
                    <div className="py-6 md:pr-16">
                        <h3 className="font-sans text-sm tracking-widest uppercase text-white/50 mb-8">The Offer</h3>
                        <h4 className="text-5xl tracking-tight mb-8">AI & Digital Transformation Diagnostic</h4>
                        <p className="font-sans text-xl font-light text-white/70 mb-6">A focused engagement designed to help you understand where your business stands and what actions will create meaningful impact.</p>
                        <p className="font-sans font-bold text-lg text-white mb-6 uppercase tracking-wider">During your session, we will:</p>
                        <ul className="font-sans text-lg text-white/70 space-y-4 mb-16 border-l border-white/20 pl-6">
                            <li>• Assess current systems and workflows</li>
                            <li>• Identify automation opportunities</li>
                            <li>• Map AI use cases relevant to your operations</li>
                            <li>• Highlight inefficiencies slowing growth</li>
                            <li>• Provide a structured 30-day action roadmap</li>
                        </ul>
                        <div className="border border-white/20 p-8 pt-10">
                            <p className="text-3xl italic tracking-tight mb-8">Outcome: Direction, not just discussion.</p>
                            <CalendlyPopup
                                buttonText="👉 Secure your March diagnostic session"
                                className="bg-white text-black font-sans font-bold text-lg px-8 py-4 w-full uppercase tracking-widest hover:bg-white/80 transition-colors block text-center"
                            />
                        </div>
                    </div>
                    <div className="py-6 md:pl-16">
                        <h3 className="font-sans text-sm tracking-widest uppercase text-white/50 mb-8">Ideal Client</h3>
                        <h4 className="text-5xl tracking-tight mb-12">Who this is for</h4>
                        <div className="font-sans text-xl text-white/80 space-y-8 font-light">
                            <p className="border-b border-white/10 pb-8"><strong className="font-bold text-white uppercase tracking-wider block mb-2 text-sm">Founders</strong> scaling operations</p>
                            <p className="border-b border-white/10 pb-8"><strong className="font-bold text-white uppercase tracking-wider block mb-2 text-sm">SMEs</strong> exploring automation and AI</p>
                            <p className="border-b border-white/10 pb-8"><strong className="font-bold text-white uppercase tracking-wider block mb-2 text-sm">Leadership teams</strong> modernising internal systems</p>
                            <p className="border-b border-white/10 pb-8"><strong className="font-bold text-white uppercase tracking-wider block mb-2 text-sm">Innovation teams</strong> validating digital strategy</p>
                            <p className="pb-8"><strong className="font-bold text-white uppercase tracking-wider block mb-2 text-sm">Businesses</strong> seeking clarity before major technology investments</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentiation Section */}
            <section className="py-6 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-white/20">
                <h2 className="text-center text-5xl md:text-7xl tracking-tight mb-6">Why businesses choose <br /><span className="italic text-white/50">Innosphere</span></h2>
                <div className="grid md:grid-cols-4 gap-12 font-sans">
                    <div className="border-t-2 border-white pt-4">
                        <h4 className="font-bold text-xl uppercase tracking-wider mb-2">Enterprise-informed perspective</h4>
                        <p className="text-white/60 font-light leading-relaxed">Consulting thinking shaped within structured delivery environments.</p>
                    </div>
                    <div className="border-t-2 border-white pt-6">
                        <h4 className="font-bold text-xl uppercase tracking-wider mb-4">Founder accessibility</h4>
                        <p className="text-white/60 font-light leading-relaxed">Direct collaboration with experienced consultants.</p>
                    </div>
                    <div className="border-t-2 border-white pt-6">
                        <h4 className="font-bold text-xl uppercase tracking-wider mb-4">Practical delivery focus</h4>
                        <p className="text-white/60 font-light leading-relaxed">Recommendations grounded in implementation realities.</p>
                    </div>
                    <div className="border-t-2 border-white pt-6">
                        <h4 className="font-bold text-xl uppercase tracking-wider mb-4">AI-first mindset</h4>
                        <p className="text-white/60 font-light leading-relaxed">Future-ready thinking integrated into every engagement.</p>
                    </div>
                </div>
            </section>

            {/* Consulting Philosophy Section */}
            <section className="py-6 px-6 lg:px-12 max-w-4xl mx-auto border-b border-white/20 text-center">
                <h3 className="font-sans text-sm tracking-widest uppercase text-white/50 mb-8">Consulting Philosophy</h3>
                <h4 className="text-5xl tracking-tight mb-6">From presentation to implementation</h4>
                <div className="font-sans text-xl font-light text-white/70 leading-relaxed space-y-8 max-w-2xl mx-auto mb-16">
                    <p>We’ve seen how valuable consulting insight can be  and also how easily it can remain in presentation form.</p>
                    <p>At Innosphere, our goal is to ensure clarity translates into movement. That means strategies that consider operational realities, technology ecosystems, and organisational readiness.</p>
                </div>
                <p className="text-5xl md:text-7xl uppercase tracking-tighter mx-auto max-w-3xl block">
                    Less decks<br />More progress
                </p>
            </section>

            {/* Founder Note */}
            <section className="py-6 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-white/20 flex flex-col items-center">
                <div className="w-64 h-64 bg-white/5 rounded-full flex items-center justify-center mb-4 border border-white/20 overflow-hidden grayscale">
                    <span className="font-sans text-xs tracking-widest text-white/30 uppercase">INNOSPHERE CONSULTING Founder</span>
                </div>
                <div className="max-w-3xl text-center">
                    <p className="font-sans text-2xl font-light leading-relaxed text-white/90 mb-12 italic">
                        "I’ve seen how valuable consulting can be  and also how slow and layered it can become. Innosphere was created to offer a more direct experience. The same depth of thinking, delivered with greater accessibility, speed, and practicality. If you’re navigating digital transformation or AI adoption, this conversation is a meaningful place to begin."
                    </p>
                </div>
            </section>

            {/* CTA SECTION */}
            <section id="booking-section" className="py-6 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-white/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-6xl tracking-tight leading-tight mb-8">If you’re exploring AI or digital transformation in 2026, <span className="italic text-white/50">start with clarity.</span></h2>
                    <p className="font-sans text-xl text-white/60 font-light leading-relaxed mb-12">The diagnostic session provides a structured starting point to help you make informed decisions before committing to larger initiatives.</p>
                    <div className="flex justify-center mb-12">
                        <CalendlyPopup
                            buttonText="👉 Book Your Free 1hour Consulation."
                            className="bg-white text-black font-sans text-xl tracking-wider uppercase font-bold px-12 py-6 hover:bg-white/80 transition-colors"
                        />
                    </div>
                </div>
            </section>

            {/* Sticky Social Icons */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-5 p-4 bg-white/5 backdrop-blur-xl border-l border-y border-white/10 rounded-l-2xl shadow-2xl">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-all transform hover:scale-110" title="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </a>
                <a href="https://l.instagram.com/?u=https%3A%2F%2Ftwitter.com%2Finnosphere__%3Ffbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnKDSMZPJkAgQQI5d-Le0npu-aOsV2V4_flX5H7fsw8bMhHQzMmgMkQjaNW0E_aem_N_vY1ylKCMEF4qcEBdlAsw&e=AT79dUTaVUv1-8orjRHJn_5klOogHDcyHx9jBi1_RMEi9kKIfSKOnXFvt5FY_sNmOgkH7FTo-2LJpbjK28h5FM9b0dl97yRajvG4LUPCCQ" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-all transform hover:scale-110" title="X (Twitter)">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a>
                <a href="https://www.instagram.com/innosphereconsult/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-all transform hover:scale-110" title="Instagram">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </a>
                {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-all transform hover:scale-110" title="Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                </a> */}
                <a href="https://l.instagram.com/?u=http%3A%2F%2Fwww.tiktok.com%2F%40innosphereconsulting%3Ffbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnh6u5cfpB92IcsYVq6X8ER0xmDfHTpXm1y5AZ2fC4-ZyPFrBxnWkRSqvT-zs_aem_ZXwD9jRqY73iPihMb88xfA&e=AT4hPHyQG3aMkypFfEPGroznZoBNgw5ZQSINMBNZp6wIG64VFSSzvpbzAy22-t9GgUPVAKFng67WDxK76IEz6nDxVRWRKq3aSVSIZYfVGQ" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-all transform hover:scale-110" title="TikTok">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                </a>
                <a href="https://innosphereconsulting.ae" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-all transform hover:scale-110" title="Website">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
                    </svg>
                </a>
            </div>

            {/* Final CTA Footer */}
            <footer className="pt-4 pb-4 px-6 lg:px-12 max-w-[1400px] mx-auto text-center font-sans">
                <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-4 italic">Clarity before complexity. <br />Momentum before delay.</h2>
                <div className="flex flex-col sm:flex-row gap-8 justify-center uppercase tracking-widest text-sm font-bold opacity-80">
                    <button onClick={scrollToBooking} className="hover:text-white/50 transition-colors">👉 Book Your Diagnostic Session</button>
                    {/* <a href="mailto:contact@innosphereconsulting.ae" className="hover:text-white/50 transition-colors">👉 Speak with Innosphere Consulting</a> */}
                </div>
            </footer>
        </div>
    );
};

export default VariationThree;
