/**
 * CREATED DATE: 2018/11/27 10:16:18
 * author: Absent Min
 * email: 847679250@qq.com
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ListItem,
  ItemContent
} from '../style'

class List extends Component {
  render() {
    const { articleList } = this.props
    const jsArticleList = articleList/*.toJS()*/
    return (
      <div>
        {
          jsArticleList.map((item) => (
            <ListItem key={item.id}>
              <img src={item.imgUrl} alt=""/>
              <ItemContent>
                <h3 className="title">{item.title}</h3>
                <p className="desc">{item.desc}</p>
                <div className="meta">
                  <span className="nickname">{item.nickname}</span>
                  <span className="comment">
                <i className="iconfont">&#xe763;</i>
                    {item.commentNum}
              </span>
                  <span className="like">
                <i className="iconfont">&#xe65c;</i>
                    {item.likeNum}
              </span>
                </div>
              </ItemContent>
            </ListItem>
          ))
        }
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList'])
  }
}

export default connect(mapState, null)(List)