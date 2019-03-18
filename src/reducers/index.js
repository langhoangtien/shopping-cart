import { combineReducers } from "redux";
import { productReducer } from "./product";
import { cartReducer } from "./cart";

const reducer = combineReducers({
  products: productReducer,
  carts: cartReducer
});
export default reducer;
