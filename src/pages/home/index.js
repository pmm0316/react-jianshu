/**
 * CREATED DATE: 2018/11/27 09:56:24
 * author: Absent Min
 * email: 847679250@qq.com
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import ICarousel from './components/ICarousel'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <ICarousel/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
  }
}

const mapDispatch = (dispatch) => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo())
    }
  }
}

export default connect(null, mapDispatch)(Home)