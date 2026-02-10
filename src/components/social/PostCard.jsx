import React, { useState } from 'react';
import { MoreHorizontal, Heart, MessageCircle } from 'lucide-react';

const PostCard = ({ user, time, media, caption, likes, comments }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="bg-white rounded-[24px] p-4 shadow-sm mb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
             <img 
                src={user.avatar} 
                alt={user.name}
                className="w-full h-full object-cover"
             />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-800 text-sm">{user.name}</span>
            <span className="text-gray-400 text-xs">{time}</span>
          </div>
        </div>
        <button className="text-gray-400">
            <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Media */}
      <div className="w-full aspect-[4/3] bg-gray-100 rounded-[20px] overflow-hidden mb-3 relative">
        {media.type === 'video' ? (
             <div className="w-full h-full flex items-center justify-center bg-black/5">
                {/* Fallback visual if no real video */}
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
                <img src={media.poster} className="absolute inset-0 w-full h-full object-cover -z-10 opacity-80" alt="Video poster" />
             </div>
        ) : (
            <img src={media.url} className="w-full h-full object-cover" alt="Post content" />
        )}
      </div>

      {/* Caption */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 leading-relaxed">
            {caption}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-6">
        <button 
            onClick={handleLike}
            className="flex items-center space-x-2 group"
        >
            <div className={`p-2 rounded-full transition-colors ${isLiked ? 'bg-orange-50' : 'bg-transparent group-hover:bg-gray-50'}`}>
                <Heart size={20} className={`transition-colors ${isLiked ? 'fill-orange-500 text-orange-500' : 'text-gray-400'}`} />
            </div>
            <span className={`text-sm font-bold ${isLiked ? 'text-orange-500' : 'text-gray-400'}`}>{likeCount}</span>
        </button>
        
        <button className="flex items-center space-x-2 group">
             <div className="p-2 rounded-full group-hover:bg-gray-50 transition-colors">
                <MessageCircle size={20} className="text-gray-400" />
             </div>
             <span className="text-sm font-bold text-gray-400">{comments}</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
