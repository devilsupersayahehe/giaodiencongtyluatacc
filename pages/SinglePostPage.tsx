import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import CommentSection from '../components/CommentSection';
import { WordPressPost } from '../types';
import { Clock, User, Facebook, Linkedin, Link as LinkIcon, Calendar, Tag, ChevronRight, Home, ArrowLeft, Quote } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { MOCK_POSTS } from '../constants';

const SinglePostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState<WordPressPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            try {
                // Try fetching from API
                const response = await fetch(`https://congtyluatacc.vn/wp-json/wp/v2/posts/${id}?_embed`);
                if(!response.ok) throw new Error("Not found");
                const data = await response.json();
                setPost(data);
            } catch (err) {
                // Fallback to MOCK_POSTS
                const mock = MOCK_POSTS.find(p => p.id === Number(id));
                if (mock) {
                    setPost(mock);
                } else {
                    console.error("Post not found in API or Mock data");
                    setPost(null);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-500 text-sm animate-pulse">Đang tải nội dung...</p>
            </div>
        </div>
    );

    if (!post) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-4xl">📄</div>
            <h2 className="text-2xl font-bold text-gray-500">Bài viết không tồn tại</h2>
            <Link to="/" className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-hover transition-colors shadow-lg">
                <ArrowLeft size={18} /> Quay về trang chủ
            </Link>
        </div>
    );

    // 1) Logic hiển thị Tên Danh Mục (Category Name)
    const getCategoryName = () => {
        // Trong thực tế, bạn sẽ lấy từ post.categories hoặc post._embedded['wp:term']
        // Ở đây mình sẽ giả lập dựa trên tiêu đề hoặc link để trả về tên danh mục tiếng Việt
        const titleLower = post.title.rendered.toLowerCase();
        if (titleLower.includes('doanh nghiệp') || titleLower.includes('công ty')) return 'Doanh Nghiệp';
        if (titleLower.includes('đất') || titleLower.includes('sổ đỏ')) return 'Đất Đai';
        if (titleLower.includes('lao động')) return 'Lao Động';
        if (titleLower.includes('ly hôn') || titleLower.includes('kết hôn')) return 'Hôn Nhân';
        if (titleLower.includes('hợp đồng')) return 'Hợp Đồng';
        if (titleLower.includes('đầu tư')) return 'Đầu Tư';
        
        return 'Tin Tức Pháp Lý';
    };

    const categoryName = getCategoryName();

    return (
        <div className="bg-[#f8f9fa] min-h-screen font-sans">
            {/* Breadcrumb Header */}
            <div className="bg-[#1f2b3d] text-white py-6 shadow-md relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400 overflow-x-auto whitespace-nowrap">
                        <Link to="/" className="hover:text-white flex items-center gap-1 transition-colors"><Home size={14} /> Trang chủ</Link>
                        <ChevronRight size={14} />
                        <Link to="/tin-tuc" className="hover:text-white transition-colors">Tin tức</Link>
                        <ChevronRight size={14} />
                        <span className="text-white font-medium truncate max-w-[300px]" dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-10">
                    
                    {/* MAIN CONTENT (Left) */}
                    <main className="flex-1 min-w-0">
                        <article className="bg-white p-6 md:p-10 rounded-2xl shadow-card border border-gray-100/50">
                            
                            {/* Meta Data */}
                            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500 mb-6 border-b border-gray-100 pb-6">
                                <span className="bg-primary/10 text-primary px-3 py-1.5 rounded font-bold flex items-center gap-1 uppercase text-xs tracking-wider">
                                    <Tag size={12} /> {categoryName}
                                </span>
                                <span className="flex items-center gap-1.5 font-medium">
                                    <Calendar size={14} className="text-gray-400" /> {new Date(post.date).toLocaleDateString('vi-VN')}
                                </span>
                                <span className="flex items-center gap-1.5 font-medium">
                                    <User size={14} className="text-gray-400" /> Bởi: <strong className="text-secondary">Công Ty Luật ACC</strong>
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl md:text-3xl lg:text-[2.5rem] font-sans font-bold text-[#1f2b3d] mb-8 leading-[1.3] tracking-tight" dangerouslySetInnerHTML={{__html: post.title.rendered}} />

                            {/* 3) REMOVED FEATURED IMAGE as requested */}

                            {/* Content Body */}
                            <div className="content-body">
                                
                                {/* 5) Professional Excerpt (Summary) Section */}
                                <div className="relative bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-6 md:p-8 rounded-xl mb-10 shadow-sm overflow-hidden">
                                    <Quote className="absolute top-0 right-0 text-blue-100 w-24 h-24 -mr-4 -mt-4 transform rotate-180" />
                                    <div className="relative z-10">
                                        <p className="font-bold text-primary mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
                                            <span className="w-8 h-[2px] bg-primary"></span> Tóm tắt nội dung
                                        </p>
                                        <div 
                                            className="text-lg md:text-xl font-medium text-slate-700 italic leading-relaxed" 
                                            dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} 
                                        />
                                    </div>
                                </div>

                                {/* 4) Main Text with Normalized Typography (Fixed bold/faint issues) */}
                                <div 
                                    className="prose prose-lg max-w-none 
                                    font-sans text-[#334155]
                                    /* Normalize headings */
                                    prose-headings:font-sans prose-headings:font-bold prose-headings:text-[#1f2b3d] prose-headings:mt-10 prose-headings:mb-4
                                    prose-h2:text-2xl prose-h2:tracking-tight
                                    prose-h3:text-xl prose-h3:text-primary prose-h3:font-bold
                                    
                                    /* Normalize Paragraphs to avoid faint/bold mix */
                                    prose-p:text-base prose-p:leading-8 prose-p:font-normal prose-p:text-slate-700 prose-p:mb-6 prose-p:text-justify
                                    
                                    /* Normalize Strong/Bold tags */
                                    prose-strong:font-bold prose-strong:text-slate-900
                                    
                                    /* Links */
                                    prose-a:text-primary hover:prose-a:text-[#6b2323] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                                    
                                    /* Lists */
                                    prose-ul:list-disc prose-ul:pl-6 prose-li:marker:text-primary prose-li:mb-2 prose-li:text-slate-700
                                    
                                    /* Images */
                                    prose-img:rounded-xl prose-img:shadow-md prose-img:my-8 prose-img:border prose-img:border-gray-100"
                                    dangerouslySetInnerHTML={{__html: post.content?.rendered || post.excerpt.rendered}} 
                                />
                            </div>

                            {/* Social Share */}
                            <div className="mt-12 pt-8 border-t border-gray-100">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="flex gap-2 items-center">
                                        <span className="text-sm font-bold text-gray-700">Link bài viết:</span>
                                        <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 truncate max-w-[200px]">
                                            /post/{id}
                                        </code>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-bold text-gray-700">Chia sẻ:</span>
                                        <button className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:-translate-y-1 transition-all shadow-sm"><Facebook size={16} /></button>
                                        <button className="w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:-translate-y-1 transition-all shadow-sm"><Linkedin size={16} /></button>
                                        <button className="w-9 h-9 rounded-full bg-gray-600 text-white flex items-center justify-center hover:-translate-y-1 transition-all shadow-sm"><LinkIcon size={16} /></button>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Comments Section */}
                        <div className="mt-8 bg-white p-6 md:p-10 rounded-2xl shadow-card border border-gray-100/50">
                            <CommentSection />
                        </div>
                    </main>

                    {/* SIDEBAR (Right) - Sticky */}
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default SinglePostPage;