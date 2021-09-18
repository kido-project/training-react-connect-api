import React, { Component } from 'react';

class Menu extends Component  {
  render() {
    return (
        <div>
           <div className="navbar navbar-default">
                <a className="navbar-brand" href="google.com">API Connect</a>
                <ul className="nav navbar-nav">
                <li className="active">
                    <a href="google.com">Home</a>
                </li>
                <li>
                    <a href="google.com">Products</a>
                </li>
                </ul>
            </div> 
        </div>
    );
  }
}

export default Menu;
