import {
  Teacher,
  register
} from "../../../tools/tools"

const teacher = new Teacher('register')

Component({
  data: {
    formInfo: null,
  },
  lifetimes: {
    attached() {
      this.setData({
        formInfo: teacher.info
      })
    }
  },
  methods: {
    async registerSubmit(e) {
      console.log(e)
      wx.showNavigationBarLoading()
      let info = e.detail;
      const res = await register(info);
      console.log(res)
      // if(res.code == 200){
      //   wx.setStorageSync('token', res.token);
      //   wx.setStorageSync('teacher_id', res.teacher_id);
      //   wx.hideNavigationBarLoading()
      //   wx.switchTab({
      //     url: '/pages/stu/stu',
      //   })
      // }
    }
  }
})