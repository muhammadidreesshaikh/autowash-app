import React from 'react';
import '../assets/css/services.css';
import ServicesCard from '../shared/ServicesCard';

class Services extends React.Component {

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
            </section>
        );
    }
}
export default Services;