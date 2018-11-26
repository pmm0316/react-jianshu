/**
 * CREATED DATE: 2018/11/25 18:33:36
 * author: Absent Min
 * email: 847679250@qq.com
 */
import { createStore, applyMiddleware/*, compose */} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

/*const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())*/
const store = createStore(reducer, applyMiddleware(thunk))
export default store