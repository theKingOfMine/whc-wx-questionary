 import {
   dataRequire,
   stu_info,
   formUpload,
   conners_t_info
 } from "../../../../tools/tools"
 Component({
   data: {
     stuList: []
   },
   lifetimes: {
     async attached() {
       const res = await dataRequire('stuList')
       this.setData({
         stuList: res
       })
     }
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
     // 点击该学员conners_t表
     async handleConners_t(e) {
      let stu = e.currentTarget.dataset.stu
       if(stu.conners_t != 0){
        const res = await dataRequire('conners_t', {stu_id: stu.id})
        
        let conners_t = res[0]
        conners_t_info.askfor = 'update'
        conners_t_info.submitTitle = '修改报告'
        for(let i in conners_t){
          if(conners_t_info.form[i]){
            conners_t_info.form[i].value = conners_t[i]
          }
        }
        wx.navigateTo({
          url: '/pages/form/form?form=' + JSON.stringify(conners_t_info) + '&stu=' +  JSON.stringify(stu),
        })

       }else{
         conners_t_info.askfor = 'insert'
         conners_t_info.submitTitle = '提交报告'
         for (let i in conners_t_info.form) {
          if (conners_t_info.form[i].name.indexOf('question') !== -1) {
            conners_t_info.form[i].value = null;
          }
        }
         wx.navigateTo({
           url: '/pages/form/form?form=' + JSON.stringify(conners_t_info) + '&stu=' +  JSON.stringify(stu),
         })
       }

     }
   }
 })