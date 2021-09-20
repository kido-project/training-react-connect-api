import React, { Component } from 'react';

class ProductActionPage extends Component  {
  render() {
    
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form>
            <div className="form-group">
              <label>Product name</label>
              <input type="text" className="form-control" id="" placeholder="Input field"/>
            </div>
            <div className="form-group">
              <label>Price</label>
              <input type="text" className="form-control" id="" placeholder="Input field"/>
            </div>
            <div className="form-group">
              <label>Status</label>
              <div className="checkbox">
                <label>
                  <input type="checkbox" value=""/>
                  Checkbox
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
    );
  }
}

export default ProductActionPage;
