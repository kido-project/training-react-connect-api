import React, { Component } from 'react';

class Product extends Component  {
  render() {
    return (
      <tr>
      <td>1</td>
      <td>1010101</td>
      <td>Macbook</td>
      <td>1500$</td>
      <td><span className="label label-success">Available</span></td>
      <td>
      <button type="button" className="btn btn-success mr-10">Edit</button>
      <button type="button" className="btn btn-danger ml-10">Delete</button>
      </td>
  </tr>
    );
  }
}

export default Product;
