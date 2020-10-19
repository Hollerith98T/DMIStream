import React from 'react';
import './App.css';

function App() {
  let subjects: string[] = [];

  for (let i: number = 0; i < 10; i++) {
    subjects.push(`Materia N.${i}`);
  }

  return (
    <div>
      <h1 className="title">DMIStream</h1>
      <p className="description">
        Bellissima web app per la visualizzazione di lezioni direttamente prelevate in maniera
        totalmente affidabile da Microsoft Teams
      </p>
      <div className="contents-grid">
        <div className="columns1">
          {subjects.map((subject, index) => (
            <p>{subject}</p>
          ))}
        </div>
        <div className="columns2">
          {subjects.map((subject, index) => (
            <p>{subject}</p>
          ))}
        </div>
        <div className="columns3">
          {subjects.map((subject, index) => (
            <p>{subject}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
