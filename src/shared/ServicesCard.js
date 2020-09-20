import React from 'react';
import '../assets/css/services-card.css';
import cards from '../assets/img/cards1.jpg'

const cardStyle = {
    backgroundImage: 'url('+ cards +')',
};

function ServicesCard(props) {

    const { type, name, price, exterior, interior, vaccum, window, seats, polish } = props.data;

    return(
        <div className="custom-card" style={cardStyle}>
            <div className="container">

                <h6>{type}</h6>

                <div className="content">
                    <h4>{name}</h4>
                    <div className="mt-3">
                        <a href="#">PKR {price}</a>
                    </div>

                    <div className="row pt-4 m-0 px-0">
                        

                        {
                            exterior == 'Yes' ?
                            <div className="col-4 col-md-4 col-lg-4">
                                <p className="text-white-50">EXTERIOR</p>
                                <h5>{exterior}</h5>
                            </div>
                            :
                            null
                        }

                        {
                            interior == 'Yes' ?
                            <div className="col-4 col-md-4 col-lg-4">
                                <p className="text-white-50">INTERIOR</p>
                                <h5>{interior}</h5>
                            </div>
                            :
                            null
                        }

                        {
                            vaccum == 'Yes' ?
                            <div className="col-4 col-md-4 col-lg-4">
                                <p className="text-white-50">VACCUM</p>
                                <h5>{vaccum}</h5>
                            </div>
                            :
                            null
                        }

                        {
                            window == 'Yes' ?
                            <div className="col-4 col-md-4 col-lg-4">
                                <p className="text-white-50">WINDOW</p>
                                <h5>{window}</h5>
                            </div>
                            :
                            null
                        }
                        
                        {
                            seats == 'Yes' ?
                                <div className="col-4 col-md-4 col-lg-4">
                                <p className="text-white-50">SEATS</p>
                                <h5>{seats}</h5>
                            </div>
                            :
                            null
                        }

                        {
                            polish == 'Yes' ?
                            <div className="col-4 col-md-4 col-lg-4">
                                <p className="text-white-50">POLISH</p>
                                <h5>{polish}</h5>
                            </div>
                            :
                            null
                        }
                        
                    </div>
                </div>

            </div>
        </div>
    );
}
export default ServicesCard;