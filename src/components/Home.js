import React from 'react';
import Slider from '../shared/Slider';
import ServicesCard from '../shared/ServicesCard';
import PriceCard from '../shared/PriceCard';
import '../assets/css/home.css';

import about from '../assets/img/washer2.jpeg'
import express from '../assets/img/express-wash.png'
import basic from '../assets/img/basic-wash.png'
import premium from '../assets/img/premium-wash.png'
import check from '../assets/img/dont-worry.jpg'
import serve from '../assets/img/serve.webp'
import ques from '../assets/img/ques1.jpg'
// import { Link } from 'react-router-dom';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false,
            services: [
                {
                    type: 'small sedan',
                    name: 'Express Washing',
                    price: '3000',
                    exterior: 'Yes',
                    interior: 'Yes',
                    vaccum: 'No',
                    window: 'Yes',
                    seats: 'No',
                    polish: 'No'
                },
                {
                    type: 'mid size',
                    name: 'Basic Washing',
                    price: '2000',
                    exterior: 'Yes',
                    interior: 'No',
                    vaccum: 'No',
                    window: 'Yes',
                    seats: 'No',
                    polish: 'No'
                },
                {
                    type: 'pickup',
                    name: 'Premium Washing',
                    price: '5000',
                    exterior: 'Yes',
                    interior: 'Yes',
                    vaccum: 'Yes',
                    window: 'Yes',
                    seats: 'Yes',
                    polish: 'Yes'
                }
            ],
            plans: [
                {
                    name: 'Express Washing',
                    price: '2000',
                    exterior: true,
                    interior: true,
                    vaccum: false,
                    window: false,
                    seats: false,
                    polish: false
                },
                {
                    name: 'Basic Washing',
                    price: '1000',
                    exterior: true,
                    interior: true,
                    vaccum: false,
                    window: true,
                    seats: false,
                    polish: false
                },
                {
                    name: 'Premium Washing',
                    price: '3000',
                    exterior: true,
                    interior: true,
                    vaccum: true,
                    window: true,
                    seats: false,
                    polish: true
                },
                {
                    name: 'Detailed Washing',
                    price: '4000',
                    exterior: true,
                    interior: true,
                    vaccum: true,
                    window: true,
                    seats: true,
                    polish: true
                },
            ]
        };
    } 

    componentDidMount() {
        console.log("Home");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div>
                <Slider />
                <section>
                    <div className="abouts">
                        <div className="container">
                            <div className="row">

                                <div className="col-12 col-md-12 col-lg-6">
                                    <div className="image d-none d-lg-block">
                                            <img src={about} />
                                    </div>
                                </div>

                                <div className="col-12 col-md-12 col-lg-6">
                                    <div className="heading">
                                        <h6>WHAT WE DO</h6>
                                        <h1 className="pt-2">Premium Washing Services</h1>
                                        <p className="pt-3">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum has been the standard dummy text ever since the since specimen book printing and typesetting industry.</p>

                                        <div className="box">
                                            <div className="row">

                                                <div className="col-md-4 col-lg-4">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <img src={express} />
                                                            <h4 className="pt-4">EXPRESS</h4>
                                                            <p>There are many variations of passages of Lorem Ipsum available. by injected humour.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4 col-lg-4">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <img src={basic} />
                                                            <h4 className="pt-4">BASIC</h4>
                                                            <p>There are many variations of passages of Lorem Ipsum available. by injected humour.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4 col-lg-4">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <img src={premium} />
                                                            <h4 className="pt-4">PREMIUM</h4>
                                                            <p>There are many variations of passages of Lorem Ipsum available. by injected humour.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>

                    <div className="check">
                        <div className="container">
                            <div className="row">

                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="heading">
                                        <h6>Care Service For Your Car</h6>
                                        <h1 className="pt-2">Don't worries, we provide quality service</h1>
                                        <p className="pt-3">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum has been the standard dummy text ever since the since specimen book printing and typesetting industry.</p>

                                        <div className="pt-4 text-center">
                                            <a className="press" href="#">Discover More</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="image d-none d-md-block d-lg-block">
                                            <img src={check} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="deal">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-6 col-lg-6">
                                    <h1>Top deals of the week</h1>
                                    <p className="text-center">There are many variations of passages of but the majority have suffered alteration words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. </p>
                                </div>
                            </div>

                            <div className="row service-cards">
                                {
                                    this.state.services.map((service, index) =>
                                        <div className="col-md-4" key={index}>
                                            <ServicesCard data={service} />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="price">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-8 col-lg-8">
                                    <h6 className="text-center">WASHING PRICE</h6>
                                    <h1 className="text-center">Choose Your Plan</h1>
                                    <p className="text-center">There are many variations of passages of but the majority have suffered alteration words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. </p>
                                </div>
                            </div>

                            <div className="row price-cards">
                                {
                                    this.state.plans.map((plan, index) =>
                                        <div className="col-lg-3 col-md-6 col-12" key={index}>
                                            <div className="price-card">
                                                <PriceCard data={plan} />
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="serve">
                        <div className="container">
                            <div className="row">

                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="image d-none d-md-block d-lg-block">
                                            <img src={serve} />
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="heading">
                                        <h6>Best Service In The World</h6>
                                        <h1 className="pt-2">We serve you with best service in the world</h1>
                                        <p className="pt-3">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum has been the standard dummy text ever since the since specimen book printing and typesetting industry.</p>

                                        <div className="pt-4">
                                            <a className="press" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="question mx-3">
                        <div className="container">
                            <div className="row main">
                                <div className="col-12 col-md-8 col-lg-8">
                                    <div className="heading">
                                        <div className="container">
                                            <h6>Have any question about us?</h6>

                                            <div className="button pt-5">
                                                <a className="active" href="#">021 2223 4541 23</a>
                                                <a href="#">Contact Us</a> 
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-12 col-lg-4">
                                    <div className="image d-none d-lg-block">
                                        <img src={ques} />
                                        <div className="display-circle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <Link to="/contact">View All Deals</Link> */}
            </div>
        );
    }
}
export default Home;