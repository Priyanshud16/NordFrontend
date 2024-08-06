





// src/SingleProduct.js
import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../Component/CartContextProvider';

function SingleProduct() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const { addToCart } = useCart(); // Get addToCart from context

  useEffect(() => {
    FetchData();
  }, []);

  async function FetchData() {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  }

  const handleAddToCart = () => {
    addToCart(data);
    alert("Product Added Sucessfully")
  };

  return (
    <div style={{ display: 'flex', marginLeft: '150px' }}>
      <div>
        <img src={data.image} style={{ height: '350px' }} alt={data.title} />
        <Button
          style={{ background: 'blue', color: 'white', marginTop: '50px', marginLeft: '70px' }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>
      <div style={{ marginLeft: '50px', width: '450px', marginTop: '50px' }}>
        <p style={{ fontWeight: 'bolder' }}>Title: {data.title}</p>
        <p style={{ marginTop: '20px' }}>{data.category}</p>
        <p style={{ marginTop: '25px' }}>{data.description}</p>
        <p style={{ marginTop: '25px', fontWeight: 'bolder' }}>Price: {data.price}</p>
      </div>
    </div>
  );
}

export default SingleProduct;






















// import { Button } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// function SingleProduct() {
//   const [data,setData]=useState({})
//   const {id}=useParams()

//   useEffect(()=>{
//     FetchData()
//   },[])
//   async function FetchData() {
//     try {
//       const res=await fetch(`https://fakestoreapi.com/products/${id}`)
//       const result=await res.json()
//       setData(result)

//     } catch (error) {
      
//     }
//   }
//   return (
//     <div style={{display:"flex",marginLeft:"150px"}}>

//       <div>
//       <img src={data.image} style={{height:"350px"}} alt="" />
//       <Button style={{background:"blue", color:"white" , marginTop:"50px",marginLeft:"70px"}}>Add to Cart</Button>
//       </div>
//       <div style={{marginLeft:"50px",width:"450px",marginTop:"50px"}}>
//         <p style={{fontWeight:"bolder"}}>Title:{data.title}</p>
//         <p style={{marginTop:"20px"}}>{data.category}</p>
//         <p style={{marginTop:"25px"}}>{data.description}</p>
//         <p style={{marginTop:"25px",fontWeight:"bolder"}}>Price:{data.price}</p>
//       </div>
//     </div>
//   )
// }

// export default SingleProduct
