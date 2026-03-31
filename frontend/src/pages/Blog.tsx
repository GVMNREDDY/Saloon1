import './Blog.scss';

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
        <div className="blogPage">
            <h1 className="blogTitle">Salon Journal</h1>
            <p className="blogSubtitle">
              Insider tips, style trends, and expert knowledge straight from our master stylists.
            </p>
            
            <div className="blogGrid">
                {articles.map((article, i) => (
                    <article key={i} className="blogCard" style={{ cursor: 'pointer' }}>
                        <div className="blogImageWrap">
                            <img src={article.image} alt={article.title} className="blogImage" />
                        </div>
                        <div className="blogBody">
                            <div className="blogMetaRow">
                                <span className="blogCategoryTag">{article.category}</span>
                                <span className="blogDate">{article.date}</span>
                            </div>
                            <h3 className="blogCardTitle">{article.title}</h3>
                            <p className="blogExcerpt">{article.excerpt}</p>
                            <div className="blogReadMore">Read Article →</div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Blog;
