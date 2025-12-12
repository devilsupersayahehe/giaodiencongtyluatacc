import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white relative overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                 <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
                 <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
            </div>

            {/* CTA Section */}
            <div className="relative border-b border-white/10">
                <div className="max-w-[1150px] mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">Đăng ký nhận tư vấn miễn phí</h2>
                        <p className="text-gray-400">Để lại email, chúng tôi sẽ liên hệ lại ngay trong 24h.</p>
                    </div>
                    <div className="w-full md:w-auto flex-1 max-w-md">
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="Địa chỉ Email của bạn..." 
                                className="w-full bg-white/5 border border-white/20 rounded-full pl-6 pr-32 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:bg-white/10 transition-all"
                            />
                            <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-primary hover:bg-primary-hover text-white px-6 rounded-full font-bold text-sm transition-all shadow-lg">
                                Đăng Ký
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-[1150px] mx-auto px-6 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
                    
                    {/* Brand Column (4 cols) */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link to="/" className="block">
                            <img 
                                src="https://congtyluatacc.vn/wp-content/uploads/2025/07/Ban-sao-cua-Ban-sao-cua-CONG-TY-LUAT-ACC-DONG-HANH-PHAP-LY-CUNG-BAN.png" 
                                alt="Công Ty Luật ACC" 
                                className="h-16 w-auto object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed text-justify">
                            Công Ty Luật ACC tự hào là đơn vị tiên phong cung cấp giải pháp pháp lý toàn diện. Với đội ngũ luật sư giàu kinh nghiệm, chúng tôi cam kết bảo vệ tối đa quyền lợi của khách hàng.
                        </p>
                        
                        <div className="pt-4">
                            <p className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Kết nối với chúng tôi</p>
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:-translate-y-1 transition-all">
                                    <Facebook size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:-translate-y-1 transition-all">
                                    <Linkedin size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF0000] hover:border-[#FF0000] hover:-translate-y-1 transition-all">
                                    <Youtube size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links (3 cols) */}
                    <div className="lg:col-span-3">
                        <h3 className="text-lg font-bold font-serif mb-6 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            Dịch Vụ Chính
                        </h3>
                        <ul className="space-y-3">
                            {['Thành Lập Doanh Nghiệp', 'Giấy Phép Kinh Doanh', 'Sở Hữu Trí Tuệ', 'Kế Toán - Thuế', 'Đầu Tư Nước Ngoài', 'Tư Vấn Hợp Đồng'].map((item) => (
                                <li key={item}>
                                    <Link to={`/dich-vu/${item.toLowerCase().replace(/ /g, '-')}`} className="text-gray-400 hover:text-primary transition-all text-sm flex items-center gap-2 group">
                                        <CheckCircle2 size={14} className="text-primary/50 group-hover:text-primary transition-colors" />
                                        <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info (5 cols) */}
                    <div className="lg:col-span-5">
                        <h3 className="text-lg font-bold font-serif mb-6 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            Hệ Thống Văn Phòng
                        </h3>
                        <div className="space-y-5">
                             <div className="flex items-start gap-4 group">
                                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                                    <MapPin size={16} className="text-primary group-hover:text-white" />
                                </div>
                                <div>
                                    <strong className="block text-white text-sm mb-1">TP. Hồ Chí Minh (Trụ sở chính)</strong>
                                    <span className="text-gray-400 text-sm">Tầng 3, 39 Hoàng Việt, P. Tân Sơn Nhất, Q. Tân Bình</span>
                                </div>
                            </div>
                             <div className="flex items-start gap-4 group">
                                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                                    <MapPin size={16} className="text-primary group-hover:text-white" />
                                </div>
                                <div>
                                    <strong className="block text-white text-sm mb-1">TP. Hà Nội</strong>
                                    <span className="text-gray-400 text-sm">Tầng 5A, 298 Cầu Giấy, P. Cầu Giấy</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                                    <Phone size={16} className="text-primary group-hover:text-white" />
                                </div>
                                <div>
                                    <strong className="block text-white text-sm mb-1">Tổng đài hỗ trợ</strong>
                                    <a href="tel:19003330" className="text-2xl font-bold text-white hover:text-primary transition-colors">1900.3330</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-white/5 bg-black/20">
                <div className="max-w-[1150px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© 2024 Công Ty Luật ACC. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a>
                        <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;