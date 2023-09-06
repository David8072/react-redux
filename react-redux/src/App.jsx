import React from "react";
import {createStore} from "redux";
import { Provider } from "react-redux";
import ProductReducer from "./reducers/ProductReducer";
import ProductList from "./components/ProductList";
import Total from "./components/Total";
import './App.css';



// Create the Redux store
const store = createStore(ProductReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Product Management</h1>
        <ProductList />
        <Total />
      </div>
    </Provider>
  );
}

export default App;