// index.js
import {color, baseUrl, checkToken} from "../../tools/tools"
const app = getApp()

Page({
  data: {
    image: {
      logo: baseUrl + '/images/logo/whc.png',
    },
    color: color
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
