import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Video, Phone, Mic, Image, Palette, Send, CheckCheck } from 'lucide-react';
import { clsx } from 'clsx';

const ChatDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', sender: 'them', time: '8:40 AM' },
    { id: 2, text: 'Hi Hashem! Are you ready for the cooking challenge?', sender: 'me', time: '8:41 AM', read: true },
    { id: 3, text: 'Yes! I bought all the ingredients. 🥕', sender: 'them', time: '8:42 AM' },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;
    setMessages([...messages, {
        id: Date.now(),
        text: inputText,
        sender: 'me',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        read: false
    }]);
    setInputText('');
  };

  const handleCall = (type) => {
    alert(`Starting ${type} call... (Simulation)`);
  };

  return (
    <div className="flex flex-col h-screen bg-white">

      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 shadow-sm bg-white z-10">
        <div className="flex items-center space-x-3">
            <button onClick={() => navigate(-1)} className="text-gray-600 p-1">
                <ChevronLeft size={28} />
            </button>
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=Hashem`} alt="Hashem" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-800 text-sm">Hashem</h3>
                    <span className="text-xs text-green-500 font-medium">Online</span>
                </div>
            </div>
        </div>
        <div className="flex items-center space-x-4 text-primary">
            <button onClick={() => handleCall('video')} className="p-2 hover:bg-orange-50 rounded-full">
                <Video size={24} />
            </button>
            <button onClick={() => handleCall('audio')} className="p-2 hover:bg-orange-50 rounded-full">
                <Phone size={24} />
            </button>
        </div>
      </div>


      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
        <div className="text-center text-xs text-gray-400 my-4">Today, 8:40 AM</div>
        
        {messages.map((msg) => (
            <div 
                key={msg.id} 
                className={clsx(
                    "flex w-full",
                    msg.sender === 'me' ? "justify-end" : "justify-start"
                )}
            >
                <div className={clsx(
                    "max-w-[75%] px-4 py-3 rounded-2xl relative shadow-sm text-sm leading-relaxed",
                    msg.sender === 'me' 
                        ? "bg-orange-500 text-white rounded-br-none" 
                        : "bg-gray-100 text-gray-800 rounded-bl-none"
                )}>
                    {msg.text}
                    
                    {msg.sender === 'me' && (
                        <div className="absolute -bottom-4 right-0 flex items-center space-x-1">
                             <span className="text-[10px] text-gray-400">{msg.time}</span>
                             <CheckCheck size={12} className="text-blue-500" />
                        </div>
                    )}
                </div>
            </div>
        ))}
      </div>


      <div className="border-t border-gray-100 p-4 bg-white">

         <div className="flex items-center space-x-4 mb-3 px-2">
            <button className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                <Image size={16} />
            </button>
            <button className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                <Mic size={16} />
            </button>
            <button className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                <Palette size={16} />
            </button>
         </div>


         <div className="flex items-center space-x-2">
            <div className="flex-1 bg-gray-100 rounded-full px-4 py-3 flex items-center">
                <span className="mr-2 text-xl grayscale cursor-pointer">😊</span>
                <input 
                    type="text" 
                    placeholder="Type a message..." 
                    className="bg-transparent w-full outline-none text-sm text-gray-700"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
            </div>
            <button 
                onClick={handleSend}
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-md hover:bg-orange-600 transition-colors"
            >
                <Send size={20} className="ml-1" />
            </button>
         </div>
      </div>
    </div>
  );
};

export default ChatDetailPage;
