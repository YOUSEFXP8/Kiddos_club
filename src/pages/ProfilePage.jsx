import React, { useState } from 'react';
import { Settings, Edit2, Grid, PlayCircle, Bookmark } from 'lucide-react';
import { clsx } from 'clsx';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const userData = {
    name: 'Cedra younes',
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Cedra', // Placeholder
    stats: {
        posts: 20,
        followers: 100,
        following: 88
    }
  };


  const posts = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    image: `https://images.unsplash.com/photo-${1500000000000 + i * 10000}?w=400&auto=format&fit=crop&q=60`,
    type: i % 3 === 0 ? 'video' : 'image'
  }));

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-32">
        {/* Header Actions */}
        <div className="flex justify-end p-4">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                <Settings size={24} />
            </button>
        </div>

        {/* Profile Info */}
        <div className="flex flex-col items-center px-6 -mt-4 mb-6">
            <div className="relative mb-3">
                <div className="w-24 h-24 rounded-full p-1 bg-white border-2 border-red-400 shadow-sm">
                    <img 
                        src={userData.avatar} 
                        alt={userData.name} 
                        className="w-full h-full rounded-full bg-gray-200 object-cover"
                    />
                </div>
                <button className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md border border-gray-100 text-gray-500 hover:text-primary">
                    <Edit2 size={14} />
                </button>
            </div>
            <h1 className="text-xl font-bold text-gray-800 mb-6">{userData.name}</h1>

            {/* Stats Card */}
            <div className="bg-white rounded-2xl shadow-sm px-8 py-4 flex items-center justify-between w-full max-w-sm">
                <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-orange-500">{userData.stats.posts}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Post</span>
                </div>
                <div className="w-px h-8 bg-gray-100"></div>
                <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-orange-500">{userData.stats.followers}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Followers</span>
                </div>
                <div className="w-px h-8 bg-gray-100"></div>
                <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-orange-500">{userData.stats.following}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Following</span>
                </div>
            </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-1">
            {[
                { id: 'posts', icon: Grid },
                { id: 'videos', icon: PlayCircle },
                { id: 'saved', icon: Bookmark }
            ].map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={clsx(
                        "flex-1 flex justify-center py-3 relative transition-colors",
                        activeTab === tab.id ? "text-primary" : "text-gray-400 hover:text-gray-600"
                    )}
                >
                    <tab.icon size={24} />
                    {activeTab === tab.id && (
                        <div className="absolute bottom-0 w-1/3 h-0.5 bg-primary rounded-t-full" />
                    )}
                </button>
            ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-3 gap-0.5">
            {posts.map((post) => (
                <div key={post.id} className="relative aspect-square bg-gray-200 overflow-hidden cursor-pointer group">
                    <img 
                        src={`https://picsum.photos/400?random=${post.id}`} 
                        alt="Post" 
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    {post.type === 'video' && (
                        <div className="absolute top-2 right-2 text-white drop-shadow-md">
                            <PlayCircle size={20} fill="rgba(0,0,0,0.3)" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
  );
};

export default ProfilePage;
