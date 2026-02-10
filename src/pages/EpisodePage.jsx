import React, { useState } from 'react';
import { ChevronLeft, Star, Clock, Plus, Download, Play, Clapperboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EpisodePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="flex flex-col min-h-screen bg-white">

      <div className="absolute top-0 left-0 right-0 z-50 p-4">
        <button 
          onClick={() => navigate(-1)}
          className="bg-primary text-white p-2 rounded-full hover:bg-orange-600 transition-colors shadow-md"
        >
          <ChevronLeft size={24} />
        </button>
      </div>


      <div className="relative w-full aspect-video bg-black rounded-b-[32px] overflow-hidden shadow-lg">
        {/* Placeholder for video content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-50">
            <Play size={48} className="text-white fill-white" />
        </div>
        

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
            <div className="flex justify-between items-end">
                <h1 className="text-2xl font-bold mb-2">Rainbow Sandwich Party</h1>
                <div className="bg-primary px-3 py-1 rounded-full flex items-center space-x-1 text-sm font-bold mb-2">
                    <Clock size={14} />
                    <span>2h 30m</span>
                </div>
            </div>
        </div>
      </div>


      <div className="px-6 py-4 flex items-center space-x-3 overflow-x-auto">
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">2026</span>
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">Program</span>
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">English</span>
        <div className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
             <Star size={14} className="fill-yellow-400 text-yellow-400" />
             <span className="text-gray-800">9.0</span>
        </div>
      </div>


      <div className="px-6 pb-4 flex items-center text-gray-500 text-sm font-medium">
        <Clapperboard size={16} className="mr-2" />
        <span>Reem • Leen</span>
      </div>


      <div className="px-6 py-2 flex items-center space-x-4">
        <button className="flex-1 bg-orange-100 text-primary py-3 rounded-full flex items-center justify-center space-x-2 font-bold hover:bg-orange-200 transition-colors">
            <Star size={20} className="fill-primary" />
            <span>Rate</span>
        </button>
        <button className="w-12 h-12 border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors">
            <Plus size={24} />
        </button>
        <button className="w-12 h-12 border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors">
            <Download size={24} />
        </button>
      </div>


      <div className="px-6 mt-4 border-b border-gray-100">
        <div className="flex space-x-6">
            {['About', 'Ingredients', 'Steps', 'Reviews'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`pb-3 text-sm font-bold transition-colors relative ${
                        activeTab === tab.toLowerCase() 
                        ? 'text-primary' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                    {tab}
                    {activeTab === tab.toLowerCase() && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />
                    )}
                </button>
            ))}
        </div>
      </div>


      <div className="px-6 py-6 flex-grow">
        {activeTab === 'about' && (
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-bold mb-2">About</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        Join Reem and Leen in this colorful episode where we learn how to make the most delicious Rainbow Sandwiches! Perfect for parties and healthy snacks.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-3">Cast</h3>
                    <div className="flex space-x-4">
                        <div className="flex flex-col items-center space-y-2">
                             <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                                {/* Placeholder Avatar */}
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Reem" alt="Reem" />
                             </div>
                             <span className="text-xs font-medium text-gray-800">Reem Bashir</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                             <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                                {/* Placeholder Avatar */}
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Leen" alt="Leen" />
                             </div>
                             <span className="text-xs font-medium text-gray-800">Leen abu salah</span>
                        </div>
                    </div>
                </div>
            </div>
        )}
        {activeTab !== 'about' && (
            <div className="text-center text-gray-400 py-10">
                Content for {activeTab} coming soon!
            </div>
        )}
      </div>
    </div>
  );
};

export default EpisodePage;
