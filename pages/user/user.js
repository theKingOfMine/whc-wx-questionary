// index.js
import {color, baseUrl, Teacher} from "../../tools/tools"

Page({
  data: {
    color: color,
    teacher: null,
    baseUrl: baseUrl,
    isOpenExhibition: false //打开数据展示
  },
  async onShow(){
    this.teacherInfo()
  },
  onHide(){
    console.log('我被关闭了')
    this.setData({
      isOpenExhibition: false
    })
  },
  teacherInfo(){
    const info = JSON.parse(wx.getStorageSync('info'))
    this.setData({
      teacher: info,
      isOpenExhibition: true
    })
  },
  // 教师信息更新
  teacherUpdate(){
    let info = new Teacher('update').info;
    let teacher = this.data.teacher

    for(let i in info.form){
      info.form[i].value = teacher[i]
    }
    wx.navigateTo({
      url: '/pages/form/form?form=' + JSON.stringify(info),
    })
  }
})
