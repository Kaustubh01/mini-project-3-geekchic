import React, { useState } from 'react'

function AddItems() {
  const [title, setTitle]=useState("")
  const [price, setPrice]=useState("")
  const [image, setImage]= useState("")

  const convertToBase64 = (event)=>{
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const base64String = e.target.result;
      setImage(base64String);
      console.log(base64String)
    };

    reader.readAsDataURL(file);
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const productData = {
      title,
      price,
      image,
    };
    const response = await fetch('http://localhost:8080/demo',{
      method:'POST',
      body:JSON.stringify(productData),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title" >Title</label>
            <input type="text"onChange={(e)=>{setTitle(e.target.value)}} name='title' value={title} /><br />

            <label htmlFor="price" >price</label>
            <input type="number" onChange={(e)=>{setPrice(e.target.value)}} name='price' value={price} /><br />

            <label htmlFor="image" >Images</label>
            <input type="file" onChange={convertToBase64} name='image' accept='image/*' /><br />

            <input type="submit" value="List" />
        </form>
        
    </>
  )
}

export default AddItems