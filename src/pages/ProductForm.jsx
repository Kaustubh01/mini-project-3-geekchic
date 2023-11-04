import React, { useState } from 'react';

const ProductForm = () => {
  const [formData, setFormData] = useState({ id: 0, name: '', price: 0 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/products',{
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response)
  };

  return (
    <div>
      <h2>Create a Product</h2>
      <form onSubmit={handleSubmit} style={{
        display: "inline-flex",
        flexDirection: "column",
        gap: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "20px",
        margin:"auto",
        width:"70vw",
        height:"100vh",}}>
        <label htmlFor="">ID:</label>
        <input type="number" style={{
            height: "50px",
            width: "100%",
        }}  name="id" placeholder="ID" onChange={handleInputChange} value={formData.id} />
        <label htmlFor="">Name Of Your Product:</label>
        <input type="text" style={{
            height: "50px",
            width: "100%",
        }} name="name" placeholder="Name" onChange={handleInputChange} value={formData.name} />
        <label htmlFor="">Price:</label>
        <input type="number" style={{
            height: "50px",
            width: "100%",
        }} name="price" placeholder="Price"  onChange={handleInputChange} value={formData.price} />
        <label htmlFor="">Upload Image:</label>
        <input type="file" />
        <button type="submit" style={{
            backgroundColor: "#1E90FF",
            color: "white",
            height: "50px",
            width: "100%",
            borderRadius: "5px",
            padding: "0 60px",
            margin: "auto",
        }}>Create Product</button>
      </form>
    </div>
  );
};

export default ProductForm;