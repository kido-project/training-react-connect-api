import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
  {
    name: 'Home Page',
    to: '/',
    exact: true,
  },
  {
    name: 'Products',
    to: '/products',
    exact: false,
  }
];

const MenuLink = ({ name, to, exact }) => {
  return (<Route
    path={ to }
    exact={ exact }
    children={({ match }) => {
      var active = match ? 'active' : '';
      return (
        <li className={`${active}`}>
            <Link to={to}>{ name }</Link>
        </li>
      );
    }}
  />);
};

class Menu extends Component  {
  render() {
    return (
        <div>
           <div className="navbar navbar-default">
                <a className="navbar-brand" href="google.com">API Connect</a>
                <ul className="nav navbar-nav">
                  { this.showMenus(menus) }
                </ul>
            </div> 
        </div>
    );
  }

  showMenus = (menus) => {
    var result = null;
    if(menus.length > 0){
      result = menus.map((menu, index) => {
        return (
            <MenuLink 
            key={ index }
            name={ menu.name }
            to={ menu.to }
            exact={ menu.exact }
          />
        );
      });
    }
    return result;
  }

}

export default Menu;
