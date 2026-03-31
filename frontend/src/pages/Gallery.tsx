import './Gallery.scss';

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
        <div className="galleryPage">
            <h1 className="galleryTitle">Our Gallery</h1>
            <p className="gallerySubtitle">
              Explore the stunning transformations and the luxurious ambiance of our salon.
            </p>
            
            <div className="galleryMasonry">
                {images.map((img, i) => (
                    <div key={i} className="galleryItem">
                        <img 
                            src={img.src} 
                            alt={img.title} 
                            className="galleryImage"
                        />
                        <div className="galleryOverlay">
                            <h3 className="galleryOverlayTitle">{img.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
