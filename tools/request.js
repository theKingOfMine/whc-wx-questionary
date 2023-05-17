export const baseUrl = 'http://www.polyphony.com:39000/whc_EvaluationSheet/';
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
        resolve(res);
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

export const checkToken = async () => {
    const res = await req({
      askfor: 'checkToken'
    })
    if(res.statusCode == 200){
      console.log('访问成功...', res.data)
      return res.data;
    }
}
