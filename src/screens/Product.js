import React from 'react'
import Navbar from '../components/Navbar'
import Items from '../components/Items'

const Product = () => {
  return (
    <div className='sm:flex'>
    <Navbar/>
    <div>
    <h1 className=' pt-24 pb-2 text-center text-4xl text-green-500'>Our Products </h1>
      <Items/>
      </div>
    </div>
  )
}

export default Product

