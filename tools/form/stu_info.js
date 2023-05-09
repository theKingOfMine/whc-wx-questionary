// 学员信息表
export const stu_info = [
  {
    title: '学生基础信息',
    form: [
      {
        label: '头像',
        name: 'head_img',
        value: null,
        component: 'input',
        placeholder: '',
        type: 'string',
      },
      {
        label: '登记时间',
        name: 'register_time',
        value: new Date().toLocaleDateString('zh-CN'),
        component: 'date-picker',
        placeholder: '',
        type: 'string',
      },
      {
        label: '姓名',
        name: 'name',
        value: null,
        component: 'input',
        placeholder: '',
        type: 'string',
      },
      {
        label: '性别',
        name: 'sex',
        value: null,
        component: 'checkBox',
        placeholder: '',
        type: 'string',
        selectList: ['男', '女'],
      },
      {
        label: '年龄',
        name: 'age',
        value: null,
        component: 'select',
        placeholder: '',
        type: 'int',
        selectList: Array. from({ length: 20 }, (_, i) => i + 2),
      },
      {
        label: '年级',
        name: 'class',
        value: null,
        component: '',
        placeholder: '',
        type: 'string',
      },
      {
        label: '填表人(老师)',
        name: 'teacher',
        value: null,
        component: 'input',
        placeholder: '',
        type: 'string',
      },
      {
        label: '岗位',
        name: 'position',
        value: null,
        component: 'input',
        placeholder: '',
        type: 'string',
      },
      {
        label: '资源教室',
        name: 'resource_class',
        value: null,
        component: 'input',
        placeholder: '',
        type: 'string',
      },
    ]
  }
]