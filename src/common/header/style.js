/**
 * CREATED DATE: 2018/11/24 20:23:38
 * author: Absent Min
 * email: 847679250@qq.com
 */
import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  height: 56px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left
  }
  &.right {
    float: right
    color: #969696;
  }
  &.active {
    color: #ea6f5a
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    &.focused {
      color: #fff;
      background: #777;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 200px;
  height: 38px;
  border-radius: 19px;
  outline: none;
  border: none;
  margin-top: 9px;
  margin-left: 20px;
  font-size: 14px;
  background: #eee;
  padding: 0 30px 0 20px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 280px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 280px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width: 200px
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  left: 20px;
  width: 210px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background: #fff;
  z-index: 10;
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
  .spin {
    display: block;
    float: left;
    font-size: 13px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
`
export const SearchInfoList = styled.div`
  margin-top: 10px;
  overflow: hidden;
`

export const SearchInfoItem = styled.a`
  display: inline-block;
  padding: 0 5px;
  line-height: 20px;
  font-size: 12px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  color: #969696;
  border-radius: 2px;
`

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`

export const Button = styled.button`
  height: 38px;
  margin-top: 9px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 19px;
  font-size: 15px;
  margin-right: 20px;
  padding: 0 10px;
  &.reg {
    width: 80px;
    color: #ea6f5a;
    background: #fff;
  }
  &.write {
    width: 100px;
    background: #ea6f5a;
    color: #fff;
  }
`