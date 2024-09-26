import React from 'react';
import { useVoting } from '../VotingProvider/VotingProvider';

function TotalVotos() {
  const { votes } = useVoting();
  const totalVotes = Object.values(votes).reduce((acc, curr) => acc + curr, 0);

  return <div>Total de Votos: {totalVotes}</div>;
}

export default TotalVotos;
