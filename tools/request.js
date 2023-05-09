export const baseUrl = 'http://www.polyphony.com:39000/whc_EvaluationSheet/';
export const req = async (params) => {
  return new Promise((resolve, reject) => {
    wx.request({
      data: {
        req: JSON.stringify({
          ...params,
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
// export const reqByToken = async (url, params) => {
//   const tokenLocal = await getStorage('token'); // 检验token是否合法
//   if (tokenLocal.code == 200) {
//     wx.showNavigationBarLoading();
//     return new Promise((resolve, reject) => {
//       wx.request({
//         method: 'POST',
//         header: {
//           //设置参数内容类型为x-www-form-urlencoded
//           'content-type': 'application/x-www-form-urlencoded',
//           'Accept': 'application/json'
//         },
//         url: baseUrl + url,
//         data: {
//           req: JSON.stringify({
//             ...params,
//             token: tokenLocal.msg
//           })
//         },
//         success: (res) => {
//           resolve(res);
//         },
//         fail: (err) => {
//           reject(err);
//         },
//         complete: () => {
//           wx.hideNavigationBarLoading();
//         }
//       })
//     })
//   }
// }
