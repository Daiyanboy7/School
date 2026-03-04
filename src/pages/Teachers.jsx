import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Mail, BookOpen, GraduationCap } from 'lucide-react';

const teachersData = [
    { name: "MD. ALAMGIR HOSSAIN", designation: "Vice Principal (School)", subject: "Political Science", email: "alamgir74ahm@gmail.com" },
    { name: "MD: AKTERUGGAMAN", designation: "Sr. Teacher", subject: "Religion", email: "makteruzzaman34@gmail.com" },
    { name: "MD. SHAMSUR RAHMAN", designation: "Sr. Teacher", subject: "Math & Science", email: "shamsurzcpsc@gmail.com" },
    { name: "MD. ROBIUL ISLAM", designation: "Sr. Teacher", subject: "Physical Education", email: "robiulislamnb02@gmail.com" },
    { name: "MD. ABDUR RAZZAK", designation: "Sr. Teacher", subject: "Math & Science", email: "mdabdurrazzak0942@gmail.com" },
    { name: "POBETRO KUMAR SAHA", designation: "Sr. Teacher", subject: "Social Science", email: "sahapobetro@gmail.com" },
    { name: "RABIUL AWAL", designation: "Sr. Teacher", subject: "Math & Science", email: "rabiulawal0112@gmail.com" },
    { name: "MD. TAZUL ISLAM", designation: "Sr. Teacher", subject: "Religion", email: "taizulnoman@gmail.com" },
    { name: "ASMA KHATUN", designation: "Sr. Teacher", subject: "English", email: "asmasin2020@gmail.com" },
    { name: "HABIBA YESMIN", designation: "Sr. Teacher", subject: "English", email: "habiba.yesmin84@gmail.com" },
    { name: "MD. SHAHIDUL ALAM", designation: "Sr. Teacher", subject: "Arts and Crafts", email: "charushahidul625@gmail.com" },
    { name: "SHAMMI SULTANA", designation: "Sr. Teacher", subject: "Home Science", email: "shammi21181@gmail.com" },
    { name: "RAZIA SULTANA", designation: "Sr. Teacher", subject: "English", email: "razia85a@gmail.com" },
    { name: "KAZI REJOYANA RAHMAN", designation: "Sr. Teacher", subject: "Social Science", email: "tulik533@gmail.com" },
    { name: "LIPI RANI DAS", designation: "Sr. Teacher", subject: "Bangla", email: "lipirani.zcpsc@gmail.com" },
    { name: "MOHAMMAD AYUB ALI", designation: "Sr. Teacher", subject: "Chemistry", email: "ayubalizcpsc@gmail.com" },
    { name: "MOHAMMAD AZIZUR RAHMAN", designation: "Sr. Teacher", subject: "Accounting", email: "ar538540@gmail.com" },
    { name: "PAYER AHMED BHUIYAN", designation: "Sr. Teacher", subject: "Mathematic", email: "payerahmed85@gmail.com" },
    { name: "MST. ZAHANE GULSHAN", designation: "Sr. Teacher", subject: "Philosophy", email: "zahaneteacher@gmail.com" },
    { name: "H.M. HELAL UDDIN", designation: "Sr. Teacher", subject: "Bangla", email: "hmhelaluddin197@gmail.com" },
    { name: "SHAHERA PANNA", designation: "Sr. Teacher", subject: "Biology", email: "saherapanna@gmail.com" },
    { name: "MD. ABDUL KADER", designation: "Sr. Teacher", subject: "Agricultural Science", email: "abdulkader.bd520@gmail.com" },
    { name: "ASHIS KUMAR BAIN", designation: "Sr. Teacher", subject: "Religion", email: "ashiskumarbain9.1@gmail.com" },
    { name: "MOHAMMAD NURUL HAQUE", designation: "Sr. Teacher", subject: "English", email: "nurulhaque198119@gmail.com" },
    { name: "NAHIDA SHAFINAZ", designation: "Sr. Teacher", subject: "Social Science", email: "nahida_shafinaz77@yahoo.com" },
    { name: "MD. MURSHID ALAM", designation: "Sr. Teacher", subject: "Arts and Crafts", email: "mdmurshidalam199@gmail.com" },
    { name: "KHANDAKAR KAMRUZZAMAN", designation: "Sr. Teacher", subject: "English", email: "adilahnafkzaman@gmail.com" },
    { name: "MOHAMMAD ZOHIRUJJAMAN", designation: "Sr. Teacher", subject: "Mathematic", email: "johir0181834@gmail.com" },
    { name: "HAZERA BEGUM", designation: "Sr. Teacher", subject: "Arts and Crafts", email: "ankhialam81@gmail.com" },
    { name: "MAHMUDA AKTER", designation: "Sr. Teacher", subject: "Bangla", email: "mahmudaakter2004@gmail.com" },
    { name: "MD. TUFAGGAL HOSSAIN", designation: "Sr. Teacher", subject: "Math & Science", email: "tufaggal1984@gmail.com" },
    { name: "NARGIS ZAHAN", designation: "Sr. Teacher", subject: "Science", email: "nargiszahankhanam@gmail.com" },
    { name: "SABIHA AKHTER", designation: "Sr. Teacher", subject: "Social Science", email: "Sabihazcps20@gmail.com" },
    { name: "TAPAS KUMAR ROY", designation: "Sr. Teacher", subject: "Arts and Crafts", email: "roytapas439@gmail.com" },
    { name: "SAHERA BEGUM", designation: "Sr. Teacher", subject: "Bangla", email: "saheralipi315@gmail.com" },
    { name: "MD. SHAFIUL ALAM", designation: "Sr. Teacher", subject: "Physics", email: "" },
    { name: "MAHIMA SULTANA SARKER", designation: "Sr. Teacher", subject: "Chemistry", email: "" },
    { name: "MD. SHAMIM ISLAM MOONJU", designation: "Sr. Teacher", subject: "Bangla", email: "shamim.bru@gmail.com" },
    { name: "MD. NAZMUL ISLAM", designation: "Asst. Teacher", subject: "Computer Education", email: "inazmul07@gmail.com" },
    { name: "MOHAMMED YOUSUF ALI", designation: "Asst. Teacher", subject: "English", email: "amyousuf82@gmail.com" },
    { name: "SHUVENDU JODDER", designation: "Asst. Teacher", subject: "Science", email: "skatobi@gmail.com" },
    { name: "MD. MAMUNUR RASHID", designation: "Asst. Teacher", subject: "Bangla", email: "mdmamunur01@gmail.com" },
    { name: "POLLY RANI SAHA", designation: "Asst. Teacher", subject: "Biology", email: "pollyranisaha2015@gmail.com" },
    { name: "MD. ASLAM ALI", designation: "Asst. Teacher", subject: "English", email: "aslamdbs@gmail.com" },
    { name: "SUSEN CHANDRA DAS", designation: "Asst. Teacher", subject: "Accounting", email: "susendaszcpsc@gmail.com" },
    { name: "NAILA RAHMAN", designation: "Asst. Teacher", subject: "Social Science", email: "naila23march@yahoo.com" },
    { name: "HIMAMALINI MONDAL", designation: "Asst. Teacher", subject: "Agricultural Science", email: "himamalini82@gmail.com" },
    { name: "MOSHIUR RAHMAN", designation: "Asst. Teacher", subject: "Religion", email: "moshiur31@gmail.com" },
    { name: "MD. ASADUZZAMAN", designation: "Asst. Teacher", subject: "Mathematic", email: "asad.zcpsc@gmail.com" },
    { name: "ISRAT ZAHAN IMA", designation: "Asst. Teacher", subject: "Bangla", email: "" },
    { name: "ZERIN NAHAR", designation: "Asst. Teacher", subject: "Social Science", email: "zerinnahar@gmail.com" },
    { name: "S. M. MAHMUDUL HASAN", designation: "Asst. Teacher", subject: "Bangla", email: "mahmud.du89@gmail.com" },
    { name: "AFROZA AKTER", designation: "Asst. Teacher", subject: "English", email: "afrozshaila24@gmail.com" },
    { name: "MD. LIAKAT ALI", designation: "Asst. Teacher", subject: "English", email: "liakatali005@gmail.com" },
    { name: "MD MEHEDI HASAN MONIM", designation: "Asst. Teacher", subject: "Information and Communication Technology", email: "mh310702@gmail.com" },
    { name: "GULAM RASUL", designation: "Asst. Teacher", subject: "Computer Education", email: "gulamrasulksa18@gmail.com" },
    { name: "MD. TAWHID ASHRAF", designation: "Asst. Teacher", subject: "Social Science", email: "tawhid@econdu.ac.bd" },
    { name: "RIMON SARUARE", designation: "Asst. Teacher", subject: "Mathematic", email: "rimonsaruare1990@gmail.com" },
    { name: "UZZAL CHANDRA ADHIKARI", designation: "Asst. Teacher", subject: "English", email: "" },
    { name: "MD. SAIFUL ISLAM", designation: "Asst. Teacher", subject: "Mathematic", email: "" },
    { name: "SANJIDA SADIA", designation: "Asst. Teacher", subject: "Physical Education", email: "" },
    { name: "MD. EMAM HOSSAIN", designation: "Asst. Teacher", subject: "Social Science", email: "" },
    { name: "RABIUL HASAN", designation: "Asst. Teacher", subject: "Bangla", email: "Robinirobi75@gmail.com" },
    { name: "MD. SIAM HOSSAIN", designation: "Asst. Teacher", subject: "Physical Education", email: "" },
    { name: "SANZIDA AKTER LIRA", designation: "Asst. Teacher", subject: "Social Science", email: "Sanzidalira92@gmail.com" },
    { name: "NAORIN MUSHFIQUA ZANNAT MOMI", designation: "Asst. Teacher", subject: "Bangla", email: "naorin.momi098@gmail.com" },
    { name: "SUMAIYA BINTE NASIR", designation: "Asst. Teacher", subject: "Civics", email: "" },
    { name: "FAHIMA KHATUN", designation: "Senior Staff Nurse", subject: "Bangla", email: "" },
    { name: "RUMANA TASRIN", designation: "Asst. Teacher", subject: "Social Science", email: "" },
    { name: "MD. NURUL AMIN", designation: "Asst. Teacher", subject: "Physics", email: "nurulamin@gmail.com" },
    { name: "RABEYA AKTER", designation: "Asst. Teacher", subject: "Social Science", email: "" },
    { name: "ROKIBUL HASAN", designation: "Asst. Teacher", subject: "Information and Communication Technology", email: "rokib.spsc@gmail.com" },
    { name: "IMAM HOSSAIN", designation: "Asst. Teacher", subject: "Religion", email: "" },
    { name: "NAHIM HOSSAIN KHAN", designation: "Asst. Teacher", subject: "Bangla", email: "" },
    { name: "TANIA MAHTAB", designation: "Asst. Teacher", subject: "English", email: "" },
    { name: "SAIFUL ISLAM", designation: "Asst. Teacher", subject: "Mathematic", email: "saif.khan.19914@gmail.com" },
    { name: "MD. JOHIRUL ISLAM", designation: "Asst. Teacher", subject: "Religion", email: "" },
    { name: "SAMIRA ISLAM", designation: "Asst. Teacher", subject: "English", email: "" },
    { name: "MD. RAKIBUL ISLAM RASEL", designation: "Asst. Teacher", subject: "Bangla", email: "" },
    { name: "HIMA AKTER HIRAMONY", designation: "Asst. Teacher", subject: "Arts and Crafts", email: "" },
    { name: "TARIQUL ISLAM", designation: "Asst. Teacher", subject: "Islamic History", email: "" },
    { name: "KRISHNA SAZZON PUJA", designation: "Asst. Teacher", subject: "Arts and Crafts", email: "" },
    { name: "MD. SHAKIL GAZI", designation: "Asst. Teacher", subject: "Bangla", email: "gshakil29@gmail.com" },
    { name: "MD. NAEEM", designation: "Asst. Teacher", subject: "Science", email: "" },
    { name: "NUSRAT BINTE ALAM", designation: "Asst. Teacher", subject: "Biology", email: "" },
    { name: "MAHMUDUL HASAN", designation: "Asst. Teacher", subject: "Mathematic", email: "" },
    { name: "TAHMINA BINTE SHIRAJ", designation: "Asst. Teacher", subject: "Chemistry", email: "" },
    { name: "FOYSAL MAHMUD", designation: "Asst. Teacher", subject: "Chemistry", email: "foysalmahaud1341997@gmail.com" },
    { name: "MD. HAMIDULLAH", designation: "Asst. Teacher", subject: "Mathematic", email: "" },
    { name: "MD. JAHIDUZZAMAN SHEEMUL", designation: "Asst. Teacher", subject: "Bangla", email: "mijsheemul@gmail.com" },
    { name: "MD. TOWFIQUL ALAM", designation: "Asst. Teacher", subject: "Physics", email: "" },
    { name: "AFSANA MAHAMUDA SHARMI", designation: "Asst. Teacher", subject: "Home Science", email: "" },
    { name: "MD. HAFIZUL ISLAM", designation: "Asst. Teacher", subject: "Mathematic", email: "hafizul88zcpsc@gmail.com" },
    { name: "MD. ZABED MIAH", designation: "Asst. Teacher", subject: "Mathematic", email: "zabed7770@gmail.com" },
    { name: "MD.MAHBUBUR RAHMAN", designation: "Asst. Teacher", subject: "Biology", email: "" },
    { name: "MD. AMINUL ISLAM", designation: "Asst. Teacher", subject: "Mathematic", email: "aminul.05.08.90@gmail.com" },
    { name: "SHARMIN CHOWDHURY BRISTY", designation: "Teaching Assistant", subject: "Bangla", email: "" },
    { name: "HOSNE ARA MUKTA", designation: "Teaching Assistant", subject: "Bangla", email: "" },
    { name: "SAIMA AZAM", designation: "Teaching Assistant", subject: "Bangla", email: "" },
];

const Teachers = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterDesignation, setFilterDesignation] = useState('All');

    const designations = ['All', ...new Set(teachersData.map(t => t.designation))];

    const filteredTeachers = teachersData.filter(teacher => {
        const matchesSearch = teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            teacher.subject.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDesignation = filterDesignation === 'All' || teacher.designation === filterDesignation;
        return matchesSearch && matchesDesignation;
    });

    return (
        <div className="bg-spsc-dark min-h-screen pt-28">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_60%)]" />
                </div>
                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-spsc-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4">Our Faculty</p>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                            School <span className="text-spsc-gold">Teachers</span>
                        </h1>
                        <p className="text-white/40 font-medium max-w-xl mx-auto text-sm">
                            Meet our dedicated team of educators who shape the future leaders of our nation with precision and commitment.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Search & Filter Bar */}
            <section className="sticky top-20 z-40 bg-spsc-dark/80 backdrop-blur-xl border-b border-white/5 py-4">
                <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row gap-4 items-center">
                    <div className="relative flex-1 w-full">
                        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                        <input
                            type="text"
                            placeholder="Search by name or subject..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-spsc-gold/30 transition-all"
                        />
                    </div>
                    <div className="flex gap-2 flex-wrap justify-center">
                        {designations.map(d => (
                            <button
                                key={d}
                                onClick={() => setFilterDesignation(d)}
                                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filterDesignation === d
                                        ? 'bg-spsc-gold text-spsc-navy'
                                        : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {d}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Teachers Count */}
            <section className="container mx-auto px-4 lg:px-8 pt-8 pb-2">
                <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
                    Showing {filteredTeachers.length} of {teachersData.length} faculty members
                </p>
            </section>

            {/* Teachers Grid */}
            <section className="container mx-auto px-4 lg:px-8 pb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
                    {filteredTeachers.map((teacher, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: Math.min(index * 0.02, 0.5) }}
                            className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-spsc-gold/30 hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Avatar */}
                            <div className="relative bg-gradient-to-br from-spsc-navy/50 to-spsc-dark p-6 flex justify-center border-b border-white/5">
                                <div className="w-20 h-20 rounded-full bg-spsc-dark border-2 border-spsc-gold/20 overflow-hidden flex items-center justify-center group-hover:border-spsc-gold/50 transition-colors">
                                    <img
                                        src="/teacher_avatar.png"
                                        alt={teacher.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute top-3 right-3">
                                    <span className="px-2 py-1 bg-spsc-gold/10 text-spsc-gold text-[8px] font-black uppercase tracking-widest rounded-lg border border-spsc-gold/20">
                                        {teacher.designation.replace('Sr. Teacher', 'Senior').replace('Asst. Teacher', 'Assistant').replace('Teaching Assistant', 'TA')}
                                    </span>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-4 space-y-3">
                                <h3 className="text-xs font-black text-white uppercase tracking-wide leading-tight line-clamp-2 min-h-[2rem] group-hover:text-spsc-gold transition-colors">
                                    {teacher.name}
                                </h3>

                                <div className="flex items-center gap-2 text-white/40 font-medium">
                                    <BookOpen size={12} className="text-spsc-gold shrink-0" />
                                    <span className="text-[10px] truncate">{teacher.subject}</span>
                                </div>

                                {teacher.email && (
                                    <a
                                        href={`mailto:${teacher.email}`}
                                        className="flex items-center gap-2 text-white/30 hover:text-spsc-gold transition-colors font-medium"
                                    >
                                        <Mail size={12} className="shrink-0" />
                                        <span className="text-[10px] truncate">{teacher.email}</span>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Teachers;
