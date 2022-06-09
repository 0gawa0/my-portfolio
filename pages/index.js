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
              <ul className={styles.nav}>
                <li><a href="#about">About</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <div className={styles.title_content}>
          <h1 className={`${styles.title} ${styles.text_focus_in}`}>Portfolio</h1>
          <p className={`${styles.subhead} ${styles.text_focus_in}`}>
            Welcome to my page.<br />
            This is a page I created to learn about website development.
          </p>
        </div>

        {/*自己紹介*/}
        <div className={styles.content}>
          <a name="about" className={styles.headline}>profile</a>
          <div className={styles.image_horizontal_content}>
            <img className={styles.appearance_image} src="/sushi.png" alt="自画像" />
            <p className={styles.paragraph}>
              所属：静岡大学情報学部情報科学科2年<br />
              出身：三重県南部<br />
              <br />
              最近はblenderとAfterEffectsに興味を持ってます<br />
              もっと使いこなせるようになりたいですが、なかなかソフトを弄れずにいます...<br />
              今年中にはモデリングがそれなりにできるようにしていきたいです
            </p>
          </div>
        </div>

        {/*将来の目標*/}
        <div className={styles.content}>
          <h2 className={styles.headline}>aim</h2>
          <div className={styles.image_vertical_content}>
            <p className={styles.paragraph}>
              フロントエンドの開発に興味があるので、それに関連した職業につけたらいいなと思ってます（せっかく先端で取り組んでいるので）<br/>
                ただ、最近はネットワークやセキュリティも魅力的だと感じているので悩んでいます...
            </p>
          </div>
        </div>

        {/*好きなこと*/}
        <div className={styles.content}>
          <h2 className={styles.headline}>favorite</h2>
          <div className={styles.image_vertical_content}>
            <p className={styles.paragraph}>
              ここ1年はお絵描きにハマってます。大学入学時にipadAirを購入したのをきっかけに始めました<br/>
              なかなか思った通りの絵が描けていないですが、その分上手くいったときの達成感がすごいです<br/>
              これからはアニメーションなどにも挑戦してみたいと思ってます（体描くの苦手ですが...）<br/>
              <br/>
              最近はなかなか見れていないですがアニメも見たりしてます（スパイファミリーおもろい）<br/>
              <br/>
              あとは散歩するのが好きです　普段は行かないようなところに着くと新鮮な気持ちになります
            </p>
          </div>
        </div>

        {/*好きな食べ物*/}
        <div className={styles.content}>
          <h2 className={styles.headline}>food</h2>
          <div className={styles.image_vertical_content}>
          好きな食べ物は穴子の握りです、穴子しか勝たん👍<br/>
                たれが程よく絡み、ふわふわの身とよく合います<br/>
                <br/>
                あとは大学の食堂にある鶏レバーが美味しくて最近よく食べてます　生姜が効いていてさっぱりしてて、比較的濃い目の味付けでご飯によく合います<br/>
                <br/>
                <img className={styles.chicken_image} src="\image\chickenreba.jpg" alt="薩摩ハーブ鶏のレバー煮" /><br/>
                <br/>
                タンパク質ばっかりですね
          </div>
        </div>

      </main>
    </div>
  )
}
