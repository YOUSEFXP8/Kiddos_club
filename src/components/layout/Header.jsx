import React from 'react';
import { ChevronLeft, Trophy, Flame, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-40 bg-primary px-4 pt-4 pb-4 rounded-b-[32px] shadow-md text-white">
      <div className="flex items-center justify-between mb-2">
        <button 
           onClick={() => navigate(-1)} 
           className="p-2 hover:bg-orange-600 rounded-full transition-colors"
        >
          <ChevronLeft size={28} />
        </button>
        <h1 className="text-xl font-bold tracking-wide">Kiddos Club</h1>
        <button className="p-2 hover:bg-orange-600 rounded-full transition-colors">
          <Trophy size={28} />
        </button>
      </div>
      
      {/* Stats Row */}
      <div className="flex items-center justify-center space-x-6">
        <div className="flex items-center space-x-1 bg-orange-600/30 px-3 py-1 rounded-full">
            <Flame size={16} className="fill-white" />
            <span className="font-bold text-sm">6</span>
        </div>
        <div className="flex items-center space-x-1 bg-orange-600/30 px-3 py-1 rounded-full">
            <Star size={16} className="fill-white" />
            <span className="font-bold text-sm">10</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
