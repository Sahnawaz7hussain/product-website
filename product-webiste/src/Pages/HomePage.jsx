import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Styles from "./homepage.module.css";
const getProducts = async () => {
  let res = await axios.get(
    "https://fake-json-server-api-sahnawaz.herokuapp.com/products"
  );
  return res.data;
};
const HomePage = () => {
  const [data, setData] = useState([]);
  // console.log(data);
  useEffect(() => {
    getProducts()
      .then((res) => {
        setData(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const handleAddToCart = (p) => {
    alert("Product added to Cart");
    console.log(p);
  };
  const handleGiveRating = (p) => {
    alert("giving rating done");
  };
  return (
    <>
      <div className={Styles.productsCont}>
        {data &&
          data.map((p) => (
            <div className={Styles.productCont} key={p.id}>
              <img className={Styles.productImg} src={p.avatar} alt="p" />
              <div className={Styles.productNameAndPrice}>
                <h2 className={Styles.productName}>{p.name}</h2>
                <p className={Styles.productPrice}>₹{p.rent}</p>
              </div>
              <p className={Styles.productTitle}>{p.title}</p>
              <p className={Styles.productRating}>Rating:⭐⭐⭐⭐</p>
              <div className={Styles.productCartAndRatingButton}>
                <button
                  onClick={() => handleAddToCart(p.id)}
                  className={Styles.addToCart}
                >
                  Add to Cart
                </button>
                <button
                  className={Styles.giveRating}
                  onClick={() => handleGiveRating(p.id)}
                >
                  Give Rating
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default HomePage;
