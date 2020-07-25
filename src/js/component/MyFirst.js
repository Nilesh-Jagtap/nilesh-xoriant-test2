import React, {Component} from "react";
import ReactDOM from "react-dom";

class MyFirst extends Component {
    render() {
        return (
            <h1>This app is running in development mode</h1>
        )
    }
}

export default MyFirst;

const myElement = document.getElementById('myCont');
myElement ? ReactDOM.render(<Myfirst />, myElement) : false;