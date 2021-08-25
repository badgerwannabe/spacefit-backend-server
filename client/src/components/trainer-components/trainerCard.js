import React from "react";
import { Card, Image, Button, List } from "semantic-ui-react";
import {Link} from "react-router-dom"
import moment from "moment";
import DeleteButton from "../DeleteButton";

function TrainerCard({
  

  trainer: { name, createdAt, id, description, email, phoneNumber },
}) {
  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="medium"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header  as={Link}
              to={`/trainers/${id}`}  >{name}</Card.Header>
        <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <List>
          <List.Item>
            <List.Icon name="mail" />
            <List.Content> {email}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="phone" />
            <List.Content>{phoneNumber}</List.Content>
          </List.Item>
        </List>
      </Card.Content>
      <Card.Content extra>
        <Button onClick={console.log("Edit trainer")} as={Link}
              to={`/trainers/${id}`} primary >
          Edytuj
        </Button>
        <DeleteButton trainerId={id} />
       
      </Card.Content>
    </Card>
  );
}
export default TrainerCard;
