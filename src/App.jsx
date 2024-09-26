import React from 'react';
import { VotingProvider } from './components/VotingProvider/VotingProvider';
import Candidato from './components/Candidato/Candidato';
import TotalVotos from './components/TotalVotos/TotalVotos';
import VotosIndividuales from './components/VotosIndividuales/VotosIndividuales';
import Filtro from './components/Filtro/Filtro';

function App() {
  return (
    <VotingProvider>
      <div>
        <h1>Sistema de Votaciones</h1>
        <Filtro />
        <div>
          <Candidato name="candidato1" />
          <Candidato name="candidato2" />
          <Candidato name="candidato3" />
          <Candidato name="candidato4" />
        </div>
        <TotalVotos />
        <VotosIndividuales />
      </div>
    </VotingProvider>
  );
}

export default App;
