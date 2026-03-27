import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
    {
        title: "Web Development",
        description: "Custom websites and web applications built with modern technologies for optimal performance.",
        features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Secure & Scalable"],
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop",
        route: "/services/web-development"
    },
    {
        title: "Graphic Design",
        description: "Eye-catching visual designs that communicate your brand message effectively.",
        features: ["Logo Design", "Brand Identity", "Marketing Materials", "UI/UX Design"],
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop",
        route: "/services/graphic-design"
    },
    {
        title: "SEO Services",
        description: "Comprehensive SEO strategies to boost your online visibility and drive organic traffic.",
        features: ["Keyword Research", "On-Page SEO", "Link Building", "Analytics & Reporting"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
        route: "/services/seo-services"
    },
    {
        title: "Content Writing",
        description: "Engaging, SEO-friendly content that resonates with your audience and drives conversions.",
        features: ["Blog Posts", "Website Copy", "Product Descriptions", "Social Media Content"],
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop",
        route: "/services/content-writing"
    },
    {
        title: "Digital Advertising",
        description: "Strategic ad campaigns that maximize ROI across all major advertising platforms.",
        features: ["Google Ads", "Social Media Ads", "Display Advertising", "Remarketing"],
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop",
        route: "/services/digital-advertising"
    },
    {
        title: "Digital PR",
        description: "Build brand authority and trust through strategic media coverage and online reputation.",
        features: ["Media Outreach", "Press Coverage", "Brand Mentions", "Authority Backlinks"],
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop",
        route: "/services/digital-pr"
    }
];

function FlipCard({ title, description, features, image, index, route }) {
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
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
            },
            delay: index * 0.1,
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [index]);

    return (
        <div 
            ref={cardRef}
            className="group perspective-1000 w-full h-[280px] sm:h-[320px] md:h-[380px] cursor-pointer"
            onClick={() => navigate(route)}
        >
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50 border border-gray-100">
                    {/* Image */}
                    <img 
                        src={image} 
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Premium gradient overlay - light theme */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-800/50 to-transparent" />
                    
                    {/* Orange accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-6">
                        <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-1 sm:mb-2 transition-transform duration-500 origin-left group-hover:scale-[2] group-hover:translate-y-[-20px] z-10">
                            {title}
                        </h3>
                        <p className="text-gray-200 text-xs sm:text-sm leading-relaxed opacity-90 transition-opacity duration-300 group-hover:opacity-0 line-clamp-2 sm:line-clamp-3">
                            {description}
                        </p>
                        <div className="mt-2 sm:mt-3 flex items-center text-orange-400 text-xs sm:text-sm font-medium transition-opacity duration-300 group-hover:opacity-0">
                            <span className="hidden sm:inline">View details</span>
                            <span className="sm:hidden">Details</span>
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden bg-white shadow-2xl shadow-gray-300/50 border border-gray-100 p-3 sm:p-5 md:p-8 flex flex-col justify-center">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-400 rounded-full blur-3xl" />
                    </div>
                    
                    {/* Orange accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500" />
                    
                    <h3 className="relative text-sm sm:text-lg md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6 text-center tracking-tight">{title}</h3>
                    <ul className="relative space-y-1.5 sm:space-y-2 md:space-y-3">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-700 bg-gray-50/80 backdrop-blur-sm rounded-lg sm:rounded-xl px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 border border-gray-200/60">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center mr-2 sm:mr-3 md:mr-4 shadow-lg shadow-orange-500/20 flex-shrink-0">
                                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-xs sm:text-sm font-medium leading-tight">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function ServiceCards(){
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 md:pt-6 md:pb-1 max-w-7xl mx-auto">
            {servicesData.map((service, index) => (
                <FlipCard key={index} {...service} index={index} />
            ))}
        </div>
    );
}
