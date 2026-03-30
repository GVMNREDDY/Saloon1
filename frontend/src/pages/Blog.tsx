import React from 'react';

const Blog = () => {
    const articles = [
        {
            title: "5 Essential Hair Care Tips for Winter",
            category: "Hair Care",
            date: "Jan 12, 2024",
            image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=600",
            excerpt: "Cold weather can dry out your scalp and hair. Learn our top stylist secrets to trapping moisture and shine all season long."
        },
        {
            title: "The Ultimate Bridal Glow Routine",
            category: "Bridal & Skin",
            date: "Feb 05, 2024",
            image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6ece?auto=format&fit=crop&q=80&w=600",
            excerpt: "Preparing for your big day? A fast flawless glow doesn't happen overnight. Read our 3-month comprehensive preparation countdown."
        },
        {
            title: "Trending Hairstyles: The Modern Shag",
            category: "Trends",
            date: "Mar 18, 2024",
            image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=600",
            excerpt: "Low maintenance but highly textured, the modern shag is taking over. See why this 70s revival is the perfect cut for almost any face shape."
        }
    ];

    return (
        <div className="py-16 px-4 bg-gray-50 dark:bg-background-dark min-h-screen">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 dark:text-white">Salon Journal</h1>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">Insider tips, style trends, and expert knowledge straight from our master stylists.</p>
            
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {articles.map((article, i) => (
                    <article key={i} className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 transition-transform hover:-translate-y-2 group cursor-pointer flex flex-col">
                        <div className="h-56 overflow-hidden">
                            <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="flex justify-between items-center mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                                <span className="text-accent">{article.category}</span>
                                <span>{article.date}</span>
                            </div>
                            <h3 className="text-2xl font-bold dark:text-white mb-3 leading-snug group-hover:text-accent transition-colors">{article.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 flex-1">{article.excerpt}</p>
                            <div className="mt-6 font-bold text-accent group-hover:underline">Read Article →</div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Blog;
