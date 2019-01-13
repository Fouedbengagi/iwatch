import React, { Component } from 'react';
import Menu from "../Menu";

class Map extends Component {
    render() {
        return (
            <div>
                <div className="page-wrap">
                    <div className="">
                        <Menu />
                    </div>
                    <div>
                        <br/>
                        <br/>
                        <br/>
                        <div id="map"></div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Map;
