import * as types from "./actiontypes";
const initState = {
  products: [],
  isLoading: false,
  isError: false,
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        products: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        products: [],
      };
    default:
      return state;
  }
};
