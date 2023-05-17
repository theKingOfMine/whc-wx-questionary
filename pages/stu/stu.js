import {
  color,
  stu_info,
  dataRequire
} from "../../tools/tools"

Page({
  data: {
    color: color,
    isOpenStuList: true,
    stuList: []
  },
  onShow(options) {
    this.getStuList()
  },
  onHide() {
    this.setData({
      isOpenStuList: false
    })
  },
  addNewStu() {
    stu_info.askfor = 'insert'
    wx.navigateTo({
      url: '/pages/form/form?form=' + JSON.stringify(stu_info),
    })
  },
  async getStuList() {
    const teacher_id = wx.getStorageSync('teacher_id')
    const stuList = await dataRequire('stu', {
      teacher_id: teacher_id
    }, 'stuList')

    this.setData({
      stuList: stuList,
      isOpenStuList: true
    })
  }
})