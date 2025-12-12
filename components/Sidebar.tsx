import React from 'react';
import { Phone, ChevronRight, Clock, Star, MapPin } from 'lucide-react';
import { MOCK_POSTS } from '../constants';
import { Link } from 'react-router-dom';

interface SidebarProps {
    title?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ title = "Bài Viết Liên Quan" }) => {
    return (
        <aside className="w-full lg:w-[350px] flex-shrink-0 space-y-8 lg:sticky lg:top-24 h-fit">
            
            {/* Contact Widget (Highlighted) */}
            <div className="bg-[#1f2b3d] text-white p-8 rounded-xl shadow-xl relative overflow-hidden group border border-gray-700">
                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg shadow-primary/40 animate-pulse">
                        <Phone size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-serif mb-2">Liên Hệ Luật Sư</h3>
                    <p className="text-gray-300 text-sm mb-6 px-2">
                        Giải đáp mọi thắc mắc pháp lý của bạn. Nhanh chóng - Chính xác - Bảo mật.
                    </p>
                    <a href="tel:19003330" className="w-full bg-white text-secondary hover:bg-gray-100 py-3 rounded-lg font-bold transition-all shadow-md flex items-center justify-center gap-2">
                        <Phone size={18} className="text-primary" /> 1900.3330
                    </a>
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        Luật sư đang trực tuyến
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-white/20 to-primary"></div>
            </div>

            {/* Related Posts Widget */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-soft">
                 <h3 className="text-lg font-bold text-secondary mb-6 flex items-center gap-2 border-b border-gray-100 pb-3">
                    <span className="w-1 h-6 bg-primary rounded-full"></span>
                    {title}
                </h3>
                <div className="space-y-6">
                    {MOCK_POSTS.slice(0, 5).map(post => (
                        <Link key={post.id} to={`/post/${post.id}`} className="flex gap-4 group">
                             <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg relative">
                                <img 
                                    src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url} 
                                    alt="thumb" 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                             </div>
                            <div className="flex-1 min-w-0 flex flex-col justify-center">
                                <h4 className="text-sm font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-2" dangerouslySetInnerHTML={{__html: post.title.rendered}}></h4>
                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <Clock size={12} />
                                    <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-soft">
                <h3 className="text-lg font-bold text-secondary mb-6 flex items-center gap-2 border-b border-gray-100 pb-3">
                    <span className="w-1 h-6 bg-primary rounded-full"></span>
                    Danh Mục Dịch Vụ
                </h3>
                <ul className="space-y-1">
                    {['Doanh Nghiệp', 'Đầu Tư', 'Giấy Phép', 'Sở Hữu Trí Tuệ', 'Thuế - Kế Toán', 'Lao Động', 'Đất Đai', 'Hôn Nhân'].map((cat, idx) => (
                        <li key={idx}>
                            <Link to={`/dich-vu/${cat.toLowerCase().replace(/ /g, '-')}`} className="flex justify-between items-center text-gray-600 hover:text-primary hover:bg-gray-50 px-3 py-3 rounded-lg transition-all group font-medium text-sm border-b border-gray-50 last:border-0">
                                <span>{cat}</span>
                                <ChevronRight size={16} className="text-gray-300 group-hover:text-primary transition-colors" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Reviews Widget */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl text-center border border-blue-100 shadow-sm">
                <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-secondary font-bold mb-1">Đánh giá 5/5</p>
                <p className="text-xs text-gray-500">Dựa trên 200+ đánh giá từ khách hàng</p>
            </div>
        </aside>
    );
};

export default Sidebar;