export const baseUrl = 'http://127.0.0.1:39001/';
export const req = async (params) => {
  const token = wx.getStorageSync('token')
  return new Promise((resolve, reject) => {
    wx.request({
      data: {
        req: JSON.stringify({
          ...params,
          token: token ? token : '400'
        })
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      url: baseUrl + 'whcTerminal.php',
      success: (res) => {
        if(res.statusCode == 200){
          if(res.data.code == 440){
            wx.showToast({
              title: '您还未登录',
              icon: 'error' 
            })
            wx.navigateTo({
              url: '/pages/teacher/teacher'
            })
          }else{
            resolve(res);
          }
        }else{
          wx.navigateTo({
            url: '/pages/teacher/teacher'
          })
        }
        
      },
      fail: (err) => {
        reject(err);
      }
    })
  })
}
// 表单数据上传服务器进行处理
export const formUpload = async (askfor, forminfo) => {
  console.log('正在使用formUpload函数上传表单...')
    const res = await req({
      askfor: askfor,
      forminfo: forminfo
    })
    if(res.statusCode == 200){
      console.log('访问成功...', res.data)
      return res.data;
    }
}
// 向服务器请求数据
export const dataRequire = async (table='', conditions={}, requirement='', orderBy='', limit='') => {
  const res = await req({
    askfor: 'dataRequire',
    requireInfo: {
      table: table,
      conditions: conditions,
      orderBy: orderBy,
      limit: limit,
      requirement: requirement
    }
  })
  if (res.statusCode == 200) {
    console.log('访问成功...', res)
    if (res.data.code == 200) {
      return res.data.data;
    }
  }
}
