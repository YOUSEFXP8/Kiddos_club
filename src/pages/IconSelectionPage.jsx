import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, ChevronRight } from 'lucide-react';

const IconSelectionPage = () => {
    const navigate = useNavigate();

    // Placeholder data for icons

    const icons = ['Cookie', 'Cupcake', 'Pizza', 'Burger', 'Apple', 'Carrot'];

    return (
        <div className="min-h-screen bg-white flex flex-col p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Choose an Icon</h1>
            <p className="text-gray-500 mb-6">Pick a character that looks like you!</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
                {icons.map((seed) => (
                    <button 
                        key={seed}
                        onClick={() => navigate('/home')}
                        className="aspect-square bg-gray-50 rounded-[24px] border border-gray-100 flex flex-col items-center justify-center p-4 hover:border-primary hover:bg-orange-50 transition-all group"
                    >
                         <img 
                            src={`https://api.dicebear.com/7.x/notionists/svg?seed=${seed}`} 
                            alt={seed}
                            className="w-20 h-20 mb-2 group-hover:scale-110 transition-transform"
                        />
                    </button>
                ))}
            </div>

            <div className="mt-auto">
                 <button className="w-full border-2 border-dashed border-gray-300 rounded-[24px] p-4 flex items-center justify-center space-x-2 text-gray-500 font-bold hover:border-primary hover:text-primary transition-colors">
                    <Upload size={20} />
                    <span>Or Upload Photo</span>
                 </button>
            </div>
        </div>
    );
};

export default IconSelectionPage;
