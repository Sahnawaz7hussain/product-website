import React, { useEffect, useState } from "react";
import Styles from "./homepage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/ProductReducer/action";
import { postCart } from "../Redux/CartReducer/action";
import { Modal } from "../Components/Modal";
const HomePage = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const state = useSelector((state) => state.ProductReducer);
  const { products, isLoading, isError } = state;

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  const handleAddToCart = (newData) => {
    dispatch(postCart({ ...newData, count: 1 })).then((res) => {
      // console.log(res,"RES")
      if (res.payload) {
        alert("Product Added Successfully");
      } else {
        alert("Item Already exsit");
      }
    });
  };
  if (isLoading) {
    return (
      <img
        style={{
          marginTop: "13%",
          marginLeft: "36%",
        }}
        src="https://media2.giphy.com/media/17mNCcKU1mJlrbXodo/200w.webp?cid=ecf05e477qmdvqnpzbq3nldhsq0ujvzlyyxezbovsz1yildq&rid=200w.webp&ct=g"
        alt="Loading Produts..."
      />
    );
  }
  if (isError) {
    return <h2>Something went wrong...</h2>;
  }
  return (
    <>
      <div className={Styles.productsCont}>
        {/* {isLoading && <h2>Loading Products...</h2>} */}
        {products &&
          products.map((el) => (
            <div className={Styles.productCont} key={el.id}>
              <img className={Styles.productImg} src={el.images[0]} alt="p" />

              <h3 className={Styles.productTitle}>{el.title}</h3>

              <p className={Styles.productPrice}>₹{el.price}</p>
              <p className={Styles.productRating}>{`Rating:${el.rating}⭐`}</p>
              <div className={Styles.productCartAndRatingButton}>
                <button
                  onClick={() => handleAddToCart(el)}
                  className={Styles.addToCart}
                >
                  Add to Cart
                </button>
                <button
                  className={Styles.giveRating}
                  onClick={() => setShow(true)}
                >
                  Give Rating
                </button>{" "}
                <Modal
                  title="Give Rating"
                  onClose={() => setShow(false)}
                  show={show}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div>⭐</div>
                    <div style={{ fontSize: "20px" }}>⭐</div>
                    <div style={{ fontSize: "25px" }}>⭐</div>
                    <div style={{ fontSize: "30px" }}>⭐</div>
                    <div style={{ fontSize: "35px" }}>⭐</div>
                  </div>
                </Modal>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default HomePage;
