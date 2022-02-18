import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { nouns, chains, adjs } from '../configs/words';

import { useState } from 'react';

export default function Home() {
  const [newIdea, setNewIdea] = useState();
  const [theme, setTheme] = useState();

  const handleClick = (event) => {
    const randomNouns = nouns.sort((a, b) => 0.5 - Math.random());
    const randomChain = chains.sort((a, b) => 0.5 - Math.random())[0];
    const randomAdj = adjs.sort((a, b) => 0.5 - Math.random())[0];
    const newIdea = `${randomAdj} ${randomNouns[0]} ${randomNouns[1]} on ${randomChain}`;

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
        <h1 className="pb-8 text-6xl font-bold">Your Next DeFi Startup</h1>
        <div className="grid grid-cols-4 gap-8">
          <input
            type="text"
            className="col-span-3 border w-128"
            placeholder="add a theme like Pancake, Playmate etc..."
            onChange={(e) => setTheme(e.target.value)}
          />
          <button
            onClick={handleClick}
            className="col-span-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Click for new idea!
          </button>
        </div>
        <h1 className="pt-8 text-4xl font-bold underline">{newIdea}</h1>
      </main>

      <footer className={styles.footer}>
        Powered by yieldfarming.com devs
      </footer>
    </div>
  );
}
