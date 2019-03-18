import { combineReducers } from "redux";
import { productReducer } from "./product";

const reducer = combineReducers({
  products: productReducer
});
export default reducer;
