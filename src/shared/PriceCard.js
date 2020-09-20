import React from 'react';
import '../assets/css/price-card.css';


function PriceCard(props) {

    const { name, price, exterior, interior, vaccum, window, seats, polish } = props.data;

    return(
        <div className="custom-price text-center">
            <div className="container">

                <h5>{name}</h5>
                <h2>
                    <span className="small"><sup>PKR</sup></span>
                    <span>{price}</span>
                    <span className="small"><sup>.00</sup></span>
                </h2>
                <p className="text-muted">All Types</p>

                <ul>
                    <li>
                        {
                            exterior ? 
                            <span className="icon text-success">&#10003;</span>
                            :
                            <span className="icon text-danger">&#x2716;</span>
                        }
                        <span>Exterior washing</span>
                    </li>
                    
                    <li>
                        {
                            interior ? 
                            <span className="icon text-success">&#10003;</span>
                            :
                            <span className="icon text-danger">&#x2716;</span>
                        }
                        <span>Vacuum cleaning</span>
                    </li>

                    <li>
                        {
                            vaccum ? 
                            <span className="icon text-success">&#10003;</span>
                            :
                            <span className="icon text-danger">&#x2716;</span>
                        }
                        <span>Interior wet cleaning</span>
                    </li>

                    <li>
                        {
                            window ? 
                            <span className="icon text-success">&#10003;</span>
                            :
                            <span className="icon text-danger">&#x2716;</span>
                        }
                        <span>Window wiping</span>
                    </li>

                    <li>
                        {
                            seats ? 
                            <span className="icon text-success">&#10003;</span>
                            :
                            <span className="icon text-danger">&#x2716;</span>
                        }
                        <span>Seat Cleaning</span>
                    </li>

                    <li>
                        {
                            polish ? 
                            <span className="icon text-success">&#10003;</span>
                            :
                            <span className="icon text-danger">&#x2716;</span>
                        }
                        <span>Crystal Polishing</span>
                    </li>
                </ul>

                <div className="pt-5">
                    <a className="press" href="#">Order Now</a>
                </div>
            </div>
        </div>
    );
}
export default PriceCard;