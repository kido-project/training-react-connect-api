import React, { Component } from 'react';
import Products from './../../components/Products/Products'
import Product from './../../components/Product/Product'

class ProductsPage extends Component  {
  render() {
    var products = [
      {
        id: 1,
        code: '101011',
        name: 'Macbook Pro 2019',
        price: 1500,
        status: false,
      },
      {
        id: 2,
        code: '101012',
        name: 'Macbook Pro 2020',
        price: 2000,
        status: false,
      },
      {
        id: 3,
        code: '101013',
        name: 'Macbook Pro 2021',
        price: 2500,
        status: true,
      },
      {
        id: 4,
        code: '101014',
        name: 'Macbook Pro 2022',
        price: 3000,
        status: true,
      },
      {
        id: 5,
        code: '101015',
        name: 'Macbook M1',
        price: 3500,
        status: true,
      },
    ];
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <button type="button" className="btn btn-info mb-10">Add product</button>
                      <Products>
                        { this.showProducts(products) }
                      </Products>
                      </div>
    );
  }
  showProducts = (products) => {
    var result = null;
    if(products.length > 0) {
      result = products.map((product, index) => {
        return <Product
          key={ product.id }
          product={ product }
        />
      });
    }
    return result;
  }
}

export default ProductsPage;
