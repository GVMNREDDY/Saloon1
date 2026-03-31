import { ShieldCheck, Heart, Star } from 'lucide-react';
import './About.scss';

const About = () => {
    const team = [
        { name: "Sarah Jenkins", role: "Master Hair Colorist", image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=400", bio: "10+ years experience specializing in balayage and vibrant color correction." },
        { name: "David Chen", role: "Senior Stylist", image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=400", bio: "Award-winning stylist known for precision styling trends." },
        { name: "Elena Rodriguez", role: "Skin & Spa Specialist", image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6ece?auto=format&fit=crop&q=80&w=400", bio: "Bringing rejuvenation and glow to every client through holistic facials." }
    ];

    return (
        <div className="aboutPage">
            <div className="aboutContainer">
                {/* Story Section */}
                <div className="aboutStoryGrid">
                    <div className="aboutStoryText">
                        <h1 className="aboutStoryTitle">Our Story & Vision</h1>
                        <p className="aboutStoryLead">
                            Founded on the belief that beauty is an intricate blend of art and personal expression, our salon has been transforming looks and lifting spirits since its inception. 
                        </p>
                        <ul className="aboutHighlights">
                            <li className="aboutHighlightItem">
                                <ShieldCheck className="aboutHighlightIcon" /> State-of-the-art Hygiene & Safety
                            </li>
                            <li className="aboutHighlightItem">
                                <Heart className="aboutHighlightIcon" /> Cruelty-Free & Sustainable Products
                            </li>
                            <li className="aboutHighlightItem">
                                <Star className="aboutHighlightIcon" /> 5-Star Unmatched Expertise
                            </li>
                        </ul>
                    </div>
                    <div className="aboutStoryImageWrap">
                        <img
                          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
                          alt="Salon Interior"
                          className="aboutStoryImage"
                        />
                    </div>
                </div>

                {/* Team Section */}
                <h2 className="aboutTeamTitle">Meet Our Experts</h2>
                <div className="aboutTeamGrid">
                    {team.map((stylist, i) => (
                        <div key={i} className="aboutExpertCard">
                            <div className="aboutExpertImageWrap">
                                <img src={stylist.image} alt={stylist.name} className="aboutExpertImage" />
                                <div className="aboutExpertOverlay">
                                    <h3 className="aboutExpertName">{stylist.name}</h3>
                                    <p className="aboutExpertRole">{stylist.role}</p>
                                </div>
                            </div>
                            <div className="aboutExpertBio">
                                <p>{stylist.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
