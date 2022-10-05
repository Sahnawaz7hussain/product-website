import * as types from "./actionTypes";
import axios from "axios";

export const getCarts = () => (dispatch) => {
  dispatch({ type: types.GET_CART_PRODUCT_REQUEST });
  return axios
    .get("https://akcart.herokuapp.com/cart")
    .then((res) => {
      // console.log(res.data, " get action");
      return dispatch({
        type: types.GET_CART_PRODUCT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_CART_PRODUCT_FAILURE });
    });
};

export const postCart = (newData) => (dispatch) => {
  dispatch({ type: types.POST_CART_PRODUCT_REQUEST });
  return axios
    .post("https://akcart.herokuapp.com/cart", newData)
    .then((res) => {
      return dispatch({
        type: types.POST_CART_PRODUCT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.POST_CART_PRODUCT_FAILURE });
    });
};

export const patchCart = (id, params) => (dispatch) => {
  dispatch({ type: types.PATCH_CART_PRODUCT_SUCCESS });
  return axios
    .patch(`https://akcart.herokuapp.com/cart/${id}`, {
      count: params,
    })
    .then((res) => {
      // console.log("patch response::", res);
      return dispatch({
        type: types.PATCH_CART_PRODUCT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.PATCH_CART_PRODUCT_FAILURE });
    });
};

export const deleteCart = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_CART_PRODUCT_REQUEST });
  return axios
    .delete(`https://akcart.herokuapp.com/cart/${id}`)
    .then((res) => {
      // console.log("deleted response;:::", res);
      return dispatch({
        type: types.DELETE_CART_PRODUCT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.DELETE_CART_PRODUCT_FAILURE });
    });
};
