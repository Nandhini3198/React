import allProducts from "./addProductReducer";

import { combineReducers } from 'redux';
import editProduct from "./editProductReducer";

const allReducers = combineReducers({

    allProducts: allProducts,
    editProduct:editProduct
    
})

export default allReducers