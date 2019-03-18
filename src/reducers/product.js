import image1 from "../assets/images/products/IphoneXS.png";
import image2 from "../assets/images/products/HuaweiY9.png";
import image3 from "../assets/images/products/SamsungS10.png";
const intinialState = [
  {
    id: 1,
    name: "Iphone XS",
    price: 1690,
    inventory: 69,
    image: image1,
    description: "Apple product",
    rating: 5
  },
  {
    id: 2,
    name: "Huawei Y9",
    price: 990,
    inventory: 50,
    image: image2,
    description: "Best sell",
    rating: 3
  },
  {
    id: 3,
    name: "Samsung Galaxy S10",
    price: 1490,
    inventory: 64,
    image: image3,
    description: "Best android phone",
    rating: 4
  }
];
export const productReducer = (state = intinialState, action) => {
  switch (action.type) {
    case "ADD":
      return state;

    default:
      return state;
  }
};
