import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,CardLink ,CardFooter } from 'reactstrap';
  import { ThemeProvider , AgentBar , Column , Title, Subtitle, Avatar, Row,IconButton,
    EmojiIcon , Message , MessageButton, MessageTitle ,MessageMedia , QuickReplies ,MessageButtons } from '@livechat/ui-kit'
    




const ActualiteComponent = (props) => {

  return (
    <div>
    <Card body className="text-center">
      <CardImg top width="100%" src="http://archive.alchourouk.com/images/images_articles_2015/668_334_1451453075.jpg" alt="Card image cap" />
      
        <CardTitle><h3><b>

تجاوزات بيئية نتيجة محطة التطهير
تجاوزات بيئية نتيجة محطة التطهير</b></h3></CardTitle>

         <CardBody>
          <CardText>
          نفذ عدد من أهالي منطقة حسي مدنين التابعة لمعتمدية مدنين الجنوبية وقفة احتجاجية أمام مقر الولاية للمطالبة بوضع حد لتسرب مياه التطهير بمنطقتهم.
       
        </CardText>
         
        </CardBody>

       <CardFooter>
       <button type="button" class="btn btn-danger" style={{backgroundColor: "#e41d24" ,border: "none"}}>Signaleha</button>
       <button type="button" class="btn btn-danger" style={{backgroundColor: "#214574" ,border: "none"}}>Upvoteha</button>
     
      </CardFooter>

        
       
       
      
     
    </Card>
  </div>
  );
};

export default  ActualiteComponent;
