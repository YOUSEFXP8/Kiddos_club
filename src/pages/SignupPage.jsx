import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const SignupPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/icon-selection');
    };

    return (
        <div className="min-h-screen bg-orange-50 flex flex-col p-6">
            <button onClick={() => navigate(-1)} className="mb-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600">
                <ChevronLeft />
            </button>

            <h1 className="text-2xl font-bold text-gray-800 mb-6">Create Account</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 ml-2">Name</label>
                    <input 
                        required
                        type="text" 
                        placeholder="Your little chef's name"
                        className="w-full bg-white p-4 rounded-2xl border border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 ml-2">Email</label>
                    <input 
                        required
                        type="email" 
                        placeholder="Parent's email address"
                        className="w-full bg-white p-4 rounded-2xl border border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 ml-2">Password</label>
                    <input 
                        required
                        type="password" 
                        placeholder="Create a secure password"
                        className="w-full bg-white p-4 rounded-2xl border border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full bg-black text-white font-bold py-4 rounded-full mt-8 shadow-lg hover:bg-gray-800 transition-colors"
                >
                    Send Verification Code
                </button>
            </form>

            <p className="mt-8 text-center text-xs text-gray-400 max-w-xs mx-auto">
                Built for kids. Verified by parents. <br/>
                By continuing you agree to our Terms of Service.
            </p>
        </div>
    );
};

export default SignupPage;
