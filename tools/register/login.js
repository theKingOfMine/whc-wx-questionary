import {req} from "../tools"
export const checkToken = async () => {
  const res = await req({
    askfor: 'checkToken'
  })
  if (res.statusCode == 200) {
    console.log('checkToken...', res.data)
    return res.data;
  }
}
// 本地手机一键登陆
export const phoneLogin = (phone) => {
  return new Promise((resolve, reject) => {
    wx.login({
      success(wx) {
        if (wx.code) {
          let keys = {
            code: wx.code,
            ...phone.detail
          }

          const res = _phone_login('phone', keys)
          resolve(res)
        } else {
          console.log('登录失败！' + res.errMsg)
          reject(new Error('登录失败！' + res.errMsg))
        }
      },
      fail(error) {
        console.log('登录失败！' + error.errMsg)
        reject(new Error('登录失败！' + error.errMsg))
      }
    })
  })
}

// 本机手机号登陆
const _phone_login = async (method, keys) => {
  const res = await req({
    askfor: 'login',
    loginInfo: {
      method: method,
      keys: keys
    }
  })
  if (res.statusCode == 200) {
    return res.data;
  }else{
    wx.showToast({
      title: '网络故障，请重新登陆',
      icon: 'error'
    })
  }
}