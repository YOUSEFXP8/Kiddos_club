import React from 'react';
import { Search, MoreVertical, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChatListPage = () => {
  const navigate = useNavigate();

  const chats = [
    { id: 1, name: 'Hashem', message: 'Hello, how are you?', time: '8:41 AM', unread: 2, online: true, avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Hashem' },
    { id: 2, name: 'Reem', message: 'See you at the club!', time: 'Yesterday', unread: 0, online: false, avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Reem' },
    { id: 3, name: 'Leen', message: 'I loved the sandwich recipe 🥪', time: 'Mon', unread: 0, online: true, avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Leen' },
    { id: 4, name: 'Chef Tim', message: 'Don’t forget the apron!', time: 'Sun', unread: 1, online: false, avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Tim' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white pb-24">

        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
            <h1 className="text-xl font-bold text-primary">Kiddo Club</h1>
            <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-full flex-1 mx-4">
                <Search size={18} className="text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search messages..." 
                    className="bg-transparent outline-none text-sm w-full"
                />
            </div>
            <button className="text-gray-500">
                <MoreVertical size={24} />
            </button>
        </div>


        <div className="flex-1 overflow-y-auto">
            {chats.map((chat) => (
                <div 
                    key={chat.id}
                    onClick={() => navigate(`/chat/${chat.id}`)}
                    className="flex items-center px-4 py-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer active:bg-gray-100 transition-colors"
                >
                    <div className="relative mr-4">
                        <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full bg-gray-200" />
                        {chat.online && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-gray-800 text-sm truncate">{chat.name}</h3>
                            <span className="text-xs text-gray-400 whitespace-nowrap">{chat.time}</span>
                        </div>
                        <p className="text-sm text-gray-500 truncate">{chat.message}</p>
                    </div>
                    {chat.unread > 0 && (
                        <div className="ml-2 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                            {chat.unread}
                        </div>
                    )}
                </div>
            ))}
        </div>


        <div className="fixed bottom-24 right-6 z-10 w-full max-w-md mx-auto pointer-events-none flex justify-end pr-12">

             <button className="pointer-events-auto w-14 h-14 bg-orange-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                <Plus size={32} />
             </button>
        </div>
    </div>
  );
};

export default ChatListPage;
