import React from 'react';
import { useVoting } from '../VotingProvider/VotingProvider';
import './Filtro.css'; // Asegúrate de que estás importando el CSS

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
    <div className="filtro-container">
      <div className="candidatos-container">
        {['candidato1', 'candidato2', 'candidato3', 'candidato4'].map(
          (candidato) => (
            <label key={candidato} className="filtro-label">
              <input
                type="checkbox"
                value={candidato}
                checked={filter.selectedCandidates.includes(candidato)}
                onChange={handleCandidateSelection}
              />
              {candidato.charAt(0).toUpperCase() + candidato.slice(1)}
            </label>
          ),
        )}
      </div>
      <label className="filtro-label">
        Mostrar en porcentaje:
        <input
          type="checkbox"
          checked={filter.showPercentage}
          onChange={handleShowPercentageChange}
        />
      </label>
    </div>
  );
}

export default Filtro;
