const intinialState = [
  {
    id: 1,
    name: "Iphone 6",
    price: 490,
    inventory: 6
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
