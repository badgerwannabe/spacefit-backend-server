import React, {  } from "react";
import { Transition, Grid, Segment } from "semantic-ui-react";
import TrainingCard from "./trainingCard";
import {useQuery} from '@apollo/client';
import { FETCH_TRAININGS_QUERY } from "../../utils/graphql";


function TrainingComponent(props){

    
    const {
        loading,
        data: { getTrainings: trainings } = {}
      } = useQuery(FETCH_TRAININGS_QUERY);
    
      console.log(trainings)
    const TrainingComponent = (

        <Segment>
        <Transition.Group>
          
         
        {trainings &&  
            trainings.map((training) => (
              <Grid.Column key={training.id} style={{ marginBottom: 20 }}>
                <TrainingCard training={training} />
              </Grid.Column>
            ))}

</Transition.Group>
        </Segment>
    )
    return TrainingComponent
}

export default TrainingComponent;