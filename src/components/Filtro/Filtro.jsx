//* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useVoting } from '../VotingProvider/VotingProvider';

function Filtro() {
  const { filter, setFilter } = useVoting();

  const handleShowPercentageChange = (e) => {
    setFilter({ ...filter, showPercentage: e.target.checked });
  };

  const handleCandidateSelection = (e) => {
    const { value, checked } = e.target;
    const updatedCandidates = checked
      ? [...filter.selectedCandidates, value]
      : filter.selectedCandidates.filter((candidate) => candidate !== value);

    setFilter({ ...filter, selectedCandidates: updatedCandidates });
  };

  return (
    <div>
      <label>
        Mostrar en porcentaje:
        <input
          type="checkbox"
          checked={filter.showPercentage}
          onChange={handleShowPercentageChange}
        />
      </label>
      <div>
        <label>
          <input
            type="checkbox"
            value="candidato1"
            checked={filter.selectedCandidates.includes('candidato1')}
            onChange={handleCandidateSelection}
          />
          Candidato 1
        </label>
        <label>
          <input
            type="checkbox"
            value="candidato2"
            checked={filter.selectedCandidates.includes('candidato2')}
            onChange={handleCandidateSelection}
          />
          Candidato 2
        </label>
        <label>
          <input
            type="checkbox"
            value="candidato3"
            checked={filter.selectedCandidates.includes('candidato3')}
            onChange={handleCandidateSelection}
          />
          Candidato 3
        </label>
        <label>
          <input
            type="checkbox"
            value="candidato4"
            checked={filter.selectedCandidates.includes('candidato4')}
            onChange={handleCandidateSelection}
          />
          Candidato 4
        </label>
      </div>
    </div>
  );
}

export default Filtro;
