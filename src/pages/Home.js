import React from 'react'
import Navbar from '../features/product-list/navbar'
import { ProductList } from '../features/product-list/ProductList'
export const Home = () => {
  return (
    <div>
        <Navbar>
        <ProductList ></ProductList>
        </Navbar>
           
        
    </div>
  )
}
