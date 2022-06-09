import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Myportfolio</title>
        <meta name='description' content="This is description" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.header_container}>
            <a href="#" className={styles.logo}>portfolio</a>
            <nav>
              <ul className={styles.hav}>
                <li><a href="#about">About</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
      </main>
    </div>
  )
}
