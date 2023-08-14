import {
  school,
  formattedDateTime
} from "./utils"

const teacher_id = wx.getStorageSync('teacher_id')
export class Student {
  constructor(askfor) {
    this.info = {
      title: {
        isHide: false,
        value: '学生信息表'
      },
      table: 'stu',
      database: 'whc_server',
      key: 'stu_id',
      askfor: askfor ? askfor : 'insert',
      search: {
        isHide: false,
        table: 'teacher',
        placeholder: '请输入老师姓名',
        label: '搜索老师',
        key: ['register_time', 'name']
      },
      notes: {
        isHide: true,
        value: '注：学生信息资料'
      },
      submitTitle:  askfor == 'insert' ? '登记学生数据' : '更新学生数据',
      form: {
        stu_id: {
          value: null,
          label: '学生ID',
          name: 'stu_id',
          component: 'input',
          placeholder: '',
          type: 'int',
          icon: '',
          isHide: askfor == 'insert' ? true : false,
          disable: askfor == 'insert' ? true : false,
          isReadonly: true,
          isRequired: false
        },
        teacher_id: {
          value: teacher_id,
          label: '教师ID',
          name: 'teacher_id',
          component: 'input',
          placeholder: '',
          type: 'int',
          icon: '',
          isHide: false,
          isRequired: false,
          disable: false,
          isReadonly: true
        },
        register_time: {
          value: (formattedDateTime)(),
          label: '注册时间',
          name: 'register_time',
          component: 'date-time-picker',
          placeholder: '',
          type: 'string',
          icon: '',
          isHide: false,
          isRequired: true,
          disable: false,
        },
        head_img: {
          value: null,
          label: '个人照片',
          name: 'head_img',
          component: 'upload_img',
          placeholder: '请上传清晰的面部形象照片',
          type: 'string'
        },
        name: {
          value: null,
          label: '学生姓名',
          name: 'name',
          component: 'input',
          placeholder: '请输入',
          type: 'string',
          isHide: false,
          isRequired: true,
          disable: false,
          keyboard: 'text',
          length: 12
        },
        sex: {
          value: null,
          label: '性别',
          name: 'sex',
          component: 'select',
          selectList: school.sexBox.map((item) => ({ label: item, value: item })),
          placeholder: '',
          type: 'string',
          icon: '',
          isHide: false,
          isRequired: true,
          disable: false,
          keyboard: 'text',
          length: 6,
        },
        age: {
          value: null,
          label: '年龄',
          name: 'age',
          component: 'select',
          placeholder: '',
          selectList: school.ageBox.map((item) => ({ label: item, value: item })),
          type: 'int',
          icon: '',
          isHide: false,
          isRequired: true,
          disable: false,
          keyboard: 'number',
          length: null
        },
        born: {
          value: (formattedDateTime)(-10),
          label: '出生日期',
          name: 'born',
          component: 'date-picker',
          placeholder: '',
          type: 'string',
          icon: '',
          isHide: false,
          isRequired: true,
          disable: false
        },
        grade: {
          value: null,
          label: '年级',
          name: 'grade',
          component: 'select',
          selectList: school.gradeBox.map((item) => ({ label: item, value: item })),
          placeholder: '',
          type: 'string',
          icon: '',
          isHide: false,
          isRequired: true,
          disable: false,
        },
        class: {
          value: null,
          label: '班级',
          name: 'class',
          component: 'select',
          selectList: school.classBox.map((item) => ({ label: item, value: item })),
          placeholder: '',
          type: 'string',
          icon: '',
          isHide: false,
          isRequired: true,
          disable: false
        },
        school: {
          value: null,
          label: '学校',
          name: 'school',
          component: 'select',
          selectList: school.nameBox.map((item) => ({ label: item, value: item })),
          placeholder: '',
          type: 'string',
          icon: '',
          isHide: false,
          isRequired: true,
          disable: false
        },
        identity_card: {
          value: null,
          label: '身份证号',
          name: 'identity_card',
          component: 'input',
          placeholder: '',
          type: 'string',
          icon: '',
          isHide: false,
          isRequired: true,
          disable: false,
          keyboard: 'text',
          length: null
        },
        notes: {
          value: null,
          label: '备注',
          name: 'notes',
          component: 'input',
          placeholder: '',
          type: 'string',
          icon: '',
          isHide: false,
          isRequired: false,
          disable: false,
          keyboard: 'text',
          length: null
        },
        status: {
          value: null,
          label: '状态',
          name: 'status',
          component: 'select',
          placeholder: '',
          type: 'string',
          icon: '',
          isHide: false,
          isRequired: false,
          disable: false,
          keyboard: 'text',
          length: null,
          selectList: school.stuStatusBox.map((item) => ({ label: item, value: item }))
        },
        conners_t_score: {
          value: null,
          label: 'conners_t',
          name: 'conners_t_score',
          component: 'input',
          placeholder: '',
          type: 'int',
          icon: '',
          isHide: askfor == 'insert' ? true : false,
          isRequired: false,
          disable: true,
          isReadonly: true
        },
        sld_prs_t_score: {
          value: null,
          label: 'sld_prs_t',
          name: 'sld_prs_t_score',
          component: 'input',
          placeholder: '',
          type: 'int',
          icon: '',
          isHide: askfor == 'insert' ? true : false,
          isRequired: false,
          disable: true,
          isReadonly: true
        },
        sld_prs_t_langrage_score: {
          value: null,
          label: 'sld语言',
          name: 'sld_prs_t_langrage_score',
          component: 'input',
          placeholder: '',
          type: 'int',
          icon: '',
          isHide: askfor == 'insert' ? true : false,
          isRequired: false,
          disable: true,
          isReadonly: true
        },
        sld_prs_t_nonlangrage_score: {
          value: null,
          label: 'sld非语言',
          name: 'sld_prs_t_nonlangrage_score',
          component: 'input',
          placeholder: '',
          type: 'int',
          icon: '',
          isHide: askfor == 'insert' ? true : false,
          isRequired: false,
          disable: true,
          isReadonly: true
        },
        snap_iv_score: {
          value: null,
          label: 'snap_iv',
          name: 'snap_iv_score',
          component: 'input',
          placeholder: '',
          type: 'float',
          icon: '',
          isHide: askfor == 'insert' ? true : false,
          isRequired: false,
          disable: true,
          isReadonly: true
        }
      }
    }
  }
}