import {formUpload} from "../../tools/tools"
Page({
  data: {
    formData: ''
  },
  onLoad(options) {
    this.setData({
      formData:  JSON.parse(options.form)
    })
  },
  async submit(e){
    let info = e.detail;
    const res = await formUpload('formUpload', e.detail);
      if(res.code == 200){
        console.log(res.msg)
        wx.switchTab({
          url: '/pages/stu/stu',
        })
      }
  }
})