import React from 'react';
import { useVoting } from '../VotingProvider/VotingProvider';

function VotosIndividuales() {
  const { votes, filter } = useVoting();
  const totalVotes = Object.values(votes).reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      {Object.keys(votes).map(
        (key) =>
          filter.selectedCandidates.includes(key) && (
            <div key={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:{' '}
              {filter.showPercentage
                ? `${((votes[key] / totalVotes) * 100).toFixed(2)}%`
                : votes[key]}
            </div>
          ),
      )}
    </div>
  );
}

export default VotosIndividuales;
