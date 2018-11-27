/**
 * CREATED DATE: 2018/11/25 22:50:07
 * author: Absent Min
 * email: 847679250@qq.com
 */
import {
  SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST,
  MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE
} from './contants'
import { fromJS } from 'immutable'
import request from '../../axios'

const changeList = (data) => ({
  type: CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: MOUSE_LEAVE
})
export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page
})

export const getList = () => {
  return (dispatch) => {
    let url = '/headerList.json'
    request(url).then(res => {
      dispatch(changeList(res.data))
    })
  }
}