import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "../../utils/hooks";
import { Button, Form, Dropdown } from "semantic-ui-react";

import {
  ADD_TRAININGS_MUTATION,
  FETCH_TRAININGS_QUERY,
  FETCH_TRAINERS_QUERY,
} from "../../utils/graphql";

function TrainerDropdown(props) {
  const [connectedTrainer, setConnectedTrainer] = useState({
    firstName: "",
    userId: "",
  });

  const { loading, data: { getTrainers: trainers } = {} } =
    useQuery(FETCH_TRAINERS_QUERY);

  const onTrainerChange = (event, result) => {
    const { name, value } = result || event.target;
    setConnectedTrainer({ ...connectedTrainer, [name]: value });
  };

  let options = [];
  trainers &&
    trainers.map((trainer) =>
      options.push({
        key: trainer.id,
        value: trainer.id,
        text: trainer.name,
      })
    );
  console.log(options);
  <Dropdown
    options={options}
    placeholder="Select a trainer"
    name="trainerId"
    fluid
    selection
    onChange={onTrainerChange}
    values={connectedTrainer.userId}
  />;

  return TrainerDropdown;
}
export default TrainerDropdown;
