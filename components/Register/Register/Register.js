import {
  teacher_info,
  formUpload
} from "../../../tools/tools"
Component({
  data: {
    formInfo: null,
  },
  lifetimes: {
    attached() {
      this.setData({
        formInfo: teacher_info
      })
    }
  },
  methods: {
    async registerSubmit(e) {
      let info = e.detail;
      info.askfor = 'insert';
      const res = await formUpload('formUpload', e.detail);
      if(res.code == 200){
        console.log(res.msg)
        wx.switchTab({
          url: '/pages/stu/stu',
        })
      }
    }
  }
})