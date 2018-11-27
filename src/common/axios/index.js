/**
 * CREATED DATE: 2018/11/27 18:09:35
 * author: Absent Min
 * email: 847679250@qq.com
 */
import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 2000,
  headers: {'X-Custom-Header': 'foobar'}
})

let request = (option) => {
  return new Promise((resolve, reject) => {
    instance(option).then(res => {
      if (res.status === 200) {
        resolve(res.data)
      } else {
        reject('请求失败，错误码：' + res.status)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

export default request