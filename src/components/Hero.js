import React from 'react'

import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className='bg-[#CDA792] w-100'>
      <div className='lg:flex  lg:items-center  lg:justify-center '>
        <img alt='' className='pb-8 pl-8' src='../images/model.svg'/>
        <div className='pt-24'>
        <h1 className='text-green-200 pt-12 pl-8 text-4xl font-serif'>Discover</h1>
        <h1 className='text-white text-wrap text-3xl pl-6 pt-3 font-serif'>Our New Product is For You</h1>
        <div className='m-8 ml-8 bg-green-400 rounded-md w-[130px]'>
        <Link to='/shop'>
            <buttton className=' text-white p-3  flex gap-2 '>Shop Now
            <img alt='' src='../images/arrow.svg'/>
            </buttton>
            </Link>
        </div>
        <div className='lg:flex lg:mt-4  lg:gap-4'>
        <div className='flex'>
            <img alt='' className='' src='../images/pict.svg'/>
            <img alt='' className='mt-16 gap-y-8' src='../images/pict1.svg'/>
            </div>
            <img alt='' src='../images/discount.svg'/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Hero
