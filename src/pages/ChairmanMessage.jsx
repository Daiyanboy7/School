import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChairmanMessage = () => {
    return (
        <div className="pt-32 pb-20 bg-spsc-navy min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link to="/" className="inline-flex items-center gap-2 text-spsc-gold hover:text-white transition-colors mb-12 font-bold uppercase tracking-widest text-xs">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="accent-card p-12 md:p-20 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                        <Quote size={200} className="text-spsc-gold" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 items-center mb-16 border-b border-white/10 pb-12">
                        <div className="relative shrink-0">
                            <div className="absolute inset-0 bg-spsc-gold blur-2xl opacity-20" />
                            <img
                                src="/leadership/chairman.png"
                                alt="Chairman"
                                className="w-48 h-48 rounded-3xl border-4 border-spsc-gold object-cover relative z-10 shadow-2xl"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-black text-spsc-white mb-4 tracking-tighter uppercase">
                                Chairman's <span className="text-spsc-gold">Message</span>
                            </h1>
                            <p className="text-spsc-gold font-black tracking-[0.3em] uppercase text-xs mb-2">Md Anwar Uz Zaman, PPM, ndc, afwc psc, G</p>
                            <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Chairman, Sena Public School and College</p>
                        </div>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/70 leading-relaxed font-light italic">
                        <p>
                            It’s my utmost pleasure that at Sena Public School & College (SPSC), we have been successful to run a quick-witted website since very early commencement of our institution in the new location of DOHS area, Savar Cantt.
                        </p>
                        <p>
                            The introduction of web-based communication system is a time-honored decision taken by the school and college authority. It will facilitate the triangular relationship among the teachers, students and the guardians. It will act as the mirror of the institution where students, teachers, guardians and well-wishers will have easy access.
                        </p>
                        <p>
                            We know that today’s society is a knowledge-based society. To serve this purpose, this dynamic Web-site will inspire the pupils to use internet and they will enrich themselves with the latest information and up to date findings in the field of education.
                        </p>
                        <p>
                            This site upholds the results of all exams. The news of extracurricular activities inspires the students to grow their interest in every aspect. The attempt of making the Prospectus, Application Forms, Results, Notices and the other related issues-all are available through this site.
                        </p>
                        <p>
                            Sena Public School & College is marching forward with the modern world by keeping abreast of the information technology. I heartily welcome the attempt of building up a promising and science minded nation.
                        </p>
                        <p>
                            I would like to extend my heartfelt thanks to the Principal LT COL MUHAMMAD TAUHID ALI for taking such great initiative and all the faculty members, students and employees of Sena Public School & College for keeping up a praiseworthy position of the institution.
                        </p>
                    </div>

                    <div className="mt-20 pt-10 border-t border-white/5 flex flex-col items-end">
                        <p className="text-spsc-gold font-black text-xl mb-1">Md Anwar Uz Zaman</p>
                        <p className="text-white/40 text-[10px] uppercase font-bold tracking-[0.3em]">Chairman • Savar Cantt</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ChairmanMessage;
