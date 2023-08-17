import {
  school,
  formattedDateTime,
  formUpload
} from "../tools.js"

const stuInfo = (askfor) => {

  const teacher_id = JSON.parse(wx.getStorageSync('info')).teacher_id;
  return {
    title: {
      isHide: false,
      value: '学生信息表'
    },
    table: 'stu',
    database: 'whc_server',
    key: 'stu_id',
    askfor: askfor ? askfor : 'insert',
    notes: {
      isHide: false,
      value: '注：为保证调查报告的准确性，请按照学生的真实信息详细填写。'
    },
    submitTitle: askfor == 'insert' ? '登记学生信息' : '更新学生信息',
    form: {
      stu_id: {
        label: '学生ID',
        name: 'stu_id',
        type: 'int',
        value: null,
        component: 'input',
        placeholder: '',
        isHide: askfor == 'insert' ? true : false,
        disable: askfor == 'insert' ? true : false,
        isReadonly: true,
        isRequired: true,
        keyboard: 'text',
        length: null,
        icon: '',
      },
      teacher_id: {
        label: '教师ID',
        name: 'teacher_id',
        type: 'int',
        value: askfor == 'insert' ? teacher_id : null,
        component: 'input',
        placeholder: '教师登记唯一编码',
        isHide: askfor == 'insert' ? true : false,
        disable: false, // 教师ID不可修改
        isReadonly: true,
        isRequired: true,
        keyboard: 'text',
        length: null,
        icon: ''
      },
      register_time: {
        label: '注册时间',
        name: 'register_time',
        type: 'string',
        value: (formattedDateTime)(),
        component: 'datetime',
        placeholder: '',
        isHide: false,
        disable: false,
        isReadonly: false,
        isRequired: true,
        keyboard: 'text',
        length: null,
        icon: '',
      },
      head_img: {
        label: '个人照片',
        name: 'head_img',
        type: 'string',
        value: null,
        component: 'upload_img',
        placeholder: '请上传清晰的面部形象照片',
        isHide: false,
        disable: false,
        isReadonly: false,
        isRequired: true,
        keyboard: 'text',
        length: null,
        icon: '',
      },
      name: {
        label: '姓名',
        name: 'name',
        type: 'string',
        value: null,
        component: 'input',
        placeholder: '请输入',
        isHide: false,
        disable: false,
        isReadonly: false,
        isRequired: true,
        keyboard: 'text',
        length: 12,
        icon: '',
      },
      sex: {
        label: '性别',
        name: 'sex',
        type: 'string',
        value: null,
        component: 'select',
        placeholder: '',
        selectList: school.sexBox.map((item) => ({
          label: item,
          value: item
        })),
        isHide: false,
        disable: false,
        isReadonly: false,
        isRequired: true,
        keyboard: 'text',
        length: 6,
        icon: '',
      },
      age: {
        label: '年龄',
        name: 'age',
        type: 'int',
        value: null,
        component: 'select',
        placeholder: '',
        selectList: school.ageBox.map((item) => ({
          label: item,
          value: item
        })),
        isHide: false,
        disable: false,
        isReadonly: false,
        isRequired: true,
        keyboard: 'number',
        length: null,
        icon: '',
      },
      born: {
        label: '出生日期',
        name: 'born',
        type: 'string',
        value: (formattedDateTime)(-10),
        component: 'date-picker',
        placeholder: '',
        isHide: false,
        disable: false,
        isReadonly: false,
        isRequired: true,
        keyboard: 'text',
        length: null,
        icon: '',
      },
      grade: {
        label: '年级',
        name: 'grade',
        type: 'string',
        value: null,
        component: 'select',
        placeholder: '',
        selectList: school.gradeBox.map((item) => ({
          label: item,
          value: item
        })),
        isHide: false,
        disable: false,
        isReadonly: false,
        isRequired: true,
        keyboard: 'text',
        length: null,
        icon: '',
      },
      class: {
        label: '班级',
          name: 'class',
          type: 'string',
          value: null,
          component: 'select',
          placeholder: '',
          selectList: school.classBox.map((item) => ({
            label: item,
            value: item
          })),
          isHide: false,
          disable: false,
          isReadonly: false,
          isRequired: true,
          keyboard: 'text',
          length: null,
          icon: '',
      },
      school: {
        label: '学校',
        name: 'school',
        type: 'string',
        value: null,
        component: 'select',
        placeholder: '',
        selectList: school.nameBox.map((item) => ({
          label: item,
          value: item
        })),
        isHide: false,
        disable: false,
        isReadonly: false,
        isRequired: true,
        keyboard: 'text',
        length: null,
        icon: '',
      },
      identity_card: {
        label: '身份证号',
        name: 'identity_card',
        type: 'string',
        value: null,
        component: 'input',
        placeholder: '',
        isHide: false,
        disable: false,
        isReadonly: false,
        isRequired: true,
        keyboard: 'text',
        length: 23,
        icon: '',
      },
      notes: {
        label: '备注',
        name: 'notes',
        type: 'string',
        value: null,
        component: 'input',
        placeholder: '',
        isHide: false,
        disable: false,
        isReadonly: false,
        isRequired: false,
        keyboard: 'text',
        length: null,
        icon: '',
      },
      status: {
        label: '状态',
        name: 'status',
        type: 'string',
        value: null,
        component: 'select',
        placeholder: '',
        selectList: school.stuStatusBox.map((item) => ({
          label: item,
          value: item
        })),
        isHide: false,
        disable: false,
        isReadonly: false,
        isRequired: false,
        keyboard: 'text',
        length: null,
        icon: '',
      }
    }
  }
}

export class Student {
  constructor(askfor) {
    this.info = stuInfo(askfor)
  }
}
// 删除学生数据，参数为学生信息
export const deleteStu = (info)=>{
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: '请确认是否删除学生' + info.name + '的相关数据',
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
              title: '学生信息已删除',
              icon: 'success'
            })
            
          } else {
            wx.showToast({
              title: '故障，删除失败',
              icon: 'error'
            })
          }
          resolve({code: res.code})
        }else{
          resolve({code: 400}) 
        }
      }
    })



  })
}



// export const _deleteStu = (info) => {
//   wx.showModal({
//     title: '请确认是否删除学生' + info.name + '的相关数据',
//     content: '注：数据删除后将不可恢复，请慎重选择！',
//     complete: async (res) => {
//       if (res.confirm) {
//         const res = await formUpload({
//           askfor: 'delete',
//           table: 'stu',
//           key: {
//             name: 'stu_id',
//             value: info.stu_id,
//             type: 'int'
//           }
//         });
//         if (res.code == 200) {
//           wx.showToast({
//             title: '学生' +  info.name + '的信息已删除成功',
//             icon: 'success'
//           })
//           return {code: 200}
//         } else {
//           wx.showToast({
//             title: '故障，删除失败',
//             icon: 'error'
//           })
//           return {code : 400}
//         }
//       }
//     }
//   })
// }