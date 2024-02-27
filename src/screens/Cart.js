import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import {Context} from '../store/Context'
import {Link} from 'react-router-dom'

const Cart = () => {
   const contextApi =  useContext(Context);

   return (
    <>
       <Navbar/>
       <div className='grid grid-cols-4 '>
     { 
    contextApi.cartItems.map((Items,id)=>{
       return(
        <>
            <div className='mt-8 pt-24  ml-3'>
            <img className='' key={id} src={Items.img}/>
            <div className='rounded-md'>
            <div className='mt-4'>
            <h1>{Items.brandName}</h1>
            <h1>{Items.title}</h1>
            <h1>{Items.price}</h1>
            </div>
            <button className='bg-green-300 mt-4 text-white rounded-lg p-2'
            onClick={()=>contextApi.removefromCart(id)}>
            Remove From Cart
            </button>
            </div>
            </div>
        </>
       )
    }
    
    )}
    </div>
    {
        contextApi.cartItems.length ==0 && (
            <>
                <div className='  h-screen flex items-center justify-center '>
                <div>
                <h1 className=' text-4xl '>Your Cart is Empty</h1>
                <h1 className='ml-3'>(Please add something to the cart.)</h1>
                <Link to='/Product'>
                <button className='mt-4 ml-3 justify-center items-center bg-green-200 hover:bg-green-400 p-2 rounded'>Move back</button>
                </Link>
                </div>
                </div>
            </>
        )
    }
    {contextApi.cartItems.length > 0 &&(
        <>
        <div className=' ml-[120px]'>
        <Link to='/Checkout'>
           <button className='bg-green-300 rounded text-white p-2 mt-6 ml-[120px]'>Checkout</button>
           </Link>
           </div>
        </>
    )}
   
    </>
   )
}

export default Cart
