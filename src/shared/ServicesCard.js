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
                    <div className="mt-3">
                        <a href="#">$ 34,500</a>
                    </div>

                    <div className="row pt-4">
                        <div className="col-md-4 col-lg-4">
                            <p className="text-white-50">Transmission</p>
                            <h5>Automatic</h5>
                        </div>

                        <div className="col-md-4 col-lg-4">
                            <p className="text-white-50">Fuel</p>
                            <h5>Electric</h5>
                        </div>

                        <div className="col-md-4 col-lg-4">
                            <p className="text-white-50">Pessenger</p>
                            <h5>2</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default ServicesCard;