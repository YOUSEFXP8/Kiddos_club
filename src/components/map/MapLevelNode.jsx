import React from 'react';
import { Lock } from 'lucide-react';
import { clsx } from 'clsx';

const MapLevelNode = ({ level, status, x, y, onClick }) => {
  const isLocked = status === 'locked';
  
  return (
    <div 
      className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <button
        onClick={onClick}
        className={clsx(
          "w-16 h-16 rounded-full flex items-center justify-center border-4 shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer z-10",
          isLocked 
            ? "bg-gray-200 border-gray-300" 
            : "bg-white border-primary"
        )}
      >
        {isLocked ? (
          <Lock size={24} className="text-gray-400" />
        ) : (
          <span className="text-2xl font-bold text-primary">{level}</span>
        )}
      </button>
      
      {!isLocked && (
        <div className="mt-1 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs font-bold text-gray-600 shadow-sm border border-gray-100">
          Start
        </div>
      )}
    </div>
  );
};

export default MapLevelNode;
