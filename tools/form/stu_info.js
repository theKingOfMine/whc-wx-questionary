const sexBox = ['男生', '女生']
const ageBox = Array.from({length: 20}, (_, i) => i + 2)
import {gradeOptions, classOptions, schoolOptions} from "./teacher_info"
import {formattedDateTime} from "../normal"
const teacher_id = wx.getStorageSync('teacher_id')

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
    value: '注：全部为必填信息',
    isHide: false
  },
  submitTitle: '登记',
  form: {
    id: {
      value: null,
      label: '学员ID',
      name: 'id',
      component: 'input',
      placeholder: '',
      type: 'int',
      isHide: true,
      disable: true
    },
    teacher_id: {
      value: teacher_id,
      label: '教师ID',
      name: 'teacher',
      component: 'input',
      placeholder: '',
      type: 'int',
      isHide: true
    },
    head_img: {
      value: null,
      label: '个人照片',
      name: 'head_img',
      component: 'upload',
      placeholder: '请上传清晰的面部形象照片',
      type: 'string',
    },
    register_time: {
      value: (formattedDateTime)(),
      label: '登记时间',
      name: 'register_time',
      component: 'datetime',
      placeholder: '',
      type: 'string',
      isHide: true
    },
    name: {
      value: null,
      label: '姓名',
      name: 'name',
      component: 'input',
      placeholder: '',
      type: 'string',
    },
    sex: {
      value: null,
      label: '性别',
      name: 'sex',
      component: 'radio',
      placeholder: '',
      type: 'string',
      selectList: sexOptions
    },
    age: {
      value: null,
      label: '年龄',
      name: 'age',
      component: 'picker',
      placeholder: '',
      type: 'int',
      selectList: ageOptions
    },
    born: {
      value: null,
      label: '出生日期',
      name: 'born',
      component: 'datetime',
      placeholder: '',
      type: 'string'
    },
    grade: {
      value: null,
      label: '年级',
      name: 'grade',
      component: 'picker',
      placeholder: '',
      type: 'string',
      selectList: gradeOptions
    },
    class: {
      value: null,
      label: '所在班级',
      name: 'class',
      component: 'picker',
      placeholder: '',
      type: 'string',
      selectList: classOptions
    },
    school: {
      value: null,
      label: '所在学校',
      name: 'school',
      component: 'picker',
      placeholder: '',
      type: 'string',
      selectList: schoolOptions
    }

  }
}