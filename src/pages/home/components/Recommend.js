/**
 * CREATED DATE: 2018/11/27 10:16:57
 * author: Absent Min
 * email: 847679250@qq.com
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  RecommendWrapper,
  RecommendItem
} from '../style'

class Recommend extends Component {
  render() {
    const { recommendList } = this.props
    let jsRecommendList = recommendList/*.toJS()*/
    return (
      <RecommendWrapper>
        {
          jsRecommendList.map(item => (
            <RecommendItem imgUrl={item.imgUrl} key={item.id}/>
          ))
        }
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList'])
  }
}

export default connect(mapState)(Recommend)