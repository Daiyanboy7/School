import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrincipalMessage = () => {
    return (
        <div className="pt-32 pb-20 bg-spsc-navy min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link to="/" className="inline-flex items-center gap-2 text-spsc-gold hover:text-white transition-colors mb-12 font-bold uppercase tracking-widest text-xs">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="accent-card p-12 md:p-20 relative overflow-hidden bg-gradient-to-br from-spsc-navy-light to-spsc-navy"
                >
                    <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                        <Quote size={200} className="text-spsc-gold" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 items-center mb-16 border-b border-white/10 pb-12">
                        <div className="relative shrink-0">
                            <div className="absolute inset-0 bg-spsc-gold blur-2xl opacity-20" />
                            <img
                                src="/leadership/principal.png"
                                alt="Principal"
                                className="w-48 h-48 rounded-3xl border-4 border-spsc-gold object-cover relative z-10 shadow-2xl"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-black text-spsc-white mb-4 tracking-tighter uppercase">
                                Principal's <span className="text-spsc-gold">Message</span>
                            </h1>
                            <p className="text-spsc-gold font-black tracking-[0.3em] uppercase text-xs mb-2">LT COL MUHAMMAD TAUHID ALI, psc, G, Arty</p>
                            <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Principal, Sena Public School and College</p>
                        </div>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/70 leading-relaxed font-light italic">
                        <p>
                            Having been entrusted with the responsibility of the Principal of Sena Public School and College, I look forward to establishing the institution as a role model in imparting quality education. SPSC is a newly established institution in Savar Cantonment that launched its academic functions since 2010.
                        </p>
                        <p>
                            Within a very short span of time, the institution has been acknowledged for its outstanding academic results and a good number of appreciable achievements in the field of co-curricular activities.
                        </p>
                        <p>
                            In keeping pace with the progressive world of information and technology, our newly launched website will accelerate close interaction among teachers, students, guardians and administration. We will be able to swiftly send our institution’s messages, notices, events, exam results to our target students and guardians through our web activities.
                        </p>
                        <p>
                            I always put much emphasis on a triangular relationship among the teacher, students and the guardians. Moreover, much emphasis is given on classroom activities. Along with the regular studies, SPSC offers a wide range of extra curricular activities. We take much care in building capacity among our staff and community.
                        </p>
                        <p>
                            I feel pleased with all the industrious teachers and staff for their relentless hard work for keeping and upholding the glorious position of the institution. I hope the newly introduced website will carry the glorious image of the institution.
                        </p>
                        <p>
                            Above all, I would like to extend my heartiest thanks and gratitude to the Chief Patron and the Chairman of Governing Body for their wholehearted support. We look forward to receiving the same sort of support from all corners in future.
                        </p>
                    </div>

                    <div className="mt-20 pt-10 border-t border-white/5 flex flex-col items-end">
                        <p className="text-spsc-gold font-black text-xl mb-1">LT COL MUHAMMAD TAUHID ALI</p>
                        <p className="text-white/40 text-[10px] uppercase font-bold tracking-[0.3em]">Principal • SPSC</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrincipalMessage;
