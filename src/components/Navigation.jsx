import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { menuItems } from './SideNav';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Academics', path: '/academics' },
        { name: 'Admission', path: '/admission' },
        { name: 'Teachers', path: '/teachers' },
        { name: 'Contact', path: '/contact' },
    ];

    const portalLinks = ['Principal', 'Teacher', 'Student', 'Guardian', 'Employee'];
    const portalUrl = "https://portal.cloudcampus24.com/UserAuth/Login?ReturnUrl=%2F";

    return (
        <header
            className={cn(
                "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[calc(100%-2rem)] max-w-6xl rounded-2xl",
                isScrolled
                    ? "bg-spsc-dark/80 backdrop-blur-2xl shadow-2xl border border-white/10 py-3"
                    : "bg-spsc-dark/40 backdrop-blur-md border border-white/10 py-3"
            )}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <nav className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-4 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-spsc-gold blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
                            <img
                                src="https://spscsavarcantt.edu.bd/assets/img/logo.png"
                                alt="SPSC Logo"
                                className="h-14 w-auto drop-shadow-2xl relative z-10"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-spsc-white font-black leading-none text-xl tracking-tighter">SENA PUBLIC</span>
                            <span className="text-spsc-gold font-bold text-[10px] tracking-[0.3em] uppercase opacity-80">School & College</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        <ul className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className={cn(
                                            "nav-link text-sm relative group",
                                            location.pathname === link.path && "text-spsc-gold"
                                        )}
                                    >
                                        {link.name}
                                        <span className={cn(
                                            "absolute -bottom-1 left-0 w-0 h-[2px] bg-spsc-gold transition-all duration-300 group-hover:w-full",
                                            location.pathname === link.path && "w-full"
                                        )} />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Login Dropdown */}
                        <div className="relative group/login"
                            onMouseEnter={() => setIsLoginOpen(true)}
                            onMouseLeave={() => setIsLoginOpen(false)}
                        >
                            <button className="flex items-center gap-1.5 text-spsc-white/90 hover:text-spsc-gold font-bold text-xs uppercase tracking-widest transition-colors">
                                Login <ChevronDown size={14} className={cn("transition-transform duration-300", isLoginOpen && "rotate-180")} />
                            </button>

                            <AnimatePresence>
                                {isLoginOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full right-0 mt-4 w-48 bg-spsc-dark/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-2 z-[60]"
                                    >
                                        {portalLinks.map((role) => (
                                            <a
                                                key={role}
                                                href={portalUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="block w-full px-4 py-3 text-[10px] font-black uppercase tracking-widest text-spsc-white/60 hover:text-spsc-gold hover:bg-white/5 rounded-xl transition-all"
                                            >
                                                {role}
                                            </a>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <a href="https://vortibd.com/institute/125/298" target="_blank" rel="noreferrer" className="btn-primary py-2.5 px-6 text-xs shadow-none">
                            Admission
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-spsc-gold hover:bg-white/5 rounded-xl transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 top-0 left-0 h-screen w-screen z-[100] md:hidden bg-spsc-dark flex flex-col p-8 overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-10 shrink-0">
                            <div className="flex items-center gap-3">
                                <img src="https://spscsavarcantt.edu.bd/assets/img/logo.png" alt="SPSC Logo" className="h-9 w-auto" />
                                <span className="font-black text-base text-spsc-white">SPSC MENU</span>
                            </div>
                            <button
                                className="p-2 text-spsc-gold bg-white/5 rounded-xl"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-8 pb-10">
                            {/* Main Links */}
                            <ul className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className={cn(
                                                "text-xl font-black uppercase tracking-tight",
                                                location.pathname === link.path ? "text-spsc-gold" : "text-white"
                                            )}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Sidebar Links (Mobile Version) */}
                            <div className="pt-8 border-t border-white/5">
                                <p className="text-[10px] font-black text-spsc-gold uppercase tracking-[0.3em] mb-6">Explore SPSC</p>
                                <div className="space-y-2">
                                    {menuItems.map((item) => (
                                        <div key={item.name} className="overflow-hidden">
                                            <button
                                                className={cn(
                                                    "w-full flex items-center justify-between p-4 bg-white/5 rounded-2xl transition-all",
                                                    mobileActiveDropdown === item.name && "bg-spsc-gold text-spsc-navy"
                                                )}
                                                onClick={() => {
                                                    if (item.hasDropdown) {
                                                        setMobileActiveDropdown(mobileActiveDropdown === item.name ? null : item.name);
                                                    } else if (item.path?.startsWith('#')) {
                                                        const element = document.getElementById(item.path.substring(1));
                                                        if (element) {
                                                            element.scrollIntoView({ behavior: 'smooth' });
                                                        }
                                                        setIsMobileMenuOpen(false);
                                                    }
                                                }}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <item.icon size={18} />
                                                    <span className="text-[10px] font-black uppercase tracking-widest">{item.name}</span>
                                                </div>
                                                {item.hasDropdown && (
                                                    <ChevronDown
                                                        size={14}
                                                        className={cn("transition-transform duration-300", mobileActiveDropdown === item.name && "rotate-180")}
                                                    />
                                                )}
                                            </button>

                                            <AnimatePresence>
                                                {mobileActiveDropdown === item.name && item.hasDropdown && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden bg-white/5 mt-1 rounded-2xl"
                                                    >
                                                        <div className="p-2 grid grid-cols-1 gap-1">
                                                            {item.options.map((opt) => (
                                                                <button
                                                                    key={opt}
                                                                    className="w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-spsc-gold transition-colors"
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                >
                                                                    {opt}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Portal Login */}
                            <div className="pt-8 border-t border-white/5">
                                <p className="text-[10px] font-black text-spsc-gold uppercase tracking-[0.3em] mb-6">Portal Login</p>
                                <div className="grid grid-cols-2 gap-3">
                                    {portalLinks.map((role) => (
                                        <a
                                            key={role}
                                            href={portalUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-4 bg-white/5 rounded-2xl text-center hover:bg-spsc-gold hover:text-spsc-navy transition-all group"
                                        >
                                            <span className="text-[10px] font-black uppercase tracking-widest text-white group-hover:text-spsc-navy transition-colors">{role}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto pt-8 space-y-6">
                            <a
                                href="https://vortibd.com/institute/125/298"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-primary block text-center py-3 text-sm"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Admission
                            </a>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-white/5 rounded-2xl">
                                    <p className="text-[10px] text-spsc-gold font-black mb-1">CALL US</p>
                                    <p className="text-xs font-bold text-white">02229093164</p>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-2xl">
                                    <p className="text-[10px] text-spsc-gold font-black mb-1">EMAIL</p>
                                    <p className="text-xs font-bold text-white">info@spscsavarcantt</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header >
    );
};

const Footer = () => {
    return (
        <footer className="bg-spsc-dark text-spsc-white border-t border-white/5">
            <div className="container mx-auto px-4 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <img src="https://spscsavarcantt.edu.bd/assets/img/logo.png" alt="SPSC Logo" className="h-16 w-auto" />
                            <div className="flex flex-col">
                                <span className="font-black text-2xl tracking-tighter">SPSC SAVAR</span>
                                <span className="text-spsc-gold text-[10px] font-black uppercase tracking-[0.3em]">Institutional Pride</span>
                            </div>
                        </div>
                        <p className="text-spsc-white/40 text-sm leading-relaxed">
                            A premier military-run institution at Savar Cantonment. Dedicated to academic excellence and moral leadership since 2010.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-spsc-gold font-black mb-8 uppercase text-xs tracking-[0.3em]">Navigation</h4>
                        <ul className="space-y-4 text-sm font-bold">
                            <li><Link to="/about" className="text-spsc-white/60 hover:text-spsc-gold transition-colors">Our History</Link></li>
                            <li><Link to="/academics" className="text-spsc-white/60 hover:text-spsc-gold transition-colors">Programs</Link></li>
                            <li><Link to="/admission" className="text-spsc-white/60 hover:text-spsc-gold transition-colors">Admission Portal</Link></li>
                            <li><Link to="/contact" className="text-spsc-white/60 hover:text-spsc-gold transition-colors">Contact Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-spsc-gold font-black mb-8 uppercase text-xs tracking-[0.3em]">Contact Details</h4>
                        <ul className="space-y-6 text-sm">
                            <li className="flex items-start gap-4">
                                <MapPin size={20} className="text-spsc-gold shrink-0" />
                                <span className="text-spsc-white/60 font-medium">Savar DOHS, Savar Cantonment, Dhaka-1344</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone size={20} className="text-spsc-gold shrink-0" />
                                <span className="text-spsc-white/60 font-medium">02-229093164</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail size={20} className="text-spsc-gold shrink-0" />
                                <span className="text-spsc-white/60 font-medium whitespace-nowrap">spsc.savarcantt@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 bg-white/5 border border-white/5 rounded-3xl">
                        <h4 className="text-spsc-gold font-black mb-6 uppercase text-xs tracking-[0.3em]">Institution ID</h4>
                        <div className="space-y-4">
                            <div>
                                <p className="text-[10px] font-black text-spsc-white/30 uppercase tracking-widest">EIIN</p>
                                <p className="text-3xl font-black text-spsc-gold tracking-tighter">134152</p>
                            </div>
                            <div className="pt-4 border-t border-white/10">
                                <p className="text-[10px] font-black text-spsc-white/30 uppercase tracking-widest">Type</p>
                                <p className="text-xs font-bold text-white/60">Cantonment Board Institution</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                    <p>© {new Date().getFullYear()} Sena Public School and College. All Rights Reserved.</p>
                    <p>Excellence in Precision</p>
                </div>
            </div>
        </footer>
    );
};

export { Navbar, Footer };
