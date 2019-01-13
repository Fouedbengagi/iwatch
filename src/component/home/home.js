import React, { Component } from 'react';
import "./homestyle.css";
import Chatbot from "../chatbot/chatbot";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <section id="hero">
                <div className="hero-container">
                    <h1>Bienvenue à Reclami</h1>
                    <h2>Visualiser , Reclamer , Changer !</h2>
                    <Link exact to="/service" className="btn-get-started">Commencez</Link>
                    <Chatbot></Chatbot>
                </div>
            </section>
        );
    }
}

export default Home;
