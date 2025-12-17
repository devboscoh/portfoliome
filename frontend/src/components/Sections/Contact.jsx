// src/components/Sections/Contact.jsx
import { useState } from 'react';
import axios from 'axios';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatus('');

    try {
      // Note: Update this endpoint for your production backend
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: <Mail size={20} />, label: "Email", value: "boscobrilli8@gmail.com", href: "mailto:boscobrilli8@gmail.com" },
    { icon: <Phone size={20} />, label: "Phone", value: "+254 715 640 443", href: "tel:+254715640443" },
    { icon: <MapPin size={20} />, label: "Location", value: "Nairobi, Kenya", href: "#" }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">
            Get In <span className="text-brand-500">Touch</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">
            Let's discuss how we can integrate geospatial data and full-stack solutions into your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass p-8 rounded-3xl border-white/60 shadow-premium">
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-8">Contact Information</h3>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <a key={index} href={info.href} className="flex items-center group">
                    <div className="p-4 bg-white text-brand-600 rounded-2xl shadow-sm border border-slate-100 group-hover:bg-brand-500 group-hover:text-white group-hover:shadow-glow-brand transition-all duration-300">
                      {info.icon}
                    </div>
                    <div className="ml-5">
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{info.label}</p>
                      <p className="text-slate-900 font-semibold group-hover:text-brand-600 transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-slate-100">
                <p className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-tighter">Follow my work</p>
                <div className="flex gap-4">
                  <a href="#" className="p-3 bg-slate-100 rounded-xl text-slate-600 hover:bg-brand-500 hover:text-white transition-all"><Linkedin size={20} /></a>
                  <a href="#" className="p-3 bg-slate-100 rounded-xl text-slate-600 hover:bg-brand-500 hover:text-white transition-all"><Github size={20} /></a>
                </div>
              </div>
            </div>

            {/* Status Card */}
            <div className="bg-slate-900 p-8 rounded-3xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <CheckCircle size={80} />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <h4 className="font-bold text-lg">Open for Collaboration</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Currently available for software engineering roles or GIS consulting opportunities.
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-premium border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl focus:outline-none transition-all ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-100 focus:border-brand-500 focus:bg-white'}`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl focus:outline-none transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-100 focus:border-brand-500 focus:bg-white'}`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl focus:outline-none transition-all resize-none ${errors.message ? 'border-red-500 bg-red-50' : 'border-slate-100 focus:border-brand-500 focus:bg-white'}`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-vibrant w-full py-5 rounded-2xl text-lg flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-2xl flex items-center animate-reveal">
                    <CheckCircle size={20} className="mr-3 shrink-0" />
                    <span className="text-sm font-bold">Message received! I'll get back to you within 24 hours.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 border border-red-100 rounded-2xl flex items-center animate-reveal">
                    <AlertCircle size={20} className="mr-3 shrink-0" />
                    <span className="text-sm font-bold">Something went wrong. Please email me directly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;