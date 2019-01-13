import React, { Component } from 'react';
import { Chat, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-popup';

import logo from './chatbot.png';

class Chatbot extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to our chatbot!");
    addResponseMessage("ask me e question!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    if (newMessage == "statistiques") {
      addResponseMessage("vous pouvez consulter les statiques à travers cette page http://localhost:3000/statistiques!");
    }
    if (newMessage == "map") {
      addResponseMessage("vous pouvez consulter les statiques à travers cette page http://localhost:3000/map!");
    }
    if (newMessage == "bonjour") {
      addResponseMessage("bonjour monsieur , comment je peux vous aidez");
    }
    if (newMessage == "statistiques svp") {
      addResponseMessage("vous pouvez consulter les statiques à travers cette page http://localhost:3000/statistiques!");
    }
    if (newMessage == "quel sont vos services") {
      addResponseMessage("ici vous trouvez nos services http://localhost:3000/statistiques");
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