import React from 'react'
import { CardProduct } from '../Card'
const services = [
  {
    title : 'SEO',
    description:  'Te ayudamos a mejorar la visibilidad y el rendimiento en línea de un sitio web, lo que a su vez puede aumentar el tráfico, la autoridad de la marca y las conversiones', 
    img: '/services/seo.png',
    rute: '/seo'
  },
  {
    title : 'SEO',
    description:  'Te ayudamos a mejorar la visibilidad y el rendimiento en línea de un sitio web, lo que a su vez puede aumentar el tráfico, la autoridad de la marca y las conversiones', 
    img: '/services/seo.png',
    rute: '/seo'
  },
  {
    title : 'SEO',
    description:  'Te ayudamos a mejorar la visibilidad y el rendimiento en línea de un sitio web, lo que a su vez puede aumentar el tráfico, la autoridad de la marca y las conversiones', 
    img: '/services/seo.png',
    rute: '/seo'
  },
  {
    title : 'SEO',
    description:  'Te ayudamos a mejorar la visibilidad y el rendimiento en línea de un sitio web, lo que a su vez puede aumentar el tráfico, la autoridad de la marca y las conversiones', 
    img: '/services/seo.png',
    rute: '/seo'
  },
  {
    title : 'SEO',
    description:  'Te ayudamos a mejorar la visibilidad y el rendimiento en línea de un sitio web, lo que a su vez puede aumentar el tráfico, la autoridad de la marca y las conversiones', 
    img: '/services/seo.png',
    rute: '/seo'
  }
]
const service = {
  title : 'SEO',
  description:  'Te ayudamos a mejorar la visibilidad y el rendimiento en línea de un sitio web, lo que a su vez puede aumentar el tráfico, la autoridad de la marca y las conversiones', 
  img: '/services/seo.png',
  rute: '/seo'
}
import {Permanent_Marker} from 'next/font/google'
const permMark = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-fuente1'
})
function Services() {
  return (
    <article className=' grid gap-4'>
      <h1 className={`text-center  text-4xl font-bold ${permMark.variable} font-sans text-[#2196F3] before:[--tw-shadow-colored:_0_0_#0000;]  shadow-white min-h-screen ` }>Nuestros servicios</h1>

     <ul className={`flex flex-wrap gap-4 justify-center `}>
     {
        services.map(service => (
          <CardProduct key={service.title} title={service.title} description={service.description} img={service.img} rute={service.rute}/>
        ))
      }
     </ul>
    </article>
  )
}

export default Services