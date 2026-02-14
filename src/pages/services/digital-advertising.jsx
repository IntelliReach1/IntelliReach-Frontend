import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FlowingMenu from '../../ui/menu.jsx';

gsap.registerPlugin(ScrollTrigger);

const features = [
    { title: 'Google Ads', description: 'Search, Display, and Shopping campaigns optimized for maximum ROI and conversions', label: 'PPC' },
    { title: 'Facebook & Instagram', description: 'Targeted social advertising with precise audience segmentation and creative optimization', label: 'Social Ads' },
    { title: 'LinkedIn Advertising', description: 'B2B campaigns that reach decision-makers with sponsored content and InMail', label: 'B2B' },
    { title: 'Display Network', description: 'Banner advertising across premium publisher sites with remarketing and prospecting', label: 'Display' },
    { title: 'Video Advertising', description: 'YouTube and video platform campaigns with engaging creative and performance tracking', label: 'Video' },
    { title: 'Remarketing', description: 'Re-engage past visitors with strategic remarketing across all major platforms', label: 'Retargeting' }
];

const processSteps = [
    { number: '01', title: 'Strategy Development', description: 'Comprehensive audit of business goals, target audience, and competitive landscape.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>) },
    { number: '02', title: 'Campaign Setup', description: 'Platform configuration, audience targeting, budget allocation, and tracking implementation.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>) },
    { number: '03', title: 'Creative Production', description: 'Compelling ad copy, design, and video production that resonates with your audience.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>) },
    { number: '04', title: 'Launch & Monitor', description: 'Campaign deployment with real-time monitoring, bid management, and immediate optimizations.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>) },
    { number: '05', title: 'Optimize & Scale', description: 'Continuous A/B testing, budget reallocation, and scaling winning campaigns for maximum ROI.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>) }
];

const projects = [
    { text: 'E-commerce PPC', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop', link: '/contact' },
    { text: 'B2B LinkedIn Campaign', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop', link: '/contact' },
    { text: 'Social Media Ads', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop', link: '/contact' },
    { text: 'Multi-Channel Campaign', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop', link: '/contact' }
];

function ProcessStep({ step, index }) {
    const stepRef = useRef(null);
    useEffect(() => {
        const el = stepRef.current;
        if (!el) return;
        gsap.fromTo(el, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }, delay: index * 0.1 });
    }, [index]);
    return (<div ref={stepRef} className="group relative">{index < processSteps.length - 1 && (<div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-orange-400/50 to-transparent" />)}<div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/60 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 group-hover:-translate-y-2"><div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"><span className="text-white font-bold text-sm">{step.number}</span></div><div className="w-16 h-16 mb-6 text-orange-600 group-hover:text-pink-600 transition-colors duration-300 group-hover:scale-110 transform transition-transform">{step.icon}</div><h3 className="text-2xl font-bold text-gray-800 mb-3 font-playfair">{step.title}</h3><p className="text-gray-600 leading-relaxed">{step.description}</p></div></div>);
}

export function DigitalAdvertising() {
    const navigate = useNavigate();
    const heroRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo('.ad-hero-badge', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }).fromTo('.ad-hero-title', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.3").fromTo('.ad-hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4").fromTo('.ad-hero-cta', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.3");
        }, heroRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const el = ctaRef.current;
        if (!el) return;
        gsap.fromTo(el, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } });
    }, []);

    return (
        <>
            <style>
                {`
                    @keyframes floatSlow {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-15px); }
                    }
                    @keyframes pulse-soft {
                        0%, 100% { opacity: 0.6; }
                        50% { opacity: 1; }
                    }
                    @keyframes gridMove {
                        0% { transform: translate(0, 0); }
                        100% { transform: translate(60px, 60px); }
                    }
                `}
            </style>
            <div className="bg-gradient-to-br from-gray-50 via-white to-orange-50 font-manrope overflow-hidden">
                {/* Hero Section */}
                <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" style={{ animation: 'floatSlow 12s ease-in-out infinite' }} />
                        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" style={{ animation: 'floatSlow 15s ease-in-out infinite', animationDelay: '2s' }} />
                        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(251,146,60,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,0.2) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
                    </div>
                    <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
                        <div className="ad-hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-300/30 backdrop-blur-sm mb-8">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                            <span className="text-sm font-semibold text-orange-700">Digital Advertising</span>
                        </div>
                        <h1 className="ad-hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight font-playfair">
                            <span className="block text-gray-800">Amplify Your</span>
                            <span className="block bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Digital Reach</span>
                        </h1>
                        <p className="ad-hero-subtitle text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Maximize ROI with data-driven advertising campaigns across Google, Facebook, Instagram, and more.
                        </p>
                        <div className="ad-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
                            <div className="relative group/btn inline-block">
                                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 rounded-full opacity-60 group-hover/btn:opacity-100 blur-lg transition-all duration-500" />
                                <button onClick={() => navigate('/contact')} className="relative px-10 py-5 bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 text-white rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 border border-white/20">
                                    Launch Your Campaign
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-full overflow-hidden">
                                        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover/btn:animate-shine" />
                                    </div>
                                </button>
                            </div>
                            <button onClick={() => document.getElementById('process-section').scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-800 rounded-full font-bold text-lg shadow-sm hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
                                See Our Process
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='absolute left-0 top-0 right-0 w-full h-32 bg-gradient-to-b from-blue-100 via-gray-50 to-transparent pointer-events-none'></div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-pink-50 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-400/15 rounded-full blur-3xl" style={{ animation: 'pulse-soft 8s ease-in-out infinite' }} />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-400/15 rounded-full blur-3xl" style={{ animation: 'pulse-soft 10s ease-in-out infinite', animationDelay: '2s' }} />
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                        <div className="text-center mb-16">
                            <span className="text-orange-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">Advertising Platforms</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
                                <span className="text-gray-800">Comprehensive </span>
                                <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Ad Solutions</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Drive qualified traffic and conversions across all major platforms</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/60 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2">
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 text-xs font-semibold rounded-full group-hover:from-orange-200 group-hover:to-pink-200 transition-all duration-300">
                                            {feature.label}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/0 to-pink-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
                </section>

                {/* Process Section */}
                <section id="process-section" className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 9s ease-in-out infinite' }} />
                        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 11s ease-in-out infinite', animationDelay: '3s' }} />
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                        <div className="text-center mb-16">
                            <span className="text-orange-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">How We Work</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
                                <span className="text-gray-800">Our Advertising </span>
                                <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Process</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">From strategy to scaling, we optimize every step for maximum performance</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                            {processSteps.map((step, idx) => (
                                <ProcessStep key={idx} step={step} index={idx} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-pink-50 relative overflow-hidden">
                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                        <div className="text-center mb-12">
                            <span className="text-orange-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">Case Studies</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
                                <span className="text-gray-800">Campaign </span>
                                <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Success Stories</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Data-driven campaigns that deliver exceptional ROI</p>
                        </div>
                        <div className="h-[60vh] md:h-[70vh]">
                            <FlowingMenu 
                                items={projects} 
                                speed={12} 
                                textColor="#1f2937" 
                                bgColor="#f9fafb" 
                                marqueeBgColor="#fb923c" 
                                marqueeTextColor="#ffffff" 
                                borderColor="#e5e7eb" 
                            />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section ref={ctaRef} className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 10s ease-in-out infinite' }} />
                        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 12s ease-in-out infinite', animationDelay: '4s' }} />
                    </div>
                    <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
                            <span className="text-gray-800">Ready to Scale Your </span>
                            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Advertising?</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                            Let's create campaigns that drive measurable growth and maximize your ROI.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <div className="relative group/btn inline-block">
                                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 rounded-full opacity-60 group-hover/btn:opacity-100 blur-lg transition-all duration-500" />
                                <button onClick={() => navigate('/contact')} className="relative px-10 py-5 bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 text-white rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 border border-white/20">
                                    Get Started Now
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-full overflow-hidden">
                                        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover/btn:animate-shine" />
                                    </div>
                                </button>
                            </div>
                            <button onClick={() => navigate('/contact')} className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-800 rounded-full font-bold text-lg shadow-sm hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
                                Schedule a Call
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
