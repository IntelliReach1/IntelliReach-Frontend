import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FlowingMenu from '../../ui/menu.jsx';

gsap.registerPlugin(ScrollTrigger);

const features = [
    { title: 'Brand Identity', description: 'Cohesive visual systems including logos, colors, typography, and brand guidelines', label: 'Branding' },
    { title: 'Logo Design', description: 'Memorable, scalable logos that capture your brand essence and stand out in any context', label: 'Logos' },
    { title: 'Marketing Materials', description: 'Brochures, flyers, business cards, and promotional materials that drive engagement', label: 'Print' },
    { title: 'Social Media Graphics', description: 'Eye-catching posts, stories, and ad creatives optimized for every platform', label: 'Social' },
    { title: 'Web & UI Design', description: 'Beautiful, user-friendly website and app interfaces that enhance user experience', label: 'Digital' },
    { title: 'Packaging Design', description: 'Product packaging that captures attention on shelves and communicates your value', label: 'Packaging' }
];

const processSteps = [
    { number: '01', title: 'Discovery & Research', description: 'Understanding your brand, target audience, competitors, and design objectives.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>) },
    { number: '02', title: 'Concept Development', description: 'Brainstorming creative directions and developing initial design concepts and mood boards.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>) },
    { number: '03', title: 'Design Creation', description: 'Crafting polished designs with attention to detail, color theory, and visual hierarchy.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>) },
    { number: '04', title: 'Client Review', description: 'Presenting designs for feedback, incorporating revisions, and refining until perfect.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>) },
    { number: '05', title: 'Final Delivery', description: 'Providing all design files in required formats with comprehensive brand guidelines.', icon: (<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>) }
];

const projects = [
    { text: 'Tech Startup Branding', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop', link: '/contact' },
    { text: 'E-commerce Package Design', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop', link: '/contact' },
    { text: 'Health App UI/UX', image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&auto=format&fit=crop', link: '/contact' },
    { text: 'Restaurant Rebrand', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop', link: '/contact' }
];

function ProcessStep({ step, index }) {
    const stepRef = useRef(null);
    useEffect(() => {
        const el = stepRef.current;
        if (!el) return;
        gsap.fromTo(el, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }, delay: index * 0.1 });
    }, [index]);
    return (<div ref={stepRef} className="group relative">{index < processSteps.length - 1 && (<div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-pink-400/50 to-transparent" />)}<div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/60 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-500 group-hover:-translate-y-2"><div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-pink-600 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"><span className="text-white font-bold text-sm">{step.number}</span></div><div className="w-16 h-16 mb-6 text-pink-600 group-hover:text-yellow-600 transition-colors duration-300 group-hover:scale-110 transform transition-transform">{step.icon}</div><h3 className="text-2xl font-bold text-gray-800 mb-3 font-playfair">{step.title}</h3><p className="text-gray-600 leading-relaxed">{step.description}</p></div></div>);
}

export function GraphicDesign() {
    const navigate = useNavigate();
    const heroRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo('.design-hero-badge', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }).fromTo('.design-hero-title', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.3").fromTo('.design-hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4").fromTo('.design-hero-cta', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.3");
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
            <div className="bg-gradient-to-br from-gray-50 via-white to-pink-50 font-manrope overflow-x-hidden">
                {/* Hero Section */}
                <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" style={{ animation: 'floatSlow 12s ease-in-out infinite' }} />
                        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" style={{ animation: 'floatSlow 15s ease-in-out infinite', animationDelay: '2s' }} />
                        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(236,72,153,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,0.2) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
                    </div>
                    <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
                        <div className="design-hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-yellow-500/20 border border-pink-300/30 backdrop-blur-sm mb-8">
                            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                            <span className="text-sm font-semibold text-pink-700">Graphic Design</span>
                        </div>
                        <h1 className="design-hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight font-playfair">
                            <span className="block text-gray-800">Create Visual</span>
                            <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-600 bg-clip-text text-transparent">Masterpieces</span>
                        </h1>
                        <p className="design-hero-subtitle text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Transform your brand with stunning graphics, logos, and visual identities that captivate audiences.
                        </p>
                        <div className="design-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
                            <div className="relative group/btn inline-block">
                                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-600 rounded-full opacity-60 group-hover/btn:opacity-100 blur-lg transition-all duration-500" />
                                <button onClick={() => navigate('/contact')} className="relative px-10 py-5 bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-600 text-white rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 border border-white/20">
                                    Start Designing
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-full overflow-hidden">
                                        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover/btn:animate-shine" />
                                    </div>
                                </button>
                            </div>
                            <button onClick={() => document.getElementById('process-section').scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-800 rounded-full font-bold text-lg shadow-sm hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
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
                <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-yellow-50 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-400/15 rounded-full blur-3xl" style={{ animation: 'pulse-soft 8s ease-in-out infinite' }} />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/15 rounded-full blur-3xl" style={{ animation: 'pulse-soft 10s ease-in-out infinite', animationDelay: '2s' }} />
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                        <div className="text-center mb-16">
                            <span className="text-pink-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">Design Services</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
                                <span className="text-gray-800">Creative </span>
                                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-600 bg-clip-text text-transparent">Design Solutions</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Beautiful visuals that communicate your brand effectively</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/60 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-500 hover:-translate-y-2">
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-100 to-yellow-100 text-pink-700 text-xs font-semibold rounded-full group-hover:from-pink-200 group-hover:to-yellow-200 transition-all duration-300">
                                            {feature.label}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-yellow-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-400/0 to-yellow-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
                </section>

                {/* Process Section */}
                <section id="process-section" className="py-20 bg-gradient-to-br from-gray-50 via-white to-pink-50 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 9s ease-in-out infinite' }} />
                        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 11s ease-in-out infinite', animationDelay: '3s' }} />
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                        <div className="text-center mb-16">
                            <span className="text-pink-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">How We Work</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
                                <span className="text-gray-800">Our Design </span>
                                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-600 bg-clip-text text-transparent">Process</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">From concept to creation, we perfect every detail</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                            {processSteps.map((step, idx) => (
                                <ProcessStep key={idx} step={step} index={idx} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-yellow-50 relative overflow-hidden">
                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                        <div className="text-center mb-12">
                            <span className="text-pink-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
                                <span className="text-gray-800">Design </span>
                                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-600 bg-clip-text text-transparent">Showcase</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Visual stories that made brands unforgettable</p>
                        </div>
                        <div className="h-[60vh] md:h-[70vh]">
                            <FlowingMenu 
                                items={projects} 
                                speed={12} 
                                textColor="#1f2937" 
                                bgColor="#f9fafb" 
                                marqueeBgColor="#ec4899" 
                                marqueeTextColor="#ffffff" 
                                borderColor="#e5e7eb" 
                            />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section ref={ctaRef} className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-pink-50 overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 10s ease-in-out infinite' }} />
                        <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 12s ease-in-out infinite', animationDelay: '4s' }} />
                    </div>
                    <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
                            <span className="text-gray-800">Ready to Create </span>
                            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-600 bg-clip-text text-transparent">Something Amazing?</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                            Let's bring your vision to life with designs that leave a lasting impression.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <div className="relative group/btn inline-block">
                                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-600 rounded-full opacity-60 group-hover/btn:opacity-100 blur-lg transition-all duration-500" />
                                <button onClick={() => navigate('/contact')} className="relative px-10 py-5 bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-600 text-white rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 border border-white/20">
                                    Get Started Now
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-full overflow-hidden">
                                        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover/btn:animate-shine" />
                                    </div>
                                </button>
                            </div>
                            <button onClick={() => navigate('/contact')} className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-800 rounded-full font-bold text-lg shadow-sm hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
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
