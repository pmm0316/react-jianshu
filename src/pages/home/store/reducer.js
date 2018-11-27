/**
 * CREATED DATE: 2018/11/27 12:01:32
 * author: Absent Min
 * email: 847679250@qq.com
 */
import { fromJS } from 'immutable'
import { CHANGE_HOME_DATA } from './contants'

const defaultState = fromJS({
  imgList: [],
  articleList: [],
  recommendList: []
})

export default (state=defaultState, action) => {
  let type = action.type
  switch (type) {
    case CHANGE_HOME_DATA:
      return state.merge({
        imgList: action.imgList,
        articleList: action.articleList,
        recommendList: action.recommendList
      })
    default:
      return state
  }
}