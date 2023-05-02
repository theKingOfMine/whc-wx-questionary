// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    image: {
      logo: '/images/logo/whc.png'
    }
  },
  onLoad(){
    console.log(this.data.image)
  }
})
