/**
 * CREATED DATE: 2018/11/25 18:34:36
 * author: Absent Min
 * email: 847679250@qq.com
 */
import {
  SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST,
  MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE
} from './contants'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state=defaultState, action) => {
  let type = action.type
  switch (type) {
    case SEARCH_FOCUS:
      return state.set('focused', true)
    case SEARCH_BLUR:
      return state.set('focused', false)
    case CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage:action.totalPage
      })
    case MOUSE_ENTER:
      return state.set('mouseIn', true)
    case MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}