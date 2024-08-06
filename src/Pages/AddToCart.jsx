// src/AddToCart.js
import React from 'react';
import { useCart } from '../Component/CartContextProvider';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

function AddToCart() {
  const { cart,clearCart } = useCart(); // Get cart items from context
const navigate=useNavigate()
  const HandleClick=()=>{
    alert("Products are purchase Sucessfully")
    clearCart();
    navigate("/")
  }

  return (
    <div style={{ marginLeft: '150px' }}>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <img src={item.image} style={{ height: '150px' }} alt={item.title} />
            <p style={{ fontWeight: 'bolder' }}>Title: {item.title}</p>
            <p>Price: {item.price}</p>
            
          </div>
        ))
      )}
      {
        cart.length>0?(
          <Button style={{background:"blue",color:"white"}} onClick={HandleClick}>Buy Now</Button>
        ):(
          <p>Please Add Product</p>
        )
      }
      
    </div>
  );
}

export default AddToCart;
