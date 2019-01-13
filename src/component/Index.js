import React, { Component } from 'react';

import Menu from "./Menu";
import Home from "./home/home";

class Index extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Home/>
            </div>
        );
    }
}

export default Index;
