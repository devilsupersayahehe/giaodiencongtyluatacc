import React, { useState } from 'react';
import { User, Send, MessageSquare, AlertCircle } from 'lucide-react';

const CommentSection = () => {
    // Empty initial state as requested
    const [comments, setComments] = useState<any[]>([]);

    return (
        <div className="mt-4">
            <h3 className="text-2xl font-bold font-sans text-secondary mb-8 flex items-center gap-3 pb-4 border-b border-gray-100">
                <MessageSquare className="text-primary" /> 
                Thảo Luận
            </h3>

            {/* Input Form */}
            <div className="flex gap-4 mb-10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                    <User size={20} />
                </div>
                <div className="flex-1">
                    <div className="relative">
                        <textarea 
                            className="w-full border border-gray-200 bg-gray-50 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none text-sm min-h-[100px] resize-y placeholder-gray-400"
                            placeholder="Để lại câu hỏi hoặc ý kiến của bạn tại đây..."
                        ></textarea>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <p className="text-xs text-gray-400">Email của bạn sẽ được bảo mật tuyệt đối.</p>
                        <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-primary-hover transition-all shadow-md active:scale-95">
                            Gửi Bình Luận <Send size={14} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Comment List */}
            <div className="space-y-6">
                {comments.length === 0 ? (
                    <div className="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-3 text-gray-400">
                            <AlertCircle size={24} />
                        </div>
                        <p className="text-gray-500 font-medium">Chưa có bình luận nào.</p>
                        <p className="text-sm text-gray-400 mt-1">Hãy là người đầu tiên đặt câu hỏi cho luật sư!</p>
                    </div>
                ) : (
                    comments.map((comment) => (
                        <div key={comment.id} className="flex gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light text-white flex items-center justify-center flex-shrink-0 font-bold text-sm shadow-sm">
                                {comment.author.charAt(0)}
                            </div>
                            <div className="flex-1">
                                <div className="bg-gray-50 p-4 rounded-2xl rounded-tl-none border border-gray-100">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-secondary text-sm">{comment.author}</span>
                                        <span className="text-xs text-gray-400">{comment.date}</span>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">{comment.content}</p>
                                </div>
                                <button className="text-xs text-gray-500 font-bold mt-1 ml-2 hover:text-primary transition-colors">Trả lời</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CommentSection;