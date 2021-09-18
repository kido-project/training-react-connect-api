import React, { Component } from 'react';
import './App.css';

class App extends Component  {
  render() {
    return (
        <div>
            <div className="navbar navbar-default">
                <a className="navbar-brand" href="#">API Connect</a>
                <ul className="nav navbar-nav">
                <li className="active">
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Products</a>
                </li>
                </ul>
            </div>
            <div className="container">
  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <button type="button" className="btn btn-info mb-10">Add product</button>
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Products list</h3>
        </div>
        <div className="panel-body">
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
              <tr>
                <td>2</td>
                <td>1010102</td>
                <td>Macbook Pro</td>
                <td>2000$</td>
                <td><span className="label label-success">Available</span></td>
                <td>
                  <button type="button" className="btn btn-success mr-10">Edit</button>
                  <button type="button" className="btn btn-danger ml-10">Delete</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>1010104</td>
                <td>Macbook Mi</td>
                <td>3000$</td>
                <td><span className="label label-success">Available</span></td>
                <td>
                  <button type="button" className="btn btn-success mr-10">Edit</button>
                  <button type="button" className="btn btn-danger ml-10">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

    </div>
  </div>
</div>
        </div>
    );
  }
}

export default App;
