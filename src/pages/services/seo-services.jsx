import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FlowingMenu from '../../ui/menu.jsx';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: 'Keyword Research',
        description: 'In-depth analysis to identify high-value keywords that drive targeted traffic to your site',
        label: 'Research'
    },
    {
        title: 'On-Page SEO',
        description: 'Optimize meta tags, content structure, and internal linking for maximum search visibility',
        label: 'Optimization'
    },
    {
        title: 'Technical SEO',
        description: 'Fix crawl errors, improve site speed, mobile-friendliness, and schema markup',
        label: 'Technical'
    },
    {
        title: 'Link Building',
        description: 'Acquire high-quality backlinks from authoritative sites to boost domain authority',
        label: 'Authority'
    },
    {
        title: 'Local SEO',
        description: 'Optimize Google My Business, local citations, and location-based search rankings',
        label: 'Local'
    },
    {
        title: 'Analytics & Reporting',
        description: 'Track rankings, traffic, and conversions with detailed monthly performance reports',
        label: 'Insights'
    }
];

// SEO process steps
const processSteps = [
    {
        number: '01',
        title: 'SEO Audit',
        description: 'Comprehensive analysis of your website to identify optimization opportunities and technical issues.',
        icon: (
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        )
    },
    {
        number: '02',
        title: 'Strategy Development',
        description: 'Create a customized SEO roadmap aligned with your business goals and target audience.',
        icon: (
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
        )
    },
    {
        number: '03',
        title: 'Implementation',
        description: 'Execute on-page, off-page, and technical SEO optimizations to improve search rankings.',
        icon: (
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    },
    {
        number: '04',
        title: 'Monitoring',
        description: 'Track keyword rankings, organic traffic, and user engagement metrics continuously.',
        icon: (
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        )
    },
    {
        number: '05',
        title: 'Optimization',
        description: 'Continuously refine strategy based on data insights to maximize ROI and rankings.',
        icon: (
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        )
    }
];

// Sample projects
const projects = [
    {
        text: 'E-commerce SEO',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
        link: '/contact'
    },
    {
        text: 'Local Business SEO',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
        link: '/contact'
    },
    {
        text: 'SaaS SEO Campaign',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop',
        link: '/contact'
    },
    {
        text: 'Content Marketing SEO',
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&auto=format&fit=crop',
        link: '/contact'
    }
];

// Process Step Component
function ProcessStep({ step, index }) {
    const stepRef = useRef(null);

    useEffect(() => {
        const el = stepRef.current;
        if (!el) return;

        gsap.fromTo(
            el,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                delay: index * 0.1,
            }
        );
    }, [index]);

    return (
        <div ref={stepRef} className="group relative">
            {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-green-400/50 to-transparent" />
            )}

            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/60 hover:border-green-300 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-500 group-hover:-translate-y-2">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                </div>

                <div className="w-16 h-16 mb-6 text-green-600 group-hover:text-blue-600 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                    {step.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3 font-playfair">
                    {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {step.description}
                </p>
            </div>
        </div>
    );
}

export function SeoServices() {
    const navigate = useNavigate();
    const heroRef = useRef(null);
    const ctaRef = useRef(null);

    // Hero animation
    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo('.seo-hero-badge',
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
            )
                .fromTo('.seo-hero-title',
                    { y: 60, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                    "-=0.3"
                )
                .fromTo('.seo-hero-subtitle',
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                    "-=0.4"
                )
                .fromTo('.seo-hero-cta',
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                    "-=0.3"
                );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    // CTA animation
    useEffect(() => {
        const el = ctaRef.current;
        if (!el) return;

        gsap.fromTo(el,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
            <>
                <style>
                    {`
                    @keyframes floatSlow {
                        0%, 100% { 
                            transform: translateY(0px);
                        }
                        50% { 
                            transform: translateY(-15px);
                        }
                    }
                    
                    @keyframes pulse-soft {
                        0%, 100% {
                            opacity: 0.6;
                        }
                        50% {
                            opacity: 1;
                        }
                    }
                    
                    @keyframes gridMove {
                        0% {
                            transform: translate(0, 0);
                        }
                        100% {
                            transform: translate(60px, 60px);
                        }
                    }
                `}
                </style>
                <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 font-manrope overflow-hidden">
                    {/* ===== HERO SECTION ===== */}
                    <section ref={heroRef} className="relative pt-16 pb-20 overflow-hidden">
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" style={{ animation: 'floatSlow 12s ease-in-out infinite' }} />
                            <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" style={{ animation: 'floatSlow 15s ease-in-out infinite', animationDelay: '2s' }} />

                            <div className="absolute inset-0 opacity-[0.02]" style={{
                                backgroundImage: 'linear-gradient(rgba(34,197,94,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.2) 1px, transparent 1px)',
                                backgroundSize: '80px 80px'
                            }} />
                        </div>

                        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
                            {/* <div className="seo-hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-300/30 backdrop-blur-sm mb-8">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm font-semibold text-green-700">SEO Services</span>
                            </div> */}

                            <h1 className="seo-hero-title text-5xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight font-playfair">
                                <span className="block text-gray-800">Rank Higher</span>
                                <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent pt-2">
                                    Get More Traffic
                                </span>
                            </h1>

                            <p className="seo-hero-subtitle text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                                Boost your online visibility with our comprehensive SEO strategies that drive organic traffic and improve search rankings.
                            </p>

                            <div className="seo-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
                                <div className="relative group/btn inline-block">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-full opacity-60 group-hover/btn:opacity-100 blur-lg transition-all duration-500" />
                                    <button
                                        onClick={() => navigate('/contact')}
                                        className="relative px-10 py-5 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 border border-white/20"
                                    >
                                        Start Your SEO Journey
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                        <div className="absolute inset-0 rounded-full overflow-hidden">
                                            <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover/btn:animate-shine" />
                                        </div>
                                    </button>
                                </div>

                                <button
                                    onClick={() => document.getElementById('process-section').scrollIntoView({ behavior: 'smooth' })}
                                    className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-800 rounded-full font-bold text-lg shadow-sm hover:border-green-300 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                                >
                                    See Our Process
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='absolute left-0 top-0 right-0 w-full h-32 bg-gradient-to-b from-pink-100 via-gray-50 to-transparent pointer-events-none'></div>
                    </section>

                    {/* ===== FEATURES SECTION ===== */}
                    <section className="py-8 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-400/15 rounded-full blur-3xl" style={{ animation: 'pulse-soft 8s ease-in-out infinite' }} />
                            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl" style={{ animation: 'pulse-soft 10s ease-in-out infinite', animationDelay: '2s' }} />

                            <div className="absolute inset-0 opacity-[0.015]" style={{
                                backgroundImage: 'linear-gradient(rgba(34,197,94,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.2) 1px, transparent 1px)',
                                backgroundSize: '60px 60px',
                                animation: 'gridMove 20s linear infinite'
                            }} />
                        </div>

                        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                            <div className="text-center mb-10">
                                <h2 className="text-4xl md:text-5xl font-bold mb-2 font-playfair">
                                    <span className="text-gray-800">Comprehensive </span>
                                    <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">SEO Services</span>
                                </h2>
                                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                    Full-spectrum SEO solutions to improve your search rankings
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/60 hover:border-green-300 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2">
                                        <div className="mb-4">
                                            <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 text-xs font-semibold rounded-full group-hover:from-green-200 group-hover:to-blue-200 transition-all duration-300">
                                                {feature.label}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                            {feature.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>

                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/0 to-blue-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
                    </section>

                    {/* ===== SEO PROCESS SECTION ===== */}
                    <section id="process-section" className="py-10 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 9s ease-in-out infinite' }} />
                            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 11s ease-in-out infinite', animationDelay: '3s' }} />
                        </div>
                        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl md:text-5xl font-bold mb-2 font-playfair">
                                    <span className="text-gray-800">Our SEO </span>
                                    <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
                                </h2>
                                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                    A data-driven approach that delivers measurable results
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                                {processSteps.map((step, idx) => (
                                    <ProcessStep key={idx} step={step} index={idx} />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ===== PROJECTS SECTION ===== */}
                    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
                        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                            <div className="text-center mb-10">
                                <h2 className="text-4xl md:text-5xl font-bold mb-2 font-playfair">
                                    <span className="text-gray-800">SEO </span>
                                    <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Results</span>
                                </h2>
                                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                    Recent SEO campaigns that delivered outstanding results
                                </p>
                            </div>

                            <div className="h-[60vh] md:h-[70vh]">
                                <FlowingMenu
                                    items={projects}
                                    speed={12}
                                    textColor="#1f2937"
                                    bgColor="#f9fafb"
                                    marqueeBgColor="#22c55e"
                                    marqueeTextColor="#ffffff"
                                    borderColor="#e5e7eb"
                                />
                            </div>
                        </div>
                    </section>

                    {/* ===== CTA SECTION ===== */}
                    <section ref={ctaRef} className="relative py-24 bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
                        <div className="absolute inset-0">
                            <div className="absolute top-10 left-10 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 10s ease-in-out infinite' }} />
                            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 12s ease-in-out infinite', animationDelay: '4s' }} />
                        </div>

                        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
                                <span className="text-gray-800">Ready to Dominate </span>
                                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Search Results?</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                                Let's boost your rankings and drive qualified traffic to your website.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <div className="relative group/btn inline-block">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-full opacity-60 group-hover/btn:opacity-100 blur-lg transition-all duration-500" />
                                    <button
                                        onClick={() => navigate('/contact')}
                                        className="relative px-10 py-5 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 border border-white/20"
                                    >
                                        Get Started Now
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>

                                        <div className="absolute inset-0 rounded-full overflow-hidden">
                                            <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover/btn:animate-shine" />
                                        </div>
                                    </button>
                                </div>

                                <button
                                    onClick={() => navigate('/contact')}
                                    className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-800 rounded-full font-bold text-lg shadow-sm hover:border-green-300 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                                >
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

export default SeoServices;