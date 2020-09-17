import React from 'react';
import Slider from '../shared/Slider';
import ServicesCard from '../shared/ServicesCard';
import '../assets/css/home.css';

import about from '../assets/img/about.jpg'
import check from '../assets/img/check.webp'
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
                    <div className="about">
                        <div className="container">
                            <div className="row">

                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="image">
                                            <img src={about} />
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-6">
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

                                        <div className="button pt-4">
                                            <a href="#">Discover More</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="image">
                                            <img src={check} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="deal">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <h1>To deals of the week</h1>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                                </div>
                            </div>

                            <div className="service-cards">
                                <div className="row">
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
                    </div>

                </section>

                {/* <Link to="/contact">View All Deals</Link> */}
            </div>
        );
    }
}
export default Home;