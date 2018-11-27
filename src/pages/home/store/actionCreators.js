/**
 * CREATED DATE: 2018/11/27 19:28:52
 * author: Absent Min
 * email: 847679250@qq.com
 */
import request from "../../../common/axios"
import { CHANGE_HOME_DATA } from './contants'

const changeHomeData = (result) => ({
  type: CHANGE_HOME_DATA,
  imgList: result.imgList,
  articleList: result.articleList,
  recommendList: result.recommendList
})

export const getHomeInfo = () => {
  return (dispatch) => {
    request('/home.json').then(res => {
      let data = res.data
      dispatch(changeHomeData(data))
    })
  }
}