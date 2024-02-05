import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />

        <h1 className={styles.title}>
          Welcome to <a href="">CryptoPayer</a>
        </h1>

        <p className={styles.description}>
        Start Accepting Crypto Payments NOW{' '}
         
        </p>

        <div className={styles.grid}>
          <a className={styles.card} href="https://nowpayments.io/supported-coins">
            <h2>300+ cryptocurrencies available &rarr;</h2>
            <p>Accept BTC, ETH and any other cryptocurrency of your choice</p>
          </a>

          <a className={styles.card} href="https://nowpayments.io/pricing">
            <h2>Only 0.5% – the lowest fee on the market &rarr;</h2>
            <p>Pay less our 0.5% fees are the lowest on the market</p>
          </a>

          <a
            className={styles.card}
            href="https://nowpayments.io/instant-payouts"
          >
            <h2>Withdraw euro directly to your bank account &rarr;</h2>
            <p>Receive your funds directly to your wallet - right away</p>
          </a>

          <a className={styles.card} href="https://nowpayments.io/premium-account-manager">
            <h2>Personal account manager & 24/7 support &rarr;</h2>
            <p>Your personal manager and 24/7 support will answer all your questions</p>
          </a>

        

      
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by NOWPayments – 2024

        </a>
      </footer>
    </div>
  );
};

export default Home;
