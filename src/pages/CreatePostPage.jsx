import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Image, Camera, Video, CheckCircle } from 'lucide-react';

const CreatePostPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const initialType = location.state?.type || 'text';
    const [text, setText] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = () => {
        setIsSuccess(true);

    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="text-green-500" size={48} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Thanks for sharing!</h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                    Your wonderful moment has been sent to your parents for permission.
                </p>
                <button 
                    onClick={() => navigate('/home')}
                    className="w-full bg-primary text-white font-bold py-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
                >
                    Back Home
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col p-4">

            <div className="flex justify-between items-center mb-6 pt-2">
                <button 
                    onClick={() => navigate(-1)}
                    className="text-gray-500 font-bold text-lg"
                >
                    Cancel
                </button>
                <button 
                    onClick={handleSubmit}
                    className="bg-primary text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-orange-600 transition-colors"
                >
                    Post
                </button>
            </div>


            <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    {/* Placeholder for current user avatar */}
                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Cookie" alt="User" />
                </div>
                <span className="font-bold text-gray-800">Little Chef</span>
            </div>


            <textarea 
                className="flex-1 w-full text-xl text-gray-700 placeholder-gray-300 resize-none outline-none mb-4 min-h-[150px]"
                placeholder="Express yourself..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                autoFocus
            />


            <div className="mt-auto pb-4">
                <div className="flex items-center space-x-6 border-t border-gray-100 pt-4">
                    <button className="text-yellow-400 p-2 hover:bg-yellow-50 rounded-full transition-colors">
                        <Image size={28} />
                    </button>
                    <button className="text-red-400 p-2 hover:bg-red-50 rounded-full transition-colors">
                        <Camera size={28} />
                    </button>
                    <button className="text-green-400 p-2 hover:bg-green-50 rounded-full transition-colors">
                        <Video size={28} />
                    </button>
                </div>
                
                {/* Simulated Keyboard Placeholder (Optional visual cue) */}

            </div>
        </div>
    );
};

export default CreatePostPage;
