import React from 'react';
import { motion } from 'framer-motion';
import { History, Users2, ShieldCheck, Target } from 'lucide-react';

const About = () => {
    const governingBody = [
        { role: "Chairman", name: "Brig Gen Md Anwar Uz Zaman, PPM, ndc, afwc psc, G" },
        { role: "Principal", name: "Lt Col Muhammad Tauhid Ali, psc, G, Arty" },
        { role: "Community Leader", name: "Respected Members of Savar Cantonment" }
    ];

    return (
        <div className="pt-28 bg-spsc-navy min-h-screen">
            {/* Page Header */}
            <section className="bg-spsc-dark py-32 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://spscsdohs-edu-bd.s3.us-east-2.amazonaws.com/dws/2026/gallery/Image_IMG_4324.jpg_22-01-2026-03-49-43_s.jpg"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-8xl font-black text-spsc-white mb-6 tracking-tighter"
                    >
                        OUR <span className="text-spsc-gold">LEGACY</span>
                    </motion.h1>
                    <div className="w-24 h-2 bg-spsc-gold mx-auto mb-8 rounded-full" />
                    <p className="text-white/40 max-w-2xl mx-auto font-medium text-lg italic uppercase tracking-[0.2em]">
                        Since 2010 • Precision • integrity
                    </p>
                </div>
            </section>

            {/* History Section */}
            <section className="section-padding relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div className="inline-flex items-center gap-4 text-spsc-gold bg-spsc-gold/5 px-6 py-2 rounded-full border border-spsc-gold/20">
                                <History size={20} />
                                <span className="font-black tracking-[0.3em] uppercase text-xs">A Decade of Excellence</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-spsc-white leading-tight">Founded with Vision</h2>
                            <div className="space-y-6 text-white/60 text-lg leading-relaxed font-light">
                                <p>
                                    Sena Public School & College (SPSC), Savar DOHS, was established in 2010 under the visionary leadership of Savar Cantonment authorities. Our foundation rests on the pillars of academic rigor and moral discipline.
                                </p>
                                <p>
                                    Over the years, SPSC has transformed into a leading institution in the region, known for its commitment to holistic development and student safety.
                                </p>
                            </div>
                        </motion.div>

                        <div className="relative group">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-spsc-gold/10 blur-[80px] rounded-full" />
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-3xl transform group-hover:scale-[1.02] transition-transform duration-700">
                                <img
                                    src="https://spscsdohs-edu-bd.s3.us-east-2.amazonaws.com/dws/2025/gallery/Image_1.jpg_18-11-2025-03-04-11_s.jpg"
                                    alt="Foundation"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-spsc-dark/80 to-transparent" />
                                <div className="absolute bottom-10 left-10">
                                    <p className="text-6xl font-black text-spsc-gold italic tracking-tighter">15+</p>
                                    <p className="text-xs font-black text-white uppercase tracking-[0.5em] opacity-80 mt-2">Years of Service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision - Solid Accent Cards */}
            <section className="section-padding bg-spsc-dark/30">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="accent-card bg-spsc-navy border-l-8 border-white/5 hover:border-spsc-gold/50 transition-all duration-500"
                        >
                            <div className="w-20 h-20 bg-spsc-gold text-spsc-navy rounded-3xl flex items-center justify-center mb-10 shadow-gold-glow">
                                <Target size={40} />
                            </div>
                            <h3 className="text-3xl font-black text-spsc-white mb-6 uppercase tracking-tight">Our Mission</h3>
                            <p className="text-white/60 leading-relaxed font-light text-lg">
                                To create a stimulating learning environment where every student attains their highest potential and becomes a responsible citizen of tomorrow.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="accent-card bg-spsc-gold text-spsc-navy border-l-8 border-spsc-navy transition-all duration-500 shadow-none"
                        >
                            <div className="w-20 h-20 bg-spsc-navy text-spsc-gold rounded-3xl flex items-center justify-center mb-10">
                                <ShieldCheck size={40} />
                            </div>
                            <h3 className="text-3xl font-black text-spsc-navy mb-6 uppercase tracking-tight">Our Vision</h3>
                            <p className="text-spsc-navy/70 leading-relaxed font-bold text-lg">
                                To be a role model institution in the heart of Dhaka, recognized for precision in education and nurturing patriotic values.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Governing Body List */}
            <section className="section-padding">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-24 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black text-spsc-white mb-4 tracking-tighter">THE BOARD</h2>
                        <div className="w-16 h-1 bg-spsc-gold mx-auto rounded-full" />
                    </div>

                    <div className="max-w-5xl mx-auto grid grid-cols-1 gap-6">
                        {governingBody.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col md:flex-row justify-between items-center p-10 bg-white/5 border border-white/5 rounded-3xl hover:bg-spsc-gold group transition-all duration-500"
                            >
                                <span className="font-black text-spsc-gold group-hover:text-spsc-navy text-[10px] uppercase tracking-[0.5em] mb-4 md:mb-0 transition-colors">
                                    {member.role}
                                </span>
                                <span className="font-black text-2xl text-spsc-white group-hover:text-spsc-navy text-center md:text-right transition-colors tracking-tight">
                                    {member.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
