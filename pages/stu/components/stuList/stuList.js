 import {
   dataRequire,
   Student,
   conners,
   snap_iv,
   sld_prs,
   baseUrl,
   updateInfo,
   deleteStu
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
     stuList: [],
     baseUrl: baseUrl
   },
   methods: {
     // 编辑学员信息
     handleEdit(e) {
       const student = new Student('update')
       let info = e.currentTarget.dataset.stu
       student.info = updateInfo(student.info, info)
       wx.navigateTo({
         url: '/pages/form/form?form=' + JSON.stringify(student.info)
       })
     },
     // 删除学员信息
     async handleDelete(e) {
       let info = e.currentTarget.dataset.stu
       const res = await deleteStu(info)
       console.log(res)
       if(res.code == 200){
        this.triggerEvent('refresh');
       }
     },
     // 调查报告填写函数
     async handleEvaluationSheets(e) {
      // 接收传过来的值，1，报告表名也就是数据表名。2，学员详细信息
       const table = e.currentTarget.dataset.table; // 获取数据表名
       const stu = e.currentTarget.dataset.stu;
       
       // 根据数据表名选择对应的表单信息
       if (stu[table] > 0 ) { // 如果报告已经填写
        let forminfo = {}; // 表单信息对象
         console.log('报告已填写')
         if (table == 'conners_t') {
           forminfo = new conners('update').info;
         } else if (table == 'snap_iv') {
           forminfo = new snap_iv('update').info;
         } else if (table == 'sld_prs_t') {
           forminfo = new sld_prs('update').info;
         }

         // 学生已有表单数据
         const res = await dataRequire(table, '', {
           stu_id: stu.stu_id
         }); // 请求表单数据

         let info = res.data[0]; // 获取第一条数据（假设只有一条）

         //  填充表单数据
         for (let i in info) {
           if (forminfo.form[i]) {
             forminfo.form[i].value = info[i];
           }
         }

         wx.navigateTo({
           url: '/pages/form/form?form=' + JSON.stringify(forminfo) + '&stu=' + JSON.stringify(stu),
         });
      
       } else { // 如果报告未填写

        let forminfo = {}; // 表单信息对象
         console.log('报告未填写')
         if (table == 'conners_t') {
           forminfo = new conners('insert').info;
         } else if (table == 'snap_iv') {
           forminfo = new snap_iv('insert').info;
         } else if (table == 'sld_prs_t') {
           forminfo = new sld_prs('insert').info;
         }
         // 加入教师信息和学生信息
         forminfo.form.stu_id.value = stu.stu_id
         forminfo.form.teacher_id.value = stu.teacher_id

         // 跳转到表单页面
         wx.navigateTo({
           url: '/pages/form/form?form=' + JSON.stringify(forminfo) + '&stu=' + JSON.stringify(stu),
         });
       }
     }
   }
 })