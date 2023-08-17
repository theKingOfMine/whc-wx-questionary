import {
  dataRequire,
  Student
} from "../../tools/tools"

Page({
  data: {
    isOpenStuList: false,
    stuList: []
  },
  onShow() {
    wx.showLoading({
      title: '学生数据加载中...',
    })
    this.getStuList();
  },
  onHide() {
    this.setData({
      isOpenStuList: false
    })
  },
  addNewStu() {
    const student = new Student('insert')
    wx.navigateTo({
      url: '/pages/form/form?form=' + JSON.stringify(student.info),
    })
  },
  async getStuList() {
   
    const localInfo = await wx.getStorageSync('info');
    const info = JSON.parse(localInfo)
    
    const res = await dataRequire('stu', '', {
      teacher_id: info.teacher_id
    })
    
    const stuList = res.code == 200 ? res.data : []

    this.setData({
      stuList: stuList,
      isOpenStuList: true
    })
    wx.hideLoading()
  }
})