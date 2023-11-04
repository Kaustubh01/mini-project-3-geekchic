import React, { useState } from 'react'

function Buy() {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        mobile:0,
        address:''
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/billing',{
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        console.log(response)
      };
  return (
  <> 
    <h2>Place Order</h2>
    <form action="" onSubmit={handleSubmit} style={{
        display: "inline-flex",
        flexDirection: "column",
        gap: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "20px",
        margin:"auto",
        width:"70vw",
        height:"100vh",
        
    }} >
        <label htmlFor="">Name:</label>
        <input type="text" style={{
            height: "50px",
            width: "100%",
        }}onChange={handleInputChange} name = 'name' value={formData.name} />

        <label htmlFor="">Mobile Number</label>
        <input type="number"style={{
            height: "50px",
            width: "100%",
        }}onChange={handleInputChange} />

        <label htmlFor="">Email</label>
        <input type="email" name = 'email'style={{
            height: "50px",
            width: "100%",
        }}onChange={handleInputChange} value={formData.email} />

        <label htmlFor="">Address</label>
        <textarea name="address" id="" style={{
            height: "90px",
            width: "100%",
        }} cols="5" rows="10" onChange={handleInputChange} value={formData.address}></textarea>

        <input type="submit" value="Place Order"  style={{
            backgroundColor: "#1E90FF",
            color: "white",
            height: "50px",
            width: "100%",
            borderRadius: "5px",
            padding: "0 60px",
            margin: "auto",
        }} />
    </form>
  
    
  </>
  )
}

export default Buy