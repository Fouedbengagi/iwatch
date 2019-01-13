import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,CardLink ,CardFooter } from 'reactstrap';
  import { ThemeProvider , AgentBar , Column , Title, Subtitle, Avatar, Row,IconButton,
    EmojiIcon , Message , MessageButton, MessageTitle ,MessageMedia , QuickReplies ,MessageButtons } from '@livechat/ui-kit'
    
    import {
        XYPlot, LineSeries, VerticalBarSeries,
        VerticalGridLines,
        HorizontalGridLines,
        XAxis,
        YAxis,
        VerticalBarSeriesCanvas,
        DiscreteColorLegend,
        MarkSeries, RadialChart
    } from 'react-vis';



const StatistqiueComponent = (props) => {
 

  const myData = [{ angle: 7, label: 'Hommes' }, { angle: 3, label: 'Femmes' }];

  const data = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 }
  ];
  const ITEMS = [
      'Femme',
      'Homme',

  ];

  return (
    <div className="container">
    
    <span><h1>le nombre des reclamations par jour</h1></span>
                <XYPlot width={500} height={200}>
                    <VerticalGridLines values={[2, 2.3, 2.7]} />
                    <XAxis />
                    <YAxis />
                    <LineSeries data={[{ x: 1, y: 12 }, { x: 2, y: 7 }, { x: 3, y: 9 }, { x: 4, y: 4 }, { x: 5, y: 4 }, { x: 6, y: 0 }, { x: 7, y: 0 }]} />
                </XYPlot>
         
         
        
  </div>
  );
};

export default StatistqiueComponent;
