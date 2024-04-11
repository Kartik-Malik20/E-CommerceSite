import React from 'react'
import './Breadcrum.css'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='Breadcrum'>
        <div>HOME {'>'} SHOP {'>'}{product.category} {'>'} {product.name}</div>
    </div>
  )
}

export default Breadcrum
