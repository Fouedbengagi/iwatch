import React, { Component } from 'react';
import Menu from "../Menu";
import { Link } from "react-router-dom";

class Service extends Component {
    render() {
        return (
            <div>
                <div className="page-wrap">
                    <div className="">
                        <Menu />
                    </div>
                    <section id="services">
                        <br /><br />
                        <div className="container wow fadeIn">
                            <div className="section-header">
                                <h3 className="section-title">Services</h3>
                                <p className="section-description"> Nous fournissons des services pour vous donner une vision globale.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-8 wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="box">
                                        <div className="icon"><a href=""><i className="fa fa-thumbs-o-up"></i></a></div>

                                        <h4 className="title"><Link exact to="/dashboard">Aide à la décision</Link>  </h4>
                                        <p className="description">Des statistiques détaillés qui vous présentent les meilleurs indicateurs.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="box">
                                        <div className="icon"><a href=""><i className="fa fa-code"></i></a></div>
                                        <h4 className="title"><Link exact to="/api">Avoir un API</Link></h4>

                                        <p className="description">Nous vous permettons d'avoir un accées au données à travers nos APIs.</p>
                                    </div>
                                </div>


                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="box">
                                        <div className="icon"><a href=""><i className="fa fa-shopping-bag"></i></a>
                                        </div>
                                        <h4 className="title"><Link exact to="/map">Map</Link></h4>

                                        <p className="description">Consulter la répartition géographique sur une map</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="call-to-action">
                        <div className="container wow fadeIn">
                            <div className="row">
                                <div className="col-lg-9 text-center text-lg-left">
                                    <h3 className="cta-title">Contactez-nous</h3>
                                    <p className="cta-text"> Pour nous contacter, n'hésitez pas à nous laisser un message et nous tacherons de vous répondre dans les plus brefs délais</p>
                                </div>
                                <div className="col-lg-3 cta-btn-container text-center">
                                    <Link className="cta-btn align-middle" exact to="/contact">Contatez</Link>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Service;
