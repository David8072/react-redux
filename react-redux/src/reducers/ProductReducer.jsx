const initialState = {
    products: [
      {
        name: "iPhone 9",
        price: 549,
        quantity: 1,
        image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      },
      {
        name: "iPhone X",
        price: 899,
        quantity: 1,
        image: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      },
      {
        name: "Samsung Universe 9",
        price: 1249,
        quantity: 1,
        image: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      },
      {
        name: "OPPO F19",
        price: 280,
        quantity: 1,
        image: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      },
      {
        name: "Huawei P30",
        price: 499,
        quantity: 1,
        image: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      },
    ],
    totalQuantity: 0,
    totalAmount: 0,
  };
  

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREASE_QUANTITY":
        return {
          ...state,
          products: state.products.map((product) =>
            product.name === action.payload
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
          totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount +
          state.products.find((product) => product.name === action.payload).price,
        };
      case "DECREASE_QUANTITY":
        return {
          ...state,
          products: state.products.map((product) =>
            product.name === action.payload && product.quantity > 1
              ? { ...product, quantity: product.quantity - 1 }
              : product
          ),
          totalQuantity: state.totalQuantity - 1,
        totalAmount: state.totalAmount - 
          state.products.find((product) => product.name === action.payload).price,
        };
      default:
        return state;
    }
  };
  
  export default ProductReducer;
  