import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const blogsData = [
    {
        id: 1,
        title: "10 Essential SEO Tips for 2026",
        excerpt: "Discover the latest SEO strategies that will help your website rank higher in search results and drive more organic traffic.",
        category: "SEO",
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop",
        author: "Sarah Johnson",
        date: "Jan 15, 2026",
        readTime: "8 min read",
        featured: true,
        tags: ["SEO", "Marketing", "Growth"]
    },
    {
        id: 2,
        title: "The Future of Web Development",
        excerpt: "Explore emerging technologies shaping modern web experiences and how they'll transform the digital landscape.",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop",
        author: "Mike Chen",
        date: "Jan 12, 2026",
        readTime: "6 min read",
        featured: false,
        tags: ["Development", "Technology", "Innovation"]
    },
    {
        id: 3,
        title: "Creating a Strong Brand Identity",
        excerpt: "Learn how to build a memorable brand identity that stands out in today's competitive market.",
        category: "Design",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop",
        author: "Emma Davis",
        date: "Jan 10, 2026",
        readTime: "5 min read",
        featured: false,
        tags: ["Design", "Branding", "Strategy"]
    },
    {
        id: 4,
        title: "Social Media Marketing Strategies",
        excerpt: "Proven strategies to grow engagement and followers across all major social media platforms.",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
        author: "Alex Turner",
        date: "Jan 8, 2026",
        readTime: "7 min read",
        featured: false,
        tags: ["Marketing", "Social Media", "Growth"]
    },
    {
        id: 5,
        title: "Responsive Design Best Practices",
        excerpt: "Ensure your website looks perfect on all devices with these essential responsive design techniques.",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&auto=format&fit=crop",
        author: "Lisa Martinez",
        date: "Jan 5, 2026",
        readTime: "6 min read",
        featured: false,
        tags: ["Design", "Development", "UX"]
    },
    {
        id: 6,
        title: "Growing Your Startup in 2026",
        excerpt: "Key strategies for scaling startups in 2026 and achieving sustainable growth in a competitive market.",
        category: "Business",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
        author: "David Kim",
        date: "Jan 3, 2026",
        readTime: "9 min read",
        featured: false,
        tags: ["Business", "Strategy", "Growth"]
    }
];

const categories = ["All", "Web Development", "SEO", "Design", "Marketing", "Business"];

function FeaturedBlog({ blog }) {
    const cardRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        gsap.fromTo(card, {
            y: 80,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });
    }, []);

    return (
        <div 
            ref={cardRef}
            className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-blue-200/40 cursor-pointer mb-16"
        >
            <div className="relative h-[520px] overflow-hidden">
                <img
                    ref={imageRef}
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                
                {/* Featured badge */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white text-sm font-bold shadow-lg">
                    ⭐ Featured Article
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                        {blog.category}
                    </span>
                    <span className="text-gray-300 text-sm">{blog.readTime}</span>
                    <span className="text-gray-300 text-sm">•</span>
                    <span className="text-gray-300 text-sm">{blog.date}</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-blue-400">
                    {blog.title}
                </h2>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed max-w-3xl">
                    {blog.excerpt}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center text-white font-bold">
                            {blog.author[0]}
                        </div>
                        <span className="text-gray-300 font-medium">{blog.author}</span>
                    </div>

                    <button className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/50">
                        Read Article
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

function BlogCard({ blog, index }) {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

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
            delay: index * 0.1,
        });
    }, [index]);

    return (
        <div 
            ref={cardRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-200/50 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2"
        >
            {/* Image container with overlay */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 text-xs font-bold">
                    {blog.category}
                </div>

                {/* Hover overlay with read more */}
                <div className={`absolute inset-0 bg-blue-600/95 flex items-center justify-center transition-all duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}>
                    <div className="text-center">
                        <svg className="w-16 h-16 text-white mx-auto mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <p className="text-white font-bold text-lg">Read Full Article</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{blog.readTime}</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors">
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">
                            {blog.author[0]}
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{blog.author}</span>
                    </div>

                    <svg className="w-5 h-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export function Blogs() {
    const titleRef = useRef(null);
    const searchRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const title = titleRef.current;
        if (!title) return;

        gsap.fromTo(title, {
            y: -50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.2,
        });
    }, []);

    useEffect(() => {
        const search = searchRef.current;
        if (!search) return;

        gsap.fromTo(search, {
            scale: 0.8,
            opacity: 0,
        }, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: 0.5,
        });
    }, []);

    const filteredBlogs = blogsData.filter(blog => {
        const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredBlog = blogsData.find(blog => blog.featured);
    const regularBlogs = filteredBlogs.filter(blog => !blog.featured);

    return (
        <>
            <section className="relative bg-gradient-to-br from-gray-100 via-white to-blue-100 min-h-screen w-full overflow-hidden">
                {/* Animated background orbs */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
                    {/* Hero Title */}
                    <div ref={titleRef} className="text-center mb-12">
                        <span className="text-orange-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                            Latest Insights & Blogs
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            <span className="text-gray-800">Our </span>
                            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent">
                                Blog
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Latest trends, tips, and insights in digital marketing and technology
                        </p>
                    </div>

                    {/* Search and Filter */}
                    <div ref={searchRef} className="mb-12">
                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mb-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-6 py-4 pl-14 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 shadow-lg shadow-gray-200/50"
                                />
                                <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                                        selectedCategory === category
                                            ? 'bg-gradient-to-r from-blue-500 to-orange-500 text-white shadow-lg shadow-blue-300/50 scale-105'
                                            : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg hover:scale-105'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Featured Blog */}
                    {selectedCategory === "All" && !searchQuery && featuredBlog && (
                        <FeaturedBlog blog={featuredBlog} />
                    )}

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularBlogs.map((blog, index) => (
                            <BlogCard key={blog.id} blog={blog} index={index} />
                        ))}
                    </div>

                    {/* No results */}
                    {filteredBlogs.length === 0 && (
                        <div className="text-center py-20">
                            <svg className="w-24 h-24 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">No articles found</h3>
                            <p className="text-gray-600">Try adjusting your search or filters</p>
                        </div>
                    )}
                </div>
                <div className='absolute top-0 left-0 right-0 w-full h-20 bg-gradient-to-b from-blue-100 via-blue-100/50 to-transparent pointer-events-none z-0'></div>
            </section>
        </>
    );
}