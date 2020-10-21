import React from 'react';

export function Subject(): JSX.Element {
  const title: string = 'elem. di analisi 1';
  const description: string = 'si occupa dello studio delle funzioni..';
  const image: string = '../public/logo512.png';
  const date: string[] = ['01-02-03', '02-03-4', '03-04-05'];
  const background: string = '../public/logo512.png';
  return (
    <div>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        img

    </div>
  )
}
