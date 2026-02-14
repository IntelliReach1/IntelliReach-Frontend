
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Module-level variable - persists across re-renders/navigation but resets on page refresh
let hasAnimatedOnce = false;

export function Navbar({ loading = false }) {
    const titleRef = useRef(null);
    const drawerRef = useRef(null);
    const navbarRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    const isServicesActive = () => location.pathname.startsWith('/services');

    const serviceLinks = [
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'SEO Services', path: '/services/seo-services' },
        { name: 'Digital Advertising', path: '/services/digital-advertising' },
        { name: 'Digital PR', path: '/services/digital-pr' },
        { name: 'Graphic Design', path: '/services/graphic-design' },
        { name: 'Content Writing', path: '/services/content-writing' },
    ];

    // logo Animation - runs only once
    useEffect(() => {
        if (loading === true) return; // wait until content is shown
        const el = titleRef.current;
        if (!el) return;
        
        // Skip animation if already animated
        if (hasAnimatedOnce) {
            gsap.set(el, {
                position: 'relative',
                top: 'auto',
                left: 'auto',
                xPercent: 0,
                yPercent: 0,
                scale: 1.2,
            });
            return;
        }
        
        const a = window.innerWidth;
        const isMobile = window.matchMedia('(max-width: 767px)').matches;
        // Scope animations to this element and clean up on unmount
        const ctx = gsap.context(() => {
            // Center relative to the viewport so Y movement is visible
            gsap.set(el, {
                position: 'absolute',
                top: '50%',
                left: '50%',
                xPercent: -50,
                yPercent: -50,
                scale: 3,
            });

            gsap.to(el, {
                delay: 1.5,
                duration: 1,
                ease: 'power3.inOut',
                top: 30,
                left: a * 0.065,
                xPercent: 0,
                yPercent: 0,
                scale: 1.2,
                onComplete: () => {
                    hasAnimatedOnce = true;
                }
            });
        }, el);

        return () => ctx.revert();
    }, [loading]);


    //navbar items animation - runs only once
    useEffect(() => {
        if (loading) return;
        const navbar = navbarRef.current;
        if (!navbar) return;
        const navItems = navbar.querySelectorAll('span');
        
        // Skip animation if already animated
        if (hasAnimatedOnce) {
            gsap.set(navItems, { y: 0, opacity: 1 });
            return;
        }
        
        gsap.fromTo(navItems, {
            y: -50,
            opacity: 0,
        }, {
            delay: 1.8,
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1,
            overwrite: "auto",
            clearProps: "transform",
            onComplete: () => {
                gsap.set(navItems, { clearProps: "all" });
            }
        });
    }, [loading]);

    // Mobile Drawer Animation
    useEffect(() => {
        const el = drawerRef.current;
        if (!el) return;

        if (menuOpen) {
            gsap.to(el, {
                x: 0,
                duration: 0.6,
                ease: "power3.out",
            });
        } else {
            gsap.to(el, {
                x: "100%",
                duration: 0.6,
                ease: "power3.in",
            });
        }
    }, [menuOpen]);
    
    

    return (
        <>
            <div className='bg-gradient-to-b from-blue-200 via-blue-100/80 to-blue-100 flex items-center justify-between px-4 py-3 md:py-4 relative z-[100]'>
                <div
                    onClick={() => { navigate('/') }}
                    ref={titleRef}
                    className="cursor-pointer z-[120] fixed top-1/2 left-1/2 flex text-gray-800 font-bold text-3xl select-none md:static md:top-auto md:left-auto "
                >
                    <div> Intelli</div>
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent "> Reach</div>
                </div>
                <nav ref={navbarRef} className='hidden md:flex items-center mt-3 gap-9 z-30 text-gray-600 text-lg flex-1 justify-center'>
                    <span className='pl-56'></span>
                    <span 
                        className={`relative cursor-pointer transition-colors after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:w-0 hover:after:w-full ${isActive('/') ? 'text-blue-700 after:w-full after:bg-blue-700' : 'hover:text-blue-500'}`} 
                        onClick={() => { navigate('/') }}
                    >Home</span>
                    <span 
                        className={`relative cursor-pointer transition-colors after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:w-0 hover:after:w-full ${isActive('/about') ? 'text-blue-700 after:w-full after:bg-blue-700' : 'hover:text-blue-500'}`} 
                        onClick={() => { navigate('/about') }}
                    >About</span>
                    
                    {/* Services Dropdown */}
                    <div 
                        className="relative z-[9999]"
                        onMouseEnter={() => setServicesDropdownOpen(true)}
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                        <span 
                            className={`relative cursor-pointer transition-colors flex items-center gap-1 after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:w-0 hover:after:w-full ${isServicesActive() ? 'text-blue-700 after:w-full after:bg-blue-700' : 'hover:text-blue-500'}`}
                        >
                            Services
                            <svg 
                                className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor" 
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>

                        {/* Dropdown Menu */}
                        <div 
                            className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-200/60 overflow-hidden transition-all duration-300 ${servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                        >
                            {serviceLinks.map((service, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => { navigate(service.path); setServicesDropdownOpen(false); }}
                                    className={`px-5 py-3 cursor-pointer transition-all duration-200 border-b border-gray-100 last:border-b-0 ${location.pathname === service.path ? 'bg-blue-50 text-blue-700' : 'hover:bg-blue-50/50 hover:text-blue-600'}`}
                                >
                                    <span className="text-sm font-medium">{service.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <span 
                        className={`relative cursor-pointer transition-colors after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:w-0 hover:after:w-full ${isActive('/blogs') ? 'text-blue-700 after:w-full after:bg-blue-700' : 'hover:text-blue-500'}`} 
                        onClick={() => { navigate('/blogs') }}
                    >Blogs</span>
                    <span 
                        className={`relative cursor-pointer transition-colors after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:w-0 hover:after:w-full ${isActive('/contact') ? 'text-blue-700 after:w-full after:bg-blue-700' : 'hover:text-blue-500'}`} 
                        onClick={() => { navigate('/contact') }}
                    >Contact</span>
                </nav>
                <div className='hidden md:block text-md mt-3 pr-4 z-40'>
                    <button onClick={() => navigate('/contact')} className='hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] px-6 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-cyan-500 border-none shadow-lg hover:shadow-blue-300/50 transition'>Get In Touch</button>
                </div>
                {/* Hamburger (mobile only) */}
                <button
                    onClick={() => setMenuOpen(true)}
                    className="md:hidden fixed backdrop-blur-md top-8 right-5 z-[120] text-gray-800"
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" >
                        <line x1="3" y1="6" x2="21" y2="6" stroke="#1f2937" strokeWidth="2" />
                        <line x1="3" y1="12" x2="21" y2="12" stroke="#1f2937" strokeWidth="2" />
                        <line x1="3" y1="18" x2="21" y2="18" stroke="#1f2937" strokeWidth="2" />
                    </svg>
                </button>
            </div >

            {/* ---------------- BACKDROP ---------------- */}
            {
                menuOpen && (
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] md:hidden"
                    />
                )
            }

            {/* ---------------- MOBILE DRAWER ---------------- */}
            <div
                ref={drawerRef}
                className="fixed top-[72px] right-0 h-[calc(100vh-72px)] w-[75vw] bg-gradient-to-br from-white via-blue-50/30 to-orange-50/20 backdrop-blur-xl shadow-2xl z-[95]
                   translate-x-full md:hidden flex flex-col gap-5 p-6 text-gray-700 text-lg overflow-y-auto border-l-2 border-blue-200/50"
            >
                {/* Decorative gradient orbs */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute bottom-20 left-10 w-40 h-40 bg-orange-300/10 rounded-full blur-2xl pointer-events-none"></div>

                <button
                    onClick={() => setMenuOpen(false)}
                    className="self-end text-sm text-gray-600 hover:text-gray-900 font-medium mb-2"
                >
                    Close ✕
                </button>

                <span className={`text-center cursor-pointer transition-all duration-200 py-3 px-4 rounded-xl ${isActive('/') ? 'bg-blue-500 text-white shadow-lg' : 'hover:bg-blue-100/50'}`} onClick={() => { navigate('/'); setMenuOpen(false); }}>Home</span>
                <span className={`text-center cursor-pointer transition-all duration-200 py-3 px-4 rounded-xl ${isActive('/about') ? 'bg-blue-500 text-white shadow-lg' : 'hover:bg-blue-100/50'}`} onClick={() => { navigate('/about'); setMenuOpen(false); }}>About</span>
                
                {/* Mobile Services Accordion */}
                <div className="flex flex-col">
                    <div 
                        className={`text-center cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 py-3 px-4 rounded-xl ${isServicesActive() ? 'bg-blue-500 text-white shadow-lg' : 'hover:bg-blue-100/50'}`}
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                        <span>Services</span>
                        <svg 
                            className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    
                    {/* Submenu */}
                    <div 
                        className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-96 mt-3' : 'max-h-0'}`}
                    >
                        <div className="flex flex-col gap-2 bg-white/40 backdrop-blur-sm rounded-xl p-3 border border-blue-100">
                            {serviceLinks.map((service, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => { navigate(service.path); setMenuOpen(false); setMobileServicesOpen(false); }}
                                    className={`text-center py-2 px-3 rounded-lg text-sm cursor-pointer transition-all duration-200 ${location.pathname === service.path ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md' : 'hover:bg-blue-100 hover:text-blue-700'}`}
                                >
                                    {service.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <span className={`text-center cursor-pointer transition-all duration-200 py-3 px-4 rounded-xl ${isActive('/blogs') ? 'bg-blue-500 text-white shadow-lg' : 'hover:bg-blue-100/50'}`} onClick={() => { navigate('/blogs'); setMenuOpen(false); }}>Blogs</span>
                <span className={`text-center cursor-pointer transition-all duration-200 py-3 px-4 rounded-xl ${isActive('/contact') ? 'bg-blue-500 text-white shadow-lg' : 'hover:bg-blue-100/50'}`} onClick={() => { navigate('/contact'); setMenuOpen(false); }}>Contact</span>
                
                {/* Get In Touch Button */}
                <button
                    onClick={() => { navigate('/contact'); setMenuOpen(false); }}
                    className="mt-4 py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full shadow-lg hover:shadow-blue-400/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                    Get In Touch
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>
            </div>
        </>
    );
}