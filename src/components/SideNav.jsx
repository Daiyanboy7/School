import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Info, FlaskConical, Users, Bell, Image, MessageSquare, GraduationCap } from 'lucide-react';
import { cn } from '../lib/utils';

const SideNav = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const menuItems = [
        {
            name: 'About Us',
            icon: Info,
            hasDropdown: true,
            options: ['Mission', 'Vision', 'At a Glance', 'Successes', 'Governing Body', 'Achievements', 'Oath']
        },
        {
            name: 'Facilities',
            icon: FlaskConical,
            hasDropdown: true,
            options: ['Classrooms', 'Chemistry Lab', 'Biology Lab', 'ICT Lab', 'Physics Lab', 'Mathematics Lab', 'Go to Library', 'Transportation', 'Playground', 'Auditorium', 'Parents waiting room', 'Canteen', 'Other']
        },
        {
            name: 'Club',
            icon: Users,
            hasDropdown: true,
            options: ['Debate Club', 'Science Club', 'Cultural and Music Club', 'Sports Club', 'Math Club', 'General Knowledge Club', 'Literature Club', 'Language Club', 'Drawing Club', 'ICT Club', 'Defence Club', 'Social Welfare Club']
        },
        { name: 'Notice', icon: Bell, hasDropdown: false, path: '#notices' },
        {
            name: 'Gallery',
            icon: Image,
            hasDropdown: true,
            options: ['Photo Gallery', 'Video Gallery', '360 Degree View']
        },
        {
            name: 'Feedback',
            icon: MessageSquare,
            hasDropdown: true,
            options: ['Guardian', 'Students']
        },
        {
            name: 'Alumni',
            icon: GraduationCap,
            hasDropdown: true,
            options: ['Alumni', 'Events', 'Gallery']
        },
    ];

    return (
        <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-4">
            <div className="bg-spsc-dark/80 backdrop-blur-2xl border border-white/10 rounded-full py-6 px-3 shadow-2xl flex flex-col gap-6 items-center">
                {menuItems.map((item) => (
                    <div
                        key={item.name}
                        className="relative group"
                        onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <a
                            href={item.path || '#'}
                            onClick={(e) => {
                                if (item.path?.startsWith('#')) {
                                    e.preventDefault();
                                    const element = document.getElementById(item.path.substring(1));
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }
                            }}
                            className={cn(
                                "p-3 rounded-full transition-all duration-300 flex items-center justify-center relative",
                                activeDropdown === item.name
                                    ? "bg-spsc-gold text-spsc-navy scale-110"
                                    : "text-spsc-white/60 hover:text-spsc-gold hover:bg-white/5"
                            )}
                        >
                            <item.icon size={22} />

                            {/* Tooltip */}
                            <div className="absolute right-full mr-4 px-3 py-1 bg-spsc-dark border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                {item.name}
                            </div>
                        </a>

                        <AnimatePresence>
                            {activeDropdown === item.name && item.hasDropdown && (
                                <motion.div
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    className="absolute right-full mr-6 top-0 w-48 bg-spsc-dark/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-2"
                                >
                                    <div className="px-4 py-2 border-b border-white/5 mb-2">
                                        <p className="text-[10px] font-black text-spsc-gold uppercase tracking-widest">{item.name}</p>
                                    </div>
                                    {item.options.map((opt) => (
                                        <button
                                            key={opt}
                                            className="block w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-spsc-gold hover:bg-white/5 rounded-xl transition-all"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}

                {/* Pay Now Button Inside Capsule */}
                <div className="pt-4 border-t border-white/10 w-full flex flex-col items-center">
                    <a
                        href="https://portal2sandbox.cloudcampus24.com/home?redirectURL=%2Ffees-payment"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-spsc-gold text-spsc-navy font-black text-[9px] uppercase tracking-widest py-4 px-2.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex flex-col items-center gap-2 group"
                    >
                        <div className="w-7 h-7 rounded-full bg-spsc-navy/10 flex items-center justify-center">
                            <span className="text-sm font-bold">$</span>
                        </div>
                        <span className="[writing-mode:vertical-lr] rotate-180">Pay Now</span>
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default SideNav;
