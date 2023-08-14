// app.js
App({
  globalData: {
    info: null
  },
  onLaunch(){
    // wx.showLoading({
    //   title: '数据加载中...',
    // })

    // wx.login({
    //   success: (res) => {
    //     const code = JSON.stringify(res);
    //     wx.request({
    //       url: 'https://www.rongheeducation.com/mck_school/login.php?code='+code,
    //       success(res){
    //         console.log(res)
    //         if(res.statusCode == 200){ // 网络正常
    //           if(res.data.code == 200){ // 登陆成功回传
    //             wx.hideLoading();
    //             const wxInfo = res.data.wxInfo;
    //             const info = res.data.info;
    //             const token = res.data.token;
    //             this.globalData.info = info;
    //             wx.setStorageSync('openid', wxInfo.openid)
    //             wx.setStorageSync('session_key', wxInfo.session_key)
    //             wx.setStorageSync('info', JSON.stringify(info))
    //             wx.setStorageSync('token', token)
    
    //             wx.showToast({
    //               title: info.name + '欢迎回来'
    //             })

    //           }else { // 未注册，登陆失败
                
    //           }

    //         }else{
    //           wx.showToast({
    //             title: '网络故障..',
    //           })
    //         }
            
    //       }
    //     })
    //   },
    // })


  }
})

