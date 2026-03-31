import { Gift, Percent, Users } from 'lucide-react';
import './Offers.scss';

const Offers = () => {
    return (
        <div className="offersPage">
            <h1 className="offersTitle">Special Offers & Rewards</h1>
            
            <div className="offersGrid">
                {/* Festival Offer */}
                <div className="offerCard offerCard--festival">
                    <div className="offerIcon offerIcon--festival">
                        <Percent className="offerIconSvg" />
                    </div>
                    <h3 className="offerTitle">Festival Blowout</h3>
                    <p className="offerBody">
                      Get a flat 20% off on all Advanced Skin & Hair coloring services this month!
                    </p>
                    <div className="offerCode offerCode--festival">FESTIVAL20</div>
                </div>

                {/* Referral Program */}
                <div className="offerCard offerCard--referral">
                    <div className="offerIcon offerIcon--referral">
                        <Users className="offerIconSvg" />
                    </div>
                    <h3 className="offerTitle">Refer & Earn</h3>
                    <p className="offerBody">
                      Bring a friend to the salon and you both receive 500 Loyalty Points worth $50.
                    </p>
                    <button className="offerButton offerButton--referral" type="button">
                        Get Invite Link
                    </button>
                </div>

                {/* Gift Cards */}
                <div className="offerCard offerCard--gift">
                    <div className="offerIcon offerIcon--gift">
                        <Gift className="offerIconSvg" />
                    </div>
                    <h3 className="offerTitle">Digital Gift Cards</h3>
                    <p className="offerBody">
                      Treat your loved ones to a luxurious spa day. Custom amounts available instantly.
                    </p>
                    <button className="offerButton offerButton--gift" type="button">
                        Buy Gift Card
                    </button>
                </div>
            </div>
            
            {/* Newsletter Subscription */}
            <div className="newsletterCard">
                <div className="newsletterInner">
                    <h2 className="newsletterTitle">Want exclusive VIP alerts?</h2>
                    <p className="newsletterSubtitle">
                      Subscribe to our Push Notifications and Newsletter for flash sales and priority booking access.
                    </p>
                    <form className="newsletterForm">
                        <input type="email" placeholder="Enter your email" className="newsletterInput" />
                        <button className="newsletterButton" type="button">
                            Enable
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Offers;
