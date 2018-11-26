/**
 * CREATED DATE: 2018/11/24 20:18:55
 * author: Absent Min
 * email: 847679250@qq.com
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style'

/*const getSearchInfo = (show) => {
  if(!show) {
    return null
  }
  return(
    <SearchInfo>
      <SearchInfoTitle>
        热门搜索
        <SearchInfoSwitch>换一批</SearchInfoSwitch>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </SearchInfoList>
      </SearchInfoTitle>
    </SearchInfo>
  )
}*/

// 无状态组件
/*const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo href="/"/>
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            timeout={200}
            classNames="slide"
            in={props.focused}>
            <NavSearch
              onBlur={props.handleInputBlur}
              onFocus={props.handleInputFocus}
              className={props.focused ? 'focused' : ''}/>
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>
            &#xe60d;
          </i>
          { getSearchInfo(props.focused) }
        </SearchWrapper>
        <Addition>
          <Button className="reg">注册</Button>
          <Button className="write">
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
        </Addition>
      </Nav>
    </HeaderWrapper>
  )
}*/

class Header extends Component {
  getSearchInfo() {
    let {
      focused, list, page, mouseIn, totalPage,
      handleMouseEnter, handleMouseLeave, handleChangePage
    } = this.props
    if (focused || mouseIn) {
      const jsList = list.toJS()
      let pageList = []
      let endPage = page * 10
      if (page === totalPage) {
        endPage = jsList.length
      }
      for(let i = (page - 1) *10; i < endPage; i++) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        )
      }
      return(
        <SearchInfo
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => this.spinIcon = icon} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
            <SearchInfoList>
              { pageList }
            </SearchInfoList>
          </SearchInfoTitle>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, list, handleInputBlur, handleInputFocus } = this.props
    return(
      <HeaderWrapper>
        <Logo href="/"/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              classNames="slide"
              in={focused}>
              <NavSearch
                onBlur={handleInputBlur}
                onFocus={() => handleInputFocus(list)}
                className={focused ? 'focused' : ''}/>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe60d;
            </i>
            { this.getSearchInfo() }
          </SearchWrapper>
          <Addition>
            <Button className="reg">注册</Button>
            <Button className="write">
              <i className="iconfont">&#xe615;</i>
              写文章
            </Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if (!list.size) {
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      //[^0-9] 匹配非数字
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      console.log(originAngle)
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
      let jumpPage = 1
      if (page < totalPage) {
        jumpPage = page + 1
      }
      dispatch(actionCreators.changePage(jumpPage))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)