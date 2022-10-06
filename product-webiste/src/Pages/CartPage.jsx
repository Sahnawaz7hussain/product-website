import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getCarts, patchCart } from "../Redux/CartReducer/action";
import Styles from "./cart.module.css";
const CartPage = () => {
  const dispatch = useDispatch();
  const [carts, setCarts] = useState([]);
  const { cartData, isLoading, isError } = useSelector(
    (state) => state.CartReducer
  );
  //console.log(" cartpage carts:::", carts);
  useEffect(() => {
    dispatch(getCarts()).then((res) => {
      setCarts(res.payload);
      //console.log(res);
    });
  }, []);
  const handleRemoveCart = (id) => {
    dispatch(deleteCart(id)).then((res) => {
      dispatch(getCarts());
    });
  };
  const handleIndCount = (id, count) => {
    dispatch(patchCart(id, count + 1)).then((res) => {
      // console.log(res);
      dispatch(getCarts());
    });
  };
  const handleDecCount = (id, count) => {
    dispatch(patchCart(id, count - 1)).then((res) => {
      //console.log(res);
      dispatch(getCarts());
    });
  };
  // console.log("cartPage:::", isLoading);

  const wholeTotal = cartData.reduce((acc, el) => acc + el.price * el.count, 0);
  if (cartData.length === 0 && isLoading) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "35px" }}>
        Loading Carts...
      </h1>
    );
  }
  return (
    <div className={Styles.cartMainContainer}>
      {cartData &&
        cartData.map((el) => (
          <div className={Styles.cartItemContainer} key={el.id}>
            <img
              className={Styles.cartImage}
              src={el.images[0]}
              alt={el.title}
            />

            <div className={Styles.cartLeftContainer}>
              <h2>₹{el.price}</h2>
              <h3>{el.title}</h3>
              <p style={{ width: "90%" }}>{el.description}</p>
              <div className={Styles.allButtonsContainer}>
                <div className={Styles.buttonsContainer}>
                  <button
                    onClick={() => handleDecCount(el.id, el.count)}
                    disabled={el.count < 2}
                    className={Styles.decButton}
                  >
                    -
                  </button>
                  <button className={Styles.countButton}>{el.count}</button>
                  <button
                    onClick={() => handleIndCount(el.id, el.count)}
                    className={Styles.incButton}
                  >
                    +
                  </button>
                </div>

                <div className={Styles.totaldiv}>
                  Total:{el.price * el.count}
                </div>

                <button
                  onClick={() => handleRemoveCart(el.id)}
                  className={Styles.removeButton}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      {wholeTotal ? (
        <div className={Styles.totalpay}>
          total Payment: ₹<span style={{ color: "red" }}>{wholeTotal}</span>
        </div>
      ) : (
        <i>
          <h2
            style={{
              marginTop: "50px",
              textAlign: "center",
            }}
          >
            Your Cart is Empty!
          </h2>
        </i>
      )}
    </div>
  );
};

export default CartPage;
