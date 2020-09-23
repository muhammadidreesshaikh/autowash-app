import React from 'react';
import '../assets/css/oder.css';

class Oder extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Login");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section>
                <div className="main-oder">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-12">
                                <h1 className="text-center">Oder</h1>

                                <div className="seprator mt-3"></div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="input">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-6 col-lg-6">
                                <input type="name" placeholder="Your Name *"></input>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <input type="name" placeholder="Company name"></input>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <input type="name" placeholder="Your E-mail *"></input>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <input type="name" placeholder="Phone Number *"></input>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <input type="name" placeholder="Vehicle Make and Model *"></input>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <select>
                                    <option value="0">Vehicle type</option>
                                    <option value="1">Regular Size Car</option>
                                    <option value="2">Medium Size Car</option>
                                    <option value="2">Compact SUV</option>
                                    <option value="2">Minivan</option>
                                    <option value="2">Pickup Truck</option>
                                    <option value="2">Cargo Truck</option>
                                </select>
                            </div>

                            <div class="col-12 col-md-6 col-lg-6">
                                <select>
                                    <option value="0">Wash packages</option>
                                    <option value="1">Basic Hand Wash</option>
                                    <option value="2">Deluxe Wash</option>
                                    <option value="2">Ultimate Shine</option>
                                    <option value="2">Platinum Works</option>
                                </select>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <input type="date" placeholder="Phone Number *"></input>
                            </div>

                            <div className="col-12 col-md-12 col-lg-12">
                                <textarea rows="5" placeholder="Your Message"></textarea>
                            </div>

                        </div>

                        <p className="pt-5 text-center">We will confirm your appointment with you by phone or e-mail within 24 hours of receiving your request.</p>

                        <div className="pt-5 text-center">
                            <a className="press" href="#">Confirm Booking</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Oder;