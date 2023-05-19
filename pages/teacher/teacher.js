// index.js
import {color, baseUrl, checkToken, login} from "../../tools/tools"
const app = getApp()

Page({
  data: {
    image: {
      logo: baseUrl + '/images/logo/whc.png',
    },
    color: color
  },
  onload(){
    wx.login({
      success(wechat) {
        if (wechat.code) {
          const res = login('wx', wechat.code)
          console.log(res)
        } else {
          console.log('登录失败！' + wechat.errMsg)
        }
      }
    })
  },
  async onShow(){
    const res = await checkToken()
    if(res.code == 200){
      wx.switchTab({
        url: '/pages/stu/stu'
      })
    }
  }
})
