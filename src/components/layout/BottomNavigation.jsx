import React, { useState, useEffect } from 'react';
import { Home, MonitorPlay, Clapperboard, Star, User, Plus } from 'lucide-react';
import { clsx } from 'clsx';
import { useLocation, useNavigate } from 'react-router-dom';
import CreatePostMenu from '../social/CreatePostMenu';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    const path = location.pathname;
    if (path === '/home') setActiveTab('home');
    if (path === '/map' || path.startsWith('/episode')) setActiveTab('program');
    if (path === '/club') setActiveTab('club');
    if (path === '/profile') setActiveTab('profile');

  }, [location]);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, route: '/home' },
    { id: 'program', label: 'Program', icon: MonitorPlay, route: '/program' },
    { id: 'reels', label: 'Reels', icon: Clapperboard, route: '/home' }, // Generic placeholder
    { id: 'club', label: 'Club', icon: Star, route: '/club' },
    { id: 'profile', label: 'Profile', icon: User, route: '/profile' },
  ];



  const handleNavClick = (item) => {
    setActiveTab(item.id);
    navigate(item.route);
  };

  return (
    <>
        <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] px-4 py-2 bg-opacity-95 backdrop-blur-sm z-40">
        <div className="flex justify-between items-end relative">

            <NavItem item={navItems[0]} isActive={activeTab === 'home'} onClick={() => handleNavClick(navItems[0])} />
            <NavItem item={navItems[1]} isActive={activeTab === 'program'} onClick={() => handleNavClick(navItems[1])} />


            <div className="relative -top-6">
                <button 
                    onClick={() => setIsMenuOpen(true)}
                    className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors border-4 border-white cursor-pointer transform hover:scale-105 active:scale-95"
                >
                    <Plus size={32} strokeWidth={3} />
                </button>
            </div>


            <NavItem item={navItems[3]} isActive={activeTab === 'club'} onClick={() => handleNavClick(navItems[3])} />
            <NavItem item={navItems[4]} isActive={activeTab === 'profile'} onClick={() => handleNavClick(navItems[4])} />
        </div>
        </div>


        <CreatePostMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

const NavItem = ({ item, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className="flex flex-col items-center justify-end h-14 min-w-[64px] pb-1 space-y-1 cursor-pointer"
  >
    {isActive && (
      <div className="w-8 h-1 bg-primary rounded-full absolute top-0" />
    )}
    <item.icon 
      size={24} 
      className={clsx(
        "transition-colors",
        isActive ? "text-gray-800" : "text-gray-400"
      )} 
    />
    <span className={clsx(
      "text-xs font-medium",
      isActive ? "text-gray-800" : "text-gray-400"
    )}>
      {item.label}
    </span>
  </button>
);

export default BottomNavigation;
