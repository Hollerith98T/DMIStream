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
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
