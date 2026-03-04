import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, FileText, Info, CalendarCheck, ArrowRight } from 'lucide-react';

const Admission = () => {
    const steps = [
        { title: "Collect Prospectus", desc: "Available at the school office during admission season." },
        { title: "Entrance Exam", desc: "Written test covering core subjects based on grade levels." },
        { title: "Viva Voce", desc: "Interactive session with students and guardians." },
        { title: "Final Enrollment", desc: "Documentation and fee submission for confirmed seats." }
    ];

    return (
        <div className="pt-28">
            <section className="bg-spsc-navy py-20 text-center relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-spsc-white mb-4"
                    >
                        Join <span className="text-spsc-gold">SPSC</span>
                    </motion.h1>
                    <p className="text-spsc-white/70 max-w-2xl mx-auto">
                        Take the first step towards a bright and disciplined future. Admission for Session 2026 is starting soon.
                    </p>
                </div>
            </section>

            <section className="section-padding bg-spsc-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Admission Info */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-spsc-navy mb-8 flex items-center gap-3">
                                    <Info className="text-spsc-gold" /> General Information
                                </h2>
                                <div className="prose prose-spsc text-spsc-navy/70 leading-relaxed space-y-6">
                                    <p>
                                        Sena Public School & College invites applications for various classes from Nursery to Class 9 (School) and Class 11 (College). Admissions are purely based on merit and the availability of seats.
                                    </p>
                                    <div className="p-6 bg-spsc-gray border-l-4 border-spsc-gold rounded-r-xl">
                                        <p className="font-bold text-spsc-navy mb-2">Required Documents:</p>
                                        <ul className="list-disc pl-5 text-sm space-y-2">
                                            <li>Attested copies of Birth Certificate</li>
                                            <li>Previous Academic Transcripts / Transfer Certificate</li>
                                            <li>Passport sized photographs of student and guardians</li>
                                            <li>NID copies of guardians</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-spsc-navy mb-8 flex items-center gap-3">
                                    <ClipboardCheck className="text-spsc-gold" /> Selection Process
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {steps.map((step, i) => (
                                        <div key={i} className="p-6 rounded-2xl border border-spsc-gray hover:border-spsc-gold/30 transition-colors group">
                                            <span className="text-3xl font-black text-spsc-gold group-hover:opacity-100 opacity-20 transition-opacity">0{i + 1}</span>
                                            <h4 className="font-bold text-spsc-navy text-lg mb-2">{step.title}</h4>
                                            <p className="text-xs text-spsc-navy/50 leading-relaxed">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA/Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-spsc-navy p-8 rounded-3xl text-spsc-white shadow-2xl">
                                <CalendarCheck size={40} className="text-spsc-gold mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Session 2026</h3>
                                <p className="text-spsc-white/60 text-sm mb-8">
                                    Admissions for the upcoming session are expected to open in late 2025. Stay tuned for official notices.
                                </p>
                                <div className="space-y-4">
                                    <a href="https://vortibd.com/institute/125/298" target="_blank" rel="noreferrer" className="btn-primary block text-center w-full text-sm">Online Admission</a>
                                    <button className="btn-outline w-full text-sm border-white/20 text-white hover:bg-white hover:text-spsc-navy">Online Inquiry</button>
                                </div>
                            </div>

                            <div className="p-8 bg-spsc-gold/5 border border-spsc-gold/20 rounded-3xl">
                                <h4 className="font-bold text-spsc-navy mb-4">Contact Admission Office</h4>
                                <p className="text-xs text-spsc-navy/60 mb-6 leading-relaxed">For any queries regarding the admission process, please contact us directly.</p>
                                <div className="text-xs font-bold text-spsc-navy flex flex-col gap-2">
                                    <span>Phone: 02229093164</span>
                                    <span>Email: spsc.savarcantt@gmail.com</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Admission;
