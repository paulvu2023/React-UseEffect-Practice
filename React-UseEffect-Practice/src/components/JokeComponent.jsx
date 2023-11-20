import React, { useState, useEffect } from 'react';

export default function JokeComponent() {
  const [joke, setJoke] = React.useState('');

  async function getJoke() {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      const newJoke = data.value;
      return newJoke;
    } catch (error) {
      console.error('Error fetching Chuck Norris joke:', error);
      return '';
    }
  }

  useEffect(() => {
    getJoke().then((initialJoke) => setJoke(initialJoke));
  }, []);

  return (
    <>
      <div className="joke">{joke}</div>
      <button onClick={async () => setJoke(await getJoke())}>New Joke</button>
    </>
  );
}
