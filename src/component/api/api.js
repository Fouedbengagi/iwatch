import React, { Component } from 'react';
import Menu from "../Menu";

class Api extends Component {
    render() {
        return (
            <div>
                <div className="page-wrap">
                    <div className="main-menu">
                        <Menu/>
                    </div>
                    <br/>
                    <br/>
                    <section id="about">
                        <div className="container">
                            <div className="row about-container">

                                <div className="col-lg-6 content order-lg-1 order-2">
                                    <h2 className="title">Utiliser  Notre Service API</h2>
                                    <p>
                                        Une API (Applications Programming Interface) permet à des développeurs, de concevoir des scripts qui pourront s’authentifier sur WordPress pour y créer, modifier, supprimer ou récupérer des contenus dans le but d’automatiser des actions.
                                    </p>

                                    <div className="icon-box wow fadeInUp">
                                        <div className="icon"><i className="fa fa-shopping-bag"></i></div>
                                        <h4 className="title"><a href="">Créer de nouveaux projets</a></h4>
                                        <p className="description">
                                            les APIs, c’est génial, ça permet de se brancher sur un service et de l’utiliser pour créer de nouveaux projets
                                        </p>
                                    </div>

                                    <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="icon"><i className="fa fa-photo"></i></div>
                                        <h4 className="title"><a href="">Conception</a></h4>
                                        <p className="description">
                                            L’écriture d’une API se fait souvent de manière évolutive. Lorsque le service évolue, en général l’API doit évoluer avec. Tout au long de la conception et de l’écriture de l’API
                                        </p>
                                    </div>

                                    <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="icon"><i className="fa fa-bar-chart"></i></div>
                                        <h4 className="title"><a href="">Les services SaaS</a></h4>
                                        <p className="description">
                                            Poussés par les métiers, les services SaaS sont désormais une réalité incontournable. Reste à les intégrer dans le système d’information. Plusieurs options sont possibles.
                                        </p>
                                    </div>

                                </div>
                                <div className="col-lg-6 background order-lg-2 order-1 wow fadeInRight"></div>
                            </div>
                            <br/>
                            <div className="col-12">
                                <h3>Documentation :</h3>
                            </div>
                            <br/>
                            <ul>
                                <li>
                                    <strong>Récupérer tous les Loi de finances 2000 - 2018 :</strong>
                                    <br/>
                                    <div style={{marginLeft:100,marginTop:20}}>[GET]: http://localhost:5000/api/finance/</div>
                                    <br/>
                                    <div style={{marginLeft:100,marginTop:2}}>
                                    Array(
                                        Obj(
                                            "_id": "",
                                            "year": ,
                                            "montant": "",
                                            "recette_t_1": "",
                                            "recette_t_2": "",
                                            "recette_f": ""
                                            ...
                                        )
                                    ,
                                    ...
                                    )
                                    </div>
                                </li>
                                <li style={{marginTop:20}}>
                                    <strong>Récupérer Loi de finances par Année:</strong>
                                    <br/>
                                    <div style={{marginLeft:100,marginTop:20}}>[GET]: http://localhost:5000/finance/year/[année]</div>
                                    <br/>
                                    <div style={{marginLeft:100,marginTop:2}}>
                                        Obj(
                                        "_id": "",
                                        "year": ,
                                        "montant": "",
                                        "recette_t_1": "",
                                        "recette_t_2": "",
                                        "recette_f": ""
                                        ...
                                        )
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Api;
