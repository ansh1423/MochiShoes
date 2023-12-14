import store from '../src/redux/stores/store'
import '../styles/globals.css'
import Head from 'next/head';
import {Provider} from 'react-redux'

function MyApp({ Component, pageProps }) {

  return (
    <>
<Head>
{/* Add the copied <link> tag here */}
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Mulish:ital,wght@0,300;0,400;0,600;0,700;1,400;1,700&family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet"></link>
 
</Head>
    
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>

   </> 
  )

}

export default MyApp