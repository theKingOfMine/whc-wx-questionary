import {formUpload} from "../../tools/tools";
import Message from 'tdesign-miniprogram/message/index';

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

    this.setData({
      formData: form,
      stu: options.stu ? JSON.parse(options.stu) : null
    })
  },
  async submit(e){
    const res = await formUpload('formUpload', e.detail);
      if(res.code == 200){
        wx.showToast({
          title: '表单上传成功',
          icon: 'success'
        })
        setTimeout(()=>{
          this.showMessage()
        }, 1000)
      }else{
        wx.showToast({
          title: '网络故障-上传失败',
          icon: 'error'
        })
      }
  },
  showMessage(){
    wx.switchTab({
      url: '/pages/stu/stu',
  })
  }
})