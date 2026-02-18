import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FlowingMenu from '../../ui/menu.jsx';

gsap.registerPlugin(ScrollTrigger);

const features = [
    { title: 'Media Outreach', description: 'Strategic pitching to journalists, bloggers, and influencers to secure valuable media coverage', label: 'Press' },
    { title: 'Link Building', description: 'High-authority backlinks from premium publications that boost SEO and domain authority', label: 'Backlinks' },
    { title: 'Reputation Management', description: 'Proactive monitoring and management of your brand\'s online reputation and sentiment', label: 'ORM' },
    { title: 'Content Syndication', description: 'Distribute your content across top-tier publications to maximize reach and impact', label: 'Distribution' },
    { title: 'Crisis Management', description: 'Rapid response strategies to protect and restore your brand during challenging times', label: 'Crisis' },
    { title: 'Influencer Relations', description: 'Strategic partnerships with industry influencers to amplify your brand message', label: 'Influence' }
];

const processSteps = [
    { number: '01', title: 'Brand Analysis', description: 'Comprehensive audit of your brand position, industry landscape, and PR opportunities.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>) },
    { number: '02', title: 'Strategy Development', description: 'Custom PR roadmap with target publications, messaging framework, and campaign goals.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>) },
    { number: '03', title: 'Content Creation', description: 'Compelling press releases, thought leadership articles, and media-ready assets.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>) },
    { number: '04', title: 'Media Outreach', description: 'Targeted pitching to relevant journalists, editors, and media outlets for maximum exposure.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>) },
    { number: '05', title: 'Results & Reporting', description: 'Comprehensive tracking of placements, reach, backlinks, and brand sentiment metrics.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>) }
];

const projects = [
    { text: 'Tech Startup Coverage', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop', link: '/contact' },
    { text: 'B2B SaaS Campaign', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop', link: '/contact' },
    { text: 'Crisis Management', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop', link: '/contact' },
    { text: 'Product Launch PR', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop', link: '/contact' }
];

function ProcessStep({ step, index }) {
    const stepRef = useRef(null);
    useEffect(() => {
        const el = stepRef.current;
        if (!el) return;
        gsap.fromTo(el, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }, delay: index * 0.1 });
    }, [index]);
    return (<div ref={stepRef} className="group relative">{index < processSteps.length - 1 && (<div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-indigo-400/50 to-transparent" />)}<div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/60 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 group-hover:-translate-y-2"><div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"><span className="text-white font-bold text-sm">{step.number}</span></div><div className="w-16 h-16 mb-6 text-indigo-600 group-hover:text-purple-600 transition-colors duration-300 group-hover:scale-110 transform transition-transform">{step.icon}</div><h3 className="text-2xl font-bold text-gray-800 mb-3 font-playfair">{step.title}</h3><p className="text-gray-600 leading-relaxed">{step.description}</p></div></div>);
}

export function DigitalPR() {
    const navigate = useNavigate();
    const heroRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo('.pr-hero-badge', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }).fromTo('.pr-hero-title', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.3").fromTo('.pr-hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4").fromTo('.pr-hero-cta', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.3");
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
            <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 font-manrope overflow-hidden">
                {/* Hero Section */}
                <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" style={{ animation: 'floatSlow 12s ease-in-out infinite' }} />
                        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" style={{ animation: 'floatSlow 15s ease-in-out infinite', animationDelay: '2s' }} />
                        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(99,102,241,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.2) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
                    </div>
                    <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
                        <div className="pr-hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-300/30 backdrop-blur-sm mb-8">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                            <span className="text-sm font-semibold text-indigo-700">Digital PR</span>
                        </div>
                        <h1 className="pr-hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight font-playfair">
                            <span className="block text-gray-800">Build Your</span>
                            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Brand Authority</span>
                        </h1>
                        <p className="pr-hero-subtitle text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Strengthen your online reputation with strategic digital PR campaigns that earn trust and credibility.
                        </p>
                        <div className="pr-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
                            <div className="relative group/btn inline-block">
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full opacity-60 group-hover/btn:opacity-100 blur-lg transition-all duration-500" />
                                <button onClick={() => navigate('/contact')} className="relative px-10 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 border border-white/20">
                                    Elevate Your Brand
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-full overflow-hidden">
                                        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover/btn:animate-shine" />
                                    </div>
                                </button>
                            </div>
                            <button onClick={() => document.getElementById('process-section').scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-800 rounded-full font-bold text-lg shadow-sm hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
                                See Our Process
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='absolute left-0 top-0 right-0 w-full h-32 bg-gradient-to-b from-pink-100 via-gray-50 to-transparent pointer-events-none'></div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-400/15 rounded-full blur-3xl" style={{ animation: 'pulse-soft 8s ease-in-out infinite' }} />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl" style={{ animation: 'pulse-soft 10s ease-in-out infinite', animationDelay: '2s' }} />
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
                                <span className="text-gray-800">Comprehensive </span>
                                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">PR Solutions</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Build credibility and trust with strategic media relations</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/60 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2">
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs font-semibold rounded-full group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300">
                                            {feature.label}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-400/0 to-purple-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
                </section>

                {/* Process Section */}
                <section id="process-section" className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 9s ease-in-out infinite' }} />
                        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 11s ease-in-out infinite', animationDelay: '3s' }} />
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
                                <span className="text-gray-800">Our PR </span>
                                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Process</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Strategic approach to building your brand authority</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                            {processSteps.map((step, idx) => (
                                <ProcessStep key={idx} step={step} index={idx} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
                                <span className="text-gray-800">PR </span>
                                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Success Stories</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Campaigns that transformed brands and earned media trust</p>
                        </div>
                        <div className="h-[60vh] md:h-[70vh]">
                            <FlowingMenu 
                                items={projects} 
                                speed={12} 
                                textColor="#1f2937" 
                                bgColor="#f9fafb" 
                                marqueeBgColor="#6366f1" 
                                marqueeTextColor="#ffffff" 
                                borderColor="#e5e7eb" 
                            />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section ref={ctaRef} className="relative py-24 bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 10s ease-in-out infinite' }} />
                        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 12s ease-in-out infinite', animationDelay: '4s' }} />
                    </div>
                    <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
                            <span className="text-gray-800">Ready to Build Your </span>
                            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Authority?</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                            Let's craft a PR strategy that elevates your brand and earns media trust.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <div className="relative group/btn inline-block">
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full opacity-60 group-hover/btn:opacity-100 blur-lg transition-all duration-500" />
                                <button onClick={() => navigate('/contact')} className="relative px-10 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 border border-white/20">
                                    Get Started Now
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-full overflow-hidden">
                                        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover/btn:animate-shine" />
                                    </div>
                                </button>
                            </div>
                            <button onClick={() => navigate('/contact')} className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-800 rounded-full font-bold text-lg shadow-sm hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
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
