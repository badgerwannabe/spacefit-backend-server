import React, { useState } from "react";
import { Dropdown,Transition, Menu, Grid, Segment,Text } from "semantic-ui-react";
import TrainerCard from "./trainerCard";

function MainContainer(props) {
  const [activeItem, setActiveItem] = useState("schedule");
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const trainers = props.trainers;


  const MainContainer = (
    <Grid className="mainContainer">
      
      <Grid.Column stretched width={4} >
        <Menu secondary vertical size="massive">
          <Menu.Item
           content="Grafik treningów"
            name="schedule"
            active={activeItem === "schedule"}
            onClick={handleItemClick}
          />
          <Menu.Item
            content="Szablony"
            name="templates"
            active={activeItem === "templates"}
            onClick={handleItemClick}
          />
          
          <Menu.Item
            content="Treningi"
            name="trainings"
            active={activeItem === "trainings"}
            onClick={handleItemClick}
          />
          <Menu.Item
            content="Trenerzy"
            name="trainers"
            active={activeItem === "trainers"}
            onClick={handleItemClick}
          />
          <Menu.Item
            content="Użytkownicy"
            name="users"
            active={activeItem === "users"}
            onClick={handleItemClick}
          />
          <Menu.Item
            content="Abonamenty"
            name="passes"
            active={activeItem === "passes"}
            onClick={handleItemClick}
          />
          {/* <Dropdown item text="Display Options">
            <Dropdown.Menu>
              <Dropdown.Header>Text Size</Dropdown.Header>
              <Dropdown.Item>Small</Dropdown.Item>
              <Dropdown.Item>Medium</Dropdown.Item>
              <Dropdown.Item>Large</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </Menu>
      </Grid.Column>

      <Grid.Column stretched width={12}>
        <Segment>
        <Transition.Group>
            {trainers &&
          trainers.map((trainer) => (
            <Grid.Column key={trainer.id} style={{ marginBottom: 20 }}>
              <TrainerCard trainer={trainer} />
            </Grid.Column>
          ))}
          </Transition.Group>
        </Segment>
      </Grid.Column>
    </Grid>
  );

  return MainContainer;
}

export default MainContainer;
