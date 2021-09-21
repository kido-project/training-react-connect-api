import React, { Component } from 'react';
import Products from './../../components/Products/Products'
import Product from './../../components/Product/Product'
import { connect } from 'react-redux';

class ProductsPage extends Component  {
  render() {
    var { products } = this.props;
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
const mapStateToProps = state => {
  return {
    products: state.products
  }
}
export default connect(mapStateToProps, null) (ProductsPage);
