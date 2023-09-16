import Image from 'next/image'
import React from 'react'
import {Permanent_Marker, Nunito_Sans} from 'next/font/google'
const permMark = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-fuente1'
})
const nuni = Nunito_Sans({
  weight: ['400','600'],
  subsets: ['latin'],
  variable: '--font-fuente2'
})
export default function About() {
  return (
  
      <div className='grid md:[grid-template-columns:_1fr_1fr] py-28 min-h-screen'>
      <article className='grid p-4 gap-4 '>
      <h3 className={`text-4xl ${permMark.variable} font-sans font-semibold`}>¿Qué hacemos?</h3>
      <p className={`text-xl ${nuni.variable} font-mono`}>
      Ayudamos a las empresas a llegar a más personas, construir su marca, interactuar con la audiencia, aumentar las ventas y mantenerse competitivas en un mercado en constante evolución.
      </p>
      </article>
     <div className="relative ">
     <Image 
      src={'/home/about/image.png'}
      fill={true}
      alt='image- aboutme'
      objectFit='contain'
      
      />
     </div>
    </div>
  
  )
}
