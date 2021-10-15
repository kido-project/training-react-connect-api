import React, { Component } from 'react';
import Products from './../../components/Products/Products'
import Product from './../../components/Product/Product'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionDeleteProductRequest, actionGetProductsRequest } from './../../actions/index';

class ProductsPage extends Component  {

  //life circle hook
  //call when component render first time
  componentDidMount() {
    this.props.getProducts();
  }

  onDelete = (productId) => {
    this.props.deleteProduct(productId);
  }

  render() {
    var {products} = this.props;
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <Link to="/product/add" className="btn btn-info mb-10">Add product</Link>
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
          onDelete = { this.onDelete }
        />
      });
    }
    return result;
  }
}

const mapStateToProps = state => { //~ const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getProducts: () => {
      dispatch(actionGetProductsRequest());
    },
    deleteProduct: (productId) => {
      dispatch(actionDeleteProductRequest(productId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductsPage);
