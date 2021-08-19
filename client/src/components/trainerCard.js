import React, { useContext } from "react";
import {  Card, Image } from "semantic-ui-react";
import moment from "moment";

function TrainerCard({
    trainer: { name, createdAt, id,  description,
        email,
        phoneNumber},
  }) {
   
  
   
    return (
      <Card >
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/molly.png"
          />
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            {moment(createdAt).fromNow(true)}
          </Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
         
        </Card.Content>
      </Card>
    );
  }
  export default TrainerCard;
  