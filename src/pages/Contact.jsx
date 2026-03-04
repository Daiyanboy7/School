import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-28">
            <section className="bg-spsc-navy py-20 text-center relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-spsc-white mb-4"
                    >
                        Contact <span className="text-spsc-gold">Us</span>
                    </motion.h1>
                    <p className="text-spsc-white/70 max-w-2xl mx-auto">
                        We are here to assist you. Reach out to us via phone, email, or visit our campus.
                    </p>
                </div>
            </section>

            <section className="section-padding bg-spsc-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Details */}
                        <div className="space-y-8 lg:col-span-1">
                            <div className="flex items-start gap-4">
                                <div className="p-4 bg-spsc-navy text-spsc-gold rounded-xl shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-spsc-navy text-lg mb-1">Our Location</h4>
                                    <p className="text-sm text-spsc-navy/50 leading-relaxed">
                                        Savar DOHS, Savar Cantonment,<br />Dhaka, Bangladesh.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-4 bg-spsc-navy text-spsc-gold rounded-xl shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-spsc-navy text-lg mb-1">Call Us</h4>
                                    <p className="text-sm text-spsc-navy/50 leading-relaxed">
                                        +88 02229093164<br />EIIN: 134152
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-4 bg-spsc-navy text-spsc-gold rounded-xl shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-spsc-navy text-lg mb-1">Email Us</h4>
                                    <p className="text-sm text-spsc-navy/50 leading-relaxed">
                                        spsc.savarcantt@gmail.com<br />info@spscsavarcantt.edu.bd
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-4 bg-spsc-navy text-spsc-gold rounded-xl shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-spsc-navy text-lg mb-1">Office Hours</h4>
                                    <p className="text-sm text-spsc-navy/50 leading-relaxed">
                                        Sun - Thu: 08:00 AM - 02:30 PM<br />Fri - Sat: Closed
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2 bg-spsc-gray p-8 md:p-12 rounded-3xl shadow-sm border border-spsc-gold/10">
                            <h3 className="text-2xl font-bold text-spsc-navy mb-8">Send a Message</h3>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-spsc-navy/60 uppercase tracking-widest">Full Name</label>
                                    <input type="text" className="w-full p-4 rounded-xl border border-transparent focus:border-spsc-gold/50 focus:outline-none bg-spsc-white text-spsc-navy" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-spsc-navy/60 uppercase tracking-widest">Email Address</label>
                                    <input type="email" className="w-full p-4 rounded-xl border border-transparent focus:border-spsc-gold/50 focus:outline-none bg-spsc-white text-spsc-navy" placeholder="john@example.com" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-xs font-bold text-spsc-navy/60 uppercase tracking-widest">Subject</label>
                                    <input type="text" className="w-full p-4 rounded-xl border border-transparent focus:border-spsc-gold/50 focus:outline-none bg-spsc-white text-spsc-navy" placeholder="Admission Query" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-xs font-bold text-spsc-navy/60 uppercase tracking-widest">Message</label>
                                    <textarea rows="5" className="w-full p-4 rounded-xl border border-transparent focus:border-spsc-gold/50 focus:outline-none bg-spsc-white text-spsc-navy" placeholder="How can we help you?"></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <button className="btn-primary w-full flex items-center justify-center gap-3">
                                        Submit Message <Send size={18} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[400px] bg-spsc-navy w-full relative">
                <div className="absolute inset-0 grayscale contrast-125 opacity-40">
                    <img src="https://spscsavarcantt.edu.bd/assets/img/logo.png" alt="SPSC Logo" className="w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
                </div>
                <div className="container mx-auto h-full flex items-center justify-center relative z-10">
                    <div className="text-center p-8 glass-card border-spsc-gold/20">
                        <MapPin size={48} className="text-spsc-gold mx-auto mb-4" />
                        <h4 className="text-spsc-white font-bold mb-2">Savar DOHS, Dhaka</h4>
                        <p className="text-spsc-white/50 text-xs mb-6">Experience our campus in person.</p>
                        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-outline text-xs py-2 px-6">Open in Maps</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
