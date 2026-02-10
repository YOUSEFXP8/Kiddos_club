import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import BottomNavigation from './components/layout/BottomNavigation';
import GameMap from './components/map/GameMap';
import EpisodePage from './pages/EpisodePage';
import IntroPage from './pages/IntroPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import IconSelectionPage from './pages/IconSelectionPage';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';
import ProfilePage from './pages/ProfilePage';
import ChatListPage from './pages/ChatListPage';
import ChatDetailPage from './pages/ChatDetailPage';
import ProgramSelectionPage from './pages/ProgramSelectionPage';


const AppLayout = () => {
    const location = useLocation();
    
    // Screens where we hide both Header and BottomNav
    const isFullscreenPage = [
        '/', 
        '/login', 
        '/signup', 
        '/icon-selection', 
        '/create-post'
    ].includes(location.pathname);

    const isChatDetailPage = location.pathname.startsWith('/chat/');
    const isEpisodePage = location.pathname.startsWith('/episode/');
    

    const showHeader = location.pathname.startsWith('/program');
    
    const showBottomNav = !isFullscreenPage && !isChatDetailPage;

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center">
            <div className="w-full max-w-md bg-white min-h-screen relative shadow-2xl overflow-hidden flex flex-col">
                

                {!isFullscreenPage && !isEpisodePage && showHeader && <Header />}
                
                <main className="flex-grow relative z-0 overflow-y-auto bg-secondary">
                    <Routes>
                        <Route path="/" element={<IntroPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/icon-selection" element={<IconSelectionPage />} />
                        
                        <Route path="/home" element={<HomePage />} />
                        

                        <Route path="/program" element={<ProgramSelectionPage />} />
                        <Route path="/program/little-chefs" element={<GameMap />} />
                        

                        <Route path="/map" element={<Navigate to="/program/little-chefs" replace />} />
                        
                        <Route path="/episode/:id" element={<EpisodePage />} />
                        <Route path="/create-post" element={<CreatePostPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        
                        <Route path="/club" element={<ChatListPage />} />
                        <Route path="/chat/:id" element={<ChatDetailPage />} />
                        
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </main>
                
                {showBottomNav && <BottomNavigation />}
            </div>
        </div>
    );
};

function App() {
  return (
    <Router>
        <AppLayout />
    </Router>
  )
}

export default App
