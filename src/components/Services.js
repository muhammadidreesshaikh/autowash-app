import React from 'react';
import '../assets/css/services.css';
import ServicesCard from '../shared/ServicesCard';

class Services extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Services");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section>
                <div className="services">
                    <div className="container">
                        <div className="row justify-content-center ">
                            <div className="col-md-6">
                                <h1>Premium Washing Services</h1>

                                <div className="seprator mt-3"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="products">
                    <div className="container">
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

                            <div className="col-md-4">
                                <ServicesCard />
                            </div>

                            <div className="col-md-4">
                                <ServicesCard />
                            </div>

                            <div className="col-md-4">
                                <ServicesCard />
                            </div>

                            <div className="col-md-4">
                                <ServicesCard />
                            </div>

                            <div className="col-md-4">
                                <ServicesCard />
                            </div>

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
            </section>
        );
    }
}
export default Services;