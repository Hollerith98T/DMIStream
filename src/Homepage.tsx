import React from 'react';
import { Link } from 'react-router-dom';
import { subjects1a, subjects1b, subjects2a, subjects2b, subjects3a, subjects3b } from './Subjects';
import './Homepage.css';

export function Homepage(): JSX.Element {
  return (
    <div>
      <h1 className="title">DMIStream</h1>
      <p className="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s.
      </p>
      <div className="contents-grid">
        {columnContents('first')}
        {columnContents('second')}
        {columnContents('third')}
      </div>
    </div>
  );
}

function columnContents(year: string): JSX.Element {
  return (
    <div className={year + 'Column'}>
      {year === 'first' && <h2>Primo Anno</h2>}
      {year === 'second' && <h2>Secondo Anno</h2>}
      {year === 'third' && <h2>Terzo Anno</h2>}
      <div className="first-semester">
        <h4>Primo semestre</h4>
        {year === 'first' &&
          subjects1a.map((subject, index) => (
            <Link to="/subjectPage">
              <p>{subject}</p>
            </Link>
          ))}
        {year === 'second' &&
          subjects2a.map((subject, index) => (
            <Link to="/subjectPage">
              <p>{subject}</p>
            </Link>
          ))}
        {year === 'third' &&
          subjects3a.map((subject, index) => (
            <Link to="/subjectPage">
              <p>{subject}</p>
            </Link>
          ))}
      </div>
      <div className="second-semester">
        <h4>Secondo semestre</h4>
        {year === 'first' &&
          subjects1b.map((subject, index) => (
            <Link to="/subjectPage">
              <p>{subject}</p>
            </Link>
          ))}
        {year === 'second' &&
          subjects2b.map((subject, index) => (
            <Link to="/subjectPage">
              <p>{subject}</p>
            </Link>
          ))}
        {year === 'third' &&
          subjects3b.map((subject, index) => (
            <Link to="/subjectPage">
              <p>{subject}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}
