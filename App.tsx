import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import SinglePostPage from './pages/SinglePostPage';
import SearchPage from './pages/SearchPage';

// Helper component to scroll to top on route change
const ScrollToTopHelper = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const AppContent = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-background overflow-x-hidden">
            <ScrollToTopHelper />
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dich-vu" element={<ArchivePage />} />
                <Route path="/dich-vu/:slug" element={<ArchivePage />} />
                <Route path="/tin-tuc" element={<ArchivePage />} />
                <Route path="/tuyen-dung" element={<ArchivePage />} />
                <Route path="/lien-he" element={<ArchivePage />} />
                <Route path="/gioi-thieu" element={<HomePage />} />
                <Route path="/post/:id" element={<SinglePostPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="*" element={<ArchivePage />} />
            </Routes>
            <Footer />
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;