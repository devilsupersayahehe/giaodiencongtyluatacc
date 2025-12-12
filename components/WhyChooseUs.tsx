import React from 'react';
import SectionTitle from './SectionTitle';
import { REASONS } from '../constants';

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-white border-y border-gray-100">
            <div className="max-w-[1150px] mx-auto px-6">
                <SectionTitle 
                    title="Vì Sao Chọn ACC?" 
                    subtitle="Cam kết mang đến sự an tâm tuyệt đối và hiệu quả pháp lý cao nhất." 
                />

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                    {REASONS.map((item, idx) => (
                        <div 
                            key={idx}
                            className="flex flex-col items-center text-center p-6 bg-background rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary group h-full"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-base font-bold text-secondary mb-2">{item.title}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;