import React from 'react';
import '../assets/css/about.css';

class About extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("About");

        this.setState({
            loading: true
        });
    } 

    render() {
        return(
            <section>
                <div className="about">
                    <div className="container">
                        <div className="row justify-content-center ">
                            
                            <div className="col-md-6">
                                <h1>About Dirt2Clean</h1>

                                <div className="seprator mt-3"></div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="process">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-4 col-lg-4">
                                <h6>P R O C E S S</h6>
                                <h1>This is how we work</h1>
                            </div>

                            <div className="col-12 col-md-8 col-lg-8">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                            </div>

                            {/* <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
                            </div> */}

                            <div className="col-12 box mt-5">
                                <div className="row">
                                    <div className="col-md-3 col-lg-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <a href="#">$</a>
                                                <h4 className="pt-4">FIND</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-lg-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <a href="#">%</a>
                                                <h4 className="pt-4">SECURE</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-lg-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <a href="#">#</a>
                                                <h4 className="pt-4">UPDATE</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-lg-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <a href="#">+</a>
                                                <h4 className="pt-4">WE DELIVER</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="shop">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6 col-lg-6">
                                <h1>Our Dealer Shops</h1>
                                <p>There are many variations of passages of but the majority have suffered alteration words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. </p>
                            </div>

                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="row">
                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div className="shop-card">
                                            <div className="inner">
                                                <h3>Karachi,</h3>
                                                <h6>Defence</h6>
                                                <p>Shop No. 23 Defence view phase 1 Near Imtaiz super market</p>
                                                <a className="contact-btn" href="#">021 2223 4541 23</a>
                                            </div>
                                        </div>
                                   </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div className="shop-card">
                                            <div className="inner">
                                                <h3>Islamabad,</h3>
                                                <h6>DHA</h6>
                                                <p>Shop No. 23 Defence view phase 1 Near Imtaiz super market</p>
                                                <a className="contact-btn" href="#">021 2223 4541 23</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div className="shop-card">
                                            <div className="inner">
                                                <h3>Karachi,</h3>
                                                <h6>Gulshan</h6>
                                                <p>Shop No. 23 Defence view phase 1 Near Imtaiz super market</p>
                                                <a className="contact-btn" href="#">021 2223 4541 23</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div className="shop-card">
                                            <div className="inner">
                                                <h3>Karachi,</h3>
                                                <h6>Defence</h6>
                                                <p>Shop No. 23 Defence view phase 1 Near Imtaiz super market</p>
                                                <a className="contact-btn" href="#">021 2223 4541 23</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default About;