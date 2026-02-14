import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FlowingMenu from '../../ui/menu.jsx';
import MagicBento from '../../ui/magicbento.jsx';

gsap.registerPlugin(ScrollTrigger);

// Features data for MagicBento
const features = [
    {
        color: '#060010',
        title: 'Responsive Design',
        description: 'Mobile-first approach ensuring perfect display on all devices',
        label: 'Adaptive'
    },
    {
        color: '#060010',
        title: 'Fast Performance',
        description: 'Lightning-fast load times with optimized code',
        label: 'Speed'
    },
    {
        color: '#060010',
        title: 'SEO Optimized',
        description: 'Built-in SEO best practices for better rankings',
        label: 'Visibility'
    },
    {
        color: '#060010',
        title: 'Modern Stack',
        description: 'Latest technologies including React, Next.js, and more',
        label: 'Technology'
    },
    {
        color: '#060010',
        title: 'Custom CMS',
        description: 'Easy content management with custom admin panels',
        label: 'Management'
    },
    {
        color: '#060010',
        title: 'Security First',
        description: 'Industry-standard security measures and SSL encryption',
        label: 'Protection'
    }
];

// Development process steps
const processSteps = [
    {
        number: '01',
        title: 'Discovery & Planning',
        description: 'We start by understanding your business goals, target audience, and project requirements through detailed consultations.',
        icon: (
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        )
    },
    {
        number: '02',
        title: 'Design & Prototyping',
        description: 'Our designers create stunning wireframes and interactive prototypes that bring your vision to life before development.',
        icon: (
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 13a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z" />
            </svg>
        )
    },
    {
        number: '03',
        title: 'Development',
        description: 'Expert developers build your website using clean, scalable code with the latest web technologies and best practices.',
        icon: (
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        )
    },
    {
        number: '04',
        title: 'Testing & QA',
        description: 'Rigorous testing across devices, browsers, and scenarios ensures a flawless user experience before launch.',
        icon: (
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        number: '05',
        title: 'Launch & Support',
        description: 'We handle deployment, provide training, and offer ongoing maintenance to ensure your website stays at peak performance.',
        icon: (
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    }
];

// Projects for FlowingMenu
const projects = [
    {
        link: '#',
        text: 'E-Commerce Platform',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop'
    },
    {
        link: '#',
        text: 'Corporate Website',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop'
    },
    {
        link: '#',
        text: 'SaaS Application',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop'
    },
    {
        link: '#',
        text: 'Portfolio Website',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop'
    }
];

function ProcessStep({ step, index }) {
    const stepRef = useRef(null);

    useEffect(() => {
        const el = stepRef.current;
        if (!el) return;

        gsap.fromTo(el,
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
            {/* Connector line (not for last item) */}
            {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent" />
            )}

            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/60 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 group-hover:-translate-y-2">
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mb-6 text-blue-600 group-hover:text-purple-600 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                    {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3 font-playfair">
                    {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {step.description}
                </p>

                {/* Hover gradient background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
        </div>
    );
}

export function WebDevelopment() {
    const navigate = useNavigate();
    const heroRef = useRef(null);
    const ctaRef = useRef(null);

    // Hero animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo('.webdev-hero-badge',
                { y: -30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
            )
                .fromTo('.webdev-hero-title',
                    { y: 60, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                    "-=0.3"
                )
                .fromTo('.webdev-hero-subtitle',
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                    "-=0.4"
                )
                .fromTo('.webdev-hero-cta',
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
                    @keyframes gridMove {
                        0% {
                            transform: translate(0, 0);
                        }
                        100% {
                            transform: translate(60px, 60px);
                        }
                    }
                    
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
                `}
            </style>
            <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 font-manrope overflow-hidden">
            {/* ===== HERO SECTION ===== */}
            <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" style={{ animation: 'floatSlow 12s ease-in-out infinite' }} />
                    <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" style={{ animation: 'floatSlow 15s ease-in-out infinite', animationDelay: '2s' }} />
                    
                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 opacity-[0.02]" style={{
                        backgroundImage: 'linear-gradient(rgba(59,130,246,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px)',
                        backgroundSize: '80px 80px'
                    }} />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
                    {/* Badge */}
                    <div className="webdev-hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-300/30 backdrop-blur-sm mb-8">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-sm font-semibold text-blue-700">Premium Web Development</span>
                    </div>

                    {/* Title */}
                    <h1 className="webdev-hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight font-playfair">
                        <span className="block text-gray-800">Build Stunning</span>
                        <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                            Web Experiences
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="webdev-hero-subtitle text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Transform your digital presence with custom websites that combine beautiful design,
                        powerful functionality, and exceptional user experience.
                    </p>

                    {/* CTA Buttons */}
                    <div className="webdev-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
                        <div className="relative group/btn inline-block">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-full opacity-60 group-hover/btn:opacity-100 blur-lg transition-all duration-500" />
                            <button
                                onClick={() => navigate('/contact')}
                                className="relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 border border-white/20"
                            >
                                Start Your Project
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
                            className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-800 rounded-full font-bold text-lg shadow-sm hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                        >
                            See Our Process
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='absolute left-0 top-0 right-0 w-full h-32 bg-gradient-to-b from-blue-100 via-gray-50 to-transparent pointer-events-none'></div>
            </section>

            {/* ===== FEATURES SECTION - Light Theme ===== */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
                {/* Animated background decoration */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl" style={{ animation: 'pulse-soft 8s ease-in-out infinite' }} />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl" style={{ animation: 'pulse-soft 10s ease-in-out infinite', animationDelay: '2s' }} />
                    
                    {/* Animated grid pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                        animation: 'gridMove 20s linear infinite'
                    }} />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <span className="text-orange-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                            What We Offer
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
                            <span className="text-gray-800">Powerful </span>
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">Features</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Everything you need to create exceptional web experiences
                        </p>
                    </div>

                    {/* MagicBento Grid */}
                    <MagicBento
                        textAutoHide={false}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        disableAnimations={false}
                        enableTilt={true}
                        clickEffect={true}
                        enableMagnetism={false}
                        glowColor="132, 0, 255"
                    />
                </div>
                
                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
            </section>

            {/* ===== DEVELOPMENT PROCESS SECTION ===== */}
            <section id="process-section" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 9s ease-in-out infinite' }} />
                    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 11s ease-in-out infinite', animationDelay: '3s' }} />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <span className="text-orange-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                            How We Work
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
                            <span className="text-gray-800">Our Development </span>
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">Process</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            A proven methodology that delivers exceptional results every time
                        </p>
                    </div>

                    {/* Process Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {processSteps.map((step, idx) => (
                            <ProcessStep key={idx} step={step} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROJECTS SHOWCASE - FlowingMenu ===== */}
            <section className="py-0 overflow-hidden">
                <div className="w-full">
                    {/* Section header */}
                    <div className="mt-12 text-center mb-12 px-6 md:px-12">
                        <span className="text-orange-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                            Our Work
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
                            <span className="text-gray-800">Featured </span>
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Explore some of our recent web development projects
                        </p>
                    </div>

                    {/* FlowingMenu */}
                    <div className="h-[60vh] md:h-[70vh]">
                        <FlowingMenu
                            items={projects}
                            speed={12}
                            textColor="#1f2937"
                            bgColor="#f9fafb"
                            marqueeBgColor="#3b82f6"
                            marqueeTextColor="#ffffff"
                            borderColor="#e5e7eb"
                        />
                    </div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section ref={ctaRef} className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
                {/* Ambient bg */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 10s ease-in-out infinite' }} />
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" style={{ animation: 'pulse-soft 12s ease-in-out infinite', animationDelay: '4s' }} />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
                        <span className="text-gray-800">Ready to Build Your </span>
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">Dream Website?</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Let's turn your vision into reality. Get in touch for a free consultation and quote.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {/* Primary button */}
                        <div className="relative group/btn inline-block">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-full opacity-60 group-hover/btn:opacity-100 blur-lg transition-all duration-500" />
                            <button
                                onClick={() => navigate('/contact')}
                                className="relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 border border-white/20"
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

                        {/* Secondary button */}
                        <button
                            onClick={() => navigate('/contact')}
                            className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-800 rounded-full font-bold text-lg shadow-sm hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
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
