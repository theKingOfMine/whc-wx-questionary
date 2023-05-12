const sexBox = ['男生', '女生']
const ageBox = Array.from({length: 20}, (_, i) => i + 2)
import {gradeOptions, classOptions, schoolOptions} from "./teacher_info"

const sexOptions = sexBox.map((item) => ({
  label: item,
  value: item
}));

const ageOptions = ageBox.map((item) => ({
  label: item,
  value: item
}));

// 学员信息表
export const stu_info = {
  title: {
    value: '学生信息登记表',
    isHide: false
  },
  table: 'stu',
  database: 'mck_school',
  key: 'id',
  notes: {
    value: '请填写学生信息',
    isHide: false
  },
  submitTitle: '登记',
  form: {
    id: {
      label: '学员ID',
      name: 'id',
      value: null,
      component: 'input',
      placeholder: '',
      type: 'int',
      isHide: true,
      disable: true
    },
    head_img: {
      label: '个人照片',
      name: 'head_img',
      value: null,
      component: 'upload',
      placeholder: '',
      type: 'string',
    },
    register_time: {
      label: '登记时间',
      name: 'register_time',
      value: new Date().toLocaleDateString('zh-CN'),
      component: 'datetime',
      placeholder: '',
      type: 'string',
      isHide: true
    },
    name: {
      label: '姓名',
      name: 'name',
      value: null,
      component: 'input',
      placeholder: '',
      type: 'string',
    },
    sex: {
      label: '性别',
      name: 'sex',
      value: null,
      component: 'picker',
      placeholder: '',
      type: 'string',
      selectList: sexOptions
    },
    age: {
      label: '年龄',
      name: 'age',
      value: null,
      component: 'picker',
      placeholder: '',
      type: 'int',
      selectList: ageOptions
    },
    born: {
      label: '出生日期',
      name: 'born',
      value: null,
      component: 'datetime',
      placeholder: '',
      type: 'string'
    },
    grade: {
      value: null,
      component: 'picker',
      name: 'grade',
      label: '年级',
      placeholder: '',
      type: 'string',
      selectList: gradeOptions
    },
    class: {
      value: null,
      component: 'picker',
      name: 'class',
      label: '所在班级',
      placeholder: '',
      type: 'string',
      selectList: classOptions
    },
    school: {
      value: null,
      component: 'picker',
      name: 'school',
      label: '所在学校',
      placeholder: '',
      type: 'string',
      selectList: schoolOptions
    },
    teacher_id: {
      label: '教师ID',
      name: 'teacher',
      value: null,
      component: 'input',
      placeholder: '',
      type: 'int',
      isHide: true
    }

  }
}