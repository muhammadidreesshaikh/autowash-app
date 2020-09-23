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
                <p>Oder Oder Oder</p>
            </section>
        );
    }
}
export default Oder;