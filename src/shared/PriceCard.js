import React from 'react';
import '../assets/css/price-card.css';


function PriceCard() {
    return(
        <div className="custom-price text-center">
            <div className="container">

                <h5>Express Washing</h5>
                <h2>
                    <span className="small"><sup>$</sup></span>
                    <span>12</span>
                    <span className="small"><sup>.99</sup></span>
                </h2>

                <ul>
                    <li><span className="icon text-success">&#10003;</span> <span>Exterior washing</span></li>
                    <li><span className="icon text-danger">&#x2716;</span> <span>Vacuum cleaning</span></li>
                    <li><span className="icon text-success">&#10003;</span> <span>Interior wet cleaning</span></li>
                    <li><span className="icon text-danger">&#x2716;</span> <span> Window wiping</span></li>
                </ul>

                <div className="pt-5">
                    <a className="press" href="#">Order Now</a>
                </div>
            </div>
        </div>
    );
}
export default PriceCard;