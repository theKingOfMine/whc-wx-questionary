import {
  formUpload
} from "../../tools/tools";

Page({
  data: {
    formData: {},
    stu: null
  },
  onLoad(options) {
    // 授权
    // this.handleLimit();

    let form = JSON.parse(options.form)
    this.setData({
      formData: form,
      stu: options.stu ? JSON.parse(options.stu) : null
    })
  },
  async submit(e) { //从autoform接回数据，进行上传
    wx.showNavigationBarLoading()
    const res = await formUpload(e.detail);
    if (res.code == 200) {
      wx.showToast({
        title: e.detail.submitTitle + '成功',
        icon: 'success'
      })
      wx.hideNavigationBarLoading()
      setTimeout(() => {
        if (e.detail.transferTo) {
          wx.switchTab({
            url: e.detail.transferTo,
          })
        }else{
          wx.switchTab({
            url: '/pages/stu/stu',
          })
        }
      }, 1000)
    } else {
      wx.showToast({
        title: '网络故障-上传失败',
        icon: 'error'
      })
    }
  },
  handleLimit(){
    console.log('到这里啦')
    const that = this
    wx.getSetting({
      success: res => {
        console.log('这是啥 ', res)
        if (res.authSetting['scope.camera']) {
          // 用户已经授权
          console.log('摄像头可用')
          wx.chooseMedia({
            count: 9,
            mediaType: ['image','video'],
            sourceType: ['album', 'camera'],
            maxDuration: 30,
            camera: 'back',
            success(res) {
              console.log(res.tempFiles.tempFilePath)
              console.log(res.tempFiles.size)
            }
          })
        } else {
          // 用户还没有授权，向用户发起授权请求
          wx.authorize({
            scope: 'scope.camera',
            success(e) { // 用户同意授权
              
            },
            fail() { // 用户不同意授权
              wx.openSetting({
                success(e){
                  console.log(e)
                }
              })
            }
          })
        }
      },
      fail: res => {
        console.log('获取用户授权信息失败')
      }
    })


  }
})