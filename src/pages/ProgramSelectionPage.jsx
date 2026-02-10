import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefHat, Music, Palette, BookOpen, FlaskConical, Puzzle } from 'lucide-react';

const ProgramSelectionPage = () => {
    const navigate = useNavigate();

    const programs = [
        { 
            id: 'drawing', 
            title: 'Draw & Dream', 
            episodes: 10, 
            icon: Palette, 
            color: 'bg-purple-100 text-purple-600',
            borderColor: 'border-purple-200'
        },
        { 
            id: 'little-chefs', 
            title: 'Little Chefs Club', 
            episodes: 11, 
            icon: ChefHat, 
            color: 'bg-orange-100 text-orange-600',
            borderColor: 'border-orange-200',
            route: '/program/little-chefs'
        },
        { 
            id: 'music', 
            title: 'Music Playground', 
            episodes: 7, 
            icon: Music, 
            color: 'bg-green-100 text-green-600',
            borderColor: 'border-green-200'
        },
        { 
            id: 'word', 
            title: 'Word Of The Day', 
            episodes: 10, 
            icon: BookOpen, 
            color: 'bg-blue-100 text-blue-600',
            borderColor: 'border-blue-200'
        },
        { 
            id: 'science', 
            title: 'Fun Science Lab', 
            episodes: 5, 
            icon: FlaskConical, 
            color: 'bg-red-100 text-red-600',
            borderColor: 'border-red-200'
        },
        { 
            id: 'puzzle', 
            title: 'Puzzle Masters', 
            episodes: 4, 
            icon: Puzzle, 
            color: 'bg-yellow-100 text-yellow-600',
            borderColor: 'border-yellow-200'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-24 px-4 pt-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Explore Clubs</h1>
            <p className="text-gray-500 mb-6 text-sm">Pick a path and start your adventure!</p>

            <div className="grid grid-cols-2 gap-4">
                {programs.map((prog) => (
                    <button 
                        key={prog.id}
                        onClick={() => navigate(prog.route || '/program')}
                        className={`
                            flex flex-col items-center justify-center p-6 rounded-[24px] 
                            border-2 ${prog.borderColor} ${prog.color.split(' ')[0]} 
                            hover:scale-105 transition-transform shadow-sm
                        `}
                    >
                        <prog.icon size={48} className={`mb-4 ${prog.color.split(' ')[1]}`} />
                        <h3 className="font-bold text-gray-800 text-sm mb-1 text-center leading-tight">{prog.title}</h3>
                        <span className="text-[10px] font-bold text-gray-500 bg-white/50 px-2 py-1 rounded-full">
                            {prog.episodes} EP
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProgramSelectionPage;
