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
    wx.showLoading({
      title: '学生数据加载中...',
    })

    const teacher_id = getApp().globalData.info.teacher_id || null; // 如果公共信息没有
    if(teacher_id){
      const res = await dataRequire('stuListWithReportAffirm', '', {
        teacher_id: teacher_id
      })
  
      wx.hideLoading()
      if (res.code == 200) {
        this.setData({
          stuList: res.data,
          isOpenStuList: true
        })
      } else if (res.code > 400) {
        wx.showToast({
          title: '您的登陆已过期..',
        })
  
        wx.navigateTo({
          url: '/pages/index/index',
        })
      }else{
        this.setData({
          stuList: []
        })
      }

    }else{ // 未登录守卫
      wx.showToast({
        title: '您的登陆已过期..',
        icon: 'error'
      })

      setTimeout(function(){
        wx.navigateTo({
          url: '/pages/index/index',
        })
      }, 1500)
    }
    


    
  }
})