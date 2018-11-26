/**
 * CREATED DATE: 2018/11/25 18:34:36
 * author: Absent Min
 * email: 847679250@qq.com
 */
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'

export default combineReducers({
  header: headerReducer
})