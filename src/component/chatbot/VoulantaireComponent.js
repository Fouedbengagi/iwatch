import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,CardLink ,CardFooter } from 'reactstrap';
  import { ThemeProvider , AgentBar , Column , Title, Subtitle, Avatar, Row,IconButton,
    EmojiIcon , Message , MessageButton, MessageTitle ,MessageMedia , QuickReplies ,MessageButtons } from '@livechat/ui-kit'
    




const Voulantaireomponent = (props) => {

  return (
    <div>
    <Card body className="text-center">
      <CardImg top width="100%" src="" />
      
        <CardTitle></CardTitle>

         <CardBody>
         
         Merci de remplir cet Formulaire 
         <a target="_blank" href="https://docs.google.com/forms/d/1Mw74A7BuDYrxfCBm6dxU-1TjT2LojmiYJYl6AJtZq3o/edit?usp=forms_home&ths=true">Formulaire </a>
        </CardBody>

       <CardFooter>
       
     
      </CardFooter>

        
       
       
      
     
    </Card>
  </div>
  );
};

export default  Voulantaireomponent;
