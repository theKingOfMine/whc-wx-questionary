// 用微信openid登陆，
export const wx_login = () => {
  // 登陆提示..
  wx.showLoading({
    title: '微信登陆中...',
  })

  wx.login({ // 取得临时code
    success: (res) => { // code取得成功
      const code = JSON.stringify(res);
      wx.request({ // 发送到服务端，得到openid，在数据库中查询用户是否存在，存在则自动重新登录
        url: 'https://www.rongheeducation.com/mck_school/login.php?code='+code,
        success(res){
          console.log(res)
          if(res.statusCode == 200){ // 网络正常
            wx.hideLoading();
            if(res.data.code == 200){ // 已注册自动登录，返回token
              const wxInfo = res.data.wxInfo;
              const info = res.data.info;
              const token = res.data.token;
              wx.setStorageSync('openid', wxInfo.openid)
              wx.setStorageSync('session_key', wxInfo.session_key)
              wx.setStorageSync('info', JSON.stringify(info))
              wx.setStorageSync('token', token)
              wx.showToast({
                title: '登陆成功！' + info.name + '老师，欢迎回来',
                icon: 'none'
              })
            // 跳转到学生页面
             setTimeout(function(){
              wx.switchTab({
                url: '/pages/stu/stu'
              })
             }, 1500)

            }else if(res.data.code == 402){ // 未注册，保存返回的openid，加入用户信息中，等待注册成新用户，提示用户填写关键信息
              wx.showToast({
                title: '教师未注册，请登记相关信息',
                icon: 'none'
              })
              const wxInfo = res.data.wxInfo;
              wx.setStorageSync('openid', wxInfo.openid)
              wx.setStorageSync('session_key', wxInfo.session_key)
            }
          }else{
            wx.showToast({
              title: '网络故障..',
            })
          }
          
        }
      })
    },
  })
}