import React from 'react';
import '../assets/css/contact.css';

class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Contact");

        this.setState({
            loading: true
        }); 
    }

    render() {
        return(
            <section>
                <div className="contact">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="left">
                                    <h2>Lets Talk</h2>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>

                                    <div className="detail">
                                        <h6>Addres:</h6>
                                        <p>Shop No. 23 DHA Phase 4 Near, Hyper Star, Karachi. </p>

                                        <h6 className="pt-3">Contact:</h6>
                                        <p>+92 3312737076</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="row right">
                                    <div className="col-md-6 col-lg-6">
                                        <input type="name" placeholder="Full Name"></input>
                                    </div>

                                    <div className="col-md-6 col-lg-6">
                                        <input type="name" placeholder="Email"></input>
                                    </div>

                                    <div className="col-md-12 col-lg-12">
                                        <input type="name" placeholder="Subject"></input>
                                    </div>

                                    <div class="col-md-12 name">
                                        <textarea rows="5" placeholder="Your Message"></textarea>
                                    </div>
                                </div>

                                <div className="pt-5 text-center">
                                    <a className="press" href="#">SEND MESSAGE</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Contact;