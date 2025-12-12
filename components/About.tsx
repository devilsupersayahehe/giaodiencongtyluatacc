import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const About = () => {
    const checklist = [
        'Đội ngũ luật sư hàng đầu với nhiều năm kinh nghiệm.',
        'Quy trình làm việc chuyên nghiệp, minh bạch.',
        'Chi phí hợp lý, không phát sinh.',
        'Hỗ trợ 24/7, mọi lúc mọi nơi.'
    ];

    return (
        <section className="py-20 bg-white overflow-hidden relative">
            <div className="absolute left-0 top-0 w-2/3 h-full bg-background -skew-x-12 -translate-x-32 z-0 hidden lg:block"></div>

            <div className="max-w-[1150px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <img 
                                src="https://congtyluatacc.vn/wp-content/uploads/2025/07/still-life-with-scales-justice-1-scaled.jpg" 
                                alt="Về Công ty Luật ACC" 
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <p className="font-serif font-bold text-xl mb-1">Chuyên Nghiệp & Tận Tâm</p>
                                    <p className="text-sm opacity-90 font-light">Cam kết bảo vệ quyền lợi khách hàng tuyệt đối.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">
                            Giới Thiệu Về Chúng Tôi
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Với đội ngũ luật sư giàu kinh nghiệm, am hiểu sâu sắc pháp luật Việt Nam và quốc tế, ACC không chỉ là đơn vị tư vấn mà còn là đối tác chiến lược, giúp khách hàng phòng ngừa rủi ro và phát triển bền vững.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {checklist.map((item, idx) => (
                                <li key={idx} className="flex items-center text-secondary font-medium group">
                                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a 
                            href="#" 
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg font-bold shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                        >
                            <span>Tìm Hiểu Thêm</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;