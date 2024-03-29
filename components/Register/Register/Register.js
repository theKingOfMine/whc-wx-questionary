import {
  Teacher
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
      console.log(getApp().globalData)
    }
  },
  methods: {
    async registerSubmit(e) {
      wx.showLoading({
        title: '正在进行信息登记，请耐心等待..',
      })
      let info = e.detail;
      info.form.wx_openid.value = wx.getStorageSync('openid');
      info.form.inviter_code.value = getApp().globalData.inviter_code;
      if(info.form.wx_openid.value){
        wx.request({
          url: 'https://www.rongheeducation.com/mck_school/register.php',
          data: {
            formData: JSON.stringify(info)
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          },
          success(result){
            wx.hideLoading()
            const res = result.data;
            if(res.code == 200){
              wx.setStorageSync('token', res.token);
              getApp().globalData.info = res.info;
              wx.showToast({
                title: '注册成功，' + res.info.name + '老师，欢迎您',
                icon: 'none'
              })
  
             setTimeout(function(){
              wx.switchTab({
                url: '/pages/stu/stu',
              })
             }, 2000)
            }else{
              wx.showToast({
                title: '网络故障，请稍后重试..',
                icon: 'none'
              })
            }
          }
  
        })
      }else{
        console.log('采集wx_openid失败...')
      }

      
  
    }
  }
})