import React, { Component } from 'react';
import Menu from "../Menu";

import {
    XYPlot, LineSeries, VerticalBarSeries,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis,
    VerticalBarSeriesCanvas,
    DiscreteColorLegend,
    MarkSeries, RadialChart
} from 'react-vis';



class Statistiques extends Component {


    render() {
        const myData = [{ angle: 7, label: 'Hommes' }, { angle: 3, label: 'Femmes' }];

        const data = [
            { x: 0, y: 8 },
            { x: 1, y: 5 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
            { x: 4, y: 1 },
            { x: 5, y: 7 },
            { x: 6, y: 6 },
            { x: 7, y: 3 },
            { x: 8, y: 2 },
            { x: 9, y: 0 }
        ];
        const ITEMS = [
            'Femme',
            'Homme',

        ];
        return (
            <div className="container">
                <div className="">
                    <Menu />
                </div>
                <br />
                <br />
                <br />
                <br />
                <span><h1>le nombre des reclamations par jour</h1></span>
                <hr></hr>

                <XYPlot width={900} height={300}>
                    <VerticalGridLines values={[2, 2.3, 2.7]} />
                    <XAxis />
                    <YAxis />
                    <LineSeries data={[{ x: 1, y: 12 }, { x: 2, y: 7 }, { x: 3, y: 9 }, { x: 4, y: 4 }, { x: 5, y: 4 }, { x: 6, y: 0 }, { x: 7, y: 0 }]} />
                </XYPlot>
                <span><h1>la répartition des sexes des reclammateurs</h1></span>
                <hr></hr>
                <center>
                    <RadialChart

                        data={myData}
                        width={300}
                        height={300} />
                    <DiscreteColorLegend height={400} width={600} items={ITEMS} />

                </center>

            </div>
        );
    }
}

export default Statistiques;
