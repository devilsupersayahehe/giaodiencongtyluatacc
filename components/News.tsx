import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { WordPressPost } from '../types';
import { MOCK_POSTS } from '../constants';
import { Link } from 'react-router-dom';

const News = () => {
    const [posts, setPosts] = useState<WordPressPost[]>([]);
    const [loading, setLoading] = useState(true);
    
    const NEWS_FALLBACK_IMAGE = "https://congtyluatacc.vn/wp-content/uploads/2025/07/still-life-with-scales-justice-scaled.jpg";

    useEffect(() => {
        const fetchNews = async () => {
            try {
                // Requested 6 posts
                const response = await fetch('https://congtyluatacc.vn/wp-json/wp/v2/posts?per_page=6&_embed');
                if (!response.ok) throw new Error("Failed to fetch");
                const data = await response.json();
                // Ensure we fallback to mock data if API returns empty, but prefer API
                setPosts(data.length > 0 ? data : MOCK_POSTS.slice(0, 6));
            } catch (err) {
                console.warn("API Error, using fallback data", err);
                // Fallback to 6 mock posts
                setPosts(MOCK_POSTS.slice(0, 6));
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const decodeEntities = (html: string) => {
        if (!html) return "";
        const textarea = document.createElement("textarea");
        textarea.innerHTML = html;
        let value = textarea.value;
        if (value.includes("&")) {
             const textarea2 = document.createElement("textarea");
             textarea2.innerHTML = value;
             value = textarea2.value;
        }
        return value;
    };

    const stripHtml = (html: string) => {
        const decoded = decodeEntities(html);
        return decoded.replace(/<[^>]*>?/gm, '');
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1150px] mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                     <div className="text-left w-full">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-secondary">
                            Tin Tức Mới Nhất
                        </h2>
                        <div className="w-20 h-1.5 bg-primary rounded-full mb-4"></div>
                        <p className="text-gray-600">Cập nhật kiến thức pháp lý mới nhất từ chuyên gia.</p>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-12">
                        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => {
                            let imgSrc = NEWS_FALLBACK_IMAGE;
                            if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
                                imgSrc = post._embedded['wp:featuredmedia'][0].source_url;
                            }

                            const cleanTitle = decodeEntities(post.title.rendered);
                            const cleanExcerpt = stripHtml(post.excerpt.rendered);

                            return (
                                <Link 
                                    key={post.id} 
                                    to={`/post/${post.id}`} 
                                    className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <img 
                                            src={imgSrc} 
                                            alt="Thumbnail" 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = NEWS_FALLBACK_IMAGE;
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-lg font-bold text-secondary mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                            {cleanTitle}
                                        </h3>
                                        <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-1">
                                            {cleanExcerpt}
                                        </p>
                                        <div className="flex items-center text-primary font-bold text-xs uppercase tracking-wider mt-auto">
                                            <span>Đọc tiếp</span>
                                            <ArrowRight className="w-3 h-3 ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
                
                <div className="mt-8 flex justify-end">
                     <Link to="/tin-tuc" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary border border-primary rounded-lg font-bold hover:bg-primary/5 transition-colors shadow-sm hover:shadow-md group">
                        Xem tất cả tin tức 
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default News;