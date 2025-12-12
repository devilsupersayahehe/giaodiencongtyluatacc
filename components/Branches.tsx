import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { BRANCHES } from '../constants';

const Branches = () => {
    const [activeBranch, setActiveBranch] = useState(BRANCHES[0].id);

    return (
        <section className="py-20 bg-background">
            <div className="max-w-[1150px] mx-auto px-6">
                <SectionTitle 
                    title="Hệ Thống Chi Nhánh" 
                    subtitle="Mạng lưới văn phòng trải dài 3 miền Bắc - Trung - Nam, sẵn sàng hỗ trợ bạn." 
                />

                <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-3xl p-2 shadow-card overflow-hidden border border-gray-100">
                    
                    <div className="flex-1 p-6 md:p-8">
                        <div className="space-y-4">
                            {BRANCHES.map((branch) => {
                                const isActive = activeBranch === branch.id;
                                return (
                                    <div 
                                        key={branch.id}
                                        onClick={() => setActiveBranch(branch.id)}
                                        className={`cursor-pointer rounded-xl border-2 transition-all duration-300 p-6 ${isActive ? 'border-primary bg-primary/5 shadow-md' : 'border-gray-100 hover:border-primary/30 bg-white'}`}
                                    >
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className={`text-lg font-bold ${isActive ? 'text-primary' : 'text-secondary'}`}>
                                                {branch.title}
                                            </h3>
                                            {isActive && <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>}
                                        </div>
                                        
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                <p className="text-sm text-gray-700 font-medium">{branch.address}</p>
                                            </div>
                                            
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 pl-8">
                                                <span className="flex items-center gap-2 hover:text-primary transition-colors">
                                                    <Phone className="w-4 h-4" />  {branch.hotline}
                                                </span>
                                                <span className="flex items-center gap-2 hover:text-primary transition-colors">
                                                    <Mail className="w-4 h-4" /> {branch.email}
                                                </span>
                                                <span className="flex items-center gap-2 hover:text-primary transition-colors">
                                                    <Phone className="w-4 h-4" /> {branch.phone}
                                                </span>
                                            </div>

                                            {branch.sub && (
                                                <div className="mt-4 pt-4 border-t border-gray-200 pl-8 space-y-2">
                                                    {branch.sub.map((s, idx) => (
                                                        <div key={idx} className="text-xs text-gray-500">
                                                            <strong className="text-primary">{s.label}:</strong> {s.address}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="lg:w-5/12 bg-secondary relative min-h-[400px] lg:min-h-auto rounded-2xl overflow-hidden m-2">
                        <img 
                            src="https://congtyluatacc.vn/wp-content/uploads/2025/11/z6933744955650_3e2b5ca7454622053833438356f7269a-removebg-preview.png" 
                            alt="Bản đồ chi nhánh"
                            className="absolute inset-0 w-full h-full object-contain p-8 z-10"
                        />
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                            <p className="text-white text-center text-sm font-medium">
                                Kết nối mọi miền tổ quốc
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Branches;