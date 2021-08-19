import React from 'react';
import {useQuery} from '@apollo/client';
import { FETCH_TRAINERS_QUERY } from '../utils/graphql';
import MainContainer from '../components/MainContainer';

function Home(){
    const {
        loading,
        data: { getTrainers: trainers } = {}
      } = useQuery(FETCH_TRAINERS_QUERY);


    return(
        <div><h1>Home page</h1>
        <MainContainer trainers={trainers} />
        </div>
    )
}

export default Home;