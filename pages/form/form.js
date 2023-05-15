import {formUpload} from "../../tools/tools"
Page({
  data: {
    formData: {}
  },
  onLoad(options) {
    this.setData({
      formData: JSON.parse(options.form)
    })
  },
  async submit(e){
    const res = await formUpload('formUpload', e.detail);
      if(res.code == 200){
        wx.switchTab({
          url: '/pages/stu/stu',
        })
      }
  }
})