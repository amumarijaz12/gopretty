import React,{useState} from 'react'
import Navbar from './Navbar'
import Items from './Items'
import Dropdown from './Dropdown'
const Ordinary = () => {
    const [ProductVisible, setProductVisible] = useState(false);
    const togglebutton = () => {
        setProductVisible(!ProductVisible);
      };
  return (
    <div>
      <Navbar/>
     <div className='pt-4 lg:flex'>
         <img alt='' src='../images/ordinary.svg'/>
         <div className='bg-[#E4E5D7]'>
         <h1 className=' pt-20 font-bold text-4xl pl-6'>The Ordinary</h1>
         <h1 className='p-10 text-center text-xl'>The Ordinary is your destination for Skincare, Makeup, Hair, and Body solutions. Discover clinical formulations with integrity.</h1>
        <button className='bg-green-600 p-2  text-white  rounded ml-[400px]'>Learn More</button>
     </div>
     </div>

        <div className='flex ml-4 gap-5 relative'>
     <button className='flex mt-12 mb-3 bg-green-400 p-2 gap-2 border-blue-200 '
     onClick={togglebutton}
     >
        <h1 className='p-1'>Filter By</h1>
        <img alt='' className='mt-1 p-1' src='../images/dropdwn.svg'/>
     </button>
     <Dropdown
                ProductVisible={ProductVisible}
                togglebutton={togglebutton}
              />
     <button className='flex bg-green-400 mt-12 mb-3 p-2 gap-2 border-blue-200'>
        <h1 className='p-1'>Sort By</h1>
        <img alt='' className='mt-1 p-1' src='../images/dropdwn.svg'/>
     </button>
     </div>
     <Items/>
    </div>
  )
}

export default Ordinary
