import React from 'react';
import './App.css';
import { subjects1, subjects2, subjects3 } from './groups';

function App() {
  return (
    <div>
      <h1 className="title">DMIStream</h1>
      <p className="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s.
      </p>
      <div className="contents-grid">
        <div className="columns1">
          <div className="first-semester">
            <h2> Primo Anno</h2>
            <h4> Primo semestre </h4>
            {subjects1.map((subject, index) => (
              <p>{subject}</p>
            ))}
          </div>
          <div className="second-semester">
            <h4> Secondo semestre </h4>
            {subjects1.map((subject, index) => (
              <p>{subject}</p>
            ))}
          </div>
        </div>

        <div className="columns2">
          <div className="first-semester">
          <h2> Secondo Anno</h2>
            <h4> Primo semestre </h4>
            {subjects2.map((subject, index) => (
              <p>{subject}</p>
            ))}
          </div>
          <div className="second-semester">
            <h4> Secondo semestre </h4>
            {subjects2.map((subject, index) => (
              <p>{subject}</p>
            ))}
          </div>
        </div>

        <div className="columns3">
          <div className="first-semester">
          <h2> Terzo Anno</h2>
            <h4> Primo semestre </h4>
            {subjects3.map((subject, index) => (
              <p>{subject}</p>
            ))}
          </div>
          <div className="second-semester">
            <h4> Secondo semestre </h4>
            {subjects3.map((subject, index) => (
              <p>{subject}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
