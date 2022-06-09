import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Myportfolio</title>
        <meta name='description' content="This is description" />
        {/*見出し用のフォント*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&display=swap"
          rel="stylesheet"
        />
        {/*本文のフォント*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300&display=swap"
          rel="stylesheet"
        />
        {/*小見出し用のフォント*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Zen+Maru+Gothic:wght@300&display=swap"
          rel="stylesheet"
        />
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
