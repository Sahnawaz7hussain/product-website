import * as types from "./actiontypes";
import axios from "axios";

export const getProduct = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_REQUEST });
  return axios
    .get("https://fake-json-apis.onrender.com/api/products")
    .then((res) => {
      // console.log(res.data, "action");
      return dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_PRODUCT_FAILURE });
    });
};
