import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactForm from "../components/ContactForm.jsx"

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
    {
        title: "Call Us",
        detail: "+91 93547 81076",
        subDetail: "Mon - Sat, 10am - 7pm",
        image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=800&auto=format&fit=crop",
        link: "tel:+919354781076",
    },
    {
        title: "Email Us",
        detail: "contact@intellireach.in",
        subDetail: "We reply within 24 hours",
        image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&auto=format&fit=crop",
        link: "mailto:contact@intellireach.in",
    },
    {
        title: "Visit Us",
        detail: "New Delhi, India",
        subDetail: "Janakpuri, 110058",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&auto=format&fit=crop",
        link: "https://maps.google.com/?q=28.7279396,77.0857464",
    },
];

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We offer a wide range of digital services including web development, app development, SEO, social media marketing, graphic design, and digital strategy consulting.",
    },
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications may take 2-3 months. We provide detailed timelines during consultation.",
    },
    {
        question: "Do you offer ongoing support?",
        answer: "Yes! We provide ongoing maintenance, updates, and support packages to ensure your digital presence stays current and performs optimally.",
    },
    {
        question: "What is your pricing structure?",
        answer: "Our pricing is project-based and depends on scope, complexity, and timeline. Contact us for a free consultation and custom quote tailored to your needs.",
    },
];

// Contact info card with image background
function ContactCard({ item, index }) {
    const cardRef = useRef(null);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        gsap.fromTo(el,
            { y: 80, opacity: 0, scale: 0.9 },
            {
                y: 0, opacity: 1, scale: 1,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                delay: index * 0.15,
            }
        );
    }, [index]);

    return (
        <a
            href={item.link}
            target={item.title === "Visit Us" ? "_blank" : undefined}
            rel="noopener noreferrer"
            ref={cardRef}
            className="group relative block overflow-hidden rounded-3xl h-[260px] cursor-pointer"
        >
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gray-900/75 group-hover:bg-gray-900/60 transition-all duration-500" />

            {/* Gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-orange-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {/* Border */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/30 transition-all duration-500" />

            {/* Content */}
            <div className="relative h-full p-8 flex flex-col justify-between z-10">
                <div>
                    {/* Icon circle */}
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-5 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
                        {item.title === "Call Us" && (
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        )}
                        {item.title === "Email Us" && (
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        )}
                        {item.title === "Visit Us" && (
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        )}
                    </div>

                    <h3 className="text-sm font-semibold text-white/50 uppercase tracking-[0.2em] mb-2 group-hover:text-white/70 transition-colors duration-300">
                        {item.title}
                    </h3>
                    <p className="text-xl font-bold text-white group-hover:translate-x-1 transition-transform duration-500">
                        {item.detail}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-white/40 text-sm">{item.subDetail}</p>
                    {/* Arrow */}
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Corner glow on hover */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/0 group-hover:bg-white/10 rounded-full blur-3xl transition-all duration-700" />

            {/* Shine sweep */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-shine" />
            </div>
        </a>
    );
}

// FAQ Accordion item
function FAQItem({ item, index, isOpen, onToggle }) {
    const faqRef = useRef(null);

    useEffect(() => {
        const el = faqRef.current;
        if (!el) return;

        gsap.fromTo(el,
            { x: -40, opacity: 0 },
            {
                x: 0, opacity: 1,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                delay: index * 0.1,
            }
        );
    }, [index]);

    return (
        <div ref={faqRef} className="group border-b border-gray-200/80 last:border-b-0">
            <button
                onClick={onToggle}
                className="w-full py-6 flex items-center justify-between text-left transition-colors duration-300 hover:bg-gray-50/50 px-2 rounded-lg"
            >
                <span className="flex items-center gap-4">
                    <span className="text-sm font-bold text-gray-300 w-8">0{index + 1}</span>
                    <span className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-gray-800'}`}>
                        {item.question}
                    </span>
                </span>
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-500 ${isOpen ? 'border-blue-500 bg-blue-500 rotate-180' : 'border-gray-300'}`}>
                    <svg className={`w-4 h-4 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>
            <div
                className="overflow-hidden transition-all duration-500"
                style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <p className="pb-6 pl-14 pr-8 text-gray-600 leading-relaxed">
                    {item.answer}
                </p>
            </div>
        </div>
    );
}

export function Contact() {
    const navigate = useNavigate();
    const heroRef = useRef(null);
    const formRef = useRef(null);
    const mapRef = useRef(null);
    const [openFAQ, setOpenFAQ] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        companyName: '',
        budget: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', service: '', message: '', companyName: '', budget: '' });
            setTimeout(() => setSubmitted(false), 4000);
        }, 1500);
    };

    // Hero animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo('.contact-hero-badge',
                { y: -30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
            )
            .fromTo('.contact-hero-title span',
                { y: 60, opacity: 0, rotateX: -15 },
                { y: 0, opacity: 1, rotateX: 0, duration: 0.8, ease: "power3.out", stagger: 0.15 },
                "-=0.3"
            )
            .fromTo('.contact-hero-subtitle',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                "-=0.4"
            )
            .fromTo('.contact-hero-line',
                { scaleX: 0 },
                { scaleX: 1, duration: 1, ease: "power2.out" },
                "-=0.5"
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    // Form section animation
    useEffect(() => {
        const el = formRef.current;
        if (!el) return;

        gsap.fromTo(el,
            { y: 60, opacity: 0 },
            {
                y: 0, opacity: 1,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    // Map section animation
    useEffect(() => {
        const el = mapRef.current;
        if (!el) return;

        gsap.fromTo(el,
            { y: 40, opacity: 0 },
            {
                y: 0, opacity: 1,
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
        <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 font-manrope">
            {/* ===== HERO SECTION ===== */}
            <section ref={heroRef} className="relative pt-10 pb-12 overflow-hidden">
                {/* Ambient orbs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-1/4 w-80 h-80 bg-pink-400/8 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-400/8 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
                    {/* Badge */}
                    <div className="contact-hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-gray-200/60 shadow-sm mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-medium text-gray-600">Available for projects</span>
                    </div>

                    {/* Title */}
                    <h1 className="contact-hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                        <span className="block text-gray-800">Let's Build</span>
                        <span className="block pb-5 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                            Something Great
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="contact-hero-subtitle text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
                        Have a project in mind? We'd love to hear about it. Reach out and let's turn your vision into reality.
                    </p>

                    {/* Animated gradient line */}
                    <div className="contact-hero-line mx-auto w-full max-w-lg h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent origin-center" />
                </div>
                <div className='absolute left-0 top-0 right-0 w-full h-32 bg-gradient-to-b from-pink-100 via-pink-50 to-transparent pointer-events-none'></div>
            </section>

            {/* ===== CONTACT INFO CARDS ===== */}
            <section className="py-10 pb-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactInfo.map((item, i) => (
                            <ContactCard key={i} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FORM + MAP SECTION ===== */}
         <ContactForm></ContactForm>

            {/* ===== FAQ SECTION ===== */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    {/* Header */}
                    <div className="text-center mb-14">
                        <span className="text-orange-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                            Common Questions
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-gray-800">Frequently Asked </span>
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">Questions</span>
                        </h2>
                    </div>

                    {/* FAQ items */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-200/60 shadow-sm p-2 md:p-6">
                        {faqs.map((faq, i) => (
                            <FAQItem
                                key={i}
                                item={faq}
                                index={i}
                                isOpen={openFAQ === i}
                                onToggle={() => setOpenFAQ(openFAQ === i ? null : i)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className="relative py-24 bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
                {/* Ambient bg */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gray-800">Let's Make It </span>
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">Happen</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Ready to take the first step? We're excited to partner with you on your digital journey.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {/* Primary button */}
                        <div className="relative group/btn inline-block">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-full opacity-60 group-hover/btn:opacity-100 blur-lg transition-all duration-500" />
                            <a
                                href="tel:+919354781076"
                                className="relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 border border-white/20"
                            >
                                Call Us Now
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>

                                <div className="absolute inset-0 rounded-full overflow-hidden">
                                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover/btn:animate-shine" />
                                </div>
                            </a>
                        </div>

                        {/* Secondary button */}
                        <a
                            href="mailto:contact@intellireach.in"
                            className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-800 rounded-full font-bold text-lg shadow-sm hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                        >
                            Email Us
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}