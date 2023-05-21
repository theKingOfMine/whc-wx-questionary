import {
  phoneLogin
} from "../../../tools/tools"
Component({
  data: {

  },
  methods: {
    async phoneLogin(phone) {
      wx.showToast({
        title: '登陆中...',
        icon: 'loading',
        duration: 20000
      })
      const res = await phoneLogin(phone);
      console.log(res)
      wx.hideToast()
      if(res.code == 200){
        wx.showToast({
          title: '登陆成功',
          icon: 'success',
          duration: 2000
        })
        wx.setStorageSync('token', res.token)
        wx.setStorageSync('teacher_id', res.teacher_id)
        wx.setStorageSync('phone', res.phone)
        wx.switchTab({
          url: '/pages/stu/stu',
        })
      }else{
        wx.clearStorage()
        wx.hideToast()
        wx.showToast({
          title: res.msg,
          icon: 'error',
          duration: 2000
        })
      }
    }
  }
})