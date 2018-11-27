/**
 * CREATED DATE: 2018/11/27 10:00:44
 * author: Absent Min
 * email: 847679250@qq.com
 */
import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  background: red;
`

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  padding-top: 30px;
  margin-left: 15px;
`

export const HomeRight = styled.div`
  float: right;
  width: 240px;
`

export const CarouselWrapper = styled.div`
  height: 300px;
  border-bottom: 1px solid #eee;
  .ant-carousel {
    width: 625px;
    height: 270px;
    div {
      border-radius: 8px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`

export const ListItem = styled.div`
  height: 160px;
  border-bottom: 1px solid #f0f0f0;
  padding: 15px 2px 20px 0;
  margin-top: 10px;
  img {
    float: right;
    width: 150px;
    height: 100px;
    border-radius: 4px;
  }
`
export const ItemContent = styled.div`
  width: 458px;
  .title {
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    color: #333;
    cursor: pointer;
  }
  .desc {
    fonts-size: 13px;
    line-height: 24px;
    color: #999;
    margin: 0 0 8px;
  }
  .meta {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    display: flex;
    color: #b4b4b4;
    span{
      margin-right: 10px;
      .iconfont {
        margin-right: 2px;
      }
    }
  }
`

export const RecommendWrapper = styled.div`
  margin: 23px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  border-radius: 4px;
`