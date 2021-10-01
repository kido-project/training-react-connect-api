import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/api';
class ProductActionPage extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      code: '',
      name: '',
      price: '',
      status: '',
    };
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    var { code, name, price, status } = this.state;
    var { history } = this.props;

    api('products', 'POST', {
      code: code,
      name: name,
      price: price,
      status: status,
    }).then(response => {
      // history.goBack();
      history.push('/products');
    })
  }

  render() {
    var { code, name, price, status } = this.state;
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form onSubmit={ this.onSubmit }>
            <div className="form-group">
              <label>Product code</label>
              <input type="text" className="form-control" name='code' value={ code } placeholder="Input field" onChange={ this.onChange }/>
            </div>
            <div className="form-group">
              <label>Product name</label>
              <input type="text" className="form-control" name='name' value={ name } placeholder="Input field"  onChange={ this.onChange }/>
            </div>
            <div className="form-group">
              <label>Price</label>
              <input type="text" className="form-control" name='price' value={ price } placeholder="Input field"  onChange={ this.onChange }/>
            </div>
            <div className="form-group">
              <label>Status</label>
              <div className="checkbox">
                <label>
                  <input type="checkbox" name='status' value={ status } onChange={ this.onChange }/>
                  Checkbox
                </label>
              </div>
            </div>
            <Link to="/products" className="btn btn-default mr-10">Go back</Link>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
    );
  }
}

export default ProductActionPage;
