import React, { useState } from 'react'
import upload_area from "../assets/upload_area.svg"

const AddProduct = () => {
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })

    const ImageHandler = (e) =>{
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) =>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const Add_Product = async() =>{
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers: {
                Accept:'application/json',
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) =>{responseData=data})

        if(responseData.success){
            product.image = responseData.image_url;
            console.log(product)
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp) => resp.json()).then((data)=>{
                data.success?alert("PRODUCT ADDED"):alert("Failed")
            })
        }
    }

  return (
    <div className='p-2  box-border sm:w-full bg-slate-100 poppins-regular h-[100vh]'>
        <div className=''>
            <p className='w-full text-lg p-2 poppins-semibold'>Product Title :</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type Here' className='box-border p-2 rounded-sm w-full h-[50px] outline-none text-blue-500 text-md' required/>
        </div>
        <div className='flex flex-1 gap-[40px]'>
            <div className=''>
                <p className='w-full text-lg p-2 m-2 poppins-semibold'>Price</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type Here' className='box-border p-2 rounded-sm w-full h-[50px] outline-none text-blue-500 text-md' required/>
            </div>
            <div className=''>
                <p className='w-full text-lg p-2 m-2 poppins-semibold'>Offer Price</p>
                <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type Here' className='box-border p-2 rounded-sm w-full h-[50px] outline-none text-blue-500 text-md' required/>
            </div>
        </div>
        <div>
            <p className='w-full text-lg p-2 m-2 poppins-semibold'>Product Category</p>
            <select value={productDetails.category} onChange={changeHandler} name="category" className='p-3 w-[120px] h-[50px] text-md text-blue-600 border-solid mb-3'>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kid</option>
            </select>
        </div>
        <div className='h-[120px] w-[120px] rounded-lg object-contain m-2'>
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} alt="" />
            </label>
            <input onChange={ImageHandler} type="file" name="image" id="file-input" hidden required/>
        </div>
        <button onClick={Add_Product} className='mt-10 rounded-2xl w-[130px] h-[50px] bg-blue-600 text-white border-none cursor-pointer text-xl'>ADD</button>
    </div>
  )
}

export default AddProduct
