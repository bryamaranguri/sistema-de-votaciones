/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useVoting } from '../VotingProvider/VotingProvider';

function Candidato({ name }) {
  const { addVote } = useVoting();

  return (
    <button onClick={() => addVote(name)}>
      Votar por {name.charAt(0).toUpperCase() + name.slice(1)}
    </button>
  );
}

export default Candidato;
