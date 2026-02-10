import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefHat, Music, Palette } from 'lucide-react';
import { clsx } from 'clsx';

const IntroPage = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);

    const slides = [
        {
            title: "Kiddos Club",
            subtitle: "Made Just for Kids",
            bg: "bg-orange-100",
            icon: ChefHat,
            iconColor: "text-orange-500",
            desc: "Explore a world of cooking and fun recipes!"
        },
        {
            title: "Learn, Play & Create",
            subtitle: "Discover New Skills",
            bg: "bg-green-100",
            icon: Palette,
            iconColor: "text-green-500",
            desc: "Unleash your creativity with interactive lessons."
        },
        {
            title: "Join the Fun",
            subtitle: "Start Your Adventure",
            bg: "bg-purple-100",
            icon: Music,
            iconColor: "text-purple-500",
            desc: "Connect with friends and share your creations."
        }
    ];

    const nextStep = () => {
        if (step < slides.length - 1) {
            setStep(step + 1);
        } else {
            navigate('/login');
        }
    };

    const activeSlide = slides[step];

    return (
        <div className={clsx("h-full min-h-screen flex flex-col p-6 transition-colors duration-500", activeSlide.bg)}>
            {/* Header / Skip */}
            <div className="flex justify-end pt-4">
                <button 
                    onClick={() => navigate('/login')}
                    className="text-gray-500 font-bold text-sm"
                >
                    Skip
                </button>
            </div>

            {/* Illustration Area */}
            <div className="flex-1 flex items-center justify-center">
                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
                    {/* Abstract Decorative blobs */}
                    <div className={clsx("absolute top-0 left-0 w-full h-1/2 opacity-20", activeSlide.bg.replace('100', '300'))} />
                    
                    <activeSlide.icon size={100} className={activeSlide.iconColor} />
                </div>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-[32px] p-8 shadow-xl mb-6 text-center space-y-4">
                <h1 className="text-3xl font-bold text-gray-800">{activeSlide.title}</h1>
                <h2 className="text-lg font-bold text-gray-500">{activeSlide.subtitle}</h2>
                <p className="text-gray-400 text-sm leading-relaxed">{activeSlide.desc}</p>

                {/* Pagination Dots */}
                <div className="flex justify-center space-x-2 py-4">
                    {slides.map((_, i) => (
                        <div 
                            key={i} 
                            className={clsx(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                i === step ? "w-6 bg-primary" : "bg-gray-300"
                            )} 
                        />
                    ))}
                </div>

                {/* Action Button */}
                <button 
                    onClick={nextStep}
                    className="w-full bg-primary text-white font-bold py-4 rounded-full text-lg shadow-lg hover:bg-orange-600 transition-colors"
                >
                    {step === slides.length - 1 ? "Get Started" : "Next"}
                </button>
            </div>
        </div>
    );
};

export default IntroPage;
