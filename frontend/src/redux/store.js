import { configureStore } from "@reduxjs/toolkit";
import productModalSlice from "./product-modal/productModalSlice";
import cartItemsSlice from "./shopping-cart/cartItemsSlice";
import loginSlice from "./login-sign_modal/loginSlice";
import signSlice from "./login-sign_modal/signSlice";

export const store = configureStore({
    reducer: {
        productModal: productModalSlice,
        cartItems: cartItemsSlice,
        loginModal: loginSlice,
        signModal: signSlice

    }
})