import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { TESTIMONIALS } from '../constants';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1150px] mx-auto px-6 relative z-10">
                <SectionTitle 
                    title="Khách Hàng Nói Gì?" 
                    subtitle="Sự hài lòng của khách hàng là minh chứng rõ nhất cho chất lượng dịch vụ của ACC."
                />

                <div className="max-w-5xl mx-auto mt-12">
                    <div className="relative">
                        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between z-20 pointer-events-none px-2 lg:px-0 lg:-mx-16">
                            <button 
                                onClick={prevSlide}
                                className="pointer-events-auto p-3 rounded-full text-gray-400 hover:text-primary bg-white/80 backdrop-blur shadow-md hover:bg-white transition-all border border-gray-100"
                            >
                                <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
                            </button>
                            <button 
                                onClick={nextSlide}
                                className="pointer-events-auto p-3 rounded-full text-gray-400 hover:text-primary bg-white/80 backdrop-blur shadow-md hover:bg-white transition-all border border-gray-100"
                            >
                                <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
                            </button>
                        </div>

                        <div className="relative h-[480px] sm:h-[400px] md:h-[320px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0"
                                >
                                    <div className="flex flex-col md:flex-row gap-8 items-center bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-2xl shadow-gray-200/50 h-full">
                                        
                                        <div className="flex-shrink-0 relative">
                                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-1 border-2 border-primary/20 relative z-10">
                                                <img 
                                                    src={TESTIMONIALS[currentIndex].image} 
                                                    alt={TESTIMONIALS[currentIndex].author} 
                                                    className="w-full h-full rounded-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full z-20">
                                                <Quote className="w-4 h-4" />
                                            </div>
                                        </div>
                                        
                                        <div className="flex-1 text-center md:text-left overflow-y-auto md:overflow-visible max-h-full">
                                            <div className="flex justify-center md:justify-start gap-1 text-yellow-400 mb-4">
                                                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                                            </div>
                                            
                                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6">
                                                "{TESTIMONIALS[currentIndex].content}"
                                            </p>
                                            
                                            <div className="border-t border-gray-100 pt-4">
                                                <h4 className="text-secondary font-bold text-lg font-serif">{TESTIMONIALS[currentIndex].author}</h4>
                                                <p className="text-gray-500 text-sm mt-1">{TESTIMONIALS[currentIndex].position}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {TESTIMONIALS.map((_, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-200 hover:bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;