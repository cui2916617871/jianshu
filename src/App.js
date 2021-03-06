import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Details from './pages/details/loadable';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      
      {/* 路由 */}
        <BrowserRouter>
        <div>
          <Header/>
          {/* 路由规则 */}
          <Route path='/' exact component = {Home}></Route>
          <Route path='/details/:id' exact component={Details}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/write' exact component={Write}></Route>
        </div>
        </BrowserRouter>        
      </Provider>
    );
  }
}

export default App;
