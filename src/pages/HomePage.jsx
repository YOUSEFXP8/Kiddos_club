import React from 'react';
import PostCard from '../components/social/PostCard';

const HomePage = () => {

  const posts = [
    {
        id: 1,
        user: { name: 'Chef Reem', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Reem' },
        time: '1h',
        media: { type: 'video', poster: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400&auto=format&fit=crop' },
        caption: 'Making the Rainbow Sandwich was so fun! 🌈 Check out my twist on the recipe. @LittleChefsClub #Rainbow #Yummy',
        likes: 124,
        comments: 18
    },
    {
        id: 2,
        user: { name: 'Baker Tim', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tim' },
        time: '3h',
        media: { type: 'image', url: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=400&auto=format&fit=crop' },
        caption: 'Look at these cupcakes! 🧁 I added extra sprinkles just like Leen suggested. #CupcakeParty',
        likes: 856,
        comments: 42
    },
    {
        id: 3,
        user: { name: 'Sarah2020', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
        time: '5h',
        media: { type: 'image', url: 'https://images.unsplash.com/photo-1626082896492-766af4eb6501?q=80&w=400&auto=format&fit=crop' },
        caption: 'First time trying the fried egg challenge! 🍳 #ChefLife',
        likes: 45,
        comments: 5
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-32">

       
        

        <div className="px-4 space-y-4">
            {posts.map(post => (
                <PostCard key={post.id} {...post} />
            ))}
            

            <div className="py-8 text-center text-gray-500 font-medium text-sm">
                You're all caught up! 🌟
            </div>
        </div>
    </div>
  );
};

export default HomePage;
