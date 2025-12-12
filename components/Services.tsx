import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { SERVICES } from '../constants';

const Services = () => {
    return (
        <section className="py-20 bg-white relative" id="services">
            <div className="max-w-[1150px] mx-auto px-6">
                <SectionTitle 
                    title="Dịch Vụ Pháp Lý" 
                    subtitle="Hệ sinh thái pháp lý đa dạng, chuyên sâu, đáp ứng mọi nhu cầu." 
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {SERVICES.map((service) => (
                        <a 
                            key={service.id} 
                            href={service.link}
                            className="group relative block bg-background rounded-xl p-6 border border-transparent hover:border-primary/10 overflow-hidden transform-gpu hover:-translate-y-1 transition-all duration-300 subpixel-antialiased hover:shadow-lg"
                            style={{ backfaceVisibility: 'hidden' }}
                        >
                            <div className="absolute top-4 right-4 opacity-0 transform translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                                <ArrowUpRight className="w-5 h-5 text-primary" />
                            </div>

                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            
                            <div className="w-12 h-12 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <service.icon className="w-6 h-6" />
                            </div>
                            
                            <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors pr-6">
                                {service.title}
                            </h3>
                            
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </a>
                    ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <a href="tel:0846967979" className="px-6 py-3 bg-primary text-white rounded-lg font-bold shadow-lg hover:bg-primary-hover transition-colors text-sm text-center">
                        Tư Vấn Miễn Phí
                    </a>
                    <a href="#" className="px-6 py-3 bg-white text-primary border border-primary rounded-lg font-bold hover:bg-primary/5 transition-colors text-sm text-center">
                        Xem Thêm Dịch Vụ
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;