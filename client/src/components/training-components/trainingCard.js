import React from "react";
import {  Card, Image } from "semantic-ui-react";
import moment from "moment";

function TrainingCard({
    training: { trainingName, createdAt, id,  trainingDescription,
        trainer},
  }) {
   
  
    return (
      <Card fluid >
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/molly.png"
          />
          <Card.Header>{trainingName}</Card.Header>
          <Card.Meta>
            {moment(createdAt).fromNow(true)}
          </Card.Meta>
          <Card.Description>{trainingDescription}</Card.Description>
        </Card.Content>
        <Card.Content extra>
         
        </Card.Content>
      </Card>
    );
  }
  export default TrainingCard;
  