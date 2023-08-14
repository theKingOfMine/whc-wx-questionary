import {
  dataRequire,
  Student
} from "../../tools/tools"
const student = new Student('insert')
Page({
  data: {
    isOpenStuList: false,
    stuList: []
  },
  onShow() {
    // this.getStuList();
  },
  onHide() {
    this.setData({
      isOpenStuList: false
    })
  },
  addNewStu() {
    wx.navigateTo({
      url: '/pages/form/form?form=' + JSON.stringify(student.info),
    })
  },
  async getStuList() {
    const teacher_id = wx.getStorageSync('teacher_id')
    const res = await dataRequire('stu', '', {
      teacher_id: teacher_id
    })
    const stuList = res.code == 200 ? res.data : []
    this.setData({
      stuList: stuList,
      isOpenStuList: true
    })
  }
})