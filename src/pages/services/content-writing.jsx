import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FlowingMenu from '../../ui/menu.jsx';

gsap.registerPlugin(ScrollTrigger);

const features = [
    { title: 'Blog Writing', description: 'Engaging, SEO-optimized blog posts that establish thought leadership and drive organic traffic', label: 'Blogging' },
    { title: 'Website Copy', description: 'Compelling web copy that converts visitors into customers with persuasive messaging', label: 'Web Copy' },
    { title: 'Product Descriptions', description: 'Detailed, conversion-focused product descriptions that highlight features and benefits', label: 'E-commerce' },
    { title: 'Social Media Content', description: 'Engaging posts, captions, and content calendars for all social media platforms', label: 'Social' },
    { title: 'Email Campaigns', description: 'Persuasive email sequences that nurture leads and drive customer engagement', label: 'Email' },
    { title: 'Case Studies', description: 'Data-driven success stories that showcase your expertise and build credibility', label: 'Case Studies' }
];

const processSteps = [
    { number: '01', title: 'Discovery', description: 'Understanding your brand voice, target audience, and content goals through detailed consultations.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>) },
    { number: '02', title: 'Research', description: 'In-depth topic research, competitor analysis, and keyword identification for maximum impact.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>) },
    { number: '03', title: 'Writing', description: 'Creating compelling, original content that resonates with your audience and aligns with your goals.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>) },
    { number: '04', title: 'Editing', description: 'Thorough review for grammar, clarity, tone, and SEO optimization before delivery.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) },
    { number: '05', title: 'Optimization', description: 'Continuous performance tracking and content refinement based on engagement metrics.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>) }
];

const projects = [
    { text: 'Tech Blog Series', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop', link: '/contact' },
    { text: 'E-commerce Product Copy', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&auto=format&fit=crop', link: '/contact' },
    { text: 'SaaS Case Studies', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop', link: '/contact' },
    { text: 'Email Campaign Series', image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&auto=format&fit=crop', link: '/contact' }
];

function ProcessStep({ step, index }) {
    const stepRef = useRef(null);
    useEffect(() => {
        const el = stepRef.current;
        if (!el) return;
        gsap.fromTo(el, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }, delay: index * 0.1 });
    }, [index]);
    return (<div ref={stepRef} className="group relative">{index < processSteps.length - 1 && (<div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-teal-400/50 to-transparent" />)}<div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/60 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-500 group-hover:-translate-y-2"><div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"><span className="text-white font-bold text-sm">{step.number}</span></div><div className="w-16 h-16 mb-6 text-teal-600 group-hover:text-cyan-600 transition-colors duration-300 group-hover:scale-110 transform transition-transform">{step.icon}</div><h3 className="text-2xl font-bold text-gray-800 mb-3 font-playfair">{step.title}</h3><p className="text-gray-600 leading-relaxed">{step.description}</p></div></div>);
}

export function ContentWriting() {
    const navigate = useNavigate();
    const heroRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo('.content-hero-badge', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }).fromTo('.content-hero-title', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.3").fromTo('.content-hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4").fromTo('.content-hero-cta', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.3");
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
            <div className="bg-gradient-to-br from-gray-50 via-white to-teal-50 font-manrope overflow-hidden">
                {/* Hero Section */}
                <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" style={{ animation: 'floatSlow 12s ease-in-out infinite' }} />
                        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" style={{ animation: 'floatSlow 15s ease-in-out infinite', animationDelay: '2s' }} />
                        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(20,184,166,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.2) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
                    </div>
                    <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
                        <div className="content-hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-300/30 backdrop-blur-sm mb-8">
                            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                            <span className="text-sm font-semibold text-teal-700">Content Writing</span>
                        </div>
                        <h1 className="content-hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight font-playfair">
                            <span className="block text-gray-800">Craft Compelling</span>
                            <span className="block bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">Stories</span>
                        </h1>
                        <p className="content-hero-subtitle text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Engage your audience with high-quality content that informs, inspires, and drives conversions.
                        </p>
                        <div className="content-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
                            <div className="relative group/btn inline-block">
                                <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 rounded-full opacity-60 group-hover/btn:opacity-100 blur-lg transition-all duration-500" />
                                <button onClick={() => navigate('/contact')} className="relative px-10 py-5 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 border border-white/20">
                                    Get Quality Content
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-full overflow-hidden">
                                        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover/btn:animate-shine" />
                                    </div>
                                </button>
                            </div>
                            <button onClick={() => document.getElementById('process-section').scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-800 rounded-full font-bold text-lg shadow-sm hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
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
                <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-cyan-50 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl" style={{ animation: 'pulse-soft 8s ease-in-out infinite' }} />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl" style={{ animation: 'pulse-soft 10s ease-in-out infinite', animationDelay: '2s' }} />
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                        <div className="text-center mb-16">
                            <span className="text-teal-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">What We Write</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
                                <span className="text-gray-800">Professional </span>
                                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">Content Services</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">High-quality content tailored to your brand and audience</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/60 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-500 hover:-translate-y-2">
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 text-xs font-semibold rounded-full group-hover:from-teal-200 group-hover:to-cyan-200 transition-all duration-300">
                                            {feature.label}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-400/0 to-cyan-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
                </section>

                {/* Process Section */}
                <section id="process-section" className="py-20 bg-gradient-to-br from-gray-50 via-white to-teal-50 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 9s ease-in-out infinite' }} />
                        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 11s ease-in-out infinite', animationDelay: '3s' }} />
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                        <div className="text-center mb-16">
                            <span className="text-teal-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">How We Work</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
                                <span className="text-gray-800">Our Content </span>
                                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">Process</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">A proven workflow that delivers exceptional content every time</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                            {processSteps.map((step, idx) => (
                                <ProcessStep key={idx} step={step} index={idx} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-cyan-50 relative overflow-hidden">
                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                        <div className="text-center mb-12">
                            <span className="text-teal-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
                                <span className="text-gray-800">Content </span>
                                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">Showcase</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Recent content projects that delivered outstanding results</p>
                        </div>
                        <div className="h-[60vh] md:h-[70vh]">
                            <FlowingMenu 
                                items={projects} 
                                speed={12} 
                                textColor="#1f2937" 
                                bgColor="#f9fafb" 
                                marqueeBgColor="#14b8a6" 
                                marqueeTextColor="#ffffff" 
                                borderColor="#e5e7eb" 
                            />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section ref={ctaRef} className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-teal-50 overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-10 left-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 10s ease-in-out infinite' }} />
                        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 12s ease-in-out infinite', animationDelay: '4s' }} />
                    </div>
                    <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
                            <span className="text-gray-800">Ready to Tell Your </span>
                            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">Story?</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                            Let's create content that resonates with your audience and drives results.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <div className="relative group/btn inline-block">
                                <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 rounded-full opacity-60 group-hover/btn:opacity-100 blur-lg transition-all duration-500" />
                                <button onClick={() => navigate('/contact')} className="relative px-10 py-5 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 border border-white/20">
                                    Get Started Now
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-full overflow-hidden">
                                        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover/btn:animate-shine" />
                                    </div>
                                </button>
                            </div>
                            <button onClick={() => navigate('/contact')} className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-800 rounded-full font-bold text-lg shadow-sm hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
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
