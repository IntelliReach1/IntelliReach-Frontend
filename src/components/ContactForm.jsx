import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        companyName: '', // Frontend state name
        budget: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    // Backend URL
    const API_URL = "https://agency-website-api.vercel.app";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSubmitted(false);
        setIsSubmitting(true);

        // 🔥 IMPORTANT: Mapping 'companyName' to 'company' as per your server.js
        const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.companyName, // Backend expects 'company'
            service: formData.service,
            budget: formData.budget,
            message: formData.message
        };

        try {
            const res = await fetch(`${API_URL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                // Backend returns { ok: false, error: "..." }
                setError(data.error || "Something went wrong.");
                return;
            }

            // Success
            setSubmitted(true);
            setFormData({ 
                name: '', email: '', phone: '', 
                service: '', companyName: '', 
                budget: '', message: '' 
            });

            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            setError("Network error. Your localhost origin might be blocked by CORS.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClass = `
        w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 text-sm
        bg-[#1a1f2e] border border-[#2a3044]
        focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/20
        transition-all duration-200
    `;

    return (
        <section
            style={{
                background: 'linear-gradient(135deg, #0d1117 0%, #0f1623 50%, #111827 100%)',
                minHeight: '100vh',
                fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
            }}
            className="py-16 px-4"
        >
            <div className="text-center mb-10">
                <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block" style={{ color: '#f97316' }}>
                    GET IN TOUCH
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
                    Send Us a <span style={{
                        background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #f97316)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>Message</span>
                </h2>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                    {error && (
                        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm">
                            ✕ {error}
                        </div>
                    )}
                    
                    {submitted && (
                        <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm">
                            ✓ Message sent successfully! Check your email.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-1.5">Full Name *</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-1.5">Email Address *</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-1.5">Phone Number</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+91 98765 43220" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-1.5">Service Needed *</label>
                                <select name="service" value={formData.service} onChange={handleChange} required className={inputClass}>
                                    <option value="">Select a service</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="SEO Services">SEO Services</option>
                                    <option value="Graphic Design">Graphic Design</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-1.5">Company Name</label>
                                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className={inputClass} placeholder="Your Company" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-1.5">Budget Range</label>
                                <select name="budget" value={formData.budget} onChange={handleChange} className={inputClass}>
                                    <option value="">Select budget</option>
                                    <option value="Under $200">Under $200</option>
                                    <option value="$200 - $500">$200 - $500</option>
                                    <option value="$1000+">$1000+</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1.5">Project Details *</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className={inputClass + ' resize-none'} placeholder="Tell us about your project..." />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            style={{
                                background: isSubmitting ? '#4b5563' : 'linear-gradient(90deg, #3b82f6, #8b5cf6, #f97316)',
                            }}
                            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-white font-semibold text-sm transition-all hover:scale-105 disabled:opacity-50"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>

                {/* Map Section */}
                <div className="rounded-2xl overflow-hidden border border-[#2a3044] min-h-[480px]">
                    <iframe title="Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2697241804913!2d77.0871!3d28.6219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzE4LjkiTiA3N8KwMDUnMTMuNiJF!5e0!3m2!1sen!2sin!4v1625650000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, minHeight: '480px' }} allowFullScreen="" loading="lazy" />
                </div>
            </div>
        </section>
    );
}

export default ContactForm;