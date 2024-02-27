import React from 'react'
import Navbar from '../components/Navbar'
import Product from './Product'
import Items from '../components/Items'

const Shop = () => {
  return (
    <>
    <Navbar/>
   
   
   
    <p className=' pt-20 pb-4 text-center text-4xl text-green-500'>Please select the item you want to buy.</p>
   <Items/>
   
    </>
  )
}

export default Shop
