import React from 'react';
import '../assets/css/slider.css';

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

                               <div className="col-12 col-md-6 col-lg-6">
                                   <div className="heading">
                                    <h1>Say hello to best car wash platform</h1>
                                    <p className="pt-3">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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