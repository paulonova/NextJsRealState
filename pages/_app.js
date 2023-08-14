import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-body">
      <h1>HEADER</h1>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
