import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionHeader from './SectionHeader';
import { portfolioData } from '../data/portfolioData';
import emailjsConfig, { isEmailjsConfigured } from '../config/emailjs';

export default function Contact() {
  const { contact } = portfolioData;
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'Recruitment',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [configNotice, setConfigNotice] = useState('');

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
    setConfigNotice('');

    if (!validateForm()) return;

    if (!isEmailjsConfigured()) {
      console.warn("EmailJS credentials missing or unconfigured in environment variables.");
      setErrorMessage("Contact form is temporarily unavailable. Please contact me directly by email.");
      return;
    }

    setIsSending(true);

    // Update current timestamp right before sending
    if (formRef.current && formRef.current.elements['time']) {
      formRef.current.elements['time'].value = new Date().toLocaleString();
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || emailjsConfig.serviceId,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || emailjsConfig.templateId,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || emailjsConfig.publicKey,
        }
      );

      setSuccessMessage(
        'Thank you for reaching out. Your message has been sent successfully.'
      );

      setFormData({
        name: '',
        email: '',
        subject: '',
        category: 'Recruitment',
        message: ''
      });
      if (formRef.current) {
        formRef.current.reset();
      }
      setErrors({});
    } catch (error) {
      console.error('EmailJS Error:', error);

      setErrorMessage(
        'Something went wrong while sending your message. Please try again or contact me directly by email.'
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#080808] relative grain-texture bg-depth-layer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <SectionHeader
          number="07 / CONTACT"
          title={contact.headline}
          subtitle={contact.subtext}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN: Contact Details & Direct Connect */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif-editorial text-3xl text-[#F2F0EA]">
                Get In Touch
              </h3>
              <p className="text-sm text-[#B8B8B8] font-light leading-relaxed">
                For professional conversations, collaborations, business opportunities and networking — I look forward to connecting.
              </p>
            </div>

            {/* Direct Details Stack — Glass Cards */}
            <div className="space-y-4 pt-2">
              
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 p-4 glass-card rounded-sm group glass-light-reflection"
              >
                <div className="p-3 glass-surface rounded-sm text-[#C8A45D] group-hover:bg-[#C8A45D]/90 group-hover:text-[#080808] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] tracking-widest text-[#777777] uppercase font-semibold">EMAIL</span>
                  <span className="text-sm text-[#F2F0EA] group-hover:text-[#C8A45D] font-medium transition-colors">
                    {contact.email}
                  </span>
                </div>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card rounded-sm group glass-light-reflection"
              >
                <div className="p-3 glass-surface rounded-sm text-[#C8A45D] group-hover:bg-[#C8A45D]/90 group-hover:text-[#080808] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] tracking-widest text-[#777777] uppercase font-semibold">LINKEDIN</span>
                  <span className="text-sm text-[#F2F0EA] group-hover:text-[#C8A45D] font-medium transition-colors">
                    LinkedIn Profile
                  </span>
                </div>
              </a>

              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 p-4 glass-card rounded-sm group glass-light-reflection"
              >
                <div className="p-3 glass-surface rounded-sm text-[#C8A45D] group-hover:bg-[#C8A45D]/90 group-hover:text-[#080808] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] tracking-widest text-[#777777] uppercase font-semibold">PHONE</span>
                  <span className="text-sm text-[#F2F0EA] group-hover:text-[#C8A45D] font-medium transition-colors">
                    {contact.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 glass-card rounded-sm">
                <div className="p-3 glass-surface rounded-sm text-[#C8A45D]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] tracking-widest text-[#777777] uppercase font-semibold">LOCATION</span>
                  <span className="text-sm text-[#F2F0EA] font-medium">
                    {contact.location}
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Contact Form — Glass Surface */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-sm relative space-y-6">

            {/* Notifications Banners */}
            <AnimatePresence>
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 bg-[#C8A45D]/10 border border-[#C8A45D] rounded-sm text-[#C8A45D] flex items-start gap-3 text-sm"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-semibold block uppercase tracking-wider text-xs">SUCCESS</span>
                    <p className="font-light">{successMessage}</p>
                  </div>
                </motion.div>
              )}

              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 bg-red-950/40 border border-red-500/80 rounded-sm text-red-200 flex items-start gap-3 text-sm"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-semibold block uppercase tracking-wider text-xs text-red-400">ERROR</span>
                    <p className="font-light">{errorMessage}</p>
                  </div>
                </motion.div>
              )}

              {configNotice && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 glass-surface rounded-sm text-[#B8B8B8] flex items-start gap-3 text-sm"
                >
                  <Info className="w-5 h-5 text-[#C8A45D] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-semibold block uppercase tracking-wider text-xs text-[#C8A45D]">NOTICE</span>
                    <p className="font-light">{configNotice}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6" noValidate>
              {/* Hidden Timestamp for EmailJS template variable {{time}} */}
              <input type="hidden" name="time" value={new Date().toLocaleString()} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-semibold tracking-wider text-[#B8B8B8] uppercase">
                    Full Name <span className="text-[#C8A45D]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className={`w-full px-4 py-3 glass-input ${
                      errors.name ? 'border-red-500' : ''
                    } text-[#F2F0EA] text-sm rounded-sm`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-semibold tracking-wider text-[#B8B8B8] uppercase">
                    Email Address <span className="text-[#C8A45D]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. eleanor@domain.com"
                    className={`w-full px-4 py-3 glass-input ${
                      errors.email ? 'border-red-500' : ''
                    } text-[#F2F0EA] text-sm rounded-sm`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-xs font-semibold tracking-wider text-[#B8B8B8] uppercase">
                    Subject <span className="text-[#C8A45D]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Executive Strategy Opportunity"
                    className={`w-full px-4 py-3 glass-input ${
                      errors.subject ? 'border-red-500' : ''
                    } text-[#F2F0EA] text-sm rounded-sm`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label htmlFor="category" className="block text-xs font-semibold tracking-wider text-[#B8B8B8] uppercase">
                    Inquiry Nature
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 glass-input text-[#F2F0EA] text-sm rounded-sm"
                  >
                    <option value="Recruitment">Executive Recruitment</option>
                    <option value="Consulting">Strategy & Advisory Project</option>
                    <option value="Networking">Professional Networking</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-semibold tracking-wider text-[#B8B8B8] uppercase">
                  Message <span className="text-[#C8A45D]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please share details about your inquiry or project opportunity..."
                  className={`w-full px-4 py-3 glass-input ${
                    errors.message ? 'border-red-500' : ''
                  } text-[#F2F0EA] text-sm rounded-sm resize-none`}
                />
                {errors.message && (
                  <span className="text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 text-xs font-semibold tracking-widest btn-glass-primary rounded-sm disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {isSending ? (
                  <span className="flex items-center gap-2">
                    <span className="flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 bg-[#080808] rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 bg-[#080808] rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-[#080808] rounded-full animate-bounce" />
                    </span>
                    <span>SENDING...</span>
                  </span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
