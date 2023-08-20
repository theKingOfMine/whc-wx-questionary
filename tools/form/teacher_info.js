import { formattedDateTime, school } from "./utils"


// -- form --
// label: 组件标签名称
// name: 字段名称
// type: 数据类型
// value: 数据值
// component: 用的组件
// selectList: 如果组件是select, 要展示的数组数据：school.positionBox.map((item) => ({ label: item, value: item }))
// placeholder: 提示文字
// isHide: 是否隐藏当前字段的填写。默认数据依然会上传到数据库
// disable: 当前字段是否可以插入数据库 -- 是否要上传到数据库
// isReadonly: 是否为只读，不需更改
// isRequired: 是否为必填，
// keyboard: 需要的键盘类型
// length: 数据最长长度
// icon: 图标



// 根据目的处理数据，askfor == register || insert || update
const handlerForm = (askfor) => {
  return {
    teacher_id: {
      label: '教师ID',
      name: 'teacher_id',
      type: 'int',
      value: null,
      component: 'input',
      placeholder: '教师登记唯一编码',
      isHide: askfor == 'insert' || askfor == 'register' ? true : false, // 如果是登记或插入则隐藏，如果是更新则显示
      disable: true, // 教师ID不可修改
      isReadonly: true,
      isRequired: false,
      keyboard: 'text',
      length: null,
      icon: 'barcode'
    },
    register_time: {
      label: '注册时间',
      name: 'register_time',
      type: 'string',
      value: (formattedDateTime)(),
      component: 'datetime',
      placeholder: null,
      isHide: askfor == 'insert' || askfor == 'register' ? true : false, 
      disable: false,
      isReadonly: true,
      isRequired: true,
      keyboard: 'text',
      length: null,
      icon: 'calendar'
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
      icon: 'browse'
    },
    name: {
      label: '教师姓名',
      name: 'name',
      type: 'string',
      value: null,
      component: 'input',
      placeholder: '请输入姓名',
      isHide: false,
      disable: false,
      isReadonly: false,
      isRequired: true,
      keyboard: 'text',
      length: 15,
      icon: 'user-circle',
    },
    position: {
      label: '当前职位',
      name: 'position',
      value: null,
      type: 'string',
      component: 'select',
      placeholder: '',
      selectList: school.positionBox.map((item) => ({ label: item, value: item })),
      isHide: false,
      disable: false,
      isReadonly: false,
      isRequired: false,
      keyboard: 'text',
      length: null,
      icon: 'flag',
    },
    school: {
      label: '所在学校',
      name: 'school',
      value: null,
      type: 'string',
      component: 'select',
      placeholder: '',
      selectList: school.nameBox.map((item) => ({ label: item, value: item })),
      isHide: false,
      disable: false,
      isReadonly: false,
      isRequired: true,
      keyboard: 'text',
      length: null,
      icon: 'internet',
    },
    grade: {
      label: '年级',
      name: 'grade',
      value: null,
      type: 'string',
      component: 'select',
      placeholder: '',
      selectList: school.gradeBox.map((item) => ({ label: item, value: item })),
      isHide: false,
      disable: false,
      isReadonly: false,
      isRequired: true,
      keyboard: 'text',
      length: null,
      icon: 'layers'
    },
    class: {
      label: '所在班级',
      name: 'class',
      value: null,
      type: 'string',
      component: 'select',
      placeholder: '',
      selectList: school.classBox.map((item) => ({ label: item, value: item })),
      isHide: false,
      disable: false,
      isReadonly: false,
      isRequired: true,
      keyboard: 'text',
      length: null,
      icon: 'fork'
    },
    phone: {
      label: '手机号码',
      name: 'phone',
      value: null,
      type: 'string',
      component: 'input',
      placeholder: '请输入',
      isHide: false,
      disable: false,
      isReadonly: false,    
      isRequired: true,
      keyboard: 'number',
      length: 11,
      icon: 'mobile',
    },
    wx_openid: {
      label: '微信唯一ID',
      name: 'wx_openid',
      value: wx.getStorageSync('openid'),
      type: 'string',
      component: 'input',
      placeholder: '请输入',
      isHide: true,
      disable: false,
      isReadonly: true,
      isRequired: false,
      keyboard: null,
      length: null,
      icon: null,
    }
  }
}


// 教师信息表
export class Teacher {
  constructor(askfor){
    this.info = {
      title: {
        value: '教师信息详情',
        isHide: askfor == 'register' || askfor == 'insert' ? true : false
      },
      table: 'teacher',
      database: 'mck_school',
      key: 'teacher_id',
      askfor: askfor,
      notes: {
        value: '教师信息详情表',
        isHide: true
      },
      search: {
        isHide: true,
        table: 'teacher',
        placeholder: '请输入教师姓名',
        label: '搜索教师',
        key: ['register_time', 'name']
      },
      submitTitle: askfor == 'insert' || askfor == 'register' ? '登记个人教职信息' : '更新个人教职信息',
      form: (handlerForm(askfor))
    }
  }
}