import React from 'react';
import './App.css';
import { subjects1a, subjects1b, subjects2a, subjects2b, subjects3a, subjects3b} from './groups';

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
            {subjects1a.map((subject, index) => (
              <p>{subject}</p>
            ))}
          </div>
          <div className="second-semester">
            <h4> Secondo semestre </h4>
            {subjects1b.map((subject, index) => (
              <p>{subject}</p>
            ))}
          </div>
        </div>

        <div className="columns2">
          <div className="first-semester">
            <h2> Secondo Anno</h2>
            <h4> Primo semestre </h4>
            {subjects2a.map((subject, index) => (
              <p>{subject}</p>
            ))}
          </div>
          <div className="second-semester">
            <h4> Secondo semestre </h4>
            {subjects2b.map((subject, index) => (
              <p>{subject}</p>
            ))}
          </div>
        </div>

        <div className="columns3">
          <div className="first-semester">
            <h2> Terzo Anno</h2>
            <h4> Primo semestre </h4>
            {subjects3a.map((subject, index) => (
              <p>{subject}</p>
            ))}
          </div>
          <div className="second-semester">
            <h4> Secondo semestre </h4>
            {subjects3b.map((subject, index) => (
              <p>{subject}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
