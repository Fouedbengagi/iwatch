import React, { Component } from 'react';
import { ThemeProvider , AgentBar , Column , Title, Subtitle, Avatar, Row,IconButton,
EmojiIcon , Message , MessageButton, MessageTitle ,MessageMedia , QuickReplies ,MessageButtons } from '@livechat/ui-kit'


class WelcomeComponent extends Component {





  render() {
    return (

<ThemeProvider>
<div>
  
  <AgentBar>
  <Avatar/>
  <Column>
    <Title></Title>
    <Subtitle>{'_______'}</Subtitle>
  </Column>
</AgentBar>


<div style={{ maxWidth: 400 }}>
  <QuickReplies
    replies={[
      'Theb Tahki m3aya ?',
      'Theb TbALAGAH 3an we93a ? ',
      'Enti voulantaire w theb twali obervateur m3ana ?',
      'Statistique',
      'Actualitées',
    ]}
   
   /* onSelect={(e) => {
      
      alert("clicked!" + e)
      
}} */

onSelect={(e) =>this.props.onSelect(e)}
   
  />
</div>




</div>
</ThemeProvider>




    );
  }
}

export default WelcomeComponent ;