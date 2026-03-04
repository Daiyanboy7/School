import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, School, Award, CheckCircle2, FlaskConical, Library, Bus, Heart } from 'lucide-react';

const Academics = () => {
    const categories = [
        {
            title: "Schooling Division",
            subtitle: "Nursery - Grade 10",
            icon: School,
            items: ["Bengali & English Versions", "Foundational Science & Arts", "Extensive S.T.E.A.M. Focus", "Board Performance Mastery"]
        },
        {
            title: "College Faculty",
            subtitle: "Higher Secondary (11-12)",
            icon: BookOpen,
            items: ["Advanced Science Research", "Global Business Studies", "Strategic Humanities", "Medical/Engineering Tracks"]
        }
    ];

    const facilities = [
        { name: "Neuro-Labs", icon: FlaskConical, desc: "High-spec specialized laboratories." },
        { name: "Global Library", icon: Library, desc: "Digital and physical knowledge hubs." },
        { name: "Cantonment Logistics", icon: Bus, desc: "Safe and secure board transport." },
        { name: "Tactical Care", icon: Heart, desc: "24/7 Medical support & first aid." }
    ];

    return (
        <div className="pt-28 bg-spsc-navy min-h-screen">
            <section className="bg-spsc-dark py-32 text-center relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-black text-spsc-white mb-6 uppercase tracking-tighter"
                    >
                        ACADEMIC <span className="text-spsc-gold">FACULTIES</span>
                    </motion.h1>
                    <p className="text-white/40 max-w-2xl mx-auto font-bold tracking-[0.2em] uppercase text-xs border-y border-white/5 py-4">
                        Curriculum Excellence • Scientific approach
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="p-16 rounded-[40px] bg-spsc-white/5 border-2 border-transparent hover:border-spsc-gold/50 transition-all duration-700 group hover:bg-spsc-white/10"
                            >
                                <div className="w-20 h-20 bg-spsc-gold text-spsc-navy rounded-[24px] flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform shadow-gold-glow">
                                    <cat.icon size={40} />
                                </div>
                                <h3 className="text-4xl font-black text-spsc-white mb-2">{cat.title}</h3>
                                <p className="text-spsc-gold font-black text-xs tracking-[0.4em] uppercase mb-10 opacity-70 border-b border-spsc-gold/20 pb-4 inline-block">{cat.subtitle}</p>
                                <ul className="space-y-6">
                                    {cat.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-4 text-white/70 font-medium text-lg">
                                            <CheckCircle2 size={24} className="text-spsc-gold shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-spsc-dark">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-black mb-20 text-spsc-gold uppercase tracking-tighter">TACTICAL INFRASTRUCTURE</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {facilities.map((fac, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-10 rounded-3xl bg-white/5 border border-white/5 hover:bg-spsc-gold hover:text-spsc-navy transition-all duration-500 group"
                            >
                                <div className="w-14 h-14 bg-spsc-navy text-spsc-gold rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-spsc-navy group-hover:scale-110 transition-all">
                                    <fac.icon size={28} />
                                </div>
                                <h4 className="font-extrabold text-xl mb-4 uppercase tracking-tight">{fac.name}</h4>
                                <p className="text-xs text-white/40 leading-relaxed font-bold group-hover:text-spsc-navy/60">{fac.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-spsc-navy">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                        <div className="lg:col-span-12 text-center mb-12">
                            <h2 className="text-5xl md:text-7xl font-black text-spsc-white tracking-tighter">BEYOND <span className="text-spsc-gold">CLASSROOMS</span></h2>
                            <p className="text-white/40 mt-4 text-lg font-bold uppercase tracking-widest italic">Character • Discipline • Courage</p>
                        </div>

                        <div className="lg:col-span-6 relative rounded-[40px] overflow-hidden border border-white/10 group shadow-2xl">
                            <img
                                src="https://spscsdohs-edu-bd.s3.us-east-2.amazonaws.com/dws/2026/gallery/Image_IMG_7916.jpg_22-01-2026-03-56-10_s.jpg"
                                alt="Activities"
                                className="w-full grayscale hover:grayscale-0 transition-all duration-1000 aspect-video object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-spsc-dark/80 to-transparent flex items-bottom p-10">
                                <div className="mt-auto">
                                    <p className="text-spsc-gold font-black text-xs uppercase tracking-[0.5em] mb-2">Programs</p>
                                    <h4 className="text-3xl font-black text-white">BNCC & SCOUTING</h4>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-6 space-y-12">
                            <p className="text-white/60 text-xl font-light leading-relaxed border-l-8 border-spsc-gold pl-10">
                                Precision in physical training and character development. Our students lead through service in the BNCC, Scouting, and Red Crescent programs.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {["Debating Society", "Sports Arena", "Cultural Club", "Sci-Tech Hub"].map((item, i) => (
                                    <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-3xl hover:bg-spsc-gold hover:text-spsc-navy transition-all duration-300 transform hover:translate-x-4">
                                        <span className="font-black uppercase text-sm tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Academics;
