import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import categoryReducer from "./slices/categorySlice";

const store = configureStore({
    reducer: {
        products: productReducer,
        categories: categoryReducer,
    },
});

export default store;
