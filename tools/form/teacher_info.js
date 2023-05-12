const schoolBox = [  "北京市中山实验学校（小学部）",  "北京市昌平区城关小学",  "北京市昌平区七里渠中心小学",  "北京市昌平区平西府中心小学",  "北京市育荣实验学校（小学部）",  "北京昌平第二实验小学（昌平二小）",  "北京市昌平区霍营中心小学",  "北京市昌平区北七家中心小学",  "北京市昌平区小汤山中心小学",  "北京市城北中心六街小学",  "北京私立汇佳学校（小学部）",  "北京市昌平区城北中心三街小学",  "北京市昌平区昌盛园小学",  "北京市昌平区实验小学",  "北京市昌平区长陵中心小学",  "北京市昌平区天通苑小学",  "北京市昌平区回龙观第二小学（回龙观二小）",  "北京市昌平区南邵中心小学",  "北京市昌平区马池口镇中心小学",  "北京市昌平区回龙观中心小学"]

// 岗位选项
const positionBox = ['班主任', '教师', '校长', '其它']
const gradeBox = ['幼儿园', '学前班', '一年级', '二年级', '三年级', '四年级', '五年级',  '六年级' ]
const classBox = ["一班", "二班", "三班", "四班", "五班", "六班", "七班", "八班", "九班", "十班", "十一班", "十二班", "十三班", "十四班", "十五班", "十六班"]

export const schoolOptions = schoolBox.map((item) => ({
  label: item,
  value: item
}));

const positionOptions = positionBox.map((item) => ({
  label: item,
  value: item
}));

export const gradeOptions = gradeBox.map((item) => ({
  label: item,
  value: item
}));

export const classOptions = classBox.map((item) => ({
  label: item,
  value: item
}));

// 教师信息表
export const teacher_info = {
  title: {
    value: '教师注册信息',
    disable: true
  },
  table: 'teacher',
  database: 'mck_school',
  key: 'id',
  notes: {
    value: '教师注册页面',
    disable: true
  },
  submitTitle: '注册',
  form: {
    id: {
      value: null,
      component: 'input',
      name: 'id',
      label: '教师ID',
      placeholder: '',
      type: 'int',
      isHide: true,
      disable: true,
    },
    register_time: {
      value: new Date().toLocaleDateString('zh-CN'),
      component: 'date-picker',
      name: 'register_time',
      label: '注册时间',
      placeholder: '',
      type: 'string',
      isHide: true
    },
    name: {
      value: null, // 值
      component: 'input', //所需组件
      name: 'name', // 属性名
      label: '教师姓名',  // label
      placeholder: '请输入',  // 占位文字
      type: 'string', // 需要的值类型
      icon: 'user-circle',  // 图标
      isHide: false, //是否隐藏
      isRequired: true, // 必填项
      disable: false, //是否进入sql语句
      keyboard: 'text', // 键盘类型
      length: 12
    },
    position: {
      value: null,
      component: 'picker',
      name: 'position',
      label: '当前岗位',
      placeholder: '',
      type: 'string',
      selectList: positionOptions,
      icon: 'flag',
      isRequired: true
    },
    school: {
      value: null,
      component: 'picker',
      name: 'school',
      label: '所在学校',
      placeholder: '',
      type: 'string',
      selectList: schoolOptions,
      icon: 'internet',
      isRequired: true
    },
    grade: {
      value: null,
      component: 'picker',
      name: 'grade',
      label: '年级',
      placeholder: '',
      type: 'string',
      selectList: gradeOptions,
      icon: 'layers'
    },
    class: {
      value: null,
      component: 'picker',
      name: 'class',
      label: '所在班级',
      placeholder: '',
      type: 'string',
      selectList: classOptions,
      icon: 'fork'
    },
    phone: {
      value: null,
      component: 'input',
      name: 'phone',
      label: '手机号码',
      placeholder: '请输入',
      type: 'string',
      icon: 'mobile',
      isRequired: true,
      keyboard: "number",
      length: 12
    },
    security_code: {
      value: null,
      component: 'security_code',
      name: 'security_code',
      label: '验证码',
      placeholder: '',
      type: 'string',
      disable: true,
      icon: 'error-circle',
      isRequired: true
    },
  }
}