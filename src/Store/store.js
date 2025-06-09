import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../features/authSlice";
import { productsSlice } from "../features/productsSlice";
import { productDetailsSlice } from "../features/productDetailsSlice";
import { categoriesSlice } from "../features/categoriesSlice";
import { wishlistSlice } from "../features/wishListSlice";
import { CartSlice } from "../features/CartSlice";

export default configureStore({
  reducer: {
    userInfo: authSlice.reducer,
    products: productsSlice.reducer,
    productDetails: productDetailsSlice.reducer,
    categories: categoriesSlice.reducer,
    wishlist: wishlistSlice.reducer,
    cart:CartSlice.reducer,
  },
});
