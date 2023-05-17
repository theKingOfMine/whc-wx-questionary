 import {
   dataRequire,
   stu_info,
   formUpload,
   conners_t_info,
   snap_iv_info,
   sld_prs_t_info
 } from "../../../../tools/tools"
 Component({
  properties: {
    list: {
      type: Array,
      value: []
    }
  },
  observers: {
    'list': function (newVal, oldVal) {
      if (newVal) {
        this.setData({
          stuList: newVal
        })
      }
    }
  },
   data: {
     stuList: []
   },
   lifetimes: {
    //  async attached() {
    //    const res = await dataRequire('stuList')
    //    this.setData({
    //      stuList: res
    //    })
    //  }
   },
   methods: {
     cellClick() {
       this.triggerEvent('cellTap')
     },
     // 编辑学员信息
     handleEdit(e) {
       let info = e.currentTarget.dataset.stu
       let stu = stu_info
       for (let i in stu.form) {
         stu.form[i].value = info[i]
       }
       stu.askfor = 'update'
       stu.submitTitle = '修改'
       wx.navigateTo({
         url: '/pages/form/form?form=' + JSON.stringify(stu)
       })
     },
     // 删除学员信息
     async handleDelete(e) {
       let info = e.currentTarget.dataset.stu
       let stu = stu_info
       for (let i in stu.form) {
         stu.form[i].value = info[i]
       }
       stu.askfor = 'delete'
       const res = await formUpload('formUpload', stu);
       if (res.code == 200) {
         this.ready();
       }
     },
     // 点击学生调查表
     async handleEvaluationSheets(e) {
      let table = e.currentTarget.dataset.table
      let forminfo = {}
      if(table == 'conners_t'){
        forminfo = conners_t_info
      }else if(table == 'snap_iv'){
        forminfo = snap_iv_info
      }else if(table == 'sld_prs_t'){
        forminfo = sld_prs_t_info
      }

      let stu = e.currentTarget.dataset.stu
    
       if(stu[table] != 0){
        const res = await dataRequire(table, {stu_id: stu.id})
        console.log(res);
        let conners_t = res[0]
        forminfo.askfor = 'update'
        forminfo.submitTitle = '修改报告'
        for(let i in conners_t){
          if(forminfo.form[i]){
            forminfo.form[i].value = conners_t[i]
          }
        }
        wx.navigateTo({
          url: '/pages/form/form?form=' + JSON.stringify(forminfo) + '&stu=' +  JSON.stringify(stu),
        })

       }else{
         forminfo.askfor = 'insert'
         forminfo.submitTitle = '提交报告'
         for (let i in forminfo.form) {
          if (forminfo.form[i].name.indexOf('question') !== -1) {
            forminfo.form[i].value = null;
          }
        }
         wx.navigateTo({
           url: '/pages/form/form?form=' + JSON.stringify(forminfo) + '&stu=' +  JSON.stringify(stu),
         })
       }

     }
   }
 })