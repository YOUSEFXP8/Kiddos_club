import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Shield, ChevronLeft } from 'lucide-react';

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-orange-50 flex flex-col p-6">
            <button onClick={() => navigate(-1)} className="mb-8 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600">
                <ChevronLeft />
            </button>

            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome!</h1>
            <p className="text-gray-500 mb-8">Choose how you want to start.</p>

            <div className="space-y-4">

                <div className="bg-white p-6 rounded-[24px] shadow-sm border border-orange-100 flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                        <Lock className="text-red-500" size={32} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-gray-800">I'm New Here</h3>
                        <p className="text-xs text-gray-400 mt-1">Create a brand new account to start exploring!</p>
                    </div>
                    <button 
                        onClick={() => navigate('/signup')}
                        className="w-full bg-red-500 text-white font-bold py-3 rounded-full hover:bg-red-600 transition-colors"
                    >
                        Create Account
                    </button>
                </div>


                <div className="bg-white p-6 rounded-[24px] shadow-sm border border-orange-100 flex flex-col items-center text-center space-y-4 opacity-90">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <Shield className="text-blue-500" size={32} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-gray-800">I Have an Account</h3>
                        <p className="text-xs text-gray-400 mt-1">Log in with your existing credentials.</p>
                    </div>
                    <button 
                        onClick={() => navigate('/home')}
                        className="w-full bg-blue-500 text-white font-bold py-3 rounded-full hover:bg-blue-600 transition-colors"
                    >
                        Enter Code
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
