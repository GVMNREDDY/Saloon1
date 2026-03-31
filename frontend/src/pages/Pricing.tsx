import { CheckCircle2, Sparkles, Star } from 'lucide-react';
import './Pricing.scss';

const Pricing = () => {
    const packages = [
        {
            title: "Silver Membership",
            price: "$49/mo",
            features: ["1 Free Haircut per month", "10% off all retail products", "Priority booking", "Free styling consultation"],
            recommended: false
        },
        {
            title: "Gold VIP Membership",
            price: "$99/mo",
            features: ["Unlimited Haircuts", "1 Free 60-min Spa a month", "20% off all retail products", "Complimentary beverages"],
            recommended: true
        },
        {
            title: "Bridal Combo",
            price: "$399",
            features: ["Full Bridal Makeup", "Pre-bridal facial & cleanup", "Hair styling & draping", "Trial session included"],
            recommended: false
        }
    ];

    return (
        <div className="pricingPage">
            <h1 className="pricingTitle">Pricing & Packages</h1>
            
            <div className="pricingDiscountBanner">
                <span className="pricingDiscountText">
                    <Sparkles className="pricingDiscountIcon" /> Seasonal Discount: Use code WELCOME10 for 10% off your first booking! <Sparkles className="pricingDiscountIcon" />
                </span>
            </div>

            <div className="pricingGrid">
                {packages.map((pkg, i) => (
                    <div
                        key={i}
                        className={`pricingCard ${pkg.recommended ? 'pricingCard--recommended' : 'pricingCard--standard'}`}
                    >
                        {pkg.recommended && (
                            <div className="pricingMostPopular">
                                <Star className="pricingMostPopularIcon" /> Most Popular
                            </div>
                        )}
                        <h3 className="pricingCardTitle">{pkg.title}</h3>
                        <div className="pricingCardPrice">{pkg.price}</div>
                        <ul className="pricingFeatures">
                            {pkg.features.map((feature, j) => (
                                <li key={j} className="pricingFeatureItem">
                                    <CheckCircle2 className="pricingFeatureIcon" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a
                          href="/services"
                          className={`pricingPlanButton ${pkg.recommended ? 'pricingPlanButton--primary' : 'pricingPlanButton--secondary'}`}
                        >
                            Choose Plan
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
