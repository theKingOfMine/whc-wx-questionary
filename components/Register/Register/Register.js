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
      
      wx.showLoading({
        title: '正在进行信息登记，请耐心等待..',
      })
      let info = e.detail;
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
          console.log(res)
          wx.hideLoading()
          const res = result.data;
          if(res.code == 200){
            wx.setStorageSync('token', res.token);
            wx.setStorageSync('info', res.info);

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
  
    }
  }
})