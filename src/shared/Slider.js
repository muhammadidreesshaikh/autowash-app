import React from 'react';
import '../assets/css/slider.css';
import slider from '../assets/img/slider2.png'

class Slider extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Slider");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div>
               <section>
                   <div className="slider">
                       <div className="container">
                           <div className="row">

                               <div className="col-12 col-md-12 col-lg-6">
                                   <div className="heading">
                                        <h1>Say hello to best car wash platform</h1>
                                        <p className="pt-3">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                        <h6 className="pt-4">Popular Brands</h6>
                                        <ul className="pt-1">
                                            <li><a href="#">Honda</a></li>
                                            <li><a href="#">Toyota</a></li>
                                            <li><a href="#">Kia</a></li>
                                            <li><a href="#">Suzuki</a></li>
                                            <li><a href="#">Nissan</a></li>
                                            <li><a href="#">Daihatsu</a></li>
                                        </ul>
                                   </div>
                               </div>

                               <div className="col-12 col-md-12 col-lg-6">
                                   <div className="image">
                                        <div className="wrapper d-none d-md-block d-lg-block">
                                            <h6>Toyota</h6>
                                            <p>Revo Rocco</p>
                                        </div>
                                        
                                        <img src={slider} />
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </section>
            </div>
        );
    }
}
export default Slider;