import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { words } from '../configs/words';

import { useState } from 'react';

export default function Home() {
  const [newIdea, setNewIdea] = useState();
  const [theme, setTheme] = useState();

  const handleClick = (event) => {
    const shuffledWords = words.sort((a, b) => 0.5 - Math.random());
    const newIdea = `${shuffledWords[0]} ${shuffledWords[1]} ${shuffledWords[2]}`;

    if (theme) {
      newIdea = `${theme} themed ${newIdea}`;
    }

    setNewIdea(newIdea);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>next defi startup creator</title>
        <meta
          name="description"
          content="You can get a next billion dollar idea!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-6xl font-bold">Your Next DeFi Startup</h1>

        <input
          type="text"
          className="px-4 py-3 border w-96"
          placeholder="add a theme here like Pancake, Playmate etc..."
          onChange={(e) => setTheme(e.target.value)}
        />

        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Click for new idea!
        </button>
        <h1 className="text-4xl font-bold underline">{newIdea}</h1>
      </main>

      <footer className={styles.footer}>
        Powered by yieldfarming.com devs
      </footer>
    </div>
  );
}
