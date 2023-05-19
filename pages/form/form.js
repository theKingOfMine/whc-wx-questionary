import {
  formUpload
} from "../../tools/tools";

Page({
  data: {
    formData: {},
    stu: null
  },
  onLoad(options) {
    let stu = {}
    let form = JSON.parse(options.form)
    if (options.stu) {
      stu = JSON.parse(options.stu)
      form.form.stu_id.value = stu.id
      form.form.teacher_id.value = 1
    }

    this.setData({
      formData: form,
      stu: options.stu ? JSON.parse(options.stu) : null
    })
  },
  async submit(e) {
    wx.showNavigationBarLoading()
    const res = await formUpload('formUpload', e.detail);
    if (res.code == 200) {
      wx.showToast({
        title: '表单上传成功',
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
  }
})