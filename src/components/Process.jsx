import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
    {
        number: "01",
        title: "Discovery",
        description: "Understanding your goals and audience.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop"
    },
    {
        number: "02",
        title: "Strategy",
        description: "Planning tailored digital solutions.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop"
    },
    {
        number: "03",
        title: "Execution",
        description: "Designing and developing your product.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200&auto=format&fit=crop"
    },
    {
        number: "04",
        title: "Launch",
        description: "Testing and going live smoothly.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop"
    },
    {
        number: "05",
        title: "Support",
        description: "Ongoing improvements and support.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop"
    }
];

function ProcessItem({ step, index, isHovered, onHover }) {
    const itemRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const element = itemRef.current;
        if (!element) return;

        gsap.fromTo(element, {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none",
            },
            delay: index * 0.1,
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [index]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Desktop: Apply flex behavior based on hover state
    // Mobile: No flex behavior (just full width in vertical stack)
    const getFlexClass = () => {
        if (isMobile) return '';
        if (isHovered === null) return 'flex-1';
        if (isHovered === index) return 'flex-[3]';
        return 'flex-[0.5]';
    };

    return (
        <div
            ref={itemRef}
            onMouseEnter={() => !isMobile && onHover(index)}
            onMouseLeave={() => !isMobile && onHover(null)}
            className={`relative cursor-pointer transition-all duration-500 ${getFlexClass()}`}
            style={{ minHeight: isMobile ? '280px' : '400px' }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <img
                    src={step.image}
                    alt={step.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                        isHovered === index ? 'scale-100' : 'scale-110'
                    }`}
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                    isHovered === index 
                        ? 'bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent'
                        : 'bg-gradient-to-t from-gray-900/70 via-gray-900/60 to-gray-900/40'
                }`} />
            </div>

            {/* Content */}
            <div className={`relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 transition-all duration-500 ${
                !isMobile && isHovered === index ? 'translate-y-0 opacity-100' : !isMobile && isHovered !== null ? 'translate-y-4 opacity-70' : 'translate-y-0 opacity-100'
            }`}>
                <div className={`transition-all duration-500 ${
                    !isMobile && isHovered === index ? 'mb-6' : 'mb-2 sm:mb-3'
                }`}>
                    <span className={`font-bold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent transition-all duration-500 ${
                        !isMobile && isHovered === index ? 'text-5xl' : 'text-2xl sm:text-3xl'
                    }`}>
                        {step.number}
                    </span>
                </div>
                
                <h3 className={`font-bold text-white transition-all duration-500 ${
                    !isMobile && isHovered === index ? 'text-4xl mb-4' : !isMobile && isHovered !== null ? 'text-2xl mb-2' : 'text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3'
                }`}>
                    {step.title}
                </h3>
                
                <p className={`text-gray-300 transition-all duration-500 overflow-hidden text-sm sm:text-base ${
                    isMobile 
                        ? 'max-h-20 opacity-100'
                        : isHovered === index 
                            ? 'text-lg leading-relaxed max-h-32 opacity-100' 
                            : 'text-sm max-h-0 opacity-0'
                }`}>
                    {step.description}
                </p>

                {/* Decorative line */}
                <div className={`mt-3 sm:mt-4 h-1 bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-500 ${
                    !isMobile && isHovered === index ? 'w-24' : 'w-8 sm:w-12'
                }`} />
            </div>

            {/* Hover indicator - Desktop only */}
            {!isMobile && isHovered !== index && isHovered === null && (
                <div className="absolute bottom-8 right-8 opacity-50 group-hover:opacity-100 transition-opacity">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            )}
        </div>
    );
}

export default function Process() {
    const titleRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const title = titleRef.current;
        if (!title) return;

        gsap.fromTo(title, {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });
    }, []);

    return (
        <div className="py-16 px-4 md:px-8">
            {/* Title */}
            <div ref={titleRef} className="text-center mb-8 sm:mb-12">
                <span className="text-orange-500 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                    How We Work
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
                    <span className="text-gray-800">Our </span>
                    <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent">
                        Process
                    </span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                    <span className="hidden sm:inline">Hover over each step to explore our proven methodology</span>
                    <span className="sm:hidden">Explore our proven methodology</span>
                </p>
            </div>

            {/* Flowing Menu - Vertical on mobile, Horizontal with hover expansion on desktop */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-full mx-auto">
                {processSteps.map((step, index) => (
                    <ProcessItem
                        key={index}
                        step={step}
                        index={index}
                        isHovered={hoveredIndex}
                        onHover={setHoveredIndex}
                    />
                ))}
            </div>
        </div>
    );
}
