import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from "./style";
import { IconfontStyle } from './statics/iconfont/iconfont'
import 'antd/dist/antd.css'
import store from './store'
import Header from './common/header'
import Home from './pages/home'
import Detail from "./pages/detail"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle/>
          <IconfontStyle/>
            <Header/>
            <BrowserRouter>
              <div>
                <Route path="/" exact component={Home}/>
                <Route path="/detail" exact component={Detail}/>
              </div>
            </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
