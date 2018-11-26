import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux'
import { GlobalStyle } from "./style";
import { IconfontStyle } from './statics/iconfont/iconfont'
import Header from './common/header'
import store from './store'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <IconfontStyle/>
        <div className="dell">
          <Provider store={store}>
            <Header/>
          </Provider>
        </div>
      </Fragment>
    );
  }
}

export default App;
