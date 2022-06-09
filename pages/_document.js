import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
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
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument