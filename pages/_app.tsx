import '../public/css/main.css'
import type { AppProps } from 'next/app'
import MainLayout from "layout/main/main";

interface appPropsExtra extends AppProps{
  Component:AppProps["Component"] & {getLayout:(page:React.ReactNode)=>JSX.Element}
}

export const BREAKPOINTS = { mobile: 0, tablet: 992, desktop: 1200 }

function MyApp({ Component, pageProps }: appPropsExtra) {

  if(Component.getLayout){
    return Component.getLayout( <Component {...pageProps} />)
  }

  return <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
}

export default MyApp
