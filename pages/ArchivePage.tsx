import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { WordPressPost } from '../types';
import { Clock, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MOCK_POSTS } from '../constants';

const ArchivePage = () => {
    const [posts, setPosts] = useState<WordPressPost[]>([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    
    // Fix URL Encoding: Decode URI component to get "Đầu tư" instead of "%C4%..."
    const rawSlug = location.pathname.split('/').pop() || '';
    const categoryName = decodeURIComponent(rawSlug).replace(/-/g, ' ');
    
    // Capitalize properly
    const displayTitle = categoryName
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ') || 'Tin Tức';

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://congtyluatacc.vn/wp-json/wp/v2/posts?per_page=10&_embed');
                if(!response.ok) throw new Error("API Fail");
                const data = await response.json();
                setPosts(data.length > 0 ? data : MOCK_POSTS);
            } catch (err) {
                console.warn("Using fallback posts", err);
                setPosts(MOCK_POSTS);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, [location.pathname]);

    return (
        <div className="bg-background min-h-screen py-12">
            <div className="max-w-[1150px] mx-auto px-6">
                <div className="text-sm text-gray-500 mb-8 flex items-center">
                    <Link to="/" className="hover:text-primary">Trang chủ</Link> 
                    <span className="mx-2">/</span> 
                    <span className="text-primary font-medium capitalize">{categoryName}</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    <main className="w-full lg:w-2/3">
                        <h1 className="text-3xl font-serif font-bold text-secondary mb-8 pb-4 border-b border-gray-200">
                            {displayTitle}
                        </h1>

                        {loading ? (
                            <div className="space-y-8">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="animate-pulse flex gap-6">
                                        <div className="w-1/3 bg-gray-200 h-48 rounded-xl"></div>
                                        <div className="flex-1 space-y-4 py-2">
                                            <div className="h-6 bg-gray-200 w-3/4 rounded"></div>
                                            <div className="h-4 bg-gray-200 w-full rounded"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-8">
                                {posts.map(post => (
                                    <article key={post.id} className="flex flex-col md:flex-row gap-6 group bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <Link to={`/post/${post.id}`} className="w-full md:w-5/12 overflow-hidden rounded-lg">
                                            <img 
                                                src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://congtyluatacc.vn/wp-content/uploads/2025/07/still-life-with-scales-justice-scaled.jpg'} 
                                                alt={post.title.rendered}
                                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </Link>
                                        <div className="flex-1 flex flex-col justify-center">
                                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                                                <span className="flex items-center gap-1"><Clock size={12}/> {new Date(post.date).toLocaleDateString('vi-VN')}</span>
                                                <span className="flex items-center gap-1"><User size={12}/> ACC Group</span>
                                            </div>
                                            <Link to={`/post/${post.id}`}>
                                                <h2 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-2" dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                                            </Link>
                                            <div className="text-gray-600 text-sm mb-4 line-clamp-3" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                                            <Link to={`/post/${post.id}`} className="text-primary text-sm font-bold uppercase tracking-wider hover:underline flex items-center gap-1">
                                                Xem chi tiết <User size={0} className="hidden" /> &rarr;
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </main>

                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default ArchivePage;