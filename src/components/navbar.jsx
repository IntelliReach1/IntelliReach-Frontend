import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function Navbar() {
    const drawerRef = useRef(null);
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

    // Close drawer on route change
    useEffect(() => {
        setMenuOpen(false);
        setMobileServicesOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const navLinkStyle = (path) =>
        `relative cursor-pointer text-sm lg:text-base font-medium transition-all duration-300
        after:content-[""] after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:rounded-full after:transition-all after:duration-300
        ${isActive(path)
            ? 'text-cyan-200 after:w-full after:bg-cyan-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]'
            : 'text-white/90 hover:text-cyan-200 after:w-0 hover:after:w-full after:bg-cyan-300'
        }`;

    const mobileLinkStyle = (path) =>
        `block w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all duration-200
        ${isActive(path)
            ? 'text-cyan-200 bg-white/15'
            : 'text-white hover:text-cyan-200 hover:bg-white/10'
        }`;

    return (
        <>
            {/* ── NAVBAR ─────────────────────────────────────────────────── */}
            <header className="sticky top-0 z-[100] bg-gradient-to-r from-[#5B21B6] via-[#C026D3] to-[#FB7185] shadow-lg shadow-black/20 ">
                <div className="max-w-7xl mx-auto px-2">
                    <div className="flex items-center justify-between h-16 md:h-24">

                        {/* Logo */}
                        <div
                            onClick={() => navigate('/')}
                            className="flex items-center cursor-pointer select-none flex-shrink-0 "
                        >
                            <img
                                className="w-18 h-14 md:w-40 md:h-20 object-contain m-2"
                                src="logo.png"
                                alt="IntelliReach logo"
                            />
                        </div>

                        {/* Desktop Nav — centred */}
                        <nav className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
                            <span className={navLinkStyle('/')} onClick={() => navigate('/')}>Home</span>
                            <span className={navLinkStyle('/about')} onClick={() => navigate('/about')}>About</span>

                            {/* Services Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setServicesDropdownOpen(true)}
                                onMouseLeave={() => setServicesDropdownOpen(false)}
                            >
                                <span
                                    className={`relative cursor-pointer text-sm lg:text-base font-medium transition-all duration-300 flex items-center gap-1
                                    ${isServicesActive()
                                        ? 'text-cyan-200 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]'
                                        : 'text-white/90 hover:text-[#67E8F9]'
                                    }`}
                                >
                                    Services
                                    <svg
                                        className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>

                                {/* Dropdown panel */}
                                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200
                                    ${servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                                >
                                    {serviceLinks.map((service, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => { navigate(service.path); setServicesDropdownOpen(false); }}
                                            className={`px-5 py-3 cursor-pointer text-sm font-medium transition-all duration-150 border-b last:border-b-0 border-gray-100
                                            ${location.pathname === service.path
                                                ? 'bg-cyan-50 text-cyan-600'
                                                : 'text-gray-700 hover:bg-cyan-50 hover:text-cyan-600'
                                            }`}
                                        >
                                            {service.name}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <span className={navLinkStyle('/blogs')} onClick={() => navigate('/blogs')}>Blogs</span>
                            <span className={navLinkStyle('/contact')} onClick={() => navigate('/contact')}>Contact</span>
                        </nav>

                        {/* Desktop CTA */}
                        <button
                            onClick={() => navigate('/contact')}
                            className="hidden md:block px-5 py-2 rounded-full text-white text-sm lg:text-base font-medium whitespace-nowrap
                            bg-white/10 border border-white/30 transition-all duration-300
                            hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(47,107,255,0.5)]"
                        >
                            Get In Touch
                        </button>

                        {/* Hamburger — mobile only */}
                        <button
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                <line x1="3" y1="12" x2="21" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                <line x1="3" y1="18" x2="21" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>

                    </div>
                </div>
            </header>

            {/* ── MOBILE DRAWER ──────────────────────────────────────────── */}
            {/* Backdrop */}
            <div
                onClick={() => setMenuOpen(false)}
                className={`fixed inset-0 z-[140] bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden
                    ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Drawer panel */}
            <div
                ref={drawerRef}
                className={`fixed top-0 right-0 h-full w-[80%] max-w-[300px] z-[150] md:hidden
                    bg-gradient-to-r from-[#5B21B6] to-[#C026D3]
                    shadow-2xl flex flex-col
                    transition-transform duration-300 ease-in-out
                    ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Drawer header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/20">
                    <img className="w-24 h-16 object-contain" src="logo.png" alt="logo" />
                    <button
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        className="text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <line x1="5" y1="5" x2="19" y2="19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            <line x1="19" y1="5" x2="5" y2="19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                {/* Drawer links */}
                <nav className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-1">
                    <button className={mobileLinkStyle('/')} onClick={() => navigate('/')}>Home</button>
                    <button className={mobileLinkStyle('/about')} onClick={() => navigate('/about')}>About</button>

                    {/* Services accordion */}
                    <div>
                        <button
                            onClick={() => setMobileServicesOpen(prev => !prev)}
                            className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-xl transition-all duration-200
                                ${isServicesActive() ? 'text-cyan-200 bg-white/15' : 'text-white hover:text-cyan-200 hover:bg-white/10'}`}
                        >
                            Services
                            <svg
                                className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l-2 border-white/20 pl-3">
                                {serviceLinks.map((service, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => navigate(service.path)}
                                        className={`text-left px-3 py-2.5 text-sm rounded-lg transition-all duration-200
                                            ${location.pathname === service.path
                                                ? 'text-cyan-200 bg-white/10'
                                                : 'text-white/80 hover:text-cyan-200 hover:bg-white/10'
                                            }`}
                                    >
                                        {service.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button className={mobileLinkStyle('/blogs')} onClick={() => navigate('/blogs')}>Blogs</button>
                    <button className={mobileLinkStyle('/contact')} onClick={() => navigate('/contact')}>Contact</button>
                </nav>

                {/* Drawer CTA */}
                <div className="px-4 py-5 border-t border-white/20">
                    <button
                        onClick={() => navigate('/contact')}
                        className="w-full py-3 rounded-full text-white font-semibold text-sm
                        bg-white/15 border border-white/30 transition-all duration-300
                        hover:bg-white/25 active:scale-95"
                    >
                        Get In Touch
                    </button>
                </div>
            </div>
        </>
    );
}