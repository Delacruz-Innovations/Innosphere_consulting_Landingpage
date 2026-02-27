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
                buttonText="Book Diagnostic →"
                className="bg-white text-black shadow-2xl shadow-white/10 px-6 md:px-8 py-4 md:py-5 rounded-none font-bold tracking-widest flex items-center border border-transparent hover:border-white/50 hover:bg-black hover:text-white uppercase text-xs transition-colors duration-300"
            />

            {/* Navigation */}
            <nav className="w-full border-b border-white/20 sticky top-0 z-40 bg-black/90 backdrop-blur-md">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between font-sans">
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
                        className="border border-white hover:bg-white hover:text-black px-6 py-2 text-sm font-semibold tracking-widest uppercase transition-colors"
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
                    <h2 className="text-5xl md:text-6xl tracking-tight mb-12">A more direct consulting experience</h2>
                    <p className="font-sans text-xl text-white/60 mb-12 leading-relaxed">
                        Innosphere Consulting was created with a different delivery philosophy. You gain access to experienced consultants who understand enterprise delivery  but engage in a way that prioritises:
                    </p>
                    <div className="font-sans grid sm:grid-cols-2 gap-8 mb-16">
                        <div className="border-t border-white/20 pt-4">
                            <span className="block text-2xl mb-2">✔</span>
                            <span className="text-lg text-white/90 uppercase tracking-widest">Direct collaboration</span>
                        </div>
                        <div className="border-t border-white/20 pt-4">
                            <span className="block text-2xl mb-2">✔</span>
                            <span className="text-lg text-white/90 uppercase tracking-widest">Faster insight cycles</span>
                        </div>
                        <div className="border-t border-white/20 pt-4">
                            <span className="block text-2xl mb-2">✔</span>
                            <span className="text-lg text-white/90 uppercase tracking-widest">Practical recommendations</span>
                        </div>
                        <div className="border-t border-white/20 pt-4">
                            <span className="block text-2xl mb-2">✔</span>
                            <span className="text-lg text-white/90 uppercase tracking-widest">Implementation-aware strategy</span>
                        </div>
                        <div className="border-t border-white/20 pt-4 sm:col-span-2">
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
                        <h2 className="text-5xl tracking-tight mb-8">AI & Digital Transformation Diagnostic</h2>
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
                        <h2 className="text-5xl tracking-tight mb-12">Who this is for</h2>
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
                <h2 className="text-5xl tracking-tight mb-6">From presentation to implementation</h2>
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
                    <span className="font-sans text-xs tracking-widest text-white/30 uppercase">[Founder Photo]</span>
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
                            buttonText="👉 Book your session"
                            className="bg-white text-black font-sans text-xl tracking-wider uppercase font-bold px-12 py-6 hover:bg-white/80 transition-colors"
                        />
                    </div>
                </div>
            </section>

            {/* Final CTA Footer */}
            <footer className="pt-4 pb-4 px-6 lg:px-12 max-w-[1400px] mx-auto text-center font-sans">
                <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-4 italic">Clarity before complexity. <br />Momentum before delay.</h2>
                <div className="flex flex-col sm:flex-row gap-8 justify-center uppercase tracking-widest text-sm font-bold opacity-80">
                    <button onClick={scrollToBooking} className="hover:text-white/50 transition-colors">👉 Book Your Diagnostic Session</button>
                    <a href="mailto:contact@innosphereconsulting.ae" className="hover:text-white/50 transition-colors">👉 Speak with Innosphere Consulting</a>
                </div>
            </footer>
        </div>
    );
};

export default VariationThree;
