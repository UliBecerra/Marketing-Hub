import Image from 'next/image'
import React from 'react'
import {Nunito_Sans} from 'next/font/google'
import {Button} from '@material-tailwind/react'
const nuni = Nunito_Sans({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-fuente1'
})
export default function Start() {
  return (
    <article className={`grid grid-cols-[1fr_1fr] place-content-center ${nuni.variable} font-sans selection:bg-blue-900 selection:p-2 bg-white bg-opacity-10 p-8`}>
      <div className=" grid place-content-center gap-4 ">
      <h2 className='font-bold text-4xl'>Agencia de Marketing Digital</h2>
      <h3 className='text-2xl font-semibold'>Marketing digital hecho a tu medida.</h3>
      <p className='text-xl text-gray-300'>Creamos estrategias tan únicas como tu marca, potenciando tus fortalezas y logrando que la audiencia se enamore de ti, enfocados en el crecimiento de tu negocio en internet.</p>
      <Button slot='' color='blue' className='ml-0 mr-auto mt-3 '>
        Saber mas
      </Button>
      </div>
      <Image
      src='/start/image1.png'
      alt='AGencia'
      width={500}
      height={500}
      />
    </article>
  )
}
