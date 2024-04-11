import React from 'react'
import {Link} from 'react-router-dom'
import add_pro_icon from '../assets/Product_Cart.svg'
import list_pro_icon from '../assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className='flex flex-1 flex-col max-sm:justify-center max-sm:flex-row p-3 gap-4 sm:min-w-[250px] sm:h-[100vh] bg-slate-200 side'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className='flex flex-1 justify-center m-2 p-3 rounded-lg bg-slate-400 gap-2 cursor-pointer'>
            <img src={add_pro_icon} alt="" />
            <p>Add Product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className='flex flex-1 justify-center m-2 p-3 rounded-lg bg-slate-400 gap-2 cursor-pointer'>
            <img src={list_pro_icon} alt="" />
            <p>Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
