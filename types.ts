import { LucideIcon } from 'lucide-react';

export interface Service {
    id: number;
    title: string;
    description: string;
    link: string;
    icon: LucideIcon;
}

export interface Testimonial {
    id: number;
    content: string;
    author: string;
    position: string;
    image: string;
}

export interface TeamMember {
    category: string;
    title: string;
    desc: string;
    tags: string[];
    img: string;
}

export interface PressItem {
    id: number;
    title: string;
    source: string;
    logo: string;
    img: string;
    link: string;
}

export interface Branch {
    id: string;
    title: string;
    address: string;
    phone: string;
    email: string;
    zalo: string;
    hotline: string;
    sub?: { label: string; address: string }[];
}

export interface WordPressPost {
    id: number;
    date: string;
    link: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    content?: { rendered: string };
    _embedded?: {
        'wp:featuredmedia'?: Array<{ source_url: string }>;
    };
}