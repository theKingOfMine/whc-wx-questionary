import {formUpload} from "../../tools/tools"
Page({
  data: {
    formData: {},
    stu: null
  },
  onLoad(options) {
    let stu = {}
    let form = JSON.parse(options.form)
    if(options.stu){
      stu = JSON.parse(options.stu)
      form.form.stu_id.value = stu.id
      form.form.teacher_id.value = 1
    }
    console.log(form)
    this.setData({
      formData: form,
      stu: options.stu ? JSON.parse(options.stu) : null
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