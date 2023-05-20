import Head from 'next/head'
import Background from '/components/Background.jsx'
import Image from 'next/image'
import Header from '/components/Header.jsx'
import Glitch from '/components/Glitch.jsx'



export default function Home() {
  const Line = 'Welcome to Bullet Rain Space War Game';
  return (
    <>
      <Head>
        <title>Kaotik</title>
        <meta name="description" content="Katoik shooter game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=''>
        <Background/>
      </div>

      <div className='w-screen h-screen overflow-hidden'>
        <Header/>
        <div className=' flex flex-row flex-wrap justify-center lg:mt-[-5rem]'>
          <div className=' text-center max-w-[50%] max-h-[50%] mx-[4%] max-lg:mt-[5%]'>
            <Glitch text={Line}/>
          </div>
          <div className='  h-screen flex justify-center items-center mx-[4%] max-lg:mt-[-6rem] '>
            <div className='bg-white bg-opacity-5 flex border-b border-l backdrop-blur-sm rounded-xl bg-blend-multiply border-white/30 shadow-md p-4 '>
              <Image
              src='/astro.jpg'
              height={600}
              width={700}
              className=' rounded-xl max-w-[20rem]'
              />
            </div>
          </div>
        </div>




      </div>
    </>
  )
}
