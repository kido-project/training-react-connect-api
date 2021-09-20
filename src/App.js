import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
class App extends Component  {
  render() {
    return (
      <BrowserRouter>
          <div>
              <Menu/>
              <div className="container">
                  <div className="row">
                      { this.showContent(routes) }
                  </div>
              </div>
          </div>
        </BrowserRouter>
    );
  }

  showContent = (routes) => {
    var result = null;
    if(routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route 
          key={ index }
          path={ route.path }
          exact={ route.exact }
          component={ route.main }
        />;
      })
    }
    return <Switch>{ result  }</Switch>
  }
}

export default App;
