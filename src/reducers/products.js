import * as Types from './../constants/ActionTypes';

var initialState = [];

const products =  (state = initialState, action) => {
    var index = -1;
    var {productId} = action;
    switch(action.type) {
        case Types.GET_PRODUCTS: 
          state = action.products;
          return [...state];
        case Types.ADD_PRODUCT:
          var {product} = action;
          state.push(product);
          return [...state];
        case Types.DELETE_PRODUCT:
          index = findIndexProduct(state, productId);
          state.splice(index, 1);
          return [...state];
        case Types.UPDATE_PRODUCT: 
          index = findIndexProduct(state, action.product.id);
          state[index] = action.product;
          return [...state];
        default:
            return [...state];
    }
}

var findIndexProduct = (products, id) => {
  var result = -1;
  products.forEach((product, index) => {
    if (product.id === id) 
      result = index;
  });
  return result;
}

export default products;