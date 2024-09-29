import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        page: 0,
    },
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setProducts(state, action) {
            state.products = action.payload;
        },
        addProducts(state, action) {
            state.products = [...state.products, ...action.payload];
        },
        incrementPage(state) {
            state.page += 1;
        },
        resetProducts(state) {
            state.products = [];
            state.page = 0;
        },
    },
});

export const {
    setLoading,
    setProducts,
    addProducts,
    incrementPage,
    resetProducts,
} = productSlice.actions;

// Adjusted fetchProductsByCategory action to handle page 0 and appending products for further pages
export const fetchProductsByCategory =
    (categoryUrl, pageNumber) => async (dispatch) => {
        dispatch(setLoading(true));

        const url = `${categoryUrl}?limit=10&skip=${pageNumber * 10}`;
        const response = await fetch(url);
        const data = await response.json();

        if (pageNumber === 0) {
            dispatch(setProducts(data.products)); // Replace products on page 0
        } else {
            dispatch(addProducts(data.products)); // Append products for subsequent pages
        }

        dispatch(setLoading(false));
    };

export default productSlice.reducer;
