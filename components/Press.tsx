import React from 'react';
import SectionTitle from './SectionTitle';
import { PRESS } from '../constants';

const Press = () => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-[1150px] mx-auto px-6">
                <SectionTitle 
                    title="Báo Chí Viết Về ACC" 
                    subtitle="Góc nhìn từ các cơ quan truyền thông uy tín về chất lượng dịch vụ của ACC."
                    alignment="left"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PRESS.map((item) => (
                        <a 
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
                        >
                            <div className="h-40 overflow-hidden bg-gray-100 relative">
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" 
                                />
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="h-8 mb-3 opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
                                    <img src={item.logo} alt={item.source} className="h-full object-contain object-left" />
                                </div>
                                <h3 className="text-sm font-bold text-secondary line-clamp-3 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Press;