import React, { Component } from 'react';
import { Chat, addResponseMessage, addLinkSnippet, addUserMessage ,renderCustomComponent } from 'react-chat-popup';

import logo from './chatbot.png';

import WelcomeComponent from './WelcomeComponent'; 
import ActualiteComponent from  './ActualitéComponent';
import StatistqiueComponent from './StatistiqueComponent';
import TablighComponent from './Tablighalawe93a';
import Voulantaireomponent from './VoulantaireComponent';

import './style.css';
class Chatbot extends Component {


  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);

  }

  
  componentDidMount() {
    addResponseMessage("bienvenue dans notre chatbot! ");
    renderCustomComponent(WelcomeComponent,{"onSelect":this.onSelect})
  }


//____________________________________________________//

onSelect(e)
{
  ///_swicth use choice we ill provide for him an input___//
  switch (e) {
    case 'Theb Tahki m3aya ?':
    addResponseMessage("Hi Welcome  :)");
    addResponseMessage("bienvenue dans notre chatbot!");
    addResponseMessage("posez une question!");
      break;
    case 'Theb TbALAGAH 3an we93a ? ':
    addResponseMessage("n3amwro wahda wadha les données ?");
    renderCustomComponent(TablighComponent,{})
      break; 
    case 'Enti voulantaire w theb twali obervateur m3ana ?':
        addResponseMessage("Which Company are you Looking for ?");
        renderCustomComponent(Voulantaireomponent,{})
      break;  
    case 'Statistique':
    renderCustomComponent(StatistqiueComponent,{})
      //rende QuizzComponent______//
      //render the first Message
      
      /*let { Quizz,indexQuizz} = this.state;
      console.log('handle quizz' +this.handleQuizz)
      renderCustomComponent(QuizzComponent,{
    'Quizz':Quizz[indexQuizz] ,"handleQuizz":this.handleQuizz})*/
      break;  
    case 'Actualitées':
      //rende QuizzComponent______//
      //render the first Message
     
      renderCustomComponent(ActualiteComponent,{})
      break;    
    default:
      console.log('not detetc !!')   

}

}





  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    if (newMessage == "statistiques") {
      addResponseMessage("vous pouvez consulter les statiques à travers cette page http://localhost:3000/statistiques!");
    }
    else if (newMessage == "map") {
      addResponseMessage("vous pouvez consulter les statiques à travers cette page http://localhost:3000/map!");
    }
    else if (newMessage == "bonjour") {
      addResponseMessage("bonjour monsieur , comment je peux vous aidez");
    }
    else if (newMessage == "statistiques svp") {
      addResponseMessage("vous pouvez consulter les statiques à travers cette page http://localhost:3000/statistiques!");
    }
    else if (newMessage == "quel sont vos services") {
      addResponseMessage("ici vous trouvez nos services http://localhost:3000/service");
    }
    else {
      addResponseMessage("j'ai pas compris votre question");

    }

    // Now send the message throught the backend API
  }

  render() {
    return (
      <div className="Chatbot">
        <Chat
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="Reclami Bot"
        />
      </div>
    );
  }
}

export default Chatbot;