import React, { Component } from 'react';
import Product from './../Product/Product';

class Products extends Component  {
  render() {
    return (
        <table className="table table-bordered table-hover">
            <thead>
            <tr>
                <th>No</th>
                <th>Code</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            </tbody>
        </table>
    );
  }
}

export default Products;
