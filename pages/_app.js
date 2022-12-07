import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { useRouter } from 'next/router'
import { SessionProvider, useSession } from 'next-auth/react'
//TODO: APPLY A WRAPPER HERE

export default function App({ Component, pageProps:{session, ...pageProps} }) {
  return (
  
    <SessionProvider session={session}>
      <Provider store={store}>
        {
          Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ):
          <Component {...pageProps} />
        }
      </Provider>
    </SessionProvider>
  
  )
}

const Auth =({children})=>{
  const router = useRouter();
  const {status} = useSession({
    required:true,
    onUnauthenticated(){
      router.push('/unauthorized?message=login required');
    }
  });

  if(status === 'loading'){
    return <span>Loading...</span>
  }

  return children;
}


