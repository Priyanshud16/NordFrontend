import React from 'react'
import ImageSlider from '../ImageSlider/ImageSlider'
import ProductList from '../ProductList/ProductList'

function MainComponent() {
  return (
    <div>
      <div id='NikeBanner'>
        <img style={{width:"100%"}} src="src/assets/Capture.JPG" alt="" />
      </div>
      <br />
      <br />
      <div   id='Big-Banner'>
        <img style={{width:"100%"}}  src="src/assets/BigBanner.JPG" alt="" />
      </div>
      
      <br />
      <br />
      <div id='AnniBanner'>
        <img style={{width:"100%"}} src="src/assets/AnniSale.JPG" alt="" />
      </div>
      <br />
      <br />

      <div id='flashSale'>
        <img style={{width:"100%"}}  src="src/assets/FlashSale.JPG" alt="" />
      </div>

      <ImageSlider/>

      <h4 style={{fontWeight:"bolder",fontSize:"35px",width:"60%",marginLeft:"40px"}}>Recommended for You in Great Brands, Great Prices</h4>

      <ProductList/>

      <div style={{border:"1px solid red",width:"95%",marginLeft:"30px",marginTop:"80px"}}>
        <img src="src/assets/GreatBrand.JPG" alt="" />
      </div>

      <div style={{width:"95%", marginTop:"50px",marginLeft:"30px"}}>
        <img src="src/assets/SamEdelman.JPG" alt="" />
      </div>

      <div style={{marginTop:"50px"}}>
        <img src="src/assets/NewBanner.JPG" alt="" />
      </div>

      <h4 style={{fontWeight:"bolder",fontSize:"35px",width:"60%",marginLeft:"40px"}}>Trending</h4>

     <ProductList/>

      <img style={{marginTop:"70px"}} src="src/assets/BeFirst.JPG" alt="" />
    </div>
  )
}

export default MainComponent
