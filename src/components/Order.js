import React from 'react';
import '../assets/css/order.css';

class Order extends React.Component {

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
                                <h1 className="text-center">Order</h1>

                                <div className="seprator mt-3"></div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="input">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-6 col-lg-6">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name"></input>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company Name"></input>

                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your E-mail *"></input>
    
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number *"></input>
        
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Vehicle Make and Model *"></input>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Vehicle Type</option>
                                    <option>Regular Size Car</option>
                                    <option>Medium Size Car</option>
                                    <option>Compact SUV</option>
                                    <option>Minivan</option>
                                    <option>Pickup Truck</option>
                                    <option>Cargo Truck</option>
                                </select>
                            </div>

                            <div class="col-12 col-md-6 col-lg-6">
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Wash Packages</option>
                                    <option>Basic Hand Wash</option>
                                    <option>Deluxe Wash</option>
                                    <option>Ultimate Shine</option>
                                    <option>Platinum Works</option>
                                </select>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <input type="date" placeholder="date"></input>
                            </div>

                            <div className="col-12 col-md-12 col-lg-12">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Subject *"></input>
                            </div>

                            <div className="col-12 col-md-12 col-lg-12">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Your Message"></textarea>
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
export default Order;