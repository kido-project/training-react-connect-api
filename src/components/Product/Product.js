import React, { Component } from 'react';

class Product extends Component  {
  render() {
    var { product } = this.props;
    var classStatus = product.status ? 'success' : 'danger'
    return (
      <tr>
      <td>{ product.id }</td>
      <td>{ product.code }</td>
      <td>{ product.name }</td>
      <td>{ product.price }$</td>
      <td><span className={`label label-${classStatus}`}>{ product.status ? 'Available' : 'Out of stock' }</span></td>
      <td>
      <button type="button" className="btn btn-success mr-10">Edit</button>
      <button type="button" className="btn btn-danger ml-10">Delete</button>
      </td>
  </tr>
    );
  }
}

export default Product;
