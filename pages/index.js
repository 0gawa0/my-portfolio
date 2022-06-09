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
            <Image className={styles.appearance_image} src="/sushi.png" alt="自画像" />
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
              フロントエンドの開発に興味があるので、それに関連した職業につけたらいいなと思ってます（せっかく先端で取り組んでいるので）<br />
              ただ、最近はネットワークやセキュリティも魅力的だと感じているので悩んでいます...
            </p>
          </div>
        </div>

        {/*好きなこと*/}
        <div className={styles.content}>
          <h2 className={styles.headline}>favorite</h2>
          <div className={styles.image_vertical_content}>
            <p className={styles.paragraph}>
              ここ1年はお絵描きにハマってます。大学入学時にipadAirを購入したのをきっかけに始めました<br />
              なかなか思った通りの絵が描けていないですが、その分上手くいったときの達成感がすごいです<br />
              これからはアニメーションなどにも挑戦してみたいと思ってます（体描くの苦手ですが...）<br />
              <br />
              最近はなかなか見れていないですがアニメも見たりしてます（スパイファミリーおもろい）<br />
              <br />
              あとは散歩するのが好きです　普段は行かないようなところに着くと新鮮な気持ちになります
            </p>
          </div>
        </div>

        {/*好きな食べ物*/}
        <div className={styles.content}>
          <h2 className={styles.headline}>food</h2>
          <div className={styles.image_vertical_content}>
            <p className={styles.paragraph}>
              好きな食べ物は穴子の握りです、穴子しか勝たん👍<br />
              たれが程よく絡み、ふわふわの身とよく合います<br />
              <br />
              あとは大学の食堂にある鶏レバーが美味しくて最近よく食べてます　生姜が効いていてさっぱりしてて、比較的濃い目の味付けでご飯によく合います<br />
              <br />
              <Image className={styles.chicken_image} src="/chickenreba.jpg" alt="薩摩ハーブ鶏のレバー煮" /><br />
              <br />
              タンパク質ばっかりですね
            </p>
          </div>
        </div>

        {/*行ってみたいお店*/}
        <div className={styles.content}>
          <h2 className={styles.headline}>shop</h2>
          <div className={styles.image_horizontal_content}>
            <p className={styles.paragraph}>
              浜松中区にあるスパイスカレー屋さんが気になってます<br />
              クリームベースのカレーがあるみたいなんですが、それがとっても美味しそうです<br />
              なおかつお洒落で見栄えがすごくいいのも最高です<br />
              <br />
              小麦粉等を使用していないためヘルシーでかつサラッとして食べやすいのが特徴だそう
              <br />
              <br />
              <br />
              <br />
              <br />
              ただ、それなりに距離があるのがネックです...
            </p>
            <div className={styles.map}>
              {/*グーグルマップ埋め込み*/}
              {/*
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1647.6276403715422!2d137.6935098053232!3d34.76056611555032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b210db28eb965%3A0x820d1ce4666c5ba9!2z44K544OR44Kk44K544Kr44Os44O844Ks44OrIEdIQUw!5e1!3m2!1sja!2sjp!4v1654681016987!5m2!1sja!2sjp"
                width="400"
                height="300"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
              */}
            </div>
          </div>
        </div>

        {/*連絡先*/}
        <div className={styles.content}>
          <div className={styles.image_horizontal_content}>
            <p className={styles.paragraph}>twitter:</p>
            <a 
              href="https://twitter.com/hama_coop?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3Ahama_coop%7Ctwgr%5EeyJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9mZiIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2Vuc2l0aXZlX21lZGlhX2ludGVyc3RpdGlhbF8xMzk2MyI6eyJidWNrZXQiOiJpbnRlcnN0aXRpYWwiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3"
              className={styles.paragraph}
              target="_blank">
              <Image
              className={styles.sns_image}
              src="/2021 Twitter logo - white.png"
              alt="ツイッターアイコン"
              />
            </a>
          </div>
        </div>

        <p className={styles.paragraph}>© 2022 Nakagawa Keigo.</p>
      </main>
    </div>
  )
}
