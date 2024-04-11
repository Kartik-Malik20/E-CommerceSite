import React, { useEffect, useState } from "react";
import remove_icon from '../assets/cross_icon.png'


const ListProduct = () => {
  const [ allproducts, setAllProducts ] = useState([]);
  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() =>{
    fetchInfo();
  },[])

  const remove_product = async(id) =>{
    await fetch('http://localhost:4000/removeproduct',{
        method:'POST',
        headers:{
            Accept:'appication/json',
            'Content-Type' : 'application/json',
        },
        body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className="w-full p-2 m-3 rounded-lg bg-white">
      <h1 className="w-full text-4xl p-6 orbitron">All Product List</h1>
      <div className="grid grid-cols-6 gap-4 w-full p-2 text-orange-600 text-xl max-sm:box-border">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="overflow-y-auto">
        <hr />
        {allproducts.map((product,index)=>{
            return  <div key={index} className="grid grid-cols-6 gap-4 w-full p-2 text-black text-lg">
                <img src={product.image} alt="" className="h-[80px]" />
                <p>{product.name}</p>
                <p>{product.old_price}</p>
                <p>{product.new_price}</p>
                <p>{product.category}</p>
                <img onClick={() => {remove_product(product.id)}} src={remove_icon} alt="" className=" cursor-pointer" />
            </div>
        })}
      </div>
    </div>
  );
};

export default ListProduct;
