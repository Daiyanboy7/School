import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, GraduationCap, Beaker, ShieldCheck, Cpu, Trophy, ArrowRight, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const Counter = ({ end, duration = 2000, label, icon: Icon }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return (
        <div className="flex flex-col items-center p-6 accent-card group hover:translate-y-[-8px] transition-all duration-500">
            <div className="p-4 bg-spsc-gold/10 rounded-2xl mb-4 text-spsc-gold group-hover:bg-spsc-gold group-hover:text-spsc-navy transition-all duration-300">
                <Icon size={40} />
            </div>
            <span className="text-4xl font-black mb-1 text-spsc-white tracking-tighter">{count}+</span>
            <span className="text-spsc-gold uppercase text-[10px] tracking-[0.2em] font-black opacity-80">{label}</span>
        </div>
    );
};

const Home = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

    const notices = [
        { date: "03 Mar", title: "শিক্ষক-কর্মচারীর লিখিত পরীক্ষার ফলাফল (ফেব্রুয়ারী)-২০২৬", url: "https://spscsdohs-edu-bd.s3.us-east-2.amazonaws.com/dws/2026/notice/Notice_**%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%95-%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%AE%E0%A6%9A%E0%A6%BE%E0%A6%B0%E0%A7%80%E0%A6%B0%20%E0%A6%B2%E0%A6%BF%E0%A6%96%E0%A6%BF%E0%A6%A4%20%E0%A6%AA%E0%A6%B0%E0%A7%80%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BE%E0%A6%B0%20%E0%A6%AB%E0%A6%B2%E0%A6%BE%E0%A6%AB%E0%A6%B2%20**_03-03-2026-11-51-50_s.pdf" },
        { date: "26 Feb", title: "নিয়োগ বিজ্ঞপ্তি-২ (ফেব্রুয়ারী)-২০২৬", url: "https://spscsdohs-edu-bd.s3.us-east-2.amazonaws.com/dws/2026/notice/Notice_**%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A7%8B%E0%A6%97%20%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A7%8D%E0%A6%9E%E0%A6%AA%E0%A7%8D%E0%A6%A4%E0%A6%BF-%E0%A7%A8%20(%E0%A6%AB%E0%A7%87%E0%A6%AC%E0%A7%8D%E0%A6%B0%E0%A7%81%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B0%E0%A7%80)-%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%AC**_27-02-2026-09-28-19_s.pdf" },
        { date: "17 Feb", title: "শহিদ দিবস ও আন্তর্জাতিক মাতৃভাষা দিবস -২০২৬ উদ্‌যাপন", url: "https://spscsdohs-edu-bd.s3.us-east-2.amazonaws.com/dws/2026/notice/Notice_%E0%A6%B6%E0%A6%B9%E0%A7%80%E0%A6%A6%20%E0%A6%A6%E0%A6%BF%E0%A6%AC%E0%A6%B8%20%E0%A6%93%20%E0%A6%86%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%B0%E0%A7%8D%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A6%BF%E0%A6%95%20%E0%A6%AE%E0%A6%BE%E0%A6%A4%E0%A7%83%E0%A6%AD%E0%A6%BE%E0%A6%B7%E0%A6%BE%20%E0%A6%A6%E0%A6%BF%E0%A6%AC%E0%A6%B8%20-%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%AC%20%E0%A6%89%E0%A6%A6%E0%A6%AF%E0%A6%BE%E0%A6%AA%E0%A6%A8_17-02-2026-05-00-57_s.pdf" },
        { date: "16 Feb", title: "নিয়োগ বিজ্ঞপ্তি (ফেব্রুয়ারী) -২০২৬", url: "https://spscsdohs-edu-bd.s3.us-east-2.amazonaws.com/dws/2026/notice/Notice_**%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A7%8B%E0%A6%97%20%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A7%8D%E0%A6%9E%E0%A6%AA%E0%A7%8D%E0%A6%A4%E0%A6%BF%20-%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%AC**_16-02-2026-03-38-19_s.pdf" },
        { date: "16 Feb", title: "কর্মচারী নিয়োগ বিজ্ঞপ্তি (খণ্ডকালীন)-২০২৬", url: "https://spscsdohs-edu-bd.s3.us-east-2.amazonaws.com/dws/2026/notice/Notice_**%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%AE%E0%A6%9A%E0%A6%BE%E0%A6%B0%E0%A7%80%20%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A7%8B%E0%A6%97%20%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A7%8D%E0%A6%9E%E0%A6%AA%E0%A7%8D%E0%A6%A4%E0%A6%BF%20(%E0%A6%96%E0%A6%A3%E0%A7%8D%E0%A6%A1%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%80%E0%A6%A8)-%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%AC**_07-01-2026-03-01-45_s.pdf" },
    ];

    const features = [
        {
            title: "Safety & Security",
            desc: "24/7 CCTV surveillance and RO water treatment plant certified by ICDDR,B.",
            icon: ShieldCheck
        },
        {
            title: "Smart Campus",
            desc: "Digital smart labs, ICT facilities, and 350KV power backup for uninterrupted learning.",
            icon: Cpu
        },
        {
            title: "Sports & Excellence",
            desc: "BNCC, Scouting, and modern sports facilities including a high-grade cricket pitch.",
            icon: Trophy
        }
    ];

    return (
        <div className="bg-spsc-navy overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ scale }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="https://spscsdohs-edu-bd.s3.us-east-2.amazonaws.com/dws/2026/gallery/Image_IMG_4324.jpg_22-01-2026-03-49-43_s.jpg"
                        alt="Campus"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-spsc-dark/80 via-spsc-navy/40 to-spsc-navy" />
                </motion.div>

                <div className="container mx-auto px-4 z-10 text-center pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-spsc-gold font-black tracking-[0.5em] uppercase text-xs mb-6 block lg:text-sm">
                            EIIN: 134152 • Savar DOHS
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black text-spsc-white mb-8 leading-none tracking-tighter text-shadow-premium">
                            SENA PUBLIC<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-spsc-gold to-spsc-gold-light">SCHOOL & COLLEGE</span>
                        </h1>
                        <p className="text-spsc-white/60 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light italic">
                            "Honesty, Knowledge, Patriotism — Nurturing future leaders with precision and moral integrity."
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a href="https://vortibd.com/institute/125/298" target="_blank" rel="noreferrer" className="btn-primary group">
                                Admission 2026
                            </a>
                            <Link to="/about" className="btn-outline">
                                Institutional Profile
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Accent Decoration */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-spsc-gold/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-spsc-gold/10 blur-[120px] rounded-full" />
            </section>

            {/* Notice & Stats Area */}
            <section className="relative z-20 mb-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Stats */}
                        <div className="lg:col-span-8 flex flex-col gap-8">
                            {/* Stats */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                <Counter end={2797} label="Current Students" icon={Users} />
                                <Counter end={131} label="Current Teachers" icon={GraduationCap} />
                                <Counter end={1} label="Officer" icon={ShieldCheck} />
                                <Counter end={76} label="Staffs" icon={Users} />
                            </div>

                            {/* Feature Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Our Journey",
                                        img: "/journey.jpg",
                                        desc: "Sena Public School and College, established in 2010, has been a role model in Savar DOHS.",
                                        link: "/about"
                                    },
                                    {
                                        title: "Academic Excellence",
                                        img: "/excellence.png",
                                        desc: "A glimpse of the board exam results showcasing our commitment to educational brilliance.",
                                        link: "/academics"
                                    },
                                    {
                                        title: "Extra Curricular Activities",
                                        img: "/activities.jpg",
                                        desc: "BNCC, Scouting, and modern sports facilities for the holistic development of our students.",
                                        link: "/activities"
                                    },
                                    {
                                        title: "Our Publication",
                                        img: "/publication.png",
                                        desc: "Kolahal: Our national award-winning magazine reflecting student creativity.",
                                        link: "/publication"
                                    }
                                ].map((card, idx) => (
                                    <div key={idx} className="group overflow-hidden rounded-2xl bg-spsc-navy-light/40 border border-white/5 hover:border-spsc-gold/30 transition-all duration-500 flex flex-col">
                                        <div className="aspect-video overflow-hidden">
                                            <img
                                                src={card.img}
                                                alt={card.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h4 className="text-xl font-black text-spsc-white mb-2 group-hover:text-spsc-gold transition-colors">{card.title}</h4>
                                            <p className="text-xs text-spsc-white/60 mb-6 leading-relaxed line-clamp-2">
                                                {card.desc}
                                            </p>
                                            <Link to={card.link} className="text-spsc-gold font-black uppercase tracking-[0.2em] text-[10px] hover:text-white transition-colors flex items-center gap-2">
                                                View Details <ArrowRight size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Notice Board Side */}
                        <motion.div
                            id="notices"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-4 accent-card shadow-gold-glow"
                        >
                            <h3 className="flex items-center gap-3 text-spsc-gold font-black mb-8 border-b border-spsc-gold/20 pb-4">
                                <Bell size={24} /> LATEST NOTICES
                            </h3>
                            <div className="space-y-8">
                                {notices.map((notice, i) => (
                                    <a
                                        key={i}
                                        href={notice.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex flex-col items-start gap-1"
                                    >
                                        <span className="inline-block px-2 py-1 bg-spsc-gold/10 text-spsc-gold font-black text-[10px] uppercase tracking-widest rounded">
                                            {notice.date}
                                        </span>
                                        <p className="text-sm font-bold text-spsc-white/90 group-hover:text-spsc-gold transition-colors leading-snug">
                                            {notice.title}
                                        </p>
                                    </a>
                                ))}
                            </div>
                            <button className="w-full mt-10 pt-6 border-t border-spsc-gold/10 text-[10px] text-spsc-gold font-black uppercase tracking-[0.3em] hover:text-white transition-colors">
                                Explore All Announcements
                            </button>

                            {/* Video Link */}
                            <div className="mt-8 rounded-xl overflow-hidden shadow-2xl border border-spsc-gold/20 aspect-video">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/u5HCX2Uz2aQ"
                                    title="SPSC Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Leadership Messages Section */}
            <section className="py-20 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Chairman Message */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="accent-card flex flex-col items-center text-center p-12 bg-spsc-navy-light/40 border border-white/5 shadow-2xl group hover:border-spsc-gold/30 transition-all duration-500"
                        >
                            <div className="relative mb-8">
                                <div className="absolute inset-0 bg-spsc-gold blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                                <img
                                    src="/leadership/chairman.png"
                                    alt="Chairman"
                                    className="w-32 h-32 rounded-full border-4 border-spsc-gold object-cover relative z-10"
                                />
                            </div>
                            <h3 className="text-2xl font-black text-spsc-white mb-2 uppercase tracking-tight">Message from Chairman</h3>
                            <div className="w-12 h-1 bg-spsc-gold mb-6 rounded-full" />
                            <p className="text-white/60 text-sm leading-relaxed mb-8 italic">
                                "It's my utmost pleasure that at Sena Public School & College (SPSC), we have curated an environment where discipline meets academic brilliance..."
                            </p>
                            <Link to="/chairman-message" className="text-spsc-gold font-black uppercase tracking-[0.2em] text-[10px] hover:text-white transition-colors flex items-center gap-2">
                                Read More <ArrowRight size={14} />
                            </Link>
                        </motion.div>

                        {/* Principal Message */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="accent-card flex flex-col items-center text-center p-12 bg-spsc-navy-light/40 border border-white/5 shadow-2xl group hover:border-spsc-gold/30 transition-all duration-500"
                        >
                            <div className="relative mb-8">
                                <div className="absolute inset-0 bg-spsc-gold blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                                <img
                                    src="/leadership/principal.png"
                                    alt="Principal"
                                    className="w-32 h-32 rounded-full border-4 border-spsc-gold object-cover relative z-10"
                                />
                            </div>
                            <h3 className="text-2xl font-black text-spsc-white mb-2 uppercase tracking-tight">Message from Principal</h3>
                            <div className="w-12 h-1 bg-spsc-gold mb-6 rounded-full" />
                            <p className="text-white/60 text-sm leading-relaxed mb-8 italic">
                                "Having been entrusted with the responsibility of the Principal of Sena Public School, my goal is to nurture patriotism through knowledge..."
                            </p>
                            <Link to="/principal-message" className="text-spsc-gold font-black uppercase tracking-[0.2em] text-[10px] hover:text-white transition-colors flex items-center gap-2">
                                Read More <ArrowRight size={14} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Leadership Messaging */}
            <section className="section-padding relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 relative group"
                        >
                            <div className="absolute inset-0 bg-spsc-gold/20 rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-700" />
                            <div className="relative overflow-hidden rounded-3xl border border-spsc-gold/20">
                                <img
                                    src="https://spscsdohs-edu-bd.s3.us-east-2.amazonaws.com/dws/2026/gallery/Image_IMG_7916.jpg_22-01-2026-03-56-10_s.jpg"
                                    alt="Principal"
                                    className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000 aspect-video object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-6 p-8 bg-spsc-white text-spsc-navy rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-xs scale-90 md:scale-100">
                                <p className="text-sm italic font-medium mb-4 leading-relaxed line-clamp-3">
                                    "Establishing SPSC as a role model and accelerating close interaction among the community."
                                </p>
                                <h4 className="font-black text-xs uppercase tracking-widest text-spsc-navy">LT COL TAUHID ALI</h4>
                                <p className="text-spsc-gold text-[10px] font-bold uppercase mt-1">PRINCIPAL • SPSC</p>
                            </div>
                        </motion.div>

                        <div className="lg:col-span-7 space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-6xl font-black text-spsc-white leading-tight">
                                    Visionary <span className="text-spsc-gold">Governance</span>
                                </h2>
                                <div className="w-20 h-2 bg-spsc-gold rounded-full" />
                                <p className="text-spsc-white/60 text-lg leading-relaxed font-light italic border-l-4 border-spsc-gold/30 pl-6">
                                    "SPSC is marching forward with the modern world by keeping abreast of information technology and excellence."
                                </p>
                                <div className="pt-4">
                                    <h4 className="font-black text-2xl text-spsc-gold">Brig Gen Md Anwar Uz Zaman</h4>
                                    <p className="text-spsc-white/40 uppercase text-xs tracking-[0.3em] mt-1 font-bold">Chairman, Governing Body</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-6 bg-spsc-white/5 border border-white/5 rounded-2xl hover:bg-spsc-white/10 transition-colors">
                                    <h5 className="font-bold text-spsc-gold mb-3 uppercase text-xs tracking-widest">Leadership</h5>
                                    <p className="text-sm text-spsc-white/60 leading-relaxed">Military-run discipline ensures a focused and safe environment for every student.</p>
                                </div>
                                <div className="p-6 bg-spsc-white/5 border border-white/5 rounded-2xl hover:bg-spsc-white/10 transition-colors">
                                    <h5 className="font-bold text-spsc-gold mb-3 uppercase text-xs tracking-widest">Innovation</h5>
                                    <p className="text-sm text-spsc-white/60 leading-relaxed">Integrated ICT and smart labs prepare our pupils for the 21st-century technological landscape.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities Grid */}
            <section className="section-padding bg-spsc-dark/50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black text-spsc-white">Premier Facilities</h2>
                        <p className="text-spsc-white/40 font-medium">Equipped with state-of-the-art infrastructure for a holistic development.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="p-10 rounded-3xl bg-spsc-navy-light text-center group hover:bg-spsc-gold transition-all duration-700 shadow-2xl"
                            >
                                <div className="w-16 h-16 mx-auto bg-spsc-gold text-spsc-navy rounded-2xl flex items-center justify-center mb-8 group-hover:bg-spsc-navy group-hover:text-spsc-gold transition-colors shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 group-hover:text-spsc-navy transition-colors">{feature.title}</h3>
                                <p className="text-spsc-white/50 text-sm leading-relaxed group-hover:text-spsc-navy/70 transition-colors">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact & Map Section */}
            <section className="section-padding bg-spsc-navy">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black text-spsc-white">Find <span className="text-spsc-gold">Us</span></h2>
                        <p className="text-spsc-white/40 font-medium">We are located at Savar Cantonment, Dhaka. Come visit us anytime.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                        {/* Google Map */}
                        <div className="rounded-3xl overflow-hidden border border-spsc-gold/20 shadow-2xl h-96 lg:h-auto min-h-[380px]">
                            <iframe
                                title="SPSC Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.8423699996843!2d90.2589963!3d23.9164329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e92e1e3ce4b1%3A0x597270a8bb3fb70b!2sSena%20Public%20School%20and%20College!5e0!3m2!1sen!2sbd!4v1709578000000!5m2!1sen!2sbd"
                                className="w-full h-full border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Contact Info Card */}
                        <div className="bg-spsc-gold rounded-3xl p-10 flex flex-col justify-center gap-8 shadow-2xl">
                            <h3 className="text-spsc-navy text-3xl font-black uppercase tracking-wider border-b-2 border-spsc-navy/20 pb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-spsc-navy/60 text-xs font-bold uppercase tracking-widest mb-1">Phone Number</p>
                                    <p className="text-spsc-navy font-black text-lg">02229093164</p>
                                </div>
                                <div>
                                    <p className="text-spsc-navy/60 text-xs font-bold uppercase tracking-widest mb-1">Email Address</p>
                                    <p className="text-spsc-navy font-black text-lg">spsc.savarcantt@gmail.com</p>
                                </div>
                                <div>
                                    <p className="text-spsc-navy/60 text-xs font-bold uppercase tracking-widest mb-1">Our Address</p>
                                    <p className="text-spsc-navy font-black text-lg leading-snug">Sena Public School & College,<br />Savar DOHS, Dhaka</p>
                                </div>
                                <div>
                                    <p className="text-spsc-navy/60 text-xs font-bold uppercase tracking-widest mb-1">Institutional Codes</p>
                                    <p className="text-spsc-navy font-bold text-sm">School Code: 1562 &nbsp;|&nbsp; EIIN: 134152 &nbsp;|&nbsp; MPO Code: 13415212</p>
                                </div>
                                <div>
                                    <p className="text-spsc-navy/60 text-xs font-bold uppercase tracking-widest mb-1">Website</p>
                                    <a href="https://spscsavarcantt.edu.bd" target="_blank" rel="noreferrer" className="text-spsc-navy font-black text-lg hover:underline">spscsavarcantt.edu.bd</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Call to Action */}
            <section className="py-24 bg-gradient-to-r from-spsc-gold to-spsc-gold-light">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-black text-spsc-navy mb-4">Ready to start your journey?</h2>
                        <p className="text-spsc-navy/60 font-medium">Join the SPSC family and secure a pathway to excellence.</p>
                    </div>
                    <a href="https://vortibd.com/institute/125/298" target="_blank" rel="noreferrer" className="px-12 py-5 bg-spsc-navy text-spsc-gold font-black uppercase tracking-[0.2em] rounded-2xl flex items-center gap-4 hover:bg-spsc-dark transition-colors shadow-2xl active:scale-95">
                        Admission <ArrowRight />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
