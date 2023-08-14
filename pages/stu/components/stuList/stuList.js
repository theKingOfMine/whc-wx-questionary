 import {
   dataRequire,
   Student,
   formUpload,
   conners_t_info,
   snap_iv_info,
   sld_prs_t_info,
   baseUrl,
   updateInfo
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
     handleDelete(e) {
       let info = e.currentTarget.dataset.stu
       wx.showModal({
         title: '请确定是否删除' + info.name + '的学生数据',
         content: '注：数据删除后将不可恢复，请慎重选择！',
         complete: async (res) => {
           if (res.confirm) {
             const res = await formUpload({
               askfor: 'delete',
               table: 'stu',
               key: {
                 name: 'stu_id',
                 value: info.stu_id,
                 type: 'int'
               }
             });
             if (res.code == 200) {
               wx.showToast({
                 title: '学员删除成功',
                 icon: 'success'
               })
               this.triggerEvent('refresh');
             } else {
              wx.showToast({
                title: '故障，删除失败',
                icon: 'error'
              })
             }
           }
         }
       })
     },
     /**
      * 处理评估表单的函数
      * @param {Object} e - 事件对象
      */
     async handleEvaluationSheets(e) {
       let table = e.currentTarget.dataset.table; // 获取数据表名
       let forminfo = {}; // 表单信息对象

       // 根据数据表名选择对应的表单信息
       if (table == 'conners_t') {
         forminfo = conners_t_info;
       } else if (table == 'snap_iv') {
         forminfo = snap_iv_info;
       } else if (table == 'sld_prs_t') {
         forminfo = sld_prs_t_info;
       }

       let stu = e.currentTarget.dataset.stu; // 获取学生信息
       forminfo.form.stu_id.value = stu.id; // 设置表单的学生 ID

       if (stu[table] != 0) {
         // 学生已有表单数据
         const res = await dataRequire(table, {
           stu_id: stu.id
         }); // 请求表单数据
         console.log(res);
         let info = res[0]; // 获取第一条数据（假设只有一条）
         forminfo.askfor = 'update'; // 设置表单操作类型为更新
         forminfo.submitTitle = '修改报告'; // 设置提交按钮文本

         // 填充表单数据
         for (let i in info) {
           if (forminfo.form[i]) {
             forminfo.form[i].value = info[i];
           }
         }

         wx.navigateTo({
           url: '/pages/form/form?form=' + JSON.stringify(forminfo) + '&stu=' + JSON.stringify(stu),
         });
       } else {
         // 学生没有表单数据
         forminfo.askfor = 'insert'; // 设置表单操作类型为插入
         forminfo.submitTitle = '提交报告'; // 设置提交按钮文本

         // 清空表单数据
         for (let i in forminfo.form) {
           if (forminfo.form[i].name.indexOf('question') !== -1) {
             forminfo.form[i].value = null;
           }
         }

         wx.navigateTo({
           url: '/pages/form/form?form=' + JSON.stringify(forminfo) + '&stu=' + JSON.stringify(stu),
         });
       }
     }
   }
 })