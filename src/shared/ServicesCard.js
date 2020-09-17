import React from 'react';
import '../assets/css/servicescard.css';
import cards from '../assets/img/cards1.jpg'

const cardStyle = {
    backgroundImage: 'url('+ cards +')',
};

function ServicesCard() {
    return(
        <div className="custom-card" style={cardStyle}>
            <div className="container">

                <h6>Sport Car</h6>

                <div className="content">
                    <h4>Corolla Cross</h4>
                    <a>$ 34,500</a>

                    <div className="row pt-4">
                        <div className="col-md-4 col-lg-4">
                            <p className="text-white-50">Transmission</p>
                            <h6>Automatic</h6>
                        </div>

                        <div className="col-md-4 col-lg-4">
                            <p className="text-white-50">Fuel</p>
                            <h6>Electric</h6>
                        </div>

                        <div className="col-md-4 col-lg-4">
                            <p className="text-white-50">Pessenger</p>
                            <h6>2</h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default ServicesCard;