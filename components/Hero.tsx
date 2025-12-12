import React from 'react';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen md:min-h-[85vh] flex items-center bg-[#f7f8fa] overflow-hidden">
            {/* Background Image Container */}
            <div className="absolute top-0 right-0 w-full md:w-[65%] h-full z-0">
                <img 
                    src="https://congtyluatacc.vn/wp-content/uploads/2025/07/still-life-with-scales-justice-scaled.jpg" 
                    alt="Law Firm Background" 
                    className="w-full h-full object-cover object-top md:object-right"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#f7f8fa] via-[#f7f8fa]/90 to-transparent md:via-[#f7f8fa]/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#f7f8fa] via-transparent to-transparent md:hidden"></div>
            </div>

            <div className="relative z-10 w-full max-w-[1150px] mx-auto px-6 pt-20 md:pt-0 pb-12 md:pb-0">
                <div className="max-w-2xl">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-primary font-bold text-xs uppercase tracking-widest">Đối tác pháp lý tin cậy</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary leading-tight mb-6">
                            Công Ty Luật <span className="text-primary">ACC</span>
                        </h1>
                        
                        <p className="text-gray-800 text-lg mb-8 leading-relaxed font-normal max-w-lg">
                            Là đơn vị tiên phong trong lĩnh vực pháp lý tại Việt Nam, ACC cam kết mang đến giải pháp toàn diện, bảo vệ tối đa quyền lợi của khách hàng bằng sự tận tâm và chuyên nghiệp.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                            <a href="tel:0846967979" className="group relative overflow-hidden flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40">
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_1s_infinite]"></div>
                                <Phone className="w-5 h-5 relative z-10" />
                                <span className="relative z-10">Liên Hệ Ngay</span>
                                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a href="https://zalo.me/2171133625094125529" target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-3 bg-white/90 backdrop-blur text-secondary border border-gray-200 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-lg hover:-translate-y-1">
                                <Calendar className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                <span>Tư Vấn Zalo</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-12 pt-8 border-t border-gray-200/60 grid grid-cols-3 gap-8 max-w-lg"
                    >
                        <div>
                            <p className="text-3xl md:text-4xl font-sans font-extrabold text-primary">10K+</p>
                            <p className="text-xs md:text-sm text-secondary mt-1 font-semibold">Khách hàng</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-sans font-extrabold text-primary">Nhiều</p>
                            <p className="text-xs md:text-sm text-secondary mt-1 font-semibold">Năm Kinh Nghiệm</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-sans font-extrabold text-primary">100%</p>
                            <p className="text-xs md:text-sm text-secondary mt-1 font-semibold">Hài lòng</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;