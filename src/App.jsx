import React from 'react';
import { VotingProvider } from './components/VotingProvider/VotingProvider';
import Candidato from './components/Candidato/Candidato';
import TotalVotos from './components/TotalVotos/TotalVotos';
import VotosIndividuales from './components/VotosIndividuales/VotosIndividuales';
import Filtro from './components/Filtro/Filtro';
import './App.css';

function App() {
  return (
    <VotingProvider>
      <div className="app-container">
        <h1 className="title">Sistema de Votaciones</h1>
        <Filtro />
        <div className="candidates-container">
          <Candidato name="candidato1" />
          <Candidato name="candidato2" />
          <Candidato name="candidato3" />
          <Candidato name="candidato4" />
        </div>
        <div className="results-container">
          <TotalVotos />
          <VotosIndividuales />
        </div>
      </div>
    </VotingProvider>
  );
}

export default App;
