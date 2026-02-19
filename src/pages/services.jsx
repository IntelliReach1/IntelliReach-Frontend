import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

// SVG Icons
const icons = {
    web: (color) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className="w-8 h-8">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    ),
    design: (color) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className="w-8 h-8">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
    ),
    seo: (color) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className="w-8 h-8">
            <path d="M23 6l-9.5 9.5-5-5L1 18" />
            <path d="M17 6h6v6" />
        </svg>
    ),
    content: (color) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className="w-8 h-8">
            <path d="M12 19l7-7 3 3-7 7-3-3z" />
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
            <path d="M2 2l7.586 7.586" />
            <circle cx="11" cy="11" r="2" />
        </svg>
    ),
    advertising: (color) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className="w-8 h-8">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
    ),
    pr: (color) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className="w-8 h-8">
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
            <path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6z" />
        </svg>
    ),
};

// Services data
const servicesData = [
    {
        title: "Web Development",
        description: "Custom websites and web applications built with modern technologies for optimal performance.",
        features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Secure & Scalable"],
        icon: "web",
        color: "#3B82F6",
        gradient: "from-blue-500 to-cyan-500",
        route: "/services/web-development"
    },
    {
        title: "Graphic Design",
        description: "Eye-catching visual designs that communicate your brand message effectively.",
        features: ["Logo Design", "Brand Identity", "Marketing Materials", "UI/UX Design"],
        icon: "design",
        color: "#EC4899",
        gradient: "from-pink-500 to-rose-500",
        route: "/services/graphic-design"
    },
    {
        title: "SEO Services",
        description: "Comprehensive SEO strategies to boost your online visibility and drive organic traffic.",
        features: ["Keyword Research", "On-Page SEO", "Link Building", "Analytics & Reporting"],
        icon: "seo",
        color: "#10B981",
        gradient: "from-emerald-500 to-teal-500",
        route: "/services/seo-services"
    },
    {
        title: "Content Writing",
        description: "Engaging, SEO-friendly content that resonates with your audience and drives conversions.",
        features: ["Blog Posts", "Website Copy", "Product Descriptions", "Social Media Content"],
        icon: "content",
        color: "#8B5CF6",
        gradient: "from-violet-500 to-purple-500",
        route: "/services/content-writing"
    },
    {
        title: "Digital Advertising",
        description: "Strategic ad campaigns that maximize ROI across all major advertising platforms.",
        features: ["Google Ads", "Social Media Ads", "Display Advertising", "Remarketing"],
        icon: "advertising",
        color: "#F59E0B",
        gradient: "from-amber-500 to-orange-500",
        route: "/services/digital-advertising"
    },
    {
        title: "Digital PR",
        description: "Build brand authority and trust through strategic media coverage and online reputation.",
        features: ["Media Outreach", "Press Coverage", "Brand Mentions", "Authority Backlinks"],
        icon: "pr",
        color: "#EF4444",
        gradient: "from-red-500 to-rose-500",
        route: "/services/digital-pr"
    }
];

// Animated Canvas Background with Particles
function ParticleBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.3 + 0.1;
                this.color = ['#8B5CF680', '#EC489980', '#3B82F680', '#10B98180'][Math.floor(Math.random() * 4)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        // Create particles
        const createParticles = () => {
            const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000));
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        createParticles();

        // Connect particles with lines
        const connectParticles = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - distance / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            connectParticles();
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: 0.6 }}
        />
    );
}

// 3D Tilt Card Effect
function TiltCard({ children, className }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Service Card Component
function ServiceCard({ service, index }) {
    const navigate = useNavigate();
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        gsap.fromTo(card, {
            y: 100,
            opacity: 0,
            scale: 0.9,
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
            },
            delay: index * 0.1,
        });
    }, [index]);

    return (
        <div ref={cardRef}>
            <TiltCard className="h-full">
                <motion.div
                    className="relative h-[420px] rounded-3xl overflow-hidden cursor-pointer group"
                    onClick={() => navigate(service.route)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    {/* Glass card */}
                    <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white via-gray-50/90 to-slate-100/70 backdrop-blur-xl border border-gray-200/80 group-hover:border-gray-300 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                        
                        {/* Animated glow border */}
                        <div 
                            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                                background: `linear-gradient(135deg, ${service.color}40, transparent, ${service.color}40)`,
                                filter: 'blur(1px)',
                            }}
                        />

                        {/* Content */}
                        <div className="relative h-full p-6 flex flex-col" style={{ transform: "translateZ(50px)" }}>
                            {/* Animated Icon */}
                            <motion.div 
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                                style={{ 
                                    background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                                    border: `1px solid ${service.color}30`,
                                }}
                                animate={{ 
                                    rotate: isHovered ? [0, -10, 10, 0] : 0,
                                    scale: isHovered ? 1.1 : 1,
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                {icons[service.icon](service.color)}
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                                style={{ 
                                    backgroundImage: isHovered ? `linear-gradient(90deg, ${service.color}, ${service.color}CC)` : 'none',
                                    WebkitBackgroundClip: isHovered ? 'text' : 'unset',
                                }}
                            >
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                {service.description}
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {service.features.map((feature, idx) => (
                                    <motion.span
                                        key={idx}
                                        className="px-3 py-1.5 text-xs rounded-full border transition-all duration-300"
                                        style={{
                                            borderColor: `${service.color}40`,
                                            color: service.color,
                                            backgroundColor: `${service.color}10`,
                                        }}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * idx }}
                                    >
                                        {feature}
                                    </motion.span>
                                ))}
                            </div>

                            {/* CTA */}
                            <motion.div 
                                className="flex items-center gap-2 font-semibold"
                                style={{ color: service.color }}
                                animate={{ x: isHovered ? 10 : 0 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <span>Learn More</span>
                                <motion.svg 
                                    className="w-5 h-5" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                    animate={{ x: isHovered ? 5 : 0 }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </motion.svg>
                            </motion.div>
                        </div>

                        {/* Shine effect */}
                        <motion.div 
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, transparent 50%)',
                            }}
                            animate={{ 
                                x: isHovered ? ['200%', '-200%'] : '-200%' 
                            }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Glow effect */}
                    <motion.div
                        className="absolute -inset-1 rounded-3xl pointer-events-none"
                        style={{
                            background: `radial-gradient(circle at center, ${service.color}20, transparent 70%)`,
                            filter: 'blur(20px)',
                        }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            </TiltCard>
        </div>
    );
}

// Stats SVG Icons
const statIcons = {
    projects: (color) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className="w-8 h-8">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
        </svg>
    ),
    clients: (color) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className="w-8 h-8">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    satisfaction: (color) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className="w-8 h-8">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    ),
    support: (color) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className="w-8 h-8">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
    ),
};

// Stats Section with Counter Animation
function StatsSection() {
    const stats = [
        { value: 500, suffix: "+", label: "Projects Completed", icon: "projects", color: "#A78BFA" },
        { value: 200, suffix: "+", label: "Happy Clients", icon: "clients", color: "#F472B6" },
        { value: 98, suffix: "%", label: "Client Satisfaction", icon: "satisfaction", color: "#FBBF24" },
        { value: 24, suffix: "/7", label: "Support Available", icon: "support", color: "#34D399" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-16">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center group hover:bg-white/15 hover:border-white/30 transition-all duration-500"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                >
                    <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        {statIcons[stat.icon](stat.color)}
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                        {stat.value}{stat.suffix}
                    </div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
            ))}
        </div>
    );
}

// Why Choose Us SVG Icons
const reasonIcons = {
    team: (color) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className="w-8 h-8">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    custom: (color) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className="w-8 h-8">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    ),
    tech: (color) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className="w-8 h-8">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
    ),
    results: (color) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className="w-8 h-8">
            <path d="M18 20V10" />
            <path d="M12 20V4" />
            <path d="M6 20v-6" />
        </svg>
    ),
};

// Why Choose Us Section
function WhyChooseUs() {
    const reasons = [
        { title: "Expert Team", description: "Skilled professionals with years of industry experience", icon: "team", color: "#8B5CF6", bg: "from-violet-100 to-purple-50" },
        { title: "Custom Solutions", description: "Tailored strategies designed for your unique needs", icon: "custom", color: "#EC4899", bg: "from-pink-100 to-rose-50" },
        { title: "Latest Technology", description: "We use cutting-edge tools and frameworks", icon: "tech", color: "#F59E0B", bg: "from-amber-100 to-orange-50" },
        { title: "Results Driven", description: "Focus on measurable outcomes and ROI", icon: "results", color: "#10B981", bg: "from-emerald-100 to-teal-50" }
    ];

    return (
        <div className="py-20">
            <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-gray-800">Why Choose </span>
                    <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">IntelliReach?</span>
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto">
                    We combine creativity with technology to deliver exceptional results
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reasons.map((reason, index) => (
                    <motion.div
                        key={index}
                        className={`p-6 rounded-2xl bg-gradient-to-br ${reason.bg} border border-gray-200/50 shadow-md hover:shadow-xl transition-all duration-500 group`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        whileHover={{ y: -8 }}
                    >
                        <motion.div 
                            className="mb-4 flex justify-start"
                            whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.4 }}
                        >
                            {reasonIcons[reason.icon](reason.color)}
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors">{reason.title}</h3>
                        <p className="text-gray-600 text-sm">{reason.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// CTA Section
function CTASection() {
    const navigate = useNavigate();

    return (
        <motion.div 
            className="relative py-20 mt-10 rounded-3xl overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500" />
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
                <motion.h2 
                    className="text-4xl md:text-5xl font-bold mb-6 text-white"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Ready to Transform Your Business?
                </motion.h2>
                <motion.p 
                    className="text-white/90 text-lg mb-8"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Let's discuss how we can help you achieve your digital goals
                </motion.p>
                <motion.div 
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.button
                        onClick={() => navigate('/contact')}
                        className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started Now
                    </motion.button>
                    <motion.button
                        onClick={() => navigate('/about')}
                        className="px-8 py-4 border-2 border-white/50 text-white rounded-full font-bold text-lg hover:border-white hover:bg-white/10 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Learn More
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
}

export function Services() {
    return (
        <div className="bg-gradient-to-b from-slate-50 via-purple-50/30 to-rose-50/20 min-h-screen text-gray-900 overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-100/60 via-fuchsia-50/40 to-amber-50/30">
                {/* Particle Background */}
                <ParticleBackground />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-200/30 via-transparent to-rose-200/30 pointer-events-none" />
                
                {/* Floating orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-violet-400/25 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-fuchsia-400/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

                {/* Content */}
                <div className="relative z-10 text-center px-6 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span 
                            className="text-purple-600 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            What We Offer
                        </motion.span>
                        <motion.h1 
                            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="text-gray-900">Our </span>
                            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                                Services
                            </span>
                        </motion.h1>
                        <motion.p 
                            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Comprehensive digital solutions designed to elevate your brand and drive measurable growth
                        </motion.p>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex justify-center"
                    >
                        <motion.div 
                            className="w-8 h-14 rounded-full border-2 border-gray-300 flex items-start justify-center p-2"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            <motion.div 
                                className="w-1.5 h-3 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
                <div className='absolute left-0 top-0 right-0 w-full h-32 bg-gradient-to-b from-pink-100 via-pink-50 to-transparent pointer-events-none'></div>
            </section>

            {/* Services Grid */}
            <section className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-transparent via-slate-100/50 to-violet-50/30">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-violet-100/40 to-transparent" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
                <div className="absolute top-1/3 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-100 to-fuchsia-100 text-purple-700 text-sm font-medium mb-4">Our Expertise</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-gray-800">Explore Our </span>
                            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Capabilities</span>
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            Click on any service to learn more about how we can help your business grow
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service, index) => (
                            <ServiceCard key={index} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="px-6 md:px-12 py-10 bg-gradient-to-r from-indigo-900 via-purple-900 to-fuchsia-900 relative overflow-hidden">
                {/* Decorative glows */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <StatsSection />
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="px-6 md:px-12 bg-gradient-to-b from-rose-50/50 via-amber-50/30 to-violet-50/40 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <WhyChooseUs />
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 md:px-12 pb-20 bg-gradient-to-t from-slate-100/80 to-transparent">
                <div className="max-w-7xl mx-auto">
                    <CTASection />
                </div>
            </section>
        </div>
    );
}