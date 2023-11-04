import React, { useState } from 'react'
import { useProducts } from '../contexts/products/ProductContext'

function Search() {
    const products = useProducts()
    const [productList, setProductList]= useState([])

    const handleInputChange = (e)=>{
        const searchedProducts = products.filter(item => item.name === e.target.value)
        setProductList(productList.push(searchedProducts))
        console.log(productList)
    }
  return (
    <div>
        <input type="text" onChange={handleInputChange} />
        <div className="search-output">
            <ul>
                {
                    
                }
            </ul>
        </div>
    </div>
  )
}

export default Search