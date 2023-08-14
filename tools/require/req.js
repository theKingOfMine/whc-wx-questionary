export const baseUrl = 'https://www.rongheeducation.com/';

// 服务器基础数据请求函数
export const req = (params) => {
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
      url: baseUrl + 'mck_school/whcTerminal.php',
      success: (res) => {
        if (res.statusCode == 200) {
          resolve(res);
        } else {
          wx.showToast({
            title: '网络故障..',
            icon: 'error'
          })
        }
      },
      fail: (err) => {
        reject(err);
      }
    })
  })
}
// 向服务器上传表单数据
export const formUpload = async (forminfo) => {
  wx.showNavigationBarLoading(); // loading

  const token = wx.getStorageSync('token'); // 必须携带token

  // 如果token不存在，则自动跳转到登陆页面
  if (!token) {
    wx.showToast({
      title: '您还未登陆',
      icon: 'error'
    });

    setTimeout(() => {
      wx.navigateTo({
        url: '/pages/index/index'
      });
    }, 2000);

    wx.hideNavigationBarLoading();
    return;
  }

  try {
    const res = await req({
      askfor: 'formUpload',
      forminfo,
      token
    });

    if (res.statusCode === 200) { // 服务器访问成功
      if (res.data.code === 404) {  // token已经过期
        wx.showToast({
          title: '您还未登陆',
          icon: 'error'
        });

        setTimeout(() => {
          wx.navigateTo({
            url: '/pages/index/index'
          });
        }, 2000);

        return;
      }
      return res.data; // 表单上传访问成功返回的数据
    } else {
      wx.showToast({
        title: '网络故障，请重新登陆..',
        icon: 'loading'
      });
      return res;
    }
  } catch (err) {
    throw err;
  } finally {
    wx.hideNavigationBarLoading();
  }
};
// 向服务器请求数据
export const dataRequire = async (table = '', requirement = '*', conditions = {}, groupBy = '', orderBy = '', limit = '') => {
  const token = wx.getStorageSync('token');
  console.log(token);

  if (!token) {
    wx.showToast({
      title: '您还未登陆',
      icon: 'error'
    });
    return;
  }
  try {
    const res = await req({
      token: token,
      askfor: 'dataRequire',
      requireInfo: {
        table,
        requirement,
        conditions,
        orderBy,
        limit,
        groupBy
      }
    });
    if (res.statusCode === 200) {
      console.log('服务端正常访问成功...', res);
      if (res.data.code === 404) {
        wx.showToast({
          title: '您还未登陆',
          icon: 'error'
        });
        setTimeout(() => {
          wx.navigateTo({
            url: '/pages/index/index'
          });
        }, 2000);
        return;
      }

      return res.data;
    } else {
      wx.showToast({
        title: '网络故障..',
        icon: 'loading'
      });
    }
  } catch (err) {
    console.error('请求错误:', err);
    throw err;
  }
};