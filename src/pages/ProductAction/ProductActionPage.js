import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actionAddProductRequest, actionGetProductRequest, actionUpdateProductRequest } from './../../actions/index';
import { connect } from 'react-redux';

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

  componentDidMount = () => {
    var { match } = this.props;
    if(match) {
      var id = match.params.id;
      this.props.getProduct(id);
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps && nextProps.product) {
      var {product} = nextProps;
      console.log(product);
      this.setState({
        id: product.id,
        code: product.code, 
        name: product.name, 
        price: product.price, 
        status: product.status, 
      });
    }
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
    var { id, code, name, price, status } = this.state;
    var { history } = this.props;
    if(id) {
      this.props.updateProduct({
        id: id,
        code: code,
        name: name,
        price: price,
        status: status,
      });
      history.goBack(); //return previous page
    } else {
      this.props.addProduct({
        code: code,
        name: name,
        price: price,
        status: status,
      });
      history.push('/products'); //go to page
    }
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
                  <input 
                  checked={status}
                  type="checkbox" name='status' value={ status } onChange={ this.onChange }/>
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
const mapStateToProps = state => { //~ const mapStateToProps = (state) => {
  return {
    product: state.product
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    addProduct: (product) => {
      dispatch(actionAddProductRequest(product));
    },
    getProduct: (productId) => {
      dispatch(actionGetProductRequest(productId));
    },
    updateProduct: (product) => {
      dispatch(actionUpdateProductRequest(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductActionPage);
