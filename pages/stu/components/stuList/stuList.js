 import { dataRequire, stu_info, formUpload, conners_t_info } from "../../../../tools/tools"
Component({
  data: {
    stuList: []
  },
  lifetimes: {
    async attached(){
      this.setData({
        stuList: await dataRequire('stu')
      })
    }
  },
  methods: {
    cellClick(){
      this.triggerEvent('cellTap')
    },
    handleEdit(e){
      let info = e.currentTarget.dataset.stu
      let stu = stu_info
      for(let i in stu.form){
        stu.form[i].value = info[i]
      }
      stu.askfor = 'update'
      stu.submitTitle = '修改'
      wx.navigateTo({
        url: '/pages/form/form?form=' + JSON.stringify(stu)
      })
    },
    async handleDelete(e){
      let info = e.currentTarget.dataset.stu
      let stu = stu_info
      for(let i in stu.form){
        stu.form[i].value = info[i]
      }
      stu.askfor = 'delete'
      const res = await formUpload('formUpload', stu);
      if(res.code == 200){
        this.ready();
      }
    },
    handleConners_t() {
      conners_t_info.askfor = 'insert'
      wx.navigateTo({
        url: '/pages/form/form?form=' + JSON.stringify(conners_t_info),
      })
    }
  }
})
