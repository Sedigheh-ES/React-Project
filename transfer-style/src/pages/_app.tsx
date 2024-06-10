import "@/styles/globals.css";
import "@/styles/icon.css";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import 'react-toastify/ReactToastify.css';

import {Layout} from "@/components";
import type { AppProps } from "next/app";
import { Lato, Quicksand } from 'next/font/google'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { ModalContextProvider } from "@/store/ModalContext";
import { AuthContextProvider } from "@/store/AuthContext";
import { BasketContext, BasketContextProvider } from "@/store/BasketContext";

const queryCLient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      retry:0,

    }
  }
})

const quicksand = Quicksand({
    subsets: ["latin"]
});
  
const lato = Lato({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable:'--font-lato'
})
export default function App({ Component, pageProps }: AppProps) {

  
  return (
    <>
      <style jsx global>
        {`
        html {
          font-family: ${quicksand.style.fontFamily},sans-serif;
          --font-lato:${lato.style.fontFamily},sans-serif;
         }
      `}
      </style>
    
    
      <QueryClientProvider client={queryCLient}>
        <BasketContextProvider>
       <AuthContextProvider>
        <ModalContextProvider>
        <div id={"portal"}></div>
       <Layout>
          <Component {...pageProps} />
          <ToastContainer autoClose={false} hideProgressBar={false} closeOnClick={true} draggable={false} />
          </Layout>
          </ModalContextProvider>
          </AuthContextProvider>
          </BasketContextProvider>
        </QueryClientProvider>
   
      </>
  )
     
      
   

 
}
