import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { WordPressPost } from '../types';
import { Link, useSearchParams } from 'react-router-dom';
import { MOCK_POSTS } from '../constants';
import { Search, FileText } from 'lucide-react';

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [posts, setPosts] = useState<WordPressPost[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchSearch = async () => {
            if (!query) {
                setPosts([]);
                return;
            }
            setLoading(true);
            try {
                // Try fetching from API
                const response = await fetch(`https://congtyluatacc.vn/wp-json/wp/v2/posts?search=${encodeURIComponent(query)}&_embed`);
                const data = await response.json();
                
                if (data && data.length > 0) {
                    setPosts(data);
                } else {
                    // Fallback to Mock Data filtering if API returns nothing (or for demo purposes)
                    // In a real app, you might want to show "No results" if API returns []
                    // But here we want to ensure *some* content might show if keywords match our mock data
                    const lowerQuery = query.toLowerCase();
                    const mockResults = MOCK_POSTS.filter(post => 
                        post.title.rendered.toLowerCase().includes(lowerQuery) || 
                        post.excerpt.rendered.toLowerCase().includes(lowerQuery)
                    );
                    setPosts(mockResults);
                }
            } catch (err) {
                console.warn("API Search failed, checking mock data");
                // Fallback to Mock Data on API Error
                const lowerQuery = query.toLowerCase();
                const mockResults = MOCK_POSTS.filter(post => 
                    post.title.rendered.toLowerCase().includes(lowerQuery) || 
                    post.excerpt.rendered.toLowerCase().includes(lowerQuery)
                );
                setPosts(mockResults);
            } finally {
                setLoading(false);
            }
        };
        fetchSearch();
    }, [query]);

    return (
        <div className="bg-background min-h-screen py-12">
            <div className="max-w-[1150px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    <main className="w-full lg:w-2/3">
                        <div className="mb-8 pb-6 border-b border-gray-200">
                            <h1 className="text-3xl font-serif font-bold text-secondary mb-3 flex items-center gap-3">
                                <Search className="text-primary" size={32} />
                                Kết quả tìm kiếm
                            </h1>
                            <p className="text-gray-500 text-lg">
                                Từ khóa: <span className="bg-primary/10 text-primary px-3 py-1 rounded font-bold border border-primary/20">"{query}"</span>
                            </p>
                        </div>

                        {loading ? (
                            <div className="py-20 flex flex-col items-center justify-center opacity-70">
                                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                                <p className="text-gray-500">Đang tìm kiếm dữ liệu...</p>
                            </div>
                        ) : posts.length === 0 ? (
                            <div className="bg-white p-12 rounded-xl text-center border border-gray-100 shadow-sm">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                                    <Search size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-2">Không tìm thấy kết quả</h3>
                                <p className="text-gray-500">Vui lòng thử lại với từ khóa khác ngắn gọn hơn.</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <p className="text-sm text-gray-500 mb-4">Tìm thấy <strong>{posts.length}</strong> kết quả phù hợp.</p>
                                {posts.map(post => (
                                    <div key={post.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                                        <div className="flex gap-4 items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                                                    <FileText size={20} />
                                                </div>
                                            </div>
                                            <div>
                                                <Link to={`/post/${post.id}`}>
                                                    <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors leading-tight" dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                                                </Link>
                                                <div className="text-sm text-gray-600 line-clamp-2 mb-3" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                                                <Link to={`/post/${post.id}`} className="text-xs font-bold uppercase tracking-wider text-primary hover:underline">
                                                    Xem chi tiết &rarr;
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
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

export default SearchPage;