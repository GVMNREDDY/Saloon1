import React from 'react';

const Gallery = () => {
    const images = [
        { src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800", title: "Hair Styling Before & After" },
        { src: "https://images.unsplash.com/photo-1512496015851-a1dc8a477858?auto=format&fit=crop&q=80&w=800", title: "Bridal Makeup" },
        { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800", title: "Premium Facials" },
        { src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800", title: "Manicure Art" },
        { src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800", title: "Relaxing Spa" },
        { src: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?auto=format&fit=crop&q=80&w=800", title: "Salon Interior" }
    ];

    return (
        <div className="py-16 px-4 bg-gray-50 dark:bg-background-dark min-h-screen">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 dark:text-white">Our Gallery</h1>
            <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">Explore the stunning transformations and the luxurious ambiance of our salon.</p>
            
            <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {images.map((img, i) => (
                    <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg group relative">
                        <img 
                            src={img.src} 
                            alt={img.title} 
                            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-white font-bold text-xl">{img.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
