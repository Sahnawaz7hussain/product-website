import React, { useEffect, useState } from "react";
import Styles from "./homepage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/ProductReducer/action";
import { postCart } from "../Redux/CartReducer/action";
import { Modal } from "../Components/Modal";
import loading from "../Images/loading.gif";
var starId = null;
const HomePage = () => {
  // window.ratingid;
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
  function giveRatingFn(val) {
    starId = val;
    setShow(true);
    //console.log("inside func", ratingid);
  }
  // console.log("outsite fun", starId);
  const starOne = (val) => {
    // console.log("star one", starId, val);
    setShow(false);
  };
  const starTwo = (val) => {
    // console.log("star one slicked", starId, val);
    setShow(false);
  };
  const starThree = (val) => {
    // console.log("startThree", starId, val);
    setShow(false);
  };
  const starFour = (val) => {
    // console.log("start four", starId, val);
    setShow(false);
  };
  const starFive = (val) => {
    //console.log("star five", starId, val);
    setShow(false);
  };
  if (isLoading) {
    return (
      <img
        style={{
          marginTop: "13%",
          marginLeft: "36%",
        }}
        src={loading}
        alt="Loading Produts..."
      />
    );
  }
  if (isError) {
    return <h2>Something went wrong...</h2>;
  }
  return (
    <>
      {products && (
        <h1 style={{ color: "black", marginLeft: "5%", marginBottom: "-50px" }}>
          Products({products.length})
        </h1>
      )}
      <div className={Styles.productsCont}>
        {/* {isLoading && <h2>Loading Products...</h2>} */}
        {products &&
          products.map((el) => (
            <div className={Styles.productCont} key={el.id}>
              <img className={Styles.productImg} src={el.images} alt="p" />

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
                  onClick={() => giveRatingFn(el.id)}
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
                    <div onClick={() => starOne(1)}>⭐</div>
                    <div
                      onClick={() => starTwo(2)}
                      style={{ fontSize: "20px" }}
                    >
                      ⭐
                    </div>
                    <div
                      onClick={() => starThree(3)}
                      style={{ fontSize: "25px" }}
                    >
                      ⭐
                    </div>
                    <div
                      onClick={() => starFour(4)}
                      style={{ fontSize: "30px" }}
                    >
                      ⭐
                    </div>
                    <div
                      onClick={() => starFive(5)}
                      style={{ fontSize: "35px" }}
                    >
                      ⭐
                    </div>
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
