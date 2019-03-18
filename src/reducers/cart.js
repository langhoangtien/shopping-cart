import image1 from "../assets/images/products/IphoneXS.png";
const intinialState = [
  {
    productId: 1,
    productName: "Iphone XS",
    quantity: 2,
    price: 1690,
    image: image1
  }
];

export const cartReducer = (state = intinialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      let product = action.product;
      console.log("STATE:", state);
      console.log("PRODUCT:", product);
      let hasCart = state.indexOf(x => x.productId == product.id);
      console.log(hasCart);
      if (hasCart == -1) {
        alert("Them san pham moi thnah cong");
        return [
          ...state,
          {
            productId: product.id,
            productName: product.name,
            quantity: 1,
            price: product.price,
            image: product.image
          }
        ];
      } else return null;
    default:
      return [...state];
  }
};
