import React from 'react';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    alignment?: 'center' | 'left';
    light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, alignment = 'center', light = false }) => {
    return (
        <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
            <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-3 ${light ? 'text-white' : 'text-secondary'}`}>
                {title}
            </h2>
            <div className={`w-20 h-1.5 bg-primary rounded-full mb-4 ${alignment === 'center' ? 'mx-auto' : ''}`}></div>
            {subtitle && (
                <p className={`text-base max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;