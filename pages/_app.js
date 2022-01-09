import '../styles/global.scss' // global cssは_app.jsでしか読み込めない

export default function App({ Component, pageProps}) {
    return <Component {...pageProps} />
}
