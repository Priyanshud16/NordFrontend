import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

function ProductList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }
      const resData = await res.json();
      setData(resData);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
   
    <div id='image-Container' style={{ width: "95%", margin: "50px auto" }}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Slider {...settings}>
        {data.map((ele) => (
          <Link to={`/product/${ele.id}`}>
          <div key={ele.id} style={{ background: "white", height: "250px", width: "100%", textAlign: "center", padding: "10px"}}>
            <img src={ele.image} alt={ele.title} style={{ height: "150px", width: "120px", objectFit: "contain" }} />
            <p>{ele.category}</p>
            <p>Price: ${ele.price}</p>
          </div>
          </Link>
        ))}
       
      </Slider>
    </div>
  
  );
}

export default ProductList;
