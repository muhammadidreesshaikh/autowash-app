import React from 'react';
import Slider from '../shared/Slider';
import ServicesCard from '../shared/ServicesCard';
import PriceCard from '../shared/PriceCard';
import '../assets/css/home.css';

import about from '../assets/img/about.jpg'
import check from '../assets/img/check.webp'
import serve from '../assets/img/serve.webp'
import ques from '../assets/img/ques1.jpg'
// import { Link } from 'react-router-dom';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
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
                                        <h6>A B O U T</h6>
                                        <h1 className="pt-2">About the Dirt2Clean</h1>
                                        <p className="pt-3">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum has been the standard dummy text ever since the since specimen book printing and typesetting industry.</p>

                                        <div className="box">
                                            <div className="row">

                                                <div className="col-md-4 col-lg-4">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <a href="#">i</a>
                                                            <h4 className="pt-4">EXCLUSIVE</h4>
                                                            <p>There are many variations of passages of Lorem Ipsum available. by injected humour.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4 col-lg-4">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <a href="#">i</a>
                                                            <h4 className="pt-4">UPDATE</h4>
                                                            <p>There are many variations of passages of Lorem Ipsum available. by injected humour.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4 col-lg-4">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <a href="#">i</a>
                                                            <h4 className="pt-4">SECURE</h4>
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
                                        <h6>We Bring You The Future</h6>
                                        <h1 className="pt-2">Don't worries, we check all of unit</h1>
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
                                    <h1>To deals of the week</h1>
                                    <p className="text-center">There are many variations of passages of but the majority have suffered alteration words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. </p>
                                </div>
                            </div>

                            <div className="row service-cards">
                                <div className="col-md-4">
                                    <ServicesCard />
                                </div>

                                <div className="col-md-4">
                                    <ServicesCard />
                                </div>

                                <div className="col-md-4">
                                    <ServicesCard />
                                </div>
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
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="price-card">
                                        <PriceCard />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="price-card">
                                        <PriceCard />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="price-card">
                                        <PriceCard />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="price-card">
                                        <PriceCard />
                                    </div>
                                </div>
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

                                        <div className="button pt-4">
                                            <a href="#">Learn More</a>
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