import '../styles/global.css' // global cssは_app.jsでしか読み込めない

export default function App({ Component, pageProps}) {
    return <Component {...pageProps} />
}
