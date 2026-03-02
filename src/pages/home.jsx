import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridMotion from "../ui/GridMotion.jsx";
import ServiceCards from "../components/Cards.jsx";
import Process from "../components/Process.jsx";
import ContactForm from "../components/ContactForm.jsx";

gsap.registerPlugin(ScrollTrigger);

// Blog data for home page preview
const blogsPreview = [
    {
        id: 1,
        title: "10 Essential SEO Tips for 2026",
        excerpt: "Discover the latest SEO strategies that will help your website rank higher in search results.",
        category: "SEO",
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop",
        author: "Sarah Johnson",
        date: "Jan 15, 2026",
        readTime: "8 min read",
    },
    {
        id: 2,
        title: "The Future of Web Development",
        excerpt: "Explore emerging technologies shaping modern web experiences.",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop",
        author: "Mike Chen",
        date: "Jan 12, 2026",
        readTime: "6 min read",
    },
    {
        id: 3,
        title: "Creating a Strong Brand Identity",
        excerpt: "Learn how to build a memorable brand identity that stands out.",
        category: "Design",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop",
        author: "Emma Davis",
        date: "Jan 10, 2026",
        readTime: "5 min read",
    },
];

// Blog Card Component for Home Page
function HomeBlogCard({ blog, index }) {
    const cardRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        gsap.fromTo(card, {
            y: 60,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
            },
            delay: index * 0.15,
        });
    }, [index]);

    return (
        <div 
            ref={cardRef}
            onClick={() => navigate('/blogs')}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-200/50 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-purple-200/50 hover:-translate-y-2"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                {/* <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 text-xs font-bold">
                    {blog.category}
                </div> */}
            </div>
            <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span>{blog.readTime}</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                    {blog.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                    {blog.excerpt}
                </p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                            {blog.author[0]}
                        </div>
                        <span className="text-xs text-gray-600">{blog.author}</span>
                    </div>
                    <svg className="w-4 h-4 text-purple-500 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

const items = [
    // Team & Collaboration
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
    'Our Mission',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop',
    'Innovation',
    // Office & Workspace
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    'Teamwork',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop',
    'Excellence',
    // Digital & Tech
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop',
    'Creativity',
    'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format&fit=crop',
    'Growth',
    // Strategy & Planning
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop',
    'Vision',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop',
    'Leadership',
    // Development & Code
    'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&auto=format&fit=crop',
    'Technology',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop',
    'Passion',
    // Meetings & Collaboration
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
    'Integrity',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop',
    'Success',
    // More Team Photos
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop',
    'Community',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop',
    'Trust',
];

// Module-level variable - persists across navigation but resets on page refresh
let hasRevealedOnce = false;

export default function Home() {
    const navigate = useNavigate();
    const revealOverlayRef = useRef(null);
    const maintitleref = useRef(null);
    const subtitleref = useRef(null);
    const section2title = useRef(null);
    const section2subtitle = useRef(null);
    const section2Ref = useRef(null);

    //reveal animation - runs only once
    useEffect(() => {
        const overlay = revealOverlayRef.current;
        if (!overlay) return;

        // Skip animation if already played
        if (hasRevealedOnce) {
            gsap.set(overlay, { display: "none", opacity: 0 });
            document.body.style.overflow = 'auto';
            return;
        }

        // Disable scroll during overlay animation
        document.body.style.overflow = 'hidden';

        gsap.set(overlay, {
            opacity: 1,
            clipPath: "circle(150% at 50% 50%)",
        });

        gsap.to(overlay, {
            delay: 1.2,
            duration: 1.1,
            ease: "power3.inOut",
            clipPath: "circle(0% at 12% 10%)",
            opacity: 0,
            onComplete: () => {
                gsap.set(overlay, { display: "none" });
                hasRevealedOnce = true;
                // Re-enable scroll after animation
                document.body.style.overflow = 'auto';
            },
        });
    }, []);

    //main title animation
    useEffect(() => {
        const el = maintitleref.current;
        if (!el) return;
        gsap.fromTo(el, {
            y: -50,
            opacity: 0,
        }, {
            delay: 1.5,
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power2.out",
            stagger: 0.1,
        })
    }, [])

    //subtitle animation
    useEffect(() => {
        const e = subtitleref.current;
        if (!e) return;
        gsap.fromTo(e, {
            y: 50,
            opacity: 0,
        }, {
            delay: 1.8,
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
        })
    }, [])

    //section2 title animation - triggered on scroll
    useEffect(() => {
        const e = section2title.current;
        const trigger = section2Ref.current;
        if (!e || !trigger) return;

        gsap.fromTo(e, {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: trigger,
                start: "top 50%",
                toggleActions: "play none none none",
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        }
    }, [])

    //section2 subtitle animation - triggered on scroll
    useEffect(() => {
        const e = section2subtitle.current;
        const trigger = section2Ref.current;
        if (!e || !trigger) return;

        gsap.fromTo(e, {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 2,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: trigger,
                start: "top 50%",
                toggleActions: "play none none none",
            }
        })
    }, [])

    return (
        <>
            <section>
                <div className="relative min-h-[70vh] md:min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
                    <div
                        ref={revealOverlayRef}
                        className="fixed inset-0 z-40 bg-white pointer-events-none"
                    />
                    <img
                        src="main.jpg"
                        alt="background"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
                    />
                    {/* gradient overlay */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/40 via-transparent to-blue-100/30 pointer-events-none" />
                    <div ref={maintitleref} className="pt-32 md:pt-0 px-4 sm:px-6 relative font-bold md:mt-32 tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex w-full bg-gradient-to-r from-gray-800 via-gray-700 to-blue-600 bg-clip-text text-transparent justify-center z-30 pb-4">
                        <div className="flex flex-wrap gap-2 sm:gap-4 font-manrope justify-center text-center" >Transform 
                            <div className="font-normal playfair-italic">Your</div>  <span>Digital Presence</span></div>
                    </div>
                    <p ref={subtitleref} className="px-4 sm:px-6 md:px-8 lg:mx-16 font-inter relative mt-2 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 text-center leading-relaxed z-30">
                        We build high-impact digital solutions with modern web development, smart SEO, powerful
                        content, and visually striking design that delivers measurable growth.
                    </p>
                    <div className="mt-16 flex flex-wrap gap-4 sm:gap-8 justify-center items-center px-4">
                        <button
                         onClick={() => { navigate('/contact'); setMenuOpen(false); }}
                        
                        className="hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] flex rounded-[36px] z-30 relative font-inter px-6 sm:px-5 py-3 sm:py-4 mt-4 bg-gradient-to-r from-[#5B21B6] via-[#C026D3] to-[#FB7185] text-white transition-transform duration-200 font-semibold text-sm sm:text-base shadow-lg shadow-blue-300/50 hover:shadow-blue-400/60 transition hover:scale-110 ">Get Started   <svg className='pl-2' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg></button>
                        <button
                         onClick={() => { navigate('/about'); setMenuOpen(false); }}
                        className="hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] z-30 flex bg-white/80 backdrop-blur-sm rounded-[32px] text-blue-600 font-bold border border-blue-400 shadow-lg transition-transform duration-200 hover:scale-110 mt-4 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base hover:bg-white">Learn More<svg className='pl-1' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2563eb"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg></button>
                    </div>

                    {/* Animated Scroll Indicator */}
                    <div className="flex flex-col items-center justify-center mt-4 z-30 relative">
                        <span className="text-gray-400 text-sm font-inter mb-2 tracking-wider"></span>
                        <div className="w-6 h-10 border-2 border-blue-400/60 rounded-full flex justify-center p-1 bg-white/50 backdrop-blur-sm">
                            <div className="w-1.5 h-3 bg-blue-500 rounded-full animate-bounce"
                                style={{
                                    animation: "scrollBounce 1.5s ease-in-out infinite"
                                }}
                            />
                        </div>
                        <svg
                            className="mt-2 text-blue-400/60 animate-pulse"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                        </svg>
                    </div>

                    <style>{`
                        @keyframes scrollBounce {
                            0%, 100% {
                                transform: translateY(0);
                                opacity: 1;
                            }
                            50% {
                                transform: translateY(12px);
                                opacity: 0.3;
                            }
                        }
                    `}</style>

                    <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-pink-100 via-pink-100/80 via-pink-100/50 to-transparent pointer-events-none z-20"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-gray-100/30 to-blue-100 pointer-events-none z-20"></div>
                </div>

            </section>
            <section ref={section2Ref}>
                <div className="w-full min-h-[85vh] md:min-h-screen bg-white text-gray-800 relative">
                    {/* GridMotion as background */}
                    <div className="absolute inset-0 z-0 opacity-60">
                        <GridMotion items={items} gradientColor="white" />
                    </div>

                    {/* Content overlay */}
                    <div className="relative z-20 flex min-h-[85vh] md:min-h-screen pointer-events-none">
                        <div >
                            <div className="mt-20 ml-12 md:mt-28 md:ml-20 pointer-events-auto">
                                <div ref={section2title}>
                                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">Design That Speaks.</h2>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent">Delivery That Converts.</h2>
                                </div>
                                <div ref={section2subtitle}>
                                    <p className="w-[80vw] font-inter text-lg mt-4 md:w-[40vw] md:text-xl mb-2 text-gray-600">Crafting Digital Success Stories Since 2022. Today, we're proud to be a trusted partner for companies worldwide. </p>
                                    <p className="w-[80vw] font-inter text-lg mt-4 md:w-[48vw] md:text-xl text-gray-600"> Our team blends technical expertise with creative vision to deliver solutions that not only look stunning but also drive measurable business growth.</p>
                                </div>
                                <div className="flex z-20 gap-4">
                                    <button onClick={() => { navigate('/about') }} className="ml-1 mt-12 flex text-white bg-gradient-to-r from-[#5B21B6] via-[#C026D3] to-[#FB7185] px-6 py-2 rounded-lg transition-transform duration-300 hover:scale-110 shadow-lg shadow-blue-300/40">About Us</button>
                                    <button onClick={() => { navigate('/services') }} className="text-blue-600 mt-12 bg-white/80 backdrop-blur-sm border border-blue-300 px-6 py-2 rounded-lg transition-transform duration-300 hover:scale-110 shadow-lg hover:bg-white">Our Work</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute z-10 top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-100 via-gray-100/50 to-transparent pointer-events-none"></div>
                    <div className="absolute z-10 h-12 bottom-0 left-0 right-0 md:h-28 bg-gradient-to-b from-transparent via-gray-100/50 to-white pointer-events-none"></div>
                    <div className="w-[85vw] absolute z-0 top-0 left-0 bottom-0 md:w-[70vw] bg-gradient-to-r from-white via-blue-100/70 via-white to-transparent "></div>
                </div>
            </section>
            <section>
                <div className="relative w-full overflow-hidden pb-20">
                    {/* Premium light gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-pink-100 to-blue-50" />
                    
                    {/* Animated gradient orbs */}
                    <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-orange-300/10 rounded-full blur-3xl" />
                    
                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 opacity-[0.04]" style={{
                        backgroundImage: 'linear-gradient(rgba(30,41,59,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30,41,59,0.1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px'
                    }} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                        <div className="flex flex-col w-full items-center pt-16 md:pt-28 pb-8">
                            <div className="flex gap-4 items-center text-5xl md:text-7xl font-bold">
                                <span className="text-gray-800">Our</span>
                                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent">Expertise</span>
                            </div>
                            <p className="mt-6 text-gray-600 text-lg max-w-2xl text-center px-4">
                                Premium digital solutions crafted with precision and passion to elevate your brand.
                            </p>
                        </div>
                        <ServiceCards />
                        
                        {/* Process Section */}
                        <div className="mt-4">
                            <Process />
                        </div>
                    </div>
                    
                    {/* Top gradient fade */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/50 via-blue-50 to-transparent z-0 pointer-events-none" />
                </div>
            </section>

            {/* ===== BLOGS SECTION ===== */}
            <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
                {/* Background orbs */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                    {/* Section header */}
                    <div className="text-center mb-12">
                        <span className="text-purple-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                            Latest Insights
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-gray-800">From Our </span>
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Blog</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-xl mx-auto">
                            Stay updated with the latest trends and insights in digital marketing
                        </p>
                    </div>

                    {/* Blog Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        {blogsPreview.map((blog, index) => (
                            <HomeBlogCard key={blog.id} blog={blog} index={index} />
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="text-center">
                        <button 
                            onClick={() => navigate('/blogs')}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 text-gray-800 rounded-full font-bold shadow-sm hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105"
                        >
                            View All Articles
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* ===== CONTACT FORM SECTION ===== */}
            <ContactForm />
        </>
    )
}

// Contact Form Section Component
// function ContactFormSection() {
//     const navigate = useNavigate();
//     const formRef = useRef(null);
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         service: '',
//         message: '',
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitted, setSubmitted] = useState(false);

//     const handleChange = (e) => {
//         setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);
//         setTimeout(() => {
//             setIsSubmitting(false);
//             setSubmitted(true);
//             setFormData({ name: '', email: '', phone: '', service: '', message: '' });
//             setTimeout(() => setSubmitted(false), 4000);
//         }, 1500);
//     };

//     useEffect(() => {
//         const el = formRef.current;
//         if (!el) return;

//         gsap.fromTo(el,
//             { y: 60, opacity: 0 },
//             {
//                 y: 0, opacity: 1,
//                 duration: 0.9,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                     trigger: el,
//                     start: "top 80%",
//                     toggleActions: "play none none none",
//                 },
//             }
//         );
//     }, []);

//     return (
//         <section className="py-20 bg-gray-900 relative overflow-hidden">
//             {/* Background decoration */}
//             <div className="absolute inset-0">
//                 <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
//                 <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
//                 <div className="absolute inset-0 opacity-[0.03]" style={{
//                     backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
//                     backgroundSize: '60px 60px'
//                 }} />
//             </div>

//             <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
//                 {/* Section header */}
//                 <div className="text-center mb-12">
//                     <span className="text-pink-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
//                         Get In Touch
//                     </span>
//                     <h2 className="text-4xl md:text-5xl font-bold mb-4">
//                         <span className="text-white">Send Us a </span>
//                         <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Message</span>
//                     </h2>
//                     <p className="text-gray-400 text-lg max-w-xl mx-auto">
//                         Have a project in mind? Let's talk about how we can help you grow.
//                     </p>
//                 </div>

//                 <div ref={formRef}>
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                         {/* Name & Email row */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div className="group">
//                                 <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
//                                     Full Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                     required
//                                     placeholder="Your name"
//                                     className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-purple-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
//                                 />
//                             </div>
//                             <div className="group">
//                                 <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
//                                     Email Address
//                                 </label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     required
//                                     placeholder="you@example.com"
//                                     className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-purple-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
//                                 />
//                             </div>
//                         </div>

//                         {/* Phone & Service row */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div className="group">
//                                 <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
//                                     Phone Number
//                                 </label>
//                                 <input
//                                     type="tel"
//                                     name="phone"
//                                     value={formData.phone}
//                                     onChange={handleChange}
//                                     placeholder="+91 98765 43210"
//                                     className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-purple-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
//                                 />
//                             </div>
//                             <div className="group">
//                                 <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
//                                     Service Needed
//                                 </label>
//                                 <select
//                                     name="service"
//                                     value={formData.service}
//                                     onChange={handleChange}
//                                     className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-purple-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 appearance-none cursor-pointer"
//                                     style={{
//                                         backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
//                                         backgroundRepeat: 'no-repeat',
//                                         backgroundPosition: 'right 16px center',
//                                         backgroundSize: '20px',
//                                     }}
//                                 >
//                                     <option value="" className="bg-gray-900">Select a service</option>
//                                     <option value="web-development" className="bg-gray-900">Web Development</option>
//                                     <option value="seo" className="bg-gray-900">SEO Services</option>
//                                     <option value="graphic-design" className="bg-gray-900">Graphic Design</option>
//                                     <option value="digital-advertising" className="bg-gray-900">Digital Advertising</option>
//                                     <option value="content-writing" className="bg-gray-900">Content Writing</option>
//                                     <option value="digital-pr" className="bg-gray-900">Digital PR</option>
//                                 </select>
//                             </div>
//                         </div>

//                         {/* Message */}
//                         <div className="group">
//                             <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
//                                 Your Message
//                             </label>
//                             <textarea
//                                 name="message"
//                                 value={formData.message}
//                                 onChange={handleChange}
//                                 required
//                                 rows={4}
//                                 placeholder="Tell us about your project..."
//                                 className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-purple-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
//                             />
//                         </div>

//                         {/* Submit Button */}
//                         <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//                             <div className="relative group/btn inline-block">
//                                 <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 rounded-2xl opacity-50 group-hover/btn:opacity-100 blur-lg transition-all duration-500" />
//                                 <button
//                                     type="submit"
//                                     disabled={isSubmitting}
//                                     className="relative px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white rounded-2xl font-bold text-base shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 border border-white/10 disabled:opacity-50 disabled:hover:scale-100"
//                                 >
//                                     {isSubmitting ? (
//                                         <>
//                                             <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
//                                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
//                                             </svg>
//                                             Sending...
//                                         </>
//                                     ) : (
//                                         <>
//                                             Send Message
//                                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                                             </svg>
//                                         </>
//                                     )}
//                                 </button>
//                             </div>

//                             {submitted && (
//                                 <div className="flex items-center gap-2 text-green-400 animate-pulse">
//                                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                     </svg>
//                                     <span className="font-medium text-sm">Message sent successfully!</span>
//                                 </div>
//                             )}

//                             <button 
//                                 type="button"
//                                 onClick={() => navigate('/contact')}
//                                 className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-300"
//                             >
//                                 Need more options? Visit Contact page →
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// }