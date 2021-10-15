import * as Types from './../constants/ActionTypes';
import api from '../utils/api';

export const actionGetProductsRequest = () => {
    return (dispatch) => {
        api('products', 'GET', null).then((response) => {
            dispatch(actionGetProducts(response.data));
        });
    }
}

export const actionGetProducts = (products) => {
    return {
        type: Types.GET_PRODUCTS,
        products //~ products: products
    }
}

export const actionDeleteProductRequest = (productId) => {
    return (dispatch) => {
        api(`products/${productId}`, 'DELETE', null).then((response) => {
            dispatch(actionDeleteProduct(productId));
        });
    }
}

export const actionDeleteProduct = (productId) => {
    return {
        type: Types.DELETE_PRODUCT,
        productId //~ products: products
    }
}

export const actionAddProductRequest = (product) => {
    return (dispatch) => {
        api('products', 'POST', product).then((response) => {
            dispatch(actionAddProduct(response.data));
          });
    }
}

export const actionAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product //~ products: products
    }
}

export const actionGetProductRequest = (productId) => {
    return (dispatch) => {
        api(`products/${productId}`, 'GET', null).then((response) => {
            dispatch(actionGetProduct(response.data));
          });
    }
}

export const actionGetProduct = (product) => {
    return {
        type: Types.GET_PRODUCT,
        product //~ products: products
    }
}

export const actionUpdateProductRequest = (product) => {
    return (dispatch) => {
        api(`products/${product.id}`, 'PUT', product).then(response => {
            dispatch(actionUpdateProduct(response.data));
            console.log(response);
          })
    }
}

export const actionUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product //~ products: products
    }
}