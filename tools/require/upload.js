// 图片上传，参数1，图片本地临时地址。参数2，图片名称
export const uploadImg = (url) => {
  console.log('执行uploadHeadImg函数：进行图片上传')
  return new Promise(async (resolve, reject) => {
    wx.uploadFile({
      url: 'https://www.rongheeducation.com/mck_school/fileUpload.php', // 服务器页面地址
      filePath: url, // 所携带的图片临时地址
      name: "headImg", // 服务器接受file时的携带参数的名字
      formData: { // 额外携带的post请求
        req: JSON.stringify({
          name: generateRandomImgName(),
          askfor: 'headImgUpload'
        })
      },
      success: (e) => {
        if (e.statusCode == 200) {
          const res = JSON.parse(e.data)
          if (res.code == 200) {
            const imgUrl = res.response.url;
            resolve(imgUrl)
          } else {
            resolve(res.msg)
          }
        } else {
          resolve('访问服务端图片上传页面失败')
        }
      },
      fail: function (err) {
        reject(err);
      }
    });

  })
}
// 随机生成图片名称
export const generateRandomImgName = ()=>{
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var length = 20;
  var result = '';
  for (var i = length; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result; // 图片格式可以根据实际需要修改
}

