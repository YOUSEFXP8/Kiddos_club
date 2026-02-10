import React from 'react';
import MapLevelNode from './MapLevelNode';
import { useNavigate } from 'react-router-dom';

const GameMap = () => {
  const navigate = useNavigate();


  const levels = [
    { id: 1, status: 'unlocked', x: 75, y: 90 }, // Bottom Right
    { id: 2, status: 'unlocked', x: 25, y: 78 }, // Left
    { id: 3, status: 'unlocked', x: 75, y: 64 }, // Right
    { id: 4, status: 'unlocked', x: 25, y: 50 }, // Left
    { id: 5, status: 'locked', x: 75, y: 36 },   // Right
    { id: 6, status: 'locked', x: 35, y: 22 },   // Left
    { id: 7, status: 'locked', x: 65, y: 10 },   // Top Center-ish
  ];



  return (
    <div className="relative w-full min-h-[140vh] bg-secondary overflow-hidden pb-32">

      <div className="absolute top-20 right-10 opacity-60 text-5xl rotate-12">🍳</div>
      <div className="absolute top-[40%] left-5 opacity-60 text-5xl -rotate-12">🥦</div>
      <div className="absolute bottom-[20%] right-5 opacity-60 text-5xl rotate-45">🥕</div>
      <div className="absolute top-[60%] right-10 opacity-60 text-5xl -rotate-6">🥛</div>
      <div className="absolute bottom-[10%] left-10 opacity-60 text-5xl rotate-12">🍓</div>


      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <svg 
            width="100%" 
            height="100%" 
            preserveAspectRatio="none"
            viewBox="0 0 100 100" 
            className="w-full h-full drop-shadow-md"
        >

             <path 
                d="M 75 100
                   L 75 90
                   C 75 84, 25 84, 25 78
                   C 25 71, 75 71, 75 64
                   C 75 57, 25 57, 25 50
                   C 25 43, 75 43, 75 36
                   C 75 29, 35 29, 35 22
                   Q 35 15, 65 10"
                fill="none" 
                stroke="#E2725B" 
                strokeWidth="8" 
                strokeLinecap="round"
                strokeLinejoin="round"
             />
             

             <path 
                d="M 75 100
                   L 75 90
                   C 75 84, 25 84, 25 78
                   C 25 71, 75 71, 75 64
                   C 75 57, 25 57, 25 50
                   C 25 43, 75 43, 75 36
                   C 75 29, 35 29, 35 22
                   Q 35 15, 65 10"
                fill="none" 
                stroke="rgba(255,255,255,0.4)" 
                strokeWidth="2" 
                strokeDasharray="4 4"
             />
        </svg>
      </div>


      <div className="absolute inset-0 w-full h-full pointer-events-none">
         {levels.map((lvl) => (
            <div className="pointer-events-auto contents" key={lvl.id}>
                <MapLevelNode 
                    level={lvl.id}
                    status={lvl.status}
                    x={lvl.x}
                    y={lvl.y}
                    onClick={() => {
                        if (lvl.status === 'unlocked') {
                            navigate(`/episode/${lvl.id}`);
                        }
                    }}
                />
            </div>
         ))}
      </div>
    </div>
  );
};

export default GameMap;
