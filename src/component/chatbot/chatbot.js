import React, { Component } from 'react';
import { Chat, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-popup';

import logo from './chatbot.png';

class Chatbot extends Component {
  componentDidMount() {
    addResponseMessage("bienvenue dans notre chatbot!");
    addResponseMessage("posez une question!");
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