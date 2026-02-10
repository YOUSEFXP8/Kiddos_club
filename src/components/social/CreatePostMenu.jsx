import React from 'react';
import { X, Type, Camera, Image, Video } from 'lucide-react';
import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';

const CreatePostMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleSelect = (type) => {
    onClose();
    navigate('/create-post', { state: { type } });
  };

  const menuItems = [
    { label: 'Chat', icon: Type, color: 'bg-orange-400', delay: 'delay-0', type: 'text' }, 
    { label: 'Camera', icon: Camera, color: 'bg-red-400', delay: 'delay-75', type: 'camera' },
    { label: 'Gallery', icon: Image, color: 'bg-yellow-400', delay: 'delay-100', type: 'gallery' },
    { label: 'Video', icon: Video, color: 'bg-green-400', delay: 'delay-150', type: 'video' },
  ];

  /*
    Layout Logic:
    Semicircle array around the center bottom.
    We can position them absolutely relative to the center bottom trigger.
  */

  return (
    <div className="absolute inset-0 z-50 overflow-hidden pointer-events-none">
       {/* Backdrop */}
       <div 
          className="absolute inset-0 bg-white/80 backdrop-blur-sm transition-opacity duration-300 pointer-events-auto"
          onClick={onClose}
        />

        {/* Menu Items Container - Positioned above the FAB location */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-80 h-40 pointer-events-none">
             {/* 
                 We want them to fan out. 
                 Using transform translate/rotate is easiest, or absolute coordinates.
                 Let's use absolute positioning based on a rough semi-circle.
             */}
             
             {/* Item 1 (Far Left) */}
             <MenuItem 
                item={menuItems[0]} 
                position="bottom-0 left-4" 
                onClick={() => handleSelect('text')}
             />
             
             {/* Item 2 (Mid Left) */}
             <MenuItem 
                item={menuItems[1]} 
                position="bottom-12 left-20" 
                onClick={() => handleSelect('camera')}
             />

             {/* Item 3 (Mid Right) */}
             <MenuItem 
                item={menuItems[2]} 
                position="bottom-12 right-20" 
                onClick={() => handleSelect('gallery')}
             />

             {/* Item 4 (Far Right) */}
             <MenuItem 
                item={menuItems[3]} 
                position="bottom-0 right-4" 
                onClick={() => handleSelect('video')}
             />
        </div>

        {/* Close Button - Overlays the original FAB visually or we just use the backdrop to close */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-auto">
             <button 
                onClick={onClose}
                className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
            >
                <X size={32} />
             </button>
        </div>
    </div>
  );
};

const MenuItem = ({ item, position, onClick }) => (
    <div className={clsx("absolute pointer-events-auto animate-bounce-in", position)}>
        <button 
            onClick={onClick}
            className={clsx(
                "w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform hover:scale-110 active:scale-90",
                item.color
            )}
        >
            <item.icon size={24} />
        </button>
        <span className="absolute -bottom-6 w-full text-center text-xs font-bold text-gray-600 left-0">
            {item.label}
        </span>
    </div>
);

export default CreatePostMenu;
