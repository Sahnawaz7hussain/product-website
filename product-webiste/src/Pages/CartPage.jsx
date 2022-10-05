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
  console.log(" cartpage carts:::", carts);
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
      // setCarts([...carts, res.payload]);
    });
  };
  const handleDecCount = (id, count) => {
    dispatch(patchCart(id, count - 1)).then((res) => {
      console.log(res);
      dispatch(getCarts());
    });
  };

  const total=cartData.reduce((acc,el)=> acc + el.price* el.count,0)
  console.log(total)
  // if (isLoading) {
  //   return <h1>Loading Carts...</h1>;
  // }
  return (
    <div className={Styles.cartMainContainer}>
      {cartData &&
        cartData.map((el) => (
          <div className={Styles.cartItemContainer} key={el.id}>
            <img
              style={{
                width: "30%",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
              className={Styles.cartImage}
              src={el.image}
              alt={el.title}
            />

            <div className={Styles.cartLeftContainer}>
              <h2>₹{el.price}</h2>
              <h3>{el.title}</h3>
              <p>{el.description}</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
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

              <div>
               Total:{total}
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
    </div>
  );
};

export default CartPage;
