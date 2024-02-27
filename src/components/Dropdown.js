import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({ProductVisible,togglebutton}) => {
  
    return (
    ProductVisible && (
        <div className="bg-white w-[150px] top-[100px] rounded-md p-4  absolute">
        <Link to='/Ordinary'>
       <button>The Ordinary</button> 
        </Link>
        <Link to='/Bdyshop'>
       <button>The Body Shop</button> 
        </Link>
        <Link to='/BthBdy'>
       <button>Bath & Body</button> 
        </Link>
       
      
      </div>
    )
    )
    

}

export default Dropdown
