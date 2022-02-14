import Head from 'next/head'
import styles from '../styles/Home.module.css'
import link from 'next/link';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reminder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  )
}