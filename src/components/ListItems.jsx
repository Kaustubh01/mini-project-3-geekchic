import React, { useEffect, useState } from 'react'

function ListItems() {

    const [items, setItems] = useState([])
    const getItems = async()=>{
        const response = await fetch('http://localhost:8080/demo',{
            method:'GET',
          })
          const data = await response.json()
          setItems(data)
    }

    useEffect(()=>{
        getItems()
    },[])
        
    

  return (
    <div>
        <ul>
            {items.map(item=><li key={item._id}>{item.title}<img src={item.image}/><br/>{item.price} Rs <br /></li>)}
        </ul>
    </div>
  )
}

export default ListItems