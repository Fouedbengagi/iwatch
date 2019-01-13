import React, { Component } from 'react';
import Menu from "../Menu";
import { auth, database, dbstore } from '../../fire';



class reclamations extends Component {


    constructor(props) {
        super(props);
        this.state = {
            reclamations: []
        };








    }




    componentWillMount() {
        let docs = [];
        dbstore.collection("reclamations").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                docs.push(doc.data())
            });
            this.setState({ reclamations: docs })
        });

    }




    render() {
        let { reclamations } = this.state;

        console.log('reclamations' + JSON.stringify(reclamations));
        let rec;
        if (reclamations.length > 0) {
            rec = reclamations.map((number) =>
                <div className="container-fluid">
                    <h2>Réclamations</h2>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <h6> La corruption est encore présente dans nos rue!</h6>
                            aujourd'hui j'ai rencontré un policier qui entrain d'aisser de prendre une corruption, c vraiment degoutant!
              <br /> <br /> <img src="icone/rec.png" style={{ width: 40 }} /> <img src="icone/checked.png" style={{ width: 30 }} /> <img src="icone/dislike.png" style={{ width: 40 }} />
                        </li>
                        <li className="list-group-item">
                            <h6> La corruption est encore présente dans nos rue!</h6>
                            <img src="1.jpg" className="float-left" />
                            <br /> <br /> <br /> <br /><br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br /> <img src="icone/rec.png" style={{ width: 40 }} /> <img src="icone/checked.png" style={{ width: 30 }} /> <img src="icone/dislike.png" style={{ width: 40 }} />
                        </li>
                        <li className="list-group-item">
                            <h6> La corruption est encore présente dans nos rue!</h6>
                            aujourd'hui j'ai rencontré un policier qui entrain d'aisser de prendre une corruption, c vraiment degoutant!
              <br /> <br /> <img src="icone/rec.png" style={{ width: 40 }} />
                            <img src="icone/checked.png" style={{ width: 30 }} />
                            <img src="icone/dislike.png" style={{ width: 40 }} />
                        </li>
                    </ul>
                </div>
            );
        }
        return (

            <div>
                <div className="container">
                    <Menu />
                    <h1>Liste des reclamations</h1>
                    {rec}
                </div>


            </div>
        );
    }
}

export default reclamations;
