import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const VotingContext = createContext();

export const useVoting = () => useContext(VotingContext);

export function VotingProvider({ children }) {
  const [votes, setVotes] = useState({
    candidato1: 0,
    candidato2: 0,
    candidato3: 0,
    candidato4: 0,
  });
  const [filter, setFilter] = useState({
    showPercentage: false,
    selectedCandidates: [
      'candidato1',
      'candidato2',
      'candidato3',
      'candidato4',
    ],
  });

  const addVote = (candidato) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [candidato]: prevVotes[candidato] + 1,
    }));
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <VotingContext.Provider value={{ votes, addVote, filter, setFilter }}>
      {children}
    </VotingContext.Provider>
  );
}
VotingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
