/**
 * CREATED DATE: 2018/11/27 10:34:30
 * author: Absent Min
 * email: 847679250@qq.com
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'antd'
import { CarouselWrapper } from '../style'

class ICarousel extends Component {
  render() {
    const { list } = this.props
    let jsList = list
    return (
      <CarouselWrapper>
        <Carousel autoplay>
          {
            jsList.map((item) => (
              <div key={item.id}>
                <img src={item.url} alt={item.id}/>
              </div>
            ))
          }
        </Carousel>
      </CarouselWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'imgList'])
  }
}
export default connect(mapState, null)(ICarousel)