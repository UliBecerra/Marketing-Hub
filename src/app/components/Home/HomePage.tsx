import React from 'react'
import { CardProduct } from '../Card'
import Start from './Start'
import Services from './Services'
import About from './About'

export default function HomePage() {
  return (
    <div className='grid place-content-center gap-10 max-w-6xl '>
      <Start/>
      <Services/>

      <About/>
      {/* <CardProduct/> */}
    </div>
  )
}
