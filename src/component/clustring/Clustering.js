import React, { Component } from 'react';
import Menu from "../Menu";
import Graph from "react-graph-vis";
const graph = {
    nodes: [
        { id: 1, label: "Enti5abet", color: "#e04141" },
        { id: 2, label: "Fased", color: "#e09c41" },
        { id: 3, label: "Tazwir", color: "#e0df41" },
        { id: 4, label: "Tahrib", color: "#7be041" },
        { id: 5, label: "E5tiless", color: "#41e0c9" }
    ],
    edges: [{ from: 1, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 4 }, { from: 2, to: 5 }]
};

const options = {
    layout: {
        hierarchical: false
    },
    edges: {
        color: "#000000"
    }
};

const events = {
    select: function (event) {
        var { nodes, edges } = event;
        console.log("Selected nodes:");
        console.log(nodes);
        console.log("Selected edges:");
        console.log(edges);
    }
};



class Clustering extends Component {
    render() {


        return (
            <div className="container">
                <div className="">
                    <Menu />
                </div>
                <Graph graph={graph} options={options} events={events} style={{ height: "640px" }} />



            </div>
        );
    }
}

export default Clustering;
