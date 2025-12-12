import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { TEAM } from '../constants';

const Team = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Infinite Loop Logic: [Team, Team] array
    const displayTeam = [...TEAM, ...TEAM];
    
    // Config
    const cardWidth = 300;
    const gap = 24;
    const itemWidth = cardWidth + gap;

    const handleNext = () => {
        if (!isTransitioning) return;

        setCurrentIndex((prev) => {
            const next = prev + 1;
            if (next === TEAM.length) {
                snapTo(0, 500);
            }
            return next;
        });
    };

    const handlePrev = () => {
        if (!isTransitioning) return;

        if (currentIndex === 0) {
            setIsTransitioning(false);
            setCurrentIndex(TEAM.length);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsTransitioning(true);
                    setCurrentIndex(TEAM.length - 1);
                });
            });
        } else {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const snapTo = (index: number, delay: number) => {
        timeoutRef.current = setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(index);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsTransitioning(true);
                });
            });
        }, delay);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <section className="py-20 bg-background overflow-hidden border-t border-gray-200">
            <div className="max-w-[1150px] mx-auto px-6">
                <SectionTitle 
                    title="Đội Ngũ Luật Sư" 
                    subtitle="Những gương mặt xuất sắc, tận tâm và giàu kinh nghiệm tại ACC." 
                />

                <div className="relative max-w-full mx-auto">
                    <button 
                        onClick={handlePrev}
                        className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur p-2 md:p-3 rounded-full shadow-lg text-secondary hover:text-primary transition-all flex items-center justify-center border border-gray-100 active:scale-95 hover:scale-110"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button 
                        onClick={handleNext}
                        className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur p-2 md:p-3 rounded-full shadow-lg text-secondary hover:text-primary transition-all flex items-center justify-center border border-gray-100 active:scale-95 hover:scale-110"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    <div className="overflow-hidden py-4 -my-4 px-2 -mx-2 md:px-0 md:-mx-0 w-[300px] mx-auto md:w-auto md:mx-0">
                        <div 
                            className="flex gap-6 will-change-transform"
                            style={{
                                transform: `translateX(-${currentIndex * itemWidth}px)`,
                                transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
                                width: 'fit-content'
                            }}
                        >
                            {displayTeam.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="flex-shrink-0 w-[300px] h-[450px] relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
                                >
                                    <img 
                                        src={member.img} 
                                        alt={member.title} 
                                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = 'https://congtyluatacc.vn/wp-content/uploads/2025/11/z7271235355390_f42f8fd6ff429a1a9b6fc33cf34d0746.jpg';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
                                    
                                    <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2 block opacity-90">{member.category}</span>
                                        <h3 className="text-xl font-bold font-serif mb-2 leading-tight">{member.title}</h3>
                                        
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {member.tags.map((tag, i) => (
                                                <span key={i} className="text-[10px] bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded text-white border border-white/10">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
                                            <div className="overflow-hidden">
                                                <p className="text-xs text-gray-200 pt-3 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                    {member.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;