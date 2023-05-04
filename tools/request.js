import {
  getStorage,
} from "../../config/config";

export const baseUrl = 'http://www.polyphony.com:39000/';
export const req = async (params) => {
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      method: 'POST',
      header: {
        //设置参数内容类型为x-www-form-urlencoded
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      url: baseUrl + params.url,
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      }
    })
  })
}
export const reqByToken = async (url, params) => {
  const tokenLocal = await getStorage('token'); // 检验token是否合法
  if (tokenLocal.code == 200) {
    wx.showNavigationBarLoading();
    return new Promise((resolve, reject) => {
      wx.request({
        method: 'POST',
        header: {
          //设置参数内容类型为x-www-form-urlencoded
          'content-type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        url: baseUrl + url,
        data: {
          req: JSON.stringify({
            ...params,
            token: tokenLocal.msg
          })
        },
        success: (res) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        },
        complete: () => {
          wx.hideNavigationBarLoading();
        }
      })
    })
  }
}
export const findDataByKey = async (table, key, val) => { // 不需要token 
  return await req({
    url: 'terminal.php',
    data: {
      req: JSON.stringify({
        station: "dataCenter",
        askfor: "findDataByKey",
        table: table,
        key: key,
        val: val
      })
    }
  })
}
export const getDataByKey = async (table, key, val) => { // 需要token 
  return await reqByToken('terminal.php', {
    station: "user",
    askfor: "getDataByKey",
    table: table,
    key: key,
    val: val
  })
}
export const getDataByIn = async (table, key, val) => { // 不需要token 
  return await reqByToken('terminal.php', {
    station: "user",
    askfor: "getDataByIn",
    table: table,
    key: key,
    val: val
  })
}
export const findDataAll = async (table) => {
  return await req({
    url: "terminal.php",
    data: {
      req: JSON.stringify({
        station: "dataCenter",
        askfor: "findDataAll",
        table: table
      })
    }
  })
}