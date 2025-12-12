import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, Clock, MapPin, Menu, X, Facebook, Linkedin, Youtube, Search, ArrowRight, TrendingUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const searchInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (searchOpen && searchInputRef.current) {
            // Prevent scrolling when modal is open
            document.body.style.overflow = 'hidden';
            setTimeout(() => searchInputRef.current?.focus(), 100);
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [searchOpen]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if(searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            setSearchOpen(false);
            setSearchQuery('');
        }
    };

    const navLinks = [
        { name: 'Trang Chủ', href: '/' },
        { name: 'Giới Thiệu', href: '/gioi-thieu' },
        { name: 'Dịch Vụ', href: '/dich-vu' },
        { name: 'Tin Tức', href: '/tin-tuc' },
        { name: 'Tuyển Dụng', href: '/tuyen-dung' },
        { name: 'Liên Hệ', href: '/lien-he' },
    ];

    return (
        <>
            {/* Top Bar */}
            <div className="hidden lg:block bg-[#16202e] text-gray-300 py-2 text-xs border-b border-white/5 relative z-50">
                <div className="max-w-[1150px] mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 hover:text-white transition-colors">
                            <Phone size={14} className="text-primary-light" /> 
                            Hotline: <strong className="text-white">1900.3330</strong>
                        </span>
                        <span className="flex items-center gap-2 hover:text-white transition-colors">
                            <Mail size={14} className="text-primary-light" /> 
                            info@accgroup.vn
                        </span>
                        <span className="flex items-center gap-2 hover:text-white transition-colors">
                            <Clock size={14} className="text-primary-light" /> 
                            Thứ 2 - Thứ 7: 8:00 - 17:30
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="opacity-80">Kết nối:</span>
                        <a href="#" className="hover:text-primary-light text-white transition-colors"><Facebook size={14} /></a>
                        <a href="#" className="hover:text-primary-light text-white transition-colors"><Linkedin size={14} /></a>
                        <a href="#" className="hover:text-primary-light text-white transition-colors"><Youtube size={14} /></a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <header 
                className={`sticky top-0 w-full z-40 transition-all duration-300 border-b border-white/5 ${
                    scrolled ? 'bg-secondary shadow-lg py-2' : 'bg-secondary py-3 md:py-4'
                }`}
            >
                <div className="max-w-[1150px] mx-auto px-6 flex justify-between items-center relative">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group relative z-50">
                        <img 
                            src="https://congtyluatacc.vn/wp-content/uploads/2025/07/Ban-sao-cua-Ban-sao-cua-CONG-TY-LUAT-ACC-DONG-HANH-PHAP-LY-CUNG-BAN.png" 
                            alt="Công Ty Luật ACC" 
                            className="h-10 md:h-14 w-auto object-contain brightness-0 invert"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className={`hidden lg:flex items-center gap-8 ${searchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-300`}>
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                to={link.href} 
                                className="text-sm font-semibold text-white/90 hover:text-white transition-colors relative group py-2"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                        
                        <button 
                            onClick={() => setSearchOpen(true)} 
                            className="text-white/90 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 group"
                            aria-label="Tìm kiếm"
                        >
                            <Search size={20} className="group-hover:scale-110 transition-transform" />
                        </button>

                        <a 
                            href="tel:19003330" 
                            className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5"
                        >
                            Tư Vấn Ngay
                        </a>
                    </nav>

                    {/* Mobile Controls */}
                    <div className="flex items-center gap-4 lg:hidden relative z-50">
                        <button onClick={() => setSearchOpen(!searchOpen)} className="text-white p-2">
                            {searchOpen ? null : <Search size={24} />}
                        </button>
                        <button 
                            className="text-white p-2"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu size={28} />
                        </button>
                    </div>

                    {/* 2) Professional Search Modal */}
                    <div 
                        className={`fixed inset-0 z-[60] flex items-start justify-center pt-24 lg:pt-32 px-4 transition-all duration-300 ${
                            searchOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                        }`}
                    >
                        {/* Backdrop */}
                        <div 
                            className="absolute inset-0 bg-secondary/80 backdrop-blur-md transition-opacity" 
                            onClick={() => setSearchOpen(false)}
                        ></div>

                        {/* Search Container */}
                        <div 
                            className={`relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ${
                                searchOpen ? 'translate-y-0 scale-100' : '-translate-y-10 scale-95'
                            }`}
                        >
                            {/* Search Header */}
                            <form onSubmit={handleSearch} className="relative flex items-center p-2 border-b border-gray-100">
                                <Search className="w-6 h-6 text-gray-400 ml-4 absolute pointer-events-none" />
                                <input 
                                    ref={searchInputRef}
                                    type="text" 
                                    placeholder="Bạn đang tìm kiếm dịch vụ gì?" 
                                    className="w-full h-16 pl-14 pr-14 text-lg text-secondary placeholder-gray-400 bg-transparent border-none focus:ring-0 focus:outline-none"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button 
                                    type="button"
                                    onClick={() => setSearchOpen(false)} 
                                    className="absolute right-2 p-2 text-gray-400 hover:text-secondary hover:bg-gray-100 rounded-lg transition-all"
                                >
                                    <div className="flex items-center gap-2 text-xs font-bold border border-gray-200 rounded px-2 py-1">
                                        ESC
                                    </div>
                                </button>
                            </form>

                            {/* Quick Links / Suggestions */}
                            <div className="p-6 bg-gray-50/50">
                                <div className="flex items-center gap-2 mb-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                                    <TrendingUp size={14} /> Gợi ý tìm kiếm
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Thành lập công ty', 'Ly hôn đơn phương', 'Sổ đỏ', 'Giấy phép lao động', 'Tư vấn hợp đồng', 'Đất đai'].map((tag) => (
                                        <button 
                                            key={tag}
                                            onClick={() => {
                                                setSearchQuery(tag);
                                                // Optional: auto search on click
                                                navigate(`/search?q=${encodeURIComponent(tag)}`);
                                                setSearchOpen(false);
                                                setSearchQuery('');
                                            }}
                                            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all shadow-sm"
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <div 
                className={`fixed inset-0 z-50 bg-black/60 transition-opacity duration-300 lg:hidden ${
                    mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setMobileMenuOpen(false)}
            ></div>
            
            <div 
                className={`fixed top-0 right-0 h-full w-[280px] bg-secondary text-white z-50 shadow-2xl transform transition-transform duration-300 lg:hidden flex flex-col border-l border-white/10 ${
                    mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="p-5 flex justify-between items-center border-b border-white/10">
                    <span className="font-bold text-lg text-white font-serif">MENU</span>
                    <button 
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full"
                    >
                        <X size={20} />
                    </button>
                </div>
                
                <div className="flex-1 overflow-y-auto py-4">
                    <div className="flex flex-col px-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                to={link.href} 
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-3 px-4 text-gray-300 font-medium hover:bg-white/10 hover:text-white rounded-lg transition-colors border-b border-white/5 last:border-0"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="p-5 bg-black/20 border-t border-white/10">
                    <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                            <MapPin size={16} className="text-primary" />
                            <span>Hà Nội, Đà Nẵng, TP.HCM</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                            <Phone size={16} className="text-primary" />
                            <span>1900.3330</span>
                        </div>
                    </div>
                    <a href="tel:19003330" className="flex items-center justify-center gap-2 w-full text-center bg-primary hover:bg-primary-hover text-white py-3 rounded-lg font-bold shadow-lg transition-colors">
                        <Phone size={18} /> Gọi Ngay
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;