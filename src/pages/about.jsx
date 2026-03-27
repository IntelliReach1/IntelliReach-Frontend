import { useEffect, useRef } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "100%", label: "Client Satisfaction", icon: "⭐" },
  { value: "3+", label: "Years Experience", icon: "🎯" },
  { value: "200+", label: "Happy Clients", icon: "😊" },
  { value: "500+", label: "Projects Done", icon: "🚀" },
  { value: "30+", label: "Cities Served", icon: "🌍" },
];

const coreValues = [
  {
    title: "Strategic Approach",
    description:
      "Data-driven strategies tailored to your unique business goals and target audience.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
  },
  {
    title: "Creative Excellence",
    description:
      "Innovative solutions that blend creativity with cutting-edge technology.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
  },
  {
    title: "Fast Delivery",
    description:
      "Quick turnaround times without compromising on quality or attention to detail.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop",
  },
  {
    title: "24/7 Support",
    description:
      "Dedicated support team always ready to help you succeed and grow.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop",
  },
];

const team = [
  {
    name: "Kuldeep Singh",
    role: "CEO & Founder",
    image: "kuldeep.jpeg",
  },
  {
    name: "Animesh Singh",
    role: "COO & Co-Founder",
    image: "animesh.jpeg",
  },
  {
    name: "Maaz Anwar",
    role: "CMO & Co-Founder",
    image: "maaz.jpeg",
  },
];

const whyChooseUs = [
  {
    title: "Proven Track Record",
    description:
      "Over 500 successful projects delivered to satisfied clients worldwide",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
  },
  {
    title: "Expert Team",
    description:
      "Skilled professionals with years of industry experience and expertise",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
  },
  {
    title: "Client-Centric",
    description:
      "Your success is our priority. We work closely with you every step",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop",
  },
  {
    title: "Cutting-Edge Tech",
    description:
      "We use the latest technologies and best practices in all our work",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
  },
  {
    title: "Transparent Process",
    description:
      "Clear communication and regular updates throughout the project",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop",
  },
  {
    title: "Affordable Pricing",
    description:
      "Competitive pricing without compromising on quality or service",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
  },
];

// Animated Number Ticker Component
function AnimatedNumber({ value, delay = 0 }) {
  const numberRef = useRef(null);
  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    const el = numberRef.current;
    if (!el) return;

    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
    const suffix = value.replace(/[0-9]/g, "");

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      onEnter: () => {
        gsap.to(
          { val: 0 },
          {
            val: numericValue,
            duration: 2,
            delay: delay,
            ease: "power2.out",
            onUpdate: function () {
              setDisplayValue(Math.floor(this.targets()[0].val));
            },
          },
        );
      },
      once: true,
    });

    return () => trigger.kill();
  }, [value, delay]);

  return (
    <span ref={numberRef}>
      {displayValue}
      {value.replace(/[0-9]/g, "")}
    </span>
  );
}

function AnimatedStat({ stat, index, position, isMobile = false }) {
  const statRef = useRef(null);

  useEffect(() => {
    const el = statRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      {
        scale: 0,
        opacity: 0,
        rotation: -180,
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        delay: index * 0.15,
      },
    );
  }, [index]);

  return (
    <div
      ref={statRef}
      className={isMobile ? "w-full flex justify-center" : "absolute"}
      style={!isMobile ? position : {}}
    >
      <div className="group relative cursor-pointer">
        {/* Pulsing glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full opacity-20 group-hover:opacity-40 blur-2xl transition-all duration-500 animate-pulse" />

      
        {/* Main bubble */}
        <div className="relative backdrop-blur-xl bg-white/80 rounded-full p-6 sm:p-8 shadow-2xl border border-white/50 group-hover:scale-110 transition-all duration-500 overflow-hidden">
          {/* Rotating ring - Isse bubble ke andar rakha hai */}
          {/* <div
            className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-blue-500 border-r-purple-500 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-500 pointer-events-none"
            style={{ animationDuration: "3s", margin: "-1px" }}
          /> */}

          <div className="text-center relative z-10">
            <div className="text-4xl sm:text-6xl mb-2 sm:mb-3 group-hover:scale-125 transition-transform duration-300">
              {stat.icon}
            </div>
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent mb-2">
              <AnimatedNumber value={stat.value} delay={index * 0.1} />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-gray-600 whitespace-nowrap">
              {stat.label}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoreValueItem({ value, index }) {
  const itemRef = useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      {
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        delay: index * 0.1,
      },
    );
  }, [index]);

  return (
    <div
      ref={itemRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-48 md:h-56"
    >
      {/* Background glow */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-3xl opacity-0 blur-xl transition-all duration-500 ${isHovered ? "opacity-30" : ""}`}
      />

      {/* Main container */}
      <div className="relative h-full rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Background image on the right */}
        <div className="absolute inset-0">
          <img
            src={value.image}
            alt={value.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Gradient overlay from left (covering layer) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />

        {/* Content section on the left */}
        <div className="relative h-full flex items-center p-6 md:p-8">
          <div className="max-w-xl">
            <h3
              className={`text-2xl md:text-3xl font-bold mb-2 transition-all duration-300 ${isHovered ? "text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text" : "text-gray-800"}`}
            >
              {value.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {value.description}
            </p>
          </div>
        </div>

        {/* Animated progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500">
          <div
            className={`h-full bg-white/50 transition-all duration-500 ease-out ${isHovered ? "w-full" : "w-0"}`}
          />
        </div>

        {/* Shine effect */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shine" />
        </div>
      </div>
    </div>
  );
}

function TeamMember({ member, index }) {
  const memberRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const card = memberRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      {
        y: 80,
        opacity: 0,
      },
      {
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
      },
    );
  }, [index]);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    gsap.to(glow, {
      scale: 1.2,
      opacity: 0.8,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div
      ref={memberRef}
      className="group relative overflow-hidden rounded-3xl cursor-pointer"
    >
      {/* Animated glow effect */}
      <div
        ref={glowRef}
        className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-70 blur-xl transition-opacity duration-500"
      />

      <div className="relative h-96 overflow-hidden rounded-3xl">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
        />

        {/* Multiple gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-orange-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/90 via-blue-600/60 to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500 backdrop-blur-sm" />

        {/* Animated shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 group-hover:translate-y-[-10px]">
        {/* Glassmorphism info card */}
        <div className="relative backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20 shadow-2xl transform transition-all duration-500 group-hover:bg-white/20">
          <h3 className="text-2xl font-bold text-white mb-1 transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-blue-100 font-medium mb-3">{member.role}</p>

          {/* Professional social links */}
          {/* <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
        
            <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>

            <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>

       
            <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function BentoGridItem({ item, index, className }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      {
        y: 60,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        delay: index * 0.1,
      },
    );
  }, [index]);

  return (
    <div
      ref={itemRef}
      className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:-translate-y-2 ${className}`}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Dark overlay - fades more on hover to reveal image */}
      <div className="absolute inset-0 bg-gray-900/80 group-hover:bg-gray-900/60 transition-all duration-500" />

      {/* Gradient accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-orange-600/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/30 transition-all duration-500" />

      {/* Content */}
      <div className="relative h-full p-6 md:p-8 flex flex-col justify-between z-10">
        <div>
          {/* Number tag */}
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-4 group-hover:bg-white/10 group-hover:border-white/40 group-hover:scale-110 transition-all duration-500">
            <span className="text-sm font-bold text-white/70 group-hover:text-white transition-colors duration-300">
              0{index + 1}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:translate-x-2 transition-all duration-500">
            {item.title}
          </h3>
          <p className="text-white/60 leading-relaxed text-sm md:text-base group-hover:text-white/80 transition-colors duration-500">
            {item.description}
          </p>
        </div>

        {/* Bottom accent bar */}
        <div className="mt-4 flex items-center gap-3">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 rounded-full transition-all duration-500 w-0 group-hover:w-full" />
          <span className="text-white/0 group-hover:text-white/50 text-xs font-medium tracking-wider uppercase transition-all duration-500 whitespace-nowrap">
            Learn more
          </span>
        </div>
      </div>

      {/* Corner light effect on hover */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/0 group-hover:bg-white/10 rounded-full blur-3xl transition-all duration-700" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/0 group-hover:bg-blue-500/10 rounded-full blur-3xl transition-all duration-700" />

      {/* Shine sweep */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-shine" />
      </div>
    </div>
  );
}

export function About() {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutTextRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    gsap.fromTo(
      title,
      {
        y: -80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      },
    );
  }, []);

  useEffect(() => {
    const image = aboutImageRef.current;
    if (!image) return;

    gsap.fromTo(
      image,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: image,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  useEffect(() => {
    const text = aboutTextRef.current;
    if (!text) return;

    gsap.fromTo(
      text,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: text,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-pink-50 via-white to-pink-50 min-h-screen w-full overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div ref={titleRef} className="text-center mb-8 md:mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 md:mb-6 ">
              <span className="text-gray-800 ">
                Empowering Businesses with <br />{" "}
              </span>
              <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Smart Digital Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              That Drive Growth and Impact
            </p>
          </div>

          {/* About Content with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div ref={aboutImageRef} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                alt="Team collaboration"
                className="relative rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div ref={aboutTextRef} className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">
                Crafting Digital Success Stories
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  {" "}
                  Since 2022
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We started with a simple mission: to help businesses harness the
                power of digital technology. Today, we're proud to be a trusted
                partner for companies worldwide, delivering exceptional results
                through web development, SEO, content creation, and stunning
                design.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our team blends technical expertise with creative vision to
                deliver solutions that not only look stunning but also drive
                measurable business growth. We take pride in building lasting
                relationships with our clients, founded on trust, transparency,
                and a proven track record of success.
              </p>
            </div>
          </div>

          {/* Unique Stats Display - Circular Bubble Layout */}
          <div className="mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-4xl sm:text-3xl md:text-6xl font-bold text-gray-800 mb-3">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                  Impact
                </span>{" "}
                in Numbers
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Real results that speak for themselves
              </p>
            </div>

            {/* Mobile Layout - Grid */}
            <div className="md:hidden grid grid-cols-2 gap-4 px-4 mb-8">
              {stats.map((stat, index) => (
                <AnimatedStat
                  key={index}
                  stat={stat}
                  index={index}
                  isMobile={true}
                />
              ))}
            </div>

            {/* Desktop Layout - Absolute Positioning */}
            <div className="hidden md:block relative h-[600px] w-full max-w-5xl mx-auto">
              {/* Center large bubble */}
              <AnimatedStat
                stat={stats[0]}
                index={0}
                position={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 5,
                }}
              />

              {/* Top left */}
              <AnimatedStat
                stat={stats[1]}
                index={1}
                position={{
                  top: "10%",
                  left: "15%",
                  zIndex: 4,
                }}
              />

              {/* Top right */}
              <AnimatedStat
                stat={stats[2]}
                index={2}
                position={{
                  top: "15%",
                  right: "15%",
                  zIndex: 4,
                }}
              />

              {/* Bottom left */}
              <AnimatedStat
                stat={stats[3]}
                index={3}
                position={{
                  bottom: "10%",
                  left: "20%",
                  zIndex: 4,
                }}
              />

              {/* Bottom right */}
              <AnimatedStat
                stat={stats[4]}
                index={4}
                position={{
                  bottom: "15%",
                  right: "18%",
                  zIndex: 4,
                }}
              />

              {/* Connecting lines animation */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                style={{ zIndex: 1 }}
              >
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50%"
                  cy="50%"
                  r="35%"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeDasharray="10 5"
                  className="animate-spin"
                  style={{ animationDuration: "30s" }}
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeDasharray="8 8"
                  className="animate-spin"
                  style={{
                    animationDuration: "40s",
                    animationDirection: "reverse",
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 right-0 w-full h-64 bg-gradient-to-b from-pink-100 via-pink-50 to-transparent pointer-events-none"></div>
      </section>

      {/* Core Values - Interactive Horizontal Sections */}
      <section className="relative pt-2 pb-10 bg-gradient-to-b from-pink-50 via-pink-100/30 to-pink-50/30 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-2">
              <span className="text-gray-800">Our Core </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>

          {/* Interactive Value Blocks */}
          <div className="space-y-4 md:space-y-6">
            {coreValues.map((value, index) => (
              <CoreValueItem key={index} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-10 bg-gradient-to-b from-pink-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-2">
              <span className="text-gray-800">Meet Our </span>
              <span className="bg-gradient-to-r from-blue-600 to-orange-400 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The talented individuals who make it all happen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <TeamMember key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Dark Bento Grid */}
      <section className="py-10 bg-gradient-to-b from-pink-50 via-pink-50 to-pink-100 relative overflow-hidden">
        {/* Subtle background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-2">
              <span className="text-black">Why Choose </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                Us
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Distinctive advantages that make us your ideal partner
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[220px]">
            {/* Large item - spans 2 columns */}
            <BentoGridItem
              item={whyChooseUs[0]}
              index={0}
              className="md:col-span-2 md:row-span-2"
            />

            {/* Regular item */}
            <BentoGridItem
              item={whyChooseUs[1]}
              index={1}
              className="md:row-span-1"
            />

            {/* Regular item */}
            <BentoGridItem
              item={whyChooseUs[2]}
              index={2}
              className="md:row-span-1"
            />

            {/* Tall item - spans 2 rows */}
            <BentoGridItem
              item={whyChooseUs[3]}
              index={3}
              className="md:col-span-1 md:row-span-2"
            />

            {/* Wide item - spans 2 columns */}
            <BentoGridItem
              item={whyChooseUs[4]}
              index={4}
              className="md:col-span-2 md:row-span-1"
            />

            {/* Regular item */}
            <BentoGridItem
              item={whyChooseUs[5]}
              index={5}
              className="md:col-span-1 md:row-span-1"
            />
          </div>
        </div>
      </section>

      {/* CTA Section - Light theme matching the page */}
      <section className="relative py-14 bg-gradient-to-b from-pink-100 via-white to-pink-100 overflow-hidden">
        {/* Ambient background orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">Ready to Start Your </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              Digital Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's work together to transform your vision into reality. Our team
            is ready to help you succeed.
          </p>

          {/* Premium button */}
          <div className="relative inline-block group/btn">
            {/* Animated glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-full opacity-60 group-hover/btn:opacity-100 blur-lg transition-all duration-500" />

            <button
              onClick={() => navigate("/contact")}
              className="relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 border border-white/20"
            >
              <span className="relative z-10">Get Started Today</span>

              {/* CSS Arrow */}
              <span className="relative flex items-center justify-center w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-2">
                <span className="absolute w-4 h-0.5 bg-white rounded-full" />
                <span className="absolute w-2.5 h-0.5 bg-white rounded-full rotate-45 translate-x-1.5 -translate-y-1" />
                <span className="absolute w-2.5 h-0.5 bg-white rounded-full -rotate-45 translate-x-1.5 translate-y-1" />
              </span>

              {/* Shine effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover/btn:animate-shine" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
