import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <header className="header-fixed" id="header">
                <div className="container">
                    <div id="logo" className="pull-left">
                        <a href="/"><img src="img/logo.png" height="65" alt="" title="" /></a>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li>
                                <NavLink activeClassName="menu-active" exact to="/">Accueil</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="menu-active" exact to="/service">Services</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="menu-active" exact to="/reclamations">Reclamations</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="menu-active" exact to="/statistiques">Statistiques</NavLink>
                            </li>
                            <li>
                                <a href="http://localhost:3000/map">Map</a>
                            </li>
                            <li>
                                <a href="http://localhost:3000/clustering">Clustering</a>
                            </li>
                            <li>
                                <NavLink activeClassName="menu-active" exact to="/api">API</NavLink>
                            </li>

                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Menu;
