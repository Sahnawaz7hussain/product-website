import * as types from "./actionTypes";
const initState = {
  cartData: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_CART_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_CART_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        cartData: payload,
      };
    case types.GET_CART_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        cartData: [],
      };
    default:
      return state;
  }
};
