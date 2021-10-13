import React, { Component } from 'react';
import Products from './../../components/Products/Products'
import Product from './../../components/Product/Product'
import { connect } from 'react-redux';
import api from '../../utils/api';
import { Link } from 'react-router-dom';

class ProductsPage extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  //life circle hook
  //call when component render first time
  componentDidMount() {
    api('products', 'GET', null).then((response) =>{
      console.log(response);
      this.setState({
        products: response.data
      });
    });
  }

  onDelete = (productId) => {
    var {products} = this.state;
    api(`products/${productId}`, 'DELETE', null).then((response) => {
      if(response.status === 200) {
        var productIndex = this.findIndexProduct(products, productId);
        products.splice(productIndex, 1);
        this.setState({
          products: products
        })
      }
    });
  }
  
  findIndexProduct = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
      if (product.id === id) 
        result = index;
    });
    return result;
  }

  render() {
    var {products} = this.state;
    
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
const mapStateToProps = state => {
  return {
    products: state.products
  }
}
export default connect(mapStateToProps, null) (ProductsPage);
