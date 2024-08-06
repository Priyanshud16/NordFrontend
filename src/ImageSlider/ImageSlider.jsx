
import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade,Zoom,Slide } from 'react-slideshow-image'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideImages=[
  {
    url:"https://n.nordstrommedia.com/it/93776e84-7c5f-48cc-838a-08bd901a3de3.jpeg?h=1224&w=1224",
    caption:"HOKA"
  },
  {
    url:"https://n.nordstrommedia.com/it/7c434361-e119-43f4-85e8-dc1636bb8563.jpeg?h=1224&w=1224",
    caption:"Women's Top Picks Up to 70% Off"

  },
  {
    url:"https://n.nordstrommedia.com/it/f99e5eef-b83e-4591-a4ed-aeb233b392c3.jpeg?h=1224&w=1224",
    caption:"MAX STUDIO Up to 75% Off"
  },
  {
    url:"https://n.nordstrommedia.com/it/d7a99856-b004-4694-8068-b1b716589f9e.jpeg?h=1224&w=1224",
    caption:"Marc Jacobs Up to 55% Off"
  },
  {
    url:"https://n.nordstrommedia.com/it/a5399f53-9210-4d25-be80-65aee7e700c5.jpeg?h=1224&w=1224",
    caption:"Rain Boots for Kids Featuring Hunter"
  },
  {
    url:"https://n.nordstrommedia.com/it/4234ecd5-ea4d-4727-9dcf-209eddd03ecd.jpeg?h=1224&w=1224",
    caption:"Men's New Markdowns Up to 75% Off"
  },
  {
    url:"https://n.nordstrommedia.com/it/62b0c35a-6d76-4ebe-8910-0a1f9303670c.jpeg?h=1224&w=1224",
    caption:"Home Care Must-Haves Featuring Dyson"
  },
  {
    url:"https://n.nordstrommedia.com/it/34096fa0-a323-44d1-b878-180eca8fc752.jpeg?h=1224&w=1224",
    caption:"Hudson Jeans & Joe's Up to 65% Off"
  },
  {
    url:"https://n.nordstrommedia.com/it/7713b8bd-525d-48ba-b2aa-49ef6c6e9d0f.jpeg?h=1224&w=1224",
    caption:"Women's Sneaker Faves Up to 60% Off"
  },
  {
    url:"https://n.nordstrommedia.com/it/19df2483-63ee-4fae-a5cf-37442685cb7b.jpeg?h=1224&w=1224",
    caption:"Sale on Now: Extra 15% Off MICHELE Watches"
  },
  {
    url:"https://n.nordstrommedia.com/it/559d9189-9190-482b-bf2f-d2d49c8e53f5.jpeg?h=1224&w=1224",
    caption:"Men's Sneaker Faves Up to 60% Off"
  },
  {
    url:"https://n.nordstrommedia.com/it/408f756a-3b95-483e-8c88-30952fa24389.jpeg?h=1224&w=1224",
    caption:"New-In Dolce&Gabbana Sunglasses Up to 55% Off"
  },
  {
    url:"https://n.nordstrommedia.com/it/4547ae40-589e-480b-953f-3aed0aee49af.jpeg?h=1224&w=1224",
    caption:"Dolce Vita Shoes Up to 60% Off"
  },
  {
    url:"https://n.nordstrommedia.com/it/96b289c7-50ab-4ec1-b953-984aab524f03.jpeg?h=1224&w=1224",
    caption:"Men's Top Picks Up to 70% Off"
  },
  {
    url:"https://n.nordstrommedia.com/it/88fdaebe-00d0-4174-b905-eb35ac4b2b02.jpeg?h=1224&w=1224",
    caption:"Kids' Sneaker Faves Up to 50% Off"
  }
]

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
};

function ImageSlider() {
  return (
    <div id='image-Container' style={{width:"95%",marginLeft:"50px",marginTop:"50px"}}>
      <Slider {...settings}>
      {
        SlideImages.map((ele,index)=>{
          return <div key={index} style={{background:"white", height:"450px",width:"100%"}}>
            <img src={ele.url} style={{height:"550px",width:"450px"}} alt="" />
            <p>{ele.caption}</p>
          </div>
        })
      }
      </Slider>
    </div>
  )
}

export default ImageSlider